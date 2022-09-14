import { Match, NumericExpressions } from "interface/types";

/**
 *
 * Resolves the match to the resolved match values of string
 *
 * @param match - The match fields
 * @param isNegative - Indicates whether to negate the keys in the match
 * @returns
 */
export function getMatchValues<T>(match?: Match<T>, isNegative = false): T {
  if (!match) {
    return {} as T;
  }
  const values = Object.entries(match);

  return values.reduce((memo, [k, value]) => {
    const key = isNegative ? `${k}!` : k;
    return {
      ...memo,
      [key]: (value as number)?.toString() || undefined,
    };
  }, {}) as unknown as T;
}

/**
 * Creates the string representation of the numeric filter
 *
 * @param filter - The numeric filter of type `T`
 *
 * @returns A string separated by `&` from all entries in filter
 */
export function getNumericFilterValues<T>(
  filter?: NumericExpressions<T>
): string {
  if (!filter) {
    return "";
  }
  const entries = Object.entries(filter);

  const value = entries.map(([key, value]) => {
    return `${key}${value}`;
  });

  return value.join("&");
}

/**
 * Creates the string representation of existence values adding ! to field key when
 * `isNegative` is true
 *
 * @param values - A array of T values
 * @param isNegative - An indicator of whether the existence is negative
 * @returns
 */
export function getExistenceValues<T extends string | number>(
  values?: T[],
  isNegative = false
): string {
  if (!values) {
    return "";
  }
  const keys = values.map((value) => {
    const key = isNegative ? `!${value}` : `${value}`;

    return key;
  });

  return keys.join("&");
}
