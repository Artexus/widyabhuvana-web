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
            <h3 class="font-bold text-3xl text-secondaryBlue">Permainan <br> Mencocokan</h3>
            <p class="text-sm text-secondaryBlue mt-4">Tentukan cara belajarmu sendiri<br> dan rasakan keseruan belajar sambil bermain.</p>

            <div class="flex flex-row justify-evenly">
                
                <div class="mt-5 w-fit text-pretty text-secondaryBlue px-2 py-2">
                    Kolom 1    
                </div>

                <div class="mt-5 w-fit text-pretty text-secondaryBlue px-2 py-2">
                    Kolom 2   
                </div>

            </div>
        </div>

        
        
    </div>
    <NavBottom />
</template>
