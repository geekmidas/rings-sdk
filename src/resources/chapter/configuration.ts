import { AuthClient } from "clients";
import {
  ClientMethod,
  ClientMethodWithRequiredInput,
  Configuration,
  ConfiguredClient,
} from "clients/ConfiguredClient";
import { RequestParams, IPaginatedResponse } from "interface/types";

export type Methods = "getAll" | "getById";

enum ChapterEndpoints {
  Chapters = "/chapter",
  Chapter = "/chapter/:id",
}

export const configuration: Configuration<Methods, ChapterEndpoints, Chapter> =
  {
    getAll: {
      route: ChapterEndpoints.Chapters,
      argType: "params",
      response: "multiple",
    },
    getById: {
      route: ChapterEndpoints.Chapter,
      argType: "string",
      argName: "id",
      response: "single",
    },
  };

export const createClient = (authClient: AuthClient) =>
  new ConfiguredClient(
    configuration,
    authClient
  ).configureClient<ChapterClient>();

export const createClientWithKey = (apiKey: string) => {
  const authService = new AuthClient(apiKey);

  return createClient(authService);
};

export interface Chapter {
  /**
   * The unique identifier of the chapter
   */
  id: string;
  /**
   * The name of the chapter in the book
   */
  chapterName: string;
  /**
   * The unique identifier of the book where the chapter belongs to
   */
  book: string;
}

export type ChapterRequestParams = RequestParams<Chapter>;

export interface ChapterClient {
  /**
   * * List of all "The Lord of the Rings" chapters
   */
  getAll: ClientMethod<ChapterRequestParams, IPaginatedResponse<Chapter>>;
  /**
   * Retrieves the chapter the matches the provided id
   */
  getById: ClientMethodWithRequiredInput<string, Chapter>;
}
