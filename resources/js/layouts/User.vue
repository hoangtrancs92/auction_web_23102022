<template>
    <Header />
    <router-view />
</template>

<script>
import Header from "./users/Header.vue";
export default {
    name: "UserLayout",
    components: {
        Header,
    }
}
</script>

<style scoped>

</style>
