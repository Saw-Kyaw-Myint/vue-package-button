import * as commonComponent from "@/components/Form/index";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};
export * from "@/components/Form/index";
