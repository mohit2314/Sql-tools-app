export interface PieChartOption {
    title: {
        text: string;
        show: boolean;
        textAlign?: string;
        left?: number;
        top?: number;
    };
    legend: {
        show: Boolean,
        left: string,
        top?: string,
        bottom?: string,
        type: string,
        formatter?: any,
        tooltip: any
    };
    color: Array<string>;
    theme: string,
    grid: {
        show: Boolean,
        width?: string,
        height: string,
    },
    backgroundColor: string,
    tooltip: {},
    dataZoom: [
        { type: 'slider', show: Boolean }
    ],
    dataset: [

        {
            dimensions: Array<string>,
            source: null,
        }
    ]
    series: [
        {
            type: string,
            name: string,
            radius: string,
            center?: [string, string],
            datasetIndex: Number,
            // encode: {
            //     itemName: string,
            //     value: string,
            //     tooltip: string
            // },
            avoidLabelOverlap: Boolean,
            tooltip: {
                show: true
            },
            label: {}
        }
    ]
}

interface PieChartData {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    overviewImg?: string;
    active: Boolean;
    options: PieChartOption
}
export const PieChartOptions: PieChartData = {
    icon: 'pieChart',

    title: 'pie-chart',
    subtitle: 'Proportions',
    active: true,
    description: 'It allows you to see the proportions between values that make up a whole, by using arcs composing a circle.',
    options: {
        title: {
            text: "Pie chart",
            show: false,
            // textAlign: 'auto',
            // left: 212,
            // top: -6,
        },
        legend: {
            show: true,
            // left:'90',
            // top:'26',
            left: '5%',
            bottom: '2%',
            type: 'scroll',
            // formatter: function (params: any) {
            //     if (params.length >= 10) {
            //         return params.slice(0, 10) + '...';
            //     } else {
            //         return params;
            //     }
            // },
            tooltip: { show: true }
        },

        color: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2', '#f2b3c9'],
        theme: 'essos',
        grid: {
            show: false,
            // width: '550',
            height: 'auto',
        },
        // backgroundColor: '#ffffff',
        tooltip: {
            confine: true,
        },
        dataZoom: [
            { type: 'slider', show: false }
        ],


        dataset: [

            {
                dimensions: [],
                // dimensions:['label','count'],
                source: null,
            },
        ],
        series: [
            {
                type: 'pie',
                name: 'label',
                radius: '60%',
                // center: ['120', '150'],
                // center: ['344', '278'],
                datasetIndex: 0,
                // encode: {
                //     itemName: '',
                //     value: '',
                //     tooltip: ''
                // },
                avoidLabelOverlap: true,
                tooltip: {
                    show: true
                },
                label: {
                }

            },


        ],
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {
                    show: true, // Enable export to image functionality
                    title: 'Save as Image', // Customize the tooltip title
                    name: 'chart',
                    backgroundColor: 'transparent',
                    pixelRatio: 2
                }
            },
            right: '30px',
            top: '10px'
        },
        // Add export component
        export: {
            show: true,
            title: 'Export', // Customize the tooltip title
            name: 'chart',
            pixelRatio: 2
        },



    }
}

