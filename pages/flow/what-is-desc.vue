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

            <div class="w-full bg-secondaryBlue text-white text-pretty p-12">
                Cerpen adalah sebuah cerita pendek yang bersifat khayal sehingga termasuk dalam bentuk prosa naratif fiktif (Lado et al., 2016). 
(Mansyur, 2018) menambahkan bahwa cerpen yang berbentuk prosa itu  menggambarkan persoalan hidup manusia tentang kehidupan. 
Sependapat dengan hal tersebut (Mutia et al., 2022) pun berpendapat bahwa cerpen merupakan karya sastra naratif fiktif atau khayal dan tak nyata dan ceritanya terinspirasi dari kisah hidup seorang manusia. Tidak hanya menceritakan tentang persoalan manusia, 
cerpen juga menceritakan tentang bagaimana solusi dari permasalahan yang dihadapi (Februona Anding et al., 2021). Dalam kepenulisannya pun cerpen kurang dari 10.000 kata dan kurang dari 10 halaman serta ceritanya berfokus pada satu konflik pokok yang dialami oleh seorang tokoh (Rifky Fadilah et al., 2024). Maka, dapat disimpulkan bahwa cerita pendek adalah salah satu jenis karya sastra berbentuk prosa fiksi yang menceritakan tentang kisah hidup seorang manusia sehubungan dengan permasalahan serta cara menyelesaikannya.
            </div>
            
        </div>
        <NuxtLink to="/flow/what-is-question">
            <div class="flex flex-row-reverse">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
            </div>
        </NuxtLink>
    </div>
    <NavBottom />
</template>
