import dotenv from "dotenv";
import { createClient } from "./";
dotenv.config();

const { API_KEY } = process.env as Record<string, string>;

(async function main() {
  const client = createClient(API_KEY);

  const { items } = await client.movie.getAll({ limit: 10 });
  const [item] = items;
  const movie = await client.movie.getById(item.id);

  console.log({
    movie,
    movies: items,
  });
})();
