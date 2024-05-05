<script setup lang="ts">
import { ref, defineEmits } from "vue"
import { tableData } from "@/mock-data/QueryBuilderData";
import { useAppStore } from '@/store/index'
defineEmits(['selectedColumnsEvent', 'submit'])

const store = useAppStore()
const selectedColumns = ref()
const updateQuery = () => {
    let queryForSelectedCols = ''
    selectedColumns.value.forEach(col => {
        queryForSelectedCols = queryForSelectedCols + col.column_name + ','
    })
    // console.log("selected cols", selectedColumns.value, queryForSelectedCols)
    let modifiedQuery = `SELECT
  ${queryForSelectedCols}
FROM
  customers
LIMIT
  10`

    store.updateSqlQuery(modifiedQuery)
}
</script>

<template>
    <div class="query__operation--card">
        <div class="header">
            <div class="header-left"><i style="font-size: 20px;" class="light-icon-template"></i>
                <span class="page-card__header-label">Columns</span>
            </div>
            <div class="header-right">
                <MultiSelect v-model="selectedColumns" :options="tableData.columns" optionLabel="column_name"
                    placeholder="Select Columns" :maxSelectedLabels="3" class="w-full md:w-20rem" display="chip"
                    @hide="$emit('selectedColumnsEvent', selectedColumns)" @change="updateQuery" />
                <!-- <i class="header-toggle-btn light-icon-chevron-down"></i> -->
            </div>

        </div>

    </div>
</template>

<style lang="scss"></style>