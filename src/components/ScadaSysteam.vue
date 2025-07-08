<template>
    <router-link to="/ProductService" class="scada-back-button">
        ← 返回
    </router-link>

    <section class="scada-container">
        <!-- Tags -->
        <div class="scada-tags">
            <div class="scada-tag tag1" data-aos="fade-down">#SCADA</div>
            <div class="scada-tag tag2" data-aos="fade-up" data-aos-delay="300">#穩定可靠</div>
            <div class="scada-tag tag3" data-aos="fade-left" data-aos-delay="600">#工業控制</div>
        </div>

        <!-- Headline Animation -->

        <!-- Content Layout -->
        <div class="scada-layout">
            <!-- Info Blocks -->
            <div>
                <div class="scada-headlines">
                    <h2 class="scada-line" :class="[{ 'typewriter-1': showSub1 && !done1 }, { done: done1 }]">
                        <span v-if="showSub1">智慧控管 一目了然</span>
                    </h2>
                    <h2 class="scada-line" :class="[{ 'typewriter-2': showSub2 && !done2 }, { done: done2 }]">
                        <span v-if="showSub2">穩定即時 工業等級</span>
                    </h2>
                    <h2 class="scada-line" :class="[{ 'typewriter-3': showSub3 && !done3 }, { done: done3 }]">
                        <span v-if="showSub3">全面佈置 安全守護</span>
                    </h2>
                </div>
                <div class="scada-info">

                    <div class="scada-card" data-aos="fade-up">
                        <h3>多平台支援</h3>
                        <p>支援 Windows 與瀏覽器平台，提供彈性架構與跨設備支援。</p>
                    </div>
                    <div class="scada-card" data-aos="fade-up" data-aos-delay="200">
                        <h3>即時數據監控</h3>
                        <p>即時呈現各項監控數據，圖控化介面幫助快速掌握現場狀況。</p>
                    </div>
                    <div class="scada-card" data-aos="fade-up" data-aos-delay="400">
                        <h3>異常警報設定</h3>
                        <p>提供彈性條件設定與多種提示模式，協助快速發現問題。</p>
                    </div>
                </div>
            </div>


            <!-- Preview Block -->
            <div class="scada-preview" data-aos="fade-up" data-aos-delay="600">
                <div class="scada-preview-header">
                    <i class="material-symbols-outlined">computer</i>
                    <span>電腦畫面</span>
                    <i class="material-symbols-outlined">chevron_right</i>
                </div>
                <div class="scada-preview-image">
                    <img src="./assets/scadamac.png" alt="SCADA畫面預覽" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showSub1 = ref(false)
const showSub2 = ref(false)
const showSub3 = ref(false)
const done1 = ref(false)
const done2 = ref(false)
const done3 = ref(false)

onMounted(() => {
    setTimeout(() => (showSub1.value = true), 200)
    setTimeout(() => {
        done1.value = true
        showSub2.value = true
    }, 2000)
    setTimeout(() => {
        done2.value = true
        showSub3.value = true
    }, 4000)
    setTimeout(() => {
        done3.value = true
    }, 6000)
})
</script>

<style scoped>
@import url(../css/m3color.css);
@import url(../css/ScadaSysteam.css);
</style>
