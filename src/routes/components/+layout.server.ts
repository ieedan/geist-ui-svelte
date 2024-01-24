import { redirect } from '@sveltejs/kit';

export async function load({ url }) {
    if (url.pathname == "/components") {
        throw redirect(303, "/components/text");
    }
}