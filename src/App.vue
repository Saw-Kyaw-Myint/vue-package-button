<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <VueElegentButton />
    <InputField label="title"/>
    <RedButton />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VueElegentButton from "./components/Button/VueElegentButton.vue";
import RedButton from "./components/Button/RedButton.vue";
import InputField from "./components/Form/InputField.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    VueElegentButton,
    RedButton,
    InputField,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
