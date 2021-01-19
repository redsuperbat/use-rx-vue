import { Subject } from "rxjs";
import { Ref, watch } from "vue";

const useObsFromRef = <T>(ref: Ref<T>) => {
  const subject = new Subject<T>();
  watch(ref, (value) => {
    subject.next(value);
  });

  return subject.asObservable();
};

export default useObsFromRef;
