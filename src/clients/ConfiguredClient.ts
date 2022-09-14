import {
  BaseApiItem,
  BasePaginatedResponse,
  RequestParams,
} from "interface/types";
import {
  formatMultipleResponse,
  formatSingleResponse,
  getMatchValues,
  getNumericFilterValues,
  getExistenceValues,
  getRoutePath,
} from "utils";
import { AuthClient } from "./AuthClient";

export class ConfiguredClient<
  K extends string,
  TRoute extends string,
  TResource
> {
  /**
   * Indicates whether the supplied args are String or Object type params
   *
   * @param arg - The arguments used for the configured resource
   */
  public static isStringArg<TRoute extends string, TResource>(
    arg: ConfigurationResource<TRoute, TResource>
  ): arg is StringConfigurationResource<TRoute, TResource> {
    return arg.argType === "string";
  }

  /**
   *
   * @param configuration
   * @param authClient
   */
  constructor(
    private readonly configuration: Configuration<K, TRoute, TResource>,
    private readonly authClient: AuthClient
  ) {}
  /**
   * Configures the supplied configuration into function methods
   *
   * @returns A client with the methods defined in the configuration
   */
  public configureClient<Client extends Record<K, unknown>>(): Client {
    const entries = Object.entries<ConfigurationResource<TRoute, TResource>>(
      this.configuration
    );

    const client = entries.reduce((memo, [key, config]) => {
      const handler = this.createHandler(config);

      return {
        ...memo,
        [key]: handler,
      };
    }, {}) as unknown as Client;

    return client;
  }

  /**
   * Creates a dynamic handler for the provided methods on the configuration
   *
   * @param config - Single method config used to configure a single route
   *
   * @returns A handler used
   */
  private createHandler<
    T extends RequestParams<TResource>,
    R extends HandlerResponse
  >(config: ConfigurationResource<TRoute, TResource>) {
    const { route, response } = config;
    return async (input?: T) => {
      const isStringArg = ConfiguredClient.isStringArg(config);

      const params = (isStringArg
        ? { [config.argName]: input }
        : input || {}) as unknown as T;

      const { exists, notExists, numericFilters, match, notMatch, ...rest } =
        params;

      const paths: string[] = [];

      const numericFilterParams = getNumericFilterValues(numericFilters);
      const notExistFilterValues = getExistenceValues(notExists, true);
      const existFilterValues = getExistenceValues(exists);

      numericFilterParams && paths.push(numericFilterParams);
      existFilterValues && paths.push(existFilterValues);
      notExistFilterValues && paths.push(notExistFilterValues);

      const inputParams = {
        ...getMatchValues(match),
        ...getMatchValues(notMatch, true),
        ...rest,
      };

      const path = getRoutePath<{}>(route, rest);

      const fullRoute = `${path}?${paths.join("&")}`;

      const data = await this.authClient.get<R>(fullRoute, inputParams);

      const isSingleResponse = response === "single";

      return isSingleResponse
        ? formatSingleResponse(data)
        : formatMultipleResponse(data);
    };
  }
}

type ResponseType = "single" | "multiple";

export interface BaseConfigurationResource<TRoute extends string = string> {
  /**
   * The configuration route
   */
  route: TRoute;
  /**
   * The type of response a method should expect
   */
  response: ResponseType;
}

type HandlerResponse<T extends BaseApiItem = BaseApiItem> =
  BasePaginatedResponse<T>;

export interface StringConfigurationResource<TRoute extends string, TResource>
  extends BaseConfigurationResource<TRoute> {
  argType: "string";
  argName: keyof TResource;
}

export interface ParamsConfigurationResource<TRoute extends string = string>
  extends BaseConfigurationResource<TRoute> {
  argType: "params";
}

export type ConfigurationResource<TRoute extends string, TResource> =
  | StringConfigurationResource<TRoute, TResource>
  | ParamsConfigurationResource<TRoute>;

export type Params = Record<string, string | number>;

export type Configuration<
  T extends string,
  TRoute extends string,
  TResource
> = Record<T, ConfigurationResource<TRoute, TResource>>;

export type ClientMethod<T, R> = (data?: T) => Promise<R>;
export type ClientMethodWithRequiredInput<T, R> = (data: T) => Promise<R>;
