import VueElegantButton from "./components/Button/VueElegentButton.vue";

function install(Vue) {
  Vue.component("vue-elegant-button", VueElegantButton);
}

VueElegantButton.install = install;

export default VueElegantButton;
