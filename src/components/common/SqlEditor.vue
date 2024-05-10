<template>
    <Codemirror v-if="propQuery" :key="theme" :value="propQuery" :options="cmOptions" :readOnly="readOnly" border
        ref="cmRef" class="code__mirror--editor" :height="height" style="width: 100%;">
    </Codemirror>
    <Codemirror v-else v-model:value="sqlQuery" :options="cmOptions" :readOnly="readOnly" border ref="cmRef"
        class="code__mirror--editor" :height="height" style="width: 100%;">
    </Codemirror>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, defineProps } from "vue"
import "codemirror/mode/javascript/javascript.js"
import "codemirror/mode/sql/sql.js";
import "codemirror/theme/ayu-dark.css"
import "codemirror/theme/cobalt.css"
import "codemirror/theme/elegant.css"
import "codemirror/theme/base16-light.css"
import Codemirror from "codemirror-editor-vue3"
import { useAppStore } from '@/store/index'
const props = defineProps(
    {
        'width': {
            type: String,
            default: "500"
        },
        'theme': {
            type: String,
            default: "default"
        },
        'readOnly': {
            type: Boolean,
            default: false
        },
        'height': {
            type: String,
            default: "346"
        },
        'cursorBlinkRate': {
            type: Number,
            default: 530
        },
        'propQuery': {
            type: String,
            default: ''
        }
    },

)
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
    mode: "sql",
    theme: props.theme,
    readOnly: props.readOnly,
    height: props.height,
    cursorBlinkRate: props.cursorBlinkRate
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