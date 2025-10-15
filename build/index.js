/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("blocks.registerBlockType", "clamptype/header-with-clamp", (settings, name) => {
  if (name !== "core/heading") return settings;
  console.log("Adding clamp attributes to:", name, settings);
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      clampTypographyMin: {
        type: "string",
        default: ""
      },
      clampTypographyMax: {
        type: "string",
        default: ""
      },
      clampTypographyEnabled: {
        type: "boolean",
        default: false
      }
    }
  };
});
function Edit(props) {
  console.log("Edit props:", props);
  const {
    attributes,
    setAttributes
  } = props;
  const {
    clampTypographyMin,
    clampTypographyMax,
    clampTypographyEnabled
  } = attributes;
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
  const calculateClampDefaults = baseFontSize => {
    if (!baseFontSize) return {
      min: "10px",
      max: "20px"
    };

    // Parse the font size value
    const sizeValue = parseFloat(baseFontSize);
    const unit = baseFontSize.replace(sizeValue.toString(), "") || "px";

    // Calculate min (80% of base) and max (120% of base)
    const minValue = Math.round(sizeValue * 0.8 * 100) / 100;
    const maxValue = Math.round(sizeValue * 1.2 * 100) / 100;
    return {
      min: `${minValue}${unit}`,
      max: `${maxValue}${unit}`
    };
  };

  // React to font size changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (fontSize && (!clampTypographyMin || !clampTypographyMax)) {
      console.log("Font size changed to:", fontSize);
      const {
        min,
        max
      } = calculateClampDefaults(fontSize);
      setAttributes({
        clampTypographyMin: min,
        clampTypographyMax: max,
        clampTypographyEnabled: true
      });
      console.log(`Auto-calculated clamp values: min=${min}, max=${max}`);
    }
  }, [fontSize, clampTypographyMin, clampTypographyMax, setAttributes]);
  console.log("fontSize:", fontSize);
  console.log("clamp attributes:", {
    clampTypographyMin,
    clampTypographyMax,
    clampTypographyEnabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "typography",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("fieldset", {
      style: {
        display: "flex",
        gap: "1rem",
        width: "100%",
        gridColumn: "1 / -1"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
        style: {
          flex: 1
        },
        __next40pxDefaultSize: true,
        onChange: value => setAttributes({
          clampTypographyMin: value
        }),
        value: clampTypographyMin || "",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Min. Size", "clamptype")
        // help={fontSize ? `Based on: ${fontSize}` : undefined}
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
        style: {
          flex: 1
        },
        __next40pxDefaultSize: true,
        onChange: value => setAttributes({
          clampTypographyMax: value
        }),
        value: clampTypographyMax || "",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Max Size", "clamptype")
        // help={fontSize ? `Based on: ${fontSize}` : undefined}
      })]
    })
  });
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("editor.BlockEdit", "clamptype/header-with-clamp", (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== "core/heading") {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Edit, {
        ...props
      })]
    });
  };
}));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map