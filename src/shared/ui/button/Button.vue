<template>
    <button :class="btnClass">
        <slot/>
    </button>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';

interface IProps {
    secondary?: boolean
}

export default defineComponent({
    name: 'Button',
    props: {
      secondary: {
        default: false,
      }
    },
    setup(props: IProps) {
        const btnClass = computed(() => ({
            button: true,
            secondary: props.secondary,
        }));

        return { btnClass};
    },
  });
  </script>
  
<style scoped lang="scss">
.button {
    border: none;
    background: #000000;
    color: #D7D7D7;
    border-radius: 8px;
    font-size: 12px;
    line-height: 14px;
    padding: 8px 16px;
    transition: 0.2s;
    &:hover {
        opacity: 0.8;
    }
    &.secondary {
        background: none;
        color: #000000;
    }
}
</style>
  