<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.label"
                        src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                        :class="`w-2rem flag flag-${slotProps.node.data}`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.data.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'country',
    label: 'Admin',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Private workspace',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Cutomers database',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Products database',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'Office workspace',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'Users database',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Files database',
                    data: 'ma'
                }
            ]
        }
    ]
});
</script>
