<template>
    <div class="container mx-auto p-4">
        <NuxtLink to="/">
            <img src="/img/svg/arrow_left_alt.svg" alt="">
        </NuxtLink>
        <div class="grid content-center">
            <img src="/img/logo.png" alt="" class="w-28 mx-auto mb-10 mt-6">
            <h3 class="font-bold text-3xl">Mendaftar</h3>
            <p class="text-sm italic">Masukkan informasi pribadi untuk mendaftar.</p>
    
            <form  @submit.prevent="register">
                <div class="grid gap-6 mt-4">
                <FormsInput
                    label="Nama Pengguna"
                    type="text"
                    placeholder="Masukkan Nama Anda"
                    v-model:text="form.name"
                    id="nama-penguna"
                />

                <FormsInput
                    label="Surat Elektronik"
                    type="email"
                    v-model:text="form.email"
                    placeholder="Tuliskan Surat Elektronik"
                    id="surat-elektronik"
                />

                <FormsInput
                    label="Kata Sandi"
                    type="password"
                    placeholder="Tuliskan Kata Sandi"
                    v-model:text="form.password"
                    id="kata-sandi"
                />
                
                <FormsInput
                    label="Konfirmasi Kata Sandi"
                    type="password"
                    placeholder="Konfirmasi Kata Sandi"
                    id="konfirmasi-kata-sandi"
                    v-model:text="form.c_password"
                />
            </div>
            <button :disabled="isDisabled" type="submit" class="text-white block w-full text-center font-semibold p-4 bg-primaryBlue rounded-xl text-xl mt-4">Mendaftar</button>
            <p class="text-sm italic text-red-600">{{ error }}</p>
        </form>
        </div>
    </div>
</template>

<script setup>
    const error = useState('error', () => "")
    const isDisabled = useState('is_disabled', () => false)
</script>

<script>
import { useFetch } from '~/utils/fetch';
import {REGISTER_API_URL} from '~/constant/config'
export default {
    data() {
        return {
            form: {
                name:"",
                email: "",
                password: "",
                c_password: ""
            },
        }
    },
    methods: {
        async register() {
            const error = useState('error')
            const isDisabled = useState('is_disabled')

            if (this.form.password) {
                const alphanumericRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{1,}$/;
                const lengthCheck = this.form.password.length >= 1 && this.form.password.length <= 8;

                if (!alphanumericRegex.test(this.form.password) || !lengthCheck) {
                    error.value = "Password harus alfanumerik dengan minimal satu huruf kapital dan panjang antara 1 sampai 8 karakter."
                    return 
                }
            }

            if (this.form.password != this.form.c_password) {
                error.value = "Konfirmasi kata sandi harus sama dengan kata sandi."
                return 
            }

            isDisabled.value = true 
            const { statusCode, response } = await useFetch(REGISTER_API_URL).post({
                'username': this.form.name,
                'email': this.form.email, 
                'password': this.form.password
            })

            isDisabled.value = false
            const resp = await response.value.json()
            if ((statusCode.value == 409 &&  resp.detail.email))   {
                error.value = "Email sudah teregistrasi"
            } else if (statusCode.value == 201) {
                localStorage.setItem('Authorization', resp.token);
                navigateTo('/dashboard')
            } else {
                error.value = "Oops... terjadi sesuatu yang tidak terduga"
            }
        },
    },
  }
</script>