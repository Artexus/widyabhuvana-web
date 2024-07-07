<template>
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-full mx-auto mb-10 mt-6"> -->
    <!-- <img src="/img/bg-profile.jpg" alt="" class="w-auto mx-auto bg-fixed"> -->
    <div class="container mx-auto px-4 py-20 grid content-center">
        <NuxtLink to="/dashboard">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>
        
        <div class="w-full mt-6 rounded-lg p-8 shadow-lg bg-primaryBlue text-white place-content-around h-100 md:min-h-min">
            <div class="grid grid-cols-2 place-items-center">
                <div><h3 class="font-bold text-3xl">Cerita <br> Pendek</h3></div>
                <img class="rounded-lg" src="/img/bg-profile.jpg">
                <div class="col-span-2 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem quidem. Eligendi obcaecati ullam odio eaque incidunt assumenda cum eveniet illum! Porro fuga placeat nihil architecto id tenetur delectus blanditiis?</div>
            </div>
        </div>

        <div class="flex flex-row-reverse">
            <!-- <div class="md:w-40"> -->
                
                <NuxtLink to="/flow/section-sub-header">
                    <button class="bg-amber-500 mt-4 rounded-lg h-10 w-40 xs:w-full flex items-center justify-center text-white">
                        Selanjutnya!
                        <!-- <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> -->
                    </button>
                </NuxtLink>
            <!-- </div> -->
        </div>
    </div>
    <NavBottom />
</template>
