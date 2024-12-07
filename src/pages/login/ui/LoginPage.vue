<template>
    <div class="login-page">
      <p class="title">Войти в панель</p>
      <form @submit.prevent="onLogin">
        <input v-model="username" type="text" placeholder="Логин" required />
        <input v-model="password" type="password" placeholder="Пароль" required />
        <!-- <button type="submit">Войти</button> -->

         <Button type="submit">Войти</Button>
      </form>
    </div>
  </template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@entities/user/model/userStore';
import Button from '@/shared/ui/button/Button.vue';
  export default defineComponent({
    components: {Button},
    name: 'LoginPage',
    setup() {
      const username = ref('');
      const password = ref('');
      const userStore = useUserStore();
      const router = useRouter();
  
      const onLogin = () => {
        userStore.login(username.value);
        router.push('/cities');
      };
  
      return { username, password, onLogin };
    },
  });
</script>
  
<style scoped lang="scss">
  .login-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 230px;
    margin: auto;
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
    }
    form {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      input {
        border: 1px solid #D7D7D7;
        background: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 12px;

        &::placeholder {
          color: #D7D7D7;
        }
      }

      button {
        margin-top: 24px;
      }
    }
  }
</style>
  