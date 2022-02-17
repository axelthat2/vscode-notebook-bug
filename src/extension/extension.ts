// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import type { ActivationFunction } from "vscode-notebook-renderer";

// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
export const activate: ActivationFunction = (context) => ({
  renderOutputItem(data, element) {
    element.innerText = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>`;
  },
});

// This method is called when your extension is deactivated
export function deactivate() {}
