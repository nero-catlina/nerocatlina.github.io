<script setup>
import { reactive } from "vue";

const state = reactive({
  currentTab: 1,
});

const handleToggle = (index) => {
  state.currentTab = index;
};
</script>

<template>
  <div class="finch-container">
    <div class="filter"></div>
    <div class="gradient">
      <div class="gradient-top"></div>
      <div class="gradient-bottom"></div>
      <div class="container-center">
        <h1 class="title">{{ $t("nftPresale.title") }}</h1>
        <div class="container">
          <div class="tab">
            <div
              :class="`tabItem ${state.currentTab === 1 ? 'active ' : ''}`"
              @click="handleToggle(1)"
            >
              {{ $t("nftPresale.tab1") }}
            </div>
            <div
              :class="`tabItem ${state.currentTab === 2 ? 'active ' : ''}`"
              @click="handleToggle(2)"
            >
              {{ $t("nftPresale.tab2") }}
            </div>
          </div>
          <div class="content">
            <div class="model"></div>
            <div class="price">0.05 BNB</div>
          </div>
          <div class="buy">{{ $t("nftPresale.buy") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.finch-container {
  height: $max-height;
  background-image: url("../../assets/img/nft-bg.png");
  background-size: cover;
  box-sizing: border-box;
  position: relative;
  .filter {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/nft-filter.png");
    z-index: 1;
  }
  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/nft-gradient.png");
    z-index: 2;
    .gradient-top {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50%;
      background-image: url("../../assets/img/nft-gradient-top.png");
      z-index: 3;
    }
    .gradient-bottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50%;
      background-image: url("../../assets/img/nft-gradient-bottom.png");
      z-index: 3;
    }
    .container-center {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      z-index: 4;
      .container {
        width: 100%;
        height: 680px;
        background: #000000;
        background-color: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(254, 211, 211, 0.6);
        box-shadow: 0px 0px 16px rgba(255, 237, 237, 0.7);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .tab {
          display: flex;
          flex-direction: row;
          align-items: center;
          .tabItem {
            width: 283px;
            height: 56px;
            cursor: pointer;
            margin-left: 52px;
            background: rgba(202, 140, 140, 0.3);
            border: 1px solid rgba(255, 102, 102, 0.3);
            box-sizing: border-box;
            border-radius: 6px;
            font-family: Lobster;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0.05em;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .tabItem:first-child {
            margin-left: 0;
          }
          .active {
            background: #af3535;
            border-radius: 6px;
            font-family: Lobster;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 36px;
            letter-spacing: 0.05em;
            color: #000000;
          }
        }
        .content {
          .model {
            width: 271px;
            height: 279px;
            margin: 32px 0;
          }
          .price {
            font-family: DIN;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #f42f24;
            margin-bottom: 12px;
          }
        }
        .buy {
          width: 446px;
          height: 64px;
          background: #2f0404;
          border: 1px solid #ff6666;
          border-radius: 6px;
          font-family: Lobster;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .title {
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 70px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
