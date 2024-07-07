<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        
        <div class="flex justify-between place-content-evenly">            
            <NuxtLink to="/flow4/what-is-desc">
                <img src="/img/svg/arrow_left_alt.svg" alt="">
            </NuxtLink>
            <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Belajar
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    20 Poin
                </div>
            </div>
        </div>

        <div class="mt-6 text-center text-balance">
            <h3 class="font-bold text-2xl text-secondaryBlue">Menulis</h3>
            <h1 class="font-bold text-3xl mb-3 text-secondaryBlue">Cerita Pendek</h1>

            <div class="w-full text-left p-12">
                <b>Instruksi:</b><br>
Bayangkan kamu ingin menulis cerpen dengan tema "Persahabatan yang Diuji Coba oleh Waktu". Ikuti langkah-langkah berikut untuk mengembangkan cerpennya:
            </div>
            <div class="w-full bg-bgRose rounded-lg text-white text-left p-12 my-3">
                1. Menentukan Unsur Pembangun Cerpen:<br>
                Ide: Dari tema "Persahabatan yang Diuji Coba oleh Waktu", kembangkan ide cerita yang menarik dan orisinal. Ceritakan tentang dua sahabat yang harus menghadapi situasi yang menguji persahabatan mereka.
                Premis: Buatlah premis yang jelas dan ringkas, yaitu kalimat yang menjelaskan inti cerita Anda. Contoh premis: "Dua sahabat masa kecil terancam kehilangan persahabatan mereka saat salah satu dari mereka pindah ke kota lain."
                Plot: Rancanglah alur cerita yang menarik dan penuh konflik. Ceritakan bagaimana persahabatan kedua tokoh diuji coba oleh waktu dan situasi yang mereka hadapi.
                Tokoh: Ciptakan dua tokoh utama dengan karakter yang kuat dan berbeda. Jelaskan bagaimana karakter mereka memengaruhi jalannya cerita.
                Setting: Tentukan latar waktu dan tempat cerita Anda. Jelaskan bagaimana setting memengaruhi suasana dan jalannya cerita.    
               
            </div>
            
        </div>
        <NuxtLink to="/flow4/what-is-tuliskan">
            <div class="flex flex-row-reverse">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
            </div>
        </NuxtLink>
    </div>
    <NavBottom />
</template>
