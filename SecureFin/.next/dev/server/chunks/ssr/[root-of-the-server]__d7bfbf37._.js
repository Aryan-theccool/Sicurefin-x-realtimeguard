module.exports = [
"[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Code-Odyssey/SecureFin/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/Code-Odyssey/SecureFin/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isLoggedIn, role, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isHome = pathname === "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex h-16 items-center justify-between px-4 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        !isHome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>router.back(),
                            className: "mr-2 text-muted-foreground hover:text-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "h-6 w-6 text-cyan-500"
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-lg tracking-tight text-foreground",
                                    children: "SecureFin"
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-6 ml-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/about" ? "text-cyan-400" : "text-muted-foreground"),
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this),
                                isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/dashboard" ? "text-cyan-400" : "text-muted-foreground"),
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                            lineNumber: 49,
                                            columnNumber: 33
                                        }, this),
                                        role !== 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/vitta-raksha",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/vitta-raksha" ? "text-cyan-400" : "text-muted-foreground"),
                                                    children: "Vitt Raksha"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/optibudget",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/optibudget" ? "text-cyan-400" : "text-muted-foreground"),
                                                    children: "OptiBudget"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/realtime-guard",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/realtime-guard" ? "text-cyan-400" : "text-muted-foreground"),
                                            children: "RealtimeGuard"
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                            lineNumber: 63,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/wallet",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors hover:text-cyan-400", pathname === "/wallet" ? "text-cyan-400" : "text-muted-foreground"),
                                            children: "Wallet"
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                            lineNumber: 67,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: logout,
                                className: "gap-2 hover:bg-red-500/10 hover:text-red-500 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 33
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "border-cyan-500/20 hover:bg-cyan-500/10 text-cyan-500",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                lineNumber: 83,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:hidden relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "p-2 text-muted-foreground hover:text-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this),
                                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full right-0 mt-2 w-56 p-2 bg-card border border-border rounded-xl shadow-lg z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "flex flex-col space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 37
                                            }, this),
                                            isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                        children: "Dashboard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 45
                                                    }, this),
                                                    role !== 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/vitta-raksha",
                                                                className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                                children: "Vitt Raksha"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/optibudget",
                                                                className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                                children: "OptiBudget"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/realtime-guard",
                                                        className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                        children: "RealtimeGuard"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/wallet",
                                                        className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                                        children: "Wallet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t border-border my-2 pt-2",
                                                children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: logout,
                                                    className: "w-full text-left px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 49
                                                        }, this),
                                                        " Logout"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 45
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: "block w-full text-center px-3 py-2 text-sm bg-cyan-500/10 text-cyan-500 rounded-lg",
                                                    children: "Login"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                                lineNumber: 117,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/navbar.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletHeader",
    ()=>WalletHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
;
;
;
function WalletHeader({ onConnect, address, isConnecting }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold tracking-tight text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "h-8 w-8 text-[#00C2A8]"
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            "Secure Wallet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 mt-1",
                        children: "Manage your SFT tokens, micro-payments, and UPI transactions securely."
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                onClick: onConnect,
                disabled: isConnecting || !!address,
                className: "bg-transparent border border-[#00C2A8] text-[#00C2A8] hover:bg-[#00C2A8]/10 shadow-[0_0_15px_rgba(0,194,168,0.3)] transition-all duration-300 disabled:opacity-50",
                children: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : isConnecting ? "Connecting..." : "Connect Wallet"
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
}),
"[project]/Code-Odyssey/SecureFin/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}),
"[project]/Code-Odyssey/SecureFin/components/ui/form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const useFormField = ()=>{
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"]({});
const FormItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[0.8rem] font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/form.tsx",
        lineNumber: 157,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
FormMessage.displayName = "FormMessage";
;
}),
"[project]/Code-Odyssey/SecureFin/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/input.tsx",
        lineNumber: 11,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/Code-Odyssey/SecureFin/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Code-Odyssey/SecureFin/src/blockchain/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHAIN_ID",
    ()=>CHAIN_ID,
    "CHAIN_ID_HEX",
    ()=>CHAIN_ID_HEX,
    "GANACHE_RPC",
    ()=>GANACHE_RPC,
    "SFT_DECIMALS",
    ()=>SFT_DECIMALS,
    "SFT_SYMBOL",
    ()=>SFT_SYMBOL,
    "SFT_TOKEN_ADDRESS",
    ()=>SFT_TOKEN_ADDRESS
]);
const GANACHE_RPC = "http://127.0.0.1:8545";
const CHAIN_ID = 1337;
const CHAIN_ID_HEX = "0x539"; // 1337 in hex
const SFT_TOKEN_ADDRESS = "0x91d63989ef903ff4adf9b99744739fa0b79d0f2f";
const SFT_DECIMALS = 18;
const SFT_SYMBOL = "SFT";
}),
"[project]/Code-Odyssey/SecureFin/src/blockchain/sft-abi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(["function name() view returns (string)","function symbol() view returns (string)","function decimals() view returns (uint8)","function totalSupply() view returns (uint256)","function balanceOf(address owner) view returns (uint256)","function transfer(address to, uint256 amount) returns (bool)","function transferFrom(address from, address to, uint256 amount) returns (bool)","function approve(address spender, uint256 amount) returns (bool)","function allowance(address owner, address spender) view returns (uint256)","event Transfer(address indexed from, address indexed to, uint256 value)","event Approval(address indexed owner, address indexed spender, uint256 value)"]);}),
"[project]/Code-Odyssey/SecureFin/src/blockchain/wallet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectWallet",
    ()=>connectWallet,
    "getEthBalance",
    ()=>getEthBalance,
    "getSFTBalance",
    ()=>getSFTBalance,
    "getShortAddress",
    ()=>getShortAddress,
    "subscribeToAccountChanges",
    ()=>subscribeToAccountChanges,
    "transferSFT",
    ()=>transferSFT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/src/blockchain/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$sft$2d$abi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/src/blockchain/sft-abi.json (json)");
;
;
;
let provider = null;
let signer = null;
let contract = null;
async function connectWallet() {
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error("MetaMask is not installed. Please install it to use this app.");
        }
        provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
        // Request account access
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || accounts.length === 0) {
            throw new Error("No accounts found");
        }
        // Check Network
        const network = await provider.getNetwork();
        if (Number(network.chainId) !== __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAIN_ID"]) {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAIN_ID_HEX"]
                        }
                    ]
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CHAIN_ID_HEX"],
                                chainName: "Ganache Local",
                                rpcUrls: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GANACHE_RPC"]
                                ],
                                nativeCurrency: {
                                    name: "ETH",
                                    symbol: "ETH",
                                    decimals: 18
                                }
                            }
                        ]
                    });
                } else {
                    throw switchError;
                }
            }
        }
        signer = await provider.getSigner();
        const address = await signer.getAddress();
        // Initialize Contract
        contract = new __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SFT_TOKEN_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$sft$2d$abi$2e$json__$28$json$29$__["default"], signer);
        return address;
    } catch (err) {
        console.error("Failed to connect wallet:", err);
        throw err;
    }
}
async function getSFTBalance(address) {
    try {
        if (!contract) {
            // Try to initialize read-only if not connected
            if (window.ethereum) {
                const tempProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                contract = new __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SFT_TOKEN_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$sft$2d$abi$2e$json__$28$json$29$__["default"], tempProvider);
            } else {
                return "0.00";
            }
        }
        const rawBalance = await contract.balanceOf(address);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatUnits(rawBalance, 18);
    } catch (err) {
        console.error("Error fetching SFT balance:", err);
        return "0.00";
    }
}
async function getEthBalance(address) {
    try {
        if (!provider) {
            if (window.ethereum) {
                provider = new __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            } else {
                return "0.00";
            }
        }
        const balance = await provider.getBalance(address);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(balance);
    } catch (err) {
        console.error("Error fetching ETH balance:", err);
        return "0.00";
    }
}
async function transferSFT(to, amount) {
    if (!signer || !contract) {
        throw new Error("Wallet not connected. Please connect your wallet first.");
    }
    try {
        const parsedAmount = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseUnits(amount, 18);
        const tx = await contract.transfer(to, parsedAmount);
        const receipt = await tx.wait();
        return receipt.hash;
    } catch (err) {
        console.error("Transfer failed:", err);
        throw new Error(err.reason || err.message || "Transaction failed");
    }
}
function getShortAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
function subscribeToAccountChanges(callback) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
}),
"[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransferForm",
    ()=>TransferForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/zod/v3/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/src/blockchain/wallet.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["object"]({
    recipient: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().min(42, "Invalid Ethereum address").max(42, "Invalid Ethereum address").regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address format"),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]().regex(/^\d+(\.\d+)?$/, "Invalid amount")
});
function TransferForm({ address, sftBalance, onTransferSuccess }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
        defaultValues: {
            recipient: "",
            amount: ""
        }
    });
    async function onSubmit(values) {
        if (!address) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please connect your wallet first");
            return;
        }
        if (parseFloat(values.amount) > parseFloat(sftBalance)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Insufficient Balance", {
                description: `You only have ${sftBalance} SFT.`
            });
            return;
        }
        setIsLoading(true);
        try {
            // 1. Execute Blockchain Transaction
            const txHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transferSFT"])(values.recipient, values.amount);
            // 2. Log to Backend
            await fetch('/api/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    txHash,
                    from: address,
                    to: values.recipient,
                    amount: values.amount,
                    timestamp: new Date().toISOString()
                })
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Transfer successful!", {
                description: `Transaction Hash: ${txHash.slice(0, 10)}...`
            });
            form.reset();
            onTransferSuccess();
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Transfer failed", {
                description: error.message || "Unknown error occurred"
            });
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-black/40 border-[#00C2A8]/20 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-white flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "h-5 w-5 text-[#00C2A8]"
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        "Transfer SFT"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Form"], {
                    ...form,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: form.handleSubmit(onSubmit),
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                control: form.control,
                                name: "recipient",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                className: "text-slate-300",
                                                children: "Recipient Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 108,
                                                columnNumber: 37
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "0x...",
                                                    ...field,
                                                    className: "bg-black/20 border-slate-700 text-white focus:border-[#00C2A8]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 41
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 109,
                                                columnNumber: 37
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 112,
                                                columnNumber: 37
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                        lineNumber: 107,
                                        columnNumber: 33
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormField"], {
                                control: form.control,
                                name: "amount",
                                render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormLabel"], {
                                                className: "text-slate-300",
                                                children: "Amount (SFT)"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormControl"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "0.0",
                                                    ...field,
                                                    className: "bg-black/20 border-slate-700 text-white focus:border-[#00C2A8]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 41
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 122,
                                                columnNumber: 37
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormMessage"], {}, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                className: "w-full bg-[#00C2A8] hover:bg-[#00C2A8]/90 text-black font-semibold",
                                disabled: isLoading,
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                            lineNumber: 136,
                                            columnNumber: 37
                                        }, this),
                                        "Processing..."
                                    ]
                                }, void 0, true) : "Send Tokens"
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                        lineNumber: 102,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                    lineNumber: 101,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
}),
"[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionHistory",
    ()=>TransactionHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/arrow-down-left.js [app-ssr] (ecmascript) <export default as ArrowDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/src/blockchain/wallet.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TransactionHistory({ address, refreshTrigger }) {
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address) {
            fetchHistory();
        }
    }, [
        address,
        refreshTrigger
    ]);
    async function fetchHistory() {
        setLoading(true);
        try {
            const res = await fetch(`/api/history?address=${address}`);
            const data = await res.json();
            if (data.transactions) {
                setTransactions(data.transactions);
            }
        } catch (error) {
            console.error("Failed to fetch history:", error);
        } finally{
            setLoading(false);
        }
    }
    if (!address) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-black/40 border-[#00C2A8]/20 backdrop-blur-sm h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-white flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                            className: "h-5 w-5 text-[#00C2A8]"
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        "Transaction History"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-center py-4",
                        children: "Loading history..."
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, this) : transactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 text-center py-4",
                        children: "No transactions found"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                        lineNumber: 62,
                        columnNumber: 25
                    }, this) : transactions.map((tx)=>{
                        const isIncoming = tx.to.toLowerCase() === address.toLowerCase();
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#00C2A8]/30 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-2 rounded-full ${isIncoming ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`,
                                            children: isIncoming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownLeft$3e$__["ArrowDownLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                                lineNumber: 70,
                                                columnNumber: 59
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                                lineNumber: 70,
                                                columnNumber: 99
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                            lineNumber: 69,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium text-white",
                                                    children: [
                                                        isIncoming ? 'Received from' : 'Sent to',
                                                        " ",
                                                        isIncoming ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortAddress"])(tx.from) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortAddress"])(tx.to)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: new Date(tx.timestamp).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                            lineNumber: 72,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                    lineNumber: 68,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm font-bold ${isIncoming ? 'text-green-400' : 'text-white'}`,
                                            children: [
                                                isIncoming ? '+' : '-',
                                                tx.amount,
                                                " SFT"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                            lineNumber: 82,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[#00C2A8]",
                                            children: tx.status
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                            lineNumber: 85,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                                    lineNumber: 81,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, tx.txHash, true, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                            lineNumber: 67,
                            columnNumber: 33
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
}),
"[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SFTDashboard",
    ()=>SFTDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$wallet$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/wallet/wallet-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$transfer$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/wallet/transfer-form.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$transaction$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/wallet/transaction-history.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/src/blockchain/wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
"use client";
;
;
;
;
;
;
;
;
;
function SFTDashboard() {
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sftBalance, setSftBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.00");
    const [ethBalance, setEthBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.00");
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshTrigger, setRefreshTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if already connected
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Subscribe to account changes
        const { subscribeToAccountChanges } = __turbopack_context__.r("[project]/Code-Odyssey/SecureFin/src/blockchain/wallet.ts [app-ssr] (ecmascript)");
        subscribeToAccountChanges((newAddress)=>{
            setAddress(newAddress);
            if (newAddress) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Wallet account changed");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Wallet disconnected");
            }
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (address) {
            updateBalances();
        }
    }, [
        address,
        refreshTrigger
    ]);
    async function handleConnect() {
        console.log("Attempting to connect wallet...");
        setIsConnecting(true);
        try {
            const addr = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connectWallet"])();
            console.log("Wallet connected:", addr);
            setAddress(addr);
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Wallet connected successfully!");
        } catch (error) {
            console.error("Connection error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to connect wallet", {
                description: error.message
            });
        } finally{
            setIsConnecting(false);
        }
    }
    async function updateBalances() {
        if (!address) return;
        const sft = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSFTBalance"])(address);
        const eth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$src$2f$blockchain$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEthBalance"])(address);
        setSftBalance(sft);
        setEthBalance(eth);
    }
    function handleTransferSuccess() {
        setRefreshTrigger((prev)=>prev + 1);
        updateBalances();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$wallet$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WalletHeader"], {
                onConnect: handleConnect,
                address: address,
                isConnecting: isConnecting
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-gradient-to-br from-[#00C2A8]/20 to-black border-[#00C2A8]/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm font-medium",
                                                    children: "SFT Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-bold text-white mt-1",
                                                    children: [
                                                        sftBalance,
                                                        " SFT"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 w-12 rounded-full bg-[#00C2A8]/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                className: "h-6 w-6 text-[#00C2A8]"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                lineNumber: 93,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                            lineNumber: 92,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                lineNumber: 86,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "bg-white/5 border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-6 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-400 text-sm font-medium",
                                                    children: "ETH Balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-bold text-white mt-1",
                                                    children: [
                                                        ethBalance,
                                                        " ETH"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                            lineNumber: 99,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-12 w-12 rounded-full bg-slate-700/50 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-6 rounded-full bg-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                                lineNumber: 104,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                                lineNumber: 97,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$transfer$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransferForm"], {
                            address: address,
                            sftBalance: sftBalance,
                            onTransferSuccess: handleTransferSuccess
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                            lineNumber: 112,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 111,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$transaction$2d$history$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransactionHistory"], {
                            address: address,
                            refreshTrigger: refreshTrigger
                        }, void 0, false, {
                            fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 120,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                lineNumber: 83,
                columnNumber: 17
            }, this),
            !address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-white/5 rounded-xl border border-white/10 border-dashed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                        className: "h-16 w-16 text-slate-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white",
                        children: "Connect your wallet"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-400 mt-2 max-w-md mx-auto",
                        children: "Connect your MetaMask wallet to view your SFT balance, make transfers, and track your transaction history."
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleConnect,
                        className: "mt-6 px-6 py-2 bg-[#00C2A8] text-black font-bold rounded-lg hover:bg-[#00C2A8]/90 transition-all",
                        children: "Connect Now"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
                lineNumber: 127,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, this);
}
}),
"[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$sft$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Code-Odyssey/SecureFin/components/wallet/sft-dashboard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function WalletPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0B0F10] text-white selection:bg-[#00C2A8]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00C2A8]/10 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#8247E5]/10 rounded-full blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"
                    }, void 0, false, {
                        fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10 container mx-auto px-4 pt-24 pb-12 max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Code$2d$Odyssey$2f$SecureFin$2f$components$2f$wallet$2f$sft$2d$dashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SFTDashboard"], {}, void 0, false, {
                    fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Code-Odyssey/SecureFin/app/wallet/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d7bfbf37._.js.map