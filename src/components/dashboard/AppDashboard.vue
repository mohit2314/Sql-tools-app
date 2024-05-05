<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const toolsList = ref(
    [
        {
            icon: 'pi-cog',
            name: 'Sql Query Runner',
            desc: 'Lets you run your query and view results',
            link: 'sql-query-runner'
        },
        {
            icon: 'pi pi-hammer',
            name: 'Sql Query Builder',
            desc: 'Build your query with visualization ',
            link: 'sql-query-builder'

        },
        {
            icon: 'pi pi-hammer',
            name: 'Sql Query Builder',
            desc: 'Build your query with visualization ',
            link: 'sql-query-runner'

        }, {
            icon: 'pi pi-hammer',
            name: 'Sql Query Builder',
            desc: 'Build your query with visualization ',
            link: 'sql-query-runner'

        }, {
            icon: 'pi pi-comment',
            name: 'Sql Bot',
            desc: 'Ask questions about selected database',
            link: 'sql-query-runner'

        },
        {
            icon: 'pi pi-file-excel',
            name: 'CSV Chat',
            desc: 'Ask questions about the CSV data',
            link: 'sql-query-runner'
        }

    ]
)
const router = useRouter()
const navigateToTool = (toolLink: string) => {
    router.push(toolLink)
}
</script>

<template>
    <div class="dashboard__container">
        <div class="tools__container">
            <div class="section__header mb-4">All Tools</div>
            <div class="tools__card-list">
                <div @click="navigateToTool(tool.link)" class="tool__card" v-for="tool in toolsList" :key="tool.name">
                    <span class="tool__logo"><i :class="tool.icon"></i></span>
                    <div>
                        <div class="tool__title"><span>{{ tool.name }}</span><span><i class=""></i></span></div>
                        <div class="tool__desc">{{ tool.desc }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.dashboard__container {
    padding: 30px 30px 0;

    .tools__container {
        .section__header {
            color: #566d79;
            font-size: 18px;
        }

        .tools__card-list {
            display: flex;
            flex-wrap: wrap;
            gap: 24px;

            .tool__card {
                border: 1px solid rgba(67, 67, 67, .5);
                border-radius: 15px;
                padding: 20px;
                cursor: pointer;
                max-width: 30rem;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 2rem;

                .tool__logo {
                    border-radius: 8px;
                    box-shadow: 0 0 3px #00000023;
                    background-color: #0080801a;
                    padding: 16px;
                }

                .tool__title {
                    margin-bottom: 0.6rem;
                }

                .tool__desc {
                    font-size: 12px;
                    color: #323030;
                }
            }
        }
    }
}
</style>