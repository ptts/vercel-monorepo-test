import { generateFirstName, MESSAGE } from "@repo/core";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const randomName = generateFirstName();
  return c.json({
    messageFromInternalPackage: MESSAGE,
    randomName,
    message: "Success 🎉",
  });
});

export { app };
