<template>
  <section class="relative text-gray-600 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
      <div
        class="relative flex items-end justify-start p-10 overflow-hidden bg-white-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10"
      >
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_qxmkn9ou.json"
          background="transparent"
          speed="1"
          style="width: 100%; height: 100%"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div
        class="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
      >
        <h2 class="mb-1 text-lg font-medium text-blue-900 title-font">
          Contact us
        </h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          You didn't find your answer in something? We are here to help!
        </p>
        <div class="relative mb-4">
          <label for="name" class="text-sm leading-7 text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Name"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="me@gmail.com ?"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="How can we help ?"
          ></textarea>
        </div>
        <button
          class="px-6 py-2 text-lg text-white bg-blue-600 border-0 rounded focus:outline-none hover:bg-blue-600"
        >
          Send
        </button>
        <p class="mt-3 text-xs text-gray-500">
          To get in touch with us you can use chat or email. To solve tickets
          faster, please use your account e-mail address.
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactUs",
};
</script>
