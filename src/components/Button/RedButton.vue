<template>
  <button
    :style="{
      padding: '15px',
      fontSize: '20px',
      background: background,
      color: color,
    }"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "RedButton",
  props: {
    background: {
      default: "#FF0000",
    },
    color: {
      default: "#fff",
    },
    text: {
      default: "My github Red Button",
    },
  },
};
</script>
