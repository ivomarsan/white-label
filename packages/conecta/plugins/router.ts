import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  const { $router } = useNuxtApp();

  $router.options.scrollBehavior = (
    to: { hash: any },
    from: any,
    savedPosition: any,
  ) => {
    if (to.hash) {
      return {
        el: to.hash,
        top: 30,
        behavior: 'smooth',
      };
    }
  };
});
