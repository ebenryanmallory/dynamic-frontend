<template>
  <div class="home">
    <Carousel />
    <CardSection />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CardSection from '../components/CardSection.vue';

export default {
  name: "home",
  components: {
    Carousel,
    CardSection
  }
};
</script>
