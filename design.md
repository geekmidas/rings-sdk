# API Design

I have identified that all the requests that need to be made are essentially just http requests with nothing special that needs to be added on to the functionality. So I decided to take a configuration approach and generate all the specified methods dynamically.

## Configuration Structure

I decided to have the configuration of a function to have the structure shown below.

```ts
export const configuration: Configuration<Methods, MovieEndpoints, Movie> = {
  getAll: {
    route: MovieEndpoints.Movies,
    argType: "params",
    response: "multiple",
  },
  getById: {
    route: MovieEndpoints.Movie,
    argType: "string",
    argName: "id",
    response: "single",
  },
  getQuotes: {
    route: MovieEndpoints.MovieQuote,
    argType: "params",
    response: "multiple",
  },
};
```

The configuration above add 3 methods to a client `getAll`, `getById` and `getQuotes`.

## GetAll Method

Uses the configured route to make a `GET Request` and expects an object input that returns multiple items as shown by `argType` and `response` respectively. Similar ideas can be inferred for `getById` and `getQuotes`.

## Pagination

Pagination can be controlled with the supplied fields

- limit: The number of records that should returned for each request

- page: The page of the current request

- offset: The number of records to skip in the request

## Filtering

```ts
interface FilterParams {
  /**
   * Used when you want to retrieve records based on the supplied fields
   */
  match?: Match<P>;
  /**
   * Used when you want to retrieve records based on the values that do not match the supplied values
   */
  notMatch?: Match<P>;
  /**
   * The sort expression
   */
  sort?: Sortable<P>;
  /**
   * Used when you want to retrieve records based on whether the supplied fields exist
   */
  exists?: K[];
  /**
   * Used when you want to retrieve records based on whether the supplied fields do not exist
   */
  notExists?: K[];
  /**
   * Used on the numeric fields of T
   */
  numericFilters?: NumericExpressions<T>;
}
```

Find the definition of these filters [here](./src/interface/types.ts#L69)

## Sorting

```ts
interface SortParams<P> {
  /**
   * The sort expression
   */
  sort?: Sortable<P>;
}
```

Find the definition of sortable [here](./src/interface/types.ts#L25)
