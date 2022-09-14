# Lord of the Rings SDK

Nodejs API Wrapper for [Lord of Rings API](https://the-one-api.dev/documentation)

## Installation

```sh
yarn add liblab-rings-sdk
```

## Usage

```ts
import { createClient } from "liblab-rings-sdk";

const client = createClient("[API_KEY]"); // Replace [API_KEY] with your API KEY
```

## Resources

- book
  - getAll
  - getById
  - getChapters
- chapter
  - getAll
  - getById
- character
  - getAll
  - getById
  - getQuotes
- movie
  - getAll
  - getById
  - getQuotes
- quote
  - getAll
  - getById

### Book

```ts
const { nextPage, items } = await client.book.getAll();

const book = await client.book.getById("bookId");
```

items has type [`Book[]` ](./src/resources/book/configuration.ts#L47)

### Chapter

```ts
const { nextPage, items } = await client.chapter.getAll();

const chapter = await client.chapter.getById("chapterId");
```

items has type [`Chapter[]` ](./src/resources/chapter/configuration.ts#L44)

### Character

```ts
const { nextPage, items } = await client.character.getAll();

const character = await client.character.getById("characterId");
```

items has type [`Character[]` ](./src/resources/character/configuration.ts#L54)

### Movie

```ts
const { nextPage, items } = await client.movie.getAll();

const movie = await client.movie.getById("movieId");
```

items has type [`Movie[]` ](./src/resources/movie/configuration.ts#L50)

### Quote

```ts
const { nextPage, items } = await client.quote.getAll();

const quote = await client.quote.getById("quoteId");
```

items has type [`Quote[]` ](./src/resources/quote/configuration.ts#L43)

## Running the project

run

```sh
yarn
```

Create a `.env` file with the contents that mirror the contents of [example](./.env.example)

run

```sh
yarn dev
```

## Testing the application

```sh
yarn test
```

### Documentation

Find more SDK Documentation [here](./docs/modules.md)
