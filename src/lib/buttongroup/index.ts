import Root from "./button-group.svelte";
import Button from "./button-group-button.svelte";
import { cva, type VariantProps } from "class-variance-authority";

const CONTEXT_KEY = "button-group";

const buttonVariants = cva("", {
	variants: {
		color: {
			default: `bg-gray-0 text-gray-999 border-gray-100 data-[a]:hover:bg-gray-100 enabled:hover:bg-gray-100 
            dark:bg-gray-999 dark:border-gray-900 data-[a]:hover:dark:bg-gray-900 enabled:hover:dark:bg-gray-900 dark:text-gray-0`,
			secondary: `bg-gray-999 text-gray-0 border-gray-999 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 
            data-[a]:hover:text-gray-999 enabled:hover:text-gray-999 dark:bg-gray-0 dark:text-gray-999 
            data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999 dark:border-gray-0 
            data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0`,
			success: `bg-blue-600 text-gray-0 border-blue-600 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 data-[a]:hover:text-blue-600 
            enabled:hover:text-blue-600 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999`,
			warning: `bg-orange-300 text-gray-0 data-[a]:hover:bg-gray-0 enabled:hover:bg-gray-0 border-orange-300 data-[a]:hover:text-orange-300 
            enabled:hover:text-orange-300 dark:bg-orange-400 dark:text-gray-0 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999
            dark:border-orange-400 data-[a]:hover:dark:text-orange-400 enabled:hover:dark:text-orange-400`,
			error: `bg-red-500 text-gray-0 data-[a]:hover:text-red-500 enabled:hover:text-red-500 border-red-500 data-[a]:hover:bg-gray-0 
            enabled:hover:bg-gray-0 data-[a]:hover:dark:bg-gray-999 enabled:hover:dark:bg-gray-999 dark:border-red-600 dark:bg-red-600`,
			tab: `enabled:hover:dark:bg-gray-900 data-[a]:hover:dark:bg-gray-900 enabled:hover:bg-gray-100 data-[a]:hover:bg-gray-100
            enabled:hover:dark:text-gray-0 data-[a]:hover:dark:text-gray-0 enabled:hover:text-gray-999 data-[a]:hover:text-gray-999
            border-transparent dark:text-gray-600 text-gray-400 `,
			abort: `bg-transparent dark:bg-transparent border-transparent text-gray-400 dark:text-gray-600`,

			"abort-active": `bg-transparent dark:bg-transparent border-transparent data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0
            text-gray-400 dark:text-gray-600 data-[a]:hover:text-gray-999 enabled:hover:text-gray-999`,

			"secondary-light": `border-gray-999 bg-gray-999 text-gray-0 data-[a]:hover:bg-gray-900 enabled:hover:bg-gray-900
            dark:bg-gray-0 dark:border-gray-0 dark:text-gray-999 data-[a]:dark:bg-gray-100 enabled:hover:dark:bg-gray-100 `,

			"success-light": `bg-blue-600 dark:bg-blue-600 text-gray-0 dark:text-gray-0 dark:border-blue-600 border-blue-600 
            data-[a]:hover:bg-blue-500 enabled:hover:bg-blue-500 data-[a]:hover:border-blue-500 enabled:hover:border-blue-500 
            data-[a]:hover:dark:border-blue-500 enabled:hover:dark:border-blue-500 data-[a]:hover:dark:bg-blue-500 enabled:hover:dark:bg-blue-500`,

			"warning-light": `bg-orange-300 text-gray-0 data-[a]:hover:bg-orange-200 enabled:hover:bg-orange-200 border-orange-300 
            data-[a]:hover:border-orange-200 enabled:hover:border-orange-200 dark:bg-orange-400 dark:text-gray-0 data-[a]:hover:dark:bg-orange-300 
            enabled:hover:dark:bg-orange-300 dark:border-orange-400 data-[a]:hover:dark:border-orange-300 enabled:hover:dark:border-orange-300`,

			"error-light": `bg-red-500 text-gray-0 border-red-500 data-[a]:hover:bg-red-400 enabled:hover:bg-red-400 data-[a]:hover:border-red-400 
            enabled:hover:border-red-400 data-[a]:hover:dark:bg-red-500 enabled:hover:dark:bg-red-500 data-[a]:hover:dark:border-red-500 enabled:hover:dark:border-red-500
            dark:border-red-600 dark:bg-red-600`,
		},
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
		},
		ghost: {
			true: "",
			false: "",
		},
		disabled: {
			true: "",
			false: "",
		},
	},
    defaultVariants: {
        color: "default",
        size: "md",
        disabled: false,
        ghost: false,
    },
    compoundVariants: [
        {
            color: "default",
            ghost: true,
            class: "",
        },
        {
            color: "secondary",
            ghost: true,
            class: `bg-gray-0 text-gray-999 data-[a]:hover:bg-gray-999 enabled:hover:bg-gray-999 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 
            dark:bg-gray-999 dark:text-gray-0 data-[a]:hover:dark:bg-gray-0 enabled:hover:dark:bg-gray-0 data-[a]:hover:dark:text-gray-999 enabled:hover:dark:text-gray-999`,
        },
        {
            color: "success",
            ghost: true,
            class: `bg-gray-0 text-blue-600 border-blue-600 data-[a]:hover:bg-blue-600 enabled:hover:bg-blue-600 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0
            dark:text-blue-600 dark:border-blue-600 data-[a]:hover:dark:bg-blue-600 enabled:hover:dark:bg-blue-600 data-[a]:hover:dark:text-gray-0 
            enabled:hover:dark:text-gray-0 dark:bg-gray-999`,
        },
        {
            color: "warning",
            ghost: true,
            class: `bg-gray-0 text-orange-300 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 data-[a]:hover:bg-orange-300 enabled:hover:bg-orange-300
          dark:bg-gray-999 dark:text-orange-400 data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0 data-[a]:hover:dark:bg-orange-400 enabled:hover:dark:bg-orange-400`,
        },
        {
            color: "error",
            ghost: true,
            class: `bg-gray-0 text-red-500 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 border-red-500 data-[a]:hover:bg-red-500 
          enabled:hover:bg-red-500 dark:bg-gray-999 data-[a]:hover:dark:bg-red-600 enabled:hover:dark:bg-red-600
          dark:text-red-600 dark:border-red-600`,
        },
        {
            color: "abort",
            ghost: true,
            class: "bg-transparent dark:bg-transparent border-transparent text-gray-400 dark:text-gray-600",
        },

        {
            color: "abort-active",
            ghost: true,
            class: `bg-transparent dark:bg-transparent border-transparent data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0
          text-gray-400 dark:text-gray-600 data-[a]:hover:text-gray-999 enabled:hover:text-gray-999`,
        },
        {
            color: "secondary-light",
            ghost: true,
            class: `bg-gray-0 text-gray-999 data-[a]:hover:bg-gray-999 enabled:hover:bg-gray-999 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 
            dark:bg-gray-999 dark:text-gray-0 data-[a]:hover:dark:bg-gray-0 enabled:hover:dark:bg-gray-0 data-[a]:hover:dark:text-gray-999 enabled:hover:dark:text-gray-999`,
        },
        {
            color: "success-light",
            ghost: true,
            class: `bg-gray-0 text-blue-600 border-blue-600 data-[a]:hover:bg-blue-600 enabled:hover:bg-blue-600 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0
            dark:text-blue-600 dark:border-blue-600 data-[a]:hover:dark:bg-blue-600 enabled:hover:dark:bg-blue-600 data-[a]:hover:dark:text-gray-0 
            enabled:hover:dark:text-gray-0 dark:bg-gray-999`,
        },
        {
            color: "warning-light",
            ghost: true,
            class: `bg-gray-0 text-orange-300 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 data-[a]:hover:bg-orange-300 enabled:hover:bg-orange-300
            dark:bg-gray-999 dark:text-orange-400 data-[a]:hover:dark:text-gray-0 enabled:hover:dark:text-gray-0 data-[a]:hover:dark:bg-orange-400 enabled:hover:dark:bg-orange-400`,
        },
        {
            color: "error-light",
            ghost: true,
            class: `bg-gray-0 text-red-500 data-[a]:hover:text-gray-0 enabled:hover:text-gray-0 border-red-500 data-[a]:hover:bg-red-500 
          enabled:hover:bg-red-500 dark:bg-gray-999 data-[a]:hover:dark:bg-red-600 enabled:hover:dark:bg-red-600
          dark:text-red-600 dark:border-red-600`,
        },
        {
            disabled: true,
            class: "dark:border-gray-900 dark:bg-gray-925 dark:text-gray-700 cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300",
        },
    ]
});

type ButtonColor = VariantProps<typeof buttonVariants>["color"];
type Size = VariantProps<typeof buttonVariants>["size"];

type GroupProps = {
	ghost: boolean;
	color: ButtonColor;
	size: Size;
};

type ButtonProps = {
	href?: string;
	disabled: boolean;
	class: string;
};

export {
	Root,
	Button,
	//
	type GroupProps,
	type ButtonProps,
	//
	CONTEXT_KEY,
};
