<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "vuex";
import { key, State } from "../store/";

import { ref, reactive } from "vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore<State>(key); //assiging store
    const storeData = ref<number>(0);

    // // const userData = reactive({ username: store.state.userName });
    // storeData.value = store.state.count;

    // console.log("from store", store.state.count); // typed as number

    return { storeData };
  },
};
</script>
