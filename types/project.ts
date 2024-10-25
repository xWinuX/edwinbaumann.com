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
        iconName: "simple-icons:gamemaker",
        tooltip: "Game Maker Studio",
    },
} as const;

export type TechnologyKey = keyof typeof technologyLookup;

export interface Tag {
    name: string;
    category: string;
}

export interface Project {
    name: string;
    description: Record<string, string>;
    technologies: TechnologyKey[]
    dateStart: Date;
    dateEnd: Date;
    path: string;
    thumbnailFormat: "png" | "gif";
}
