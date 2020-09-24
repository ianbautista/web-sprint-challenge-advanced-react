// STRETCH

import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(value) {
	const [someValue, setSomeValue] = useLocalStorage("darkMode", value);

	return [someValue, setSomeValue];
}
