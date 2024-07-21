<template>
  <div class="container mx-auto p-4">
    <NuxtLink to="/">
      <img alt="" src="/img/svg/arrow_left_alt.svg">
    </NuxtLink>
    <div class="grid content-center">
      <img alt="" class="w-28 mx-auto mb-10 mt-6" src="/img/logo.png">
      <h3 class="font-bold text-3xl">Mendaftar</h3>
      <p class="text-sm italic">Masukkan informasi pribadi untuk mendaftar.</p>

      <form @submit.prevent="register">
        <div class="grid gap-6 mt-4">
          <FormsInput
              id="nama"
              v-model="name"
              label="Nama"
              placeholder="Tuliskan Nama"
              type="text"
              @input="updateName"
          />

          <FormsInput
              id="surat-elektronik"
              v-model="email"
              label="Surat Elektronik"
              placeholder="Tuliskan Surat Elektronik"
              type="email"
              @input="updateEmail"
          />

          <FormsInput
              id="kata-sandi"
              v-model="password"
              label="Kata Sandi"
              placeholder="Tuliskan Kata Sandi"
              type="password"
              @input="updatePassword"
          />

          <FormsInput
              id="konfirmasi-kata-sandi"
              v-model="cPassword"
              label="Konfirmasi Kata Sandi"
              placeholder="Konfirmasi Kata Sandi"
              type="password"
              @input="updateRepeatPassword"
          />

          <FormsInput
              id="tempat-lahir"
              v-model="placeOfBirth"
              label="Tempat Lahir"
              placeholder="Tuliskan Tempat Lahir"
              type="text"
              @input="updatePlaceOfBirth"
          />

          <FormsInput
              id="tanggal-lahir"
              v-model="dateOfBirth"
              label="Tanggal Lahir"
              placeholder="Tuliskan Tanggal Lahir"
              type="date"
              @input="updateDateOfBirth"
          />
        </div>
        <button :disabled="isLoading"
                class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4"
                type="submit">Mendaftar
        </button>
        <p v-if="error" class="text-sm italic text-red-600">{{ error }}</p> <!-- Display error message -->
      </form>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useFirebase} from '../composables/firebase';
import {doc, getDoc, setDoc, Timestamp} from "firebase/firestore";
import {useStore} from 'vuex';

const router = useRouter();
const {auth, createUserWithEmailAndPassword, db} = useFirebase();
const store = useStore(); // Get the Vuex store instance

const email = ref('');
const password = ref('');
const cPassword = ref('');
const name = ref(''); // New ref for user name
const placeOfBirth = ref(''); // New ref for place of birth
const dateOfBirth = ref(''); // New ref for date of birth
const error = ref(null);
const isLoading = ref(false);

const updateEmail = (event) => {
  email.value = event.target.value;
};

const updatePassword = (event) => {
  password.value = event.target.value;
};

const updateRepeatPassword = (event) => {
  cPassword.value = event.target.value;
};

const updateName = (event) => {
  name.value = event.target.value;
};

const updatePlaceOfBirth = (event) => {
  placeOfBirth.value = event.target.value;
};

const updateDateOfBirth = (event) => {
  dateOfBirth.value = event.target.value;
};

onMounted(() => {
  // console.log("Lihat store : " + store.state.count);

  console.log("Lihat auth : ");
  console.dir(auth);

  // console.log("Lihat auth current user : " + auth.currentUser.email);

  auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log("isi firebaseUser");
      console.dir(firebaseUser);

      alert("User is signed in as " + firebaseUser.email);

      localStorage.setItem('userData', JSON.stringify(firebaseUser));

      router.push({name: 'dashboard', replace: true});
    }
  });
});

const register = async () => {
  try {
    isLoading.value = true;

    if (password.value !== cPassword.value) {
      error.value = "Konfirmasi kata sandi harus sama dengan kata sandi.";
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);

    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User is fully authenticated");

        const userRef = doc(db, "users", user.uid);
        const userData = {
          email: user.email,
          name: name.value,
          placeOfBirth: placeOfBirth.value,
          dateOfBirth: dateOfBirth.value,
          createdDate: Timestamp.now(),
          updatedDate: Timestamp.now(),
          commentID: [],
          userUID: user.uid
        };

        try {
          await setDoc(userRef, userData);
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            console.log("User data saved in database successfully!");

            localStorage.setItem('userData', JSON.stringify(user));

            await router.push('/dashboard');
          } else {
            console.error("Error: User data not found in Firestore");
            // Handle the error appropriately
          }
        } catch (error) {
          console.error("Error saving user data:", error);
          // Handle the error appropriately
        }
      } else {
        console.log("User is not authenticated");
      }
    });

  } catch (error) {
    // Handle specific Firebase errors
    console.error('Registration error:', error);
    console.error('Registration error code:', error.code);

    if (error.code === 'auth/weak-password') {
      error.value = "Kata sandi terlalu lemah. Gunakan kombinasi huruf, angka, dan simbol.";
    } else if (error.code === 'auth/invalid-email') {
      error.value = "Format email tidak valid. Pastikan email Anda benar.";
    } else if (error.code === 'auth/email-already-in-use') {
      error.value = "Email ini sudah digunakan. Silakan gunakan email yang berbeda.";
    } else {
      error.value = "Terjadi kesalahan saat mendaftar. Silakan coba lagi nanti.";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>