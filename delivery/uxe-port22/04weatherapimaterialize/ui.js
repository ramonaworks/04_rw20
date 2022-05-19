class UI {
constructor() {
	this.location = document.getElementById('rw-location');
	this.desc = document.getElementById('rw-desc');
	this.string = document.getElementById('rw-string');
	this.details = document.getElementById('rw-details');
	this.icon = document.getElementById('rw-icon');
	this.humidity = document.getElementById('rw-humidity');
	this.feelsLike = document.getElementById('rw-feels-like');
	this.dewpoint= document.getElementById('rw-dewpoint');
	this.wind = document.getElementById('rw-wind');
}
paint(weather) {
	this.location.textContent = weather.name;
	this.desc.textContent =  weather.weather[0].description;
	this.string.textContent = `weather: ${weather.main.temp}`
	this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
	this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
	this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
	this.wind.textContent = `Wind: ${weather.wind.speed}`;
}
}