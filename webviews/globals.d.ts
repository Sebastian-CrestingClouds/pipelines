import * as _vscode from "vscode";

declare global {
  const tsvscode: {
    postMessage(message: any): void;
    getState: () => any;
    setState: (state: any) => void;
  };
  const apiBaseUrl: string;


  declare const vscode: VSCode;
}