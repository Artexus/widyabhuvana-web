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
            <h3 class="font-bold text-2xl text-secondaryBlue">Menulis</h3>
            <h1 class="font-bold text-3xl mb-3 text-secondaryBlue">Cerita Pendek</h1>

            <div class="w-full text-pretty p-12">Menulis cerpen adalah kegiatan yang menyenangkan dan kreatif. Kegiatan menulis cerpen dapat mengeksplorasi ide-ide baru, membangun dunia imajinatif, dan berbagi cerita dengan orang lain. Berikut adalah langkah-langkah dalam menulis sebuah cerpen:
            </div>
            <div class="w-full bg-bgRed rounded-lg text-white text-left p-12 my-3">
                
                1. Temukan Ide<br>
Menulis cerpen diawali dengan menemukan ide. Inspirasi dapat datang dari mana saja, seperti pengalaman pribadi, berita, buku, film, atau bahkan mimpi. Menemukan ide dapat dilakukan dengan membuat daftar ide cerita atau hanya memikirkan apa yang menarik dan menuliskannya
            </div>
            <div class="w-full bg-bgPurple rounded-lg text-white text-left p-12">
                
                2. Kembangkan Premis<br>
                Langkah kedua dalam menulis cerpen adalah mengembangkan premis. Setelah memiliki ide, kita dapat mengembangkan sebuah premis. Premis adalah kalimat satu atau dua kalimat yang menjelaskan inti cerita. Kalimat premis harus mencakup jawaban "Tentang apa cerita ini?"</div>
            
        </div>
        <NuxtLink to="/flow4/what-is-instruction">
            <div class="flex flex-row-reverse">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
            </div>
        </NuxtLink>
    </div>
    <NavBottom />
</template>
