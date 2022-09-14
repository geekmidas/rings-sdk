import { AuthClient } from "clients";
import {
  ClientMethod,
  ClientMethodWithRequiredInput,
  Configuration,
  ConfiguredClient,
} from "clients/ConfiguredClient";
import { RequestParams, IPaginatedResponse } from "interface/types";

export type Methods = "getAll" | "getById";

enum QuoteEndpoints {
  Quotes = "/quote",
  Quote = "/quote/:id",
}

export const configuration: Configuration<Methods, QuoteEndpoints, Quote> = {
  getAll: {
    route: QuoteEndpoints.Quotes,
    argType: "params",
    response: "multiple",
  },
  getById: {
    route: QuoteEndpoints.Quote,
    argType: "string",
    argName: "id",
    response: "single",
  },
};

export const createClient = (authClient: AuthClient) =>
  new ConfiguredClient(
    configuration,
    authClient
  ).configureClient<QuoteClient>();

export const createClientWithKey = (apiKey: string) => {
  const authService = new AuthClient(apiKey);

  return createClient(authService);
};

export interface Quote {
  /**
   * The unique identifier of the character
   */
  id: string;
  /**
   * The dialog in which the quote occurred
   */
  dialog: string;
  /**
   * The movie where the quote occurred
   */
  movie: string;
  /**
   * The character who was responsible for the quote
   */
  character: string;
}

export type QuoteRequestParams = RequestParams<Quote>;

export interface QuoteClient {
  /**
   * * List of all "The Lord of the Rings" quotes
   */
  getAll: ClientMethod<QuoteRequestParams, IPaginatedResponse<Quote>>;
  /**
   * Retrieves the quote the matches the provided id
   */
  getById: ClientMethodWithRequiredInput<string, Quote>;
}
