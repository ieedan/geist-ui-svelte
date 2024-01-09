export enum ColorPreference {
	dark = "dark",
	light = "light",
	OS = "OS",
}

const useDarkMode = () => {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
};

const getCurrentPreference = (): ColorPreference => {
	if (localStorage.theme === "dark") {
		return ColorPreference.dark;
	}

	if (localStorage.theme === "light") {
		return ColorPreference.light;
	}

	return ColorPreference.OS;
};

const changePreference = (preference: ColorPreference) => {
	if (preference === ColorPreference.OS) {
		localStorage.removeItem("theme");
	}

	if (preference === ColorPreference.light) {
		localStorage.theme = "light";
	}

	if (preference === ColorPreference.dark) {
		localStorage.theme = "dark";
	}

	useDarkMode();
};

export { changePreference, getCurrentPreference, useDarkMode as useDarkMode };
