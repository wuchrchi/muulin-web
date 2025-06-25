<template id="DownloadSection">

    <transition name="fade-in">
        <section class="main">
            <div class="mainContent">
                <section class="firstContent" data-aos="fade-up">
                    <div class="about">
                        <h1>下載專區</h1>
                        <h2>
                            專注於智慧能源管理技術的創新企業，
                            下載最新的軟體、文件、驅動程式與範例程式， 協助您快速部署與使用我們的產品。
                        </h2>
                    </div>
                    <div class="searchBar">
                        <input type="text" placeholder="搜尋檔案名稱或關鍵字..." v-model="keyword" />
                        <select v-model="selectedType">
                            <option value="">所有類型</option>
                            <option value="exe">exe</option>
                            <option value="pdf">pdf</option>
                        </select>
                        <button @click="search">搜尋</button>
                    </div>

                    <!-- 📦 分類區塊 -->
                    <div v-for="(section, idx) in filteredSections" :key="idx" class="downloadSection">
                        <div class="title">
                            <h2>{{ section.category }}</h2>
                        </div>
                        <div class="itemList">
                            <div class="item" v-for="(file, i) in section.files" :key="i">
                                <div class="file-icon">
                                    <svg class="downloadIcon" fill="none" viewBox="0 0 24 24">
                                        <path
                                            d="M5.25589 16C3.8899 15.0291 3 13.4422 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417M12 21V11M12 21L9 18M12 21L15 18"
                                            stroke="#fff" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div class="info">
                                    <div class="name">{{ file.name }}</div>
                                    <div class="type">類型: {{ file.type }}</div>
                                </div>
                                <a :href="file.url" class="download-btn" download>
                                    下載
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    </transition>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const keyword = ref('')
const selectedType = ref('')
const allSections = ref([])  // ← 存放所有原始資料

const getDownloadData = async () => {
    try {
        const res = await axios.get('./data/downloand.json')  // <-- 確保這個 JSON 存在
        allSections.value = res.data
        console.log('載入成功:', allSections.value)
    } catch (err) {
        console.error('載入 JSON 失敗:', err)
    }
}

onMounted(() => {
    getDownloadData()
})

const filteredSections = computed(() => {
    return allSections.value
        .map(section => ({
            category: section.category,
            files: section.files.filter(f =>
                f.name.toLowerCase().includes(keyword.value.toLowerCase()) &&
                (selectedType.value === '' || f.type.toLowerCase() === selectedType.value.toLowerCase())
            )
        }))
        .filter(section => section.files.length > 0)
})

const search = () => {
    // search 在這裡實際上只是觸發了重新 render，因為是 reactive 的
}
</script>

<style>
@import url(../css/Downlands.css);
</style>
