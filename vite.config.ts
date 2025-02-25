import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as node_fs from 'fs';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: getPathFromTsConfig(),
  },
});

type Aliases = {
  [key: string]: string;
};

function getPathFromTsConfig() {
  const tsconfig_s = node_fs
    .readFileSync('./tsconfig.json', 'utf-8')
    .replace(/\/\/.*$/gm, '');
  const tsconfig = JSON.parse(tsconfig_s);
  const aliases: Aliases = {};

  const baseUrl = path.resolve(
    __dirname,
    tsconfig.compilerOptions.baseUrl || 'src',
  );

  // console.log('t', tsconfig.compilerOptions.paths);
  for (const [key, value] of Object.entries(
    tsconfig.compilerOptions.paths,
  ) as any) {
    // console.log(__dirname, 'd', value[0]);
    aliases[key] = path.resolve(baseUrl, value[0]);
  }
  console.log('a', aliases);
  return aliases;
}
