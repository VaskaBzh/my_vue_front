<template>
  <div class="platform-c">
    <div class="platform-c__container">
      <div class="platform-c__main">
        <div class="platform-c__logo_con">
          <img
            class="platform-c__logo"
            src="../assets/img/logo_icon.png"
            alt=""
          />
        </div>
        <div class="platform-c__title">
          Комплексная платформа, предназначенная для повышения доходов майнеров
        </div>
        <ul v-if="viewportWidth >= 767.98" class="platform-c__list">
          <li class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-1"
                src="../assets/img/platform-img-1.png"
                alt=""
                v-scroll="'left delay'"
              />
            </div>
            <div class="platform-c__item_title">Безопасный и прозрачный</div>
            <div class="platform-c__item_text">
              Хешрейт отображается в режиме реального времени, пока команда
              безопасности Allbtc защищает ваши активы
            </div>
          </li>
          <li class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-2"
                src="../assets/img/platform-img-2.png"
                alt=""
                v-scroll="'left delay--md'"
              />
            </div>
            <div class="platform-c__item_title">Стабильный заработок</div>
            <div class="platform-c__item_text">
              Используя модель FPPS, PPS+, PPS и мгновенные расчеты, вы можете
              избежать колебаний заработка
            </div>
          </li>
          <li class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-3"
                src="../assets/img/platform-img-3.png"
                alt=""
                v-scroll="'left delay--lg'"
              />
            </div>
            <div class="platform-c__item_title">Комплексное обслуживание</div>
            <div class="platform-c__item_text">
              Наше комплексное обслуживание направлено на повышение доходов
              майнеров, сокращение разрыва между добычей полезных ископаемых и
              трейдингом, а также обеспечение универсальной экосистемы майнинга.
            </div>
          </li>
        </ul>
        <swiper
          class="sjj"
          v-else
          :modules="modules"
          :slides-per-view="1"
          :space-between="15"
          :pagination="pagination"
        >
          <swiper-slide class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-1"
                src="../assets/img/platform-img-1.png"
                alt=""
              />
            </div>
            <div class="platform-c__item_title">Безопасный и прозрачный</div>
            <div class="platform-c__item_text">
              Хешрейт отображается в режиме реального времени, пока команда
              безопасности Allbtc защищает ваши активы
            </div>
          </swiper-slide>
          <swiper-slide class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-2"
                src="../assets/img/platform-img-2.png"
                alt=""
              />
            </div>
            <div class="platform-c__item_title">Стабильный заработок</div>
            <div class="platform-c__item_text">
              Используя модель FPPS, PPS+, PPS и мгновенные расчеты, вы можете
              избежать колебаний заработка
            </div>
          </swiper-slide>
          <swiper-slide class="platform-c__item">
            <div class="platform-c__item_image_con">
              <img
                class="platform-c__item_image n-3"
                src="../assets/img/platform-img-3.png"
                alt=""
              />
            </div>
            <div class="platform-c__item_title">Комплексное обслуживание</div>
            <div class="platform-c__item_text">
              Наше комплексное обслуживание направлено на повышение доходов
              майнеров, сокращение разрыва между добычей полезных ископаемых и
              трейдингом, а также обеспечение универсальной экосистемы майнинга.
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

export default {
  data() {
    return {
      viewportWidth: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.platform-c {
  // .platform-c__main
  &__main {
    margin-bottom: 48px;
  }
  // .platform-c__logo
  &__logo {
    max-width: 95px;
    margin-bottom: 18px;
    @media (max-width: 767.98px) {
      max-width: 67px;
      margin-bottom: 32px;
    }
    &_con {
      display: flex;
      justify-content: center;
    }
  }
  // .platform-c__title
  &__title {
    font-family: "AmpleSoftPro";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 132.6%;
    text-align: center;
    color: #000034;
    margin-bottom: 36px;
    @media (max-width: 767.98px) {
      font-size: 27px;
      line-height: 107.6%;
      margin-bottom: 19px;
    }
  }
  // .platform-c__list
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    @media (max-width: 991.98px) {
      gap: 36px;
    }
  }
  // .platform-c__item
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    // .platform-c__item_image
    &_image {
      &_con {
        height: 190px;
        display: flex;
        align-items: end;
      }
      &.n-1 {
        max-height: 190px;
      }
      &.n-2 {
        max-height: 145px;
      }
      &.n-3 {
        max-height: 137px;
      }
    }
    // .platform-c__item_title
    &_title {
      font-family: "AmpleSoftPro";
      font-style: normal;
      font-weight: 500;
      font-size: 27px;
      line-height: 107.6%;
      color: #000034;
      margin-bottom: 24px;
      align-self: start;
      @media (max-width: 991.98px) {
        align-self: center;
        text-align: center;
      }
      @media (max-width: 767.98px) {
        font-size: 22px;
        line-height: 107.6%;
        margin-bottom: 20px;
      }
    }
    // .platform-c__item_text
    &_text {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 148.1%;
      color: rgba(0, 0, 0, 0.62);
      @media (max-width: 991.98px) {
        text-align: center;
      }
      @media (max-width: 767.98px) {
        align-self: center;
      }
    }
  }
}
</style>
