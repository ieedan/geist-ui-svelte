<script lang="ts">
	import { IPAddress, type IPV4Address, type Octets } from "$lib/util/ip-address.js";
	import { onMount } from "svelte";

    /** '.' or ' ' separated IP address ex: '172.16.100.10' or '172 16 100 10' */
    export let value: IPV4Address = "192 168 010 501";

    let octets: Octets = IPAddress.parseIPV4(value);

    onMount(() => {
        console.log(octets);
        
    })
</script>

