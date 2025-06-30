
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apikey = "d3b74e3380d208385fbbf2cbe898a519"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apikey}&units=metric`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("City not found!");
        const data = await res.json();

        const result =  ` <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weatherResult").innerHTML = result;

    }catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
    
}