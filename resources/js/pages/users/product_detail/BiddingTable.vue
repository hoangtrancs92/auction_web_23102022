<template>
    <div class="card">
        <DataTable :value="customers1" :scrollable="true" scrollHeight="400px" :loading="loading">
            <Column field="name" header="Tên" style="min-width:200px"></Column>
            <Column field="country.name" header="Giá đặt" style="min-width:200px"></Column>
<!--            <Column field="representative.name" header="Representative" style="min-width:200px"></Column>-->
<!--            <Column field="status" header="Status" style="min-width:200px"></Column>-->
        </DataTable>
    </div>
</template>

<script>
export default {
    name: "BiddingTable",
    data() {
        return {
            customers1: null,
        }
    }
}
</script>

<style scoped>

</style>
