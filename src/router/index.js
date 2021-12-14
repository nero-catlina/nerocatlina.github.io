import { createRouter, createWebHistory } from "vue-router";

import TokenPresale from "../views/TokenPresale";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layout/web.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/Home")
        },
        {
          path: "/token-presale",
          component: TokenPresale
        },
        {
          path: "/nft-presale",
          component: () => import("../views/NftPresale")
        }
      ]
    }
  ]
});

export default router;
