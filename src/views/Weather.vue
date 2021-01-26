<template>
  <div class="weather">
    <WeatherComp />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WeatherComp from "@/components/weather/WeatherComp.vue"; // @ is an alias to /src

@Options({
  components: {
    WeatherComp: WeatherComp,
  },
})
export default class Weather extends Vue {}
</script>
