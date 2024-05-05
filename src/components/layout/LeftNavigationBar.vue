<script setup lang="ts">
import { ref } from "vue";
const selectedMenu = ref('dashboard')
</script>
<template>
    <div class="left__navigation--sidebar">
        <!-- <div @click="selectedMenu = 'home'" :class="['left__navigation-item', { '--active': selectedMenu == 'home' }]">
            <i class="pi pi-home" style="font-size: 1.5rem"></i>
        </div>
        <div @click="selectedMenu = 'home1'"
            :class="['left__navigation-item', { '--active': selectedMenu == 'home1' }]">
            <i class="pi pi-objects-column" style="font-size: 1.5rem"></i>
        </div> -->
        <div>
            <RouterLink to="/dashboard" @click="selectedMenu = 'dashboard'"
                :class="['left__navigation-item', { '--active': selectedMenu == 'dashboard' }]">
                <i class="pi pi-th-large" style="font-size: 1.5rem"></i>
            </RouterLink>
            <div @click="selectedMenu = 'database'"
                :class="['left__navigation-item', { '--active': selectedMenu == 'database' }]">
                <i class="pi pi-database" style="font-size: 1.5rem"></i>
            </div>
            <div @click="selectedMenu = 'history'"
                :class="['left__navigation-item', { '--active': selectedMenu == 'history' }]">
                <i class="pi pi-history" style="font-size: 1.5rem"></i>
            </div>

        </div>
        <div>
            <div @click="selectedMenu = 'support'"
                :class="['left__navigation-item', { '--active': selectedMenu == 'support' }]">
                <i class="pi pi-headphones" style="font-size: 1.5rem"></i>
            </div>
            <div @click="selectedMenu = 'info'"
                :class="['left__navigation-item', { '--active': selectedMenu == 'info' }]">
                <i class="pi pi-info-circle " style="font-size: 1.5rem"></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.left__navigation--sidebar {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    // height: 100%;
    width: 96px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: transform .4s cubic-bezier(.05, .74, .2, .99);
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    background-color: #DFE6E9;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .left__navigation-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em 1em;
        cursor: pointer;
        text-decoration: none;
        color: #292A2B;
        -webkit-tap-highlight-color: transparent;
    }

    .--active {
        border-left: .4em solid #00ad9f;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0 0 3px #00000023;
        background-color: #0080801a;
    }
}
</style>