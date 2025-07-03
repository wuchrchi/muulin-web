<template id="SysteamShowPage">
    <transition name="fade-in">
        <div>
            <button @click="goBack" class="backButton">← 返回</button>
            <div class="fadeWrapper">
                <section class="animate" :key="aosKey">
                    <div class="animateContent">
                        <!-- tags 區：保留淡入 -->
                        <div class="tags ">
                            <div class="tag tag1" data-aos="zoom-in" data-aos-delay="300">#警報提醒</div>
                            <div class="tag tag2" data-aos="zoom-in" data-aos-delay="600">#即時監控</div>
                            <div class="tag tag3" v-if="!isMobile.value" data-aos="zoom-in" data-aos-delay="900">
                                #24小時無死角</div>
                            <div class="tag tag4" v-if="!isMobile.value" data-aos="zoom-in" data-aos-delay="1200">#安全守護
                            </div>
                        </div>

                        <!-- 中間內容區 -->
                        <section class="macWithPhone">
                            <section class="leftContent">
                                <div class="solganText">
                                    <h2 class="tagSub"
                                        :class="[{ 'typewriter-1': showSub1 && !done1 }, { done: done1 }]">
                                        <span v-if="showSub1">能源智控 一目了然</span>
                                    </h2>
                                    <h2 class="tagSub"
                                        :class="[{ 'typewriter-2': showSub2 && !done2 }, { done: done2 }]">
                                        <span v-if="showSub2">即時監測 安全無虞</span>
                                    </h2>
                                    <h2 class="tagSub"
                                        :class="[{ 'typewriter-3': showSub3 && !done3 }, { done: done3 }]">
                                        <span v-if="showSub3">智慧節能 永續守護</span>
                                    </h2>
                                </div>

                                <div class="actionButtons">
                                    <div class="buttonBox" v-if="!isMobile.value" data-aos="zoom-in"
                                        data-aos-delay="1200">
                                        <div class="actionBtn">
                                            <i class="material-symbols-outlined">phone_iphone</i>
                                            <span>手機畫面</span>
                                            <i class="material-symbols-outlined">chevron_right</i>
                                        </div>
                                    </div>
                                    <div class="phone" v-if="!isMobile.value" data-aos="fade-up" data-aos-delay="1400">
                                        <img src="./assets/phone.png" alt="phone" />
                                    </div>
                                </div>
                            </section>

                            <section class="rightContent" v-show="!isMobile || rightReady"
                                :class="{ 'fade-in-ready': isMobile && rightReady }">
                                <div class="actionButtons">
                                    <div class="buttonBox" v-if="!isMobile.value" data-aos="zoom-in"
                                        data-aos-delay="1200">
                                        <div class="actionBtn">
                                            <i class="material-symbols-outlined">computer</i>
                                            <span>電腦畫面</span>
                                            <i class="material-symbols-outlined">chevron_right</i>
                                        </div>
                                    </div>
                                    <div class="monitor" v-if="!isMobile.value" data-aos="fade-up"
                                        data-aos-delay="1400">
                                        <img src="./assets/mac.png" alt="mac" />
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
import { ref, onMounted, nextTick, watch } from "vue";
import { useRoute } from "vue-router";
const isMobile = ref(false);


const route = useRoute();
const aosKey = ref(Date.now());

const goBack = () => {
    window.history.back();
};

const showSub1 = ref(false);
const showSub2 = ref(false);
const showSub3 = ref(false);
const done1 = ref(false);
const done2 = ref(false);
const done3 = ref(false);

const triggerTyping = () => {
    showSub1.value = false;
    showSub2.value = false;
    showSub3.value = false;
    done1.value = false;
    done2.value = false;
    done3.value = false;

    setTimeout(() => { showSub1.value = true }, 500)
    setTimeout(() => { done1.value = true }, 2000)

    setTimeout(() => { showSub2.value = true }, 1000)
    setTimeout(() => { done2.value = true }, 2500)

    setTimeout(() => { showSub3.value = true }, 1500)
    setTimeout(() => { done3.value = true }, 3000)
};
const rightReady = ref(false);
onMounted(() => {

    isMobile.value = window.innerWidth <= 768;
    nextTick(() => {
        if (!isMobile.value) {
            AOS.init({ duration: 1000, once: true });
            AOS.refreshHard();
        }
        if (isMobile.value) {
            setTimeout(() => {
                rightReady.value = true;
            }, 500); // 視情況調整
        }
        triggerTyping();
    });
});

watch(
    () => route.fullPath,
    () => {
        aosKey.value = Date.now();
        nextTick(() => {
            if (!isMobile.value) AOS.refreshHard();
            triggerTyping();
        });
    }
);
</script>

<style scoped>
@import url(../css/SysteamPage.css);
</style>
