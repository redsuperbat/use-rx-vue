import { BehaviorSubject } from "rxjs";
import { computed, Ref, ref, WritableComputedRef } from "vue";

export const useModelFromSubject = <T>(
  subject?: BehaviorSubject<T>
): [WritableComputedRef<T>, BehaviorSubject<T>] => {
  let reference: Ref;
  if (!subject) {
    subject = new BehaviorSubject(null);
    reference = ref(null);
  } else {
    reference = ref(subject.value);
  }
  const computedRef = computed({
    get() {
      return reference.value;
    },
    set(value: T) {
      subject.next(value);
      reference.value = value;
    },
  });

  return [computedRef, subject];
};
