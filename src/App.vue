<template>
  <transition name="fade-in">
    <!-- 只有不是 /loading 時才顯示 Navbar 和 Footer -->
    <AppNavbar v-if="!hideLayout" />
  </transition>
  <router-view></router-view>
  <MuulinFooter v-if="!hideLayout" />
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import AppNavbar from "./components/AppNavbar.vue";
import MuulinFooter from "./components/MuulinFooter.vue";


export default {
  name: "App",
  components: { AppNavbar, MuulinFooter },
  setup() {
    const navbarKey = ref(Date.now());
    const route = useRoute();

    const hiddenLayoutRoutes = ["/", "/SysteamPage", "/ScadaSysteam", "/TVSysteam"];
    const hideLayout = computed(() => hiddenLayoutRoutes.includes(route.path));

    onMounted(() => {
      navbarKey.value = Date.now(); // 強制更新 key
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.body.classList.add('light')
    });

    return {
      navbarKey,
      hideLayout,
    };
  },
};
</script>

<style scoped>
@import url(./css/m3color.css);

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.4s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-enter-from {
  opacity: 0;
  transform: translateY(24px);
}

.fade-in-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
