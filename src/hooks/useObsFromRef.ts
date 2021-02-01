import { BehaviorSubject } from "rxjs";
import { Ref, watch } from "vue";

export const useObsFromRef = <T>(ref: Ref<T>) => {
  const subject = new BehaviorSubject<T>(ref.value);
  watch(ref, (value) => {
    subject.next(value);
  });

  return subject.asObservable();
};
