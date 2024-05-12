export interface BarChartOption {
    title: {
        text: string;
        show: boolean;
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
        left?: number,
        containLabel?: Boolean
    },
    backgroundColor: string,
    tooltip: {},
    barCategoryGap: Number,
    dataZoom: [
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
            color?: string
        },
        axisLabel: {
            rotate?: number,
            fontSize?: number,
            color: string,
            formatter?: any
        }
    },
    yAxis: {
        type: string,
        name?: string,
        nameLocation?: string,
        inverse?: Boolean,
        nameTextStyle: {
            fontFamily?: string,
            fontSize?: string,
            color?: string
        },
        axisLabel: {
            rotate?: number,
            fontSize?: number,
            color: string,
            width?: number,
            overflow?: string,
            formatter?: any
        }
    },
    series: [
        {
            type: string,
            name: string,
            datasetIndex: Number,
            encode?: {

                y: string,

                x: string,
            }
            tooltip: {
                show: boolean
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

export const HorizontalBarChartOptions: BarChartData = {
    icon: 'horizontalBar',

    title: 'horizontal-bar-chart',
    subtitle: 'Correlations',
    active: true,
    description: 'It displays a categorical dimension and related amounts. Each bar represents a category, width is proportional to the quantitative dimension.',
    options: {
        title: {
            text: "Bar Graph",
            show: false,
            // textAlign: 'auto',
            // left: 212,
            // top: -6,
            // bottom:'auto',
            // textVerticalAlign : 'auto',
            //   padding: [
            //     5,  // up
            //     10, // right
            //     5,  // down
            //     20, // left
            // ],
            subtext: '',
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
            // formatter:function(params:any){
            //   if(params.length>=10){
            //     return params.slice(0,10) +'...';
            //   }else{
            //     return params;
            //   }
            // },
            tooltip: { show: true }
        },

        color: ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2', '#f2b3c9'],
        theme: 'essos',
        grid: {
            show: false,
            width: '92%',
            height: '82%',
            left: 5,
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
            { type: 'slider', show: false }
        ],


        dataset: [

            {
                dimensions: [],
                source: null,

            },

        ],
        xAxis: {
            type: 'value',
            name: 'Patent count',
            nameLocation: 'middle',
            nameGap: 70,
            nameTextStyle: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                // color: '#797B83'
            },
            axisLabel: {
                rotate: 45,
                fontSize: 12,
                // color: '#000',

            }
        },
        yAxis: {
            // type: 'category',
            type: 'category',
            name: 'Type',
            nameLocation: 'start',
            inverse: true,
            nameTextStyle: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                // color: '#797B83'
            },
            axisLabel: {
                rotate: 0,
                fontSize: 12,
                // color: '#000',
                width: 130,
                overflow: 'truncate'

            }
        },
        series: [
            {
                type: 'bar',
                name: '',
                datasetIndex: 0,
                //   encode: {
                //     x: '',
                //     y: ''
                //   }
                tooltip: {
                    show: true
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                }
            },

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
