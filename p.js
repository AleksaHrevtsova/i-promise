console.dir(Promise); // object - turn to global & 1 event
// Pending - wait
// Settled - done
// fullfiled || rejected
console.dir(() => {}); // function - arguments from global & many events

const promise = new Promise((resolve, reject) => {});
console.log("promise", promise);

const myPromise = new Promise((resolve, reject) => {
  resolve(console.log(`ok`));
  reject(console.log(`ne ok`));
});
console.log("myPromise", myPromise);

const myNewPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log(`ok`));
  }, 0);
  // reject(console.log(`ne ok`));
});
console.log("myNewPromise", myNewPromise);

// THEN
const thenPromise = new Promise((resolve, reject) => {
  resolve(`ok`);
});
function onResolve(data) {
  console.log("onResolve data:", data);
}
function onReject(data) {
  console.log("onReject data:", data);
}
thenPromise.then(onResolve, onReject);
console.log("thenPromise", thenPromise);

// CATCH
const catchPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`ne ok`);
  }, 0);
});

catchPromise
  .then((d) => console.log("d", d))
  .catch((error) => {
    console.error(error);
  });
console.log("catchPromise", catchPromise);

// FINALLY
const finallyPromise = new Promise((resolve, reject) => {
  let r = Math.random() * 10;
  setTimeout(() => {
    if (r > 5) {
      resolve(`ok`);
    } else {
      reject(`ne ok`);
    }
  }, 0);
});

finallyPromise
  .then((d) => console.log("random", d))
  .catch((error) => {
    console.error("random", error);
  })
  .finally(() => {
    console.log(`FINALLY`);
  });
console.log("finallyPromise", finallyPromise);

// CHAINING .then().then().then().catch().finally()
const chainingPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res(100);
  }, 0);
});
chainingPromise
  .then((a) => {
    console.log("1:", a);
    return a + 1;
  })
  .then((b) => {
    console.log("2:", b);
    return b + 2;
  })
  .then((c) => {
    console.log("3:", c);
    return c + 3;
  })
  .then((total) => console.log("total", total))
  .catch((er) => console.log("catch error", er))
  .finally((result) => {
    console.log("finally result:", result);
  });

// static methods
// Promise.all([array of promises] => return promise)
// ждет выполнения всех промисов - потом вернет результат

function createPromise(value, ms) {
  return new Promise((res) => {
    setTimeout(() => res(`${value} - promise`), ms);
  });
}
const x = createPromise("x", 1500);
const y = createPromise("y", 2500);
const z = createPromise("z", 5000);

Promise.all([x, y, z])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Promise.race([array of promises] => return promise)
// ждет выполнения хотя бы одного промиса - и вернет его результат
const k = createPromise("k", 500);
const l = createPromise("l", 100);
const m = createPromise("m", 2000);
const n = createPromise("n", 3000);

Promise.race([k, l, m, n])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// создание уже выполнившегося промиса
// Promise.resolve() - успешно, альтернатива передачи cb-функции
// Promise.reject() - с ошибкой
// Promise.finally() -
