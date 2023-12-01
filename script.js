// 'use strict';

// // Asynchronous JavaScript, AJAX and APIs

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

const renderCountry = (data, className = "") => {
  const currencies = Object.values(data.currencies);
  const languages = Object.values(data.languages);

  const html = `
    <article class='country ${className}'>
      <img class='country__img' src='${data.flags.png}' />
      <div class='country__data'>
        <h3 class='country__name'>${data.name.common}</h3>
        <h4 class='country__region'>${data.region}</h4>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(2)} M. people</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
      </div>
    </article>
      `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentHTML("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

// const getJSON = (url, errorMsg = 'Something went wrong') => {
//   return fetch(url).then((res) => {
//     if (!res.ok) {
//       throw new Error(`${errorMsg} (${res.status})`);
//     }
//     return res.json();
//   });
// };

const getJSON = async function (url, errorMsg = "Something went wrong") {
  const res = await fetch(url);
  return await res.json();
};

// const getCountryDataAndNeighbour = (country) => {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); // JSON.parse() === res.json() avec la méthode fetch

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha?codes=${neighbour}`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);

//       // Render neighbour countries
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryDataAndNeighbour('france');

// FETCH

// fetch(`https://restcountries.com/v3.1/name/${country}`).then((res) => {
//   console.log(res);
//   if (!res.ok) {
//     throw new Error(`Country not found (${res.status})`);
//   }
//   return res.json();
// });

const apiKey = "VOTRE_API_KEY";

// const whereAmI = (lat, lng) => {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Problem with Geocoding');
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(`I am in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Country not found');
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(...data);
//     })
//     .catch((err) => renderError(err.message));
// };

// whereAmI(56.325, 24.69);
// whereAmI(52.37, 4.895);
// whereAmI(-33.933, 18.474);

// const getCountryData = (country) => {
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Country not found `
//   )
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders;
//       if (!neighbour) throw new Error('No Border');

//       //return 23
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha?codes=${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((item) => renderCountry(item, 'neighbour'));
//     })
//     .catch((err) => renderError(`💥${err}`));
// };

// btn.addEventListener('click', () => {
//   getCountryData('france');
// });

// console.log('console log 1');
// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// Promise.resolve('Promise 1').then((res) => console.log(res));
// Promise.resolve('Promise 2').then((res) => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('console log 3');

// const lotteryPromise = new Promise((resolve, rejected) => {
//   console.log('Lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("It's a WIN !");
//     } else {
//       rejected(new Error('Try again!'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// setTimeout(() => {
//   console.log('5');
//   setTimeout(() => {
//     console.log('4');
//     setTimeout(() => {
//       console.log('3');
//       setTimeout(() => {
//         console.log('2');
//         setTimeout(() => {
//           console.log('1');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const wait = (seconds) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('5');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('1');
//     return wait(1);
//   });

const getPosition = new Promise((resolve, reject) => {
  // navigator.geolocation.getCurrentPosition(
  //   (position) => resolve(position),
  //   (err) => reject(err)
  // );
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

// Promise.resolve('abc').then((res) => console.log(res));
// Promise.reject(new Error('Problem!')).catch((err) => console.error(err));

// const whereAmI = () => {
//   getPosition
//     .then((position) => {
//       const { latitude: lat, longitude: lng } = position.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Problem with Geocoding');
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(`I am in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Country not found');
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(...data);
//     })
//     .catch((err) => renderError(err.message));
// };

// btn.addEventListener('click', whereAmI);

// ASYNC / AWAIT

// const getCountry = async (country) => {
//   const response = await fetch(
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   const data = await response.json();
//   renderCountry(...data);
// };

// getCountry('italy');

const whereAmI = async function () {
  try {
    const position = await getPosition;
    const { latitude: lat, longitude: lng } = position.coords;

    const geolocation = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=653469906085125947229x512`
    );
    if (!geolocation.ok) {
      throw new Error("Problem with Geocoding");
    }
    const dataGeoloc = await geolocation.json();

    const country = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeoloc.country}`
    );
    if (!country.ok) {
      throw new Error("Country not found");
    }
    const dataCountry = await country.json();

    renderCountry(...dataCountry);

    const neighbour = dataCountry[0].borders;
    if (!neighbour) throw new Error("No Border");
    console.log(neighbour);

    const neighbourRes = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${neighbour}`
    );
    const dataNeighbour = await neighbourRes.json();
    dataNeighbour.forEach((el) => renderCountry(el, "neighbour"));

    return `You are in ${dataGeoloc.city}, ${dataGeoloc.country}`;
  } catch (error) {
    console.error(err);
    renderError(err.message);

    throw error;
  }
};

console.log("1. Will get location");

// city
//   .then((res) => console.log(`2.a : ${res}`))
//   .catch((err) => console.error(`2b : ${err.message}`))
//   .finally(() => console.log('3. Finished getting location'));

// Créer un bloc asynchrone et y utiliser await
(async () => {
  try {
    const city = await whereAmI();
    console.log(`2.a : ${city}`);
  } catch (err) {
    console.error(`2.b : ${err.message}`);
  }
  console.log("3. Finished getting location");
})();
