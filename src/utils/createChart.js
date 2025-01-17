// 创建折线图
import * as echarts from "echarts";

export function createChart(domId, xAxis, series) {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById(domId));
    // echarts配置
    const option = {
        color: ['#3398DB'],
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '收益',
                type: 'line',
                barWidth: '60%',
                data: series,
            }
        ]
    };

    // {
    //     name: '蒸发量',
    //     type: 'bar',
    //     data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    //     markPoint: {
    //         data: [
    //             {type: 'max', name: '最大值'},
    //             {type: 'min', name: '最小值'}
    //         ]
    //     },
    //     markLine: {
    //         data: [
    //             {type: 'average', name: '平均值'}
    //         ]
    //     }
    // },
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/**
 *
 * @param domId
 * @param legendList
 * @param xAxis
 * @param seriesList
 */
export function createChart2(domId, legendList, xAxis, seriesList) {
    const myChart = echarts.init(document.getElementById(domId))

    const option = {
        title: {
            text: '下注金额'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: legendList
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: seriesList
    };
    // seriesList格式
    // [
    //     {
    //         name: '', // 名称与legendList对应
    //         type: 'bar', // 图标类型
    //         emphasis: {
    //             focus: 'series'
    //         },
    //         data: datasets.leftMoneyCount.data // 数据
    //     },
    // ]

    myChart.setOption(option);
}


