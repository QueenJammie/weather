import React from "react";
import axios from "axios";

export default function Weather()
{
    function displayTemperature(response)
    {
        alert(`The weather in Sherbrooke is ${Math.round(response.data.main.temp)}°C`);
    }

    let apiKey = "707e44e4e5e95bcdf4a8e607ba31db1d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sherbrooke&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature)

    return "";
}