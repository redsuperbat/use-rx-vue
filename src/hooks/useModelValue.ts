import { computed, SetupContext } from "vue";

export const useModelValue = (
  props: Record<string, any>,
  emit: SetupContext["emit"],
  modelValueName = "modelValue"
) => {
  const computedValue = computed({
    set(value) {
      emit("update:" + modelValueName, value);
    },
    get() {
      return props[modelValueName];
    },
  });
  return computedValue;
};
