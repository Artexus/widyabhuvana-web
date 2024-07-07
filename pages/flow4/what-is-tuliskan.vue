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

          
            <div class="w-full bg-secondaryPurple rounded-lg text-white text-cfenter p-3">
                Setelah kamu belajar dan berlatih, 
                maka apa itu nilai-nilai kehidupan 
                dalam cerpen?
            </div>
            <!-- <div class="w-full bg-white rounded-lg  text-left py-3"> -->
                <textarea  class=" w-full bg-white rounded-lg text-left p-3 min-h-44"></textarea>
            <!-- </div> -->
            
        </div>
        <div class="flex flex-row-reverse">
                <NuxtLink to="/flow/what-is-question">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
            </NuxtLink>
            </div>
        </div>
    <NavBottom />
</template>
