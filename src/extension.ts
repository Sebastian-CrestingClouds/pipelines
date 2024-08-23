import * as vscode from 'vscode';
import { SidebarProvider } from './SideBarProvider';
import { GetStartedProvider } from './GetStartedProvider';

export function activate(context: vscode.ExtensionContext) {

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



}

export function deactivate() {}
