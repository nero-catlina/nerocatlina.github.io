<script setup></script>

<template>
  <div class="finch-container">
    <div class="filter-bg">
      <video
        autoplay="autoplay"
        playsinline=""
        loop="loop"
        preload="auto"
        style="object-fit: cover"
        class="video"
      >
        <source src="../../../assets/home-bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container">
      <div class="container-center">
        <!-- <h1
          class="title"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          {{ $t("home.module1.title") }}
        </h1> -->
        <img class="title" src="../../../assets/img/home-title.jpg" alt="">
        <h2
          class="desc"
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          {{ $t("home.module1.desc") }}
        </h2>
        <div
          class="finch"
          data-aos="fade-in"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <h3 class="title">{{ $t("home.module1.finchAddress") }}</h3>
          <div class="finch-detail">
            <span class="a-a">{{ $t("home.module1.coreAddress") }}</span>
            <span class="a-b">{{ $t("home.module1.buyFinch") }}</span>
            <span class="a-c">{{ $t("home.module1.bscScan") }}</span>
          </div>
        </div>
        <div
          class="help"
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="1000"
        >
          <div class="link-btn">
            <a href="">{{ $t("home.module1.whitePapper") }}</a>
          </div>
          <div class="link-btn">
            <a href="">{{ $t("home.module1.presale") }}</a>
          </div>
          <div class="link-btn">
            <a href="">{{ $t("home.module1.nftsale") }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.finch-container {
  height: $max-height;
  background-image: url("../../../assets/img/home-1.png");
  background-size: cover;
  box-sizing: border-box;
  position: relative;

  .filter-bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
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
  .container {
    color: #fff;
    padding-top: 132px;
    position: absolute;
    width: 100%;
    height: 100%;
    .container-center {
      & > .title {
        width: 520px;
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 88px;
        line-height: 110px;
        letter-spacing: 0.05em;
        color: #ffffff;
      }
      & > .desc {
        width: 1040px;
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 66px;
        line-height: 72px;
        letter-spacing: 0.05em;
        color: #ffffff;
        text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.42);
        margin-top: 24px;
        margin-bottom: 56px;
      }
      .finch {
        .title {
          font-family: Moderne;
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 31px;
          color: #ffffff;
          margin-bottom: 11px;
        }
        .finch-detail {
          width: 434px;
          height: 36px;
          border: 1px solid #ffffff;
          border-radius: 4px;
          display: flex;
          align-items: center;
          span {
            font-family: Moderne;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #ffffff;
            position: relative;
            padding: 7px 16px;
            border-left: 1px solid #fff;
            transition: background-color 0.3s;
          }
          .a-b:hover,
          .a-c:hover {
            background-color: #fff;
            color: #000;
          }
          .a-a {
            padding-right: 38px;
            border-left: none;
          }
          .a-b {
            cursor: pointer;
          }
          .a-a::after {
            content: "[a]";
            position: absolute;
            right: 10px;
            top: -2px;
            font-family: Moderne;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #ffffff;
          }
          .a-c {
            flex: 1;
            cursor: pointer;
          }
        }
      }
    }

    .help {
      margin-top: 88px;
      @extend .flex-center;
      .link-btn {
        width: 160px;
        height: 56px;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 6px;
        @extend .flex-center;
        margin-right: 24px;
        transition: all 0.4s;
        position: relative;
        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          font-family: Moderne;
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 21px;
          text-align: center;
          text-transform: uppercase;
          color: #ffffff;
        }
      }
      .link-btn:hover {
        background: rgba(255, 255, 255, 0.35);
        top: -5px;
      }
    }
  }
}
</style>
