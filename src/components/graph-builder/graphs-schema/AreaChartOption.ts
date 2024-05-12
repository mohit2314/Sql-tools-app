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
        formatter: any,
        tooltip: any
    };
    color: Array<string>;
    theme: string,
    grid: {
        show: Boolean,
        width?: string,
        height: string,
        y2?: number
    },
    backgroundColor: string,
    tooltip: {},
    dataZoom: [
        { type: 'slider', show: Boolean },
        { type: 'slider', show: Boolean }
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

        }
        axisLabel: {
            rotate?: number,
            fontSize?: number,
            color: string,
            formatter?: any,
            width?: number,
            overflow?: string
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
            areaStyle?: Object,
            // stack?: string,
            datasetIndex: Number,
            encode: {

                y: string,

                x: string,
            },
            tooltip: {
                show: boolean
            },
            label: {
                normal: {
                    show: Boolean,
                    position: string
                }
            }
            smooth?: boolean
        },
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
export const AreaChartOptions: LineChartData = {
    icon: 'area-graph.png',

    title: 'area-chart',
    subtitle: 'Time series, correlations',
    active: false,
    description: 'It displays a quantitative dimension over a continuous interval or time period. Colour can be optionally used to encode an additional quantitative or categorical dimension.',
    options: {
        title: {
            text: "Area Chart",
            show: false,
            // textAlign: 'auto',
            // left: 212,
            // top: -6
        },
        legend: {
            show: false,
            left: '90',
            top: '26',
            type: 'scroll',

            tooltip: { show: true }
        },
        color: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2', '#f2b3c9'],
        theme: 'dark',
        grid: {
            show: false,
            // width:'550',
            height: 'auto',
            y2: 150, // to give the gap between x-axis label & datazoom slider
        },
        // backgroundColor: '#FFFFFF',
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
        dataZoom: [
            { type: 'slider', show: false }, { type: "slider", show: false }
        ],
        dataset: [

            {
                dimensions: ['label', 'count'],
                source: null,

            },
        ],
        xAxis: {
            type: 'category',
            name: 'area chart x-axis',
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
                width: 100,
                overflow: 'truncate'
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
                name: '',
                datasetIndex: 0,
                areaStyle: {},
                // stack: 'Total',
                encode: {
                    x: '',
                    y: ''


                },
                tooltip: {
                    show: true
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                smooth: true
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