<template>
  <button
    :style="{
      padding: '15px',
      fontSize: '20px',
      background: background,
      color: color,
    }"
  >
  test brnch
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "TestBranchButton",
  props: {
    background: {
      default: "#456099",
    },
    color: {
      default: "#fff",
    },
    text: {
      default: "My  github test branch Button",
    },
  },
};
</script>
