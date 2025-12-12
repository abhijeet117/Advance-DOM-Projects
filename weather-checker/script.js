async function fetchWeather(city) {
  let apikey = `49e69facae4d7ff8cab736c12b2bd0d6`;
  let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  );
  let original = await raw.json();
  console.log(original);
}

fetchWeather("Teghra");


