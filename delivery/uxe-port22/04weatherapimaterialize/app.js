// Initialize Storage
const storage = new Storage();
// Get Stored location data
const weatherLocation = storage.getLocationData();
// Initialize Weather Object with our Storage
const weather = new Weather(weatherLocation.city, weatherLocation.zipcode);
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('rw-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const zipcode = document.getElementById('zipcode').value;
  weather.changeLocation(city, zipcode)
  // Set Location in Local Storage
  storage.setLocationData(city, zipcode)
  getWeather()
})

function getWeather(){
  weather.getWeather()
  .then(results => ui.paint(results))
  .catch(err => console.log(err))
}