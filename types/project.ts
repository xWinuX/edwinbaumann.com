import type { ParsedContent } from "@nuxt/content";

interface TechnologyEntry {
    iconName: string;
    tooltip: string;
}

export const Technology: Record<string, TechnologyEntry> = {
    cpp: {
        iconName: "vscode-icons:file-type-cpp3",
        tooltip: "C++",
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
} as const;

export type TechnologyKey = keyof typeof technologyLookup;

export interface Tag {
    name: string;
    category: string;
}

export interface Project {
    displayName: string;
    description: Record<string, string>;
    technologies: TechnologyKey[]
    dateStart: Date;
    dateEnd: Date;
    name: string;
    thumbnailFormat: "png" | "gif";
}

export interface ProjectContent extends Project, ParsedContent {}
