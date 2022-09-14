import axios, { AxiosInstance } from "axios";
import { IHttpClient } from "interface";

export enum RequestMethod {
  Get = "GET",
}

export class HttpClient implements IHttpClient {
  protected readonly client: AxiosInstance;
  constructor(baseURL: string) {
    this.client = axios.create({ baseURL });
  }

  async get<Response, Params extends {} = {}>(
    route: string,
    params?: Params
  ): Promise<Response> {
    const { data } = await this.client.get<Response>(route, { params });

    return data;
  }
}
