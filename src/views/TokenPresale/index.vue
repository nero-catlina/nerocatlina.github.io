<script setup>
import { reactive } from "vue";

const state = reactive({
  form: {
    softCap: 0,
    hardCap: 0,
    minLimit: 0,
    maxLimit: 0,
    totalSupply: 0,
    presaleAllocation: 0,
    remainingSupply: 0,
    timelock: 20,
  },
  from: "BNB",
  to: "GODZ",
  showZero: false,
});

const handleShowZero = () => {
  state.showZero = true;
};

const handleHideZero = () => {
  state.showZero = false;
};
</script>

<template>
  <div class="finch-container">
    <div class="dialog" v-if="state.showZero">
      <div class="content" data-aos="zoom-in" data-aos-duration="500">
        <h1 class="title">{{ $t("tokenPresale.dialog.title") }}</h1>
        <h1 class="desc">{{ $t("tokenPresale.dialog.desc") }}</h1>
        <h1 class="confirm" @click="handleHideZero">
          {{ $t("tokenPresale.dialog.confirm") }}
        </h1>
      </div>
    </div>
    <div class="filter-bg">
      <video
        autoplay="autoplay"
        playsinline=""
        loop="loop"
        preload="auto"
        style="object-fit: cover"
        class="video"
      >
        <source src="../../assets/home-bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="container">
      <div class="container-center">
        <div class="token-left">
          <h1 class="title">{{ $t("tokenPresale.offering.title") }}</h1>
          <div class="form">
            <div class="form-top">
              <div class="form-top-a">
                <div class="item">
                  <span class="label">{{ $t("tokenPresale.offering.softCap") }}:</span>
                  <span class="value">{{ state.form.softCap }} {{ state.from }}</span>
                </div>
                <div class="item">
                  <span class="label">{{ $t("tokenPresale.offering.minLimit") }}:</span>
                  <span class="value">{{ state.form.minLimit }} {{ state.from }}</span>
                </div>
                <div class="item">
                  <span class="label"
                    >{{ $t("tokenPresale.offering.totalSupply") }}:</span
                  >
                  <span class="value">{{ state.form.totalSupply }} {{ state.to }}</span>
                </div>
              </div>
              <div class="form-top-b">
                <div class="item">
                  <span class="label">{{ $t("tokenPresale.offering.hardCap") }}:</span>
                  <span class="value">{{ state.form.hardCap }} {{ state.from }}</span>
                </div>
                <div class="item">
                  <span class="label">{{ $t("tokenPresale.offering.maxLimit") }}:</span>
                  <span class="value">{{ state.form.maxLimit }} {{ state.from }}</span>
                </div>
                <div class="item">
                  <span class="label"
                    >{{ $t("tokenPresale.offering.presaleAllocation") }}:</span
                  >
                  <span class="value"
                    >{{ state.form.presaleAllocation }}% Total Supply</span
                  >
                </div>
              </div>
            </div>
            <div class="form-bottom">
              <div class="item">
                <span class="label"
                  >{{ $t("tokenPresale.offering.remainingSupply") }}:</span
                >
                <span class="value">{{ state.form.remainingSupply }} {{ state.to }}</span>
              </div>
              <div class="item">
                <span class="label"
                  >{{ $t("tokenPresale.offering.presaleAllocation") }}:</span
                >
                <span class="value">{{ state.form.presaleAllocation }}% / Month</span>
              </div>
            </div>
          </div>
          <div class="swap">
            <div class="title">
              <span class="label">{{ $t("tokenPresale.offering.presaleRate") }}:</span>
              <span class="rate">1 {{ state.from }} = 0 {{ state.to }}</span>
            </div>
            <div class="input-box from">
              <div class="input-box-top">
                <div class="name">{{ state.from }}</div>
                <div class="right">
                  <span class="lable">Balance: </span>
                  <span class="value">0 BNB</span>
                </div>
              </div>
              <div class="input-box-bottom">
                <input
                  inputmode="decimal"
                  autocomplete="off"
                  autocorrect="off"
                  placeholder="0.00"
                  type="text"
                  pattern="^[0-9]*[.,]?[0-9]*$"
                  minlength="1"
                  maxlength="79"
                  spellcheck="false"
                />
                <div class="max" @click="handleShowZero">use max</div>
              </div>
            </div>
            <div class="input-box to">
              <div class="input-box-top">
                <div class="name">{{ state.to }}</div>
                <div class="right">
                  <span class="lable">Claim Balance: </span>
                  <span class="value">0 GODZ</span>
                </div>
              </div>
              <div class="input-box-bottom">
                <input
                  inputmode="decimal"
                  autocomplete="off"
                  autocorrect="off"
                  placeholder="0.00"
                  type="text"
                  :pattern="/^[0-9]*[.,]?[0-9]*$/"
                  minlength="1"
                  maxlength="79"
                  spellcheck="false"
                />
              </div>
            </div>
            <div class="action">
              <div class="claim">{{ $t("tokenPresale.offering.claim") }}</div>
              <div class="buy">{{ $t("tokenPresale.offering.buy") }}</div>
            </div>
          </div>
        </div>
        <div class="token-right">
          <div class="token-right-a">
            <h1 class="title">{{ $t("tokenPresale.stats.title") }}</h1>
            <p class="desc">{{ $t("tokenPresale.stats.desc") }}</p>
            <div class="audio">
              <span>0 BNB</span>
              <span class="audio-center">0%</span>
              <span>0 BNB</span>
            </div>
            <img class="audio-img" src="@/assets/img/audio.png" alt="" />
            <div class="congratulation">
              {{ $t("tokenPresale.stats.congratulation") }}
            </div>
          </div>
          <div class="token-right-b">
            <div class="title">{{ $t("tokenPresale.events.title") }}</div>
            <div class="desc">{{ $t("tokenPresale.events.desc") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
