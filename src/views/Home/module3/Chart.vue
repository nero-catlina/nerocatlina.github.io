<template>
  <div id="container"></div>
</template>

<style lang="scss">
$opacity-num: 0.9;

.highcharts-pie-series {
  .grp {
    stroke: #f42f24;
    fill: rgba(244, 47, 36, $opacity-num);
  }
  .nfr {
    stroke: #e403db;
    fill: rgba(228, 3, 219, $opacity-num);
  }
  .icc {
    stroke: #2051ff;
    fill: rgba(32, 81, 255, $opacity-num);
  }
  .team {
    stroke: #07bef8;
    fill: rgba(7, 190, 248, $opacity-num);
  }
  .mobility {
    stroke: #ff7a00;
    fill: rgba(255, 122, 0, $opacity-num);
  }
  .airdrop {
    stroke: #33e1a0;
    fill: rgba(51, 225, 160, $opacity-num);
  }
  .po {
    stroke: #90ed7d;
    fill: rgba(144, 237, 125, $opacity-num);
  }
  .marketing {
    stroke: #f7a35c;
    fill: rgba(247, 163, 92, $opacity-num);
  }
  .pp {
    stroke: #8085e9;
    fill: rgba(128, 133, 233, $opacity-num);
  }
}
</style>

<script setup>
// import Highcharts from "highcharts";
import { onMounted, defineProps } from "vue";

const props = defineProps({
  data: [],
  colors: [],
});

const seriesData = {
  name: "",
  data: props.data,
};

const render = () => {
  Highcharts.chart("container", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 50,
      },
      backgroundColor: "transparent",
    },
    label: false,
    colors: props.colors,
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: 130,
        depth: 80,
      },
    },
    labels: false,
    series: [seriesData],
  });
};

onMounted(() => {
  render();
});
</script>
