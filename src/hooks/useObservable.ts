import { Observable } from "rxjs";
import { onUnmounted, ref, UnwrapRef } from "vue";

export interface UseObservableOptions<T> {
  initalState?: T;
}

export const useObservable = <T>(
  obs: Observable<T>,
  callback?: (value: T) => void,
  { initalState }: UseObservableOptions<T> = {}
) => {
  const reference = ref(initalState);

  const sub = obs.subscribe((emittedValue) => {
    if (callback) {
      callback(emittedValue);
    }
    reference.value = emittedValue as UnwrapRef<T>;
  });

  onUnmounted(() => {
    sub.unsubscribe();
  });
  return reference;
};
