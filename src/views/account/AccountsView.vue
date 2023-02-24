<template>
  <div class="accounts">
    <div class="accounts__wrapper">
      <main-title tag="h2" class="accounts__title">
        Аккаунты
        <blue-button class="add accounts_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.07129 10.0703C1.07129 9.51803 1.519 9.07031 2.07129 9.07031H18.0713C18.6236 9.07031 19.0713 9.51803 19.0713 10.0703C19.0713 10.6226 18.6236 11.0703 18.0713 11.0703H2.07129C1.519 11.0703 1.07129 10.6226 1.07129 10.0703Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.0708 1.0708C10.6231 1.0708 11.0708 1.51852 11.0708 2.0708V18.0708C11.0708 18.6231 10.6231 19.0708 10.0708 19.0708C9.51852 19.0708 9.0708 18.6231 9.0708 18.0708V2.0708C9.0708 1.51852 9.51852 1.0708 10.0708 1.0708Z"
            />
          </svg>
        </blue-button>
      </main-title>
      <div class="accounts__content">
        <account-profile
          v-for="(account, index) in accounts"
          :key="index"
          :accountInfo="account"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AccountProfile from "@/components/account/AccountProfile";

export default {
  components: {
    AccountProfile,
  },
  data() {
    return {
      accounts: {
        AleksaLoboda: {
          img: "profile.png",
          myName: "Aleksa Loboda",
          hashRate: "0.00",
          workersActive: "0",
          workersAll: "0",
          todayProfit: "0.00000000",
          myPayment: "0.00000000",
        },
        PavelPreson: {
          img: "profile.png",
          myName: "Pavel Person",
          hashRate: "0.00",
          workersActive: "0",
          workersAll: "0",
          todayProfit: "0.00000000",
          myPayment: "0.00000000",
        },
      },
    };
  },
  mounted() {
    document.title = "Аккаунты";
  },
};
</script>

<style lang="scss" scoped>
.accounts {
  &__wrapper {
    width: 100%;
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    @media (max-width: 1270px) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    display: inline-flex;
    justify-content: space-between;
    margin-bottom: 16px;
    width: 100%;
    align-items: center;
    @media (max-width: 767.98px) {
      margin-bottom: 24px;
    }
  }

  &_button {
    svg {
      width: 14px;
      height: 14px;
      fill: #fff;
      @media (max-width: 479.89px) {
        fill: #4182ec;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
