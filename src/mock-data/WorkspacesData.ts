export const WorkspaceService = {
    getWorkspaceData() {
        return [
            {
                key: '0',
                label: 'Customers',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-database',
                badge:2,
                children: [
                    {
                        key: '0-0',
                        label: 'Table-1',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-table',
                      
                    },
                    {
                        key: '0-1',
                        label: 'Table-2',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-table',
                    }
                ]
            },
            {
                key: '1',
                label: 'Products',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-database',
                badge:2,
                children: [
                    {
                        key: '0-0',
                        label: 'Table-1',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-table',
                      
                    },
                    {
                        key: '0-1',
                        label: 'Table-2',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-table',
                    },
                    {
                        key: '0-1',
                        label: 'Table-3',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-table',
                    },{
                        key: '0-1',
                        label: 'Table-4',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-table',
                    }
                ]
            },
        ];
    },

  

    getWorkspaceNodesData() {
        return Promise.resolve(this.getWorkspaceData());
    },

  
};