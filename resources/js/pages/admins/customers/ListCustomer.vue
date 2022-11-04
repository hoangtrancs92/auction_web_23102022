<template>
<div class="card">
    <Toolbar class="mb-4">
        <template #start>
            <Button label="Tạo mới" icon="pi pi-plus" class=" mr-2" @click="show_dialog()"/>
        </template>
        <template #end>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText  placeholder="Tìm kiếm..." />
        </span>
        </template>
    </Toolbar>
    <DataTable :value="admin_customers" :paginator="true" :rows="10"
               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
               :rowsPerPageOptions="[5,8,10]" responsiveLayout="scroll"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
        <Column field="firstname" header="Họ và tên"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="sex" header="Giới tính"></Column>
        <Column header="Hành động">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded mr-4 "  />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger mt-2" />
            </template>
        </Column>
        <template #paginatorstart>
            <Button type="button" icon="pi pi-refresh" class="p-button-text" />
        </template>
        <template #paginatorend>
            <Button type="button" icon="pi pi-cloud" class="p-button-text" />
        </template>
    </DataTable>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
    name: "ListCustomer",
    created() {
        this.fetchData()
    },
    computed: {
        ...mapGetters({
            admin_customers : 'customer/customers'
        })
    },
    methods: {
        ...mapMutations('customer', ['CHANGE_STATUS_DIALOG','SET_CUSTOMERS']),
        ...mapActions('customer', ['fetchCustomers']),
        show_dialog() {
            this.CHANGE_STATUS_DIALOG(true)
        },
        async fetchData() {
           const res = await this.fetchCustomers()
            if(res.status === 200) {
                this.SET_CUSTOMERS(res.data)
            }
        }
    },
}
</script>

<style scoped>

</style>
