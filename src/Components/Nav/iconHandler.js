import IMAGE_CLOUDY from "./icons/cloudy.png";
import IMAGE_DUSTY from "./icons/dusty.png";
import IMAGE_FOGGY from "./icons/foggy.png";
import IMAGE_MOON from "./icons/moon.png";
import IMAGE_RAINY from "./icons/rainy.png";
import IMAGE_SNOWY from "./icons/snowy.png";
import IMAGE_SUNNY_CLOUDY from "./icons/sunny_cloudy.png";
import IMAGE_SUNNY from "./icons/sunny.png";
import IMAGE_THUNDER from "./icons/thunder.png";
import IMAGE_TORNADO from "./icons/tornado.png";
import IMAGE_WEATHER_ERROR from "./icons/weather_error.png";
import IMAGE_WINDY from "./icons/windy.png";

export const WEATHER_IMAGE_URI = {
  CLOUDY: IMAGE_CLOUDY,
  DUSTY: IMAGE_DUSTY,
  FOGGY: IMAGE_FOGGY,
  MOON: IMAGE_MOON,
  RAINY: IMAGE_RAINY,
  SNOWY: IMAGE_SNOWY,
  SUNNY_CLOUDY: IMAGE_SUNNY_CLOUDY,
  CLEAR: IMAGE_SUNNY,
  THUNDER: IMAGE_THUNDER,
  TORNADO: IMAGE_TORNADO,
  WEATHER_ERROR: IMAGE_WEATHER_ERROR,
  WINDY: IMAGE_WINDY,
};


export function getWeatherImageUri(weatherLabel) {
  return WEATHER_IMAGE_URI[weatherLabel.toUpperCase()];
}
