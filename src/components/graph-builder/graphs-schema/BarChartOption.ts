export interface BarChartOption {
    title: {
        text: string;
        show?: boolean;
        textAlign?: string;
        left?: number;
        top?: number;
        bottom?: string;
        textVerticalAlign?: string,
        padding?: Array<number>,
        subtext?: string
        subtextStyle?: {
            fontSize?: number,
            align?: string,
            left?: string,
            top?: string,
            right?: string,
            bottom?: string,
        }
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
            filterMode: string,
            height?: number

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
        },
        triggerEvent?: Boolean,

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
            showBackground?: boolean,
            backgroundStyle?: {
                color: string
            }
            tooltip: {
                show: Boolean
            },
            label: {
                normal: {
                    show: Boolean,
                    position: string
                }
            }
        },

        // {
        //   type: string,
        //   name: string,
        //   datasetIndex: Number,
        //   encode: {

        //     y: string,

        //     x: string,
        //   }
        // },
    ],
    barMaxWidth: Number
}

interface BarChartData {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    overviewImg?: string;
    active: Boolean;
    options: BarChartOption
}

export const BarChartOptions: BarChartData = {
    icon: 'barGraph',
    title: 'bar-chart',
    subtitle: 'Correlations',
    active: true,
    description: 'It displays a categorical dimension and related amounts. Each bar represents a category, width is proportional to the quantitative dimension.',
    options: {
        title: {
            text: "Bar Graph",
            show: true,
            // textAlign: 'auto',
            // textVerticalAlign:'auto',
            // left: 212,
            // top: -6,
            // bottom:'auto',
            //   padding: [
            //     5,  // up
            //     10, // right
            //     5,  // down
            //     20, // left
            // ],
            subtext: 'Graph description',
            subtextStyle: {
                fontSize: 12,
                align: 'center',
                left: 'auto',
                top: 'auto',
                right: 'auto',
                bottom: 'auto',
            }
        },
        legend: {
            show: false,
            left: '90',
            top: '26',
            type: 'scroll',
            tooltip: { show: true }
        },
        color: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2', '#f2b3c9'],
        theme: 'wonderland',
        grid: {
            show: false,
            // width: '650',
            height: 'auto',
            containLabel: true
        },
        backgroundColor: '',
        tooltip: {
            show: true,
            trigger: 'item',
            confine: true,
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        barCategoryGap: 30,

        // dataZoom: [
        //     {
        //         id: 'dataZoomX',
        //         show: false,
        //         type: 'slider',
        //         xAxisIndex: [0],
        //         filterMode: 'filter',
        //     },
        //     {
        //         id: 'dataZoomY',
        //         show: false,
        //         type: 'slider',
        //         yAxisIndex: [0],
        //         filterMode: 'empty'
        //     }
        // ],


        dataset: [

            {
                dimensions: ['product', 'score', 'amount'],
                source: null,
                // source: [

                //     ['Matcha Latte', 89.3, 582,],
                //     ['Milk Tea', 57.1, 78],
                //     ['Cheese Cocoa', 74.4, 410],
                //     ['Cheese Brownie', 50.1, 123],
                //     ['Matcha Cocoa', 89.7, 201],
                //     ['Tea', 68.1, 300],
                //     ['Orange Juice', 19.6, 280],
                //     ['Lemon Juice', 10.6, 190],
                //     ['Walnut Brownie', 32.7, 341]
                // ],

            },
        ],
        xAxis: {
            type: 'category',
            name: 'label',
            nameLocation: 'middle',
            nameGap: 80, //gap between x-axis & axis name in vertical direction
            triggerEvent: true,
            nameTextStyle: {
                fontFamily: 'Poppins',
                fontSize: '16px',
                // color: '#000000',
                fontWeight: 'normal',
                // overflow:'break'
            },
            axisLabel: {
                rotate: 45,
                // fontSize: 12,
                // color: '#000000',
                interval: 0,
                width: 100, //fixed number of pixels
                overflow: 'break', // Doing the same work which below formatter was doing
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
                fontSize: '16px',
                // color: '#000000'
            },
            axisLabel: {
                rotate: 0,
                // fontSize: 12,
                // color: '#000',
            }
        },
        series: [
            {
                type: 'bar',
                name: '',
                datasetIndex: 0,
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
                }
                // showBackground: true,
                // backgroundStyle: {
                //   color: 'rgba(180, 180, 180, 0.2)'
                // }
            },
            // {
            //   type: 'bar',
            //   name: '',
            //   datasetIndex: 0,
            //     encode: {

            //     y: 'granted',

            //     x: '',
            //   }
            // }

        ],
        barMaxWidth: 30,
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

