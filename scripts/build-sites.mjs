import { spawnSync } from 'node:child_process';
import {
  mkdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const angularOutput = resolve(projectRoot, 'dist/dev-portfolio');
const browserOutput = resolve(angularOutput, 'browser');
const sitesClient = resolve(projectRoot, 'dist/client');
const sitesServer = resolve(projectRoot, 'dist/server');

const build = spawnSync('npm', ['run', 'build'], {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: false,
});

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

rmSync(sitesClient, { recursive: true, force: true });
renameSync(browserOutput, sitesClient);
rmSync(angularOutput, { recursive: true, force: true });
mkdirSync(sitesServer, { recursive: true });

writeFileSync(
  resolve(sitesServer, 'index.js'),
  `export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);

    if (
      response.status === 404 &&
      request.method === "GET" &&
      (request.headers.get("accept") ?? "").includes("text/html")
    ) {
      const fallbackUrl = new URL("/index.html", request.url);
      response = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    }

    return response;
  },
};
`,
);
