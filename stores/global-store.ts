export const useGlobalStore = defineStore("GlobalStore", {
    state: () => ({
        pageScrollEnabled: true,
    }),
    actions: {
        setPageScrollState(enabled: boolean) {
            if (enabled) {
                this.enablePageScroll();
            } else {
                this.disablePageScroll();
            }
        },
        enablePageScroll() {
            this.pageScrollEnabled = true;
        },
        disablePageScroll() {
            this.pageScrollEnabled = false;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot));
}
