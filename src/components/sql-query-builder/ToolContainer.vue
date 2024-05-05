<script setup lang="ts">
import { ref, computed } from "vue"
import LeftPanel from "./LeftPanel.vue";
import { tableData } from "@/mock-data/QueryBuilderData";
import SqlQueryBuilder from "./SqlQueryBuilder.vue";
import RightPanel from "./RightPanel.vue";
import { useAppStore } from '@/store/index'

const store = useAppStore()
const selectedColumns = ref()
const showWorkspacePanel = computed({
    get() {
        return store.showWorkspacePanel
    },
    set(val) {
        store.showWorkspacePanel = val
    }
})
</script>

<template>
    <div class="sql__builder--tool">

        <LeftPanel v-if="showWorkspacePanel" />
        <div class="sql__runner--center-panel">
            <SqlQueryBuilder />
        </div>

        <div class="sql__runner--right-panel">
            <RightPanel />
            <Toast position="top-center" />
            <div class="result-actions">
                <!-- <Button type="button" label="Export CSV" icon="pi pi-download" outlined />

                <Button type="button" icon="pi pi-window-maximize" outlined /> -->
            </div>
        </div>

    </div>
</template>
<style lang="scss">
.sql__builder--tool {
    display: flex;
    height: calc(100vh - 56px);

    .sql__runner--center-panel {
        padding: 1rem;
        // background-color: #F4F4F4;
        background-color: #F8FAFC;

        width: 100%;
    }

    .sql__runner--right-panel {
        border-left: 1px solid #dedede;
        height: 100%;
        width: 100%;
    }

}
</style>