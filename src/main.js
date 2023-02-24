// styles
import "./styles/main.scss";
//========================================================================================================================================================
import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI";
import plugins from "@/components/plugins/plugins.js";
import scrollAnimation from "@/components/directives/scrollAnimation";
import scrollAnimationPermanent from "@/components/directives/scrollAnimationPermanent";
import scrollValueAnimation from "@/components/directives/scrollvalueAnimation";
import router from "./router";
import store from "./store";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app
  .directive("scroll", scrollAnimation)
  .directive("scroll-permanent", scrollAnimationPermanent)
  .directive("value-scroll", scrollValueAnimation)
  .use(store)
  .use(router)
  .use(plugins)
  .mount("#app");
