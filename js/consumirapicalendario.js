function Calendario() {
    
    fetch( "https://calendar22.p.rapidapi.com/v1/calendars/7faec8c9-7202-4be5-9fc4-0de4e0d31d5f/events?startTime=2022-01-01T00%3A00%3A01Z&endTime=2022-01-03T00%3A00%3A01Z")

   
}const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'calendar22.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}