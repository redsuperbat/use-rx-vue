import { Observable, Subject } from "rxjs";
import { onUnmounted } from "vue";

type ObsFromEvent<T> = [(arg: T) => void, Observable<T>];
type Callback<T> = (arg: T) => void;

export const useObsFromEvent = <T = any>(cb?: Callback<T>): ObsFromEvent<T> => {
  const subject = new Subject<T>();
  const event = (arg: T) => {
    subject.next(arg);
  };
  const obs = subject.asObservable();
  if (cb) {
    const sub = obs.subscribe(cb);
    onUnmounted(() => sub.unsubscribe());
  }
  return [event, obs];
};
