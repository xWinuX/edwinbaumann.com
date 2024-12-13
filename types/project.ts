import type { ParsedContent } from "@nuxt/content";

interface TechnologyEntry {
    iconName: string;
    tooltip: string;
}

export const Technology: Record<string, TechnologyEntry> = {
    cpp: {
        iconName: "devicon:cplusplus",
        tooltip: "C++",
    },
    csharp: {
        iconName: "devicon:csharp",
        tooltip: "C#",
    },
    dotnet: {
        iconName: "logos:dotnet",
        tooltip: ".NET",
    },
    opengl: {
        iconName: "logos:opengl",
        tooltip: "OpenGL",
    },
    vulkan: {
        iconName: "logos:vulkan",
        tooltip: "Vulkan",
    },
    gamemaker: {
        iconName: "vscode-icons:file-type-gamemaker2",
        tooltip: "Game Maker Studio",
    },
    gml: {
        iconName: "file-icons:gamemaker",
        tooltip: "GML (Game Maker Language)",
    },
    unity: {
        iconName: "devicon-plain:unity",
        tooltip: "Unity",
    },
    html: {
        iconName: "devicon:html5",
        tooltip: "HTML",
    },
    css: {
        iconName: "devicon:css3",
        tooltip: "CSS",
    },
    vuejs: {
        iconName: "devicon:vuejs",
        tooltip: "VueJS",
    },
    nuxtjs: {
        iconName: "devicon:nuxtjs",
        tooltip: "NuxtJS",
    },
    python: {
        iconName: "devicon:python",
        tooltip: "Python",
    },
    javascript: {
        iconName: "devicon:javascript",
        tooltip: "JavaScript",
    },
    typescript: {
        iconName: "devicon:typescript",
        tooltip: "TypeScript",
    },
    glsl: {
        iconName: "logos:opengl",
        tooltip: "GLSL",
    },
    powershell: {
        iconName: "vscode-icons:file-type-powershell",
        tooltip: "PowerShell",
    },
    bash: {
        iconName: "devicon-plain:bash",
        tooltip: "Bash",
    },
    sql: {
        iconName: "vscode-icons:file-type-sql",
        tooltip: "SQL",
    },
    blazor: {
        iconName: "devicon:blazor",
        tooltip: "Blazor",
    },
    flask: {
        iconName: "file-icons:flask",
        tooltip: "Flask",
    },
    tailwind: {
        iconName: "devicon:tailwindcss",
        tooltip: "Tailwind",
    },
    bootstrap: {
        iconName: "devicon:bootstrap",
        tooltip: "Bootstrap",
    },
    quasar: {
        iconName: "vscode-icons:file-type-quasar",
        tooltip: "Quasar",
    },
    drone: {
        iconName: "logos:drone-icon",
        tooltip: "Drone",
    },
    unreal: {
        iconName: "file-icons:unrealscript",
        tooltip: "Unreal Engine",
    },
    docker: {
        iconName: "devicon:docker",
        tooltip: "Docker",
    },
    rider: {
        iconName: "devicon:rider",
        tooltip: "Rider",
    },
    phpstorm: {
        iconName: "devicon:phpstorm",
        tooltip: "PhpStorm ",
    },
    clion: {
        iconName: "devicon:clion",
        tooltip: "CLion",
    },
    pycharm: {
        iconName: "devicon:pycharm",
        tooltip: "PyCharm",
    },
    visualstudio: {
        iconName: "devicon:visualstudio",
        tooltip: "Visual Studio",
    },
    git: {
        iconName: "devicon:git",
        tooltip: "Git",
    },
    github: {
        iconName: "simple-icons:github",
        tooltip: "GitHub & GitHub Desktop",
    },
    ansible: {
        iconName: "devicon-plain:ansible",
        tooltip: "Ansible",
    },
    aseprite: {
        iconName: "simple-icons:aseprite",
        tooltip: "Aseprite",
    },
    jira: {
        iconName: "devicon:jira",
        tooltip: "Jira",
    },
    confluence: {
        iconName: "vscode-icons:file-type-confluence",
        tooltip: "Confluence",
    },
    blender: {
        iconName: "logos:blender",
        tooltip: "Blender",
    },
    dbeaver: {
        iconName: "devicon:dbeaver",
        tooltip: "DBeaver",
    },
    photoshop: {
        iconName: "devicon:photoshop",
        tooltip: "Photoshop",
    },
    php: {
        iconName: "devicon:php",
        tooltip: "PHP",
    },
    premiere: {
        iconName: "logos:adobe-premiere",
        tooltip: "Premiere",
    },
} as const;

export type TechnologyKey = keyof typeof Technology;

export interface Tag {
    name: string;
    category: string;
}

export interface Project {
    displayName: string;
    description: Record<string, string>;
    technologies: TechnologyKey[]
    dateStart: string;
    dateEnd: string;
    name: string;
    thumbnailFormat: "png" | "gif";
}

export interface ProjectContent extends Project, ParsedContent {}
