<template>
  <b-container class="movies-container" v-if="localMovies !== null && localMovies.length > 0">
    <b-row>
      <b-col>
        <h2 class="text-white">Mis Peículas</h2>
        <b-row>
          <MyMoviesCard v-for="item of localMovies" :movie="item" :key="item.id" />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapState, mapActions} from "vuex";
import MyMoviesCard from "./MyMoviesCard";

export default {
  name: "MyMovies",
  components: {
    MyMoviesCard
  },
  mounted() {
    this.getLocalMovies();
  },
  computed: {
    ...mapState(["localMovies"])
  },
  methods: {
    ...mapActions(["getLocalMovies"])
  }
};
</script>

<style scoped>

.movies-container{
  margin-bottom: 30px;
}

h2 {
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: 20.3px;
  margin-top: 17px;
}
</style>