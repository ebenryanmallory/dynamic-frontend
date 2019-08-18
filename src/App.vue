<template>
  <div id="app">
    <Nav />
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </p>
    <router-view></router-view>
    <Carousel />
    <CardSection />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Carousel from './components/Carousel.vue';
// import slickCarousel from './components/SlickCarousel.vue';
import CardSection from './components/CardSection.vue';
import Footer from './components/Footer.vue';
import HeapClient from 'heapanalytics-client';

const heap = new HeapClient('3289103548')

export default {
  name: 'app',
  components: {
    Nav,
    Carousel,
    // slickCarousel,
    CardSection,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
