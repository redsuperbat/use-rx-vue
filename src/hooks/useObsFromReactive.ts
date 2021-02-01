import { BehaviorSubject } from "rxjs";
import { reactive, watch } from "vue";

export const useObsFromReactive = (reactiveInput: object) => {
  const reactiveValue = reactive(reactiveInput);
  const subject = new BehaviorSubject<object>(reactiveValue);
  watch(reactiveValue, (value) => {
    subject.next(value);
  });

  return subject.asObservable();
};
