export type Size = "xs" | "sm" | "md" | "lg" | "xl";

export type Rotation = "0deg" | "90deg" | "180deg" | "270deg" | "45deg" | "-45deg";

export type Color = "default" | "success" | "warning" | "error" | "secondary";

export type TextAlignment =
	| "center"
	| "end"
	| "justify"
	| "left"
	| "right"
	| "start"
	| "inherit"
	| "initial"
	| "unset";

export interface Route {
	name: string;
	slug: string;
	routes?: Route[];
	expanded?: boolean;
	hidden?: boolean;
}

export type ShortRoute = {
	name: string;
	slug: string;
};

export type Column = {
	label: string;
	property: string;
};

export type DataItem = {
	[key: string]: string;
};

export type ButtonColor =
	| "default"
	| "secondary"
	| "success"
	| "warning"
	| "error"
	| "abort"
	| "secondary-light"
	| "success-light"
	| "warning-light"
	| "error-light"
	| "abort-active";
