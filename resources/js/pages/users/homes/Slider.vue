<template>
    <h1>dsadasdasads</h1>
    <Carousel :value="cars">
        <template #item="slotProps">
        </template>
    </Carousel>
</template>

<script>
export default {
    name: "Slider",
    data() {
        return {
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    },

}
</script>

<style scoped>


</style>
