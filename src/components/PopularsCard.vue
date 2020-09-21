<template>
  <b-col cols="6" md="3" class="col-movie">
    <b-card class="border-0 rounded-0 movie-card bg-white">

      <div class="cover-image">
        <img :src="'https://image.tmdb.org/t/p/h632/' +movie.details.images.posters[1].file_path" alt="" />
      </div>
      <div class="movie-card-body">
      <div class="data">
        <a href="#">
          <img src="/img/play.png"
          class="play">
        </a>
        <div class="w-100 d-flex">
          <div class="text-white movie-info w-100">
            <h5 class="mb-0">{{movie.title}}</h5>
            <p class="mb-0">
              <span>98% Coincidencia </span>
              <br/>
              <span class="liteflix-badge">+16</span>
              <span>
              {{ movie.details.runtime}}
              </span>
            </p>
            <p class="mb-0">{{ movie.details.genres[0].name }}</p>
          </div>
          <a href="#" class="Rectangle">
            <img src="/img/like.svg"
                class="Fill-1">
          </a>
        </div>
        <a class="m-auto" href="#">
          <img src="/img/arrow.png"
              srcset="/img/arrow@2x.png 2x,
                /img/arrow@3x.png 3x"
              class="arrow">
        </a>
      </div>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "ProductCard",  
  props: ["movie"]
};
</script>

<style lang="scss" scoped>
$white: #fff;
.play {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-top: 114px;
  margin-bottom:7px;
}

.Fill-1 {
  width: 14px;
  height: 15px;
  margin-left: 7px;
}

.Rectangle {
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: solid 1px $white;
}

.Add-List {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-right: 10px;
}

.arrow {
  margin-top:20px;
  margin-bottom: 21px;
  width: 37px;
  height: 18px;
  object-fit: contain;
}

.data{
  opacity: 0;
  transition: ease-in .2s;
  box-sizing: border-box;
  padding: 12px 12px 0 12px;
  display: flex;
  flex-direction: column;
  box-sizing: none;
  margin-top: 220px;
  height: 287px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000 82%);
}
.movie-card{
  height: 507px;
  z-index: 1;
}

.liteflix-badge {
  width: 35px;
  height: 16px;
  border-radius: 9.5px;
  box-sizing: border-box;
  padding: 1px 8px 1px 8px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2)
}

.movie-card-body{
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  height: 100%;
  &:hover > .data{
      opacity: 1;
    }
  
}

.cover-image{
  right: 0;
  left: 0;
  top:0;
  height: 100%;
  position: absolute;
  overflow: hidden;
  z-index:-1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cover-image img{
  height: 100%;
}

.movie-info{
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.movie-info h5{
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat";
}
.movie-info p{
  font-size: 12px;
}

.col-movie{
  @media(max-width: 500px){
    margin-bottom: 0px;
    padding:5px;
  }
}
</style>