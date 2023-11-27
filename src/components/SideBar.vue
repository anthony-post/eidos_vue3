<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
      <div class="menu">
        <div>
          <header class="nav-header">
              <img alt="logo" class="logo" src="@/assets/logo.svg" width="46" height="46" />
              <span class="logo-title">Сим Центр</span>
            </header>
            <nav class="nav">
              <RouterLink class="nav-item" to="/">Расписание</RouterLink>
              <RouterLink class="nav-item" to="/session">Учебные сессии</RouterLink>
              <RouterLink class="nav-item" to="/">Список комнат</RouterLink>
              <RouterLink class="nav-item" to="/">Пользователи</RouterLink>
              <RouterLink class="nav-item" to="/">Учебные группы</RouterLink>
              <RouterLink class="nav-item" to="/">Список устройств</RouterLink>
              <RouterLink class="nav-item" to="/">Настройки системы</RouterLink>
              <RouterLink class="nav-item" to="/">Архив</RouterLink>
            </nav>
        </div>
        <footer class="nav-footer">
          <div class="nav-footer__account">
            <div class="nav-footer__account-data">
              <span class="nav-footer__account-name">Барнаби Мармадюк</span>
              <span class="nav-footer__account-description">Преподаватель</span>
            </div>
            <div class="nav-footer__account-img">
              <img alt="avatar" src="@/assets/img/avatar.jpg" width="48" height="48" />
            </div>
          </div>
          <div class="nav-footer__logout">Выйти</div>
          <div class="nav-footer__language">Русский</div>
          <div class="nav-footer__version">Версия 1.02</div>
        </footer>
      </div>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';
@import '@/assets/main.scss';

.menu {
  background: $color-background;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  .nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0 12px;

    &-header {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
      padding: 19px 0;

      .logo-title {
        color: $color-text;
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 28px;
      }
    }

    &-item {
      padding: 12px;
      color: $color-text;
      font-size: 15px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;

      &:hover {
        border-radius: 16px;
        background: $color-background-grey;
      }

      &_active {
        border-radius: 16px;
        background: $color-hover;
        color: $color-white;
      }
    }

    &-footer {
      margin: 0 12px;

      &__account {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 16px;
        background: $color-background;
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
        margin-bottom: 18px;

        &-data {
          span {
            display: block;
          }
        }
      }

      &__logout {
        border-radius: 16px;
        background: $color-background;
        padding: 12px;
        margin-bottom: 4px;
      }

      &__language {
        border-radius: 12px;
        border: 1px solid #E0E0E0;
        background: $color-background;
        padding: 12px;
        margin-bottom: 18px;
      }

      &__version {
        margin-bottom: 19px;
      }
    }
  }
}
</style>