let input = document.querySelector('.weather-input');
let btn = document.querySelector('.search-btn');


let temp = document.querySelector('.temperature');
let cityname = document.querySelector('.city-name');
let status = document.querySelector('.weather-status');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.wind-speed');


async function fetchWeather(city) {
  let apikey = `49e69facae4d7ff8cab736c12b2bd0d6`;
  let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  );
  let original = await raw.json();
  console.log(original);

  console.log(original.main.temp)

  btn.addEventListener('click', function() {
    console.log("hii")
  });

}


btn.addEventListener('click', function() {
  fetchWeather(input.value);
})



