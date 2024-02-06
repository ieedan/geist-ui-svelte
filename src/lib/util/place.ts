export type PlaceOptions = {
	placement: Placement;
	/** When the element overflows the screen it will flip to the other side */
	flip: boolean;
	offset: Offset;
};

export type Offset = {
	/**  offset away from the anchor */
	x: number;
	/** Y offset away from the anchor */
	y: number;
};

export type Placement =
	| "bottom"
	| "bottom-end"
	| "bottom-start"
	| "top"
	| "top-end"
	| "top-start"
	| "right"
	| "right-start"
	| "right-end"
	| "left"
	| "left-start"
	| "left-end";

export const place = (
	anchor: HTMLElement,
	element: HTMLElement,
	{ placement = "bottom-start", flip = true, offset = { x: 0, y: 0 } }: PlaceOptions,
): Placement => {
	const options: PlaceOptions = { placement, flip, offset };
	switch (placement) {
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
		case "right":
			return placeRight(anchor, element, options);
		case "right-end":
			return placeRightEnd(anchor, element, options);
		case "right-start":
			return placeRightStart(anchor, element, options);
		case "left":
			return placeLeft(anchor, element, options);
		case "left-end":
			return placeLeftEnd(anchor, element, options);
		case "left-start":
			return placeLeftStart(anchor, element, options);
	}
};

type Maxes = {
	left: number;
	top: number;
};

const getMaxes = (element: HTMLElement): Maxes => {
	const maxLeft = window.innerWidth + window.scrollX - (element.offsetWidth + 5);
	const maxTop = window.innerHeight + window.scrollY - (element.offsetHeight + 80);

	return { left: maxLeft, top: maxTop };
};

const placeBottom = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop + anchor.offsetHeight + options.offset.y;
	if (top > maxes.top && options.flip && guard == 0) return placeTop(anchor, element, options, 1);
	const left =
		anchor.offsetLeft + anchor.offsetWidth / 2 - element.offsetWidth / 2 + options.offset.x;
	if (left > maxes.left) return placeBottomEnd(anchor, element, options);
	if (left < 0) return placeBottomStart(anchor, element, options);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "bottom";
};

const placeBottomEnd = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);
	
	const top = anchor.offsetTop + anchor.offsetHeight + options.offset.y;
	if (top > maxes.top && options.flip && guard == 0)
		return placeTopEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth + options.offset.x;
	if (left < 0 && options.flip && guard <= 1)
		return placeBottomStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "bottom-end";
};

const placeBottomStart = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop + anchor.offsetHeight + options.offset.y;
	if (top > maxes.top && options.flip && guard == 0)
		return placeTopStart(anchor, element, options, 1);
	const left = anchor.offsetLeft + options.offset.x;
	if (left > maxes.left && options.flip && guard <= 1)
		return placeBottomEnd(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "bottom-start";
};

const placeTop = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop - element.offsetHeight - options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeBottom(anchor, element, options, 1);
	const left =
		anchor.offsetLeft + anchor.offsetWidth / 2 - element.offsetWidth / 2 + options.offset.x;
	if (left > maxes.left) return placeTopEnd(anchor, element, options);
	if (left < 0) return placeTopStart(anchor, element, options);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "top";
};

const placeTopEnd = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const top = anchor.offsetTop - element.offsetHeight - options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeBottomEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth + options.offset.x;
	if (left < 0 && options.flip && guard <= 1) return placeTopStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "top-end";
};

const placeTopStart = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop - element.offsetHeight - options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeBottomStart(anchor, element, options, 1);
	const left = anchor.offsetLeft + options.offset.x;
	if (left > maxes.left && options.flip && guard <= 1)
		return placeTopEnd(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "top-start";
};

const placeRight = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top =
		anchor.offsetTop + (anchor.offsetHeight - element.offsetHeight) / 2 + options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeRightStart(anchor, element, options, 1);
	if (top > maxes.top && options.flip && guard == 0)
		return placeRightEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft + anchor.offsetWidth + options.offset.x;
	if (left > maxes.left && guard <= 1) return placeLeft(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "right";
};

const placeRightEnd = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);
	const top = anchor.offsetTop + anchor.offsetHeight - element.offsetHeight + options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeRightStart(anchor, element, options, 1);
	const left = anchor.offsetLeft + anchor.offsetWidth + options.offset.x;
	if (left > maxes.left && guard <= 1) return placeLeftStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "right-end";
};

const placeRightStart = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop + options.offset.y;
	if (top > maxes.top && options.flip && guard == 0)
		return placeRightEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft + anchor.offsetWidth + options.offset.x;
	if (left > maxes.left && options.flip && guard <= 1)
		return placeLeftStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "right-start";
};

const placeLeft = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top =
		anchor.offsetTop + (anchor.offsetHeight - element.offsetHeight) / 2 + options.offset.y;
	if (top < 0 && options.flip && guard == 0) return placeLeftStart(anchor, element, options, 1);
	if (top > maxes.top && options.flip && guard == 0)
		return placeLeftEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft - element.offsetWidth - options.offset.x;
	if (left > maxes.left && guard <= 1) return placeRight(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "left";
};

const placeLeftEnd = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);
	const top = anchor.offsetTop + anchor.offsetHeight - element.offsetHeight;
	if (top < 0 && options.flip && guard == 0) return placeLeftStart(anchor, element, options, 1);
	const left = anchor.offsetLeft - element.offsetWidth - options.offset.x;
	if (left > maxes.left && guard <= 1) return placeRightStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "left-end";
};

const placeLeftStart = (
	anchor: HTMLElement,
	element: HTMLElement,
	options: PlaceOptions,
	guard: number = 0,
): Placement => {
	const maxes = getMaxes(element);

	const top = anchor.offsetTop + options.offset.y;
	if (top > maxes.top && options.flip && guard == 0)
		return placeLeftEnd(anchor, element, options, 1);
	const left = anchor.offsetLeft - element.offsetWidth - options.offset.x;
	if (left > maxes.left && options.flip && guard <= 1)
		return placeRightStart(anchor, element, options, 2);

	element.style.left = `${left}px`;
	element.style.top = `${top}px`;

	return "left-start";
};
