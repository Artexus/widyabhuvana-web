<template>
  <div class="profile-container bg-d3e3fb rounded-2xl shadow-lg p-6 flex items-center">
    <img :src="resolvedImg" alt="Profile Picture" class="rounded-full mr-4" width="120" height="120">
    <div class="text-left">
      <h2 class="text-2xl font-bold mb-2" style="max-width: 200px;">{{ name }}</h2>
      <p class="text-gray-600 mb-2" style="max-width: 200px;">Total Poin: {{ points }}</p>
      <span class="text-blue-600" v-if="pageType === 'edit'">Sunting Profil</span>
      <span class="text-blue-600"
            v-else-if="pageType === 'change'">{{ isEditing ? 'Simpan Perubahan' : 'Ubah Profil' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    points: {
      type: Number,
      required: true
    },
    pageType: {
      type: String,
      required: true
    },
    isEditing: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      resolvedImg: '',
      editMode: false,
    };
  },
  mounted() {
    this.loadImage();
  },
  methods: {
    async loadImage() {
      try {
        const image = await import(`../assets/gambar/${this.img}`);
        this.resolvedImg = image.default || image;
      } catch (error) {
        console.error('Error loading image:', error);
        this.resolvedImg = require('../assets/gambar/default.png'); // Fallback image
      }
    }
  }
}
</script>

<style scoped>
.profile-container {
  width: 80vw; /* 80% of the viewport width */
  height: 25vh; /* 30% of the viewport height */
  margin: auto;
  padding: 20px; /* Add padding for spacing */
  justify-content: space-between; /* Align items with space between them */
  border-radius: 33px; /* Adjust the border-radius for more curvature */
  overflow: hidden; /* Ensure overflow is hidden within the rounded corners */
  display: flex; /* Menggunakan flex untuk mengatur tata letak */
  align-items: center; /* Mengatur item agar berada di tengah-tengah secara vertikal */
  text-align: center; /* Mengatur agar semua konten berada di tengah secara horizontal */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); /* Menyesuaikan nilai box-shadow */
}

.bg-d3e3fb {
  background-color: #d3e3fb; /* Menetapkan warna latar belakang */
}

.text-left {
  flex: 1; /* Menggunakan flex untuk mengisi sisa ruang */
}

.text-blue-600 {
  color: #3182ce; /* Warna biru untuk teks "Sunting Profil" */
  cursor: pointer; /* Mengubah kursor saat dihover */
}
</style>
