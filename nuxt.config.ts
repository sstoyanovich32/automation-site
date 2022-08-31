import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
    alias: {
        'images': resolve(__dirname, './public/images'),
      }
})
