<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        
        <div class="flex justify-between place-content-evenly">
            <NuxtLink to="/flow/section-sub-header">
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
            <h3 class="font-bold text-3xl mb-3 text-secondaryBlue">Apa Itu Cerita Pendek ?</h3>

            <audio id="song" class="block w-full max-w-md mx-auto" controls>
                <source src="https://open.spotify.com/track/7DE0I3buHcns00C0YEsYsY?si=5e0442c12f514f04" type="audio/mpeg">
            </audio>
            
            <h1 class="mt-3 text-secondaryBlue">Audio Pengertian Cerita Pendek</h1>
            
            <!-- <div class="flex flex-row-reverse">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
            </div> -->
        </div>
    </div>
    <NavBottom />
</template>
