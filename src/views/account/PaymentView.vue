<template>
  <div class="payment">
    <div class="payment__wrapper">
      <main-title tag="h2" titleName="Выплаты"></main-title>
      <div class="payment__filter">
        <div class="payment__filter_block payment__filter_block-sum">
          <div class="main__label">Сумма всех выплат</div>
          <div class="main-number main__number-lg">
            <span>{{ this.bitcoins }}</span> BTC
          </div>
        </div>
        <div class="payment__filter_wrapper">
          <div class="payment__filter_block">
            <div class="payment__filter_label">Дата</div>
            <main-date placeholder="За все время"></main-date>
          </div>
          <blue-button class="payment__button small">Выгрузить</blue-button>
        </div>
      </div>
      <main-slider :table="this.paymentInfo"></main-slider>
    </div>
  </div>
</template>
<script>
import MainSlider from "@/components/account/MainSlider";

export default {
  components: { MainSlider },
  data() {
    return {
      date: {},
      paymentInfo: {
        titles: ["Дата", "Сумма", "Ссылка на транзакцию"],
        rows: [
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
          {
            date: "29.11.2022",
            time: "15:10:45",
            BTC: 0,
            link: "54df54s8454ad445s4d515xs4d6asd45xa54s",
          },
        ],
      },
    };
  },
  computed: {
    bitcoins() {
      let sum = 0;
      return sum.toFixed(8);
    },
  },
  mounted() {
    document.title = "Выплаты";
  },
};
</script>
<style lang="scss" scoped>
.payment {
  width: 100%;

  .title {
    margin-bottom: 16px;
    @media (max-width: 479.98px) {
      margin-bottom: 24px;
    }
  }

  &__wrapper {
    width: 100%;
  }

  &__filter {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: flex-end;
    @media (max-width: 767.98px) {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 20px 17px;
      margin-bottom: 20px;
    }

    &_wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 16px;
      @media (max-width: 767.98px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    &_block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 270px;
      width: 100%;
      gap: 8px;

      &-sum {
        height: 100%;
        gap: 0;
        @media (min-width: 768.98px) {
          min-height: 79px;
        }

        @media (max-width: 767.98px) {
          background: #ffffff;
          border: 0.5px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          width: 100%;
          max-width: 100%;
          padding: 4px 10px;
          grid-column-start: 1;
          grid-column-end: 3;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          min-height: 48px;
        }
        @media (max-width: 479.98px) {
          flex-direction: column;
          align-items: flex-start;
          min-height: 0;
        }

        .payment__filter_label {
          @media (max-width: 991.98px) {
            padding-right: 5px;
          }
        }
      }

      @media (max-width: 767.98px) {
        max-width: 100%;
        margin: 0;
      }
    }
  }

  &__button {
    min-width: 141px;
    @media (max-width: 767.98px) {
      min-width: 100%;
    }
  }
}
</style>
