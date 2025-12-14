module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/bantaybuhay/app/api/locations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET() {
    const mockLocations = [
        {
            id: 1,
            city: "Kabankalan City",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 9.9864,
            longitude: 122.8161,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 2,
            city: "Kabankalan City",
            province: "Negros Occidental",
            barangay: "Binicuil",
            latitude: 9.992,
            longitude: 122.824,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 3,
            city: "Kabankalan City",
            province: "Negros Occidental",
            barangay: "Camingawan",
            latitude: 9.975,
            longitude: 122.81,
            marker_type: "responder",
            created_at: new Date().toISOString()
        },
        {
            id: 4,
            city: "Kabankalan City",
            province: "Negros Occidental",
            barangay: "Bantayan",
            latitude: 9.98,
            longitude: 122.82,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 5,
            city: "Ilog",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 10.0472,
            longitude: 122.7453,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 6,
            city: "Cauayan",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 9.9342,
            longitude: 123.1747,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 7,
            city: "Hinigaran",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 10.2669,
            longitude: 122.8519,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 8,
            city: "Himamaylan",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 10.1,
            longitude: 122.8667,
            marker_type: "station",
            created_at: new Date().toISOString()
        },
        {
            id: 9,
            city: "Binalbagan",
            province: "Negros Occidental",
            barangay: "Poblacion",
            latitude: 10.1914,
            longitude: 122.8589,
            marker_type: "station",
            created_at: new Date().toISOString()
        }
    ];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        locations: mockLocations
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d14f2035._.js.map