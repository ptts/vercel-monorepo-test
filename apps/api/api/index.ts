import { handle } from "hono/vercel";

import { app } from "../src/index.js";

/**
 * Vercel Function Entrypoint
 * @see https://github.com/vercel/hono-starter/blob/main/api/index.js
 */

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const HEAD = handler;
export const OPTIONS = handler;
/** Other request methods are not supported by Vercel */
