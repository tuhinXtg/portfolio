import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the project root explicitly so Turbopack doesn't try to infer it
  // from a lockfile search that can wander into a parent directory (this
  // shows up as a warning on Windows paths containing spaces, e.g. under
  // "C:\Users\Some Name\").
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
