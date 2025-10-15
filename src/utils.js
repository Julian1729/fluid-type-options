/**
 * Calculate default min and max font sizes based on a base font size.
 * @param {string} baseFontSize
 * @returns {{min: string, max: string}}
 */
const calculateClampDefaults = (baseFontSize) => {
	if (!baseFontSize) return { min: "10px", max: "20px" };

	// Parse the font size value
	const sizeValue = parseFloat(baseFontSize);
	const unit = baseFontSize.replace(sizeValue.toString(), "") || "px";

	// Calculate min (80% of base) and max (120% of base)
	const minValue = Math.round(sizeValue * 0.8 * 100) / 100;
	const maxValue = Math.round(sizeValue * 1.2 * 100) / 100;

	return {
		min: `${minValue}${unit}`,
		max: `${maxValue}${unit}`,
	};
};
