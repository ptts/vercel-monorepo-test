import { app } from "./app";
import { serve } from "@hono/node-server";

/**
 * For pnpm -F @repo/api dev
 */
serve(
  {
    fetch: app.fetch,
    port: 3005,
  },
  () => {
    console.log("Server is running on http://localhost:3005");
  }
);
