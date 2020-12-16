import css from "./css/styles.css";

// function y(val) {
//   return val + 1;
// }

// function a(x, cb) {
//   return cb(x);
// }

// let result = a(10, y);
// console.log(result);

// // PROMISE
// console.dir(Promise);
// // pending - состояние ожидания
// const promise = new Promise((resolve, reject) => {});
// console.log("promise", promise);

// // settled - состояние выполнено
// // fullfilled - выполнен успешно
// const myPromise = new Promise((res, rej) => {
//   res(`OK`);
//   rej(`ne Ok`);
// });
// console.log("myPromise", myPromise);

// const myNewPromise = new Promise((ok, neOk) => {
//   setTimeout(() => {
//     ok(`success`);
//     neOk(`ne ok`);
//   }, 0);
// });
// console.log("myNewPromise", myNewPromise);

// // THEN
// const thenPromise = new Promise((res, rej) => {
//   res(`ok`);
//   rej(`ne Okkk`);
// });

// function onResolve(value) {
//   console.log("thenPromise onResolve", value);
// }
// function onReject(value) {
//   console.log("thenPromise onReject", value);
// }

// thenPromise.then(onResolve, onReject);

// // CATCH
// const catchPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("ERROR");
//   }, 0);
// });
// catchPromise
//   .then((d) => {
//     console.log("catchPromise data:", d);
//   })
//   .catch((x) => {
//     // console.error(x);
//   });

// // FINALLY

// let random = Math.random() * 10;
// console.log("random", random);
// const finallyPromise = new Promise((ok, neOk) => {
//   setTimeout(() => {
//     if (random > 5) {
//       ok(`success`);
//     } else {
//       neOk(`error`);
//     }
//   }, 0);
// });

// finallyPromise
//   .then((ok) => {
//     console.log(`${ok} успешно`);
//   })
//   .catch((error) => {
//     console.error(`${error} условие не выполнилось`);
//   })
//   .finally(() => {
//     console.log("FINALLY result");
//   });
// console.log("finallyPromise", finallyPromise);

// // CHAINING
// const chainingPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(100);
//   }, 0);
// });

// chainingPromise
//   .then((a) => {
//     console.log("1 then - a: ", a);
//     return a + 1;
//   })
//   .then((b) => {
//     console.log("2 then - b: ", b);
//     return b + 2;
//   })
//   .then((c) => {
//     console.log("3 then - c: ", c);
//     return c + 3;
//   })
//   .then((total) => {
//     console.log("total: ", total);
//   })
//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(() => {
//     console.log(`chainingPROMISE finally`);
//   });
// console.log("chainigPromise", chainingPromise);

// // static methods of Promise
// // Promise.all([array of promises])
// function createPromise(value, ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(`${value} - promise`);
//     }, ms);
//   });
// }
// const x = createPromise("x", 1500);
// const yy = createPromise("yy", 2500);
// const z = createPromise("z", 3500);

// const allPromises = Promise.all([x, yy, z]);
// allPromises.then((result) => {
//   console.log("all promises result: ", result);
//   result.map((el) => console.log(el));
// });

// // Promise.race([array of promises])
// const k = createPromise("k", 3500);
// const l = createPromise("l", 0);
// const m = createPromise("m", 1500);
// const n = createPromise("n", 2500);

// const racePromise = Promise.race([k, l, m, n]);
// racePromise.then((result) => {
//   console.log("race promises result", result);
// });

// Promise.resolve()
// Promise.reject()
// Promise.finally()

function cb(val) {
  return val + 1;
}

function myFunc(val, cb) {
  // return cb(val);
  return Promise.resolve(val + 1);
}
let total = myFunc(0, cb);

console.log(total);
total.then((r) => {
  console.log(r);
});

console.log(window);
// fetch()

let _search = "Margarita";

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${_search}`)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((d) => {
    console.log(d);
    return d.drinks;
  })
  .then((array) => {
    array.map((el) => console.log(el));
  });
