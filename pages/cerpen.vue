<template>
    <div class="container mx-auto px-4 py-20 flex items-center justify-between relative">
        <NuxtLink to="/flow/section-header" class="flex-grow text-center">
            <h1 class="font-bold text-cyan-800 text-3xl">Apa itu Cerita Pendek ?</h1>
        </NuxtLink>
        <button class="bg-black rounded-full w-12 h-12 flex items-center justify-center text-amber-400 ml-auto">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a7.003 7.003 0 00-5-6.712V4a2 2 0 10-4 0v.288A7.003 7.003 0 004 11v3.159c0 .53-.214 1.039-.595 1.436L2 17h5m7 0a3 3 0 01-6 0m6 0H9"></path>
            </svg>
            <!-- <span class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span> -->
        </button>
    </div>
    <NavBottom />
</template>
