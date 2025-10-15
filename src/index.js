import { useState, useEffect } from "react";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from "@wordpress/block-editor";
import { createHigherOrderComponent } from "@wordpress/compose";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

addFilter(
	"blocks.registerBlockType",
	"clamptype/header-with-clamp",
	(settings, name) => {
		if (name !== "core/heading") return settings;

		console.log("Adding clamp attributes to:", name, settings);

		return {
			...settings,
			attributes: {
				...settings.attributes,
				clampTypographyMin: {
					type: "string",
					default: "",
				},
				clampTypographyMax: {
					type: "string",
					default: "",
				},
				clampTypographyEnabled: {
					type: "boolean",
					default: false,
				},
			},
		};
	},
);

function Edit(props) {
	console.log("Edit props:", props);

	const { attributes, setAttributes } = props;
	const { clampTypographyMin, clampTypographyMax, clampTypographyEnabled } =
		attributes;

	const fontSize = attributes.style?.typography?.fontSize;

	// const [
	// 	fontSizes,
	// ] = useSettings(
	// 	// Specific paths in theme.json
	// 	"typography.fontSizes",
	// );

	// // Find the current font size preset info for display name
	// const currentFontSizePreset = fontSizes?.find(
	// 	(size) => size.slug === fontSize,
	// );
	// const fontSizeDisplayName = currentFontSizePreset?.name || fontSize;

	// console.log("Resolved font size:", currentFontSize);
	// console.log("Font size preset:", fontSize);
	// console.log("Custom font size:", style?.typography?.fontSize);
	// console.log("Current font size preset:", currentFontSizePreset);
	// console.log("Available font sizes:", fontSizes);

	// Helper function to calculate clamp values based on font size
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

	// React to font size changes
	useEffect(() => {
		if (fontSize && (!clampTypographyMin || !clampTypographyMax)) {
			console.log("Font size changed to:", fontSize);

			const { min, max } = calculateClampDefaults(fontSize);

			setAttributes({
				clampTypographyMin: min,
				clampTypographyMax: max,
				clampTypographyEnabled: true,
			});

			console.log(`Auto-calculated clamp values: min=${min}, max=${max}`);
		}
	}, [fontSize, clampTypographyMin, clampTypographyMax, setAttributes]);

	console.log("fontSize:", fontSize);
	console.log("clamp attributes:", {
		clampTypographyMin,
		clampTypographyMax,
		clampTypographyEnabled,
	});

	return (
		<InspectorControls group="typography">
			<fieldset
				style={{
					display: "flex",
					gap: "1rem",
					width: "100%",
					gridColumn: "1 / -1",
				}}
			>
				<UnitControl
					style={{ flex: 1 }}
					__next40pxDefaultSize
					onChange={(value) => setAttributes({ clampTypographyMin: value })}
					value={clampTypographyMin || ""}
					label={__("Min. Size", "clamptype")}
					// help={fontSize ? `Based on: ${fontSize}` : undefined}
				/>
				<UnitControl
					style={{ flex: 1 }}
					__next40pxDefaultSize
					onChange={(value) => setAttributes({ clampTypographyMax: value })}
					value={clampTypographyMax || ""}
					label={__("Max Size", "clamptype")}
					// help={fontSize ? `Based on: ${fontSize}` : undefined}
				/>
			</fieldset>
		</InspectorControls>
	);
}

addFilter(
	"editor.BlockEdit",
	"clamptype/header-with-clamp",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== "core/heading") {
				return <BlockEdit {...props} />;
			}
			return (
				<>
					<BlockEdit {...props} />
					<Edit {...props} />
				</>
			);
		};
	}),
);
