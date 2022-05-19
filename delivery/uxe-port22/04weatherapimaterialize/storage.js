class Storage {
	constructor() {
		this.city;
		this.zipcode;
		this.defaultCity = 'Denver';
		this.defaultZipcode = '80238';
	}
	
	getLocationData() {
		if(localStorage.getItem('city') === null) {
			this.city = this.defaultCity;
		} else {
			this.city = localStorage.getItem('city');
		}
	
		if(localStorage.getItem('zipcode') === null) {
			this.zipcode = this.defaultZipcode;
		} else {
			this.zipcode = localStorage.getItem('zipcode');
		}
	
		return {
			city: this.city,
			zipcode: this.zipcode
		}
	}
	
	setLocationData(city, zipcode) {
		localStorage.setItem('city', city);
		localStorage.setItem('zipcode', zipcode);
	}
	}