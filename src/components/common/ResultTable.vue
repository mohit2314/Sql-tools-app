<script setup lang="ts">
import { ref, onMounted, defineProps, computed } from "vue";
import { CustomerData } from '@/mock-data/CustomersData';
import { useAppStore } from '@/store/index'
import { storeToRefs } from "pinia";


// const { sqlRunnerLoading } = storeToRefs(useAppStore());
const store = useAppStore()

const sqlRunnerLoading = computed({
    get() {
        return store.sqlRunnerLoading
    },
    set(val) {
        store.sqlRunnerLoading = val
    }
})
const props = defineProps(['tableResultData'])
const customers = ref(null)
const queryResultTable = ref();

// onMounted(() => {
//     CustomerData.getCustomersMedium().then((data) => {
//         customers.value = data;
//     });

// })
const exportCSV = () => {
    queryResultTable.value.exportCSV();
};

</script>
<template>
    <div class="card">
        <DataTable v-if="!sqlRunnerLoading" :value="tableResultData" ref="queryResultTable" scrollable
            scrollHeight="400px" size="small" showGridlines stripedRows filterDisplay="menu">
            <template #header>
                <div class="flex justify-content-between">
                    <span class="table__header">Query Result</span>
                    <span class="flex gap-4">
                        <IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText placeholder="Keyword Search" />
                        </IconField>
                        <Button type="button" style="background-color: #0080801a;" icon="pi pi-download" text
                            @click="exportCSV($event)" />
                        <Button type="button" icon="pi pi-window-maximize" outlined />
                    </span>
                </div>
            </template>
            <template #empty>
                <div class="p-4 text-center">
                    <div><i class="pi pi-inbox"></i></div>
                    <div class="mt-2">No data found.</div>
                </div>
            </template>
            <template #loading>

            </template>
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="company" header="Company"></Column>
        </DataTable>
        <div v-else-if="sqlRunnerLoading" class="p-8 flex justify-content-center align-items-center flex-column w-full">
            <div class="flex justify-content-center">
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="2" fill="var(--surface-ground)"
                    animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
            <div class="mt-2">Loading data. Please wait.</div>

        </div>
    </div>
</template>

<style lang="scss">
.table__header {
    color: #566d79;
    font-size: 18px;
    text-align: left;
    display: flex;
    align-items: center;
}

.p-component-overlay {
    background-color: rgb(199 206 212 / 88%);
}
</style>
