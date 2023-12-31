const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f7c10345amsh03465f0e38d75d1p109d89jsn65e1722f93cc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};
import { CarProps } from "@/types";

export const fetchCars = async() =>{
	const response = await fetch(url, options).then(data => data.json());
	return response 
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;
  
	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(" ")[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append('angle', `${angle}`);
  
	return `${url}`;
} 