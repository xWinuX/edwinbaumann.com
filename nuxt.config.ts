// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    css: [
        "vue-select/dist/vue-select.css",
        "overlayscrollbars/overlayscrollbars.css",
        "vue-final-modal/style.css",
        "@/assets/css/style.css",
    ],
    imports: {
        dirs: ["stores"],
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@tresjs/nuxt",
        "@nuxtjs/eslint-module",
        "nuxt-icon",
        "@nuxt/image",
        "@vueuse/nuxt",
        "vue3-carousel-nuxt",
        "floating-vue/nuxt",
        "@nuxt/content",
        "@nuxtjs/i18n",
    ],
    i18n: {
        legacy: false,
        locale: "en",
        defaultLocale: "en",
        langDir: "locales/",
        fallbackLocale: "en",
        locales: [
            { code: "en", language: "en-US", file: "en-US.yml" },
            { code: "de", language: "de-CH", file: "de-CH.yml" },
        ],
        strategy: "no_prefix",
    },
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
    compatibilityDate: "2024-09-02",
});
