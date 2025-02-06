import { MESSAGE } from "@repo/core";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) =>
  c.json({ messageFromInternalPackage: MESSAGE, message: "Success 🎉" })
);

export { app };
