<template>
  <b-navbar type="dark" fixed="top">
    <div :class="'total-backdrop '+showMenu ? 'show' :''"></div>
    <button class="menu-button" @click="toggleMenu">
      <img src="img/menu.svg"
            class="menu">
    </button>
    <div :class="showMenu ? 'toggle ':''+' bp-gradient '+navbarBackground"></div>
    <b-container class="px-3">
      <b-navbar-brand :class="showMenu ? 'toggle' : ''" href="#">
        <a href="#">
          <img
            width="95"
            height="27"
            src="img/liteflix.png"
            srcset="img/liteflix@2x.png 2x, img/liteflix@3x.png 3x"
            class="liteflix"
          />
        </a>
      </b-navbar-brand>

      <b-collapse :class="showMenu ? 'show' : ''" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" active>Inicio</b-nav-item>
          <b-nav-item href="#">Series</b-nav-item>
          <b-nav-item href="#">Películas</b-nav-item>
          <b-nav-item href="#" v-show="showMenu === false">Agregados recientemente</b-nav-item>
          <b-nav-item href="#">Mi lista</b-nav-item>
          <b-button class="btn-danger btn-plus" v-b-modal.add-modal href="#">
            <img
                    src="/img/plus.svg"
                    class="plus"
                  />
            <span>Agregar película</span>
          </b-button>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Niños</b-nav-item>
          <b-nav-item href="#">
            <img src="img/bell.png" srcset="img/bell@2x.png 2x, img/bell@3x.png 3x" class="bell" />
            <span v-if="showMenu === true"> Novedades</span>
          </b-nav-item>
          <b-nav-item href="#" class="avatar-link">
            <span class="oval rounded-circle">
              <img src="/img/fill-1_2-rec.png" class="fill-1" />
            </span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      navbarBackground: 'navbar-litebox',
      showMenu: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if(window.scrollY > 0){
        this.navbarBackground = 'navbar-litebox bg-black';
      }else{
        this.navbarBackground = 'navbar-litebox';
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../custom-vars.scss';
$vibrant-blue: #003bff;

.plus {
  width: 15.9px;
  height: 15px;
}


.bp-gradient{
  transition: all ease-in .3s;
  z-index:-1;
  position: absolute;
  background: linear-gradient(to bottom, #111111 50%, #000000);
  opacity: 0;
  left:0;
  right:0;
  top:0;
  height: 100%;
}

.bp-gradient.toggle{
  @media (max-width: 500px) {
    display: none;
  }
}

.avatar-link{
  @media (max-width: 1000px) {
    display: none;
  }
}

.nav-item {
  color:white;
}

.btn-plus{
  border-radius: 20px;
  border-color: $red;
  width: 40px;
  height: 40px;
  text-align: left;
  transition: all ease-in .2s;
  &:hover{
    background-color: $red;
    border-color: $red;
    width: 183px;
    span{
      opacity: 1;
      display: inline-block;
    }
    @media (max-width: 1000px){
      width: 100%;
    }
  }
  @media (max-width: 1000px){
    background-color: $red;
    border-color: $red;
    margin-top:15px;
    width: 100%;
  }
}
@keyframes show {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.btn-plus span{
  position: absolute;
  margin-left: 4px;
  font-size: 16px;
  font-family: 'Montserrat';
  display: none;
  animation-name: show;
  animation-duration: .3s;
  @media (max-width: 1000px){
    opacity: 1;
    display: inline-block;
  }
}

.bp-gradient.bg-black{
  opacity: 1;
}

.bell {
  width: 14px;
  height: 16px;
  object-fit: contain;
}

.fill-1 {
  opacity: 0.6;
  width: 13px;
  height: 13px;
  margin: auto;
  filter: invert(100%);
}

.oval {
  display: flex;
  padding: 5px 5px 5px 5px;
  background-color: $vibrant-blue;
}

.total-backdrop.show{
    display: block;
}
.total-backdrop{
  transition: all ease-in .4s;
  display: none;
  position: fixed;
  height: 100vh;
  top:0;
  left:0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.menu-button {
  outline:none;
  display: none;
  background-color: transparent;
  box-sizing: border-box;
  padding: 5px;
  z-index: 100;
  border:none;
  @media (max-width: 1000px) {
    position: fixed;
    display: block;
  }
}

.menu{
  width: 21px;
  height: 13px;
  object-fit: contain;
}



.nav-link.active{
  font-weight: bold;
}
.nav-link{
  font-size: 14px;
}
.navbar {
  min-height: 84px;
  @media (max-width: 500px) {
    min-height: 50px;
  }
}
.navbar-brand{
  margin-bottom: 21px;
  transition: all ease-in .4s;
}

.navbar-brand.toggle{
  margin-left: 20px;
  z-index: 100;
}

.navbar-collapse {
  transition: all ease-out .2s;
  @media (max-width: 1000px) {
    position: fixed !important;
    background-color: #000;
    top:0;
    left:-228px;
    width: 228px;
    display: flex !important;
    flex-direction: column !important;
    padding: 15px;
    height:100vh;
  }
}

.navbar-collapse.show {
  left: 0;
}

.navbar-nav{
  @media (max-width: 1000px) {
    margin-top:119px;
    display: flex !important;
    flex-direction: column !important;
    width: 100%;
  }
}
.navbar-brand{
  @media (max-width: 1000px) {
    margin: auto;
  }
}

.navbar-nav .nav-item{
  @media (max-width: 1000px) {
    width: 100%;
    border-bottom: 1px solid #222;
  }
}
</style>