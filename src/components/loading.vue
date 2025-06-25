<template>
  <div class="loading-container">
    <transition name="fade-blur" @after-leave="goToHome">
      <div v-if="!canNavigate" class="loading-content">
        <!-- logo 飄出動畫 transition -->
        <transition name="logo-float" appear>
          <div class="logo-boxs">
            <img src="./assets/logo.png" alt="logo" class="loading-logo" />
            <div class="company-name">
              <p>沐霖實業有限公司</p>
            </div>
          </div>
        </transition>

        <!-- loading 脈動條 -->
        <div class="loading-lines-flex">
          <div v-for="(delay, index) in delays" :key="index" class="loading-line"
            :class="{ ready: ready, 'animate-dot-animation': ready }" :style="{ animationDelay: delay + 'ms' }" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
  data() {
    return {
      ready: false,
      canNavigate: false,
      delays: [0, 200, 400, 600, 800],
    };
  },
  mounted() {
    setTimeout(() => {
      this.ready = true;
    }, 50);

    setTimeout(() => {
      this.canNavigate = true;
    }, 5000);
  },
  methods: {
    goToHome() {
      this.$router.push("/HomePage");
    },
  },
};
</script>

<style scoped>
@import "../css/loading.css";
</style>
