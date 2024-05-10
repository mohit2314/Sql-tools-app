<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useAppStore, type Database } from '@/store/index'
import SqlEditor from "../common/SqlEditor.vue";
import { WorkspaceService } from "@/mock-data/WorkspacesData";
const store = useAppStore()



const databases: Database[] = [
    { name: "Database 1", tables: ["Table 1", "Table 2", "Table 3"] },
    { name: "Database 2", tables: ["Table A", "Table B", "Table C"] },
];

const selectedDatabase = ref<Database | null>(null);
const selectedTable = ref<string | null>(null);
const nodes = ref(null);
const selectedKey = ref(null);
// const toast = useToast();
onMounted(() => {
    WorkspaceService.getWorkspaceNodesData().then((data) => (nodes.value = data));
});
// const onNodeSelect = (node:any) => {
//     toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
// };

// const onNodeUnselect = (node:any) => {
//     toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
// };
const items = ref([
    {
        separator: true
    },
    {
        label: 'Databases',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                shortcut: '⌘+N'
            }
        ]
    },
    {
        separator: true
    },

    {
        separator: true
    }
]);
const showWorkspacePanel = computed({
    get() {
        return store.showWorkspacePanel
    },
    set(val) {
        store.showWorkspacePanel = val
    }
})
const sampleQueries = ref([
    {
        label: 'Fetch query', query: `SELECT Name, City, CompanyName
FROM Customers;
` },
    {
        label: 'Create Table query', query: `CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
` },
    { label: 'Filter query', query: '' },
    {
        label: 'Sort query', query: `SELECT
  *
FROM
  customers
ORDER BY
  customers.ContactName asc
LIMIT
  10` },
    {
        label: 'Limit query', query: `SELECT
*
FROM
customers
LIMIT
10`}

])
const sqlQuery = computed({
    get() {
        return store.sqlQuery
    },
    set(val) {
        store.sqlQuery = val
    }
})
const templateQueryPopup = ref();
let selectedTemplateQuery = ref({ label: '', query: `` })
const openTemplatePreview = (event: any, option: any) => {
    selectedTemplateQuery = option
    console.log(selectedTemplateQuery)
    templateQueryPopup.value.toggle(event);
}
const useTemplateQuery = (templateQuery: string) => {
    sqlQuery.value = templateQuery
}
const copyQuery = async (queryToCopy: string) => {
    try {
        await navigator.clipboard.writeText(queryToCopy);
        console.log('Query copied!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
</script>

<template>
    <div class="sql__builder--left-panel">
        <span class="flex align-items-center gap-1 px-2 py-2 text-center">

            <i class="pi pi-briefcase" color="bg-primary"></i>
            <span class="font-medium text-xl font-semibold">WORK<span class="text-primary">SPACES</span></span>

        </span>

        <Divider />
        <div class="flex flex-column gap-4 p-2" style="position: relative;">
            <span class="workspace__collapse-btn" @click="showWorkspacePanel = !showWorkspacePanel"><i
                    class="light-icon-chevron-left"></i></span>
            <div class="flex flex-column gap-2 w-full">
                <label for="workspacesDropdown" class="text-primary font-bold"><i
                        class="pi pi-database mr-2"></i>Databases</label>
                <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single">
                </Tree>
            </div>
            <!-- <div class="flex flex-column gap-2">
                <label for="databasesDropdown" class="text-primary font-bold"><i class="pi pi-database mr-2"></i>Select
                    database</label>
                <Dropdown id="databasesDropdown" v-model="selectedDatabase" :options="availableDatabases"
                    optionLabel="name" placeholder="Select database" checkmark :highlightOnSelect="false"
                    class="w-full" />
            </div> -->
            <div>
                <div class="text-primary font-bold"><i class="pi pi-table mr-2"></i> Sample queries</div>
                <Listbox v-model="selectedTable" :options="sampleQueries" filter filterPlaceholder="Search queries..."
                    class="w-full md:w-14rem">
                    <template #option="slotProps">
                        <div class="flex align-items-center justify-content-center">
                            <div @click="openTemplatePreview($event, slotProps.option)" class="flex align-items-center">
                                <i class="light-icon-code mr-2" style="font-size: 1.2rem;"></i> {{
                                    slotProps.option.label }}
                            </div>
                        </div>
                    </template>

                </Listbox>
                <OverlayPanel ref="templateQueryPopup">
                    <div class="flex flex-column gap-3 w-25rem">
                        <div class="flex align-items-center justify-content-between">
                            <span class=" font-medium text-900 block mb-2">{{ selectedTemplateQuery.label }}
                            </span>
                            <span>
                                <Button @click="useTemplateQuery(selectedTemplateQuery.query)"
                                    v-tooltip="'Use this query'" text><i class="light-icon-terminal-2 mr-2"
                                        style="font-size: 1.2rem;"></i></Button>
                                <Button @click="copyQuery(selectedTemplateQuery.query)" v-tooltip="'Copy query'" text>
                                    <i class="pi pi-copy" style="font-size: 1.2rem;"></i></Button>
                            </span>
                        </div>
                        <div>
                            <SqlEditor :key="selectedTemplateQuery.label" :propQuery="selectedTemplateQuery.query"
                                :theme="'base16-light'" :width="'200px'" :height="'200'" :readOnly="true"
                                :cursorBlinkRate="-1" />
                        </div>
                    </div>
                </OverlayPanel>

            </div>

        </div>

    </div>
    <!-- <div class="sql__runner--left-panel">
     

        <Menu :model="items" class="w-6 md:w-12rem">
            <template #start>
                <span class="inline-flex align-items-center gap-1 px-2 py-2">
                
                    <i class="pi pi-briefcase" color="bg-primary"></i>
                    <span class="font-medium text-xl font-semibold">WORK<span class="text-primary">SPACES</span></span>
                </span>
            </template>
            <template #submenuheader="{ item }">
                <span class="text-primary font-bold"><i class="pi pi-database"></i> {{ item.label }}</span>
            </template>

            <template #item="{ item, props }">
                <Tree v-if="!item.label.includes('query')" v-model:selectionKeys="selectedKey" :value="nodes"
                    selectionMode="single">
                </Tree>
                <span v-else class="p-2">{{ item.label }}</span>
         
            </template>

            <template #end>
                <button
                    class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" class="mr-2"
                        shape="circle" />
                    <span class="inline-flex flex-column">
                        <span class="font-bold">Mohit Patel</span>
                        <span class="text-sm">Admin</span>
                    </span>
                </button>
            </template>
        </Menu>

    </div> -->
</template>
<style lang="scss">
.sql__runner--left-panel {
    border-right: 1px solid #dedede;
    height: calc(100vh - 56px);

    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #dedede;
        padding: 1rem;
    }

    // padding: ;
    .database-selection {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .available-tables {
        margin-bottom: 1rem;

        h4 {
            margin-bottom: 0.5rem;
        }
    }

    .p-tree {
        padding: 0;
    }
}
</style>