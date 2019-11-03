<template>
  <div class="contact container mx-auto">
    <h1 class="mt-40 mb-3">We are currently seeking users for testing and feedback.</h1>
    <div class="w-full max-w-lg mx-auto">
      <form action="https://formspree.io/ebenryanmallory@gmail.com" method="POST" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input type="text" name="name" placeholder="Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <input type="email" name="_replyto" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-4">
          <textarea name="location" placeholder="Where are you currently located?" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mb-4">
          <textarea name="number" placeholder="Phone number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
          <div class="mb-4">
          <select name="age" id="age" required="" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4">
            <option value="YouTube options:" selected="" disabled="" >Age</option>
            <option value="-18">Age under 18</option>
            <option value="18-45">Age 18 - 45</option>
            <option value="45+">Age 45+</option>
          </select>
        </div>
        <div class="mb-4">
          <textarea name="message" placeholder="Tell me a bit about yourself or your family member" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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
  name: "UserSignup"
};
</script>
