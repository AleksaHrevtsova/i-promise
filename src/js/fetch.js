import template from "../templates/drinks.hbs";
const drinksList = document.querySelector(".drinks");

let _search = "лврмвряа";
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${_search}`;

// console.log(window);
// window.fetch() || fetch()
const myFirstFetch = fetch(url);
console.log(myFirstFetch);

myFirstFetch
  .then((z) => {
    if (z.status === 100) {
      console.log(`some error 100`);
    } else if (z.status === 404) {
      alert("");
      console.log(`проверь строку запроса!!!`);
    } else if (z.status === 500) {
      console.log(`ошибка сервера!`);
    }
    console.log(z);
    return z.json();
  })
  .then((result) => {
    // console.log(result);
    const array = result.drinks;
    console.log(array);
    const filter = array.filter((el) => el.strDrink.includes("Blue"));
    console.log(filter);
    return filter;
  })
  .then((filter) => {
    const item = template(filter);
    drinksList.insertAdjacentHTML("afterbegin", item);
  })
  .catch((err) => {
    console.log(err);
    console.error("ERROR", err);
    // тут выводит нотификацию
  });

// fetch(url, options)
// options = {
//   method: "GET" || "POST" || "PUT" || "PATCH" || "DELETE",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "X-Custom-Header": "custom value",
//   },
//   body: {
//     name: "",
//     phone: "",
//   },
// };

// let base_url = `https://www.thecocktaildb.com/api/json/v1/1/`;
// let endpoint = `search.php?s=`;
// let _search = "Margarita";

// let url = base_url + endpoint + _search;
// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((d) => {
//     console.log(d);
//     return d.drinks;
//   })
//   .then((array) => {
//     array.map((el) => console.log(el));
//   });
