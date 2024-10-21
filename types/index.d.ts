export {}

declare global {
    interface Tag {
        name: string;
        category: string;
    }

    interface Project {
        thumbnail: string;
        tags: Tag[]
        duration: string;
    }
}