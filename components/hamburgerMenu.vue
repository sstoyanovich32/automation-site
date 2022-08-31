<template>
  <div class="mx-8">
    <div class="flex justify-between">
      <div>Logo</div>
      <svg
        @click="showMenu = !showMenu"
        class="fill-white h-8 w-8"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
          fill-rule="nonzero"
        />
      </svg>
    </div>

    <div class="flex flex-col space-y-4 mt-6 text-lg" v-show="showMenu">
      <div>
        <p
          class="cursor-pointer"
          @click="
            scrollTo('#who');
            showMenu = false;
          "
        >
          Who We are
        </p>
      </div>
      <div>
        <p
          class="cursor-pointer"
          @click="
            scrollTo('#problems');
            showMenu = false;
          "
        >
          The Problems
        </p>
      </div>
      <div>
        <p
          class="cursor-pointer"
          @click="
            scrollTo('#solutions');
            showMenu = false;
          "
        >
          Solutions
        </p>
      </div>

      <div>
        <p
          class="cursor-pointer"
          @click="
            scrollTo('#technology');
            showMenu = false;
          "
        >
          Technology
        </p>
      </div>
      <div>
        <p
          class="cursor-pointer"
          @click="
            scrollTo('#contact');
            showMenu = false;
          "
        >
          Contact
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { scrollTo } = useNav();
const showMenu = ref(false);
</script>
