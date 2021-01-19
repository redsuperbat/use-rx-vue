import { computed, SetupContext } from "vue";

const useModelValue = (
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

export default useModelValue;
