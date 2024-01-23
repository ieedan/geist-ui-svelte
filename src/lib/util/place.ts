export type PlaceOptions = {
    placement: Placement;
    /** When the element overflows the screen it will flip to the other side */
    flip: boolean;
}

export type Placement = "bottom" | "bottom-end" | "bottom-start" | "top" | "top-end" | "top-start";

const DEFAULT_OPTIONS: PlaceOptions = { placement: "bottom-start", flip: true };

export const place = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions = DEFAULT_OPTIONS): Placement => {
    switch(options.placement) {
        case "bottom":
            return placeBottom(anchor, element, options);
        case "bottom-end":
            return placeBottomEnd(anchor, element, options);
        case "bottom-start":
            return placeBottomStart(anchor, element, options);
        case "top":
            return placeTop(anchor, element, options);
        case "top-end":
            return placeTopEnd(anchor, element, options);
        case "top-start":
            return placeTopStart(anchor, element, options);
    }
}

type Maxes = {
    left: number;
    top: number;
}

const getMaxes = (element: HTMLElement): Maxes => {
    const maxLeft = window.innerWidth + window.scrollX - (element.offsetWidth + 5);
    const maxTop = window.innerHeight + window.scrollY - (element.offsetHeight + 5);

    return { left: maxLeft, top: maxTop };
}

const placeBottom = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const maxes = getMaxes(element);

    const top = anchor.offsetTop + anchor.offsetHeight;
    if (top > maxes.top && options.flip && guard == 0) return placeTop(anchor, element, options, 1);
    const left = (anchor.offsetLeft + (anchor.offsetWidth / 2)) - (element.offsetWidth / 2);
    if (left > maxes.left) return placeBottomEnd(anchor, element, options);
    if (left < 0) return placeBottomStart(anchor, element, options);

    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "bottom";
}

const placeBottomEnd = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const maxes = getMaxes(element);

    const top = anchor.offsetTop + anchor.offsetHeight;
    if (top > maxes.top && options.flip && guard == 0) return placeTopEnd(anchor, element, options, 1);
    const left = anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth;
    if (left < 0 && options.flip && guard <= 1) return placeBottomStart(anchor, element, options, 2);
    
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "bottom-end";
}

const placeBottomStart = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const maxes = getMaxes(element);

    const top = anchor.offsetTop + anchor.offsetHeight;
    if (top > maxes.top && options.flip && guard == 0) return placeTopStart(anchor, element, options, 1);
    const left = anchor.offsetLeft;
    if (left > maxes.left && options.flip && guard <= 1) return placeBottomEnd(anchor, element, options, 2);
    
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "bottom-start";
}

const placeTop = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const maxes = getMaxes(element);

    const top = anchor.offsetTop - element.offsetHeight;
    if (top < 0 && options.flip && guard == 0) return placeBottom(anchor, element, options, 1);
    const left = (anchor.offsetLeft + (anchor.offsetWidth / 2)) - (element.offsetWidth / 2);
    if (left > maxes.left) return placeTopEnd(anchor, element, options);
    if (left < 0) return placeTopStart(anchor, element, options);
    
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "top";
}

const placeTopEnd = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const top = anchor.offsetTop - element.offsetHeight;
    if (top < 0 && options.flip && guard == 0) return placeBottomEnd(anchor, element, options, 1);
    const left = anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth;
    if (left < 0 && options.flip && guard <= 1) return placeTopStart(anchor, element, options, 2);

    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "top-end";
}

const placeTopStart = (anchor: HTMLElement, element: HTMLElement, options: PlaceOptions, guard: number = 0): Placement => {
    const maxes = getMaxes(element);

    const top = anchor.offsetTop - element.offsetHeight;
    if (top < 0 && options.flip && guard == 0) return placeBottomStart(anchor, element, options, 1);
    const left = anchor.offsetLeft;
    if (left > maxes.left && options.flip && guard <= 1) return placeTopEnd(anchor, element, options, 2);
    
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;

    return "top-start";
}