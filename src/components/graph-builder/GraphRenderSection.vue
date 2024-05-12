<template>
    <div class="graph__cta-options flex align-items-center justify-content-between gap-4 my-3">
        <div class="flex gap-4">
            <div class="flex align-items-center">
                <InputSwitch id="darkMode" v-model="darkMode" />
                <label for="darkMode" class="ml-2">Dark Mode</label>
            </div>
            <div class="flex align-items-center">
                <InputSwitch id="decalPattern" v-model="decalPattern" />
                <label for="decalPattern" class="ml-2">Decal Pattern</label>
            </div>
        </div>
        <div class="flex gap-2">
            <Button text severity="secondary" class="bg-white" outlined><i class="pi pi-save mr-2"></i>
                Save</Button>
            <Button text severity="secondary" class="bg-white" outlined><i style="font-size: 1.2rem;"
                    class="light-icon-apps mr-2"></i>
                Add to dashboard</Button>
            <Button severity="secondary" class="bg-white" outlined><i class="pi pi-share-alt mr-2"></i> Share</Button>
        </div>
    </div>

    <div class="graph__render--container">
        <v-chart ref="chartRef" :key="selectedChartOptions" :theme="darkMode ? 'dark' : ''" class="chart"
            :option="selectedChartOptions" />
    </div>

</template>

<script setup>
// import { use } from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { PieChart } from "echarts/charts";
// import {
//     TitleComponent,
//     TooltipComponent,
//     LegendComponent
// } from "echarts/components";
import "echarts"
import VChart from "vue-echarts";
import { ref, provide, computed } from "vue";
import { useGraphBuilderStore } from '@/store/graphBuilder'
// import { downloadEchart } from '@planx/vue-echarts';

// use([
//     CanvasRenderer,
//     PieChart,
//     TitleComponent,
//     TooltipComponent,
//     LegendComponent
// ]);

// provide(THEME_KEY, "dark");
const graphStore = useGraphBuilderStore()

const selectedChartOptions = computed({
    get() {
        return graphStore.selectedChartOptions
    },
    set(val) {
        graphStore.selectedChartOptions = val
    }
})
let darkMode = ref(false)
let decalPattern = ref(false)


const option = ref({
    title: {
        text: "Traffic Sources",
        left: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        left: "left",
        data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
    },
    series: [
        {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                { value: 335, name: "Direct" },
                { value: 310, name: "Email" },
                { value: 234, name: "Ad Networks" },
                { value: 135, name: "Video Ads" },
                { value: 1548, name: "Search Engines" }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
});
</script>

<style lang="scss" scoped>
.graph__render--container {
    // position: absolute;
    // top: 42px;
    // right: 15px;
    // bottom: 50px;
    // left: 15px;
    // height: 100%;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
    border-radius: 5px;
    // background: #fff;
    background-color: rgb(255, 255, 255);
    overflow: hidden;
    padding: 10px;
    min-height: 600px;
    width: 100%;

    .chart {
        min-height: 600px !important;
        height: 100%;
    }
}

.graph__cta-options {}
</style>