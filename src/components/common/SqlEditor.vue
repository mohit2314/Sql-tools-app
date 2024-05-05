<template>
    <Codemirror v-model:value="sqlQuery" :options="cmOptions" border ref="cmRef" class="code__mirror--editor"
        height="346" width="500">
    </Codemirror>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue"
import "codemirror/mode/javascript/javascript.js"
import "codemirror/mode/sql/sql.js";
import Codemirror from "codemirror-editor-vue3"
import { useAppStore } from '@/store/index'

const store = useAppStore()

// const sqlQuery = computed(() => store.sqlQuery)
const sqlQuery = computed({
    get() {
        return store.sqlQuery
    },
    set(val) {
        store.sqlQuery = val
    }
})
const code = ref(
    `CREATE TABLE customer
(
	"ID" int8 PRIMARY KEY,
  	"Name" varchar(50) NOT NULL,
  	"Age" int NOT NULL,
  	"City" char(50),
  	"Salary" numeric
);
  
  `
)

const cmRef = ref()
const cmOptions = {
    mode: "sql"
}


onMounted(() => {
    setTimeout(() => {
        cmRef.value?.refresh()
    }, 1000)


    setTimeout(() => {
        cmRef.value?.cminstance.isClean()
    }, 3000)
})

onUnmounted(() => {
    cmRef.value?.destroy()
})


</script>
<style lang="scss">
.code__mirror--editor {
    max-width: 500px;
    max-height: 500px;
    height: 100%;

    .codemirror-container {
        border-radius: 6px !important;
    }
}

.codemirror-container {
    border-radius: 6px !important;
    font-size: 16px !important;
}
</style>