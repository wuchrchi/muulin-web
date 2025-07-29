<template>
  <nav :class="['top-navbar', { 'navbar-animate': animateReady }]" role="navigation">
    <div class="navbar-container">
      <!-- Logo 點回首頁 -->
      <router-link to="/HomePage" class="logo-box">
        <img src="./assets/logo.png" alt="logo" class="company-logo" />
        <div class="text-box">
          <div class="cn-name">沐霖實業有限公司</div>
          <div class="en-name">MuuLin Industrial Corporation Limited</div>
        </div>
      </router-link>

      <!-- 桌面版導覽連結 -->
      <div class="nav-links" v-if="!isMobile">
        <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-text-button"
          :class="{ 'nav-active': route.path === item.path }">
          {{ item.label }}
          <div class="nav-underline"></div>
        </router-link>
      </div>
      <div class="nav-links" v-if="!isMobile">
        <router-link to='/product/SysteamPage' class="system-login-button"
          :class="{ 'nav-active': route.path === '/product/SysteamPage' }">
          <span class="button-content">系統介紹</span>
          <div class="button-glow"></div>
        </router-link>
      </div>

      <!-- 漢堡按鈕 -->
      <button class="hamburger" @click="toggleSidebar" v-show="isMobile" :class="{ active: sidebarOpen }"
        aria-label="開啟選單" :aria-expanded="sidebarOpen.toString()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- 側邊選單（手機） -->
      <transition name="slide">
        <div class="mobile-sidebar" v-if="sidebarOpen">
          <button class="close-btn" @click="toggleSidebar">×</button>
          <div class="mobile-links">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-text-button"
              :class="{ 'nav-active': route.path === item.path }" @click="sidebarOpen = false">
              {{ item.label }}
              <div class="nav-underline"></div>
            </router-link>
          </div>
          <router-link to='/product/SysteamPage' class=" system-login-button"
            :class="{ 'nav-active': route.path === '/product/SysteamPage' }">
            <span class="button-content">系統介紹</span>
            <div class="button-glow"></div>
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from "vue-router";

const animateReady = ref(false);
const route = useRoute();
const sidebarOpen = ref(false);
const isMobile = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const navItems = [
  { path: "/HomePage", label: "關於我們" },
  { path: "/ProductService", label: "產品服務" },
  { path: "/ResourceSection", label: "資源中心" },
  { path: "/DownloadSection", label: "下載專區" },
];

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  const hasAnimated = sessionStorage.getItem("hasAnimated");

  if (!hasAnimated) {
    setTimeout(() => {
      animateReady.value = true;
      sessionStorage.setItem("hasAnimated", "true");
    }, 500);
  } else {
    animateReady.value = true;
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
@import url(../css/nav.css);
</style>
