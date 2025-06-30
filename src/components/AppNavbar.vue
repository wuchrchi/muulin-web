<template>
  <nav :class="['top-navbar', { 'navbar-animate': animateReady }]">
    <div class="navbar-container">
      <!-- Logo 點回首頁 -->
      <router-link to="/HomePage" class="logo-box">
        <img src="./assets/logo.png" alt="logo" class="company-logo" />
        <div class="text-box">
          <div class="cn-name">沐霖實業有限公司</div>
          <div class="en-name">MuuLin Industrial Corporation Limited</div>
        </div>
      </router-link>

      <!-- 導覽連結 -->
      <div class="nav-links">
        <router-link to="/HomePage" class="nav-text-button" :class="{ 'nav-active': route.path === '/HomePage' }">
          關於我們
          <div class="nav-underline"></div>
        </router-link>

        <router-link to="/ProductService" class="nav-text-button"
          :class="{ 'nav-active': route.path === '/ProductService' }">
          產品服務
          <div class="nav-underline"></div>
        </router-link>

        <router-link to="/ResourceSection" class="nav-text-button"
          :class="{ 'nav-active': route.path === '/ResourceSection' }">
          資源中心
          <div class="nav-underline"></div>
        </router-link>

        <router-link to="/DownloadSection" class="nav-text-button"
          :class="{ 'nav-active': route.path === '/DownloadSection' }">
          下載專區
          <div class="nav-underline"></div>
        </router-link>

        <!-- <router-link to="/works" class="nav-text-button" :class="{ 'nav-active': route.path === '/works' }">
          產品實績
          <div class="nav-underline"></div>
        </router-link> -->
      </div>

      <!-- 系統登入 -->
      <div class="nav-links">
        <!-- <router-link to="/SysteamShowPage" class="block system-login-button"
          :class="{ 'nav-active': route.path === '/SysteamShowPage' }">
          <span class="button-content">系統登入</span>
          <div class="button-glow"></div>
        </router-link> -->

        <a class="block system-login-button"
          href="https://www.youtube.com/watch?v=DJfg39WkMvE&list=RDDJfg39WkMvE&start_radio=1">
          <span class="button-content">系統介紹</span>
          <div class="button-glow"></div>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const animateReady = ref(false);
const route = useRoute();

onMounted(() => {
  const hasAnimated = sessionStorage.getItem("hasAnimated");

  // ✅ 如果還沒動畫過才延遲顯示
  if (!hasAnimated) {
    setTimeout(() => {
      animateReady.value = true;
      sessionStorage.setItem("hasAnimated", "true");
    }, 500); // 動畫時間，建議與 CSS 動畫對應
  } else {
    // ✅ 第二次之後直接顯示
    animateReady.value = true;
  }
});
</script>

<style scoped>
@import url(../css/nav.css);
</style>
