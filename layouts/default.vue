<template>
  <div class="bg-gray-100 min-h">
    <Title>{{ title }}</Title>
    <nav
      id="navBar"
      class="bg-black sticky top-0 z-20 text-white"
      :class="navHeight"
    >
      <div
        class="text-lg uppercase font-bold font-mono xl:mx-40 lg:mx-24 hidden lg:block"
      >
        <div class="mx-8 flex items-center justify-between">
          <div>
            <div>logo</div>
          </div>
          <div>
            <div class="flex space-x-8">
              <div>
                <p class="cursor-pointer" @click="scrollTo('#who')">
                  Who We are
                </p>
              </div>
              <div>
                <p class="cursor-pointer" @click="scrollTo('#problems')">
                  The Problems
                </p>
              </div>
              <div>
                <p class="cursor-pointer" @click="scrollTo('#solutions')">
                  Solutions
                </p>
              </div>

              <div>
                <p class="cursor-pointer" @click="scrollTo('#technology')">
                  Technology
                </p>
              </div>
              <div>
                <p class="cursor-pointer" @click="scrollTo('#contact')">
                  Contact
                </p>
              </div>
            </div>
            <div
              :style="{ width: progressPercent }"
              class="bg-green-500 h-1 mt-4"
            ></div>
          </div>
        </div>
      </div>
      <div class="lg:hidden">
        <HamburgerMenu />
      </div>
    </nav>
    <slot />
  </div>
</template>
<script setup>
const { scrollTo } = useNav();
const title = useState("title", () => "Peritum Automation Solutions");
let navHeight = ref("py-14");
let progressPercent = ref("0%");
function adjustCSS() {
  navHeight.value =
    document.documentElement.scrollTop >= 100 ? "py-6" : "py-14";
  reveal();
  progressPercent.value =
    (window.scrollY / document.documentElement.scrollHeight) * 100 + "%";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 20;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", adjustCSS);
  reveal();
});
onUnmounted(() => window.removeEventListener("scroll", adjustCSS));
</script>

<style>
.reveal {
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}

.selected {
  color: #4ade80;
}
</style>
