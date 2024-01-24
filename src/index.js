function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  //in order to make sure that even with a typo the right city is presented you do the following.

  temperatureElement.innerHTML = Math.round(temperature);
}

//make a new function that is going to call the city and the data related to the city
function searchCity(city) {
  let apiKey = "27183f1a279of04f01t8db4eac4af1cd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData); // this will be another function that will receive a response
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let cityElement = document.querySelector("city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value); // the value of the search input is going to be send to the other function.
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
