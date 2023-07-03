<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="container p-6 mx-auto">
      <div class="lg:flex">
        <div class="w-full -mx-6 lg:w-2/5">
          <div class="px-6">
            <a href="#">
              <span class="brand_name text-2xl font-bold text-blue-700"
                >Microbiome</span
              >
            </a>

            <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400"></p>
          </div>
        </div>

        <div class="mt-6 lg:mt-0 lg:flex-1">
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div>
              <button
                class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#"
              >
                <router-link to="/">Microbiome</router-link>
              </button>
            </div>
            <div>
              <button
                class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#"
              >
                <router-link to="/WhyMicrobiomeView">WhyMicrobiome</router-link>
              </button>
            </div>
            <div>
              <button
                class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
                href="#"
              >
                <router-link to="/about">Our Team </router-link>
              </button>
            </div>

            <div>
              <button
                class="text-gray-700 transition-colors duration-300 transform lg:mx-8 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              >
                <router-link to="/ContactUsView">ContactUs</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
