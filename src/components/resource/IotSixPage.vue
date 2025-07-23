<template>
    <router-link to="/ResourceSection" class="scada-back-button">← 返回</router-link>

    <section class="item-container">
        <!-- Layout -->
        <div class="item-layout">
            <!-- Left: Info Block -->
            <div class="item-infomation">
                <div class="intro-block">
                    <h2 class="">IoT 627 雲 端 數 位 控 制 器 組</h2>
                    <p class="">IoT 627是一台具無線傳輸與國際標準通訊協議的,雲端數位控制器，應用於監視及控制冷凍相關系統。</p>
                </div>
                <div class="item-mock">
                    <div class="mock-3d-wrap">
                        <img src="../assets/item/627removepic.png" class="mock-base" alt="主體" />
                        <img src="../assets/item/627move.png" class="mock-overlay" alt="面板貼紙" />
                    </div>
                </div>

            </div>

            <!-- Right: Preview Block -->
            <div class="item-preview">


                <!-- 概覽卡片 -->
                <!-- <div class="item-mock-sec">
                        <div class="mock-3d-wrap">
                            <img src="../../assets/item/627control.png" class="mock-sec" alt="主體" />
                        </div>
                    </div> -->
                <div class="item-fuctions">
                    <div class="itemfuctionGrid">
                        <table class="spec-table">
                            <thead>
                                <tr>
                                    <th colspan="2" class="table-heading title-large">規格說明</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="title body-medium">傳輸介面：</td>
                                    <td class="value body-medium"><strong>WAN Ports x 1 / 2.4G WiFi / LAN Ports(TCP)
                                            x 1</strong></td>
                                </tr>
                                <tr>
                                    <td class="title body-medium">處理器：</td>
                                    <td class="value body-medium"><strong>32位元高速運算微處理器</strong></td>
                                </tr>
                                <tr>
                                    <td class="title body-medium">供應電源：</td>
                                    <td class="value body-medium"><strong>24VDC</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- 規格說明 -->
                <div class="support-features">
                    <h3 class="title-medium">功能支援</h3>
                    <div class="tvsupport-grid">
                        <div v-for="item in sharedSupports" :key="item.title" class="support-icon">
                            <img :src="item.icon" alt="icon" />
                            <p class="label-medium">{{ item.title }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="https://drive.google.com/drive/folders/1iKikbvonwfk4k-Oz5LK_37Me3SXT0bcM" target="_blank"
                        rel="noopener noreferrer" class="download-btn">
                        下載說明書
                    </a>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const scadaModules = ref([])
const activeKey = ref('')

const getScadaData = async () => {
    try {
        const scadaData = await axios.get('../../../data/TVsysteam.json')
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

const sharedSupports = [
    { title: '24小時數據查看', icon: '../assets/scada/realtime.svg' },
    { title: '警報聲音提示', icon: '../assets/scada/remote.svg' },
    { title: '多頁面輪播', icon: '../assets/scada/log.svg' },
    { title: '客製化LOGO', icon: '../assets/scada/chart.svg' },
    { title: '雲端自動更新', icon: '../assets/scada/schedule.svg' },
    { title: '本地端及時數據', icon: '../assets/scada/temp.svg' }
]
</script>

<style scoped>
@import url(../../css/resource/IotSixPage.css);
</style>
