<template id="ResourceSection">
    <transition name="fade-in">
        <section class="main">
            <div class="mainContent">
                <section class="firstContent" data-aos="fade-up">
                    <div class="about">
                        <h1>資源中心</h1>
                        <h2>
                            提供完整的技術資源與學習材料，
                            幫助您更深入了解我們的產品與解決方案。
                        </h2>
                    </div>

                    <section class="resources">
                        <div class="grid">
                            <div class="resourcesCard" v-for="(card, index) in resources" :key="index">
                                <div class="header">
                                    <div class="img-box">
                                        <img :src="card.icon" class="icon" alt="icon" />
                                        <div class="title-box">
                                            <h3>{{ card.title }}</h3>
                                            <p>{{ card.subtitle }}</p>
                                        </div>
                                    </div>

                                </div>

                                <div class="list">
                                    <div class="list-item" v-for="(item, i) in card.items" :key="i">
                                        <div class="dot"></div>
                                        <span>{{ item }}</span>
                                    </div>
                                </div>
                                <button class="cta-button">深入了解
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const resources = ref([])

const getResources = async () => {
    try {
        const response = await axios.get('./data/resources.json')  // ← 確保 public/data 資料夾存在
        resources.value = response.data
        console.log('資源載入成功:', resources.value)
    } catch (error) {
        console.error('載入 JSON 失敗:', error)
    }
}

onMounted(() => {
    getResources()
})
</script>

<style scoped>
@import url(../css/resources.css);
</style>