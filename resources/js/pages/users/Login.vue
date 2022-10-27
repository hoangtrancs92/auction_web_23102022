<template>
 <h1>User Page {{dulieu1}}</h1>

</template>
<script>
import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['dulieu1'])
        }
    }
</script>
