<template>
  <div class="now-playing d-flex">
      <div class="cover-image">
        <div class="backdrop"></div>
        <img :src="'https://image.tmdb.org/t/p/original' + nowPlaying.backdrop_path" />
      </div>
        <b-container class="now-playing-content">
          <b-row class="align-items-center">
            <b-col md="6" sm="12">
              <p class="text-liteflix text-uppercase">
                Original de
                <b>Liteflix</b>
              </p>
              <h1 class="title">{{nowPlaying.title}}</h1>
              <div class="mt-4">
                <button class="btn btn-liteflix border-0 mr-4">
                  <img
                    src="/img/play.svg"
                    class="play"
                  />
                  Reproducir
                </button>
                <button class="btn-desktop btn btn-liteflix border-0">
                  <img
                    src="/img/plus.svg"
                    class="plus"
                  />
                  Mi Lista
                </button>
                <a href="#" class="btn-phone-list">
                  <img
                    src="/img/add-list.svg"
                    class="Add-list"
                  />
                </a>
              </div>
              <div class="mt-4">
                <h6>{{ nowPlaying.caption }}</h6>
                <p class="overview">{{ nowPlaying.overview }}</p>
              </div>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "NowPlaying",
  created() {
    this.getNowPlaying();
  },
  computed: {
    ...mapState(["nowPlaying"])
  },
  methods: {
    ...mapActions(["getNowPlaying"])
  }
};
</script>


<style lang="scss" scoped>
$white-20: rgba(255, 255, 255, 0.2);
$white: #ffffff;

.Add-List {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.play {
  width: 15px;
  height: 18px;
  object-fit: none;
}
.plus {
  width: 15px;
  height: 18px;
  object-fit: contain;
}
.title {
  text-align: left;
  max-width: 392px;
  font-size: 110px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.82;
  letter-spacing: normal;
  color: $white;
}


.btn-liteflix {
  color: $white;
  width: 160px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #000000;
    color: $white;
  }
  &:focus,
  &:active {
    outline: none !important;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2);
    background-color: #000000;
  }
}

.overview,
.text-liteflix {
  color: $white;
}

.overview {
  font-size: 18px;
  height: 168px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  @media(max-width: 500px){
    display: none;
  }
}

.btn-desktop{
  @media(max-width: 500px){
    display: none;
  }
}
.btn-phone-list{
  display: none;
  @media(max-width: 500px){
    display: inline-block;
    position: absolute;
    right: 15px;
  }
}

.text-liteflix {
  font-size: 24px;
}

.now-playing-content{
  margin-top: 156px;
  @media (max-width: 1000px) {
    text-align: center;
  }
}

.now-playing{
  height: 100vh;
  @media (max-width: 500px) {
    height: 70.25vh;
  }
}
.backdrop {
  position: absolute;
  top: 0;
  left:0;
  right:0;
  height: 100%;
  z-index: 20;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2) 77%, #000000);
  @media (max-width: 500px) {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 77%, #000000);
  }
}

.cover-image {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top:0;
  right:0;
}

.cover-image img{
  height: 760px;
  @media (max-width: 500px) {
    height: 545px;
  }
}
</style>