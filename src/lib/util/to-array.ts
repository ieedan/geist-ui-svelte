export const toArray = <K, V, T>(map: Map<K, V>, fn: (key: K, value: V) => T): T[] => {
	const arr = [];
	for (const [key, value] of map) {
		arr.push(fn(key, value));
	}
	return arr;
};
