<template>
  <div class="bg-black py-12">
    <div class="lg:flex block md:mx-auto md:container mx-6">
      <div class="lg:w-1/2 w-full text-green-400 font-mono">
        <h1 class="md:text-8xl text-4xl font-bold">
          Providing Top Quality Automation For All Products
        </h1>
        <p id="text" class="mt-8 text-lg">
          {{ text }}
          <span class="bg-green-400 animate-[pulse_1s_ease-in-out_infinite]"
            >&nbsp</span
          >
        </p>

        <div class="mt-6 text-lg uppercase font-bold flex flex-col space-y-4">
          <p class="cursor-pointer" @click="scrollTo('#who')">&rarr; About</p>
          <p class="cursor-pointer" @click="scrollTo('#solutions')">
            &rarr; Our Services
          </p>
        </div>
      </div>
      <div class="lg:w-1/2 w-full mt-8 lg:mt-0">
        <homeGears />
      </div>
    </div>
  </div>
</template>
<script setup>
const { scrollTo } = useNav();

const sentence = ref(
  "With over 15 years of combined industry experience, we provide customized testing plans and expertise " +
    "in all areas of QA Automation"
);
const position = ref(0);
const text = ref("");

function type() {
  // var rect = document.querySelector("#text").getBoundingClientRect();

  if (position.value < sentence.value.length) {
    text.value += sentence.value.charAt(position.value);
    position.value++;
    setTimeout(type, 10);
  }
}

onMounted(() => {
  type();
  // window.addEventListener("scroll", type);
});
// onUnmounted(() => window.removeEventListener("scroll", type));
</script>
<style>
@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
