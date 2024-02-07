export const findChild = (parent: Element ,fn: (node: Element) => boolean): Element | undefined => {
	if (!parent) return undefined;
	const children = Array.from(parent.children);

	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (fn(child)) return child;

		if (child.children.length > 0) {
			const result = findChild(child, fn);
			if (result) return result;
		}
	}

	return undefined;
}