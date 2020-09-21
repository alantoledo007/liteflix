<template>
  <div class="">
    <Navbar />
    <NowPlaying />
    <ComingSoon />
    <Populars />
    <MyMovies />
    <Modal />
  </div>
</template>

<script>
// @ is an alias to /src
import NowPlaying from "@/components/NowPlaying";
import ComingSoon from "@/components/ComingSoon";
import Populars from "@/components/Populars";
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";;
import MyMovies from "@/components/MyMovies";

export default {
  name: "Home",
  components: {
    NowPlaying,
    ComingSoon,
    Populars,
    Navbar,
    Modal,
    MyMovies
  }
};
</script>