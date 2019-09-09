<template>
  <div class="contact container mx-auto">
    <h1 class="mt-40 mb-3">Partner with me on this journey!</h1>
    <div class="w-full max-w-lg mx-auto">
      <form action="https://formspree.io/ebenryanmallory@gmail.com" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input type="text" name="name" placeholder="Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <input type="email" name="_replyto" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <label for="advertising">Advertising on my YouTube channel</label>
          <select name="advertising" id="advertising" required="">
            <option value="Choose" selected="" disabled="">Choose</option>
            <option value="1">Logo placement (powered by message)</option>
            <option value="3">Product placement</option>
            <option value="5">15/30 second spot for existing video</option>
            <option value="7">15/30 second spot + content creation</option>
          </select>
        </div>
        <div class="mb-4">
          <textarea name="message" placeholder="Tell me a bit about your organization" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mb-4">
          <input type="submit" value="Send" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        </div>
      </form>
    </div>
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
