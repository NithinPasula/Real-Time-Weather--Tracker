import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./searchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    City: "Wonderland",
    feelsLike: 40.4,
    humidity: 49,
    temp: 35.05,
    tempMax: 35.05,
    tempMin: 35.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <h3>Weather App by Nithin</h3>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
