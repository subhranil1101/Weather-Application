var city;
const getWeather = async (city) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  cityName.innerHTML = response.location.name;

                  temp.innerHTML = response.current.temp_c;
                  humidity.innerHTML = response.current.humidity + "%";
                  feels_like.innerHTML = response.current.feelslike_c;

                  region.innerHTML = response.location.region;
                  lat.innerHTML = response.location.lat;
                  lon.innerHTML = response.location.lon;
                  cityName2.innerHTML = response.location.name;
                  country.innerHTML = response.location.country;
                  lastupdate.innerHTML = response.current.last_updated;

                  wind_spd.innerHTML = response.current.wind_kph;
                  wind_dir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  wind_deg.innerHTML = response.current.wind_degree + "&deg";
                  pressure_mb.innerHTML = response.current.pressure_mb + " mbar";
                  cond.innerHTML = response.current.condition.text;
                  document.getElementById('condicon').src = response.current.condition.icon
            })
            .catch(err => console.log(err));
}

getWeather('kolkata');


var city2;

const getMumbai = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  mumbaiTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  mumbaiFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  mumbaiHumidity.innerHTML = response.current.humidity + "%";
                  mumbaiCondition.innerHTML = response.current.condition.text;
                  mumbaiWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  mumbaiWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  mumbaiWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  mumbaiPressure.innerHTML = response.current.pressure_mb + " mbar";
                  mumbaiCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getMumbai("mumbai");

const getDelhi = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  delhiTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  delhiFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  delhiHumidity.innerHTML = response.current.humidity + "%";
                  delhiCondition.innerHTML = response.current.condition.text;
                  delhiWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  delhiWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  delhiWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  delhiPressure.innerHTML = response.current.pressure_mb + " mbar";
                  delhiCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getDelhi("new delhi");

const getBangalore = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  bangaloreTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  bangaloreFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  bangaloreHumidity.innerHTML = response.current.humidity + "%";
                  bangaloreCondition.innerHTML = response.current.condition.text;
                  bangaloreWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  bangaloreWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  bangaloreWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  bangalorePressure.innerHTML = response.current.pressure_mb + " mbar";
                  bangaloreCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getBangalore("bangalore");

const getChennai = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  chennaiTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  chennaiFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  chennaiHumidity.innerHTML = response.current.humidity + "%";
                  chennaiCondition.innerHTML = response.current.condition.text;
                  chennaiWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  chennaiWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  chennaiWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  chennaiPressure.innerHTML = response.current.pressure_mb + " mbar";
                  chennaiCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getChennai("chennai");

const getKakdwip = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  kakdwipTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  kakdwipFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  kakdwipHumidity.innerHTML = response.current.humidity + "%";
                  kakdwipCondition.innerHTML = response.current.condition.text;
                  kakdwipWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  kakdwipWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  kakdwipWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  kakdwipPressure.innerHTML = response.current.pressure_mb + " mbar";
                  kakdwipCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getKakdwip("Kakdwip");

const getLondon = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  londonTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  londonFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  londonHumidity.innerHTML = response.current.humidity + "%";
                  londonCondition.innerHTML = response.current.condition.text;
                  londonWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  londonWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  londonWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  londonPressure.innerHTML = response.current.pressure_mb + " mbar";
                  londonCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getLondon("london");

const getNY = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  nyTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  nyFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  nyHumidity.innerHTML = response.current.humidity + "%";
                  nyCondition.innerHTML = response.current.condition.text;
                  nyWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  nyWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  nyWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  nyPressure.innerHTML = response.current.pressure_mb + " mbar";
                  nyCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getNY("new york");

const getDhaka = async (city2) => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=40e98bc0be2f41beb24164538241505 &q=" + city2 + "&aqi=yes")
            .then(response => response.json())
            .then((response) => {
                  dhakaTemp.innerHTML = response.current.temp_c + "&deg" + "C";
                  dhakaFeels.innerHTML = response.current.feelslike_c + "&deg" + "C";
                  dhakaHumidity.innerHTML = response.current.humidity + "%";
                  dhakaCondition.innerHTML = response.current.condition.text;
                  dhakaWindSpd.innerHTML = response.current.wind_kph + "km/hr";
                  dhakaWindDir.innerHTML = "&#34;" + response.current.wind_dir + "&#34;"
                  dhakaWindDeg.innerHTML = response.current.wind_degree + "&deg";
                  dhakaPressure.innerHTML = response.current.pressure_mb + " mbar";
                  dhakaCountry.innerHTML = response.location.country;
            }
            ).catch(err => console.log(err))
}

getDhaka("dhaka");