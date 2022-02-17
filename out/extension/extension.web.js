var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./src/extension/extension.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
const activate = (context) => ({
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
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLndlYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EseURBQXlEO0FBQ3pELDBFQUEwRTtBQUNuRSxNQUFNLFFBQVEsR0FBdUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU87UUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7Ozs7UUFXaEIsQ0FBQztJQUNQLENBQUM7Q0FDRixDQUFDLENBQUM7QUFmVSxnQkFBUSxZQWVsQjtBQUVILDJEQUEyRDtBQUMzRCxTQUFnQixVQUFVLEtBQUksQ0FBQztBQUEvQixnQ0FBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9zcmMvZXh0ZW5zaW9uL2V4dGVuc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlICd2c2NvZGUnIGNvbnRhaW5zIHRoZSBWUyBDb2RlIGV4dGVuc2liaWxpdHkgQVBJXG4vLyBJbXBvcnQgdGhlIG1vZHVsZSBhbmQgcmVmZXJlbmNlIGl0IHdpdGggdGhlIGFsaWFzIHZzY29kZSBpbiB5b3VyIGNvZGUgYmVsb3dcbmltcG9ydCAqIGFzIHZzY29kZSBmcm9tIFwidnNjb2RlXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2YXRpb25GdW5jdGlvbiB9IGZyb20gXCJ2c2NvZGUtbm90ZWJvb2stcmVuZGVyZXJcIjtcblxuLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4geW91ciBleHRlbnNpb24gaXMgYWN0aXZhdGVkXG4vLyB5b3VyIGV4dGVuc2lvbiBpcyBhY3RpdmF0ZWQgdGhlIHZlcnkgZmlyc3QgdGltZSB0aGUgY29tbWFuZCBpcyBleGVjdXRlZFxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSAoY29udGV4dCkgPT4gKHtcbiAgcmVuZGVyT3V0cHV0SXRlbShkYXRhLCBlbGVtZW50KSB7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICA8dGl0bGU+RG9jdW1lbnQ8L3RpdGxlPlxuICA8L2hlYWQ+XG4gIDxib2R5PlxuICAgIDxwPkhlbGxvIFdvcmxkPC9wPlxuICA8L2JvZHk+XG48L2h0bWw+YDtcbiAgfSxcbn0pO1xuXG4vLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB5b3VyIGV4dGVuc2lvbiBpcyBkZWFjdGl2YXRlZFxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7fVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9