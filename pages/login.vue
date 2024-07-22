<template>
  <div class="container mx-auto p-4">
    <div class="grid content-center">
      <img alt="" class="w-28 mx-auto mb-10 mt-6" src="/img/logo.png">
      <h3 class="font-bold text-3xl">Masuk</h3>
      <p class="text-sm italic">Masuk untuk mulai belajar di sini.</p>

      <div class="grid gap-6 mt-4">
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
      </div>
      <a class="block w-full text-right text-sc m pr-2 mt-2 text-secondaryBlue" href="">Lupa kata sandi</a>
      <button class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4"
              @click="login">Masuk
      </button>
      <p v-if="error" class="text-sm italic text-red-600">{{ error }}</p> <!-- Display error message -->
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router';
import {useFirebase} from '../composables/firebase';
import {useStore} from 'vuex';

const router = useRouter();
const {auth, signInWithEmailAndPassword, db} = useFirebase();

const email = ref('');
const password = ref('');
const error = ref(null);

const store = useStore();

let unsubscribe;

// Reset auth.currentUser on page load (for development)
onMounted(() => {
  // console.log("Lihat store : " + store.state.count);

  console.log("Lihat auth : ");
  console.dir(auth);

  // console.log("Lihat auth current user : " + auth.currentUser.email);

  unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log("isi firebaseUser");
      console.dir(firebaseUser);

      alert("User is signed in as " + firebaseUser.email);

      localStorage.setItem('userData', JSON.stringify(firebaseUser));

      router.push({name: 'dashboard', replace: true});
    }
  });
});

// Menghentikan pemantauan saat komponen di-unmount
onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe(); // Panggil fungsi pembatalan
  }
});

const updateEmail = (event) => {
  email.value = event.target.value;
};

const updatePassword = (event) => {
  password.value = event.target.value;
};

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    if (user) {
      console.log("Isi user UID : " + user.uid);

      // Fetch user data and store it in Vuex
      // await store.dispatch('fetchUserData', user.uid); // Call the fetchUserData action

      auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {

          localStorage.setItem('userData', JSON.stringify(firebaseUser));

          router.push('/dashboard');
        }
      });
    } else {
      // Handle case where authentication failed
      error.value = "Terjadi kesalahan saat masuk. Silakan coba lagi nanti.";
    }
  } catch (error) {
    console.error('Login error:', error);
    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    // Handle specific Firebase errors
    if (error.code === 'auth/wrong-password') {
      error.value = "Kata sandi salah. Silakan coba lagi.";
    } else if (error.code === 'auth/user-not-found') {
      error.value = "Akun dengan email ini tidak ditemukan.";
    } else if (error.code === 'auth/invalid-credential') {
      error.value = "Email atau kata sandi salah. Silakan coba lagi.";
    } else {
      error.value = "Terjadi kesalahan saat masuk. Silakan coba lagi nanti.";
    }
  }
};
</script>