import * as vscode from 'vscode';
import { SidebarProvider } from './SideBarProvider';
import { GetStartedProvider } from './GetStartedProvider';
import { authenticate } from './authenticate';
import { cookieManager } from './cookieManager';

export function activate(context: vscode.ExtensionContext) {
  cookieManager.globalState = context.globalState;

	console.log('Congratulations, your extension "cresting-pipelines" is now active!');
  
	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("cp-sidebar", sidebarProvider)
  );

	context.subscriptions.push(
		vscode.commands.registerCommand('cresting-pipelines.helloWorld', () => {

		vscode.window.showInformationMessage('WATCH ME!');

	}));

	  context.subscriptions.push(
      vscode.commands.registerCommand("cresting-pipelines.getStarted", () => {
        GetStartedProvider.createOrShow(context.extensionUri);
      })
    );

	  context.subscriptions.push(
      vscode.commands.registerCommand("cresting-pipelines.authenticate", () => {
        try {
          console.log("authenticate");
          authenticate();
        } catch (err) {
          console.log(err);
        }
      })
    );



}

export function deactivate() {}
