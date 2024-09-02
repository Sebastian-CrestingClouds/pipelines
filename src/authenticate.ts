import * as vscode from "vscode";
import { apiBaseUrl } from "./constants";
import polka from "polka";
import { cookieManager } from "./cookieManager";

export const authenticate =  () => {
  console.log("authenticate called");
  const app = polka();
  console.log("authenticate called with app");


  app.listen(54321, (err: Error) => {
    console.log('listening');
    if (err) {
      console.log(`server NOT listening on port 54321`);
      vscode.window.showErrorMessage(err.message);
    } else {
      console.log(`server listening on port 54321`);
      
      vscode.commands.executeCommand(
        "vscode.open",
        vscode.Uri.parse(`${apiBaseUrl}/api/auth/signin?callbackUrl=http://localhost:54321/auth/`)
      );
    }
  });

  app.get(`/auth`, async (req, res) => {
    const cookies = req.headers.cookie;
    await cookieManager.setCookie(cookies as string);
    const session = await cookieManager.getSession();

    if (session) {
      console.log("Session retrieved:", session);
      res.end(`<h1>Auth was successful. You can close this now.</h1>`);
    } else {
      console.log("No session found");
      res.end(`<h1>Authentication failed. No session found.</h1>`);
    }

    (app as any).server.close();
  });
};
