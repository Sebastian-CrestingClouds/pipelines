import * as vscode from "vscode";
import cookie from "cookie";

async function importdecode() {
  return await import("@auth/core/jwt");
}


const COOKIE_KEY = "cpCookie";

export class cookieManager {
  static globalState: vscode.Memento;

  // Store the entire cookie string
  static setCookie(cookieString: string) {
    return this.globalState.update(COOKIE_KEY, cookieString);
  }

  // Retrieve the stored cookie string
  static getCookie(): string | undefined {
    return this.globalState.get(COOKIE_KEY);
  }

  // Parse and retrieve a specific cookie value
  static getCookieValue(cookieName: string): string | undefined {
    const cookieString = this.getCookie();
    if (!cookieString) return undefined;

    const parsedCookies = cookie.parse(cookieString);
    return parsedCookies[cookieName];
  }

  // Optional: Get the session token directly from the stored cookie
  static getSessionToken(): string | undefined {
    return this.getCookieValue("authjs.session-token");
  }

  // Optional: Get the session from the stored cookie
  static async getSession(): Promise<any | undefined> {
    const sessionToken = this.getSessionToken();
    if (!sessionToken) return undefined;
    console.log("Session Token:", sessionToken);

    const { decode } = await importdecode();
    const session = await decode({
      token: sessionToken,
      salt: "authjs.session-token",
      secret: "Wf+wh0Uavzx3BYI4mKuaM0d3AGcGMSKMkq7ObATHVAI=",
    });
    console.log("Session:", session);
    return session;
 
  }
}
