<template>
    <div class="learning-container mx-auto px-4 py-10 grid content-center">
        <div class="flex justify-between place-content-evenly">
            <div class="w-1/1">
                    <img src="/public/img/learning.png" class="w-[200px] h-[200px]">
            </div>
            <div class="w-1/2">
        <h2 class="card-title font-bold text-cyan-800 text-2xl content-center place-items-center">CERITA PENDEK</h2>
            </div> 
        </div>

        <div class="mt-5">
            <div class="Active">
                <h2 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 1</h2>
            <button @click="routeToApp('Apa itu Cerita Pendek?', 'Pengertian Cerita Pendek')" type="button" class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Apa itu cerita Pendek?  </button>
            </div>

            <div class="Active">
                <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 2</h6>
                <button @click="routeToApp('Unsur Pembangun Cerpen', 'Unsur Pembangun Cerpen')" type="button" class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Unsur Pembangun Cerpen</button>
            </div>
                
            <div class="Active">
                <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 3</h6>
                <button @click="routeToApp('Nilai-Nilai Kehidupan', 'Nilai-Nilai Kehidupan')" type="button" class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Nilai-Nilai Kehidupan</button>
            </div>

            <div class="Active">
                <h6 class="font-semibold text-cyan-800 text-2xl text-left">Kegiatan 4</h6>
                <button @click="routeToApp('Menulis Cerpen', 'Menulis Cerpen')" type="button" class="text-cyan-800 block w-full text-left font-semibold p-4 bg-white rounded-xl text-xl mt-4">Menulis Cerpen</button>
            </div>
        </div>
    </div>
<NavBottom />
</template>

<script>
export default {
  name: 'Learning',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    selectActivity(activity) {
      eventBus.emit('activity-selected', activity);
    },
    routeToApp(activity,description) {
      this.$router.push({
        path: '/app',
        query: {
          activity: activity,
          description: description

        }
      })
    }
  }
};
</script>

<style>
/* Your styles here */
.learning-container {
  display: grid;
}
  /* Add any necessary styles for the container */
   .card-title {
  justify-content: center;
  align-items: center;
  width: 10px;
  margin-bottom: 100px;
  font-size: 40px ;

}

.Active {
  margin-bottom: 40px;
}
</style>