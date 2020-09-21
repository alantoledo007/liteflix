import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const API_KEY = '6f26fd536dd6192ec8a57e94141f8b20';
export default new Vuex.Store({
  state: {
    nowPlaying: {},
    comingSoon: [],
    populars: [],
    genres: [],
    localMovies: []
  },
  mutations: {
    setNowPlaying(state, data) {
      state.nowPlaying = data;
    },
    setComingSoon(state, data) {
      state.comingSoon = data;
    },
    setPopulars(state, data) {
      state.populars = data;
    },
    setGenres(state, data) {
      state.genres = data;
    },
    setLocalMovies(state, data){
      state.localMovies = data;
    },
    addLocalMovie(state, data){
      console.log(state)
      state.localMovies.push(data);
    }
  },
  actions: {
    getNowPlaying: async function ({ commit }) {
      let data = await Axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY);
      data = await data.data.results[0];
      commit('setNowPlaying', data);
    },
    getComingSoon: async function ({ commit }) {
      let data = await Axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + API_KEY);
      data = await data.data.results.splice(0, 4);
      
      for (let i = 0; i < data.length;i++) {
        let details = await Axios.get('https://api.themoviedb.org/3/movie/'+data[i].id+'?api_key='+API_KEY + '&append_to_response=images');
        details = await details.data;
        details.runtime = await Math.floor(details.runtime / 60) + 'h ' + (details.runtime % 60) + ' min';
        data[i].details = details;
      }
      console.log(data);
      commit('setComingSoon', data);
    },
    getPopulars: async function ({ commit }) {
      let data = await Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY);
      data = data.data.results.splice(0,4);

      for (let i = 0; i < data.length;i++) {
        let details = await Axios.get('https://api.themoviedb.org/3/movie/'+data[i].id+'?api_key='+API_KEY + '&append_to_response=images');
        details = await details.data;
        details.runtime = await Math.floor(details.runtime / 60) + 'h ' + (details.runtime % 60) + ' min';
        data[i].details = details;
      }

      commit('setPopulars', data);
    },
    getGenres: async function ({commit}) {
      let data = await Axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY);
      data = data.data.genres;
      commit('setGenres',data);
    },
    getLocalMovies: async function ({commit}) {
      let data = await localStorage.getItem('movies');
      data = JSON.parse(data) || [];
      commit('setLocalMovies',data);
    },

    setLocalMovie({commit}, data) {
      commit('addLocalMovie',data);
    }
  },
  modules: {}
});
