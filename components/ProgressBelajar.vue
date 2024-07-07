<template>
  <div class="container-progress-belajar">
    <div class="content">
      <img src="../assets/gambar/cerita_pendek.png" alt="Icon Paket Belajar" class="illustration"/>
      <div class="text">
        <h2>Cerita Pendek</h2>
        <p>Kegiatan 2 | Unsur-Unsur Pembangun</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressWidth }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressWidth: '20%', // Sesuaikan dengan persentase progres yang diinginkan
    };
  },
};
</script>

<style scoped>
.container-progress-belajar {
  width: 100%; /* Mengatur lebar menjadi 100% dari parent */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px; /* Tambahkan padding agar konten tidak terlalu dekat dengan tepi */
}

.content {
  width: 100%; /* Mengatur lebar menjadi 100% dari parent */
  display: flex;
  flex-direction: row; /* Mengubah dari column ke row */
  align-items: center;
  background-color: #fff;
  padding: 10px; /* Tambahkan padding untuk mengurangi ukuran keseluruhan */
  border-radius: 8px; /* Kurangi border radius untuk tampilan yang lebih kecil */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.illustration {
  width: 120px; /* Mengurangi ukuran gambar */
  height: 120px; /* Mengurangi ukuran gambar */
  margin-right: 10px; /* Tambahkan margin kanan untuk memberikan jarak dengan teks */
}

.text {
  text-align: left; /* Rata kiri untuk teks */
}

.text h2 {
  font-size: 18px; /* Mengurangi ukuran font judul */
  font-weight: bold;
  margin-bottom: 8px; /* Mengurangi margin bottom */
}

.text p {
  font-size: 14px; /* Mengurangi ukuran font teks */
  color: #666;
  margin-bottom: 12px; /* Mengurangi margin bottom */
}

.progress-bar {
  width: calc(100% - 130px); /* Mengatur lebar progress bar */
  height: 8px; /* Mengurangi tinggi progress bar */
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #ffc107;
  border-radius: 4px;
}
</style>
