import { createFetch } from '@vueuse/core'

export const useFetch = createFetch({
    baseUrl: 'https://deaf-kata-kiseky-916fbebf.koyeb.app', 
    combination:'chain',
    options: {
        async beforeFetch({options}) {
            const token = localStorage.getItem('Authorization');
            
            if (token) {
                options.headers = {
                    Authorization: `Bearer ${token}`,
                }
            }

            options.headers = {
                ...options.headers,
                'Content-Type': 'application/json',
            }

            return {options}
        },
    },
    fetchOptions: {
        mode: 'cors'
    }
})

