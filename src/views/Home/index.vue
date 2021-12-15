<template>
  <div>
    <Module1 />
    <div class="gradient"></div>
    <Module2 />
    <Module3 />
    <Module4 />
    <div class="gradient-footer-1"></div>
    <div class="gradient-footer-2"></div>
    <Footer />
  </div>
</template>

<script>
import Module1 from "./module1";
import Module2 from "./module2";
import Module3 from "./module3";
import Module4 from "./module4";
import Footer from "@/components/Footer/index.vue";

export default {
  components: {
    Module1,
    Module2,
    Module3,
    Module4,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: relative;
  left: 0;
  margin-top: -80px;
  z-index: 10;
}
.gradient-footer-1 {
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: relative;
  left: 0;
  margin-top: -80px;
  z-index: 10;
}
.gradient-footer-2 {
  width: 100%;
  height: 80px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  position: relative;
  left: 0;
  margin-bottom: -80px;
  z-index: 10;
}
</style>
