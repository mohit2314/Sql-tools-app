import { defineStore } from 'pinia'

export interface Database {
    name: string;
    tables: string[];
}
export const useGraphBuilderStore = defineStore('graphBuilderStore', {
    state: () => ({
        selectedChartOptions: {} as any,
        selectedTableDataset: { name: '', value: {} } as { name: string, value: { rows: [], columns: [] } }

    }),
    actions: {

        updateGraphOptions(payload: any) {
            this.selectedChartOptions = payload
        },
        updateSelectedTable(payload: { name: string, value: {} }) {
            this.selectedTableDataset = payload
        }
    },
})