<template>
    <router-link to="/ProductService" class="scada-back-button">← 返回</router-link>
    <div class="scada-wrapper">
        <section class="scada-container">

            <!-- Content Layout -->
            <div class="scada-layout">
                <!-- Info Block -->
                <div class="infomation">
                    <!-- 介紹區塊 -->
                    <div class="intro-block">
                        <h2>SCADA 智慧控制系統</h2>
                        <p>即時掌握設備、告警與能源資訊，一站式工業視覺化平台。</p>
                    </div>
                    <!-- 模組選單 -->
                    <div class="fuctions">
                        <h3>功能選單</h3>
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
                    <!-- 概覽卡片 -->
                    <div class="info-section" v-if="activeData?.cards">
                        <div class="scada-card" v-for="(card, index) in activeData.cards" :key="index"
                            :data-aos="'fade-up'" :data-aos-delay="index * 200">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.content }}</p>
                        </div>
                    </div>



                    <!-- 桌機版功能支援 -->
                    <div class="support-features desktop-only" v-if="!isMobile">
                        <h3>功能支援</h3>
                        <div class="support-grid">
                            <div v-for="item in sharedSupports" :key="item.title" class="support-icon">
                                <img :src="item.icon" />
                                <p>{{ item.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Preview Block -->
                <div class="scada-preview">
                    <div class="scada-mock">
                        <img src="../../assets/pc.png" class="pc-frame" alt="SCADA Frame" />
                        <div class="screen-wrapper">
                            <img :src="activeData?.image" class="screen-content" :alt="activeData?.title"
                                @click="openZoom" />
                        </div>

                    </div>

                    <!-- 手機版功能支援 -->
                    <div class="support-features mobile-only" v-if="isMobile">
                        <h3>功能支援</h3>
                        <div class="support-grid">
                            <div v-for="item in sharedSupports" :key="item.title" class="support-icon">
                                <img :src="item.icon" />
                                <p>{{ item.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Zoom -->
        <transition name="zoom-fade">
            <dialog v-if="showZoom" class="zoom-dialog" open @click.self="closeZoom">
                <button v-if="showZoom" class="close-button" @click="closeZoom">✕</button>
                <pinch-zoom>
                    <img :src="activeData?.image_hd || activeData?.image" :alt="activeData?.title"
                        class="zoomed-image" />
                </pinch-zoom>
            </dialog>
        </transition>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// 響應式裝置判斷
const isMobile = ref(window.innerWidth <= 768)
window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768
})

// 模組資料載入
const scadaModules = ref([])
const activeKey = ref('')
const activeData = computed(() =>
    scadaModules.value.find((mod) => mod.key === activeKey.value)
)

// Zoom
const showZoom = ref(false)
const openZoom = () => {
    if (window.innerWidth <= 768) showZoom.value = true
}
const closeZoom = () => {
    showZoom.value = false
}

const getScadaData = async () => {
    try {
        const scadaData = await axios.get('/data/scadaData.json')
        scadaModules.value = scadaData.data
        activeKey.value = scadaModules.value[0]?.key || ''
        console.log('載入成功:', scadaModules.value)
    } catch (err) {
        console.error('載入 JSON 失敗:', err)
    }
}

onMounted(() => {
    getScadaData()
    window.scrollTo(0, 0)
})

// 功能支援項目
const sharedSupports = [
    { title: "即時資訊", icon: "/assets/scada/realtime.svg" },
    { title: "遠端設定", icon: "/assets/scada/remote.svg" },
    { title: "事件紀錄", icon: "/assets/scada/log.svg" },
    { title: "圖表下載", icon: "/assets/scada/chart.svg" },
    { title: "報表排程", icon: "/assets/scada/schedule.svg" },
    { title: "智能控溫", icon: "/assets/scada/temp.svg" },
    { title: "智能除濕", icon: "/assets/scada/dehumid.svg" },
    { title: "抑電管理", icon: "/assets/scada/powermeter.svg" },
    { title: "需量管理", icon: "/assets/scada/demand.svg" },
    { title: "告警系統", icon: "/assets/scada/warn.svg" },
    { title: "電力系統", icon: "/assets/scada/power.svg" }
]
</script>


<style scoped>
@import url(../../css/product/ScadaSysteam.css);

button.active {
    background-color: var(--md-sys-color-primary-container);
    color: var(--md-sys-color-on-primary-container);
}
</style>
