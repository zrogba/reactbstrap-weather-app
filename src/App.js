import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import { useState } from 'react';

function App() {
//call function const handleOnSearchChange = (searchData) =>{
  //create hook functions to store 
  const [currenWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) =>{
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon${lon}&appid=${WEATHER_API_KEY}` );
    const forecastFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon${lon}&appid=${WEATHER_API_KEY}` );
  
//use promise to  pass the arrays of weather and forecast,
//and call async function and call th ejson method to  map the 
//create hook functions to store 
//extend the data to complete with label of full description 
//by using geoapi data add city parameter with searchData and label
Promise.all([currentWeatherFetch, forecastFetch])
.then(async (response) => {
  const weatherResponse = await response[0].json();
  const forecastResponse = await response[1].json();

  setCurrentWeather({ city: searchData.label , ...weatherResponse});
  setForecast({ city: searchData.label , ...forecastResponse});

})
//use of .catch if it fails  and console 
  .catch((err) => console.log(err));
  }

  console.log(currenWeather);
  console.log(forecast);

  return (
    <div className="container">
     
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
// create two fects make two api calls one for forecast and second for 
//get api kets and url for forcast and current weather frm open api