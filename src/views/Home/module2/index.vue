<script setup></script>

<template>
  <div class="finch-container">
    <div class="filter"></div>
    <div class="gradient">
      <h1 class="title" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
        {{ $t("home.module2.title") }}
      </h1>
      <div
        class="split"
        data-aos="zoom-in"
        data-aos-duration="3000"
        data-aos-delay="500"
      ></div>
      <h2 class="desc" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="500">
        {{ $t("home.module2.desc") }}
      </h2>
      <div class="product">
        <div class="a-left">
          <div class="a-top">
            <!-- <iframe
            class="model"
              data-v-355fd379=""
              title="Fire Sentz"
              src="https://sketchfab.com/models/ada518f9ccaa4d879293a9e88e23e2f4/embed?autospin=1&amp;autostart=1&amp;camera=0&amp;transparent=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_hint=0&amp;ui_ar=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_fullscreen=0&amp;ui_annotations=0&amp;ui_theme=dark"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe> -->
          </div>
          <div class="a-bottom">
            <!-- <iframe
            class="model"
              data-v-355fd379=""
              title="Fire Sentz"
              src="https://sketchfab.com/models/17eb4050c54e421198f4784120a9a61b/embed?autospin=1&amp;autostart=1&amp;camera=0&amp;transparent=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_hint=0&amp;ui_ar=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_fullscreen=0&amp;ui_annotations=0&amp;ui_theme=dark"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe> -->
          </div>
        </div>
        <div class="a-center">
          <div class="a-center-top">
            <!-- <iframe
              class="model"
              data-v-355fd379=""
              title="Fire Sentz"
              src="https://sketchfab.com/models/beea191c131049b0be1bb4910e924a62/embed?autospin=1&amp;autostart=1&amp;camera=0&amp;transparent=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_hint=0&amp;ui_ar=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_fullscreen=0&amp;ui_annotations=0&amp;ui_theme=dark"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe> -->
          </div>
          <div class="a-center-bottom">
            <a href="" class="link">{{ $t("home.module2.introduction") }}</a>
          </div>
        </div>
        <div class="a-right">
          <div class="a-top">
            <!-- <iframe
            class="model"
              data-v-355fd379=""
              title="Fire Sentz"
              src="https://sketchfab.com/models/5289279bf4aa4491a3913efffc9c7dfa/embed?autospin=1&amp;autostart=1&amp;camera=0&amp;transparent=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_hint=0&amp;ui_ar=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_fullscreen=0&amp;ui_annotations=0&amp;ui_theme=dark"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe> -->
          </div>
          <div class="a-bottom">
            <!-- <iframe
            class="model"
              src="https://sketchfab.com/models/aded0b88da68422fbf200ba44a17be28/embed?autospin=1&amp;autostart=1&amp;camera=0&amp;transparent=1&amp;ui_animations=0&amp;ui_infos=0&amp;ui_stop=0&amp;ui_inspector=0&amp;ui_watermark_link=0&amp;ui_watermark=0&amp;ui_hint=0&amp;ui_ar=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_vr=0&amp;ui_fullscreen=0&amp;ui_annotations=0&amp;ui_theme=dark"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              xr-spatial-tracking=""
              execution-while-out-of-viewport=""
              execution-while-not-rendered=""
              web-share=""
              allow="autoplay; fullscreen; xr-spatial-tracking"
            ></iframe> -->
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
  background-image: url("../../../assets/img/home-2-bg.png");
  background-size: cover;
  position: relative;
  .filter {
    width: 100%;
    height: $module-height;
    background-image: url("../../../assets/img/home-2-filter.png");
    background-size: cover;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
  }
  .gradient {
    width: 100%;
    height: $module-height;
    background-image: url("../../../assets/img/home-2-gradient.png");
    background-size: cover;
    z-index: 2;
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
    }
    .product {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      .a-left,
      .a-right {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > div {
          width: 300px;
          height: 232px;
        }
        .a-top {
          margin-bottom: 48px;
        }
      }
      .a-center {
        margin: 0 65px;
        .a-center-top {
          width: 470px;
          height: 408px;
          margin-bottom: 36px;
        }
        .a-center-bottom {
          width: 470px;
          height: 68px;
          margin-top: 36px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid #f42f24;
          box-sizing: border-box;
          border-radius: 6px;
          .link {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            font-family: Moderne;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 34px;
            text-align: center;
            color: #f42f24;
          }
        }
      }
    }
  }
}
</style>
