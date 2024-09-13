import * as _vscode from "vscode";

declare global {
  const tsvscode: {
    postMessage(message: any): void;
    getState: () => any;
    setState: (state: any) => void;
  };
  const apiBaseUrl: string;

declare module "*.svelte" {
  import type { ComponentType } from "svelte";
  const content: ComponentType;
  export default content;
}

  declare const vscode: VSCode;
}