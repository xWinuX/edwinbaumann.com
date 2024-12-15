// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "fs";
import path from "path";

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    extends: [
        "node_modules/nuxt-content-assets/cache",
    ],
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
        "nuxt-content-assets",
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
    content: {
        experimental: {
            clientDB: true,
        },
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
    hooks: {
        // This hook is required because nuxt image will not generate the images itself when ssr is disabled
        "prerender:routes": function (ctx) {
            function getImageFiles(folderPath: string) {
                const files: string[] = [];

                function findImageFiles(currentPath: string) {
                    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

                    for (const entry of entries) {
                        const fullPath = path.join(currentPath, entry.name);

                        if (entry.isDirectory()) {
                            findImageFiles(fullPath);
                        } else if (entry.isFile() && (entry.name.toLowerCase().endsWith(".png") || entry.name.toLowerCase().endsWith(".gif"))) {
                            files.push(fullPath);
                        }
                    }
                }

                findImageFiles(folderPath);
                return files;
            }

            const imageFiles = getImageFiles("content/projects");

            if (imageFiles.length > 0) {
                for (const imageFile of imageFiles) {
                    let adjustedPath = imageFile;

                    // Replace backslash with normal slash
                    adjustedPath = adjustedPath.replaceAll("\\", "/");

                    // Remove content folder from beginning
                    adjustedPath = adjustedPath.replaceAll("content/", "");

                    const fileName = adjustedPath.split("/").pop()!.split(".")[0];
                    const suffix = adjustedPath.split(".").pop();

                    const pathsToAdd: string[] = [];

                    if (suffix === "png") {
                        // Project Card thumbnails and backgrounds
                        if (fileName === "thumbnail") {
                            pathsToAdd.push(`/_ipx/animated_false&f_webp/${adjustedPath}`);
                            pathsToAdd.push(`/_ipx/animated_false&f_webp&q_50&blur_3&s_10x10/${adjustedPath}`);
                        } else { // Normal images inside project entries
                            pathsToAdd.push(`/_ipx/f_webp/${adjustedPath}`);
                        }
                    }

                    // Gifs
                    if (suffix === "gif") {
                        // Project Card thumbnails and backgrounds
                        if (fileName === "thumbnail") {
                            pathsToAdd.push(`/_ipx/animated_true&f_webp/${adjustedPath}`);
                            pathsToAdd.push(`/_ipx/animated_true&f_webp&q_50&blur_3&s_10x10/${adjustedPath}`);
                        }
                    }

                    // Thumbnail previews
                    if (fileName === "thumbnail") {
                        pathsToAdd.push(`/_ipx/blur_4&f_png&s_20x20/${adjustedPath}`);
                        pathsToAdd.push(`/_ipx/blur_4&f_png&s_40x40/${adjustedPath}`);
                    }

                    for (const p of pathsToAdd) {
                        ctx.routes.add(p);
                    }
                }
            }
        },
    },
});
