import { AuthClient } from "clients";
import {
  ClientMethod,
  ClientMethodWithRequiredInput,
  Configuration,
  ConfiguredClient,
} from "clients/ConfiguredClient";
import { RequestParams, IPaginatedResponse } from "interface/types";
import { Quote } from "resources/quote";

export type Methods = "getAll" | "getById" | "getQuotes";

enum CharacterEndpoints {
  Characters = "/character",
  Character = "/character/:id",
  BookQuote = "/character/:id/quote",
}

export const configuration: Configuration<
  Methods,
  CharacterEndpoints,
  Character
> = {
  getAll: {
    route: CharacterEndpoints.Characters,
    argType: "params",
    response: "multiple",
  },
  getById: {
    route: CharacterEndpoints.Character,
    argType: "string",
    argName: "id",
    response: "single",
  },
  getQuotes: {
    route: CharacterEndpoints.BookQuote,
    argType: "params",
    response: "multiple",
  },
};

export const createClient = (authClient: AuthClient) =>
  new ConfiguredClient(
    configuration,
    authClient
  ).configureClient<CharacterClient>();

export const createClientWithKey = (apiKey: string) => {
  const authService = new AuthClient(apiKey);

  return createClient(authService);
};

export interface Character {
  /**
   * The unique identifier of the character
   */
  id: string;
  /**
   * The indicator of how tall a character is
   */
  height: string;
  /**
   * The birth race of the character
   */
  race: string;
  /**
   * The birth gender of the character
   */
  gender: string;
  /**
   * The birth date of the character
   */
  birth: string;
  /**
   * The spouse of the character
   */
  spouse: string;
  /**
   * The death date of the character
   */
  death: string;
  /**
   * The realm where the character belongs
   */
  realm: string;
  /**
   * The type of hair on the character
   */
  hair: string;
  /**
   * The name of the character
   */
  name: string;
  /**
   * The URL where all you can find more information about the character
   */
  wikiUrl: string;
}

export type CharacterRequestParams = RequestParams<Character>;

export interface CharacterClient {
  /**
   * * List of all "The Lord of the Rings" characters
   */
  getAll: ClientMethod<CharacterRequestParams, IPaginatedResponse<Character>>;
  /**
   * Retrieves the character that matches the provided id
   */
  getById: ClientMethodWithRequiredInput<string, Character>;
  /**
   * Request all quotes of a specific character
   */
  getQuotes: ClientMethodWithRequiredInput<
    CharacterRequestParams & { id: string },
    IPaginatedResponse<Quote>
  >;
}
