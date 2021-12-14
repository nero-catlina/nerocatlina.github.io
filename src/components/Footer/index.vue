<script setup>
import { watch, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const routes = [
  {
    name: "Home",
    path: "/",
    id: 0,
  },
  {
    name: "Token Presale",
    path: "/token-presale",
    id: 1,
  },
  {
    name: "NFT Presale",
    path: "/nft-presale",
    id: 2,
  },
];

const state = reactive({
  currentPath: "/",
  currentNative: 0,
});

watch(() => {
  state.currentPath = route.path;
});
</script>

<template>
  <div class="footer">
    <div class="filter"></div>
    <div class="gradient">
      <div class="container-center">
        <h1
          class="title"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          {{ $t("footer.title") }}
        </h1>
        <div
          class="split"
          data-aos="zoom-in"
          data-aos-duration="3000"
          data-aos-delay="500"
        ></div>
        <div class="partnership">
          <div class="item">
            <img src="@/assets/img/logo-bsc.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-pancake.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-unicrypt.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-babyswap.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-chainlink.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-cmc.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-coingecko.png" alt="" />
          </div>
          <div class="item">
            <img src="@/assets/img/logo-ethereum.png" alt="" />
          </div>
        </div>
        <div class="joinus">
          <h2 class="title">{{ $t("footer.joinus") }}</h2>
          <div class="joinus-detail">
            <a href="" target="_blank" class="item facebook"></a>
            <a href="" target="_blank" class="item twitter"></a>
            <a href="" target="_blank" class="item youtube"></a>
            <a href="" target="_blank" class="item telegram"></a>
            <a href="" target="_blank" class="item discord"></a>
          </div>
          <div class="contact">
            <span class="label">{{ $t("footer.contact") }}</span>
            <span class="text">{{ $t("footer.email") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 972px;
  position: relative;
  background-image: url("../../assets/img/footer-bg.png");
  .filter {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/footer-filter.png");
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .gradient {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/footer-gradient.png");
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    padding-top: 100px;
    box-sizing: border-box;
  }
  .container-center {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .title {
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
      background: #c42118;
      border-radius: 2px;
    }
    .partnership {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 165px;
      .item {
        width: 25%;
        @extend .flex-center;
        margin-bottom: 54px;
        opacity: 0.7;
      }
      .item:hover {
        opacity: 1;
      }
    }
    .joinus {
      margin-top: 107px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      & > .title {
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 60px;
        letter-spacing: 0.05em;
        color: #ffffff;
      }
      .joinus-detail {
        margin-top: 30px;
        margin-bottom: 24px;
        @extend .flex-center;
        .item {
          width: 56px;
          height: 56px;
          display: flex;
          margin-right: 16px;
          background-position: center center;
          background-repeat: no-repeat;
          position: relative;
        }
        .item:hover {
          transform: translateY(-5px);
          transition: all 0.3s;
        }
        .facebook {
          background-image: url("../../assets/img/facebook-1.png");
        }
        .facebook:hover {
          background-image: url("../../assets/img/facebook-2.png");
        }
        .twitter {
          background-image: url("../../assets/img/twitter-1.png");
        }
        .twitter:hover {
          background-image: url("../../assets/img/twitter-2.png");
        }
        .youtube {
          background-image: url("../../assets/img/youtube-1.png");
        }
        .youtube:hover {
          background-image: url("../../assets/img/youtube-2.png");
        }
        .telegram {
          background-image: url("../../assets/img/telegram-1.png");
        }
        .telegram:hover {
          background-image: url("../../assets/img/telegram-2.png");
        }
        .discord {
          background-image: url("../../assets/img/discord-1.png");
        }
        .discord:hover {
          background-image: url("../../assets/img/discord-2.png");
        }
      }
      .contact {
        .label {
          font-family: Moderne;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 19px;
          color: #ffffff;
        }
        .text {
          font-family: Moderne;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
