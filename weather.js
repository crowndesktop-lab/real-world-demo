const apiKey = 'YOUR_API_KEY';
const weatherApiUrl = 'https://api.weatherapi.com/v1';

async function fetchCurrentWeather(location) {
    const response = await fetch(`${weatherApiUrl}/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    return data;
}

async function fetchFiveDayForecast(location) {
    const response = await fetch(`${weatherApiUrl}/forecast.json?key=${apiKey}&q=${location}&days=5`);
    const data = await response.json();
    return data;
}

// Example usage
// fetchCurrentWeather('New York').then(data => console.log(data));
// fetchFiveDayForecast('New York').then(data => console.log(data));