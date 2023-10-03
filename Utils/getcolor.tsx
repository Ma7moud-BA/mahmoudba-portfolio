"use client";
const root = document.documentElement;
const computedStyles = getComputedStyle(root);

export const primaryColor = hslToHex(
	computedStyles.getPropertyValue("--primary")
);
export const secondaryColor = computedStyles.getPropertyValue("--secondary");
function hslToHex(hsl: string) {
	// Split the HSL string into its components
	const components = hsl.split(/\s+/);

	// Extract the H, S, and L values
	const hue = parseFloat(components[0]);
	const saturation = parseFloat(components[1].slice(0, -1)) / 100; // Convert percentage to decimal
	const lightness = parseFloat(components[2].slice(0, -1)) / 100; // Convert percentage to decimal

	// Calculate the RGB values
	let r, g, b;

	if (saturation === 0) {
		// If the saturation is 0, the color is a shade of gray
		r = g = b = lightness;
	} else {
		const q =
			lightness < 0.5
				? lightness * (1 + saturation)
				: lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;

		const hueNormalized = hue / 360;

		r = hueToRgb(p, q, hueNormalized + 1 / 3);
		g = hueToRgb(p, q, hueNormalized);
		b = hueToRgb(p, q, hueNormalized - 1 / 3);
	}

	// Convert RGB values to hexadecimal format
	const rHex = Math.round(r * 255)
		.toString(16)
		.padStart(2, "0");
	const gHex = Math.round(g * 255)
		.toString(16)
		.padStart(2, "0");
	const bHex = Math.round(b * 255)
		.toString(16)
		.padStart(2, "0");

	// Combine the RGB values to form the hex color
	const hexColor = `#${rHex}${gHex}${bHex}`;

	return hexColor;
}

function hueToRgb(p: number, q: number, t: number) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
