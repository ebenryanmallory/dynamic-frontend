<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto pt-4 pb-12">
      <div class="carousel relative shadow-2xl bg-white">
        <div class="carousel-inner relative overflow-hidden w-full">
          <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0" style="height:50vh;">
                        <div class="block h-full w-full" style="background: #feebc866">
              <img src="../assets/footsteps.jpg" style="position: absolute; right: 0px;">
              <div class="bg-blue-500 text-white text-left absolute p-16 pt-12" style="max-width:350px;">
                <h1 class="text-xl">Dynamic stability</h1>
                <p>With a focus on balance, the limits of potential for an emerging technology become greatly reduced.</p>
              </div>
            </div>
          </div>
          <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">‹</label>
          <label for="carousel-2" class="next control-1 w-10 h-10 ml-48 md:ml-48 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">›</label>
          <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full" style="background: #feebc866">
              <img src="../assets/blue-legos.jpg" style="position: absolute; right: 0px;">
              <div class="bg-blue-500 text-white text-left absolute p-16 pt-12" style="max-width:350px;">
                <h1 class="text-xl">Modular building</h1>
                <p>A framework for taking an organized approach to solving emerging technology challenges can be adopted from software development principles.</p>
              </div>
            </div>
          </div>
          <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">‹</label>
          <label for="carousel-3" class="next control-2 w-10 h-10 ml-48 md:ml-48 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">›</label> 
          <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
          <div class="carousel-item absolute opacity-0" style="height:50vh;">
            <div class="block h-full w-full" style="background: #feebc866">
              <img src="../assets/blue-pattern.jpg" style="position: absolute; right: 0px;">
              <div class="bg-blue-500 text-white text-left absolute p-16 pt-12" style="max-width:350px;">
                <h1 class="text-xl">Never obsolete</h1>
                <p>With a pragmatic focus on actual usability, I intend to primarily create information and create modular addons to existing solutions in an agile manner.</p>
              </div>
            </div>
          </div>
          <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">‹</label>
          <label for="carousel-1" class="next control-3 w-10 h-10 ml-48 md:ml-48 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 mt-auto">›</label>
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label for="carousel-1" class="carousel-bullet cursor-pointer block text-5xl text-white hover:text-blue-700">-</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-2" class="carousel-bullet cursor-pointer block text-5xl text-white hover:text-blue-700">-</label>
            </li>
            <li class="inline-block mr-3">
              <label for="carousel-3" class="carousel-bullet cursor-pointer block text-5xl text-white hover:text-blue-700">-</label>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Carousel',
    props: {
      msg: String,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
  }
  .carousel-item {
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
  }
  #carousel-1:checked ~ .control-1,
  #carousel-2:checked ~ .control-2,
  #carousel-3:checked ~ .control-3 {
    display: block;
  }
  .carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 6%;
    left: 6.5rem;
    right: auto;
    text-align: center;
    z-index: 10;
  }
  #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
  #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
  #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #2b6cb0;
  }
</style>
