import "dotenv/config";
import express from "express";
import { InMemoryCategoryRepository } from "./repositories/inMemoryCategoryRepository";
import { InMemoryEventRepository } from "./repositories/inMemoryEventRepository";
import { getCategories } from "./routes/categories";
import { getEventById, getEvents } from "./routes/events";

const app = express();
const PORT = parseInt(process.env.PORT ?? "3000");

app.get(
  "/api/events",
  getEvents(new InMemoryEventRepository(), new InMemoryCategoryRepository())
);

app.get(
  "/api/events/:eventId",
  getEventById(new InMemoryEventRepository(), new InMemoryCategoryRepository())
);

app.get("/api/categories", getCategories(new InMemoryCategoryRepository()));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
