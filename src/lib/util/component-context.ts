import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store"

export const setComponentContext = <T>(ctx: T, key: string = ""): Writable<T> => {
    const propsStore = writable(ctx);
    setContext(`geist-ui-component${key}`, propsStore);

    return propsStore;
}

export const getComponentContext = <T>(key: string = ""): Writable<T>  => {
    return getContext(`geist-ui-component${key}`);
}