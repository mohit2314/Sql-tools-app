<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router"
const router = useRouter()
const menu = ref();
const items = ref([
    {
        label: 'mohitpatel2314@gmail.com',
        items: [
            {
                label: 'User',
                icon: 'pi pi-user'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                command: () => {
                    router.push(
                        '/'
                    )
                }
            }
        ]
    }
]);

const toggle = (event: any) => {
    menu.value.toggle(event);
};
</script>


<template>
    <div class="app__header">
        <div class="header__items">
            <RouterLink to="/dashboard" class="header__logo">
                <img src="@/assets/images/app-logo.png" alt="app-logo" width="56px">
                <span class="app-title ml-2">SQLite</span>
            </RouterLink>
            <div class="flex justify-content-end align-items-center" style="width: 30%;">
                <Button @click="$router.push('/plans')" label="Upgrade to pro" icon="pi pi-crown" class="mr-4"
                    iconPos="right" />
                <i v-badge="2" class="pi pi-bell mr-4" style="font-size: 1.5rem;color:#fff" />
                <Avatar icon="pi pi-user" class="mr-2 user__icon" shape="circle" @click="toggle" />
                <!-- <Avatar icon="pi pi-user" class="mr-2" /> -->
                <Menu ref="menu" id="overlay_menu" class="mt-2" :model="items" :popup="true" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.app__header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #0C365A;
    padding: 0 24px;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 997;
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);

    .header__items {
        width: 100%;
        display: flex;
        align-items: center;

        .header__logo {
            width: 80%;
            display: flex;
            align-items: center;
            text-decoration: none;

            .app-title {
                color: #fff;
                font-size: 28px;
                font-weight: 600;
            }
        }

        .user__icon {
            cursor: pointer;

        }

    }
}
</style>