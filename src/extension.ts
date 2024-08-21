import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "cresting-pipelines" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('cresting-pipelines.helloWorld', () => {

		vscode.window.showInformationMessage('WATCH ME!');

	}));
}

export function deactivate() {}
