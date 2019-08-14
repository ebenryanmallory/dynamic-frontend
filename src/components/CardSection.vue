<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Next generation wearable robotics</h1>
      <div class="w-full mb-4">	
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="https://blog.dynamicmomentum.org/blog/creating-an-exoskeleton-hardware-platform/" target="_blank" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">Primary</p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">Open source hardware</div>
            <p class="text-gray-800 text-base px-6 mb-5">
              By open sourcing the hardware design like software, community contribution and providing a conformed baseline platform for building are possible. 
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-start">
            <button class="mx-auto hover:underline gradient text-black-700 font-bold rounded-full my-6 py-4 px-8 shadow-lg"><a href="https://github.com/dynamic-momentum" target="_blank">How can I contribute?</a></button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="https://blog.dynamicmomentum.org/contact/" target="_blank" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">Secondary</p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">Bring more technical solutions to a marketplace.</div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Building upon the open source hardware, various products and solutions can be sold online. These product/solutions will evolve rapidly, and old versions may be abandoned when better technology comes along in a rapidly changing landscape. 
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-center">
            <button class="mx-auto hover:underline gradient text-black-700 font-bold rounded-full my-6 py-4 px-8 shadow-lg"><a href="https://blog.dynamicmomentum.org/contact/" target="_blank">Learn more</a></button>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a href="https://blog.dynamicmomentum.org/contact/" target="_blank" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">Tertiary</p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">Consulting</div>
            <p class="text-gray-800 text-base px-6 mb-5">
              Looking to the future, my vision is to also provide consulting and work individually with people to create custom solutions for unique problems.
            </p>
          </a>
        </div>
        <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div class="flex items-center justify-end">
            <button class="mx-auto hover:underline gradient text-black-700 font-bold rounded-full my-6 py-4 px-8 shadow-lg"><a href="https://blog.dynamicmomentum.org/contact/" target="_blank">Contact Me</a></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardSection',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
