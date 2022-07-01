function getData() {

    let city = document.querySelector("#city").value;
    axios
        .get(`https://api.weatherapi.com/v1/current.json?key=64e07b035ccc4bb4ad0203751223006&q=${city}`)
        .then(function (response) {
            // handle success
            const data = response.data;
            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");
            document.querySelector("#iconWeather").src = icon;
            document.querySelector("#temp_c").innerHTML = data.current.temp_c + "&deg;C";
            let tempF = data.current.temp_f;
            let tempFc = Math.trunc( tempF ); // remove decimal part of tempF to get tempFc
            document.querySelector("#temp_f").innerHTML = tempFc + "&deg;F";
            document.querySelector("#cityName").innerHTML = data.location.name + ", " + data.location.region + ", " + data.location.country;
            document.querySelector("#weather").innerHTML = data.current.condition.text;
            let feelc = data.current.feelslike_c;
            let feelcc = Math.trunc( feelc ); // remove decimal part of feelc to get feelcc
            document.querySelector("#min").innerHTML = "Min: " + feelcc + "&deg;";
            let feelF = data.current.feelslike_f;
            let feelFc = Math.trunc( feelF ); // remove decimal part of feelF to get feelFc 
            document.querySelector("#max").innerHTML = "Max: " + feelFc+ "&deg;";
            let precipi = data.current.precip_mm;
            let precipic = Math.trunc( precipi ); // remove decimal part of precipi to get precipic
            document.querySelector("#precipitaion").innerHTML = "Precipitation: " + precipic + "%";
            document.querySelector("#humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
            let wind = data.current.wind_kph;
            let windc = Math.trunc( wind ); // remove decimal part of wind to get windc
            document.querySelector("#wind").innerHTML = "Wind: " + windc + " km/h";
            document.querySelector("#visibility").innerHTML = "Visibility: " + data.current.vis_km + " km";

        })

}
