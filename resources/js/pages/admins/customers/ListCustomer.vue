<template>
<div class="card">
    <Toolbar class="mb-4">
        <template #start>
            <Button label="Tạo mới" icon="pi pi-plus" class="p-button-success mr-2" @click="show_dialog()"/>
        </template>
        <template #end>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText  placeholder="Tìm kiếm..." />
        </span>
        </template>
    </Toolbar>
    <DataTable :value="userManager" :paginator="true" :rows="5"
               paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
               :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
        <Column field="firstname" header="Họ và tên"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="sex" header="Giới tính"></Column>
        <Column header="Hành động">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-4"  />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-2" />
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
import axios from "axios";
import {mapMutations} from "vuex";
export default {
    name: "ListCustomer",
    data(){
        return {
            userManager: []
        }
    },
    created() {
        this.fectchUsers()
    },
    methods: {
        ...mapMutations('customer', ['CHANGE_STATUS_DIALOG']),
        fectchUsers(){
            let token = localStorage.getItem('user_token')
            axios.get(
                '/api/admin/user-manager',
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(response=>{
                this.userManager = response['data']
            }).catch(err=>{
                console.log(err);
            })
        },
        show_dialog() {
            this.CHANGE_STATUS_DIALOG(true)
        }
    },
}
</script>

<style scoped>

</style>
