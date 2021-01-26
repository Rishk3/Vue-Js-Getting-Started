<template>
  <div id="weatherapp">
    <!-- :class="
      typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
    " -->
    <main>
      <h1>Get Current Weather Information By city Names</h1>

      <div class="input_section" style="">
        <div class="search-box">
          <input
            type="text"
            class="search-bar"
            placeholder="Type City Name.."
            v-model="query"
            @keypress="fetchWeather"
          />
        </div>
        <div>
          <button class="search_btn" @click="actualFetch">
            Search
          </button>
        </div>
        <div v-if="false" id="mycity">
          <button @click="getMyCityWeather">
            MyCity
          </button>
        </div>
      </div>

      <div class="weather-wrap" v-if="isShowing">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
          <div class="suntime">
            <div class="sun_starting">
              <span>Sunrise at :{{ timeConverter(sunTime.sunrise) }}</span>
            </div>
            <div class="sun_ending">
              <span>
                Sunset at :
                {{ timeConverter(sunTime.sunset) }}</span
              >
            </div>
          </div>
          <div class="suntime">
            <div class="sun_starting">
              <span>Latitude :{{ weather.coord.lat }}°</span>
            </div>
            <div class="sun_ending">
              <span>Longitude :{{ weather.coord.lon }}° </span>
            </div>
          </div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">
            <div class="w1">
              <p>
                clouds : {{ weather.clouds.all }}%
                {{ weather.weather[0].description }}
              </p>
              <p>wind : {{ weather.wind.speed }}m/s</p>
            </div>

            <p>Pressure : {{ weather.main.pressure }} hpa</p>
          </div>
        </div>
      </div>
      <!-- displayed when wrong input city name -->
      <div class="wrong_city" style="font-size:30px" v-if="wrongShow">
        <p>Wrong City Name entered...</p>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      API_KEY: "606afaf991c312d354bc2a1b29575bb7",
      URL_BASE: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
      wrongShow: false,
      sunTime: {},
      isShowing: false,
    };
  },
  methods: {
    actualFetch() {
      axios
        .get(
          `${this.URL_BASE}weather?q=${this.query}&units=metric&APPID=${this.API_KEY}`
        )
        .then((response) => {
          const result = response.data;
          if (response.status == 200) {
            console.log("im 200");
            this.weather = result;
            console.log(this.weather);
            this.sunTime = result.sys;
            this.isShowing = true;
          }
        })
        .catch((err) => {
          console.log("error ooccured is", err);
          this.wrongShow = true;
        });
    },
    getMyCityWeather() {
      const getCity = (pos) => {
        let myCity;
        const xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          "https://us1.locationiq.com/v1/reverse.php?key=10fd7055ec001e&lat=" +
            pos.lat +
            "&lon=" +
            pos.long +
            "&format=json",
          true
        );
        function processRequest(e) {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            myCity = response.address.city;
            console.log("cityname", myCity);
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/weather?q=agra&units=metric&APPID=606afaf991c312d354bc2a1b29575bb7`
              )
              .then((response) => {
                const result = response.data;
                if (response.status == 200) {
                  console.log("im 200");
                  this.weather = result;
                  console.log(this.weather);
                  this.sunTime = result.sys;
                  this.isShowing = true;
                }
              })
              .catch((err) => {
                console.log("error ooccured is", err);
                this.wrongShow = true;
              });
          }
        }
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
        return myCity;
      };
      function getDefault() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              long: position.coords.longitude,
            };
            getCity(pos);
          });
        }
      }
      getDefault();
    },

    fetchWeather(e) {
      if (e.key == "Enter") {
        this.actualFetch();
      }
    },

    timeConverter(unixTimeStamp) {
      const a = new Date(unixTimeStamp * 1000);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      // const year = a.getFullYear();
      // const month = months[a.getMonth()];
      // const date = a.getDate();
      let format = "";
      let hour = a.getHours();
      if (hour >= 12) {
        format = "PM";
        hour = hour - 12;
      } else {
        format = "AM";
      }
      const min = a.getMinutes();
      const sec = a.getSeconds();
      const time = hour + ":" + min + ":" + sec + " " + format;
      return time;
    },

    dateBuilder() {
      const d = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#mycity {
  align-items: center;

  button {
    padding: 15px;
    font-size: 20px;
    margin-left: 60px;
    padding: 15px;
    cursor: pointer;
    border-radius: 10px;
    background: #794821;
    border: 1px solid #412610;
    color: #fff;
  }
}
#weatherapp {
  color: #fff;
  background-image: url("https://images.unsplash.com/photo-1519414119614-31e82ec0cce7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#weatherapp.warm {
  background-image: url("https://images.unsplash.com/photo-1517591200665-416e0c0d4a38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
}
main {
  text-align: center;
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}
.input_section {
  display: flex;
  width: 95%;
  justify-content: center;
  .search_btn {
    padding: 15px;
    font-size: 20px;
    margin-left: 20px;
    background: rebeccapurple;
    border: 1px solid rebeccapurple;
    color: #fff;
    cursor: pointer;
    border-radius: 10px;
  }
}
.search-box {
  margin-bottom: 20px;
}
.search-box .search-bar {
  display: block;

  padding: 15px;

  color: #2b2b2b;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.suntime {
  display: flex;
  justify-content: center;

  .sun_starting {
    padding: 5px 50px;
  }
  .sun_ending {
    padding: 5px 50px;
  }
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 0px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  .w1 {
    display: flex;
    justify-content: space-around;
  }
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  font-style: bold;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
</style>
