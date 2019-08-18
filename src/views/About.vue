<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CardSection />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CardSection from '../components/CardSection.vue';

export default {
  name: "About",
  components: {
    Carousel,
    CardSection
  }
};
</script>
