<style>
.input-design {
  border-radius: 10px;
  background: #eeffff;
  outline: none;
  padding: 3px;
}
</style>
<template>
  <label>
    {{ label }}
    <input type="text" :name="name" class="input-design" v-model="model" />
  </label>
</template>

<script>
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
