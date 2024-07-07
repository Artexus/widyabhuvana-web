export default defineNuxtRouteMiddleware(to => {
    console.log('DONE!')
    const auth = useCookie('Authorization')

    if (!auth) {
      return navigateTo('/')
    }
})