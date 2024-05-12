<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import { computed, onMounted, reactive, ref } from 'vue';
import { singleAxisChartList } from './graphs-schema';
import { useGraphBuilderStore } from '@/store/graphBuilder'
import { mockData } from './mock-data/TableDatasets';
import { dataTransformer } from './ChartTransformer';
import { storeToRefs } from "pinia";
const { selectedChartOptions } = storeToRefs(useGraphBuilderStore());
const graphStore = useGraphBuilderStore()

let selectedTab = ref('data-selection')

const datasets = mockData.datasets;
const selectedDataset = computed(() => graphStore.selectedTableDataset)
const setSelectedDataset = (e: any) => {
    console.log("selected dataset", e)
    graphStore.updateSelectedTable(e.value)
}



const availableColumns = computed(() => {
    if (selectedDataset.value && selectedDataset.value.value.columns) {
        return selectedDataset.value.value.columns.map((column) => ({
            name: column.name,
            type: column.type,
        }));
    }
    return [];
});

let dimensionsArr = ref([
    { selectedDimension: {} }
])
const addDimension = () => {
    dimensionsArr.value.push({
        selectedDimension: {}
    })
}
let selectedDataColumn = ref({})
// let selectedChartOptions = computed(() => graphStore.selectedChartOptions)
const graphTypes = computed(() => {
    return singleAxisChartList
})
let formattedData = ref({})

const plotGraph = () => {
    const formattedData = dataTransformer('bar-chart', selectedDataset.value.value, dimensionsArr.value, selectedDataColumn.value);
    if (!formattedData) {
        return;
    }

    console.log('Formatted Data:', formattedData);
    graphStore.updateGraphOptions(graphTypes.value[0].options);

    selectedChartOptions.value.dataset[0] = formattedData;
};
onMounted(() => {
})
const getGraphTypesImageUrl = (iconName: string) => {
    const imagePath = `/src/assets/images/graph-builder/${iconName}`
    return new URL(imagePath, import.meta.url).href
}
const changeGraphType = (graphOptions: any) => {
    // selectedChartOptions = graphOptions
    // plotGraph(graphOptions)
    graphStore.updateGraphOptions({})
    graphStore.updateGraphOptions(graphOptions.options)
    let formattedData = dataTransformer(graphOptions.title, selectedDataset.value.value, dimensionsArr.value, selectedDataColumn.value)
    graphStore.selectedChartOptions.dataset[0] = formattedData
    console.log(formattedData, selectedChartOptions.value)
}


</script>

<template>
    <div>

        <div class="custom__tabs mb-4">
            <!-- <TabMenu :model="tabOptions" /> -->
            <span @click="selectedTab = 'data-selection'"
                :class="['tab', 'p-2', { '--active-tab': selectedTab == 'data-selection' }]"><i
                    class="pi pi-database mr-2"></i>Data
                selection</span>
            <span @click="selectedTab = 'graph-styling'"
                :class="['tab', 'p-2', { '--active-tab': selectedTab == 'graph-styling' }]"><i
                    class="pi pi-palette mr-2"></i>Styling</span>

        </div>
        <div v-if="selectedTab == 'data-selection'">
            <div>
                <div class="flex flex-column gap-2 w-full">
                    <label for="workspacesDropdown" class="text-primary font-bold"><i
                            class="pi pi-table mr-2"></i>Select
                        existing table</label>
                    <Dropdown v-model="selectedDataset" :options="datasets" checkmark optionLabel="name"
                        placeholder="Select a dataset" class="w-full" @change="setSelectedDataset" />
                </div>

                <div class="flex flex-column gap-2 w-full mt-4">
                    <div class="flex justify-content-between align-items-center"> <label for="workspacesDropdown"
                            class="text-primary font-bold"><i class="pi pi-briefcase mr-2"></i>
                            1st dimension </label> <Button @click="addDimension" size="small" severity="secondary"><i
                                class="pi pi-plus mr-2"></i>
                            Add
                            dimension</Button></div>
                    <Dropdown checkmark v-model="dimensionsArr[0].selectedDimension" :options="availableColumns"
                        optionLabel="name" placeholder="Select 1st dimension" class="w-full" />
                </div>
                <div v-if="dimensionsArr.length > 1" class="flex flex-column gap-2 w-full mt-4">
                    <div class="flex justify-content-between align-items-center"> <label for="workspacesDropdown"
                            class="text-primary font-bold"><i class="pi pi-briefcase mr-2"></i>
                            2nd dimension </label> <Button @click="dimensionsArr.pop()" text icon="pi pi-trash" />
                    </div>
                    <Dropdown v-model="dimensionsArr[1].selectedDimension" :options="availableColumns" checkmark
                        optionLabel="name" placeholder="Select 2nd dimension" class="w-full" />
                </div>

                <div class="flex flex-column gap-2 w-full mt-4">
                    <label for="workspacesDropdown" class="text-primary font-bold"><i
                            class="pi pi-briefcase mr-2"></i>Select
                        Column you want to plot against </label>
                    <Dropdown v-model="selectedDataColumn" :options="availableColumns" checkmark optionLabel="name"
                        placeholder="Select column against which you want to plot" class="w-full" />
                </div>

                <div class="flex flex-column mt-4">
                    <Button @click="plotGraph" class="mb-2 flex justify-content-center">

                        <i class="pi pi-chart-bar mr-2"></i> Plot graph
                    </Button>
                </div>
            </div>
            <Divider />
            <!-- Graph types -->
            <div class="graph__types-container mt-4">
                <span class="header p-2">Graph types</span>
                <div class="flex flex-wrap gap-2 mt-4">
                    <span @click="changeGraphType(graph)" class="graph__type-card p-2" v-for="graph in graphTypes"
                        :key="graph.title">
                        <img width="44px" :src="getGraphTypesImageUrl(graph.icon)" alt="">
                    </span>
                </div>
            </div>
        </div>
        <!-- Graph styles tab -->
        <div v-else>
            <div v-if="selectedChartOptions">
                <div class="flex justify-content-between"><span>Background Color</span> <span>
                        <input type="color" v-model="selectedChartOptions.backgroundColor">
                    </span></div>
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
