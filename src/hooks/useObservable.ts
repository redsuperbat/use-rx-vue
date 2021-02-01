import { Observable } from "rxjs";
import { onUnmounted, ref, UnwrapRef } from "vue";

export interface UseObservableOptions<T> {
  cb?: (value: T) => void;
  initalState?: T;
}

export const useObservable = <T>(
  obs: Observable<T>,
  { cb, initalState }: UseObservableOptions<T>
) => {
  const reference = ref(initalState);

  const sub = obs.subscribe((emittedValue) => {
    if (cb) {
      cb(emittedValue);
    }
    reference.value = emittedValue as UnwrapRef<T>;
  });

  onUnmounted(() => {
    sub.unsubscribe();
  });
  return reference;
};
