const navigationOrder: string[] = [
    "/",
    "/projects",
    "/about-me",
    "/contact",
];

export default defineNuxtRouteMiddleware((to, from) => {
    const fromIndex: number = navigationOrder.findIndex((s: string) => s === from.fullPath);
    const toIndex: number = navigationOrder.findIndex((s: string) => s === to.fullPath);

    const transitionName: string = fromIndex > toIndex ? "slide-left" : "slide-right";

    to.meta.pageTransition = { name: transitionName };
    from.meta.pageTransition = { name: transitionName };

    useGlobalStore().enablePageScroll();
});
