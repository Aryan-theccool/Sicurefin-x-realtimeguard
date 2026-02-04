(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/SecureFin/components/realtime-guard/map-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SecureFin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SecureFin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/SecureFin/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dynamic import for Leaflet components to avoid SSR errors
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Marker), {
    loadableGenerated: {
        modules: [
            "[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Popup), {
    loadableGenerated: {
        modules: [
            "[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Popup;
const Polyline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Polyline), {
    loadableGenerated: {
        modules: [
            "[project]/SecureFin/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c4 = Polyline;
const MapViewComponent = ({ transactions })=>{
    _s();
    const [L, setL] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Limit to latest 25 for performance
    const activeTransactions = transactions.slice(0, 25);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapViewComponent.useEffect": ()=>{
            // Import leaflet only on client side
            __turbopack_context__.A("[project]/SecureFin/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)").then({
                "MapViewComponent.useEffect": (leaflet)=>{
                    setL(leaflet.default);
                    // Fix icon issue
                    delete leaflet.default.Icon.Default.prototype._getIconUrl;
                    leaflet.default.Icon.Default.mergeOptions({
                        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
                    });
                }
            }["MapViewComponent.useEffect"]);
        }
    }["MapViewComponent.useEffect"], []);
    if (!L) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full bg-slate-900 animate-pulse rounded-xl"
    }, void 0, false, {
        fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
        lineNumber: 49,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0));
    const fraudIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [
            25,
            41
        ],
        iconAnchor: [
            12,
            41
        ],
        popupAnchor: [
            1,
            -34
        ],
        shadowSize: [
            41,
            41
        ]
    });
    const safeIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [
            25,
            41
        ],
        iconAnchor: [
            12,
            41
        ],
        popupAnchor: [
            1,
            -34
        ],
        shadowSize: [
            41,
            41
        ]
    });
    // Group transactions by user to find jumps
    const userPaths = {};
    activeTransactions.forEach((tx)=>{
        if (!userPaths[tx.user_id]) userPaths[tx.user_id] = [];
        userPaths[tx.user_id].push([
            tx.lat,
            tx.lon
        ]);
    });
    const polylineOptions = {
        color: '#f59e0b',
        weight: 2,
        dashArray: '5, 10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full rounded-xl overflow-hidden border border-slate-700 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-[400] bg-slate-900/80 backdrop-blur p-2 rounded border border-slate-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xs font-bold text-slate-300 uppercase",
                    children: "Live Geo-Tracking"
                }, void 0, false, {
                    fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                center: [
                    20.5937,
                    78.9629
                ],
                zoom: 5,
                scrollWheelZoom: true,
                style: {
                    height: '100%',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                        attribution: "© CARTO",
                        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    }, void 0, false, {
                        fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTransactions.map((tx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                            position: [
                                tx.lat,
                                tx.lon
                            ],
                            icon: tx.fraud_score > 80 ? fraudIcon : safeIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: tx.merchant
                                        }, void 0, false, {
                                            fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                                            lineNumber: 103,
                                            columnNumber: 63
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "₹",
                                        tx.amount?.toFixed(2),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                                            lineNumber: 104,
                                            columnNumber: 57
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Risk: ",
                                        tx.fraud_score,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, tx.id, false, {
                            fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))),
                    Object.values(userPaths).map((path, idx)=>path.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Polyline, {
                            positions: path,
                            pathOptions: polylineOptions
                        }, idx, false, {
                            fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                            lineNumber: 112,
                            columnNumber: 40
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/SecureFin/components/realtime-guard/map-view.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapViewComponent, "FBoVuW+wAQ9IV5gP76LmtW2jcXg=");
_c5 = MapViewComponent;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c6 = __TURBOPACK__imported__module__$5b$project$5d2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MapViewComponent);
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "Popup");
__turbopack_context__.k.register(_c4, "Polyline");
__turbopack_context__.k.register(_c5, "MapViewComponent");
__turbopack_context__.k.register(_c6, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/SecureFin/components/realtime-guard/map-view.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/SecureFin/components/realtime-guard/map-view.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=SecureFin_components_realtime-guard_map-view_tsx_639231f9._.js.map