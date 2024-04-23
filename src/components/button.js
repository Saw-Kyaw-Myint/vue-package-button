import * as commonComponent from "@/components/Button/index";

export const install = (Vue) => {
  Object.values(commonComponent)
    .filter((component) => component.name)
    .forEach((component) => {
      Vue.component(component.name, component);
    });
};
export * from "@/components/Button/index";
