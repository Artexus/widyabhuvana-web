<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        
        <div class="flex justify-between place-content-evenly">            
            <NuxtLink to="/flow4/what-is-desc">
                <img src="/img/svg/arrow_left_alt.svg" alt="">
            </NuxtLink>
            <!-- <div class="flex flex-col items-center">
                <div class="bg-amber-400 rounded-lg py-2 px-6 flex items-center justify-center text-white">
                    Belajar
                </div>
                <div class="bg-secondaryBlue rounded-lg py-2 px-6 flex items-center justify-center text-white text-sm w-full">
                    20 Poin
                </div>
            </div> -->
        </div>

        <div class="flex flex-col place-items-center mt-6 text-center text-balance">
            <h3 class="font-bold text-3xl text-secondaryBlue">Hore!</h3>
            <h1 class="font-bold text-xl text-secondaryBlue">Pelajaran Telah Selesai</h1>

          
                <img src="../assets/gambar/hore.png" class="w-80">
            <!-- <div class="w-full bg-white rounded-lg  text-left py-3"> -->
                
            <div class="flex justify-between w-full text-white gap-10">
                <div class="w-full bg-bgRose rounded-lg p-4">
                    TOTAL POIN
                    <div class="w-full text-bgRose text-3xl bg-white py-5 rounded-lg">
                        789
                    </div>
                </div>
                <div class="w-full bg-bgSoftBlue rounded-lg p-4">
                    TOTAL POIN
                    <div class="w-full text-bgSoftBlue text-3xl bg-white py-5 rounded-lg">
                        789
                    </div>
                </div>
                <div class="w-full bg-bgGreen rounded-lg p-4">
                    TOTAL POIN
                    <div class="w-full text-bgGreen text-3xl bg-white py-5 rounded-lg">
                        A
                    </div>
                </div>
            </div>
            <!-- </div> -->
            
        </div>
        <div class="flex justify-center">
                <NuxtLink to="/flow/what-is-question">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    SELESAI
                </button>
            </NuxtLink>
            </div>
        </div>
    <NavBottom />
</template>
