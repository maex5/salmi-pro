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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Awards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/About */ \"(app-pages-browser)/./src/components/About.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction calculateAge(birthDate) {\n    const today = new Date();\n    let age = today.getFullYear() - birthDate.getFullYear();\n    const m = today.getMonth() - birthDate.getMonth();\n    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {\n        age--;\n    }\n    return age;\n}\nconst alexAge = calculateAge(new Date(2014, 1)); // February 2014\nconst victoriaAge = calculateAge(new Date(2015, 6)); // July 2015\nconst ceciliaAge = calculateAge(new Date(2019, 6)); // July 2019\nconst awards = [\n    {\n        title: \"Schibsted Sales Awards nomination 2019\",\n        company: \"Tori.fi / Schibsted\",\n        year: \"2019\",\n        description: 'I planned and built a new type of advertising solution to support Tori, Tori users and Tori advertisers. The product was nominated for \"Performance of the year\" and presented to the whole Schibsted.',\n        logo: \"/tori.png\",\n        bgColor: \"#ffffff\",\n        buzzwords: [\n            \"Ad Tech\",\n            \"Performance Marketing\",\n            \"Performance Optimization\",\n            \"Ad Monetization\",\n            \"Revenue Growth\"\n        ]\n    },\n    {\n        title: \"#3 - Third place in Hack the Construction Industry Productivity\",\n        company: \"Ultrahack\",\n        year: \"2017\",\n        description: \"We made an app that digitally signs documents with the help of a QR-code reader and SignSpace. The track was organized by SignSpace, KIRA-digi and Tilaajavastuu.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"SignSpace\",\n                url: \"https://signspace.fi/\"\n            },\n            {\n                text: \"KIRA-digi\",\n                url: \"http://www.kiradigi.fi/etusivu.html\"\n            },\n            {\n                text: \"Tilaajavastuu\",\n                url: \"https://www.tilaajavastuu.fi/en/\"\n            },\n            {\n                text: \"Ultrahack\",\n                url: \"http://www.ultrahack.org/\"\n            }\n        ],\n        buzzwords: [\n            \"Digital Transformation\",\n            \"API Integration\",\n            \"UI/UX\",\n            \"Node.js\"\n        ]\n    },\n    {\n        title: \"#1 - First place in Qvik speed coding challenge\",\n        company: \"Slush\",\n        year: \"2016\",\n        description: \"An algorithm based puzzle where you had to use JS-commands to solve a maze.\",\n        logo: \"/slush.png\",\n        bgColor: \"#ffffff\",\n        links: [\n            {\n                text: \"Qvik\",\n                url: \"http://qvik.fi\"\n            }\n        ],\n        buzzwords: [\n            \"JavaScript\",\n            \"Automation\",\n            \"Technical Integration\"\n        ]\n    },\n    {\n        title: \"Top 3 - Open track\",\n        company: \"Ultrahack\",\n        year: \"2016\",\n        description: \"We developed further the fall detector system and made an Alarm Center for the browser, phone and smartwatch interfaces.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"browser\",\n                url: \"http://salmi.pro/ject/fall/\"\n            },\n            {\n                text: \"phone\",\n                url: \"http://salmi.pro/ject/fall/demo/iphone/\"\n            },\n            {\n                text: \"smartwatch\",\n                url: \"http://salmi.pro/ject/fall/demo/polar/\"\n            },\n            {\n                text: \"Ultrahack\",\n                url: \"http://www.ultrahack.org/\"\n            }\n        ],\n        buzzwords: [\n            \"JavaScript\",\n            \"React\",\n            \"Product Innovation\",\n            \"UI/UX\",\n            \"API Integration\"\n        ]\n    },\n    {\n        title: \"Bonus prize - Finnish Patent and Registration Office (PRH)\",\n        company: \"Ultrahack\",\n        year: \"2016\",\n        description: \"A bonus prize from PRH to help us get a patent for our fall detector system.\",\n        logo: \"/ultrahack.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"PRH\",\n                url: \"https://www.prh.fi/en/\"\n            }\n        ],\n        buzzwords: [\n            \"Product Innovation\",\n            \"Project Management\"\n        ]\n    },\n    {\n        title: \"#1 - First place\",\n        company: \"Wellbeing Hackathon\",\n        year: \"2016\",\n        description: \"Developed an innovative fall detection system using Raspberry Pi and computer vision, designed to enhance safety for elderly care.\",\n        logo: \"/hyvinvointi.png\",\n        bgColor: \"#000000\",\n        links: [\n            {\n                text: \"solution\",\n                url: \"http://tunn.us/arduino/falldetector2.php\"\n            },\n            {\n                text: \"Wellbeing Hackathon\",\n                url: \"http://hyvinvointihack.fi/ratkaisut-solutions-2016/\"\n            }\n        ],\n        buzzwords: [\n            \"AI Tools\",\n            \"JavaScript\",\n            \"Data Analytics\",\n            \"Product Innovation\"\n        ]\n    },\n    {\n        title: \"#1 - Best Daddy in the World\",\n        company: \"My family since 2014\",\n        year: \"2014\",\n        description: \"Judges: Alex (\".concat(alexAge, \" yr.), Victoria (\").concat(victoriaAge, \" yr.) and Cecilia (\").concat(ceciliaAge, \" yr.).\"),\n        logo: \"/hearth.svg\",\n        bgColor: \"#ffffff\",\n        buzzwords: [\n            \"Team Leadership\",\n            \"Cross-functional Teams\",\n            \"Team Building\"\n        ]\n    }\n];\nconst AwardCard = (param)=>{\n    let { award } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"glass-card p-6 mb-6 animate-fade-in hover:bg-white/15 transition-all duration-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-start gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden\",\n                    style: {\n                        backgroundColor: award.bgColor\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: award.logo,\n                            alt: \"\".concat(award.company, \" logo\"),\n                            fill: true,\n                            sizes: \"(max-width: 64px) 100vw, 64px\",\n                            className: \"object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-semibold mb-1\",\n                            children: award.title\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400 mb-2\",\n                            children: award.links ? award.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        index > 0 && \" / \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: link.url,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"hover:text-white transition-colors\",\n                                            children: link.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, link.url, true, {\n                                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 15\n                                }, undefined)) : award.company\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500 mb-4\",\n                            children: award.year\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 151,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 mb-4\",\n                            children: award.description\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 9\n                        }, undefined),\n                        award.buzzwords && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap gap-2\",\n                            children: award.buzzwords.map((word)=>{\n                                const group = _components_About__WEBPACK_IMPORTED_MODULE_2__.buzzwordGroups.find((g)=>g.words.includes(word));\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xs px-3 py-1 rounded-full bg-gradient-to-r \".concat((group === null || group === void 0 ? void 0 : group.color) || \"from-gray-400/20 to-gray-400/20 border-gray-400/40\", \" border border-opacity-40\"),\n                                    children: word\n                                }, word, false, {\n                                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n            lineNumber: 118,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n        lineNumber: 117,\n        columnNumber: 3\n    }, undefined);\n};\n_c = AwardCard;\nfunction Awards() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"py-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 max-w-5xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-gradient text-center mb-12\",\n                    children: \"Awards & Recognition\"\n                }, void 0, false, {\n                    fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, this),\n                awards.map((award, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AwardCard, {\n                        award: award\n                    }, index, false, {\n                        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n                        lineNumber: 179,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n            lineNumber: 176,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/max.salmi@schibsted.com/Projects/salmi-pro/src/components/Awards.tsx\",\n        lineNumber: 175,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Awards;\nvar _c, _c1;\n$RefreshReg$(_c, \"AwardCard\");\n$RefreshReg$(_c1, \"Awards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F3YXJkcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFK0I7QUFFeUM7QUFheEUsU0FBU0UsYUFBYUMsU0FBZTtJQUNuQyxNQUFNQyxRQUFRLElBQUlDO0lBQ2xCLElBQUlDLE1BQU1GLE1BQU1HLFdBQVcsS0FBS0osVUFBVUksV0FBVztJQUNyRCxNQUFNQyxJQUFJSixNQUFNSyxRQUFRLEtBQUtOLFVBQVVNLFFBQVE7SUFDL0MsSUFBSUQsSUFBSSxLQUFNQSxNQUFNLEtBQUtKLE1BQU1NLE9BQU8sS0FBS1AsVUFBVU8sT0FBTyxJQUFLO1FBQy9ESjtJQUNGO0lBQ0EsT0FBT0E7QUFDVDtBQUVBLE1BQU1LLFVBQVVULGFBQWEsSUFBSUcsS0FBSyxNQUFNLEtBQUssZ0JBQWdCO0FBQ2pFLE1BQU1PLGNBQWNWLGFBQWEsSUFBSUcsS0FBSyxNQUFNLEtBQUssWUFBWTtBQUNqRSxNQUFNUSxhQUFhWCxhQUFhLElBQUlHLEtBQUssTUFBTSxLQUFLLFlBQVk7QUFFaEUsTUFBTVMsU0FBa0I7SUFDdEI7UUFDRUMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsV0FBVztZQUFDO1lBQVc7WUFBeUI7WUFBNEI7WUFBbUI7U0FBaUI7SUFDbEg7SUFDQTtRQUNFTixPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsU0FBUztRQUNURSxPQUFPO1lBQ0w7Z0JBQUVDLE1BQU07Z0JBQWFDLEtBQUs7WUFBd0I7WUFDbEQ7Z0JBQUVELE1BQU07Z0JBQWFDLEtBQUs7WUFBc0M7WUFDaEU7Z0JBQUVELE1BQU07Z0JBQWlCQyxLQUFLO1lBQW1DO1lBQ2pFO2dCQUFFRCxNQUFNO2dCQUFhQyxLQUFLO1lBQTRCO1NBQ3ZEO1FBQ0RILFdBQVc7WUFBQztZQUEwQjtZQUFtQjtZQUFTO1NBQVU7SUFDOUU7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LEdBQUcsQ0FBQyxDQUFDUTtnQ0FDcEIsTUFBTUMsUUFBUTdDLDZEQUFjQSxDQUFDOEMsSUFBSSxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0w7Z0NBQ3hELHFCQUNFLDhEQUFDTDtvQ0FFQ1osV0FBVyxtREFBd0gsT0FBckVrQixDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9LLEtBQUssS0FBSSxzREFBcUQ7OENBRWxJTjttQ0FISUE7Ozs7OzRCQU1YOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FqRE5wQjtBQXlEUyxTQUFTMkI7SUFDdEIscUJBQ0UsOERBQUNDO1FBQVF6QixXQUFVO2tCQUNqQiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUMwQjtvQkFBRzFCLFdBQVU7OEJBQWtDOzs7Ozs7Z0JBQy9DZCxPQUFPdUIsR0FBRyxDQUFDLENBQUNYLE9BQU9hLHNCQUNsQiw4REFBQ2Q7d0JBQXNCQyxPQUFPQTt1QkFBZGE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7TUFYd0JhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0F3YXJkcy50c3g/Y2FkYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IEZhVHJvcGh5IH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgYnV6endvcmRHcm91cHMsIHR5cGUgQnV6endvcmRHcm91cCB9IGZyb20gJ0AvY29tcG9uZW50cy9BYm91dCc7XG5cbmludGVyZmFjZSBBd2FyZCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbXBhbnk6IHN0cmluZztcbiAgeWVhcjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsb2dvOiBzdHJpbmc7XG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIGxpbmtzPzogeyB0ZXh0OiBzdHJpbmc7IHVybDogc3RyaW5nIH1bXTtcbiAgYnV6endvcmRzPzogc3RyaW5nW107XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFnZShiaXJ0aERhdGU6IERhdGUpOiBudW1iZXIge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG4gIGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuICAgIGFnZS0tO1xuICB9XG4gIHJldHVybiBhZ2U7XG59XG5cbmNvbnN0IGFsZXhBZ2UgPSBjYWxjdWxhdGVBZ2UobmV3IERhdGUoMjAxNCwgMSkpOyAvLyBGZWJydWFyeSAyMDE0XG5jb25zdCB2aWN0b3JpYUFnZSA9IGNhbGN1bGF0ZUFnZShuZXcgRGF0ZSgyMDE1LCA2KSk7IC8vIEp1bHkgMjAxNVxuY29uc3QgY2VjaWxpYUFnZSA9IGNhbGN1bGF0ZUFnZShuZXcgRGF0ZSgyMDE5LCA2KSk7IC8vIEp1bHkgMjAxOVxuXG5jb25zdCBhd2FyZHM6IEF3YXJkW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ1NjaGlic3RlZCBTYWxlcyBBd2FyZHMgbm9taW5hdGlvbiAyMDE5JyxcbiAgICBjb21wYW55OiAnVG9yaS5maSAvIFNjaGlic3RlZCcsXG4gICAgeWVhcjogJzIwMTknLFxuICAgIGRlc2NyaXB0aW9uOiAnSSBwbGFubmVkIGFuZCBidWlsdCBhIG5ldyB0eXBlIG9mIGFkdmVydGlzaW5nIHNvbHV0aW9uIHRvIHN1cHBvcnQgVG9yaSwgVG9yaSB1c2VycyBhbmQgVG9yaSBhZHZlcnRpc2Vycy4gVGhlIHByb2R1Y3Qgd2FzIG5vbWluYXRlZCBmb3IgXCJQZXJmb3JtYW5jZSBvZiB0aGUgeWVhclwiIGFuZCBwcmVzZW50ZWQgdG8gdGhlIHdob2xlIFNjaGlic3RlZC4nLFxuICAgIGxvZ286ICcvdG9yaS5wbmcnLFxuICAgIGJnQ29sb3I6ICcjZmZmZmZmJyxcbiAgICBidXp6d29yZHM6IFsnQWQgVGVjaCcsICdQZXJmb3JtYW5jZSBNYXJrZXRpbmcnLCAnUGVyZm9ybWFuY2UgT3B0aW1pemF0aW9uJywgJ0FkIE1vbmV0aXphdGlvbicsICdSZXZlbnVlIEdyb3d0aCddXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJyMzIC0gVGhpcmQgcGxhY2UgaW4gSGFjayB0aGUgQ29uc3RydWN0aW9uIEluZHVzdHJ5IFByb2R1Y3Rpdml0eScsXG4gICAgY29tcGFueTogJ1VsdHJhaGFjaycsXG4gICAgeWVhcjogJzIwMTcnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2UgbWFkZSBhbiBhcHAgdGhhdCBkaWdpdGFsbHkgc2lnbnMgZG9jdW1lbnRzIHdpdGggdGhlIGhlbHAgb2YgYSBRUi1jb2RlIHJlYWRlciBhbmQgU2lnblNwYWNlLiBUaGUgdHJhY2sgd2FzIG9yZ2FuaXplZCBieSBTaWduU3BhY2UsIEtJUkEtZGlnaSBhbmQgVGlsYWFqYXZhc3R1dS4nLFxuICAgIGxvZ286ICcvdWx0cmFoYWNrLnBuZycsXG4gICAgYmdDb2xvcjogJyMwMDAwMDAnLFxuICAgIGxpbmtzOiBbXG4gICAgICB7IHRleHQ6ICdTaWduU3BhY2UnLCB1cmw6ICdodHRwczovL3NpZ25zcGFjZS5maS8nIH0sXG4gICAgICB7IHRleHQ6ICdLSVJBLWRpZ2knLCB1cmw6ICdodHRwOi8vd3d3LmtpcmFkaWdpLmZpL2V0dXNpdnUuaHRtbCcgfSxcbiAgICAgIHsgdGV4dDogJ1RpbGFhamF2YXN0dXUnLCB1cmw6ICdodHRwczovL3d3dy50aWxhYWphdmFzdHV1LmZpL2VuLycgfSxcbiAgICAgIHsgdGV4dDogJ1VsdHJhaGFjaycsIHVybDogJ2h0dHA6Ly93d3cudWx0cmFoYWNrLm9yZy8nIH1cbiAgICBdLFxuICAgIGJ1enp3b3JkczogWydEaWdpdGFsIFRyYW5zZm9ybWF0aW9uJywgJ0FQSSBJbnRlZ3JhdGlvbicsICdVSS9VWCcsICdOb2RlLmpzJ11cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnIzEgLSBGaXJzdCBwbGFjZSBpbiBRdmlrIHNwZWVkIGNvZGluZyBjaGFsbGVuZ2UnLFxuICAgIGNvbXBhbnk6ICdTbHVzaCcsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnQW4gYWxnb3JpdGhtIGJhc2VkIHB1enpsZSB3aGVyZSB5b3UgaGFkIHRvIHVzZSBKUy1jb21tYW5kcyB0byBzb2x2ZSBhIG1hemUuJyxcbiAgICBsb2dvOiAnL3NsdXNoLnBuZycsXG4gICAgYmdDb2xvcjogJyNmZmZmZmYnLFxuICAgIGxpbmtzOiBbeyB0ZXh0OiAnUXZpaycsIHVybDogJ2h0dHA6Ly9xdmlrLmZpJyB9XSxcbiAgICBidXp6d29yZHM6IFsnSmF2YVNjcmlwdCcsICdBdXRvbWF0aW9uJywgJ1RlY2huaWNhbCBJbnRlZ3JhdGlvbiddXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RvcCAzIC0gT3BlbiB0cmFjaycsXG4gICAgY29tcGFueTogJ1VsdHJhaGFjaycsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnV2UgZGV2ZWxvcGVkIGZ1cnRoZXIgdGhlIGZhbGwgZGV0ZWN0b3Igc3lzdGVtIGFuZCBtYWRlIGFuIEFsYXJtIENlbnRlciBmb3IgdGhlIGJyb3dzZXIsIHBob25lIGFuZCBzbWFydHdhdGNoIGludGVyZmFjZXMuJyxcbiAgICBsb2dvOiAnL3VsdHJhaGFjay5wbmcnLFxuICAgIGJnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0ZXh0OiAnYnJvd3NlcicsIHVybDogJ2h0dHA6Ly9zYWxtaS5wcm8vamVjdC9mYWxsLycgfSxcbiAgICAgIHsgdGV4dDogJ3Bob25lJywgdXJsOiAnaHR0cDovL3NhbG1pLnByby9qZWN0L2ZhbGwvZGVtby9pcGhvbmUvJyB9LFxuICAgICAgeyB0ZXh0OiAnc21hcnR3YXRjaCcsIHVybDogJ2h0dHA6Ly9zYWxtaS5wcm8vamVjdC9mYWxsL2RlbW8vcG9sYXIvJyB9LFxuICAgICAgeyB0ZXh0OiAnVWx0cmFoYWNrJywgdXJsOiAnaHR0cDovL3d3dy51bHRyYWhhY2sub3JnLycgfVxuICAgIF0sXG4gICAgYnV6endvcmRzOiBbJ0phdmFTY3JpcHQnLCAnUmVhY3QnLCAnUHJvZHVjdCBJbm5vdmF0aW9uJywgJ1VJL1VYJywgJ0FQSSBJbnRlZ3JhdGlvbiddXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0JvbnVzIHByaXplIC0gRmlubmlzaCBQYXRlbnQgYW5kIFJlZ2lzdHJhdGlvbiBPZmZpY2UgKFBSSCknLFxuICAgIGNvbXBhbnk6ICdVbHRyYWhhY2snLFxuICAgIHllYXI6ICcyMDE2JyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYm9udXMgcHJpemUgZnJvbSBQUkggdG8gaGVscCB1cyBnZXQgYSBwYXRlbnQgZm9yIG91ciBmYWxsIGRldGVjdG9yIHN5c3RlbS4nLFxuICAgIGxvZ286ICcvdWx0cmFoYWNrLnBuZycsXG4gICAgYmdDb2xvcjogJyMwMDAwMDAnLFxuICAgIGxpbmtzOiBbeyB0ZXh0OiAnUFJIJywgdXJsOiAnaHR0cHM6Ly93d3cucHJoLmZpL2VuLycgfV0sXG4gICAgYnV6endvcmRzOiBbJ1Byb2R1Y3QgSW5ub3ZhdGlvbicsICdQcm9qZWN0IE1hbmFnZW1lbnQnXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICcjMSAtIEZpcnN0IHBsYWNlJyxcbiAgICBjb21wYW55OiAnV2VsbGJlaW5nIEhhY2thdGhvbicsXG4gICAgeWVhcjogJzIwMTYnLFxuICAgIGRlc2NyaXB0aW9uOiAnRGV2ZWxvcGVkIGFuIGlubm92YXRpdmUgZmFsbCBkZXRlY3Rpb24gc3lzdGVtIHVzaW5nIFJhc3BiZXJyeSBQaSBhbmQgY29tcHV0ZXIgdmlzaW9uLCBkZXNpZ25lZCB0byBlbmhhbmNlIHNhZmV0eSBmb3IgZWxkZXJseSBjYXJlLicsXG4gICAgbG9nbzogJy9oeXZpbnZvaW50aS5wbmcnLFxuICAgIGJnQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBsaW5rczogW1xuICAgICAgeyB0ZXh0OiAnc29sdXRpb24nLCB1cmw6ICdodHRwOi8vdHVubi51cy9hcmR1aW5vL2ZhbGxkZXRlY3RvcjIucGhwJyB9LFxuICAgICAgeyB0ZXh0OiAnV2VsbGJlaW5nIEhhY2thdGhvbicsIHVybDogJ2h0dHA6Ly9oeXZpbnZvaW50aWhhY2suZmkvcmF0a2Fpc3V0LXNvbHV0aW9ucy0yMDE2LycgfVxuICAgIF0sXG4gICAgYnV6endvcmRzOiBbJ0FJIFRvb2xzJywgJ0phdmFTY3JpcHQnLCAnRGF0YSBBbmFseXRpY3MnLCAnUHJvZHVjdCBJbm5vdmF0aW9uJ11cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnIzEgLSBCZXN0IERhZGR5IGluIHRoZSBXb3JsZCcsXG4gICAgY29tcGFueTogJ015IGZhbWlseSBzaW5jZSAyMDE0JyxcbiAgICB5ZWFyOiAnMjAxNCcsXG4gICAgZGVzY3JpcHRpb246IGBKdWRnZXM6IEFsZXggKCR7YWxleEFnZX0geXIuKSwgVmljdG9yaWEgKCR7dmljdG9yaWFBZ2V9IHlyLikgYW5kIENlY2lsaWEgKCR7Y2VjaWxpYUFnZX0geXIuKS5gLFxuICAgIGxvZ286ICcvaGVhcnRoLnN2ZycsXG4gICAgYmdDb2xvcjogJyNmZmZmZmYnLFxuICAgIGJ1enp3b3JkczogWydUZWFtIExlYWRlcnNoaXAnLCAnQ3Jvc3MtZnVuY3Rpb25hbCBUZWFtcycsICdUZWFtIEJ1aWxkaW5nJ11cbiAgfVxuXTtcblxuY29uc3QgQXdhcmRDYXJkID0gKHsgYXdhcmQgfTogeyBhd2FyZDogQXdhcmQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzLWNhcmQgcC02IG1iLTYgYW5pbWF0ZS1mYWRlLWluIGhvdmVyOmJnLXdoaXRlLzE1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTE2IGgtMTYgZmxleC1zaHJpbmstMCByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBhd2FyZC5iZ0NvbG9yIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTNcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YXdhcmQubG9nb31cbiAgICAgICAgICAgIGFsdD17YCR7YXdhcmQuY29tcGFueX0gbG9nb2B9XG4gICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDY0cHgpIDEwMHZ3LCA2NHB4XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0xXCI+e2F3YXJkLnRpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbWItMlwiPlxuICAgICAgICAgIHthd2FyZC5saW5rcyA/IChcbiAgICAgICAgICAgIGF3YXJkLmxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtsaW5rLnVybH0+XG4gICAgICAgICAgICAgICAge2luZGV4ID4gMCAmJiAnIC8gJ31cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay51cmx9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgYXdhcmQuY29tcGFueVxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLTRcIj57YXdhcmQueWVhcn08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgbWItNFwiPnthd2FyZC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIHthd2FyZC5idXp6d29yZHMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgIHthd2FyZC5idXp6d29yZHMubWFwKCh3b3JkKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYnV6endvcmRHcm91cHMuZmluZChnID0+IGcud29yZHMuaW5jbHVkZXMod29yZCkpO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBrZXk9e3dvcmR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXhzIHB4LTMgcHktMSByb3VuZGVkLWZ1bGwgYmctZ3JhZGllbnQtdG8tciAke2dyb3VwPy5jb2xvciB8fCAnZnJvbS1ncmF5LTQwMC8yMCB0by1ncmF5LTQwMC8yMCBib3JkZXItZ3JheS00MDAvNDAnfSBib3JkZXIgYm9yZGVyLW9wYWNpdHktNDBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt3b3JkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXdhcmRzKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWF4LXctNXhsXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYWRpZW50IHRleHQtY2VudGVyIG1iLTEyXCI+QXdhcmRzICYgUmVjb2duaXRpb248L2gyPlxuICAgICAgICB7YXdhcmRzLm1hcCgoYXdhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEF3YXJkQ2FyZCBrZXk9e2luZGV4fSBhd2FyZD17YXdhcmR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSAiXSwibmFtZXMiOlsiSW1hZ2UiLCJidXp6d29yZEdyb3VwcyIsImNhbGN1bGF0ZUFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiRGF0ZSIsImFnZSIsImdldEZ1bGxZZWFyIiwibSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImFsZXhBZ2UiLCJ2aWN0b3JpYUFnZSIsImNlY2lsaWFBZ2UiLCJhd2FyZHMiLCJ0aXRsZSIsImNvbXBhbnkiLCJ5ZWFyIiwiZGVzY3JpcHRpb24iLCJsb2dvIiwiYmdDb2xvciIsImJ1enp3b3JkcyIsImxpbmtzIiwidGV4dCIsInVybCIsIkF3YXJkQ2FyZCIsImF3YXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJhbHQiLCJmaWxsIiwic2l6ZXMiLCJoMyIsInAiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ3b3JkIiwiZ3JvdXAiLCJmaW5kIiwiZyIsIndvcmRzIiwiaW5jbHVkZXMiLCJjb2xvciIsIkF3YXJkcyIsInNlY3Rpb24iLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Awards.tsx\n"));

/***/ })

});