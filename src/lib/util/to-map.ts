type KeyValuePair<K, V> = {
	key: K;
	value: V;
};

const toMap = <K, V, T>(arr: T[], fn: (a: T) => KeyValuePair<K, V>): Map<K, V> => {
	const map = new Map<K, V>();
	for (let i = 0; i < arr.length; i++) {
		const item = fn(arr[i]);
		map.set(item.key, item.value);
	}
	return map;
};

export default toMap;