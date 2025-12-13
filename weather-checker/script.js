let input = document.querySelector('.weather-input');
let btn = document.querySelector('.search-btn');


let temp = document.querySelector('.temperature');
let cityname = document.querySelector('.city-name');
let statuss = document.querySelector('.weather-status');
let humidity = document.querySelector('.humidity');
let windspeed = document.querySelector('.wind-speed');
let icon = document.querySelector('.weather-icon-placeholder')


async function fetchWeather(city) {
  try{
    let apikey = `49e69facae4d7ff8cab736c12b2bd0d6`;
  let raw = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  );

  if(!raw.ok) {
    throw new Error("error")
  }
  let original = await raw.json();
  

  temp.innerHTML = original.main.temp;
  cityname.innerHTML = original.name;
  statuss.innerHTML = original.weather[0].description;
  humidity.innerHTML = original.main.humidity;
  windspeed.innerHTML = original.wind.speed;

  if(original.main.temp >= 5 && original.main.temp <= 19 ) {
    icon.style.background = 'linear-gradient(to top right, #e0f7fa, #81d4fa)';
    icon.style.boxShadow = ' 0 0 20px rgba(129, 212, 250, 0.45)';
  } else if(original.main.temp <5) {
    icon.style.background = 'linear-gradient(to top right, #cfd9df, #1c92d2)';
    icon.style.boxShadow = ' 0 0 25px rgba(28, 146, 210, 0.5)';
  } else {

    icon.style.background = 'linear-gradient(to top right, #ffecb3, #ffca28)';
    icon.style.boxShadow = ' 0 0 20px rgba(255, 202, 40, 0.4)';

  }

  console.log(original)

  } catch (err) {
    console.log(err.message)
  }

}



btn.addEventListener('click', function() {
  fetchWeather(input.value);
});


