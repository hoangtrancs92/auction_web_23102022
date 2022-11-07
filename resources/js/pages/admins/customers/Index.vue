<template>
    <div>
        <ListCustomer />
    </div>
    <div>
        <CreateCustomer />
    </div>
<!--    <Dialog :visible="show_dialog" :modal="true" @update:visible="handleClose" class="md:col-6"   >-->
<!--        <div class="grid p-fluid">-->
<!--&lt;!&ndash;            Fisrt name&ndash;&gt;-->
<!--            <div class="col-12 md:col-6">-->
<!--                <div class="p-inputgroup">-->
<!--                <span class="p-inputgroup-addon">-->
<!--                    <i class="pi pi-user"></i>-->
<!--                </span>-->
<!--                    <InputText placeholder="Họ" />-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            Last name&ndash;&gt;-->
<!--            <div class="col-12 md:col-6">-->
<!--                <div class="p-inputgroup">-->
<!--                    <span class="p-inputgroup-addon">-->
<!--                        <i class="pi pi-user"></i>-->
<!--                    </span>-->
<!--                    <InputText placeholder="Tên" />-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            Birthday&ndash;&gt;-->
<!--            <div class="col-12 md:col-1 flex align-items-center justify-content-center ui-widget">-->
<!--                <span>Ngày sinh</span>-->
<!--            </div>-->
<!--            <div class="col-12 md:col-5">-->
<!--                <div class="p-inputgroup">-->
<!--                    <Calendar v-model="value" :showButtonBar="true" />-->
<!--                    <i class="pi pi-calendar p-button p-component p-button-icon-only p-datepicker-trigger"> </i>-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            Sex&ndash;&gt;-->
<!--            <div class="col-12 md:col-2 flex align-items-center justify-content-start ui-widget">-->
<!--                <RadioButton name="sex" value="Male" v-model="city" class="mr-2" />-->
<!--                <label>Nam</label>-->
<!--            </div>-->
<!--            <div class="col-12 md:col-2 flex align-items-center justify-content-start ui-widget">-->
<!--                <RadioButton name="sex" value="Female" v-model="city" class="mr-2"/>-->
<!--                <label>Nữ</label>-->
<!--            </div>-->
<!--            <div class="col-12 md:col-2 flex align-items-center justify-content-start ui-widget">-->
<!--                <RadioButton name="sex" value="LGBT" v-model="city" class="mr-2"/>-->
<!--                <label>Khác</label>-->
<!--            </div>-->
<!--&lt;!&ndash;            Email&ndash;&gt;-->
<!--            <div class="col-12 md:col-6">-->
<!--                <div class="p-inputgroup">-->
<!--                    <span class="p-inputgroup-addon">-->
<!--                        <i class="pi pi-envelope"></i>-->
<!--                    </span>-->
<!--                    <InputText placeholder="Email" />-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-12 md:col-6">-->
<!--            </div>-->
<!--&lt;!&ndash;            Phone&ndash;&gt;-->
<!--            <div class="col-12 md:col-6">-->
<!--                <div class="p-inputgroup">-->
<!--                    <span class="p-inputgroup-addon">-->
<!--                        <i class="pi pi-phone"></i>-->
<!--                    </span>-->
<!--                    <InputText placeholder="Số điện thoại" />-->
<!--                </div>-->
<!--            </div>-->
<!--&lt;!&ndash;            Address&ndash;&gt;-->
<!--            <div class="col-12 md:col-12">-->
<!--                <div class="p-inputgroup">-->
<!--                    <span class="p-inputgroup-addon">-->
<!--                        <i class="pi pi-building"></i>-->
<!--                    </span>-->
<!--                    <InputText placeholder="Địa chỉ" />-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-12 md:col-12">-->
<!--                <Button label="Xác nhận" class="justify-content-center" />-->
<!--            </div>-->
<!--        </div>-->

<!--    </Dialog>-->
</template>

<script>
import ListCustomer from "./ListCustomer.vue";
import CreateCustomer from "./Create.vue";
import {mapGetters, mapMutations} from "vuex";
export default {
    name: "Index",
    data() {
        return {
            city: null,
            value: null
        }
    },
    components: {
        ListCustomer,
        CreateCustomer
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
.ui-widget,
.ui-widget .ui-widget {
    font-size: 13.5px !important;
}
</style>
