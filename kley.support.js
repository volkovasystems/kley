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
var truly = require("truly");

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

	return outre(plough(plough(arguments).filter(truly).map(function (item) {
		var itemType = protype(item);

		if (itemType.STRING) {
			return item;
		} else if (itemType.OBJECT || itemType.FUNCTION) {
			return truky(item);
		} else {
			throw new Error("invalid class construction key");
		}
	})).filter(truly));
};

module.exports = kley;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsZXkuanMiXSwibmFtZXMiOlsib3V0cmUiLCJyZXF1aXJlIiwicGxvdWdoIiwicHJvdHlwZSIsInRydWt5IiwidHJ1bHkiLCJrbGV5IiwibGlzdCIsImFyZ3VtZW50cyIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJpdGVtVHlwZSIsIlNUUklORyIsIk9CSkVDVCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNSyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsSUFBZixFQUFxQjtBQUNqQzs7Ozs7Ozs7Ozs7OztBQWFDLFFBQU9QLE1BQU9FLE9BQVFBLE9BQVFNLFNBQVIsRUFBb0JDLE1BQXBCLENBQTRCSixLQUE1QixFQUFvQ0ssR0FBcEMsQ0FBeUMsVUFBRUMsSUFBRixFQUFZO0FBQzNFLE1BQUlDLFdBQVdULFFBQVNRLElBQVQsQ0FBZjs7QUFFQSxNQUFJQyxTQUFTQyxNQUFiLEVBQXFCO0FBQ3BCLFVBQU9GLElBQVA7QUFFQSxHQUhELE1BR00sSUFBSUMsU0FBU0UsTUFBVCxJQUFtQkYsU0FBU0csUUFBaEMsRUFBMEM7QUFDL0MsVUFBT1gsTUFBT08sSUFBUCxDQUFQO0FBRUEsR0FISyxNQUdEO0FBQ0osU0FBTSxJQUFJSyxLQUFKLENBQVcsZ0NBQVgsQ0FBTjtBQUNBO0FBQ0QsRUFac0IsQ0FBUixFQVlUUCxNQVpTLENBWURKLEtBWkMsQ0FBUCxDQUFQO0FBYUQsQ0EzQkQ7O0FBNkJBWSxPQUFPQyxPQUFQLEdBQWlCWixJQUFqQiIsImZpbGUiOiJrbGV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJrbGV5XCIsXG5cdFx0XHRcInBhdGhcIjogXCJrbGV5L2tsZXkuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImtsZXkuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwia2xleVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMva2xleS5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImtsZXktdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDbGFzcyBjb25zdHJ1Y3Rpb24gdGhyb3VnaCBrZXkgZXZhbHVhdGlvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwib3V0cmVcIjogXCJvdXRyZVwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwidHJ1a3lcIjogXCJ0cnVreVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWt5ID0gcmVxdWlyZSggXCJ0cnVreVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCBrbGV5ID0gZnVuY3Rpb24ga2xleSggbGlzdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIi4uLlwiLFxuXHRcdFx0XHRcdEFycmF5XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG4gXHRyZXR1cm4gb3V0cmUoIHBsb3VnaCggcGxvdWdoKCBhcmd1bWVudHMgKS5maWx0ZXIoIHRydWx5ICkubWFwKCAoIGl0ZW0gKSA9PiB7XG5cdFx0bGV0IGl0ZW1UeXBlID0gcHJvdHlwZSggaXRlbSApO1xuXG5cdFx0aWYoIGl0ZW1UeXBlLlNUUklORyApe1xuXHRcdFx0cmV0dXJuIGl0ZW07XG5cblx0XHR9ZWxzZSBpZiggaXRlbVR5cGUuT0JKRUNUIHx8IGl0ZW1UeXBlLkZVTkNUSU9OICl7XG5cdFx0XHRyZXR1cm4gdHJ1a3koIGl0ZW0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY2xhc3MgY29uc3RydWN0aW9uIGtleVwiICk7XG5cdFx0fVxuXHR9ICkgKS5maWx0ZXIoIHRydWx5ICkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2xleTtcbiJdfQ==
