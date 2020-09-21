<template>
  <b-container class="movies-container">
    <b-row>
      <b-col>
        <h2 class="text-uppercase text-white">Populares de Liteflix</h2>
        <b-row>
          <PopularsCard v-for="item of populars" :movie="item" :key="item.id" />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PopularsCard from "./PopularsCard";
import {mapActions, mapState} from 'vuex';
export default {
  name: "Populars",
  components: {
    PopularsCard
  },
  mounted() {
    this.getPopulars();
  },
  computed: {
    ...mapState(["populars"])
  },
  methods: {
    ...mapActions(["getPopulars"])
  }
};
</script>

<style lang="scss" scoped>
h2{
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 9.3px;
}
</style>