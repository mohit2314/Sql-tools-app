<script setup lang="ts">
import { ref } from "vue"
import { tableData } from "@/mock-data/QueryBuilderData";

const selectedColumns = ref()
</script>

<template>
    <div class="query__operation--card">
        <div class="header">
            <div class="header-left"><i style="font-size: 20px;" class="light-icon-template"></i>
                <span class="page-card__header-label">Columns</span>
            </div>
            <div class="header-right">
                <MultiSelect v-model="selectedColumns" :options="tableData.columns" optionLabel="column_name"
                    placeholder="Select Columns" :maxSelectedLabels="3" class="w-full md:w-20rem" display="chip" />
                <!-- <i class="header-toggle-btn light-icon-chevron-down"></i> -->
            </div>

        </div>

    </div>
</template>

<style lang="scss"></style>