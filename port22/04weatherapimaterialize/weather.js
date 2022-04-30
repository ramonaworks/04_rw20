class Weather {
	constructor(city, zipcode) {
		this.apiKey = '9d0317c32366d083e6e35b438595476c';
		this.city = city;
		this.zipcode = zipcode;
	}
	// Fetch weather from API
	async getWeather() {   
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.zipcode}&APPID=9d0317c32366d083e6e35b438595476c&units=imperial`);
		const responseData = response.json();
		return responseData;
	}
	
	// Change weather location
	changeLocation(city, zipcode) {
		this.city = city;
		this.zipcode = zipcode;
	}
	}
	