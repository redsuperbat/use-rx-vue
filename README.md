# Vue 3 Directives

## Description

These are useful directives that you can include into your vue application.

| Hook            | Description                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| useObservable   | Subscribes a ref to given observable and unsubscribes on component unmount. Can accept an optional callback to trigger on each emitted value aswell as an inital state for the ref. |
| useObsFromEvent | Exposes a callback and an observable that should be used to subscribe to dom events. Can accept an optional callback to trigger on each emitted value.                              |
| useObsFromRef   | Converts a ref into an observable                                                                                                                                                   |

## Installation

`npm i --save use-rx-vue`
