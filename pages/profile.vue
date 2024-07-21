<template>
  <div>
    <div class="container mx-auto px-4 py-20 relative">
      <UserProfile
          :img="base64Image"
          :name="userName"
          :points="totalPoint"
          :pageType="'edit'"
          class="floating-profile"
          @click="navigateToChangeProfile"
      />

      <div class="icon-container">
        <img src="../assets/icon/ic_question_mark.png" @click="showHelp" alt="Help Icon" width="24" height="24">
        <img src="../assets/icon/ic_setting.png" @click="showSetting" alt="Setting Icon" width="24" height="24">
      </div>
    </div>

    <div class="form-container mx-auto px-8 py-8 mb-8">
      <!-- Tulisan "Tingkatanmu, Ahli!" -->
      <h3 class="text-lg font-bold mb-2 ml-4">Tingkatanmu, Ahli!</h3>

      <!-- Kata-kata tambahan -->
      <p class="text-sm mb-2 ml-4">Raih tingkatan selanjutnya dan dapatkan gelar baru!</p>

      <!-- Kata-kata tambahan dalam italic -->
      <p class="text-xs italic ml-4">2000 poin lagi untuk mencapai tingkat Master</p>

      <!-- Progress bar -->
      <div class="progress ml-4 mr-4">
        <div class="progress-bar" style="width: 75%;"></div>
      </div>

      <!-- Tulisan "Ayo Lanjutkan Belajar!" -->
      <h2 class="text-xl font-bold mt-4 ml-4">Ayo Lanjutkan Belajar!</h2>

      <ProgressBelajar style="margin-top: 10px;"/>

      <!-- NavBottom Component -->
      <NavBottom class="z-10" @showHelp="showHelp" @showSetting="showSetting"/>
    </div>
  </div>
</template>

<script setup>
import UserProfile from '@/components/UserProfile.vue';
import ProgressBelajar from '../components/ProgressBelajar.vue';
import NavBottom from '@/components/NavBottom.vue';
import {useStore} from 'vuex';
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';

const store = useStore();
const userName = ref('');
const formattedBirthDate = ref('');
const router = useRouter();

const totalPoint = ref('');
const base64Image = ref(''); // Deklarasi base64Image

let parsedUserData;

const formatBirthDate = () => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  formattedBirthDate.value = new Date(form.birthDate).toLocaleDateString(
      'id-ID',
      options
  );
};

const navigateToChangeProfile = () => {
  router.push('/change-profile');
};

const showHelp = () => {
  console.log('Help icon clicked!');
  // Here, add your logic for showing the help dialog or content
};

const showSetting = () => {
  console.log('Setting icon clicked!');
  // Add your logic for showing the settings dialog or content
};

onMounted(async () => {
  const userData = localStorage.getItem('userData');

  if (userData) {
    const parsedUserData = JSON.parse(userData);

    // Fetch user data and store it in Vuex
    await store.dispatch('fetchUserData', parsedUserData.uid);
    userName.value = store.state.userData.name;
    totalPoint.value = store.state.userData.totalPoint;

    // Mengambil gambar base64 dari Vuex
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
    console.log("User data not found in localStorage");
  }
});

</script>

<style scoped>
.container {
  background-image: url('../assets/gambar/background_profile.png');
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
  padding-left: 20px;
  padding-right: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
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

.progress {
  width: calc(100% - 40px); /* Adjust width to leave margin on both sides */
  height: 12px;
  background-color: #ddd;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 26px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  border: 1px solid #000; /* Add border to the outer progress bar */
}

.progress-bar {
  height: 100%;
  width: 75%;
  background-color: #f1d020;
  position: relative;
}

.icon-container {
  position: absolute;
  top: 20px;
  right: 20px; /* Letakkan di kanan */
  display: flex; /* Gunakan Flexbox */
  justify-content: flex-end; /* Ratakan icon ke kanan */
  gap: 10px;
}

.icon-container img {
  cursor: pointer;
}
</style>