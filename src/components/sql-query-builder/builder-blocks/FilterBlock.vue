<script setup lang="ts">
import { ref, defineProps, reactive } from "vue"
import { tableData, filterOperations, type tableColumn } from "@/mock-data/QueryBuilderData";
defineProps(['selectedColumns'])
const selectedColumns = ref()
const isFiltersOpen = ref(false)
const selectedField = ref<tableColumn>({
    "column_name": "",
    "column_default": null,
    "data_type": "",
    "is_nullable": "",
    "character_maximum_length": 0,
    "numeric_precision": null
})
let newFilterFields = reactive({
    selectedField: {
        "column_name": "",
        "column_default": null,
        "data_type": "",
        "is_nullable": "",
        "character_maximum_length": 0,
        "numeric_precision": null
    } as tableColumn,
    selectedFilterOperation: '',
    selectedFilterValue: ''
})
let addedFiltersList = reactive([] as any[])
const addFilterRow = () => {
    let temp = {
        selectedField: newFilterFields.selectedField,
        selectedFilterOperation: newFilterFields.selectedFilterOperation,
        selectedFilterValue: newFilterFields.selectedFilterValue
    }
    addedFiltersList.push(temp)
    newFilterFields =
    {
        selectedField: {
            "column_name": "",
            "column_default": null,
            "data_type": "",
            "is_nullable": "",
            "character_maximum_length": 0,
            "numeric_precision": null
        } as tableColumn,
        selectedFilterOperation: '',
        selectedFilterValue: ''
    }
}
const removeFilter = (index: number) => {
    addedFiltersList.splice(index, 1)
}
</script>

<template>
    <div class="query__operation--card">
        <div class="header">
            <div class="header-left">
                <i style="font-size: 20px;" class="light-icon-filter"></i>
                <span class="page-card__header-label">Filter</span>
            </div>
            <div class="header-right flex">
                <Badge value="3" class="ml-auto mr-2" />
                <span class="header-toggle-btn" @click="isFiltersOpen = !isFiltersOpen">
                    <i :class="isFiltersOpen ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
                </span>
            </div>

        </div>
        <LvCollapsible :show="isFiltersOpen">
            <div class="filters-block px-2">
                <div>
                    <div class="added__filters p-2" v-for="(filterRow, index) in addedFiltersList"
                        :key="filterRow.selectedField.column_name">
                        <div class="added__filter-item flex align-items-center"><span
                                style="background-color: #EFFAF5;color:#31815C">customers</span>
                            <span style="background-color: #EFF5FB;color: #2F73AA;">{{
                                filterRow.selectedField.column_name
                                }}</span>
                            <span class="bg-secondary" style="background-color: #F1F5F9;">{{
                                filterRow.selectedFilterOperation }}</span>
                            <span v-if="newFilterFields.selectedFilterValue">{{
                                filterRow.selectedFilterValue }}</span>
                            <Button @click="removeFilter(index)" class="ml-4" size="small"
                                style="background-color: #FEECF0;color: #CC0F35;" severity="secondary"><i
                                    class="light-icon-x"></i></Button>
                        </div>
                    </div>
                    <div class="flex p-2">
                        <Dropdown v-model="newFilterFields.selectedField" :options="tableData.columns"
                            optionLabel="column_name" placeholder="Select field" class="w-full md:w-14rem"
                            variant="filled" />
                        <Dropdown v-model="newFilterFields.selectedFilterOperation"
                            :options="filterOperations[newFilterFields.selectedField.data_type]"
                            placeholder="Select operation" class="w-full md:w-14rem" variant="filled" />
                        <InputText type="text" v-model="newFilterFields.selectedFilterValue" variant="filled"
                            placeholder="Value" />
                    </div>
                    <div class="flex justify-content-end p-2">
                        <Button @click="addFilterRow" size="small" style="background-color: #EFF5FB;color: #2F73AA;"
                            severity="secondary">Add
                            more<i class="light-icon-plus ml-2"></i></Button>
                    </div>
                </div>

            </div>
        </LvCollapsible>
    </div>
</template>

<style lang="scss">
.filters-block {

    .p-dropdown,
    .p-inputtext {
        border: none;
    }

    .added__filters {
        .added__filter-item {
            span {
                padding: 0.5rem;
            }
        }
    }

}
</style>