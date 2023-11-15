const API_KEY = process.env.REACT_APP_WEATHER_API_TOKEN;

/**
 * 
 * @param {*} locationData 
 * @returns weather information string
 */
function getWeather(locationData) {
  const lat = locationData.coords.latitude;
  const lon = locationData.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const date = new Date();

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const weatherID = String(data.weather[0].id);

      if (weatherID.charAt(0) === '2') { // :thunderstorm
        return 'thunder';
      } else if ((weatherID.charAt(0) === '5') || (weatherID.charAt(0) === '3')) { // :rain
        return 'rainy';
      } else if (weatherID.charAt(0) === '6') { // :snow
        return 'snowy';
      } else if ((weatherID === '711') || (weatherID === '731') || (weatherID === '751') || (weatherID === '761') || (weatherID === '762')) { // :smoke, dust/sand, sand, dust, volcanic ash
        return 'dusty';
      } else if ((weatherID === '701') || (weatherID === '721') || (weatherID === '741')) { // :mist, haze, fog,
        return 'foggy';
      } else if ((weatherID === '771') || (weatherID === '781')) { // :squalls, tornado
        return 'tornado';
      } else if ((weatherID === '800') || (weatherID === '801')) { // :clear, few clouds
        const currHour = date.getHours()
        if ((currHour >= 20) || (currHour <= 4)) { // checks if it's night
          return 'moon';
        } else return 'sunny';
      } else if (weatherID.charAt(0) === '8') { // :clouds
        const currHour = date.getHours()
        if ((currHour >= 20) || (currHour <= 4)) { // checks if it's night
          return 'moon';
        } else return 'cloudy';
      } else return 'weather_error';
    })
    .catch(error => {
      console.warn(`Error(weatherAPI) ${error.code}: ${error.message}`);
      return 'weather_error';
    });
}

export default getWeather;