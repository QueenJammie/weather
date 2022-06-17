import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState("null");

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  if (temperature) {
    return (
      <p>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </p>
    );
  } else {
    return <p>Loading..</p>;
  }
}
