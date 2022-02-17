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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZW5zaW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSx5REFBeUQ7QUFDekQsMEVBQTBFO0FBQ25FLE1BQU0sUUFBUSxHQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTztRQUM1QixPQUFPLENBQUMsU0FBUyxHQUFHOzs7Ozs7Ozs7OztRQVdoQixDQUFDO0lBQ1AsQ0FBQztDQUNGLENBQUMsQ0FBQztBQWZVLGdCQUFRLFlBZWxCO0FBRUgsMkRBQTJEO0FBQzNELFNBQWdCLFVBQVUsS0FBSSxDQUFDO0FBQS9CLGdDQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb2NlcnktYm9vay8uL3NyYy9leHRlbnNpb24vZXh0ZW5zaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgJ3ZzY29kZScgY29udGFpbnMgdGhlIFZTIENvZGUgZXh0ZW5zaWJpbGl0eSBBUElcbi8vIEltcG9ydCB0aGUgbW9kdWxlIGFuZCByZWZlcmVuY2UgaXQgd2l0aCB0aGUgYWxpYXMgdnNjb2RlIGluIHlvdXIgY29kZSBiZWxvd1xuaW1wb3J0ICogYXMgdnNjb2RlIGZyb20gXCJ2c2NvZGVcIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZhdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInZzY29kZS1ub3RlYm9vay1yZW5kZXJlclwiO1xuXG4vLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB5b3VyIGV4dGVuc2lvbiBpcyBhY3RpdmF0ZWRcbi8vIHlvdXIgZXh0ZW5zaW9uIGlzIGFjdGl2YXRlZCB0aGUgdmVyeSBmaXJzdCB0aW1lIHRoZSBjb21tYW5kIGlzIGV4ZWN1dGVkXG5leHBvcnQgY29uc3QgYWN0aXZhdGU6IEFjdGl2YXRpb25GdW5jdGlvbiA9IChjb250ZXh0KSA9PiAoe1xuICByZW5kZXJPdXRwdXRJdGVtKGRhdGEsIGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IGA8IURPQ1RZUEUgaHRtbD5cbjxodG1sIGxhbmc9XCJlblwiPlxuICA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgIDx0aXRsZT5Eb2N1bWVudDwvdGl0bGU+XG4gIDwvaGVhZD5cbiAgPGJvZHk+XG4gICAgPHA+SGVsbG8gV29ybGQ8L3A+XG4gIDwvYm9keT5cbjwvaHRtbD5gO1xuICB9LFxufSk7XG5cbi8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHlvdXIgZXh0ZW5zaW9uIGlzIGRlYWN0aXZhdGVkXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHt9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=