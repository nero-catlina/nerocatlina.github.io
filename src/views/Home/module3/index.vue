<script setup>
import Chart from "./Chart.vue";

const data = [
  {
    name: "New function reservation",
    y: 27.5,
    dataLabels: {
      enabled: false,
    },
    sliced: true,
    selected: true,
    className: "nfr",
  },
  {
    name: "Game reward pool",
    y: 22.5,
    dataLabels: {
      enabled: false,
    },
    className: "grp",
  },
  {
    name: "ILO currency charging",
    y: 12.0,
    dataLabels: {
      enabled: false,
    },
    className: "icc",
  },
  {
    name: "Team",
    y: 8,
    dataLabels: {
      enabled: false,
    },
    className: "team",
  },
  {
    name: "Mobility",
    y: 12,
    dataLabels: {
      enabled: false,
    },
    className: "mobility",
  },
  {
    name: "Airdrop",
    y: 5,
    dataLabels: {
      enabled: false,
    },
    className: "airdrop",
  },
  {
    name: "Public offering",
    y: 4,
    dataLabels: {
      enabled: false,
    },
    className: "po",
  },
  {
    name: "Marketing",
    y: 3,
    dataLabels: {
      enabled: false,
    },
    className: "marketing",
  },
  {
    name: "Private placement",
    y: 6,
    dataLabels: {
      enabled: false,
    },
    className: "pp",
  },
];

const colors = [
  "#E403DB",
  "#F42F24",
  "#2051FF",
  "#07BEF8",
  "#FF7A00",
  "#33E1A0",
  "#F42F24",
  "#07BEF8",
  "#2051FF",
];
</script>

<template>
  <div class="finch-container">
    <div class="filter"></div>
    <div class="gradient">
      <div class="container-center">
        <h1
          class="title"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          {{ $t("home.module3.title") }}
        </h1>
        <div
          class="split"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="500"
        ></div>
        <h2
          class="desc"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="500"
          v-html="$t('home.module3.desc')"
        ></h2>
        <div class="detail">
          <div class="b-left">
            <div class="b-left-a">
              <div
                class="b-left-a-left"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
              ></div>
              <div
                class="b-left-a-center"
                data-aos="fade-in"
                data-aos-duration="100"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
              >
                {{ $t("home.module3.disctribution") }}
              </div>
              <div
                class="b-left-a-right"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
              ></div>
            </div>
            <div
              class="b-left-b"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="ease-in-sine"
            >
              {{ $t("home.module3.resource") }}
            </div>
          </div>
          <div class="b-center">
            <div></div>
            <Chart :data="data" :colors="colors" />
          </div>
          <div
            class="b-right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-easing="ease-in-sine"
          >
            <div class="item" v-for="(item, index) in data" :key="index">
              <div class="item-left">
                <span class="ico" :style="{ backgroundColor: colors[index] }"></span>
                <span class="name">{{ item.name }}</span>
              </div>
              <span class="value" :style="{ color: colors[index] }"
                >{{ item.y.toFixed(1) }}%</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$module-height: 980px;
.finch-container {
  width: 100%;
  height: $module-height;
  background-image: url("../../../assets/img/home-3-bg.png");
  background-size: cover;
  position: relative;
  //   margin-top: -148px;
  .filter {
    width: 100%;
    height: $module-height;
    background-image: url("../../../assets/img/home-3-filter.png");
    background-size: cover;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
  }
  .gradient {
    width: 100%;
    height: $module-height;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    @extend .flex-column-center;
    padding-top: 80px;
    box-sizing: border-box;
    .container-center {
      @extend .flex-column-center;
      & > .title {
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 70px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #ffffff;
      }
      .split {
        width: 88px;
        height: 6px;
        background: #f42f24;
        border-radius: 2px;
        margin-top: 16px;
      }
      & > .desc {
        font-family: Moderne;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        margin-top: 24px;
        margin-bottom: 120px;
        white-space: pre-line;
      }
      & > .detail {
        width: 100%;
        height: 522px;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 48px 42px;
        .b-left {
          width: 288px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .b-left-a {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 48px;
            .b-left-a-left {
              width: 4px;
              height: 154px;
              background: #c42118;
            }
            .b-left-a-center {
              width: 240px;
              font-family: Moderne;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 26px;
              color: #ffffff;
            }
            .b-left-a-right {
              width: 4px;
              height: 154px;
              background: #c42118;
              transform: matrix(-1, 0, 0, 1, 0, 0);
            }
          }
          .b-left-b {
            padding: 24px;
            background: #c42118;
            font-family: Moderne;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 26px;
            color: #ffffff;
          }
        }
        .b-center {
          width: 331px;
        }
        .b-right {
          width: 302px;
          .item {
            height: 32px;
            margin-bottom: 16px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .item-left {
              .ico {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 2px;
              }
              .name {
                font-family: Moderne;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 32px;
                color: #ffffff;
                margin-left: 8px;
              }
            }
            .value {
              font-family: Moderne;
              font-style: normal;
              font-weight: 600;
              font-size: 18px;
              line-height: 48px;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
