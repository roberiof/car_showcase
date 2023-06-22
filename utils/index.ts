const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f7c10345amsh03465f0e38d75d1p109d89jsn65e1722f93cc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

export const fetchCars = async() =>{
	const response = await fetch(url, options).then(data => data.json());
	return response 
}
