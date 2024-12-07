<template>
  <div class="city-dropdown">
    <input
      type="text"
      v-model="searchQuery"
      @focus="onFocus"
      @input="filterCities"
      :placeholder="selectedCity ? selectedCity.name : 'Выберите город...'"
    />
    
    <ul v-if="isDropdownOpen" class="dropdown-list">
      <li
        v-for="city in filteredCities"
        :key="city.id"
        @click="selectCity(city)"
        :class="{'selected': selectedCity && selectedCity.id === city.id}"
        class="dropdown-item"
      >
        {{ city.name }}
      </li>
    </ul>

    <div v-if="selectedCity" class="city-info">
      <h3>{{ selectedCity.name }}</h3>
      <p>{{ selectedCity.description }}</p>
      <img v-for="image in selectedCity.images" :src="image" :alt="selectedCity.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ICity } from '@/shared/types/city';


export default defineComponent({

  name: 'CityDropdown',
  props: {
    cities: {
      type: Array as () => ICity[],
      required: true,
    },
  },
  emits: ['selectCity'],
  setup(props, { emit }) {
    const searchQuery = ref<string>('');
    const isDropdownOpen = ref<boolean>(false);
    const selectedCity = ref<ICity | null>(null); 
    const isFiltered = ref<boolean>(false); 

    const filteredCities = computed(() => {
      if (isFiltered.value) {
        return props.cities.filter((city) =>
          city.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      }
      return props.cities;
    });

    const filterCities = () => {
      isFiltered.value = true; 
    };

    const onFocus = () => {
      if (!selectedCity.value) {
        isFiltered.value = true; 
      } else {
        isFiltered.value = false;
      }
      isDropdownOpen.value = true; 
    };

    // Обработка выбора города
    const selectCity = (city: ICity) => {
      selectedCity.value = city;
      searchQuery.value = city.name; 
      isDropdownOpen.value = false; 
      emit('selectCity', city); 
    };

    return {
      searchQuery,
      isDropdownOpen,
      filteredCities,
      selectedCity,
      selectCity,
      filterCities,
      onFocus,
    };
  },
});
</script>

<style scoped lang="scss">
.city-dropdown {
  margin-top: 60px;
  width: 100%;
  position: relative;
  // max-width: 300px;

  input {
    margin-bottom: 112px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .dropdown-list {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;

    .dropdown-item {
      padding: 10px;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #f0f0f0;
      }

      &.selected {
        background: #e0e0e0;
      }
    }
  }

  .city-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 660px;
    margin: 0 auto;
    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 10px;
    }
  }
}
</style>
