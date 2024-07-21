<template>
  <div>
    <div class="container mx-auto px-4 py-20 relative">
      <UserProfile
          :img="base64Image"
          :name="form.fullName"
          :points="totalPoint"
          :pageType="'change'"
          :isEditing="isEditing"
          class="floating-profile"
          @click="toggleEdit"
      />

      <div class="icon-container">
        <img src="../assets/icon/ic_arrow_left_alt.png" @click="goBack" alt="Back Icon" width="24" height="24">
        <img alt="Upload Image Icon" height="24" src="../assets/icon/ic_upload_photo.png" width="24"
             @click="handleUpload">
      </div>
    </div>
    <div class="form-container mx-auto px-4 py-8 mb-8">
      <div class="form-group">
        <label for="fullName" class="form-label">Nama Lengkap</label>
        <input
            type="text"
            id="fullName"
            v-model="form.fullName"
            class="form-input"
            placeholder="Masukkan nama lengkap"
            :disabled="!isEditing"
            ref="fullName"
            :class="{ 'is-invalid': errors.fullName }"
        >
        <div v-if="errors.fullName" class="invalid-feedback">
          {{ errors.fullName }}
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Kata Sandi</label>
        <input
            type="password"
            id="password"
            v-model="form.password"
            class="form-input"
            placeholder="Masukkan kata sandi"
            :disabled="!isEditing"
            ref="password"
            :class="{ 'is-invalid': errors.password }"
        >
        <div v-if="errors.password" class="invalid-feedback">
          {{ errors.password }}
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Surat Elektronik</label>
        <input
            type="email"
            id="email"
            v-model="form.email"
            class="form-input"
            placeholder="Masukkan email"
            :disabled="true"
            ref="email"
            :class="{ 'is-invalid': errors.email }"
        >
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>
      <div class="form-group">
        <label for="birthPlace" class="form-label">Tempat Lahir</label>
        <input
            type="text"
            id="birthPlace"
            v-model="form.birthPlace"
            class="form-input"
            placeholder="Masukkan tempat lahir"
            :disabled="!isEditing"
            ref="birthPlace"
            :class="{ 'is-invalid': errors.birthPlace }"
        >
        <div v-if="errors.birthPlace" class="invalid-feedback">
          {{ errors.birthPlace }}
        </div>
      </div>
      <div class="form-group">
        <label for="birthDate" class="form-label">Tanggal Lahir</label>
        <input
            type="date"
            id="birthDate"
            v-model="form.birthDate"
            class="form-input"
            @change="formatBirthDate"
            :disabled="!isEditing"
            ref="birthDate"
            :class="{ 'is-invalid': errors.birthDate }"
        >
        <div v-if="errors.birthDate" class="invalid-feedback">
          {{ errors.birthDate }}
        </div>
      </div>

      <LoadingOverlay v-if="showLoading" :showLoading="showLoading"/>

      <UploadImagePopup v-model="showPopup" @upload="handleUpload"/>
    </div>

    <NavBottom class="z-10"/>
  </div>
</template>

<script setup>
import UserProfile from '@/components/UserProfile.vue';
import NavBottom from '@/components/NavBottom.vue';
import UploadImagePopup from '@/components/dialog/UploadImagePopup.vue';
import LoadingOverlay from '../components/showLoading.vue'; // Import LoadingOverlay component
import {nextTick, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {getAuth, updatePassword} from 'firebase/auth';
import {doc, getDoc, getFirestore, updateDoc} from 'firebase/firestore';
import {useStore} from 'vuex';
import {useFirebase} from "../composables/firebase.js";

const {auth, db} = useFirebase();

const router = useRouter();
const form = ref({
  fullName: '',
  password: '',
  email: '',
  birthPlace: '',
  birthDate: ''
});
const formattedBirthDate = ref('');
const isEditing = ref(false);
const showPopup = ref(false);
const errors = ref({});
const store = useStore();
const showLoading = ref(false); // Add showLoading ref

let parsedUserData;

const userName = ref(''); // Create a ref to store the user's name
const userPassword = ref('');
const userEmail = ref('');
const userTempatLahir = ref('');
const userDOB = ref('');
const totalPoint = ref('');

const base64Image = ref('');

const formatBirthDate = () => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  formattedBirthDate.value = new Date(form.value.birthDate).toLocaleDateString(
      'id-ID',
      options
  );
};

const toggleEdit = () => {
  errors.value = {}; // Reset error messages

  isEditing.value = !isEditing.value;

  if (!isEditing.value) {
    validateForm();

    if (Object.keys(errors.value).length > 0) {
      isEditing.value = true;
    }
  }

  nextTick(() => {
    fullNameRef.value.disabled = !isEditing.value;
    passwordRef.value.disabled = !isEditing.value;
    // emailRef.value.disabled = !isEditing.value;
    birthPlaceRef.value.disabled = !isEditing.value;
    birthDateRef.value.disabled = !isEditing.value;
  });
};

const goBack = () => {
  router.go(-1); // Gunakan $router.go untuk kembali ke halaman sebelumnya
};

const showUploadPopup = () => {
  showPopup.value = true;
};

const handleUpload = async (file) => {
  showPopup.value = true;

  console.log("Masuk ke function handleUpload");

  if (file) {
    try {
      console.log("Masuk ke function handleUpload - try section");

      // Show the loading indicator
      showLoading.value = true;

      // Convert the image to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async (e) => {
        const base64Image = e.target.result;

        // Update the user's document in Firestore
        const userDocRef = doc(db, 'users', parsedUserData.uid);
        const userDoc = await getDoc(userDocRef);

        // Update the displayPicture field with the base64 data
        await updateDoc(userDocRef, {
          displayPicture: base64Image,
        });

        console.log('Image uploaded and user document updated successfully!');

        // Update the displayPicture in Vuex
        // store.commit('updateDisplayPicture', base64Image);

        // Hide the loading indicator
        showLoading.value = false;

        // Close the popup or perform other actions
        showPopup.value = false;
      };
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle the error, for example, display an error message to the user
      // Hide the loading indicator
      showLoading.value = false;
    }
  } else {
    console.error('No file selected.');
    // Handle the case where no file is selected
  }
};

const validateForm = () => {
  errors.value = {};

  if (!form.value.fullName) {
    errors.value.fullName = 'Nama lengkap harus diisi';
  }

  // if (!form.value.password) {
  //   errors.value.password = 'Kata sandi harus diisi';
  // }

  if (!form.value.email) {
    errors.value.email = 'Email harus diisi';
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = 'Email tidak valid';
  }

  if (!form.value.birthPlace) {
    errors.value.birthPlace = 'Tempat lahir harus diisi';
  }

  if (!form.value.birthDate) {
    errors.value.birthDate = 'Tanggal lahir harus diisi';
  }
};


const updatePasswordInAuth = async () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    try {
      await updatePassword(user, form.value.password);
      console.log('Password updated successfully!');
    } catch (error) {
      console.error('Failed to update password:', error);
    }
  } else {
    console.error('No user signed in.');
  }
};

const updateDataInFirestore = async () => {
  const db = getFirestore();
  const userDocRef = doc(db, 'users', user.uid);

  try {
    await updateDoc(userDocRef, {
      fullName: form.value.fullName,
      email: form.value.email,
      birthPlace: form.value.birthPlace,
      birthDate: form.value.birthDate,
    });
    console.log('User data updated successfully!');
  } catch (error) {
    console.error('Failed to update user data:', error);
  }
};

onMounted(async () => {
  const userData = localStorage.getItem('userData');

  if (userData) {
    parsedUserData = JSON.parse(userData);

    // Fetch user data and store it in Vuex
    await store.dispatch('fetchUserData', parsedUserData.uid);

    // Now you can use parsedUserData.name
    form.value.fullName = store.state.userData.name;
    form.value.password = store.state.userData.password;
    form.value.email = store.state.userData.email;
    form.value.birthPlace = store.state.userData.placeOfBirth;
    form.value.birthDate = store.state.userData.dateOfBirth;
    totalPoint.value = store.state.userData.totalPoint;
    formatBirthDate();

    const fetchedBase64Image = store.state.userData.displayPicture;

    console.log("isi base64Image : " + fetchedBase64Image);

    if (fetchedBase64Image) {
      // Set base64 image directly
      base64Image.value = fetchedBase64Image; // Set nilai ke base64Image
    } else {
      // Handle error, e.g., set a default image
      base64Image.value = 'default_image.png'; // Ganti dengan gambar default Anda
    }
  } else {
    // Handle the case where userData is not found
    console.log("User data not found in localStorage");
  }
});

const fullNameRef = ref(null);
const passwordRef = ref(null);
const emailRef = ref(null);
const birthPlaceRef = ref(null);
const birthDateRef = ref(null);

</script>

<style scoped>
.container {
  background-image: url("../assets/gambar/background_profile.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.floating-profile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
}

.form-container {
  margin-top: 60px;
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.hidden-date-input {
  display: none;
}

.formatted-date {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  color: #333;
}

.btn-edit {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-edit:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

.icon-container {
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}

.icon-container img {
  cursor: pointer;
}

/* Bootstrap-inspired styling for validation */
.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  margin-top: .25rem;
  font-size: .875em;
  color: #dc3545;
}
</style>