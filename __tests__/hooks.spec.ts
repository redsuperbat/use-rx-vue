import { BehaviorSubject, NEVER, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { useObservable } from "../src/hooks/useObservable";
import { useModelFromSubject } from "../src/hooks/useModelFromSubject";

describe("useModelFromSubject", () => {
  const emittedValue = "Hello world";

  it("Should emit when supplying a BehaviourSubject", (done) => {
    const subject = new BehaviorSubject(null);
    const [computedRef] = useModelFromSubject(subject);
    subject.pipe(filter((v) => !!v)).subscribe((value) => {
      expect(value).toBe(emittedValue);
      done();
    });
    computedRef.value = emittedValue;
  });
  it("Should emit when not supplying BehaviourSubject", (done) => {
    const [computedRef, subject] = useModelFromSubject();
    subject.pipe(filter((v) => !!v)).subscribe((value) => {
      expect(value).toBe(emittedValue);
      done();
    });
    computedRef.value = emittedValue;
  });
  it("Should have correct values on the computed ref", () => {
    const subject = new BehaviorSubject(null);

    const [computedRef] = useModelFromSubject(subject);

    expect(computedRef.value).toBe(null);

    computedRef.value = emittedValue;

    expect(computedRef.value).toBe(emittedValue);
  });
});

describe("useObservable", () => {
  it("Should trigger callback when observable emits", (done) => {
    const subject = new Subject();
    useObservable(subject, (value) => {
      expect(value).toBe("Hello world");
      done();
    });
    subject.next("Hello world");
  });

  it("Should set inital value when specified", () => {
    const obs = NEVER;
    const ref = useObservable(obs, null, { initalState: "Hello world" });
    expect(ref.value).toBe("Hello world");
  });
});
