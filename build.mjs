// Build: `npm run build` → dist/wetter-app.js
// Dev:   `npm run dev`   → Testseite mit Beispieldaten auf http://localhost:5173
import * as esbuild from "esbuild";
import { readFileSync } from "node:fs";

const serve = process.argv.includes("--serve");
const { version } = JSON.parse(readFileSync("package.json", "utf8"));
// Build-Zeit in der Versionsanzeige (Browser-Konsole) → sichtbar, ob HA wirklich den neuen Stand geladen hat
const built = new Date().toISOString().slice(0, 16).replace("T", " ");

const common = {
  bundle: true,
  define: { __VERSION__: JSON.stringify(serve ? `${version}-dev` : `${version} (${built} UTC)`) },
  format: "esm",
  // Ältere Android-WebViews (Echo Show) → bewusst konservatives Ziel
  target: ["es2019", "chrome70"],
  legalComments: "none",
  logLevel: "info",
};

if (serve) {
  const ctx = await esbuild.context({
    ...common,
    entryPoints: { "wetter-app": "src/index.ts", mock: "dev/mock.ts" },
    outdir: "dev/out",
    sourcemap: true,
  });
  await ctx.watch();
  await ctx.serve({ servedir: "dev", port: 5173 });
} else {
  await esbuild.build({
    ...common,
    entryPoints: ["src/index.ts"],
    outfile: "dist/wetter-app.js",
    minify: true,
  });
}
