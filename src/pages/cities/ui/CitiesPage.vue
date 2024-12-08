<template>
  <div class="cities">
    <header>
      <span>Привет, <strong>{{ userStore.username }}</strong></span>
      <Button :secondary="true" @click="logout">Выйти</Button>
    </header>
    <div class="content">
      <CityDropdown :cities="cities" />

    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useUserStore } from '@/entities/user/model/userStore';
import CityDropdown from '@/features/city-dropdown/ui/CityDropDown.vue';
import { ICity } from '@/shared/types/city';
import { useRouter } from 'vue-router';
import Button from '@/shared/ui/button/Button.vue';
import { fetchCities } from '../api/cities.api';

export default defineComponent({
  name: 'CitiesPage',
  components: { CityDropdown, Button },
  setup() {
    const userStore = useUserStore();
    const cities = ref<ICity[]>([]);
    const router = useRouter()
    
    if (!userStore.username) {
      router.push('/');
    }

    const logout = () => {
      userStore.logout();
      router.push('/');
    };

    onMounted(async()=>{
      cities.value = await fetchCities();
    });

    return { userStore, cities, logout };
  },
});
</script>

<style scoped lang="scss">
.cities {
  padding: 24px;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .content {
    width: 100%;
    height: 100%;
    
    .city-dropdown {
      width: 100%;
    }
  }
}
</style>
