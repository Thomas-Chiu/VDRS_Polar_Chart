let chartDom = document.getElementById("polarChart");
let myChart = echarts.init(chartDom);
let option;
let btnStatus = 0;
const getPrint = () => {
  $("#print_polar_chart").click(function () {
    printJS({
      printable: "polarChart",
      type: "html",
      maxWidth: 800,
    });
  });
};
const getData = () => {
  let busId = ["KAB-1234", "KAB-5678", "KAB-7890"];
  let data = [data1, data2, data3];
  let result = {};
  switch (btnStatus) {
    case 0:
      result = {
        busId: busId[0],
        data: data[0],
      };
      return result;
    case 1:
      result = {
        busId: busId[1],
        data: data[1],
      };
      return result;
    case 2:
      result = {
        busId: busId[2],
        data: data[2],
      };
      return result;
  }
};

option = {
  title: {
    text: "數位大餅圖",
  },
  legend: {
    // legend.data 和 series[].data 名字要一樣
    data: ["車速", "里程數"],
  },
  polar: {
    center: ["50%", "50%"],
    radius: ["45%", "75%"], // [內半徑, 外半徑]
  },
  tooltip: {
    trigger: "axis",
    position: ["45%", "55%"],
  },
  toolbox: {
    show: true,
    feature: { saveAsImage: { title: "存檔" } },
  },
  angleAxis: {
    type: "time", // unix time 轉格式
    startAngle: -90,
    splitNumber: 0,
    axisLine: { show: false },
  },
  radiusAxis: {
    min: 0,
    max: function (value) {
      return value.max + 50;
    },
    axisLabel: {
      formatter: "{value} km",
    },
  },
  series: [
    {
      type: "line",
      name: "車速",
      coordinateSystem: "polar",
      showSymbol: false,
      legendHoverLink: false,
      data: getData().data,
      lineStyle: { width: 0.5 },
    },
    {
      // 外圈儀表
      type: "gauge",
      name: "儀錶板",
      title: {
        show: true,
        fontWeight: "bold",
        fontSize: 30,
        offsetCenter: [0, 0],
      },
      data: [
        {
          value: null,
          name: getData().busId,
          detail: { show: false },
        },
      ],
      pointer: { show: false },
      splitNumber: 24,
      min: 0,
      max: 24,
      splitLine: { distance: -50, length: 0 },
      axisLine: { show: false },
      axisLabel: {
        show: false,
        distance: 25,
        fontWeight: "bold",
        fontSize: 16,
      },
      axisTick: {
        show: false,
        splitNumber: 2,
        length: 12.5,
        distance: -10,
      },
    },
  ],
  animationDuration: 2000,
};

// echart init
option && myChart.setOption(option);
// 列印 echart
getPrint();
// switch data;
$("#data1").click(function () {
  btnStatus = 0;
  option.series[0].data = getData().data;
  option.series[1].data[0].name = getData().busId;
  option && myChart.setOption(option);
});
$("#data2").click(function () {
  btnStatus = 1;
  option.series[0].data = getData().data;
  option.series[1].data[0].name = getData().busId;
  option && myChart.setOption(option);
});
$("#data3").click(function () {
  btnStatus = 2;
  option.series[0].data = getData().data;
  option.series[1].data[0].name = getData().busId;
  option && myChart.setOption(option);
});
