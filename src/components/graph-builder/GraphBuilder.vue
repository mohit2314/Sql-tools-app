<script setup lang="ts">
import DataSelection from "./DataSelection.vue"
import GraphRenderSection from "./GraphRenderSection.vue";

</script>

<template>
    <div class="graph__builder--container flex">
        <div class="left__section p-3">
            <DataSelection />
        </div>
        <div class="right__section">
            <GraphRenderSection />
        </div>
    </div>
</template>

<style lang="scss">
.graph__builder--container {
    // height: 100%;
    height: calc(100vh - 56px);

    .left__section {
        width: 35%;
        border-right: 1px solid #dedede;
    }

    .right__section {
        width: 65%;
        // height: 100%;
        padding: 0;
        padding-left: 15px;
        border: none;
        // z-index: 30;
        background: #f3f4fa;
    }
}
</style>