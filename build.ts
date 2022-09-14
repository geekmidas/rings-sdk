import fs from "fs";
import path from "path";
import prettier from "prettier";

const rootDir = process.cwd();

const root = path.resolve(rootDir, "src");

async function getResources() {
  const resourceDir = path.resolve(root, "resources");
  const resources = fs.readdirSync(resourceDir);

  return Promise.all(
    resources.map(async (resource) => {
      const importName = `resources/${resource}`;
      const importStatement = `import * as ${resource} from '${importName}';`;

      return {
        name: resource,
        importStatement,
      };
    })
  );
}

(async function build() {
  const resources = await getResources();
  const imports: string[] = [
    `import {  AuthClient } from 'clients/AuthClient';`,
  ];
  const output = resources.map(({ importStatement, name }) => {
    imports.push(importStatement);

    return `
    ${name}: ${name}.createClient(authClient),
    `;
  }, "");

  const importData = imports.join("\n");

  const body = output.join("");

  const text = `
    ${importData}
    /**
 * Creates the client for the lord of the rings API
 *
 * @param apiKey - The API Key
 */
    export function createClient(apiKey: string) {
      const authClient = new AuthClient(apiKey);
    
      return {
        ${body}
      };
    }
    
  `;

  const data = prettier.format(text, {
    parser: "typescript",
    singleQuote: true,
  });
  const outPath = path.resolve(root, "index.ts");
  fs.writeFileSync(outPath, data);
})();
