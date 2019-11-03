<template>
  <footer class="bg-white">
    <div class="container mx-auto  px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <a class="text-yellow-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="/"> 
            <svg width="60px" height="42px" viewBox="0 0 60 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="41.2410248%" y1="41.2940182%" x2="100%" y2="70.4582556%" id="linearGradient-1">
                        <stop stop-color="#FFEA00" offset="0%"></stop>
                        <stop stop-color="#2F00B3" stop-opacity="0.347429801" offset="35.0794973%"></stop>
                        <stop stop-color="#2F00B3" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g id="shape" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M26.8214633,33.3096899 C24.187208,34.8410398 21.1255223,35.7180157 17.8590078,35.7180157 C7.99575016,35.7180157 0,27.7222655 0,17.8590078 C0,7.99575016 7.99575016,0 17.8590078,0 C24.3636031,0 30.056,3.477435 33.1785352,8.67464179 C35.812792,7.14329436 38.8744777,6.26631854 42.1409922,6.26631854 C52.0042498,6.26631854 60,14.2620687 60,24.1253264 C60,33.988584 52.0042498,41.9843342 42.1409922,41.9843342 C35.6363958,41.9843342 29.9439982,38.5068981 26.8214633,33.3096899 Z M17.8590078,24.9086162 C21.752399,24.9086162 24.9086162,21.752399 24.9086162,17.8590078 C24.9086162,13.9656166 21.752399,10.8093995 17.8590078,10.8093995 C13.9656166,10.8093995 10.8093995,13.9656166 10.8093995,17.8590078 C10.8093995,21.752399 13.9656166,24.9086162 17.8590078,24.9086162 Z M42.1409922,30.8616188 C46.0343834,30.8616188 49.1906005,27.7054016 49.1906005,23.8120104 C49.1906005,19.9186193 46.0343834,16.7624021 42.1409922,16.7624021 C38.247601,16.7624021 35.0913838,19.9186193 35.0913838,23.8120104 C35.0913838,27.7054016 38.247601,30.8616188 42.1409922,30.8616188 Z" id="Combined-Shape" fill="url(#linearGradient-1)"></path>
                </g>
            </svg>
          </a>
        </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Links</p>
                <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="https://blog.dynamicmomentum.org/blog/category/faq/" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">FAQ</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <router-link to="/user-signup" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">User Signup</router-link>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <router-link to="/sponsorship" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">Corporate Sponsorship</router-link>
                    </li>
                </ul>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Social</p>
                <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="https://www.youtube.com/channel/UCEIK7r1u114stJE5NdlN0Qw" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">Youtube</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="https://github.com/dynamic-momentum" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">Github</a>
                    </li>
                </ul>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">About</p>
                <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="https://www.patreon.com/user?u=22638294" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">Patreon</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="https://blog.dynamicmomentum.org/about/" target="_blank" class="no-underline hover:underline text-gray-800 hover:text-yellow-500">About Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
    export default {
    name: 'Footer',
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
