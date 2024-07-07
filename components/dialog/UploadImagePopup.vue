<template>
  <div class="popup" v-if="modelValue">
    <div class="popup-inner">
      <h2>Upload Gambar</h2>
      <input type="file" accept=".jpg" @change="onFileSelected" ref="fileInput">
      <button @click="closePopup">Tutup</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closePopup() {
      this.$emit('update:modelValue', false);
    },
    onFileSelected(event) {
      const file = event.target.files[0];
      console.log('File yang dipilih di UploadImagePopup: ', file)
      // Lakukan sesuatu dengan file yang dipilih (misalnya, upload)
      // console.log('File yang dipilih:', file);
    }
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-inner {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
