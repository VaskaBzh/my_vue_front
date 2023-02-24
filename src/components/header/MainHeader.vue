<template>
  <nav class="nav__container close-main">
    <router-link to="/" data-burger-close>
      <img
        class="nav__logo headder"
        src="@/assets/img/logo_high_quality.png"
        alt="logo"
      />
    </router-link>
    <nav-links />
    <router-link
      data-burger-close
      v-if="viewportWidth >= 991.98"
      class="nav__button"
      to="loginReg"
    >
      Личный кабинет
    </router-link>
    <main-burger v-else class="nav__buttons_mobile" />
  </nav>
</template>

<script>
import NavLinks from "@/components/navs/NavLinks.vue";
import MainBurger from "@/components/header/MainBurger.vue";

export default {
  components: {
    MainBurger,
    NavLinks,
  },
  data() {
    return {
      is_clicked: false,
      viewportWidth: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  mounted() {
    setTimeout(this.handleScroll, 10);
  },
  methods: {
    handleScroller(bool) {
      if (
        bool === false &&
        document.querySelector("body").classList.contains("header-fix")
      ) {
        document.querySelector(".nav__container").classList.remove("fixed");
      } else if (
        bool === true &&
        document.querySelector("body").classList.contains("header-fix")
      ) {
        document.querySelector(".nav__container").classList.add("fixed");
      }
    },
    handleScroll(attr) {
      if (attr === "update") {
        console.log(123);
        document.querySelector("body").classList.remove("header-fix");
      }
      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.querySelector(".nav__container").classList.remove("fixed");
            document.querySelector("body").classList.remove("header-fix");
          } else if (!entry.isIntersecting) {
            document.querySelector("body").classList.add("header-fix");
          }
        });
      });
      animationObserver.observe(document.querySelector(".observer_block"));
      window.addEventListener("wheel", (e) => {
        if (e.deltaY < 0) {
          setTimeout(() => {
            this.handleScroller(true);
          }, 10);
        } else {
          this.handleScroller(false);
        }
      });
    },
    handleResize() {
      this.viewportWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss">
.header-fix {
  @media (min-width: 1271px) {
    nav.nav__container {
      position: fixed;
      transform: translateX(-50%) translateY(-120%);
      z-index: 100;
    }
  }
}

.nav__button {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 143.1%;
  color: #3f7bdd;
  background: rgba(194, 213, 242, 0.61);
  border-radius: 5px;
  padding: 11px 36px;
  white-space: nowrap;
  transition: all 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      background: rgba(194, 213, 242);
    }
  }

  &_mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;

    img {
      border-radius: 50%;
      width: 36px;
      height: 36px;
    }
  }
}

.nav__logo {
  max-width: 170px;
  @media (max-width: 767.98px) {
    &.headder {
      position: relative;
      z-index: 100;
    }
    max-width: 138px;
  }
}

nav.nav__container {
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 115px;
  width: 100%;
  box-sizing: border-box !important;
  padding: 40px 0 15px;
  @media (min-width: 1271px) {
    transition: all 0.3s ease 0s;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    width: 100vw;
    z-index: 100;
    &:before {
      transition: all 0.3s ease 0s;
      left: 50%;
      content: "";
      transform: translateX(-50%) translateY(-120%);
      top: 0;
      width: 100vw;
      height: 101px;
      z-index: -1;
      position: fixed;
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
      background: linear-gradient(
        179.87deg,
        #e6eaf0 1.02%,
        #e6eaf1 4.79%,
        #e7ebf1 8.76%,
        #eaeef4 14.75%,
        #e8ecf2 19.07%
      );
    }
    &.fixed {
      transform: translateX(-50%) translateY(0);

      &:before {
        transform: translateX(-50%) translateY(0);
      }
    }
  }
  @media (max-width: 1270px) {
    padding: 40px 0 15px;
    gap: 50px;
    transform: translate(0, 0) !important;
  }
  @media (max-width: 991.98px) {
    padding-top: 20px;
  }
  @media (max-width: 767.98px) {
    padding: 20px 15px 15px;
    position: fixed;
    gap: 15px;
    &::before {
      content: "";
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
      background: linear-gradient(
        179.87deg,
        #e6eaf0 1.02%,
        #e6eaf1 4.79%,
        #e7ebf1 8.76%,
        #eaeef4 14.75%,
        #e8ecf2 19.07%
      );
    }
  }
}
</style>
