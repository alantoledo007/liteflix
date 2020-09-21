<template>
  <b-col class="col-movie" md="6" lg="3" xs="12">
    <b-card class="border-0 rounded-0 movie-card bg-white">

      <div class="cover-image">
        <img :src="'https://image.tmdb.org/t/p/w300/' +movie.details.images.posters[1].file_path" alt="" />
      </div>
      <div class="movie-card-body">
      <div class="data d-flex">
        <div class="d-flex justify-content-end w-100">
          <a href="#">
            <img src="/img/add-list.png"
                srcset="/img/add-list@2x.png 2x,
                          /img/add-list@3x.png 3x"
                class="Add-List">
          </a>
          <a href="#" class="Rectangle">
            <img src="/img/like.svg"
                class="Fill-1">
          </a>
        </div>
        <a href="#">
          <img src="/img/play.png"
          class="play">
        </a>
        <div class="text-white movie-info w-100">
          <h5 class="mb-0">{{movie.title}}</h5>
          <p class="mb-0">
            <span>98% Coincidencia </span>
            <span class="liteflix-badge">+16</span>
            <span>
            {{ movie.details.runtime}}
            </span>
          </p>
          <p class="mb-0">{{ movie.details.genres[0].name }}</p>
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
  name: "ComingSoonCard",  
  props: ["movie"]
};
</script>

<style lang="scss" scoped>

.Fill-1 {
  width: 15px;
  height: 14px;
  margin-left: 8px;
  object-fit: contain;
}

.play {
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-top: 10px;
}



.Rectangle {
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: solid 1px var(--white);
}

.Add-List {
  width: 32px;
  height: 32px;
  object-fit: contain;
  margin-right: 10px;
}

.arrow {
  margin-top: 31px;
  width: 42.7px;
  height: 21.4px;
  object-fit: contain;
}

.data{
  opacity: 0;
  transition: ease-in .2s;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  flex-direction: column;
  justify-content: start;
  justify-items: center;
  align-items: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.9) 50%);
  &:hover{
    opacity: 1;
  }
  @media(max-width: 500px) {
    
    height: 200px;
  }
}
.movie-card{
  height: 155px;
  z-index: 1;
  @media(max-width:500px) {
    height: 200px;
  }
}

.liteflix-badge {
  width: 35px;
  height: 16px;
  border-radius: 9.5px;
  box-sizing: border-box;
  padding: 2px 8px 2px 8px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2)
}

.movie-card-body{
  position: absolute;
  left: 0;
  right: 0;
  top:0
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
  align-items: flex-end;
  justify-content: center;
}

.cover-image img{
  width: 100%;
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
  margin-bottom: 10px;
}
</style>