import { HttpClient } from "./HttpClient";

export class AuthClient extends HttpClient {
  constructor(apiKey: string) {
    super("https://the-one-api.dev/v2");
    this.client.interceptors.request.use((config) => {
      const { headers: defaultHeaders = {} } = config;
      const headers = {
        ...defaultHeaders,
        Authorization: `Bearer ${apiKey}`,
      };

      return {
        ...config,
        headers,
      };
    });
  }
}
