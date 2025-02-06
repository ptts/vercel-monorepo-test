import { MESSAGE } from "@repo/core";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ message: "Root" }));
app.get("/message", (c) => c.json({ messageFromInternalPackage: MESSAGE }));

export { app };
