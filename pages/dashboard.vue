<template>
  <div class="container mx-auto px-4 py-20 grid content-center">
    <div class="flex justify-between place-content-evenly">
      <div>
        <h3 class="font-bold text-3xl">Hallo, {{ userName }}!<br>Selamat Pagi</h3>
        <p class="text-sm italic mt-4">Tentukan cara belajarmu sendiri<br> dan rasakan keseruan belajar sambil bermain.
        </p>
      </div>
      <div class="flex items-center">
        <button class="bg-black rounded-full w-12 h-12 flex items-center justify-center text-amber-400">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.003 7.003 0 00-5-6.712V4a2 2 0 10-4 0v.288A7.003 7.003 0 004 11v3.159c0 .53-.214 1.039-.595 1.436L2 17h5m7 0a3 3 0 01-6 0m6 0H9"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
          <!-- <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> -->
        </button>
        <button
            class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            @click="logout">
          <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </button>
      </div>
    </div>


    <div class="mt-5">
      <FormsInputAppend
          id="surat-elektronik"
          inputClass="pt2"
          label="Surat Elektronik"
          placeholder="Apa yang ingin kamu pelajari hari ini?"
          type="email"/>
    </div>

    <div class="mt-5">
      <h1 class="font-bold text-cyan-800 text-2xl">Pelajaran Umum</h1>
      <div class="mt-5 grid grid-cols-3 gap-10 sm:grid-cols-3 md:grid-cols-6">
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 1" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/seni_budaya.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Seni Budaya</p>
          </NuxtLink>
        </div>
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 2" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/aljabar.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Aljabar</p>
          </NuxtLink>
        </div>
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 2" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/aljabar.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Aljabar</p>
          </NuxtLink>
        </div>
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 3" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/pendidikan_kewarganegaraan.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Pendidikan Kewarganegaraan</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <h1 class="font-bold text-cyan-800 text-2xl">Paling Diminati</h1>
      <div class="mt-5 grid grid-cols-3 gap-10 sm:grid-cols-3 md:grid-cols-6">
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 1" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/seni_budaya.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Seni Budaya</p>
          </NuxtLink>
        </div>
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 2" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/aljabar.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Aljabar</p>
          </NuxtLink>
        </div>
        <!-- Image Card -->
        <div class="w-full">
          <NuxtLink to="/learning">
            <img alt="Image 3" class="w-full h-auto object-cover rounded-md"
                 src="../assets/gambar/pendidikan_kewarganegaraan.png">
            <p class="text-center mt-2 text-xs sm:text-sm md:text-sm">Pendidikan Kewarganegaraan</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <NavBottom/>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

import {useFirebase} from '../composables/firebase';

const {auth} = useFirebase();

const store = useStore();
const router = useRouter();

let parsedUserData;
const userName = ref(''); // Create a ref to store the user's name

const logout = async () => {
  // Assuming you have a logout function in your auth module
  await store.dispatch('logout');

  auth.signOut();

  // Remove user data from localStorage
  localStorage.removeItem('userData');

  // Redirect to the login page
  router.push({name: 'login', replace: true});
};

onMounted(async () => {
  const userData = localStorage.getItem('userData');
  if (userData) {
    parsedUserData = JSON.parse(userData);

    // Fetch user data and store it in Vuex
    await store.dispatch('fetchUserData', parsedUserData.uid);

    // Now you can use parsedUserData.name
    userName.value = store.state.userData.name;
  } else {
    // Handle the case where userData is not found
    console.log("User data not found in localStorage");
  }
});

definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory
})
</script>