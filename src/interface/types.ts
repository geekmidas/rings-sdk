export interface IPaginatedResponse<T> {
  nextPage?: number;
  items: T[];
}

export interface BaseApiItem {
  _id: string;
}

export interface BaseItem {
  id: string;
}

export interface BasePaginatedResponse<T extends BaseApiItem> {
  docs: T[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

type SortType = "asc" | "desc";

type Sortable<T> = `${Extract<keyof T, string>}:${SortType}`;

type MatchKey<T> = Extract<keyof T, string>;

export type MatchValue = string | number | RegExp;
export type Match<T> = Partial<Record<MatchKey<T>, MatchValue>>;

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

type NumericKeys<T> = KeysMatching<T, number>;

export type NumericExpression = ">" | "<" | ">=";

type NumericExpressionKeys<T> = `${Exclude<
  NumericKeys<T>,
  symbol
>}${NumericExpression}`;

export type NumericExpressions<T> = Partial<
  Record<NumericExpressionKeys<T>, number>
>;

export interface RequestParams<
  T,
  P extends Omit<T, "id"> = Omit<T, "id">,
  K extends Exclude<keyof P, symbol> = Exclude<keyof P, symbol>
> {
  /**
   * The number of records you want to retrieve from the API
   */
  limit?: number;
  /**
   * The page on which the request should start from
   */
  page?: number;
  /**
   * The number of records to skip for the query
   */
  offset?: number;
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

export interface RequestParamsWithId<T> extends RequestParams<T> {
  id: string;
}
