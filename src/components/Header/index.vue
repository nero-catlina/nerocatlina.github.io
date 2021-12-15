<script setup>
import { watch, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const routes = [
  {
    name: "Home",
    path: "/nerocatlina.github.io/",
    id: 0,
  },
  {
    name: "Token Presale",
    path: "/nerocatlina.github.io/token-presale",
    id: 1,
  },
  {
    name: "NFT Presale",
    path: "/nerocatlina.github.io/nft-presale",
    id: 2,
  },
];

const state = reactive({
  currentPath: "/nerocatlina.github.io/",
});

watch(() => {
  state.currentPath = route.path;
});
</script>

<template>
  <div class="header">
    <div class="container-center">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
        <span class="title">{{ $t("header.title") }}</span>
      </div>
      <div class="routes">
        <template v-for="item in routes" :key="item.id">
          <router-link
            :class="`link ${item.path === state.currentPath ? 'active' : ''}`"
            :to="item && item.path"
            >{{ item.name }}</router-link
          >
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 66px;
  background: rgba(20, 10, 0, 0.8);
  position: sticky;
  left: 0;
  top: 0;
  z-index: 99;
  .container-center {
    @extend .flex-center;
    .logo {
      height: 48px;
      @extend .flex-center;
      img {
        width: 48px;
      }
      .title {
        font-family: Lobster;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.05em;
        color: #ffffff;
      }
    }
    .routes {
      margin-left: 108px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .link {
        font-family: Moderne;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        margin-left: 48px;
        color: #958080;
      }
      .link:hover {
        color: #fff;
      }
      .link:first-child {
        margin-left: 0;
      }
      .active {
        color: #fff;
      }
    }
  }
}
</style>
