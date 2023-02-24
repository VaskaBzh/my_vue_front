<template>
  <div class="nav__buttons_mobile">
    <router-link data-burger-close to="loginReg" class="nav__button_mobile"
      ><img src="../../../public/static/assets/img/profile.png" alt="" />
    </router-link>
    <router-link data-burger-close class="nav__button_mobile" to="loginReg">
      <svg
        width="33"
        height="46"
        viewBox="0 0 33 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.762695 4.68154C0.762695 2.18206 2.67069 0.15686 5.12383 0.15686H27.7472C30.2003 0.15686 32.3809 2.18206 32.3809 4.68154V40.8817C32.3809 43.3811 30.2003 45.4063 27.7472 45.4063H5.12383C2.67069 45.4063 0.762695 43.3811 0.762695 40.8817V39.7123V29.7962V6.31969V4.68154ZM27.7482 40.8816H13.8471L18.2083 39.0227C19.8437 38.3112 20.934 36.6758 20.934 34.8632V12.7823C20.934 11.1577 20.1162 9.65859 18.7534 8.85451L11.394 4.68145H27.7482V40.8816ZM5.12272 29.7962V6.31964L16.5707 12.7823V34.8633L5.12272 39.7123V29.7962ZM11.9375 20.5206C10.8472 20.5206 9.75696 21.5319 9.75696 22.783C9.75696 24.0313 10.8472 25.0453 11.9375 25.0453C13.3004 25.0453 14.1181 24.0313 14.1181 22.783C14.1181 21.5319 13.3004 20.5206 11.9375 20.5206Z"
        />
      </svg>
    </router-link>
    <div
      @click="burgerAction"
      class="nav__burger"
      :class="{ active: is_clicked }"
    >
      <div class="nav__burger_con">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_clicked: false,
    };
  },
  mounted() {
    document.querySelector(".nav__links_con").addEventListener("click", (e) => {
      if (
        !e.target.closest(".nav__wrapper") ||
        e.target.closest("[data-burger-close]") ||
        e.target.closest(".nav__link")
      ) {
        this.burgerAction("close");
      }
    });
  },
  methods: {
    burgerAction(attr) {
      if (attr === "close") {
        this.is_clicked = false;
        setTimeout(this.locker, 500);
        document.querySelector(".nav__links_con").classList.remove("open");
      } else {
        if (this.is_clicked === true) {
          this.is_clicked = false;
          setTimeout(this.locker, 500);
          document.querySelector(".nav__links_con").classList.remove("open");
        } else if (this.is_clicked === false) {
          this.is_clicked = true;
          document.querySelector("body").classList.add("lock-burger");
          document.querySelector(".nav__links_con").classList.add("open");
        }
      }
    },
    locker() {
      document.querySelector("body").classList.remove("lock-burger");
    },
  },
};
</script>

<style lang="scss">
.nav__buttons_mobile {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 100;

  svg {
    padding: 6.5px 0;
    fill: #818c99;
    background: #fff;
    border: 0.5px solid rgba(0, 0, 0, 0.08);
    border-radius: 29px;
    height: 36px;
    width: 36px;
  }

  & .nav__burger {
    border-radius: 5px;
    width: 30px;
    height: 30px;
    gap: 4px;
    transition: all 0.3s ease 0s;
    margin-right: -9px;

    &:active {
      background: #305ea8;
      box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);

      span {
        background: #fff;
      }
    }

    &_con {
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      width: 18px;
      overflow: hidden;
    }

    & span {
      display: block;
      width: 18px;
      height: 1.5px;
      flex: 0 0 1.5px;
      background: #4182ec;
      border-radius: 5px;
      position: relative;
      right: 0;
      transition: all 0.3s ease 0.3s, background 0.3s ease 0s;

      &:nth-child(2) {
        transition: all 0.3s ease 0s, background 0.3s ease 0s;

        &::before {
          transition: all 0.3s ease 0s;
          content: "";
          position: absolute;
          height: 100%;
          width: 100%;
          background: #4182ec;
        }
      }
    }

    &.active {
      & span {
        &:nth-child(1) {
          transition: all 0.3s ease 0s;
          right: 100%;
        }

        &:nth-child(2) {
          transition: all 0.3s ease 0.3s;
          transform: rotate(45deg);

          &::before {
            transition: all 0.3s ease 0.3s;
            transform: rotate(-90deg);
          }
        }

        &:nth-child(3) {
          transition: all 0.3s ease 0s;
          right: -100%;
        }
      }
    }
  }
}
</style>
