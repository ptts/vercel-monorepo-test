import { handle } from "hono/vercel";

import { app } from "../src/index.js";

/**
 * Vercel Function Entrypoint
 * @see https://github.com/vercel/hono-starter/blob/main/api/index.js
 */

export const runtime = "edge";

const handler = handle(app);

export const GET = handler;
export const PUT = handler;
export const POST = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
export const OPTIONS = handler;
export const TRACE = handler;
export const CONNECT = handler;
