<template>
  <div class="login">
    <div class="login__container">
      <div class="login__list">
        <a href="#" class="popup__open" data-popup="#popup-create-login">
          Создать акккаунт/войти
        </a>
        <a href="#" class="popup__open" data-popup="#popup-create-login-error">
          Создать акккаунт/войти (ошибка)
        </a>
        <a href="#" class="popup__open" data-popup="#popup-code"> Код выслан</a>
        <a href="#" class="popup__open" data-popup="#popup-create">
          Создать аккаунт
        </a>

        <a href="#" class="popup__open" data-popup="#popup-create-password">
          Создать пароль
        </a>
        <a href="#" class="popup__open" data-popup="#popup-login">Войти</a>
      </div>
      <blue-button class="login__form_button">
        <router-link to="/profile" class="all-link">Войти</router-link>
      </blue-button>
    </div>
  </div>

  <main-popup id="popup-create-login">
    <main-title tag="h3" title-name="Создать аккаунт Allbtc"></main-title>
    <input
      type="email"
      class="input input-popup"
      placeholder="Введите ваш Email"
    />
    <blue-button>
      <button class="all-link">Дальше</button>
    </blue-button>
    <div class="popup__text">
      Код не пришёл?
      <a href="#" class="main__link">Отправить повторно</a>
    </div>
  </main-popup>
  <main-popup id="popup-create-login-error" :error="true">
    <main-title tag="h3" title-name="Создать аккаунт Allbtc"></main-title>
    <input
      type="email"
      class="input input-popup"
      placeholder="Введите ваш Email"
    />
    <blue-button class="form_button">
      <button class="all-link">Дальше</button>
    </blue-button>
    <div class="popup__text">
      Код не пришёл?
      <a href="#" class="main__link form_link">Отправить повторно</a>
    </div>
  </main-popup>
  <main-popup id="popup-code" :error="false">
    <main-title tag="h3" title-name="Создать аккаунт Allbtc"></main-title>
    <div class="popup__text">
      Мы отправили проверочный код на ваш электронный адрес
    </div>
    <input type="text" class="input input-popup" placeholder="Введите код" />
    <div class="popup__buttons form__buttons">
      <blue-button class="form_button back">
        <button class="all-link">Назад</button>
      </blue-button>
      <blue-button class="form_button">
        <button class="all-link">Дальше</button>
      </blue-button>
    </div>
    <div class="popup__text">
      Код не пришёл?
      <a href="#" class="main__link form_link">Отправить повторно</a>
    </div>
  </main-popup>
  <main-popup id="popup-create" :error="false">
    <main-title tag="h3" title-name="Создать аккаунт Allbtc"></main-title>
    <input
      type="text"
      class="input input-popup"
      placeholder="Введите ваш логин"
    />
    <blue-button class="form_button">
      <button class="all-link">Дальше</button>
    </blue-button>
  </main-popup>
  <main-popup id="popup-create-password" :error="false">
    <main-title tag="h3" title-name="Создать пароль"></main-title>
    <input
      type="password"
      class="input input-popup"
      placeholder="Введите пароль"
    />
    <input
      type="password"
      class="input input-popup"
      placeholder="Подтвердите пароль"
    />
    <blue-button class="form_button">
      <button class="all-link">Зарегистрироваться</button>
    </blue-button>
  </main-popup>
  <main-popup id="popup-login" :error="false">
    <main-title tag="h3" title-name="Войти в аккаунт Allbtc"></main-title>
    <input
      type="email"
      class="input input-popup"
      placeholder="Введите ваш Email или логин"
    />
    <input
      type="password"
      class="input input-popup"
      placeholder="Введите пароль"
    />
    <blue-button class="form_button">
      <button class="all-link">Войти</button>
    </blue-button>
    <div class="popup__text">
      Нет аккаунта?
      <a href="#" class="main__link form_link">Зарегистрироваться</a>
    </div>
  </main-popup>
  <div
    id="mailsub"
    class="notification"
    align="center"
    style="
      word-break: normal;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
      line-height: normal;
    "
  >
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="line-height: normal; max-width: 600px; min-width: 300px"
    >
      <tr>
        <td align="center" bgcolor="#ffffff">
          <table
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            style="
              margin: 0;
              padding: 0;
              max-width: 600px;
              width: 100%;
              border: 2px solid #e6eaf0;
              background: #ffffff;
              border-radius: 31px;
              overflow: hidden;
            "
          >
            <tr>
              <td
                align="left"
                style="
                  display: flex;
                  justify-content: center;
                  width: 100%;
                  background: #e6eaf0;
                  padding: 39px 0;
                "
              >
                <img
                  border="0"
                  height="42"
                  width="170"
                  style="display: block"
                  src="@/assets/img/logo_high_quality.png"
                  alt="logo"
                />
                <!--head-->
              </td>
            </tr>
            <tr>
              <td
                align="left"
                style="
                  display: flex;
                  flex-direction: column;
                  padding: 40px;
                  gap: 40px;
                "
              >
                <tr
                  style="
                    font-family: 'Ubuntu', serif;
                    display: inline;
                    color: #000000;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 34px;
                  "
                >
                  Дорогой пользователь,
                </tr>
                <tr style="display: flex; flex-direction: column; gap: 8px">
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 26px;
                    "
                    >Спасибо тебе за регистрацию.</span
                  >
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 26px;
                    "
                    >Твой код подтверждения:</span
                  >
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 700;
                      line-height: 26px;
                    "
                    >123456</span
                  >
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 26px;
                    "
                    >Пожалуйста, не разглашай код другим.</span
                  >
                </tr>
                <tr style="display: flex; flex-direction: column; gap: 8px">
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 26px;
                    "
                    >Всего хорошего,</span
                  >
                  <span
                    style="
                      font-family: 'Ubuntu', serif;
                      display: inline;
                      color: #595a5c;
                      font-size: 18px;
                      font-weight: 400;
                      line-height: 26px;
                    "
                    >Команда Allbtc</span
                  >
                </tr>
                <!--main -->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.login {
  padding-top: 100px;

  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  &__form {
    &_link {
      width: 30%;
      margin: 49px 0 24px;
      @media (max-width: 767.98px) {
        width: 100%;
      }
    }

    &_button {
      width: 30%;
      margin-top: 10px;
      @media (max-width: 767.98px) {
        width: 100%;
      }
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 24px;
    @media (max-width: 767.98px) {
      width: 100%;
    }

    a {
      font-size: 18px;
      line-height: 24px;
      color: #000034;
      font-weight: 500;
      outline: none;
    }
  }
}
</style>
