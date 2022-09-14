const RESOURCE_MATCHER = /:(\w+)/g;

export enum RoutesErrorMessages {
  MissingFields = "Method cannot be executed. please provide the missing field(s): [FIELDS]",
  MissingParams = "Method cannot be executed without params",
}

/**
 * Resolves the dynamic route based on params and resource
 *
 * @param resource - The resource that should be resoled
 * @param params
 * @returns
 */
export function getRoutePath<T extends Record<string, string | number> = {}>(
  resource: string,
  params?: T | undefined
): string {
  const matches = resource.match(RESOURCE_MATCHER);
  if (!matches) {
    return resource;
  }

  if (!params) {
    throw new Error(RoutesErrorMessages.MissingParams);
  }

  const missingFields: string[] = [];
  const path = matches.reduce((memo, match) => {
    const [, k] = match.split(":");
    const key = k as keyof T;
    const value = params[key];
    if (value === undefined || value === null) {
      missingFields.push(key as string);
      return memo;
    }

    return memo.replace(match, value.toString());
  }, resource);

  if (missingFields.length) {
    const fields = missingFields.join(",");
    const message = RoutesErrorMessages.MissingFields.replace(
      "[FIELDS]",
      fields
    );
    throw new Error(message);
  }

  return path;
}
