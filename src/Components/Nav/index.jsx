import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getWeather from './weather';
import { WEATHER_IMAGE_URI, getWeatherImageUri } from './iconHandler';

const NavBar = styled.nav`
width: 100vw;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #06296C;
`;

const Icon = styled.div`
width: 35px;
height: 35px;
margin: 0 15px;
background-size: cover;
background-image: url(${(props) => props.src});
`;

const CurrWeatherInfo = styled.div`
padding: 10px;
top: 60px;
right: 0;
position: absolute;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 0 0 0 0.5em;
color: white;
display: ${(props) => props.$isVisible ? 'block' : 'none'};
`;

function Nav() {

  const [currWeather, setCurrWeather] = useState('nothing');
  const [weatherIconUrl, setWeatherIconUrl] = useState('nothing');
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (locationData) => {
      const weatherData = await getWeather(locationData);
      weatherUpdate(weatherData, getWeatherImageUri(weatherData));
    }, (error) => {
      if (error.code === 1) {
        window.alert('위치 정보 사용을 끄면 날씨 정보를 불러올 수 없어요.');
      } else {
        window.alert('날씨 정보를 불러올 수 없어요.');
      }
      console.warn(`Error(geolocation) ${error.code}: ${error}`);
      console.log(error);
      weatherUpdate('No weather', WEATHER_IMAGE_URI.WEATHER_ERROR);
    });
  }, []);

  function weatherUpdate(weatherDescription, weatherImageUri) {
    setCurrWeather(weatherDescription);
    setWeatherIconUrl(weatherImageUri);
  }

  function handleDescDisplay() {
    setShowDescription(true);

    setTimeout(() => {
      setShowDescription(false)
    }, 1200);
  }

  return (
    <NavBar>
      <Icon src="/images/puzzle_white.png"></Icon>
      <Icon src={weatherIconUrl} onClick={handleDescDisplay}></Icon>
      <CurrWeatherInfo $isVisible={showDescription}>{currWeather}</CurrWeatherInfo>
    </NavBar>
  );
};

export default Nav;