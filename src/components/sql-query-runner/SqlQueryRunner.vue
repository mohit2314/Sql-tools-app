<script setup lang="ts">
import { ref, computed } from "vue";
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
</script>

<template>
    <div class="sql__runner--tool">

        <LeftPanel />
        <div class="sql__runner--center-panel">
            <div class="sql__query-runner-block">
                <div class="editor__header">
                    Write your SQL query
                </div>
                <SqlEditor />
                <div class="flex flex-column">
                    <Button :disabled="sqlRunnerLoading" class="mb-2 flex justify-content-center"
                        @click="handleRunQuery">
                        <img class="mr-2" width="24px" src="@/assets/images/dashboard/terminal.svg" />
                        Run Query
                    </Button>
                    <Button @click="showSaveQueryModal = true" class="flex justify-content-center" type="button"
                        label="Save Query" icon="pi pi-save" badgeSeverity="contrast" outlined />
                </div>
            </div>
            <Divider />
            <div class="messages__block">
                <div class="header-row"><span class="heading">Output Messages</span><span><i style="rotate: 45deg;"
                            class="pi pi-arrows-v"></i></span></div>
                <div class="messages p-2 mt-4">
                    <div v-if="!messageObj.msg" class="no-message text-600">Please run some query to see message.</div>
                    <div v-else-if="messageObj.msg && messageObj.type == 'success'" class="text-teal-700">
                        {{ messageObj.msg }}</div>
                    <div v-else-if="messageObj.msg && messageObj.type == 'error'" class="text-red-700">{{ messageObj.msg
                        }}
                    </div>
                </div>
            </div>
        </div>

        <div class="sql__runner--right-panel">
            <ResultTable :tableResultData="queryResultData" />
            <Toast position="top-center" />
            <div class="result-actions">
                <!-- <Button type="button" label="Export CSV" icon="pi pi-download" outlined />

                <Button type="button" icon="pi pi-window-maximize" outlined /> -->
            </div>
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
.sql__runner--tool {
    display: flex;
    height: calc(100vh - 56px);

    .sql__runner--center-panel {
        padding: 1rem;
        // background-color: #F4F4F4;

        .messages__block {
            .header-row {
                display: flex;
                justify-content: space-between;

                .heading {
                    border-bottom: 2px solid #008080;
                    padding-bottom: 6px;
                }

                .messages {}
            }
        }
    }

    .sql__runner--right-panel {
        border-left: 1px solid #dedede;
        height: 100%;
        width: 100%;
    }

}



.workspace-management {
    /* Add styles for workspace section */
}

.sql__query-runner-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .editor__header {
        padding: 8px 8px 8px 16px;
        color: #566d79;
        font-size: 18px;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 6px;
        border-left: 4px solid #008080;
        box-shadow: 0 0 0 1px #0000000d;
        margin: 0 24px 24px 0;
        text-transform: uppercase;
    }



}

.result__actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}
</style>