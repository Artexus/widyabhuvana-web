import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  auth: {    baseURL: 'https://deaf-kata-kiseky-916fbebf.koyeb.app/v1/login',   
    override:true, 
    provider: {      
      type: 'local',
      endpoints: {       
        getSession: false      
      }    
    } 
  }
  
})