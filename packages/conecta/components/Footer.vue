<script setup lang="ts">
import FacebookLogoSVG from '@/assets/svgs/facebook-logo.svg';
import InstagramLogoSVG from '@/assets/svgs/instagram-logo.svg';
import LinkedInLogoSVG from '@/assets/svgs/linkedin-logo.svg';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style.logo">
      <img src="@/src/images/logo.png" />
    </div>

    <div :class="$style.socialMedia">
      <a
        href="https://www.linkedin.com/company/conecta-treine"
        target="_blank"
      >
        <LinkedInLogoSVG />
      </a>

      <a
        href="https://facebook.com/conectatreine"
        target="_blank"
      >
        <FacebookLogoSVG />
      </a>

      <a
        href="https://www.instagram.com/conectatreine"
        target="_blank"
      >
        <InstagramLogoSVG />
      </a>
    </div>

    <div :class="$style.bottomLine">
      <span
        >Direitos Reservados ©️ | Conecta – CNPJ: 43.474.245/0001-63 | Rua
        Caramuru, 515, Diadema - SP, 09911-510 |
        <a href="tel:1159900462">(11) 5990-0462</a></span
      >
    </div>
  </footer>
</template>

<style module>
.footer {
  @apply flex flex-col items-center;
  @apply p-8;
}

.logo {
  height: 60px;

  & img {
    height: 100%;
  }
}

.socialMedia {
  @apply flex;
  @apply gap-4 py-8;

  & svg {
    fill: #777;
    transition: fill 100ms ease-in-out;
    width: 40px;

    &:hover {
      fill: v-bind('themeColors.secondary');
    }
  }
}

.bottomLine {
  color: v-bind('themeColors.secondary');
  text-align: center;
}
</style>
