import { AuthClient } from "clients";
import {
  ClientMethod,
  ClientMethodWithRequiredInput,
  Configuration,
  ConfiguredClient,
} from "clients/ConfiguredClient";
import { RequestParams, IPaginatedResponse } from "interface/types";

interface Quote {}

export type Methods = "getAll" | "getById" | "getQuotes";

enum MovieEndpoints {
  Movies = "/movie",
  Movie = "/movie/:id",
  MovieQuote = "/movie/:id/quote",
}

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

export const createClient = (authClient: AuthClient) =>
  new ConfiguredClient(
    configuration,
    authClient
  ).configureClient<MovieClient>();

export const createClientWithKey = (apiKey: string) => {
  const authService = new AuthClient(apiKey);

  return createClient(authService);
};

export interface Movie {
  id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}

export type MovieRequestParams = RequestParams<Movie>;

export interface MovieClient {
  /**
   * * List of all "The Lord of the Rings" movies
   */
  getAll: ClientMethod<MovieRequestParams, IPaginatedResponse<Movie>>;
  /**
   * Retrieves the movie the matches the provided id
   */
  getById: ClientMethodWithRequiredInput<string, Movie>;
  /**
   * Request all quotes of one specific movie
   */
  getQuotes: ClientMethodWithRequiredInput<
    MovieRequestParams & { id: string },
    IPaginatedResponse<Quote>
  >;
}
