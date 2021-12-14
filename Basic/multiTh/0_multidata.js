const { Worker, isMainThread, workerData, parentPort } = require('worker_threads');

// new Worker 의 두 번째 인자로 workerData 넣어주면 이걸 워커쓰레드로 보내줌.
// 워커쓰레드에서 workerData 사용 가능함.
// 워커쓰레드는 현재 2개인거임. 메인 쓰레드에서 add해준 쓰레드가 2개니까.. 그래서 콘솔에 101, 102 뜨는게 순서가 다를 수 있음
if (isMainThread) {
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on('message', (message) => console.log('from worker', message));
    worker.on('exit', () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log('job done!!');
      }
    });
  }
} else {
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
