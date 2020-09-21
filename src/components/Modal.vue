<template>
  <b-modal id="add-modal" size="lg" @hide="cleanForm" centered hide-header hide-footer>
    <div :class="'modal-bg ' + modalBackground"></div>
    <b-button variant="link" class="btn-close" block @click="() => { $bvModal.hide('add-modal')}">x</b-button>
    <div v-if="success === true">
      <img src="img/liteflix.svg"
          class="liteflix">

          <p class="text-white text-on-success">
            <b class="text-success-bg">Felicitaciones!</b>
            <br  class="m-0 p-0" />
            <b>{{ title }}</b> fue correctamente subido 
            a la categoría <b>{{ genreName }}</b>
          </p>


          <button class="btn-liteflix-modal btn-liteflix-close" @click="() => { $bvModal.hide('add-modal')}">
            Cerrar
          </button>
    </div>
    <form v-if="success  === false" enctype="multipart/form-data" @submit="handleSubmit">
      <div>
        <div class="custom-file">
          <input type="file" @change="onFileChange" class="file-input" id="customFile">
          <label class="file-label" for="customFile">
            <span>
              <span class="text-primary">
                <img src="img/clip.png"
                    class="clip">
                <b>Agregar archivo</b>
              </span>
              o arrastrarlo y soltarlo aquí
            </span>
          </label>
        </div>
      </div>
      <b-row>
        <b-col md="6">
          <label class="input-label text-uppercase">Nombre de la película</label>
          <input type="text" v-model="title" class="custom-input" />
        </b-col>
        <b-col>
          <label class="input-label text-uppercase">Categoría</label>
          <select v-model="genre" class="custom-input custom-input-select">
              <option v-for="item of genres" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
        </b-col>
      </b-row>
      <div class="w-100 text-center">
          <button type="submit" :disabled="!canSave" class="btn-liteflix-modal">Subir Película</button>
      </div>
    </form>
  </b-modal>
</template>

<script>
import { mapState, mapActions} from 'vuex';

export default {
  name: "Modal",
  data() {
    return{
      image: "",
      title: "",
      genre: "",
      genreName: "",
      modalBackground: "bg-white",
      success:false
    }
  },
  created (){
    //let perfData = window.performance.timing;
    this.getGenres();
  },
  computed:{
    ...mapState(['genres']),
    canSave(){
      if(this.image && this.title.length > 2 && this.genre){
        return true;
      }
      return false;
    }
  },
  methods:{
    ...mapActions(['getGenres','setLocalMovie']),
    cleanForm(){
      this.title= "";
      this.genre = "";
      this.image = "";
      this.genreName = "";
      this.success = false;
      this.modalBackground = "bg-white";
    },
    handleSubmit(e) {
      e.preventDefault();
      try {
        let movies = JSON.parse(localStorage.getItem("movies")) || []
        this.genreName = this.genres.find(item => item.id === this.genre).name;
        let newMovie = {
          title: this.title,
          genre: {
            id: this.genre,
            name: this.genreName
          },
          image: this.image
        }
        movies.push(newMovie);
        console.log(movies);
        this.setLocalMovie(newMovie);
        localStorage.setItem("movies", JSON.stringify(movies));
        this.modalBackground="modal-success"
        this.success = true;
      }catch(e){
        console.log(e);
      }
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      console.log(files[0])
      this.createImage(files[0]);
    },
    createImage(file) {
      console.log(file);
      let img = new Image();
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log('gg');
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
      console.log(img)
    }
    
    
  }
};
</script>

<style lang="scss" scoped>
@import '../custom-vars.scss';

.btn-liteflix-modal.btn-liteflix-close{
  width: 192px;
}

.text-on-success{
  font-size: 24px;
  margin-bottom: 51px;
}

.text-success-bg{
  font-size: 32px;
}

.liteflix {
  width: 95px;
  height: 27px;
  object-fit: contain;
  margin-bottom: 44px;
}

.modal-bg{
  border-radius: 10px !important;
  position: absolute;
  left:-35px;
  right:-35px;
  top:-30px;
  bottom: -30px;
  z-index:-10;
  transition: all ease-in-out .3s;

}

.modal-bg.modal-success {
  background-color: #7ed321;
}

.clip {
  position: relative;
  object-fit: contain;
  margin-right: 7px;
}

.options-container{
  height: 200px;
}

.btn-liteflix-modal{
  height: 70px;
  width: 350px;
  border-radius: 35px;
  border:none;
  font-size: 16px;
  color:#fff;
  background: #000000;
  transition: all ease-in .3s;
  &:disabled{
    background-color: #dedede;
    &:hover{
      background-color: #dedede;
    }
  }
  &:focus{
    outline:none;
  }
  &:hover{
    background-color: #111111;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
}

.btn-close{
  font-size: 14px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  position: absolute;
  right: -16px;
  top: -15px;
  padding:0;
  color: #000111;
  &:hover, &:focus{
    text-decoration: none;
    color: #000000;
    box-shadow:none;
  } 

  
}

.custom-input-select{
  &::-ms-expand {
    display: none;
  }
}


.custom-input{
  appearance: none;
  font-size: 16px;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid #9b9b9b;
  border-top: 0;
  width: 100%;
  height: 24px;
  background-color: transparent;
  margin-bottom: 44px;
  transition: all ease-in .2s;
  &:focus{
    outline:none !important;
    border-color: $blue;
  }
}

.custom-file{
  height: 100px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 15px;
  margin-top:0;

}
.file-input{
  opacity: 0;
  position: absolute;
}

.input-label{
  color:#9b9b9b;
  font-size: 12px;
  letter-spacing: 5px;
  font-weight: 500;
  padding: 0px;
}

.file-label{
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px dashed #9b9b9b;
  color: #9b9b9b;
  position: absolute;
  left: 0;
  right:0;
  top:0;
  height: 100%;
  transition: all ease-in .3s;
  &:hover{
    border-color: $blue;
  }
}



</style>