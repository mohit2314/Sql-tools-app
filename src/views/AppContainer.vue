<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/components/layout/Navbar.vue";
import LeftNavigationBar from "@/components/layout/LeftNavigationBar.vue";

</script>
<template>
    <Navbar />
    <LeftNavigationBar />
    <div class="main__app-container">
        <RouterView />

    </div>
</template>
<style lang="scss">
.main__app-container {
    position: absolute;
    right: 0;
    top: 60px;
    width: calc(100% - 100px);
    // padding: 30px 30px 0;

}
</style>
