const navigationOrder: string[] = [
    "",
    "projects",
    "contact",
];

export default defineNuxtRouteMiddleware((to, from) => {
    const fromIndex: number = navigationOrder.findIndex((s: string) => s === from.name);
    const toIndex: number = navigationOrder.findIndex((s: string) => s === to.name);

    const transitionName: string = fromIndex > toIndex ? "slide-left" : "slide-right";

    to.meta.pageTransition = { name: transitionName };
    from.meta.pageTransition = { name: transitionName };
});
