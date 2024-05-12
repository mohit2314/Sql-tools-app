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
const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
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
const csvData = ref([]);
const columns = ref([]);
const selectedFiles = ref([]);

const onSelectedFiles = (event) => {
    selectedFiles.value = event.files;
};
const onCsvUpload = () => {
    if (selectedFiles.value.length > 0) {
        const file = selectedFiles.value[0];
        const reader = new FileReader();

        reader.onload = () => {
            const csvContent = reader.result;
            processCSV(csvContent);
        };

        reader.readAsText(file);
    }
};
const processCSV = (csvContent) => {
    const rows = csvContent.trim().split('\n');
    const headers = rows[0].split(',');
    columns.value = headers;

    const data = [];
    for (let i = 1; i < rows.length; i++) {
        const rowData = {};
        const values = rows[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            rowData[headers[j]] = values[j];
        }
        data.push(rowData);
    }
    csvData.value = data;
};

let chatMessagesList = ref<{ role: string, message: string }[]>([])
let userQues = ref('')
let chatBotLoading = ref(false)
const askCsvBot = () => {
    let userMsg = { role: 'user', message: userQues.value }
    chatMessagesList.value.push(userMsg)
    chatBotLoading.value = true
    let botMsg = { role: 'bot', message: "Hello! I'm the Csv Bot. How can I assist you with your CSV files today?" }
    setTimeout(() => {
        chatBotLoading.value = false
        chatMessagesList.value.push(botMsg)
    }, 3000)
}
</script>

<template>
    <div class="csv__chatbot-container flex">

        <div class="left__panel">
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
                    <FileUpload name="demo[]" @upload="onTemplatedUpload($event)" accept=".csv" :maxFileSize="1000000"
                        @select="onSelectedFiles">
                        <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                            <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                                <div class="flex gap-2">
                                    <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                                    <Button @click="onCsvUpload" icon="pi pi-cloud-upload" rounded outlined
                                        severity="success" :disabled="!files || files.length === 0"></Button>
                                    <Button @click="clearCallback()" icon="pi pi-times" rounded outlined
                                        severity="danger" :disabled="!files || files.length === 0"></Button>
                                </div>
                                <ProgressBar :value="totalSizePercent" :showValue="false"
                                    :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]">
                                    <span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span>
                                </ProgressBar>
                            </div>
                        </template>
                        <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                            <div v-if="files.length > 0">
                                <h5>Pending</h5>
                                <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                    <div v-for="(file, index) of files" :key="file.name + file.type + file.size"
                                        class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                        <div>
                                            <img role="presentation" :alt="file.name" :src="file.objectURL" width="100"
                                                height="50" />
                                        </div>
                                        <span class="font-semibold">{{ file.name }}</span>
                                        <div>{{ file.size }}</div>
                                        <Badge value="Pending" severity="warning" />

                                    </div>
                                </div>
                            </div>

                            <div v-if="uploadedFiles.length > 0">
                                <h5>Completed</h5>
                                <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                    <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size"
                                        class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                        <div>
                                            <img role="presentation" :alt="file.name" :src="file.objectURL" width="100"
                                                height="50" />
                                        </div>
                                        <span class="font-semibold">{{ file.name }}</span>
                                        <div>{{ file.size }}</div>
                                        <Badge value="Completed" class="mt-3" severity="success" />
                                        <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined
                                            rounded severity="danger" />
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #empty>
                            <div class="flex align-items-center justify-content-center flex-column">
                                <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                                <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                            </div>
                        </template>
                    </FileUpload>
                </div>
                <div v-if="csvData.length > 0" class="mt-4">
                    <DataTable :value="csvData" striped-rows bordered show-gridlines scrollable>
                        <Column v-for="col in columns" :field="col" :header="col" :key="col" />
                    </DataTable>
                </div>
            </div>
        </div>

        <!-- Right panel chatbot -->
        <div class="chatbot__panel">
            <div class="chatbot__header bg-primary p-4 text-lg text-center font-semibold"><i
                    class="light-icon-messages mr-2"></i> Csv Bot
            </div>
            <div class="chatarea">
                <!-- Chat messages will go here -->
                <div v-for="msg in chatMessagesList"
                    :class="['message', { 'bot': msg.role == 'bot' }, { 'user': msg.role == 'user' }]">
                    <div :class="['message__avatar', { 'mr-2': msg.role == 'bot' }, { 'ml-2': msg.role == 'user' }]">
                        <i style="font-size: 1.2rem;"
                            :class="msg.role == 'bot' ? 'light-icon-brand-android' : 'light-icon-user'"></i>
                    </div>
                    <div
                        :class="['message__content', 'p-2', { 'bg-gray-100': msg.role == 'bot' }, { 'bg-blue-100': msg.role == 'user' }]">
                        <p>{{ msg.message }}</p>
                    </div>
                </div>
                <div v-if="chatBotLoading">
                    <img src="@/assets/images/chat-loading.svg" width="44" alt="">
                </div>
                <!-- <div class="message user">
                    <div class="message__avatar ml-2">
                        <i style="font-size: 1.2rem;" class="light-icon-user"></i>

                    </div>
                    <div class="message__content bg-blue-100 p-2">
                        <p>Can you show me the first 5 rows of my CSV file?</p>
                    </div>
                </div> -->
            </div>
            <div class="chatbot__footer">
                <Textarea v-model="userQues" style="width: 100%;" variant="filled" rows="5"
                    placeholder="Ask questions for your selected csv..." />
                <Button @click="askCsvBot" class="msg__send-btn bg-primary" text><i
                        class="light-icon-send"></i></Button>

            </div>
        </div>



    </div>
</template>

<style lang="scss">
.csv__chatbot-container {
    height: calc(100vh - 60px);

    .left__panel {
        border-right: 1px solid #dedede;
        width: 80%;
        max-width: 800px;
        overflow-x: scroll
    }

    .chatbot__panel {

        width: 100%;
        max-width: 550px;

        .chatbot__header {
            // background-color: ;
        }

        .chatarea {
            // height: 100%    
            height: calc(100vh - 250px);

        }

        .chatarea {
            // height: 300px;
            overflow-y: auto;
            padding: 16px;
        }

        .message {
            display: flex;
            margin-bottom: 16px;

        }

        .message__avatar {
            // margin-right: 8px;
            background-color: #dedede;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center
        }


        .message__content {
            max-width: 75%;
            border-radius: 6px
        }


        .message.user {
            flex-direction: row-reverse;
        }


        .chatbot__footer {
            // position: fixed;
            bottom: 0;
            width: 100%;
            // right: 0;
            display: flex;
            gap: 8px;
            align-items: center;

            textarea {
                // width: 50%;
                // flex: 1;
                // max-width: 500px;
                // width: 100%;

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