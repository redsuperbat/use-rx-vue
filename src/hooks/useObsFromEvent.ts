import { Observable, Subject } from "rxjs";
import { onUnmounted } from "vue";

export const useObsFromEvent = <T = Event>(
  cb?: (value: T) => void
): [(value: T) => void, Observable<T>] => {
  const subject = new Subject<T>();
  const event = (value: T) => {
    subject.next(value);
  };
  const obs = subject.asObservable();
  if (cb) {
    const sub = obs.subscribe(cb);
    onUnmounted(() => sub.unsubscribe());
  }
  return [event, obs];
};
