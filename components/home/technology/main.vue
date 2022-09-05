<template>
  <div class="font-mono text-blue-900">
    <div id="technology" class="md:container md:mx-auto md:py-24 py-8 mx-8">
      <div
        class="grid grid-cols-4 space-y-12 place-items-center reveal items-end"
      >
        <img class="w-16 hover:scale-125" :src="sel" alt="Selenium" />
        <img class="w-16 hover:scale-125" :src="python" alt="Python" />
        <img class="w-16 hover:scale-125" :src="github" alt="Github" />
        <img class="w-16 hover:scale-125" :src="js" alt="Javascript" />
        <img class="w-16 hover:scale-125" :src="pup" alt="Puppeteer" />
        <img class="w-16 hover:scale-125" :src="html" alt="HTML5" />
        <img class="w-16 hover:scale-125" :src="css" alt="CSS" />
        <img class="h-16 hover:scale-125" :src="cy" alt="Cypress.io" />
        <img class="w-16 hover:scale-125" :src="nuxt" alt="Nuxt" />
        <img class="w-16 hover:scale-125" :src="react" alt="React" />
        <img class="w-16 hover:scale-125" :src="node" alt="Node" />
        <img class="w-16 hover:scale-125" :src="php" alt="PHP" />
        <img class="w-16 hover:scale-125" :src="lar" alt="Laravel" />
        <img class="w-16 hover:scale-125" :src="vue" alt="Vue" />
        <img class="w-16 hover:scale-125" :src="wp" alt="Wordpress" />
        <img class="w-16 hover:scale-125" :src="cuc" alt="Cucumber" />
      </div>

      <div
        class="md:my-24 my-16 reveal md:flex block lg:space-x-36 md:space-x-16"
      >
        <div class="">
          <h1 class="md:text-7xl mb-6 md:mb-0 text-4xl font-bold">
            Adaptable & Versatile
          </h1>
        </div>
        <div class="text-xl leading-loose">
          <p class="">
            We work with the most popular web technologies in the industry, and
            are comfortable with the most widely used automation frameworks. No
            matter what tech stack your company utilizes, and which automation
            framework you need, we can provide top quality service If you'd like
            to see a small demo of some of our tests, you can view our
            <a
              class="text-green-400"
              href="https://github.com/sstoyanovich32/automation-demo"
              >github repository</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sel from "./selenium.png";
import python from "./python.png";
import github from "./github.png";
import js from "./javascript.png";
import pup from "./puppeteer.png";
import cy from "./cypress.png";
import html from "./html5.png";
import css from "./css.png";
import nuxt from "./nuxt.png";
import react from "./react.png";
import node from "./node.png";
import php from "./php.png";
import lar from "./laravel.png";
import vue from "./vue.png";
import wp from "./wordpress.png";
import cuc from "./cucumber.svg";
</script>
