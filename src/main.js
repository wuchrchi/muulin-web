import { createApp } from "vue";
import App from "./App.vue";
import { loadFonts } from "./plugins/webfontloader";
import vuetify from "./plugins/vuetify";
// router
import { createRouter, createWebHistory } from "vue-router";
// material-desgin 套件
import "@material/web/all";
import "@material/web/field/filled-field";
//material icon
import "material-symbols/outlined.css";
import "material-symbols/rounded.css";
import "material-symbols/sharp.css";

import "bootstrap/scss/bootstrap-grid.scss";

// router連結
// import LoginPage from './components/login.vue';
import LoaidngPage from "./components/loading.vue";
import HomePage from "./components/HomePage.vue";
import ProductService from "./components/ProductService.vue";
import ResourceSection from "./components/ResourceSection.vue";
import DownloadSection  from "./components/DownloadSection.vue";
import SysteamShowPage  from "./components/SysteamShowPage.vue";
// 初始化
import "./css/reset.css";
import "./css/m3color.css";
import "./css/container.css";
import AOS from "aos";
import "aos/dist/aos.css";

// main.js
import './css/globals.css'; // 或 main.css

AOS.init({ once: false });
const routes = [
  { path: "/", component: LoaidngPage },
  { path: "/HomePage", component: HomePage },
  { path: "/ProductService", component: ProductService },
  { path: "/ResourceSection", component: ResourceSection },
  { path: "/DownloadSection", component: DownloadSection },
  { path: "/SysteamShowPage", component: SysteamShowPage },

];

const router = createRouter({
   history: createWebHistory("/muulin-web/"),
  routes,
});
// const router = createRouter({
//    history: createWebHistory("/"),
//   routes,
// });

loadFonts();

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
