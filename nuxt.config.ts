// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        "@/assets/css/style.css",
    ],
    modules: [
        "@nuxtjs/tailwindcss",
        "@tresjs/nuxt",
        "@nuxtjs/eslint-module",
        "@davestewart/nuxt-scrollbar",
        "nuxt-icon",
        "@nuxt/image",
        "@vueuse/nuxt",
    ],
    image: {
        dir: "assets/images",
    },
    app: {
        pageTransition: { name: "slide-right", mode: "out-in" },
        head: {
            htmlAttrs: {
                lang: "en",
            },
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1.0",
            title: "Edwin Baumann",
            meta: [
                { name: "title", content: "Edwin Baumann - Portfolio" },
                {
                    name: "description",
                    content: "Edwin Baumann is a Programmer with a focus on Game Development",
                },
            ],
            link: [
                { rel: "icon", type: "image/svg+xml", href: "edwin-baumann-logo.svg" },
            ],
        },
    },
});
