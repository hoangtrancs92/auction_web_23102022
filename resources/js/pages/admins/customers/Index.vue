<template>
    <div>
        <ListCustomer />
    </div>
    <Dialog :visible="show_dialog"
            :modal="true"
            @update:visible="handleClose" >
        <div>
            hello
        </div>
    </Dialog>
</template>

<script>
import ListCustomer from "./ListCustomer.vue";
import {mapGetters, mapMutations} from "vuex";
export default {
    name: "Index",
    components: {
        ListCustomer
    },
    computed: {
        ...mapGetters({
            show_dialog : 'customer/show_dialog'
        })
    },
    methods: {
        ...mapMutations('customer', ['CHANGE_STATUS_DIALOG']),
        handleClose() {
            this.CHANGE_STATUS_DIALOG(false)
        }
    }

}
</script>

<style scoped>

</style>
