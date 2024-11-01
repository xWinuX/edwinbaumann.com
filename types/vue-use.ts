export interface VueUseElementBounding
{
    height: Ref<number, number>;
    bottom: Ref<number, number>;
    left: Ref<number, number>;
    right: Ref<number, number>;
    top: Ref<number, number>;
    width: Ref<number, number>;
    x: Ref<number, number>;
    y: Ref<number, number>;
    update: () => void;
}
