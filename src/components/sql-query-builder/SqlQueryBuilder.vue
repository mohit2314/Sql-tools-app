<script setup lang="ts">
import { ref } from "vue"
import LeftPanel from "./LeftPanel.vue";
import { tableData } from "@/mock-data/QueryBuilderData";
import ColumnsBlock from "./builder-blocks/ColumnsBlock.vue";
import FilterBlock from "./builder-blocks/FilterBlock.vue";
import JoinBlock from "./builder-blocks/JoinBlock.vue";
import LimitBlock from "./builder-blocks/LimitBlock.vue";
import SortBlock from "./builder-blocks/SortBlock.vue";
import SummarizeBlock from "./builder-blocks/SummarizeBlock.vue";
import GroupByBlock from "./builder-blocks/GroupByBlock.vue";

const selectedColumns = ref([])
const setColumns = (e: any) => {
    console.log('columns', e)
    selectedColumns.value = e
}
</script>

<template>

    <div class="sql__runner--center-panel">
        <div class="sql__query-builder-block">
            <div class="editor__header">
                <i class="pi pi-hammer mr-2"></i> Build your query
            </div>
            <div>

                <ColumnsBlock @selectedColumnsEvent="setColumns" />
                <FilterBlock :selectedColumns="selectedColumns" />
                <JoinBlock />
                <SortBlock />
                <SummarizeBlock />
                <GroupByBlock />
                <LimitBlock />
            </div>
        </div>
    </div>


</template>
<style lang="scss">
.sql__runner--center-panel {
    padding: 1rem;
    // background-color: #F4F4F4;
    background-color: #F8FAFC;

    width: 100%;
}



.sql__query-builder-block {
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
        // justify-content: space-between;
        background-color: #fff;
        border-radius: 6px;
        border-left: 4px solid #008080;
        box-shadow: 0 0 0 1px #0000000d;
        margin: 0 24px 24px 0;
        text-transform: uppercase;
    }

    .query__operation--card {
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 4px #00000012;
        min-width: 220px;
        color: #143a56;
        width: 100%;
        margin-bottom: 1rem;

        .header {
            display: flex;
            align-items: center;
            cursor: pointer;

            // flex-wrap: nowrap;
            justify-content: space-between;
            padding: 20px;

            .header-left {
                display: flex;
                align-items: center;
                gap: 8px;

                .page-card__header-label {
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            .header-right {
                .header-toggle-btn {
                    align-items: center;
                    background: transparent;
                    border-radius: 32px;
                    display: flex;
                    font-size: 16px;
                    height: 24px;
                    justify-content: center;
                    transition: all .3s ease-in-out;
                    width: 24px;
                }
            }

            .p-multiselect {
                border: none !important;
                box-shadow: none !important;
            }
        }
    }

}
</style>