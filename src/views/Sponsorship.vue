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
          <label for="advertising" class="mb-4 text-left">Would you like to advertise on my YouTube channel?</label>
          <select name="advertising" id="advertising" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <option value="YouTube options:" selected="" disabled="" >YouTube options:</option>
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
          <input type="hidden" name="_next" value="https://dynamicmomentum.org/"/>
          <input type="submit" value="Send" class="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sponsorship"
};
</script>
