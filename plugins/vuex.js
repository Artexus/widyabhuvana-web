import {createStore} from 'vuex';
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../composables/firebase.js'; // Assuming your Firestore instance is in 'firebase.js'
import {defineNuxtPlugin} from 'nuxt/app';

const store = createStore({
    state() {
        return {
            userData: null, // Initialize userData as null
            count: 2,
        };
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data;
        },
        // Add a mutation to clear user data
        clearUserData(state) {
            state.userData = null;
        },
    },
    actions: {
        async fetchUserData(context, userId) {
            try {
                console.log("Masuk function fetchUserData di store ga sih ??");

                const userRef = doc(db, 'users', userId); // Get user document
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    context.commit('setUserData', userSnapshot.data());
                } else {
                    // Handle case where user data is not found
                    console.error('User data not found in Firestore.');
                    // You might want to dispatch an error action here
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle errors appropriately
                // You might want to dispatch an error action here
            }
        },
        // Add a logout action
        logout(context) {
            console.log("Masuk function logout di store ga sih ??");

            // Clear user data in the store
            context.commit('clearUserData');
        }
    },
    getters: {
        // You can add getters if needed to derive data from userData
        getUserName(state) {
            return state.userData ? state.userData.name : null;
        }
    },
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store); // Register the store as a plugin
});