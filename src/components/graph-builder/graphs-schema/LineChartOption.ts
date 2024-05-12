export interface LineChartOption {
    title: {
        text: string;
        show?: boolean;
        textAlign?: string;
        left?: number;
        top?: number;
    };
    legend: {
        show: Boolean,
        left: string,
        top: string,
        type: string,
        formatter?: any,
        tooltip: any
    };
    color: Array<string>;
    theme: string,
    grid: {
        show: Boolean,
        width?: string,
        height?: string,
        containLabel?: Boolean
    },
    backgroundColor: string,
    tooltip: {},
    barCategoryGap: Number,
    dataZoom: [
        // { type: 'slider', show: Boolean }
        {
            id: string,
            type: string,
            show: boolean,
            xAxisIndex: Array<Number>,
            filterMode: string
        },
        {
            id: string,
            type: string,
            show: boolean,
            yAxisIndex: Array<Number>,
            filterMode: string
        }
    ],
    dataset: [

        {
            dimensions: Array<string>,
            source: null,
        }
    ],
    xAxis: {
        type: string,
        name?: string,
        nameLocation?: string,
        nameGap?: Number,
        nameTextStyle: {
            fontFamily?: string,
            fontSize?: string,
            color?: string,
            fontWeight?: string,

        },
        axisLabel: {
            rotate?: number,
            fontSize?: number,
            color: string,
            formatter?: any,
            interval: number,
            width: number,
            overflow: string,
        }
    },
    yAxis: {
        type: string,
        name?: string,
        nameLocation?: string,
        nameRotate?: number,
        nameGap?: number,
        nameTextStyle: {
            fontFamily?: string,
            fontSize?: string,
            color?: string
        },
        axisLabel: {
            rotate?: number,
            fontSize?: number,
            color: string,
            formatter?: any
        }
    },
    series: [
        {
            type: string,
            name: string,
            datasetIndex: Number,
            encode: {

                y: string,

                x: string,
            },
            smooth?: boolean,
            tooltip: {
                show: boolean
            },
            label: {
                normal: {
                    show: Boolean,
                    position: string
                }
            }
        }
    ]
}

interface LineChartData {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    overviewImg?: string;
    active: Boolean;
    options: LineChartOption
}
export const LineChartOptions: LineChartData = {
    icon: 'lineGraph',

    title: 'line-chart',
    subtitle: 'Time series, correlations',
    active: false,
    description: 'It displays a quantitative dimension over a continuous interval or time period. Colour can be optionally used to encode an additional quantitative or categorical dimension.',
    options: {
        title: {
            text: "Line Chart",
            show: false,
            // textAlign: 'auto',
            // left: 212,
            // top: -6,
        },
        legend: {
            show: false,
            left: '90',
            top: '26',
            type: 'scroll',

            tooltip: {
                show: true,
                trigger: 'axis',
            }
        },
        color: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2', '#f2b3c9'],
        theme: 'essos',
        grid: {
            show: false,
            // width:'550',
            height: 'auto',
            containLabel: true

        },
        // backgroundColor: '#ffffff',
        tooltip: {
            show: true,
            confine: true,
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        barCategoryGap: 30,
        dataZoom: [
            {
                id: 'dataZoomX',
                show: false,
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter'
            },
            {
                id: 'dataZoomY',
                show: false,
                type: 'slider',
                yAxisIndex: [0],
                filterMode: 'empty'
            }
        ],
        dataset: [

            {
                dimensions: [],
                source: null,

            },
        ],
        xAxis: {
            type: 'category',
            name: 'line chart x-axis',
            nameLocation: 'middle',
            nameGap: 80,
            nameTextStyle: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                // color: '#000000',
                fontWeight: 'normal',

            },
            axisLabel: {
                rotate: 45,
                fontSize: 12,
                // color: '#000',
                interval: 0,
                width: 100, //fixed number of pixels
                overflow: 'break',

            }
        },
        yAxis: {
            // type: 'category',
            type: 'value',
            name: 'Count',
            nameLocation: "middle",
            nameRotate: 90,
            nameGap: 70,
            nameTextStyle: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                // color: '#000000'
            },
            axisLabel: {
                rotate: 0,
                fontSize: 12,
                // color: '#000',

            }
        },
        series: [
            {
                type: 'line',
                name: 'Application year',
                datasetIndex: 0,
                encode: {
                    x: '',
                    y: ''
                },
                smooth: true,
                tooltip: {
                    show: true
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                }
                // tooltip:[]
            }
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