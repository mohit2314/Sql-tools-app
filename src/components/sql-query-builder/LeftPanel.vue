<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { WorkspaceService } from "@/mock-data/WorkspacesData";
import { useAppStore, type Database } from '@/store/index'
const store = useAppStore()



const databases: Database[] = [
    { name: "Database 1", tables: ["Table 1", "Table 2", "Table 3"] },
    { name: "Database 2", tables: ["Table A", "Table B", "Table C"] },
];


const selectedTable = ref<string | null>(null);
const nodes = ref(null);
const selectedKey = ref(null);
// const toast = useToast();
const selectedWorkspace = ref('Personal Workspace')
const selectedDatabase = ref<Database | null>(null);
const availableWorkspaces = computed(() => store.availableWorkspaces)
const availableDatabases = computed(() => store.availableDatabases)
// const availableTables = computed(() => {
// databases.filter((db:Database)=>  db.name == selectedDatabase.value?.name)
// })

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
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                shortcut: '⌘+O'
            },
            {
                label: 'Messages',
                icon: 'pi pi-inbox',
                badge: 2
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                shortcut: '⌘+Q'
            }
        ]
    },
    {
        separator: true
    }
]);
</script>

<template>
    <div class="sql__builder--left-panel">
        <span class="flex align-items-center gap-1 px-2 py-2 text-center">

            <i class="pi pi-briefcase" color="bg-primary"></i>
            <span class="font-medium text-xl font-semibold">WORK<span class="text-primary">SPACES</span></span>
        </span>
        <Divider />
        <div class="flex flex-column gap-4 p-2">
            <div class="flex flex-column gap-2 w-full">
                <label for="workspacesDropdown" class="text-primary font-bold"><i
                        class="pi pi-briefcase mr-2"></i>Select your
                    workspace</label>
                <Dropdown id="workspacesDropdown" v-model="selectedWorkspace" :options="availableWorkspaces"
                    optionLabel="name" placeholder="Select workspace" checkmark :highlightOnSelect="false"
                    class="w-full" />
            </div>
            <div class="flex flex-column gap-2">
                <label for="databasesDropdown" class="text-primary font-bold"><i class="pi pi-database mr-2"></i>Select
                    database</label>
                <Dropdown id="databasesDropdown" v-model="selectedDatabase" :options="availableDatabases"
                    optionLabel="name" placeholder="Select database" checkmark :highlightOnSelect="false"
                    class="w-full" />
            </div>
            <div>
                <div class="text-primary font-bold"><i class="pi pi-table mr-2"></i> Available tables</div>
                <Listbox v-model="selectedTable" :options="selectedDatabase?.tables" filter
                    filterPlaceholder="Search your tables..." class="w-full md:w-14rem">
                    <template #option="slotProps">
                        <div class="flex align-items-center justify-content-center">
                            <div><i class="pi pi-table"></i> {{ slotProps.option }}</div>
                        </div>
                    </template>

                </Listbox>

            </div>

        </div>

    </div>
</template>
<style lang="scss">
.sql__builder--left-panel {
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

    .p-listbox {
        border: none !important;

        li>div {
            justify-content: flex-start !important;
        }
    }
}
</style>