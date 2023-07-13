const input = document.getElementById("search");
const cityWeather = document.querySelector(".weather .city");
const countryWeather = document.querySelector(".weather .country");
const timeWeather = document.querySelector(".weather .times");
const shortDescWeather = document.querySelector(".weather .short_desc");
const visionWeather = document.querySelector(".weather .vision span");
const windWeather = document.querySelector(".weather .wind span");
const cloudWeather = document.querySelector(".weather .cloud span");
const temperatureWeather = document.querySelector(
  ".weather .temperature .tempNumber"
);

async function changeWeather(city) {
  let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;

  let data = await fetch(weatherApi).then((res) => res.json());

  if (data.cod == 200) {
    cityWeather.innerText = data.name;
    countryWeather.innerText = data.sys.country;
    timeWeather.innerText = new Date().toLocaleString("vi");
    temperatureWeather.innerText = Math.round(data.main.temp);
    shortDescWeather.innerText = data.weather[0].main;
    visionWeather.innerText = data.visibility + "(m)";
    windWeather.innerText = data.wind.speed + "(m/s)";
    cloudWeather.innerText = data.clouds.all + "(%)";
  } else {
    alert("Không tìm thấy tên thành phố!");
    input.value = "";
  }
}
changeWeather("Ha Noi");
input.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    changeWeather(input.value.trim());
    input.value = "";
  }
});
