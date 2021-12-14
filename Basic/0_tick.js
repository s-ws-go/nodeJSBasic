setImmediate(() => console.log('imme'));
process.nextTick(() => console.log('tick'));
setTimeout(() => console.log('settime'), 0);
Promise.resolve().then(() => console.log('promise'));

// 프로세스 객체의 nextTick과 promise는 마이크로태스크큐에서 처리하므로
// 태스크큐에서 처리하는 셋타임아웃이나 셋이미디에이트보다 더 빨리 이벤트루프 내에서 순환.
