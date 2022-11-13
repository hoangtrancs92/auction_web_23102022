<template>
    <div>
        <TreeTable :value="nodes">
            <template #header>
                FileSystem
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem" headerClass="text-center" bodyClass="text-center">
                <template #header>
                    <Button type="button" icon="pi pi-cog"></Button>
                </template>
                <template #body>
                    <Button type="button" icon="pi pi-search" class="p-button-success" style="margin-right: .5em"></Button>
                    <Button type="button" icon="pi pi-pencil" class="p-button-warning"></Button>
                </template>
            </Column>
            <template #footer>
                <div style="text-align:left">
                    <Button icon="pi pi-refresh" />
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script>
export default {
    name: "ListAuction",
}
</script>

<style scoped>

</style>
