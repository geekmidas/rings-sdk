export interface IHttpClient {
  /**
   * Calls the get method on the supplied route
   *
   * @param route - The route to retrieve data from
   * @param params - Additional params to be used with the request
   */
  get<Response, Params extends {} = {}>(
    route: string,
    params?: Params
  ): Promise<Response>;
}
