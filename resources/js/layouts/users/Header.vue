<template>
   <button @click="logout()"> logout </button>
</template>

<script >

export default {
    methods: {
        logout() {
            localStorage.removeItem('customer_token')
            setTimeout(3000)
            if (localStorage.getItem('customer_token') === null ){
                this.$router.push('/user/login')
            }
        },
    }
}
</script>
