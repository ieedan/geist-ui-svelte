export type Octets = [number, number, number, number];
export type IPV4Address =
	| `${number}.${number}.${number}.${number}`
	| `${number} ${number} ${number} ${number}`;

export class IPAddress {
	static parseIPV4(address: IPV4Address): Octets {
		const octets: Octets = [0, 0, 0, 0];
		let octet = 0;
		let startIndex = 0;
		for (let i = 0; i < address.length; i++) {
			if (address[i] == "." || address[i] == " ") {
				let octetStr = address.slice(startIndex, i);
				if (octetStr.length > 3) octetStr = address.slice(startIndex, startIndex + 3);
				octets[octet] = parseInt(octetStr);
				startIndex = i + 1;
				octet++;
			}

			if (i == address.length - 1) {
				let octetStr = address.slice(startIndex);
				if (octetStr.length > 3) octetStr = address.slice(startIndex, startIndex + 3);
				octets[octet] = parseInt(octetStr);
			}
		}

		return octets;
	}

	static toString(octets: Octets, noDot: boolean = false): IPV4Address {
		if (noDot) {
            return `${octets[0]} ${octets[1]} ${octets[2]} ${octets[3]}`;
        } 

        return `${octets[0]}.${octets[1]}.${octets[2]}.${octets[3]}`;
	}

	static validOctets(octets: Octets): boolean {
		for (let i = 0; i < octets.length; i++) {
            if (isNaN(octets[i])) return false; 
			if (octets[i] < 0 || octets[i] > 255) return false;
		}

		return true;
	}

	static validIP(address: IPV4Address): boolean {
		const octets: Octets = [0, 0, 0, 0];
		let octet = 0;
		let startIndex = 0;
		for (let i = 0; i < address.length; i++) {
			if (address[i] == "." || address[i] == " ") {
				let octetStr = address.slice(startIndex, i);
				if (octetStr.length > 3) octetStr = address.slice(startIndex, startIndex + 3);
				octets[octet] = parseInt(octetStr);
				startIndex = i + 1;
				octet++;
			}

			if (i == address.length - 1) {
				let octetStr = address.slice(startIndex);
				if (octetStr.length > 3) octetStr = address.slice(startIndex, startIndex + 3);
				octets[octet] = parseInt(octetStr);
			}
		}

        return this.validOctets(octets);
	}
}
