<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { WorkspaceService } from "@/mock-data/WorkspacesData";
import { useAppStore, type Database } from '@/store/index'
const store = useAppStore()
const selectedWorkspace = ref('Personal Workspace')
const selectedDatabase = ref<Database | null>(null);
const availableWorkspaces = computed(() => store.availableWorkspaces)
const availableDatabases = computed(() => store.availableDatabases)

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);
//@ts-ignore
const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};
//@ts-ignore
const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

//@ts-ignore
const onSelectedFiles = (event) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
};
//@ts-ignore
const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};
const onTemplatedUpload = () => {
    //@ts-ignore

    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};
//@ts-ignore

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    //@ts-ignore

    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
</script>

<template>
    <div class="csv__chatbot-container">
        <Splitter style="height: 100%">
            <SplitterPanel class="flex justify-content-center" :size="75" :minSize="30">
                <div class="p-4">
                    <div class="text-2xl mb-4">Select table from existing records</div>
                    <div class="flex flex-column gap-2 w-full mt-2">
                        <label for="workspacesDropdown" class="text-primary font-bold"><i
                                class="pi pi-briefcase mr-2"></i>Select
                            your
                            workspace</label>
                        <Dropdown id="workspacesDropdown" v-model="selectedWorkspace" :options="availableWorkspaces"
                            optionLabel="name" placeholder="Select workspace" checkmark :highlightOnSelect="false"
                            class="w-full" />
                    </div>
                    <div class="flex flex-column gap-2 mt-4">
                        <label for="databasesDropdown" class="text-primary font-bold"><i
                                class="pi pi-database mr-2"></i>Select
                            database</label>
                        <Dropdown id="databasesDropdown" v-model="selectedDatabase" :options="availableDatabases"
                            optionLabel="name" placeholder="Select database" checkmark :highlightOnSelect="false"
                            class="w-full" />
                    </div>
                    <Divider align="center" class="my-4">
                        Or Upload any csv
                    </Divider>
                    <div class="card">
                        <Toast />
                        <FileUpload name="demo[]" url="/api/upload" @upload="onTemplatedUpload($event)" :multiple="true"
                            accept=".csv" :maxFileSize="1000000" @select="onSelectedFiles">
                            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                                <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                                    <div class="flex gap-2">
                                        <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                                        <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded
                                            outlined severity="success"
                                            :disabled="!files || files.length === 0"></Button>
                                        <Button @click="clearCallback()" icon="pi pi-times" rounded outlined
                                            severity="danger" :disabled="!files || files.length === 0"></Button>
                                    </div>
                                    <ProgressBar :value="totalSizePercent" :showValue="false"
                                        :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]">
                                        <span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span>
                                    </ProgressBar>
                                </div>
                            </template>
                            <template
                                #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                                <div v-if="files.length > 0">
                                    <h5>Pending</h5>
                                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size"
                                            class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                            <div>
                                                <img role="presentation" :alt="file.name" :src="file.objectURL"
                                                    width="100" height="50" />
                                            </div>
                                            <span class="font-semibold">{{ file.name }}</span>
                                            <div>{{ formatSize(file.size) }}</div>
                                            <Badge value="Pending" severity="warning" />
                                            <Button icon="pi pi-times"
                                                @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                                                outlined rounded severity="danger" />
                                        </div>
                                    </div>
                                </div>

                                <div v-if="uploadedFiles.length > 0">
                                    <h5>Completed</h5>
                                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                        <div v-for="(file, index) of uploadedFiles"
                                            :key="file.name + file.type + file.size"
                                            class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                            <div>
                                                <img role="presentation" :alt="file.name" :src="file.objectURL"
                                                    width="100" height="50" />
                                            </div>
                                            <span class="font-semibold">{{ file.name }}</span>
                                            <div>{{ formatSize(file.size) }}</div>
                                            <Badge value="Completed" class="mt-3" severity="success" />
                                            <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)"
                                                outlined rounded severity="danger" />
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #empty>
                                <div class="flex align-items-center justify-content-center flex-column">
                                    <i
                                        class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                                </div>
                            </template>
                        </FileUpload>
                    </div>
                </div>
            </SplitterPanel>
            <SplitterPanel :size="35" :minSize="30">
                <!-- Right panel chatbot -->
                <div class="chatbot__panel">
                    <div class="chatbot__header bg-primary p-4 text-lg text-center font-semibold"><i
                            class="light-icon-messages mr-2"></i> Csv Bot
                    </div>
                    <div class="chatbot__footer">
                        <Textarea variant="filled" rows="5" placeholder="Ask questions for your selected csv..." />
                        <Button class="msg__send-btn bg-primary" text><i class="light-icon-send"></i></Button>

                    </div>
                </div>
            </SplitterPanel>
        </Splitter>


    </div>
</template>

<style lang="scss">
.csv__chatbot-container {
    height: calc(100vh - 60px);

    .chatbot__panel {
        max-width: 600px;

        .chatbot__header {
            // background-color: ;
        }

        .chatbot__footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            // right: 0;
            display: flex;
            gap: 8px;
            align-items: center;

            textarea {
                // width: 50%;
                // flex: 1;
                max-width: 350px;
                width: 100%;

            }

            .msg__send-btn {
                border-radius: 50%;
                width: 44px;
                height: 44px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>