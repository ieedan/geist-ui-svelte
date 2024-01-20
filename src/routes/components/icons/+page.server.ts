export async function load({ url }) {
	return {
		currentIcon: url.searchParams.get("icon"),
	};
}
