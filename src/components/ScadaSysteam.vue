<!-- ScadaSysteam.vue -->
<template>
    <router-link to="/ProductService" class="scada-back-button">
        ← 返回
    </router-link>
    <div class="fadeWrapper">
        <section class="scada-container">
            <!-- Tags -->
            <div class="scada-tags">
                <div class="scada-tag tag1">#SCADA</div>
                <div class="scada-tag tag2">#穩定可靠</div>
                <div class="scada-tag tag3">#工業控制</div>
            </div>

            <!-- Content Layout -->
            <div class="scada-layout">
                <!-- Info Block -->
                <div class="info">
                    <!-- 介紹區塊 -->
                    <div class="intro-block ">
                        <h2>SCADA 智慧控制系統</h2>
                        <p>即時掌握設備、告警與能源資訊，一站式工業視覺化平台。</p>
                    </div>

                    <!-- 概覽卡片 -->
                    <div class="info-section" v-if="activeData?.cards">
                        <div class="scada-card" v-for="(card, index) in activeData.cards" :key="index"
                            :data-aos="'fade-up'" :data-aos-delay="index * 200">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.content }}</p>
                        </div>
                    </div>

                    <!-- 模組選單 -->
                    <div class="">
                        <div class="fuctionTitle">功能選單</div>
                        <div class="fuctionGrid">
                            <button v-for="module in scadaModules" :key="module.key" @click="activeKey = module.key"
                                :class="['fuctionCard', { active: module.key === activeKey }]">
                                <div class="fuctionLogo">
                                    <img :src="module.logo" :alt="module.title" />
                                </div>
                                <div class="fuctionText">{{ module.title }}</div>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Preview Block -->
                <div class="scada-preview">
                    <div class="scada-mock">
                        <img src="./assets/pc.png" class="pc-frame" alt="SCADA Frame" />
                        <div class="screen-wrapper">
                            <img :src="activeData?.image" class="screen-content" :alt="activeData?.title" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const scadaModules = ref([])
const activeKey = ref('')
const activeData = computed(() =>
    scadaModules.value.find((mod) => mod.key === activeKey.value)
)

const getScadaData = async () => {
    try {
        const scadaData = await axios.get('./data/scadaData.json') // public 資料夾要用絕對路徑
        scadaModules.value = scadaData.data
        activeKey.value = scadaModules.value[0]?.key || ''
        console.log('載入成功:', scadaModules.value)
    } catch (err) {
        console.error('載入 JSON 失敗:', err)
    }
}

onMounted(() => {
    getScadaData();
    window.scrollTo(0, 0);
})
</script>

<style scoped>
@import url(../css/m3color.css);
@import url(../css/ScadaSysteam.css);

button.active {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
}
</style>
