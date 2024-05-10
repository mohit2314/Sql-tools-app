<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';

const datasets = ref([
    { name: 'Sales Data', value: 'sales.json' },
    { name: 'Customer Satisfaction Survey', value: 'satisfaction.json' },
    { name: 'Website Traffic', value: 'traffic.json' }
]);
const selectedDataset = ref(null);

const emitDataset = () => {
    // Fetch data from the selected file and emit
}
const graphTypes = ref([
    {
        icon: 'bar-graph',
        name: 'Bar graph',
        type: 'bar'
    },
    {
        icon: 'bar-graph',
        name: 'Bar graph',
        type: 'bar'
    }, {
        icon: 'bar-graph',
        name: 'Bar graph',
        type: 'bar'
    }, {
        icon: 'bar-graph',
        name: 'Bar graph',
        type: 'bar'
    }, {
        icon: 'bar-graph',
        name: 'Bar graph',
        type: 'bar'
    }
])
let selectedTab = ref('data-selection')
</script>

<template>
    <div>
        <div>
            <div class="custom__tabs mb-2">
                <!-- <TabMenu :model="tabOptions" /> -->
                <span @click="selectedTab = 'data-selection'"
                    :class="['tab', 'p-2', { '--active-tab': selectedTab == 'data-selection' }]"><i
                        class="pi pi-database mr-2"></i>Data
                    selection</span>
                <span @click="selectedTab = 'graph-styling'"
                    :class="['tab', 'p-2', { '--active-tab': selectedTab == 'graph-styling' }]"><i
                        class="pi pi-palette mr-2"></i>Styling</span>

            </div>
            <div class="flex flex-column gap-2 w-full">
                <label for="workspacesDropdown" class="text-primary font-bold"><i class="pi pi-table mr-2"></i>Select
                    existing table</label>
                <Dropdown v-model="selectedDataset" :options="datasets" checkmark optionLabel="name"
                    placeholder="Select a dataset" class="w-full" @change="emitDataset" />
            </div>

            <div class="flex flex-column gap-2 w-full mt-4">
                <div class="flex justify-content-between align-items-center"> <label for="workspacesDropdown"
                        class="text-primary font-bold"><i class="pi pi-briefcase mr-2"></i>
                        1st dimension </label> <Button size="small" severity="secondary"><i class="pi pi-plus mr-2"></i>
                        Add
                        dimension</Button></div>
                <Dropdown v-model="selectedDataset" :options="datasets" checkmark optionLabel="name"
                    placeholder="Select 1st dimension" class="w-full" @change="emitDataset" />
            </div>


            <div class="flex flex-column gap-2 w-full mt-4">
                <label for="workspacesDropdown" class="text-primary font-bold"><i
                        class="pi pi-briefcase mr-2"></i>Select
                    Column you want to plot against </label>
                <Dropdown v-model="selectedDataset" :options="datasets" checkmark optionLabel="name"
                    placeholder="Select column against which you want to plot" class="w-full" @change="emitDataset" />
            </div>
            <div class="flex flex-column gap-2 w-full mt-4">
                <label for="workspacesDropdown" class="text-primary font-bold"><i class="pi pi-briefcase mr-2"></i>
                    2nd dimension </label>
                <Dropdown v-model="selectedDataset" :options="datasets" checkmark optionLabel="name"
                    placeholder="Select 2nd dimension" class="w-full" @change="emitDataset" />
            </div>
            <div class="flex flex-column mt-4">
                <Button class="mb-2 flex justify-content-center">

                    <i class="pi pi-chart-bar mr-2"></i> Plot graph
                </Button>
            </div>
        </div>
        <Divider />
        <!-- Graph types -->
        <div class="graph__types-container mt-4">
            <span class="header p-2">Graph types</span>
            <div class="flex flex-wrap gap-2 mt-4">
                <span class="graph__type-card p-2" v-for="graph in graphTypes" :key="graph.name">
                    <img width="44px" src="@/assets/images/graph-builder/bar-graph.png" alt="">
                </span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.custom__tabs {
    display: flex;
    gap: 12px;
    border-bottom: 1px solid #dedede;

    .tab {
        width: 50%;
        text-align: center;
        cursor: pointer;
    }

    .--active-tab {
        background-color: #EFF5FB;
        color: #2F73AA;
        border-bottom: 2px solid #2F73AA;
    }
}

.graph__types-container {
    .header {
        background-color: #EFF5FB;
        color: #2F73AA;
        border-bottom: 2px solid #2F73AA;
    }

    .graph__type-card {
        border: 1px solid #dedede;
        border-radius: 6px;
        cursor: pointer;
    }
}
</style>
