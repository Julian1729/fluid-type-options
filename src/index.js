import { useState, useEffect } from "react";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from "@wordpress/block-editor";
import { createHigherOrderComponent } from "@wordpress/compose";
import { __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { calculateClampDefaults } from "./utils";

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
	const { attributes, setAttributes } = props;
	const { clampTypographyMin, clampTypographyMax, clampTypographyEnabled } =
		attributes;

	const fontSize = attributes.style?.typography?.fontSize;

	// React to font size changes
	useEffect(() => {
		if (fontSize && (!clampTypographyMin || !clampTypographyMax)) {
			const { min, max } = calculateClampDefaults(fontSize);

			setAttributes({
				clampTypographyMin: min,
				clampTypographyMax: max,
				clampTypographyEnabled: true,
			});
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
