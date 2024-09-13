import * as vscode from "vscode";
import cookie from "cookie";

async function importdecode() {
  return await import("@auth/core/jwt");
}


const PAT_KEY = "Apppat";

export class configManager {
  static globalState: vscode.Memento;

  
  static setApppat(pat: string) {
    return this.globalState.update(PAT_KEY, pat);
  }

  static getApppat(): string | undefined {
    return this.globalState.get(PAT_KEY);
  }

  // Parse and retrieve a specific cookie value
  static getApppatValue(): string | undefined {
    const CryptoString = this.getApppat();
    if(CryptoString){
      return CryptoString;

    }
    else{
      return undefined;
    }
  }
}
