<script setup lang="ts">
import { ref } from "vue"
import LeftPanel from "./LeftPanel.vue";
import { tableData } from "@/mock-data/QueryBuilderData";
import ColumnsBlock from "./builder-blocks/ColumnsBlock.vue";
import FilterBlock from "./builder-blocks/FilterBlock.vue";

const selectedColumns = ref()
</script>

<template>

    <div class="sql__runner--center-panel">
        <div class="sql__query-builder-block">
            <div class="editor__header">
                <i class="pi pi-hammer mr-2"></i> Build your query
            </div>
            <div>

                <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                    <AccordionTab>
                        <template #header>
                            <span class="flex align-items-center gap-2 w-full">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                                    shape="circle" />
                                <span class="font-bold white-space-nowrap">Amy Elsner</span>
                                <Badge value="3" class="ml-auto mr-2" />
                            </span>
                        </template>
                        <p class="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </AccordionTab>
                    <AccordionTab class="mt-4">
                        <template #header>
                            <span class="flex align-items-center gap-2 w-full">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"
                                    shape="circle" />
                                <span class="font-bold white-space-nowrap">Onyama Limba</span>
                                <Badge value="4" class="ml-auto mr-2" />
                            </span>
                        </template>
                        <p class="m-0">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo
                            enim
                            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                            modi.
                        </p>
                    </AccordionTab>
                    <AccordionTab>
                        <template #header>
                            <span class="flex align-items-center gap-2 w-full">
                                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png"
                                    shape="circle" />
                                <span class="font-bold white-space-nowrap">Ioni Bowcher</span>
                                <Badge value="2" class="ml-auto mr-2" />
                            </span>
                        </template>
                        <p class="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque
                            corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in
                            culpa qui
                            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                            facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                            minus.
                        </p>
                    </AccordionTab>
                </Accordion>
                <ColumnsBlock />
                <FilterBlock />
            </div>
        </div>
    </div>


</template>
<style lang="scss">
.sql__runner--center-panel {
    padding: 1rem;
    // background-color: #F4F4F4;
    background-color: #F8FAFC;

    width: 100%;
}



.sql__query-builder-block {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .editor__header {
        padding: 8px 8px 8px 16px;
        color: #566d79;
        font-size: 18px;
        text-align: left;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        background-color: #fff;
        border-radius: 6px;
        border-left: 4px solid #008080;
        box-shadow: 0 0 0 1px #0000000d;
        margin: 0 24px 24px 0;
        text-transform: uppercase;
    }

    .query__operation--card {
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 4px #00000012;
        min-width: 220px;
        color: #143a56;
        width: 100%;
        margin-bottom: 1rem;

        .header {
            display: flex;
            align-items: center;
            cursor: pointer;

            // flex-wrap: nowrap;
            justify-content: space-between;
            padding: 20px;

            .header-left {
                display: flex;
                align-items: center;
                gap: 8px;

                .page-card__header-label {
                    font-size: 16px;
                    font-weight: 500;
                }
            }

            .header-right {
                .header-toggle-btn {
                    align-items: center;
                    background: transparent;
                    border-radius: 32px;
                    display: flex;
                    font-size: 16px;
                    height: 24px;
                    justify-content: center;
                    transition: all .3s ease-in-out;
                    width: 24px;
                }
            }

            .p-multiselect {
                border: none !important;
                box-shadow: none !important;
            }
        }
    }

}
</style>