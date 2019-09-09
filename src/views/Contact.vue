<template>
  <div class="contact container mx-auto">
    <h1 class="mt-3">Get updates on progress!</h1>
    <iframe class="mx-auto" style="width: 100%; height: 600px;" src="https://cdn.forms-content.sg-form.com/5795dfc8-c178-11e9-a248-a2de2e597da3"/>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CardSection from '../components/CardSection.vue';

export default {
  name: "Contact",
  components: {
    Carousel,
    CardSection
  }
};
</script>
