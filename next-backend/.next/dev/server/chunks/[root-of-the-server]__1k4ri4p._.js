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
"[project]/Desktop/lms-ui/next-backend/src/lib/mongodb.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Desktop/lms-ui/next-backend/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        if (process.env.MONGODB_DB) opts.dbName = process.env.MONGODB_DB;
        if (process.env.MONGODB_USER) opts.user = process.env.MONGODB_USER;
        if (process.env.MONGODB_PASSWORD) opts.pass = process.env.MONGODB_PASSWORD;
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log("Connected to MongoDB!");
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectToDatabase;
}),
"[project]/Desktop/lms-ui/next-backend/src/models/Assignment.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Desktop/lms-ui/next-backend/node_modules/mongoose)");
;
const submissionSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    studentId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        default: ""
    },
    note: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const assignmentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    due: {
        type: String,
        required: true
    },
    maxMarks: {
        type: Number,
        required: true
    },
    fileUrl: {
        type: String,
        default: ""
    },
    contentBody: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "Published"
    },
    submissions: [
        submissionSchema
    ]
}, {
    timestamps: true
});
// Check if the model is already compiled to avoid overwriting during HMR
const Assignment = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__["default"].models.Assignment || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$mongoose$29$__["default"].model("Assignment", assignmentSchema);
const __TURBOPACK__default__export__ = Assignment;
}),
"[project]/Desktop/lms-ui/next-backend/app/api/assignments/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/lib/mongodb.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$models$2f$Assignment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/lms-ui/next-backend/src/models/Assignment.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const assignments = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$models$2f$Assignment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        });
        const formattedAssignments = assignments.map((a)=>{
            const doc = a.toObject();
            doc.id = doc._id.toString();
            delete doc._id;
            delete doc.__v;
            return doc;
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(formattedAssignments);
    } catch (error) {
        console.error("Database GET Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to load assignments'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$lib$2f$mongodb$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const payload = await request.json();
        const newAssignment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$src$2f$models$2f$Assignment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            title: payload.title,
            subject: payload.subject,
            due: payload.due,
            maxMarks: payload.maxMarks || 100,
            fileUrl: payload.fileUrl || "",
            contentBody: payload.contentBody || ""
        });
        const doc = newAssignment.toObject();
        doc.id = doc._id.toString();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(doc, {
            status: 201
        });
    } catch (error) {
        console.error("Database POST Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$lms$2d$ui$2f$next$2d$backend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to create assignment'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1k4ri4p._.js.map