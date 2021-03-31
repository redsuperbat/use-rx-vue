import { BehaviorSubject } from "rxjs";
import { reactive, watch } from "vue";

export const useObsFromReactive = <T extends object>(reactiveInput: T) => {
  const reactiveValue = reactive<T>(reactiveInput);
  const subject = new BehaviorSubject<T>(reactiveValue as T);
  watch(reactiveValue as T, (value) => {
    subject.next(value);
  });

  return subject.asObservable();
};
