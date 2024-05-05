<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import LeftPanel from "@/components/sql-query-runner/LeftPanel.vue"
import SqlEditor from "@/components/common/SqlEditor.vue";
import ResultTable from "@/components/common/ResultTable.vue";
import { useAppStore } from '@/store/index'
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import { CustomerData } from '@/mock-data/CustomersData';

import { storeToRefs } from "pinia";
// let { sqlRunnerLoading } = storeToRefs(useAppStore());
const store = useAppStore()
const toast = useToast();
const queryResultData = ref(null)
const messageObj = ref({
    msg: '',
    type: 'success' as 'success' | 'error'
})
const showSaveQueryModal = ref(false)
const selectedWorkspace = ref('Personal Workspace')
const selectedDatabase = ref('Customers')
const sqlRunnerLoading = computed({
    get() {
        return store.sqlRunnerLoading
    },
    set(val) {
        store.sqlRunnerLoading = val
    }
})


const sqlQuery = computed(() => store.sqlQuery)
const availableWorkspaces = computed(() => store.availableWorkspaces)
const availableDatabases = computed(() => store.availableDatabases)


const handleRunQuery = () => {


    store.updateSqlQuery(sqlQuery.value)
    queryResultData.value = null
    console.log(sqlQuery.value, sqlQuery.value.includes('wrong'))
    if (sqlQuery.value.includes('CREATE TABLE') && !sqlQuery.value.includes('wrong')) {
        messageObj.value.msg = 'Query ran sucessfully'
        messageObj.value.type = 'success'
        toast.add({ severity: 'success', summary: 'Query ran succesfully', detail: 'Table created', life: 3000 });
    }
    else if (sqlQuery.value.includes('wrong')) {
        messageObj.value.msg = 'Invalid query'
        messageObj.value.type = 'error'
        toast.add({ severity: 'error', summary: 'Invalid query', detail: 'Cannot execute', life: 3000 });
    }
    else if (sqlQuery.value.toLowerCase().includes('select')) {
        messageObj.value.msg = 'Query ran sucessfully'
        messageObj.value.type = 'success'
        store.changeLoading(true)
        setTimeout(() => {
            CustomerData.getCustomersMedium().then((data: any) => {
                queryResultData.value = data;
            });

            store.changeLoading(false)

            toast.add({ severity: 'success', summary: 'Query ran succesfully', detail: 'Data fetched', life: 3000 });
        }, Math.random() * 3000 + 250);


    }
    // sqlRunnerLoading.value = false
    // store.changeLoading(false)

};
const saveQuery = () => {
    showSaveQueryModal.value = false
    toast.add({ severity: 'success', summary: 'Query saved !!', life: 3000, });


}
const themeOptions = [{ name: 'Light', code: 'default' }, { name: 'Dark', code: 'ayu-dark' }, { name: 'Navy', code: 'cobalt' }]
let selectedTheme = ref({ "name": "Navy", "code": "cobalt" })

onMounted(() => {
    let builderTemplateQuery = `SELECT
  *
FROM
  customers
LIMIT
  10`
    store.updateSqlQuery(builderTemplateQuery)
})
</script>

<template>
    <div>
        <div class="qb__right-panel-header"><span>QUERY RESULT</span>
            <span>
                <Button type="button" style="background-color: #0080801a;" icon="pi pi-palette" text />
                <Dropdown v-model="selectedTheme" variant="filled" :options="themeOptions" optionLabel="name"
                    placeholder="Select theme" class="w-full md:w-14rem text-sm p-0" />
            </span>

        </div>
        <div class="flex justify-content-center">
            <SqlEditor :theme="selectedTheme.code" :width="`450`" class=" mt-4 mb-4" :key="selectedTheme.code" />

        </div>
        <div class="flex flex-column px-4">
            <Button :disabled="sqlRunnerLoading" class="mb-2 flex justify-content-center" @click="handleRunQuery">
                <img class="mr-2" width="24px" src="@/assets/images/dashboard/terminal.svg" />
                Build Query
            </Button>
            <Button @click="showSaveQueryModal = true" class="flex justify-content-center" type="button"
                badgeSeverity="contrast" outlined><i class="pi pi-save mr-2"></i>Save Query</Button>
        </div>
        <Dialog v-model:visible="showSaveQueryModal" modal header="Save Query">
            <!-- <span class="p-text-secondary block mb-5">Update your information.</span> -->
            <div class="flex flex-column gap-4">
                <div class="flex flex-column gap-2 w-full">
                    <label for="workspacesDropdown"><i class="pi pi-briefcase mr-2"></i>Select your
                        workspace</label>
                    <Dropdown id="workspacesDropdown" v-model="selectedWorkspace" :options="availableWorkspaces"
                        optionLabel="name" placeholder="Select workspace" checkmark :highlightOnSelect="false"
                        class="w-full" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="databasesDropdown"><i class="pi pi-database mr-2"></i>Select
                        database</label>
                    <Dropdown id="databasesDropdown" v-model="selectedDatabase" :options="availableDatabases"
                        optionLabel="name" placeholder="Select database" checkmark :highlightOnSelect="false"
                        class="w-full" />
                </div>
                <div class="flex flex-column gap-2">
                    <FloatLabel>
                        <InputText id="queryTitle" />
                        <label for="queryTitle">Query title</label>
                    </FloatLabel>
                </div>
            </div>
            <!-- <div class="flex align-items-center gap-3 mb-3">
                <label for="queryTitle" class="font-semibold w-6rem">Query title</label>
                <InputText id="queryTitle" class="flex-auto" autocomplete="off" />
            </div> -->


            <div class="flex justify-content-end gap-2 mt-4">
                <Button type="button" label="Cancel" severity="secondary" @click="showSaveQueryModal = false"></Button>
                <Button type="button" label="Save" @click="saveQuery"></Button>
            </div>
        </Dialog>
    </div>

</template>

<style lang="scss">
.qb__right-panel-header {
    border-bottom: 1px solid #dedede;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .p-dropdown {
        border: none;
        // border-left: none;
        max-width: 130px;
    }
}
</style>