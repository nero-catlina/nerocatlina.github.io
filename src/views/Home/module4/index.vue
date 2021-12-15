<script setup>
import { computed, reactive } from "vue";

const state = reactive({
  currentItem: 1,
});

const phase = [
  {
    name: "Phase I",
    list: [
      {
        wait: false,
        value: "Smart contract construction",
        time: "21.12",
      },
      {
        wait: false,
        value: "Launch social media + login site",
        time: "21.12",
      },
      {
        wait: false,
        value: "Private sales",
        time: "21.12",
      },
      {
        wait: false,
        value: "Pancakeswap liquidity establishment",
        time: "21.12",
      },
      {
        wait: true,
        value: "Play to Earn and Marketplace",
        time: "22.01",
      },
      {
        wait: true,
        value: "Listed in coinmarketcap/coingecko",
        time: "22.01",
      },
      {
        wait: true,
        value: "Pay for in-game items with available resources",
        time: "22.01",
      },
      {
        wait: true,
        value: "KOL Marketing",
        time: "22.01",
      },
    ],
  },
  {
    name: "Phase 2",
    list: [
      {
        wait: true,
        value: "Expand the development team",
        time: "22.01",
      },
      {
        wait: true,
        value: "Fleet deployment",
        time: "22.01",
      },
      {
        wait: true,
        value: "Public community games (RAIDS)",
        time: "22.02",
      },
      {
        wait: true,
        value: "Many explorations",
        time: "22.02",
      },
      {
        wait: true,
        value: "Development community",
        time: "22.02",
      },
      {
        wait: true,
        value: "CEX Listing",
        time: "22.02",
      },
    ],
  },
  {
    name: "Phase 3",
    list: [
      {
        wait: true,
        value: "More options for developing and improving guilds",
        time: "22.04",
      },
      {
        wait: true,
        value: "Design more vehicles and robots",
        time: "22.04",
      },
      {
        wait: true,
        value: "PVP battle",
        time: "22.05",
      },
    ],
  },
];

const getItemClassName = (index, item) => {
  let num = 0;
  let t = "";
  if (index > item) {
    num = index - item;
    t = "next";
  } else if (index < item) {
    num = item - index;
    t = "prev";
  } else if (item === index) {
    return "current-item";
  }

  let str = "";
  for (let i = 0; i < num; i++) {
    str += `${t}-`;
  }
  return str + "item";
};

const setCurrentItem = (index) => {
  state.currentItem = index;
};
</script>

<template>
  <div class="finch-container">
    <div class="filter">
      <video
        autoplay="autoplay"
        playsinline=""
        loop="loop"
        preload="auto"
        style="object-fit: cover"
        class="video"
      >
        <source src="../../../assets/fire-bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="gradient">
      <h1 class="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
        {{ $t("home.module4.title") }}
      </h1>
      <div
        class="split"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-delay="500"
      ></div>
      <div class="phase-list">
        <template v-for="(item, index) in phase" :key="index">
          <div
            :class="`list-item ${getItemClassName(index + 1, state.currentItem)}`"
            @click="setCurrentItem(index + 1)"
          >
            <h1 class="item-title">{{ item.name }}</h1>
            <div class="book">
              <div class="book-item" v-for="(item2, index2) in item.list" :key="index2">
                <div class="book-item-left">
                  <span class="ico">
                    <img v-if="item2.wait" src="@/assets/img/wait.png" alt="" />
                    <img v-else src="@/assets/img/warn.png" alt="" />
                  </span>
                  <span class="text">{{ item2.value }}</span>
                </div>
                <span class="time">{{ item2.time }}</span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$module-height: 980px;
.finch-container {
  width: 100%;
  height: $module-height;
  background-image: url("../../../assets/img/home-4-bg.png");
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;
  .filter {
    width: 100%;
    height: $module-height;
    position: absolute;
    background-image: url("../../../assets/img/home-4-filter.png");
    opacity: 0.3;
    .video {
      visibility: visible;
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
      width: 100%;
    }
  }
  .gradient {
    width: 100%;
    height: $module-height;
    background-image: url("../../../assets/img/home-4-filter.png");
    background-size: cover;
    z-index: 3;
    position: absolute;
    left: 0;
    top: 0;
    @extend .flex-column-center;
    padding-top: 80px;
    box-sizing: border-box;
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
    .phase-list {
      margin-top: 110px;
      .current-item {
        transform: translate3d(-250%, 0, 0);
        z-index: 3;
        cursor: auto;
      }
      .list-item {
        float: left;
        perspective: 600px;
        transition: all 0.4s ease-out;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        .item-title {
          font-family: Lobster;
          font-style: normal;
          font-weight: normal;
          font-size: 36px;
          line-height: 32px;
          text-align: center;
          letter-spacing: 0.02em;
          color: #ffffff;
          margin-bottom: 32px;
          transform: rotateY(0deg) scale(1) translateZ(0);
          transition: all 0.4s ease-out;
        }
        .book {
          width: 398px;
          height: 508px;
          background: rgba(196, 33, 24, 0.1);
          border: 2px solid #c42118;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
          padding: 20px 32px;
          box-sizing: border-box;
          transform: rotateY(0deg) scale(1) translateZ(0);
          transition: all 0.4s ease-out;
          .book-item {
            padding-top: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(244, 47, 36, 0.5);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .book-item-left {
              @extend .flex-center;
              .ico {
                width: 14px;
                height: 14px;
                img {
                  width: 14px;
                }
              }
              .text {
                margin-left: 8px;
                font-family: Moderne;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 32px;
                color: #ffffff;
              }
            }
            .time {
              font-family: Moderne;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 32px;
              text-align: right;
              color: #ffffff;
            }
          }
          .book-item:last-child {
            // border-bottom: none;
          }
        }
      }
      .prev-item {
        z-index: 2;
        cursor: pointer;
        transform: translate3d(calc(-150% + 40px), 0, 0);
        .item-title {
          transform: rotateY(32deg) scale(0.8) translateZ(0);
          opacity: 0.4;
        }
        .book {
          transform: rotateY(32deg) scale(0.8) translateZ(0);
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#000),
            color-stop(0.6, #000),
            to(rgba(0, 0, 0, 0.36))
          );
        }
      }
      .prev-prev-item {
        z-index: 1;
        cursor: pointer;
        transform: translate3d(calc(-150% - 230px), 0, 0);
        .item-title {
          transform: rotateY(32deg) scale(0.65) translateZ(0);
          opacity: 0.4;
        }
        .book {
          transform: rotateY(32deg) scale(0.65) translateZ(0);
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#000),
            color-stop(0.6, #000),
            to(rgba(0, 0, 0, 0.36))
          );
        }
      }
      .next-item {
        z-index: 2;
        cursor: pointer;
        transform: translate3d(calc(50% - 40px), 0, 0);
        .item-title {
          transform: rotateY(-32deg) scale(0.8) translateZ(0);
          opacity: 0.4;
        }
        .book {
          transform: rotateY(-32deg) scale(0.8) translateZ(0);
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 0.36)),
            color-stop(0.4, #000),
            to(#000)
          );
        }
      }
      .next-next-item {
        z-index: 1;
        cursor: pointer;
        transform: translate3d(calc(150% - 160px), 0, 0);
        .item-title {
          transform: rotateY(-32deg) scale(0.65) translateZ(0);
          opacity: 0.4;
        }
        .book {
          transform: rotateY(-32deg) scale(0.65) translateZ(0);
          -webkit-mask-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(rgba(0, 0, 0, 0.36)),
            color-stop(0.4, #000),
            to(#000)
          );
        }
      }
    }
  }
}
</style>
