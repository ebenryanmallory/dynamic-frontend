<template>
    <nav id="header" class="fixed w-full z-30 top-0 text-white flex items-center justify-between flex-wrap p-6 bg-white text-black">
		<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 text-black">
			<div class="flex items-center flex-shrink-0 mr-6">
				<a href="https://blog.dynamicmomentum.org/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-3">
					Blog
				</a>
      			<router-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-3">Contact</router-link>
			</div>
			<div class="block lg:hidden">
				<button v-on:click="toggleMobileMenu" id="nav-menu" class="flex items-center px-3 py-2 rounded text-black-300 hover:text-black-600">
					<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			</div>
			<div class="nav-content hidden w-full flex-grow lg:flex lg:items-center lg:w-auto">
				<div class="text-sm inline-block lg:flex-grow">
					<a href="https://dynamicmomentum.org/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4">
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
			</div>
			<div class="nav-content hidden w-full block lg:flex lg:items-center lg:w-auto">
				<div class="text-sm lg:flex-grow lg:block">	
					<a href="https://www.patreon.com/user?u=22638294" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-gray-300 hover:text-orange-700 hover:bg-orange-100 mt-4 lg:mt-0">Patreon</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
	name: 'Nav',
	methods: {
		toggleMobileMenu: function(e) {
			var selectedNavContent = document.querySelectorAll('.nav-content')
			selectedNavContent[0].classList.toggle('hidden');
			selectedNavContent[1].classList.toggle('hidden');
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
	#nav-menu:focus {
		outline: none;
	}
</style>
