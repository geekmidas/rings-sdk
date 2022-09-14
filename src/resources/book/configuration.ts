import { AuthClient } from "clients";
import {
  ClientMethod,
  ClientMethodWithRequiredInput,
  Configuration,
  ConfiguredClient,
} from "clients/ConfiguredClient";
import { RequestParams, IPaginatedResponse } from "interface/types";
import { Chapter } from "resources/chapter";

export type Methods = "getAll" | "getById" | "getChapters";

enum BookEndpoints {
  Books = "/book",
  Book = "/book/:id",
  BookChapter = "/book/:id/chapter",
}

export const configuration: Configuration<Methods, BookEndpoints, Book> = {
  getAll: {
    route: BookEndpoints.Books,
    argType: "params",
    response: "multiple",
  },
  getById: {
    route: BookEndpoints.Book,
    argType: "string",
    argName: "id",
    response: "single",
  },
  getChapters: {
    route: BookEndpoints.BookChapter,
    argType: "params",
    response: "single",
  },
};

export const createClient = (authClient: AuthClient) =>
  new ConfiguredClient(configuration, authClient).configureClient<BookClient>();

export const createClientWithKey = (apiKey: string) => {
  const authService = new AuthClient(apiKey);

  return createClient(authService);
};

export interface Book {
  /**
   * The unique identifier of the book
   */
  id: string;
  /**
   *  The name of the book
   */
  name: string;
}

export type BookRequestParams = RequestParams<Book>;

export interface BookClient {
  /**
   * * List of all "The Lord of the Rings" books
   */
  getAll: ClientMethod<BookRequestParams, IPaginatedResponse<Book>>;
  /**
   * Retrieves the book the matches the provided id
   */
  getById: ClientMethodWithRequiredInput<string, Book>;
  /**
   * Request all chapters of one specific book
   */
  getChapters: ClientMethodWithRequiredInput<
    BookRequestParams & { id: string },
    IPaginatedResponse<Chapter>
  >;
}
