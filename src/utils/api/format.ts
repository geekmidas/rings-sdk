import {
  BaseApiItem,
  BasePaginatedResponse,
  IPaginatedResponse,
} from "interface/types";
import { NodeFoundError } from "utils/error";

/**
 * Formats the Document from the external API to the internal type
 *
 * @param doc - The raw document retrieved from the external API
 *
 * @returns Th desired internal format
 */
export function formatDoc<T extends BaseApiItem>(doc: T) {
  const { _id: id, ...rest } = doc;

  return { id, ...rest };
}
/**
 * Formats the API Response into a single records
 *
 * @param response - The response object from the External API
 * @returns A single formatted object
 */
export function formatSingleResponse<T extends BaseApiItem>(
  response: BasePaginatedResponse<T>
) {
  const { docs = [] } = response;

  const [item] = docs;
  if (!item) {
    throw new NodeFoundError();
  }

  return formatDoc(item);
}

/**
 * Formats the API Response into multiple records
 *
 * @param response - The response object from the External API
 *
 * @returns Items with pagination information
 */
export function formatMultipleResponse<T extends BaseApiItem>(
  response: BasePaginatedResponse<T>
): IPaginatedResponse<T> {
  const { docs, page, pages } = response;

  const hasNextPage = page < pages;

  const nextPage = hasNextPage ? page + 1 : undefined;

  return {
    nextPage,
    items: docs.map<T>((doc) => formatDoc<any>(doc)),
  };
}
