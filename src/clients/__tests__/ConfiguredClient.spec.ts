import { AuthClient } from "clients/AuthClient";
import { ConfiguredClient } from "../ConfiguredClient";

const authClient = new AuthClient("");

describe("ConfiguredClient", () => {
  describe(".configureClient()", () => {
    it("Should add all configuration methods to client", () => {
      const keys = ["getName", "getSurname", "getLicenseDetails"];
      const config = keys.reduce((memo, key) => ({ ...memo, [key]: {} }), {});
      const client = new ConfiguredClient(config, authClient).configureClient();

      const methods = Object.keys(client);
      expect(methods.sort()).toEqual(keys.sort());
    });
  });
});
