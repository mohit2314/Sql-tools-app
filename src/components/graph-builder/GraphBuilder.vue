<script setup lang="ts">
import DataSelection from "./DataSelection.vue"
import GraphRenderSection from "./GraphRenderSection.vue";

</script>

<template>
    <div class="graph__builder--container flex">
        <div class="left__section p-4">
            <DataSelection />
        </div>
        <div class="right__section">
            <GraphRenderSection />
        </div>
    </div>
</template>

<style lang="scss">
.graph__builder--container {
    height: 100%;

    .left__section {
        width: 30%;
        border-right: 1px solid #dedede;
    }

    .right__section {
        width: 70%;
    }
}
</style>