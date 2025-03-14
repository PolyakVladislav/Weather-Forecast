import currentWeather from "./current-wether.json";
import dailyForecast from "./daily-forecast.json";
import hourlyForecast from "./hourly-forecast.json";

function getCurrentWeather() {
  return currentWeather.current;
}
function getDailyForecast() {
  return dailyForecast.dialy.data;
}
function geHourlyForecast() {
  return hourlyForecast.hourly.data;
}

export { getCurrentWeather, getDailyForecast, geHourlyForecast };