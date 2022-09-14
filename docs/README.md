liblab-rings-sdk - v0.0.11 / [Exports](modules.md)

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

items has type [`Book[]` ](./src/resources/book/configuration.ts#L47)

### Character

```ts
const { nextPage, items } = await client.character.getAll();

const chapter = await client.character.getById("characterId");
```

items has type [`Book[]` ](./src/resources/book/configuration.ts#L47)

### Movie

```ts
const { nextPage, items } = await client.movie.getAll();

const chapter = await client.movie.getById("movieId");
```

items has type [`Book[]` ](./src/resources/book/configuration.ts#L47)

### Quote

```ts
const { nextPage, items } = await client.quote.getAll();

const quote = await client.chapter.getById("quoteId");
```

items has type [`Book[]` ](./src/resources/book/configuration.ts#L47)

### Tests

```sh
yarn test
```

### Documentation
