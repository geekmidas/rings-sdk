# Lord of the Rings SDK

Nodejs API Wrapper for [Lord of Rings API](https://the-one-api.dev/documentation)

## Installation

```sh
yarn add @geekmidas/rings-sdk
```

## Usage

```ts
import { createClient } from "@geekmidas/rings";

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

items has type `Book[]` which can be seen [here](./src/resources/book/configuration.ts#L47)

### Chapter

```ts

```

### Character

```ts

```

### Movie

```ts

```

### Quote

```ts

```

## Contributing

### Tests

```sh
yarn test
```
