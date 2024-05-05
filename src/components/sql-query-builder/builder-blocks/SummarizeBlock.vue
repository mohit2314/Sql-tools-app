<script setup lang="ts">
import { ref } from "vue"
import { tableData } from "@/mock-data/QueryBuilderData";

const selectedColumns = ref()
const isFiltersOpen = ref(false)
</script>

<template>
    <div class="query__operation--card">
        <div class="header">
            <div class="header-left">
                <i style="font-size: 20px;" class="light-icon-license"></i>
                <span class="page-card__header-label">Summarize</span>
            </div>
            <div class="header-right flex">
                <Badge value="3" class="ml-auto mr-2" />
                <span class="header-toggle-btn" @click="isFiltersOpen = !isFiltersOpen">
                    <i :class="isFiltersOpen ? 'light-icon-chevron-up' : 'light-icon-chevron-down'"></i>
                </span>
            </div>

        </div>
        <LvCollapsible :show="isFiltersOpen">
            <div class="px-2">
                <p style="margin:0">LightVue is the most comprehensive, performant and easy to use set of UI components
                    for Vue.js. It
                    provides a wide range of high quality Widgets and Plugins built with accessibility, responsiveness
                    and performance in mind.</p>
            </div>
        </LvCollapsible>
    </div>
</template>

<style lang="scss"></style>