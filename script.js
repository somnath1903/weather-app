const apikey = "c6b5d1e22f76f0569f45868402dd6791";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        if (!city) {
            throw new Error("City name cannot be empty.");
        }

        const requestUrl = apiurl + city + `&appid=${apikey}`;
        console.log("API Request URL:", requestUrl); // Debugging

        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error("City not found or invalid query.");
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging

        // Update the weather information
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    console.log("Search button clicked. City entered:", city); // Debugging
    checkWeather(city);
});
