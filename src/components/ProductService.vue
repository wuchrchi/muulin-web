<template id="service">
  <transition name="fade-in">
    <section class="main">
      <div class="mainContent">
        <section class="firstContent" data-aos="fade-up">
          <div class="about">
            <h1 class="">產品服務</h1>
            <h2>
              沐霖科技提供完整的智慧能源管理解決方案，
              從設備監控到數據分析，全方位滿足您的需求。
            </h2>
          </div>
          <div ref="scrollArea" class="serviceCard" @scroll="handleScroll">
            <!-- 三張卡片結構保持原樣 -->
            <div class="serviceCards">
              <div class="card">
                <div class="pic">
                  <img src="./assets/operator.png" alt="operator" class="operatorimg" />
                </div>
              </div>
              <div class="cardIntroduce">
                <div class="title">
                  <h3>IoT Toolkit</h3>
                  <h4>IoT設備管理工具包，提供完整的物聯網設備監控與管理功能，支援多種通訊協定，簡化設備部署與維護作業。</h4>
                </div>
                <div class="introduce">
                  <h5>主要功能：</h5>
                  <div class="grid">
                    <span>多協定支援</span>
                    <span>設備自動發現</span>
                    <span>遠端管理</span>
                    <span>數據收集與分析</span>
                  </div>
                </div>
              </div>
              <router-link to="/SysteamPage" route.path='/SysteamShowPage' class="serviceButton">
                深入了解
              </router-link>
            </div>

            <div class="serviceCards mobile">
              <div class="pic">
                <img src="./assets/scada.png" alt="operator" class="operatorimg" />
              </div>
              <div class="cardIntroduce">
                <div class="title">
                  <h3>中央監控系統SCADA</h3>
                  <h4>企業級監控與數據採集系統，提供全方位的設備監控、數據分析與自動化控制功能，確保系統穩定運行</h4>
                </div>
                <div class="introduce">
                  <h5>主要功能：</h5>
                  <div class="grid">
                    <span>即時監控</span>
                    <span>數據採集</span>
                    <span>自動化控制</span>
                    <span>警報管理</span>
                  </div>
                </div>
              </div>
              <button class="serviceButton">
                深入了解
              </button>
            </div>

            <div class="serviceCards">
              <div class="card">
                <div class="pic">
                  <img src="./assets/tv.avif" alt="operator" class="operatorimg" />
                </div>
              </div>
              <div class="cardIntroduce">
                <div class="title">
                  <h3>數位雲端電視牆 (MLTV)</h3>
                  <h4>多媒體顯示解決方案，支援多屏幕同步顯示，提供靈活的內容管理與播放控制，適用於監控中心與展示空間。</h4>
                </div>
                <div class="introduce">
                  <h5>主要功能：</h5>
                  <div class="grid">
                    <span>多屏幕同步</span>
                    <span>雲端管理</span>
                    <span>遠端監視</span>
                    <span>及時警報</span>
                  </div>
                </div>
              </div>
              <button class="serviceButton">
                深入了解
              </button>
            </div>

            <slot></slot>
          </div>
          <!-- Dot Pagination：僅在手機版顯示 -->
          <div class="pagination mobile-only">
            <div v-for="n in cardCount" :key="n" :class="['actionDot', { active: currentIndex === n - 1 }]" />
          </div>
        </section>

        <section class="secContent " data-aos="fade-up">
          <div class="serviceslogan">
            <h2 class="">專業服務支援</h2>
          </div>
          <div class="slogan">
            <div class="sloganItem" v-for="(s, idx) in slogans" :key="idx">
              <div class="sloganLogo">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" v-html="s.icon" />
              </div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);
const cardCount = ref(0);
const cardWidth = ref(0);
const scrollArea = ref(null);

const handleScroll = (event) => {
  const el = event.target;
  const card = el.querySelector('.serviceCards');
  if (!card) return;
  const cardWidth = card.offsetWidth + 16; // 卡片寬度 + gap（根據你 CSS gap）
  const index = Math.round(el.scrollLeft / cardWidth);
  currentIndex.value = Math.min(index, cardCount.value - 1); // 防止超出範圍
};

onMounted(() => {
  window.scrollTo(0, 0);
  const el = scrollArea.value = document.querySelector('.serviceCard');
  const firstCard = el?.querySelector('.serviceCards');
  cardCount.value = el?.querySelectorAll('.serviceCards').length || 3;
  cardWidth.value = firstCard?.offsetWidth || 1;
});

const slogans = [
  {
    title: '系統整合',
    description: '客製化系統整合服務',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`
  },
  {
    title: '技術支援',
    description: '專業技術支援',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>`
  },
  {
    title: '教育訓練',
    description: '完整的操作教育訓練',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>`
  },
  {
    title: '維護保固',
    description: '長期維護與保固服務',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
  },
];
</script>

<style scoped>
@import url(../css/ProductService.css);

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
