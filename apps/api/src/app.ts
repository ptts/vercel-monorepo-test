import { generateFirstName, MESSAGE } from "@repo/core";
import { Hono } from "hono";
import { FOO } from "./foo";

const app = new Hono();

app.get("/", (c) => {
  const randomName = generateFirstName();
  return c.json({
    messageFromInternalPackage: MESSAGE,
    randomName,
    FOO,
    message: "Success 🎉",
  });
});

export { app };
