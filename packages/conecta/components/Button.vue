<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  colorBackground?: string;
  colorText?: string;
  outline?: boolean;
}

const {
  colorBackground = '#338033',
  colorText = '#cccccc',
  outline = false,
} = defineProps<Props>();

const isOutline = computed<boolean>(() => {
  return !!outline;
});
</script>

<template>
  <div :class="$style.container">
    <button
      :class="[$style.button, { [$style.isOutline]: isOutline }]"
      type="button"
    >
      <span>Hover Me</span>
    </button>
  </div>
</template>

<style module>
.container {
  @apply flex;
}

.button {
  background: v-bind(colorBackground);
  position: relative;
  color: v-bind(colorText);
  min-width: 10rem;
  min-height: 4rem;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  transition: 600ms;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(30px);
    transform: translateX(-130px) skewX(-15deg);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(30px);
    transform: translate(-100px) scaleX(-15deg);
  }

  &:hover {
    background: v-bind(colorBackground);
    cursor: pointer;

    &::before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 700ms;
    }

    &::after {
      transform: translateX(300px) skewX(-15deg);
      opacity: 1;
      transition: 700ms;
    }
  }

  &.isOutline {
    border: 1px solid v-bind(colorBackground);
    background: none;
  }
}
</style>
