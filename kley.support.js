"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "kley",
			"path": "kley/kley.js",
			"file": "kley.js",
			"module": "kley",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/kley.git",
			"test": "kley-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Class construction through key evaluation.
	@end-module-documentation

	@include:
		{
			"outre": "outre",
			"plough": "plough",
			"protype": "protype",
			"truky": "truky"
		}
	@end-include
*/

var outre = require("outre");
var plough = require("plough");
var protype = require("protype");
var truky = require("truky");

var kley = function kley(list) {
	/*;
 	@meta-configuration:
 		{
 			"list:required": [
 				"object",
 				"string",
 				"...",
 				Array
 			]
 		}
 	@end-meta-configuration
 */

	return outre(plough(plough(arguments).map(function (item) {
		var itemType = protype(item);

		if (itemType.STRING) {
			return item;
		} else if (itemType.OBJECT || itemType.FUNCTION) {
			return truky(item);
		} else {
			throw new Error("invalid class construction key");
		}
	})));
};

module.exports = kley;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsZXkuanMiXSwibmFtZXMiOlsib3V0cmUiLCJyZXF1aXJlIiwicGxvdWdoIiwicHJvdHlwZSIsInRydWt5Iiwia2xleSIsImxpc3QiLCJhcmd1bWVudHMiLCJtYXAiLCJpdGVtIiwiaXRlbVR5cGUiLCJTVFJJTkciLCJPQkpFQ1QiLCJGVU5DVElPTiIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1JLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0FBYUMsUUFBT04sTUFBT0UsT0FBUUEsT0FBUUssU0FBUixFQUFvQkMsR0FBcEIsQ0FBeUIsVUFBRUMsSUFBRixFQUFZO0FBQzNELE1BQUlDLFdBQVdQLFFBQVNNLElBQVQsQ0FBZjs7QUFFQSxNQUFJQyxTQUFTQyxNQUFiLEVBQXFCO0FBQ3BCLFVBQU9GLElBQVA7QUFFQSxHQUhELE1BR00sSUFBSUMsU0FBU0UsTUFBVCxJQUFtQkYsU0FBU0csUUFBaEMsRUFBMEM7QUFDL0MsVUFBT1QsTUFBT0ssSUFBUCxDQUFQO0FBRUEsR0FISyxNQUdEO0FBQ0osU0FBTSxJQUFJSyxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBO0FBQ0QsRUFac0IsQ0FBUixDQUFQLENBQVA7QUFhRCxDQTNCRDs7QUE2QkFDLE9BQU9DLE9BQVAsR0FBaUJYLElBQWpCIiwiZmlsZSI6ImtsZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImtsZXlcIixcblx0XHRcdFwicGF0aFwiOiBcImtsZXkva2xleS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwia2xleS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJrbGV5XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rbGV5LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwia2xleS10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdENsYXNzIGNvbnN0cnVjdGlvbiB0aHJvdWdoIGtleSBldmFsdWF0aW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJvdXRyZVwiOiBcIm91dHJlXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJ0cnVreVwiOiBcInRydWt5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3Qgb3V0cmUgPSByZXF1aXJlKCBcIm91dHJlXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgdHJ1a3kgPSByZXF1aXJlKCBcInRydWt5XCIgKTtcblxuY29uc3Qga2xleSA9IGZ1bmN0aW9uIGtsZXkoIGxpc3QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJsaXN0OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCIuLi5cIixcblx0XHRcdFx0XHRBcnJheVxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuIFx0cmV0dXJuIG91dHJlKCBwbG91Z2goIHBsb3VnaCggYXJndW1lbnRzICkubWFwKCAoIGl0ZW0gKSA9PiB7XG5cdFx0bGV0IGl0ZW1UeXBlID0gcHJvdHlwZSggaXRlbSApO1xuXG5cdFx0aWYoIGl0ZW1UeXBlLlNUUklORyApe1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cblx0XHR9ZWxzZSBpZiggaXRlbVR5cGUuT0JKRUNUIHx8IGl0ZW1UeXBlLkZVTkNUSU9OICl7XG5cdFx0XHRyZXR1cm4gdHJ1a3koIGl0ZW0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2xhc3MgY29uc3RydWN0aW9uIGtleVwiICk7XG5cdFx0fVxuXHR9ICkgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrbGV5O1xuIl19
