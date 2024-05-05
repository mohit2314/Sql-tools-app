import { defineStore } from 'pinia'

export interface Database {
    name: string;
    tables: string[];
}
export const useAppStore = defineStore('appStore', {
    state: () => ({ 
        count: 0,
        name: 'Eduardo',
        sqlQuery: `CREATE TABLE customer
        (
              "ID" int8 PRIMARY KEY,
              "Name" varchar(50) NOT NULL,
              "Age" int NOT NULL,
              "City" char(50),
              "Salary" numeric
        );
          
          ` as string,
        sqlRunnerLoading:false,
        availableWorkspaces: [
            { name: 'Personal workspace', code: 'NY' },
            { name: 'Shared workspace', code: 'RM' },
            { name: 'Workspace 3', code: 'LDN' },
            { name: 'Workspace 4', code: 'IST' },
            { name: 'Workspace 5', code: 'PRS' }
        ],
        // availableDatabases: [
        //     { name: 'Cutomers', code: 'NY' },
        //     { name: 'Products', code: 'RM' },
        //     { name: 'Employees', code: 'LDN' },
        //     { name: 'Orders', code: 'IST' },
        //     { name: 'Inventory', code: 'PRS' }
        // ]
        availableDatabases: [
            { name: "Database 1", tables: ["Table 1", "Table 2", "Table 3"] },
            { name: "Database 2", tables: ["Table A", "Table B", "Table C"] },
        ] as  Database[] 
    }),
    actions: {
      increment() {
        this.count++
      },
      updateSqlQuery(updatedQuery:string){
        this.sqlQuery=updatedQuery
      },
      changeLoading(loadingVal:boolean){
        this.sqlRunnerLoading=loadingVal
      }
    },
})