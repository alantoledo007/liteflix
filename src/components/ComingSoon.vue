<template>
  <b-container class="movies-container">
    <b-row>
      <b-col>
        <h2 class="text-white">Próximamente</h2>
        <b-row>
          <ComingSoonCard v-for="item of comingSoon" :movie="item" :key="item.id" />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapState, mapActions} from "vuex";
import ComingSoonCard from "./ComingSoonCard";

export default {
  name: "ComingSoon",
  components: {
    ComingSoonCard
  },
  mounted() {
    this.getComingSoon();
  },
  computed: {
    ...mapState(["comingSoon"])
  },
  methods: {
    ...mapActions(["getComingSoon"])
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