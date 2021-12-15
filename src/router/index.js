import { createRouter, createWebHistory } from "vue-router";

import TokenPresale from "../views/TokenPresale";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/nerocatlina.github.io/",
      component: () => import("../layout/web.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Home")
        },
        {
          path: "/nerocatlina.github.io/token-presale",
          component: TokenPresale
        },
        {
          path: "/nerocatlina.github.io/nft-presale",
          component: () => import("../views/NftPresale")
        }
      ]
    }
  ]
});

export default router;
