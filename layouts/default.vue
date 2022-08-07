<template>
  <div class="bg-gray-100 min-h">
    <Title>{{ title }}</Title>
    <nav class="bg-black sticky top-0 z-20 text-white" :class="navHeight">
      <div class="text-lg uppercase font-bold font-mono mx-40">
        <div class="mx-8 flex items-center justify-between">
          <div>
            <div>Logo</div>
          </div>
          <div class="flex space-x-8">
            <div>
              <p @click="scrollTo('#who')">Who We are</p>
            </div>
            <div>
              <NuxtLink to="/problems">The Problems</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/solutions">Solutions</NuxtLink>
            </div>

            <div>
              <NuxtLink to="/demo">Demo</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
<script setup>
const title = useState("title", () => "Automation Solutions");
let navHeight = ref("py-14");

function adjustNav() {
  navHeight.value = document.documentElement.scrollTop > 100 ? "py-6" : "py-14";
}

function scrollTo(id) {
  var el = document.querySelector(id);
  window.scrollTo({ top: el.offsetTop - 130, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", adjustNav));
onUnmounted(() => window.removeEventListener("scroll", adjustNav));
</script>

<style>
.router-link-active {
  border-color: white;
  border-bottom-width: 2px;
  padding-bottom: 0.5em;
}
</style>
