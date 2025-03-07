"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Awards.tsx":
/*!***********************************!*\
  !*** ./src/components/Awards.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Awards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/About */ \"(app-pages-browser)/./src/components/About.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction calculateAge(birthDate) {\n    const today = new Date();\n    let age = today.getFullYear() - birthDate.getFullYear();\n    const m = today.getMonth() - birthDate.getMonth();\n    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {\n        age--;\n    }\n    return age;\n}\nconst alexAge = calculateAge(new Date(2019, 1, 14)); // February 14, 2019\nconst victoriaAge = calculateAge(new Date(2020, 6, 15)); // July 15, 2020\nconst ceciliaAge = calculateAge(new Date(2023, 6, 19)); // July 19, 2023\nconst awards = [\n    {\n        title: \"Schibsted Sales Awards nomination 2019\",\n        company: \"Tori.fi / Schibsted\",\n        year: \"2019\",\n        description: 'I planned and built a new type of advertising solution to support Tori, Tori users and Tori advertisers. The product was nominated for \"Performance of the year\" and presented to the whole Schibsted.',\n        logo: \"/tori.png\",\n        bgColor: \"#ffffff\",\n        buzzwords: [\n            \"Ad Tech\",\n            \"Innovation\",\n            \"Performance Marketing\"\n        ]\n    },\n    {\n        title: \"#3 - Third place in Hack the Construction Industry Productivity\",\n        company: \"Ultrahack\",\n        year: \"2017\",\n        description: \"We made an app that digitally signs documents with the help of a QR-code reader and SignSpace. The track was organized by SignSpace, KIRA-digi and Tilaajavastuu. More info about Ultrahack.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"SignSpace\",\n                url: \"https://signspace.fi/\"\n            },\n            {\n                text: \"KIRA-digi\",\n                url: \"http://www.kiradigi.fi/etusivu.html\"\n            },\n            {\n                text: \"Tilaajavastuu\",\n                url: \"https://www.tilaajavastuu.fi/en/\"\n            },\n            {\n                text: \"Ultrahack\",\n                url: \"http://www.ultrahack.org/\"\n            }\n        ]\n    },\n    {\n        title: \"#1 - First place in Qvik speed coding challenge\",\n        company: \"Slush\",\n        year: \"2016\",\n        description: \"An algorithm based puzzle where you had to use JS-commands to solve a maze.\",\n        logo: \"/slush.png\",\n        bgColor: \"#ffffff\",\n        links: [\n            {\n                text: \"Qvik\",\n                url: \"http://qvik.fi\"\n            }\n        ]\n    },\n    {\n        title: \"Top 3 - Open track\",\n        company: \"Ultrahack\",\n        year: \"2016\",\n        description: \"We developed further the fall detector (which won the Wellbeing Hackathon) and made an Alarm Center for the browser, phone and smartwatch. More info about Ultrahack.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"browser\",\n                url: \"http://salmi.pro/ject/fall/\"\n            },\n            {\n                text: \"phone\",\n                url: \"http://salmi.pro/ject/fall/demo/iphone/\"\n            },\n            {\n                text: \"smartwatch\",\n                url: \"http://salmi.pro/ject/fall/demo/polar/\"\n            },\n            {\n                text: \"Ultrahack\",\n                url: \"http://www.ultrahack.org/\"\n            }\n        ]\n    },\n    {\n        title: \"Bonus prize - Finnish Patent and Registration Office (PRH)\",\n        company: \"Ultrahack\",\n        year: \"2016\",\n        description: \"A bonus prize from PRH to help us get a patent for our fall detector.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"PRH\",\n                url: \"https://www.prh.fi/en/\"\n            }\n        ]\n    },\n    {\n        title: \"#1 - First place in Qvik speed coding challenge\",\n        company: \"Ultrahack\",\n        year: \"2016\",\n        description: \"An algorithm based puzzle where you had to use JS-commands to solve a maze.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"Qvik\",\n                url: \"http://qvik.fi\"\n            }\n        ]\n    },\n    {\n        title: \"#1 - First place\",\n        company: \"Wellbeing Hackathon\",\n        year: \"2016\",\n        description: \"We made a Raspberry Pi + webcam solution that detects if an elderly person falls on the floor. Check out the solution and more info about the Wellbeing Hackathon.\",\n        logo: \"/hyvinvointi.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"solution\",\n                url: \"http://tunn.us/arduino/falldetector2.php\"\n            },\n            {\n                text: \"Wellbeing Hackathon\",\n                url: \"http://hyvinvointihack.fi/ratkaisut-solutions-2016/\"\n            }\n        ]\n    },\n    {\n        title: \"#1 - Best Daddy in the World\",\n        company: \"My family since 2014\",\n        year: \"2014\",\n        description: \"Judges: Alex (\".concat(alexAge, \" yr.), Victoria (\").concat(victoriaAge, \" yr.) and Cecilia (\").concat(ceciliaAge, \" yr.).\"),\n        logo: \"/hearth.svg\",\n        bgColor: \"#ffffff\",\n        buzzwords: [\n            \"Team Leadership\",\n            \"Cross-functional Teams\"\n        ]\n    }\n];\nconst AwardCard = (param)=>{\n    let { award } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"glass-card p-6 mb-6 animate-fade-in hover:bg-white/15 transition-all duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-start gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden\",\n                    style: {\n                        backgroundColor: award.bgColor\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: award.logo,\n                            alt: \"\".concat(award.company, \" logo\"),\n                            fill: true,\n                            sizes: \"(max-width: 64px) 100vw, 64px\",\n                            className: \"object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-semibold mb-1\",\n                            children: award.title\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400 mb-2\",\n                            children: award.links ? award.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        index > 0 && \" / \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: link.url,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"hover:text-white transition-colors\",\n                                            children: link.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                            lineNumber: 147,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, link.url, true, {\n                                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, undefined)) : award.company\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500 mb-4\",\n                            children: award.year\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 161,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 mb-4\",\n                            children: award.description\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 162,\n                            columnNumber: 9\n                        }, undefined),\n                        award.buzzwords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-2\",\n                            children: award.buzzwords.map((word)=>{\n                                const group = _components_About__WEBPACK_IMPORTED_MODULE_2__.buzzwordGroups.find((g)=>g.words.includes(word));\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xs px-3 py-1 rounded-full bg-gradient-to-r \".concat((group === null || group === void 0 ? void 0 : group.color) || \"from-gray-400/20 to-gray-400/20 border-gray-400/40\", \" border border-opacity-40\"),\n                                    children: word\n                                }, word, false, {\n                                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                    lineNumber: 168,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n            lineNumber: 128,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n        lineNumber: 127,\n        columnNumber: 3\n    }, undefined);\n};\n_c = AwardCard;\nfunction Awards() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 max-w-5xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-gradient text-center mb-12\",\n                    children: \"Awards & Recognition\"\n                }, void 0, false, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 187,\n                    columnNumber: 9\n                }, this),\n                awards.map((award, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AwardCard, {\n                        award: award\n                    }, index, false, {\n                        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                        lineNumber: 189,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n            lineNumber: 186,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n        lineNumber: 185,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Awards;\nvar _c, _c1;\n$RefreshReg$(_c, \"AwardCard\");\n$RefreshReg$(_c1, \"Awards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F3YXJkcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFK0I7QUFFcUI7QUFtQnBELFNBQVNFLGFBQWFDLFNBQWU7SUFDbkMsTUFBTUMsUUFBUSxJQUFJQztJQUNsQixJQUFJQyxNQUFNRixNQUFNRyxXQUFXLEtBQUtKLFVBQVVJLFdBQVc7SUFDckQsTUFBTUMsSUFBSUosTUFBTUssUUFBUSxLQUFLTixVQUFVTSxRQUFRO0lBQy9DLElBQUlELElBQUksS0FBTUEsTUFBTSxLQUFLSixNQUFNTSxPQUFPLEtBQUtQLFVBQVVPLE9BQU8sSUFBSztRQUMvREo7SUFDRjtJQUNBLE9BQU9BO0FBQ1Q7QUFFQSxNQUFNSyxVQUFVVCxhQUFhLElBQUlHLEtBQUssTUFBTSxHQUFHLE1BQU0sb0JBQW9CO0FBQ3pFLE1BQU1PLGNBQWNWLGFBQWEsSUFBSUcsS0FBSyxNQUFNLEdBQUcsTUFBTSxnQkFBZ0I7QUFDekUsTUFBTVEsYUFBYVgsYUFBYSxJQUFJRyxLQUFLLE1BQU0sR0FBRyxNQUFNLGdCQUFnQjtBQUV4RSxNQUFNUyxTQUFrQjtJQUN0QjtRQUNFQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsU0FBUztRQUNUQyxXQUFXO1lBQUM7WUFBVztZQUFjO1NBQXdCO0lBQy9EO0lBQ0E7UUFDRU4sT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEUsT0FBTztZQUNMO2dCQUFFQyxNQUFNO2dCQUFhQyxLQUFLO1lBQXdCO1lBQ2xEO2dCQUFFRCxNQUFNO2dCQUFhQyxLQUFLO1lBQXNDO1lBQ2hFO2dCQUFFRCxNQUFNO2dCQUFpQkMsS0FBSztZQUFtQztZQUNqRTtnQkFBRUQsTUFBTTtnQkFBYUMsS0FBSztZQUE0QjtTQUN2RDtJQUNIO0lBQ0E7UUFDRVQsT0FBTztRQUNQQyxTQUFTO1FBQ1RD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QSxJQUFLQSxFQUFFQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0w7Z0NBQ3hELHFCQUNFLDhEQUFDTDtvQ0FFQ1osV0FBVyxtREFBd0gsT0FBckVrQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9LLEtBQUssS0FBSSxzREFBcUQ7OENBRWxJTjttQ0FISUE7Ozs7OzRCQU1YOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FqRE5wQjtBQXlEUyxTQUFTMkI7SUFDdEIscUJBQ0UsOERBQUNDO1FBQVF6QixXQUFVO2tCQUNqQiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUMwQjtvQkFBRzFCLFdBQVU7OEJBQWtDOzs7Ozs7Z0JBQy9DZCxPQUFPdUIsR0FBRyxDQUFDLENBQUNYLE9BQU9hLHNCQUNsQiw4REFBQ2Q7d0JBQXNCQyxPQUFPQTt1QkFBZGE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7TUFYd0JhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F3YXJkcy50c3g/Y2FkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEZhVHJvcGh5IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgYnV6endvcmRHcm91cHMgfSBmcm9tICdAL2NvbXBvbmVudHMvQWJvdXQnO1xuXG5pbnRlcmZhY2UgQXdhcmQge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb21wYW55OiBzdHJpbmc7XG4gIHllYXI6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgbG9nbzogc3RyaW5nO1xuICBiZ0NvbG9yPzogc3RyaW5nO1xuICBsaW5rcz86IHsgdGV4dDogc3RyaW5nOyB1cmw6IHN0cmluZyB9W107XG4gIGJ1enp3b3Jkcz86IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgQnV6endvcmRHcm91cCB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbiAgd29yZHM6IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBZ2UoYmlydGhEYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuICBpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcbiAgICBhZ2UtLTtcbiAgfVxuICByZXR1cm4gYWdlO1xufVxuXG5jb25zdCBhbGV4QWdlID0gY2FsY3VsYXRlQWdlKG5ldyBEYXRlKDIwMTksIDEsIDE0KSk7IC8vIEZlYnJ1YXJ5IDE0LCAyMDE5XG5jb25zdCB2aWN0b3JpYUFnZSA9IGNhbGN1bGF0ZUFnZShuZXcgRGF0ZSgyMDIwLCA2LCAxNSkpOyAvLyBKdWx5IDE1LCAyMDIwXG5jb25zdCBjZWNpbGlhQWdlID0gY2FsY3VsYXRlQWdlKG5ldyBEYXRlKDIwMjMsIDYsIDE5KSk7IC8vIEp1bHkgMTksIDIwMjNcblxuY29uc3QgYXdhcmRzOiBBd2FyZFtdID0gW1xuICB7XG4gICAgdGl0bGU6ICdTY2hpYnN0ZWQgU2FsZXMgQXdhcmRzIG5vbWluYXRpb24gMjAxOScsXG4gICAgY29tcGFueTogJ1RvcmkuZmkgLyBTY2hpYnN0ZWQnLFxuICAgIHllYXI6ICcyMDE5JyxcbiAgICBkZXNjcmlwdGlvbjogJ0kgcGxhbm5lZCBhbmQgYnVpbHQgYSBuZXcgdHlwZSBvZiBhZHZlcnRpc2luZyBzb2x1dGlvbiB0byBzdXBwb3J0IFRvcmksIFRvcmkgdXNlcnMgYW5kIFRvcmkgYWR2ZXJ0aXNlcnMuIFRoZSBwcm9kdWN0IHdhcyBub21pbmF0ZWQgZm9yIFwiUGVyZm9ybWFuY2Ugb2YgdGhlIHllYXJcIiBhbmQgcHJlc2VudGVkIHRvIHRoZSB3aG9sZSBTY2hpYnN0ZWQuJyxcbiAgICBsb2dvOiAnL3RvcmkucG5nJyxcbiAgICBiZ0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgYnV6endvcmRzOiBbJ0FkIFRlY2gnLCAnSW5ub3ZhdGlvbicsICdQZXJmb3JtYW5jZSBNYXJrZXRpbmcnXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcjMyAtIFRoaXJkIHBsYWNlIGluIEhhY2sgdGhlIENvbnN0cnVjdGlvbiBJbmR1c3RyeSBQcm9kdWN0aXZpdHknLFxuICAgIGNvbXBhbnk6ICdVbHRyYWhhY2snLFxuICAgIHllYXI6ICcyMDE3JyxcbiAgICBkZXNjcmlwdGlvbjogJ1dlIG1hZGUgYW4gYXBwIHRoYXQgZGlnaXRhbGx5IHNpZ25zIGRvY3VtZW50cyB3aXRoIHRoZSBoZWxwIG9mIGEgUVItY29kZSByZWFkZXIgYW5kIFNpZ25TcGFjZS4gVGhlIHRyYWNrIHdhcyBvcmdhbml6ZWQgYnkgU2lnblNwYWNlLCBLSVJBLWRpZ2kgYW5kIFRpbGFhamF2YXN0dXUuIE1vcmUgaW5mbyBhYm91dCBVbHRyYWhhY2suJyxcbiAgICBsb2dvOiAnL3VsdHJhaGFjay5wbmcnLFxuICAgIGJnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0ZXh0OiAnU2lnblNwYWNlJywgdXJsOiAnaHR0cHM6Ly9zaWduc3BhY2UuZmkvJyB9LFxuICAgICAgeyB0ZXh0OiAnS0lSQS1kaWdpJywgdXJsOiAnaHR0cDovL3d3dy5raXJhZGlnaS5maS9ldHVzaXZ1Lmh0bWwnIH0sXG4gICAgICB7IHRleHQ6ICdUaWxhYWphdmFzdHV1JywgdXJsOiAnaHR0cHM6Ly93d3cudGlsYWFqYXZhc3R1dS5maS9lbi8nIH0sXG4gICAgICB7IHRleHQ6ICdVbHRyYWhhY2snLCB1cmw6ICdodHRwOi8vd3d3LnVsdHJhaGFjay5vcmcvJyB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcjMSAtIEZpcnN0IHBsYWNlIGluIFF2aWsgc3BlZWQgY29kaW5nIGNoYWxsZW5nZScsXG4gICAgY29tcGFueTogJ1NsdXNoJyxcbiAgICB5ZWFyOiAnMjAxNicsXG4gICAgZGVzY3JpcHRpb246ICdBbiBhbGdvcml0aG0gYmFzZWQgcHV6emxlIHdoZXJlIHlvdSBoYWQgdG8gdXNlIEpTLWNvbW1hbmRzIHRvIHNvbHZlIGEgbWF6ZS4nLFxuICAgIGxvZ286ICcvc2x1c2gucG5nJyxcbiAgICBiZ0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgbGlua3M6IFt7IHRleHQ6ICdRdmlrJywgdXJsOiAnaHR0cDovL3F2aWsuZmknIH1dXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RvcCAzIC0gT3BlbiB0cmFjaycsXG4gICAgY29tcGFueTogJ1VsdHJhaGFjaycsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2UgZGV2ZWxvcGVkIGZ1cnRoZXIgdGhlIGZhbGwgZGV0ZWN0b3IgKHdoaWNoIHdvbiB0aGUgV2VsbGJlaW5nIEhhY2thdGhvbikgYW5kIG1hZGUgYW4gQWxhcm0gQ2VudGVyIGZvciB0aGUgYnJvd3NlciwgcGhvbmUgYW5kIHNtYXJ0d2F0Y2guIE1vcmUgaW5mbyBhYm91dCBVbHRyYWhhY2suJyxcbiAgICBsb2dvOiAnL3VsdHJhaGFjay5wbmcnLFxuICAgIGJnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0ZXh0OiAnYnJvd3NlcicsIHVybDogJ2h0dHA6Ly9zYWxtaS5wcm8vamVjdC9mYWxsLycgfSxcbiAgICAgIHsgdGV4dDogJ3Bob25lJywgdXJsOiAnaHR0cDovL3NhbG1pLnByby9qZWN0L2ZhbGwvZGVtby9pcGhvbmUvJyB9LFxuICAgICAgeyB0ZXh0OiAnc21hcnR3YXRjaCcsIHVybDogJ2h0dHA6Ly9zYWxtaS5wcm8vamVjdC9mYWxsL2RlbW8vcG9sYXIvJyB9LFxuICAgICAgeyB0ZXh0OiAnVWx0cmFoYWNrJywgdXJsOiAnaHR0cDovL3d3dy51bHRyYWhhY2sub3JnLycgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQm9udXMgcHJpemUgLSBGaW5uaXNoIFBhdGVudCBhbmQgUmVnaXN0cmF0aW9uIE9mZmljZSAoUFJIKScsXG4gICAgY29tcGFueTogJ1VsdHJhaGFjaycsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBib251cyBwcml6ZSBmcm9tIFBSSCB0byBoZWxwIHVzIGdldCBhIHBhdGVudCBmb3Igb3VyIGZhbGwgZGV0ZWN0b3IuJyxcbiAgICBsb2dvOiAnL3VsdHJhaGFjay5wbmcnLFxuICAgIGJnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBsaW5rczogW3sgdGV4dDogJ1BSSCcsIHVybDogJ2h0dHBzOi8vd3d3LnByaC5maS9lbi8nIH1dXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJyMxIC0gRmlyc3QgcGxhY2UgaW4gUXZpayBzcGVlZCBjb2RpbmcgY2hhbGxlbmdlJyxcbiAgICBjb21wYW55OiAnVWx0cmFoYWNrJyxcbiAgICB5ZWFyOiAnMjAxNicsXG4gICAgZGVzY3JpcHRpb246ICdBbiBhbGdvcml0aG0gYmFzZWQgcHV6emxlIHdoZXJlIHlvdSBoYWQgdG8gdXNlIEpTLWNvbW1hbmRzIHRvIHNvbHZlIGEgbWF6ZS4nLFxuICAgIGxvZ286ICcvdWx0cmFoYWNrLnBuZycsXG4gICAgYmdDb2xvcjogJyMwMDAwMDAnLFxuICAgIGxpbmtzOiBbeyB0ZXh0OiAnUXZpaycsIHVybDogJ2h0dHA6Ly9xdmlrLmZpJyB9XVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcjMSAtIEZpcnN0IHBsYWNlJyxcbiAgICBjb21wYW55OiAnV2VsbGJlaW5nIEhhY2thdGhvbicsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2UgbWFkZSBhIFJhc3BiZXJyeSBQaSArIHdlYmNhbSBzb2x1dGlvbiB0aGF0IGRldGVjdHMgaWYgYW4gZWxkZXJseSBwZXJzb24gZmFsbHMgb24gdGhlIGZsb29yLiBDaGVjayBvdXQgdGhlIHNvbHV0aW9uIGFuZCBtb3JlIGluZm8gYWJvdXQgdGhlIFdlbGxiZWluZyBIYWNrYXRob24uJyxcbiAgICBsb2dvOiAnL2h5dmludm9pbnRpLnBuZycsXG4gICAgYmdDb2xvcjogJyMwMDAwMDAnLFxuICAgIGxpbmtzOiBbXG4gICAgICB7IHRleHQ6ICdzb2x1dGlvbicsIHVybDogJ2h0dHA6Ly90dW5uLnVzL2FyZHVpbm8vZmFsbGRldGVjdG9yMi5waHAnIH0sXG4gICAgICB7IHRleHQ6ICdXZWxsYmVpbmcgSGFja2F0aG9uJywgdXJsOiAnaHR0cDovL2h5dmludm9pbnRpaGFjay5maS9yYXRrYWlzdXQtc29sdXRpb25zLTIwMTYvJyB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcjMSAtIEJlc3QgRGFkZHkgaW4gdGhlIFdvcmxkJyxcbiAgICBjb21wYW55OiAnTXkgZmFtaWx5IHNpbmNlIDIwMTQnLFxuICAgIHllYXI6ICcyMDE0JyxcbiAgICBkZXNjcmlwdGlvbjogYEp1ZGdlczogQWxleCAoJHthbGV4QWdlfSB5ci4pLCBWaWN0b3JpYSAoJHt2aWN0b3JpYUFnZX0geXIuKSBhbmQgQ2VjaWxpYSAoJHtjZWNpbGlhQWdlfSB5ci4pLmAsXG4gICAgbG9nbzogJy9oZWFydGguc3ZnJyxcbiAgICBiZ0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgYnV6endvcmRzOiBbJ1RlYW0gTGVhZGVyc2hpcCcsICdDcm9zcy1mdW5jdGlvbmFsIFRlYW1zJ11cbiAgfVxuXTtcblxuY29uc3QgQXdhcmRDYXJkID0gKHsgYXdhcmQgfTogeyBhd2FyZDogQXdhcmQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgcC02IG1iLTYgYW5pbWF0ZS1mYWRlLWluIGhvdmVyOmJnLXdoaXRlLzE1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTE2IGgtMTYgZmxleC1zaHJpbmstMCByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBhd2FyZC5iZ0NvbG9yIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTNcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YXdhcmQubG9nb31cbiAgICAgICAgICAgIGFsdD17YCR7YXdhcmQuY29tcGFueX0gbG9nb2B9XG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDY0cHgpIDEwMHZ3LCA2NHB4XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0xXCI+e2F3YXJkLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbWItMlwiPlxuICAgICAgICAgIHthd2FyZC5saW5rcyA/IChcbiAgICAgICAgICAgIGF3YXJkLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtsaW5rLnVybH0+XG4gICAgICAgICAgICAgICAge2luZGV4ID4gMCAmJiAnIC8gJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgYXdhcmQuY29tcGFueVxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTRcIj57YXdhcmQueWVhcn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgbWItNFwiPnthd2FyZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIHthd2FyZC5idXp6d29yZHMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgIHthd2FyZC5idXp6d29yZHMubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYnV6endvcmRHcm91cHMuZmluZChnID0+IGcud29yZHMuaW5jbHVkZXMod29yZCkpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e3dvcmR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tciAke2dyb3VwPy5jb2xvciB8fCAnZnJvbS1ncmF5LTQwMC8yMCB0by1ncmF5LTQwMC8yMCBib3JkZXItZ3JheS00MDAvNDAnfSBib3JkZXIgYm9yZGVyLW9wYWNpdHktNDBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXdhcmRzKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNXhsXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50IHRleHQtY2VudGVyIG1iLTEyXCI+QXdhcmRzICYgUmVjb2duaXRpb248L2gyPlxuICAgICAgICB7YXdhcmRzLm1hcCgoYXdhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEF3YXJkQ2FyZCBrZXk9e2luZGV4fSBhd2FyZD17YXdhcmR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSAiXSwibmFtZXMiOlsiSW1hZ2UiLCJidXp6d29yZEdyb3VwcyIsImNhbGN1bGF0ZUFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiRGF0ZSIsImFnZSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImFsZXhBZ2UiLCJ2aWN0b3JpYUFnZSIsImNlY2lsaWFBZ2UiLCJhd2FyZHMiLCJ0aXRsZSIsImNvbXBhbnkiLCJ5ZWFyIiwiZGVzY3JpcHRpb24iLCJsb2dvIiwiYmdDb2xvciIsImJ1enp3b3JkcyIsImxpbmtzIiwidGV4dCIsInVybCIsIkF3YXJkQ2FyZCIsImF3YXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJhbHQiLCJmaWxsIiwic2l6ZXMiLCJoMyIsInAiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ3b3JkIiwiZ3JvdXAiLCJmaW5kIiwiZyIsIndvcmRzIiwiaW5jbHVkZXMiLCJjb2xvciIsIkF3YXJkcyIsInNlY3Rpb24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Awards.tsx\n"));

/***/ })

});