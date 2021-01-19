import { Subject } from "rxjs";
import { onUnmounted } from "vue";

const useObsFromEvent = <T>(cb: (value: T) => void) => {
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

export default useObsFromEvent;
