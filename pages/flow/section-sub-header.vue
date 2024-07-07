<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        <NuxtLink to="/flow/section-header">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>
        <div class=" w-full min-h-80 shadow-md rounded-lg bg-chocolateMain content-center">
            <div class="grid content-center py-10"> 
                <div class="grid justify-items-center content-center ">
                    <img src="/img/svg/play_button.svg" class="w-16" alt="">
                </div>
            </div>
            
            <NuxtLink to="/flow/what-is-audio">
                <div class="grid content-end px-5 pb-4 self-end">
                    <h3 class="text-white text-2xl">
                        Mendengarkan Unsur-Unsur Pembangun Cerpen
                    </h3>
                </div>
            </NuxtLink>
        </div>

        <NuxtLink to="/flow/what-is-audio">
        <div class="w-full mt-6 rounded-lg p-8 shadow-lg bg-orange-500 h-100 md:min-h-min">
            <div class="flex flex-row justify-items-stretch ">
                <div class="w-12 h-12 mr-8 place-content-between">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-headphones w-full h-full text-gray-700"
                    >
                        <path
                            d="M3 18v-6a9 9 0 0 1 18 0v6"
                        />
                        <path
                            d="M21 18a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3zM3 18a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 class="text-white text-2xl">
                        Mendengarkan Unsur-Unsur Pembangun Cerpen
                    </h3>
                </div>
            </div>
        </div>
    </NuxtLink>
    
    <div class="w-full mt-6 rounded-lg p-8 shadow-lg bg-secondaryBlue h-100 md:min-h-min">
        
        <NuxtLink to="/flow/what-is-desc">
            <div class="flex flex-row justify-items-stretch ">
                <div class="w-12 h-12 mr-8 place-content-between">
                    <img src="/img/svg/book_open.svg" alt="">
                </div>
                <div>
                    <h3 class="text-white text-2xl">
                        Membaca Pengertian Cerita Pendek
                    </h3>
                </div>
            </div>
    </NuxtLink>

        </div>

        <!-- <div class="flex flex-row-reverse">
                <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                    Selanjutnya!
                </button>
        </div> -->
    </div>
    <NavBottom />
</template>
