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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/kley.git",
              			"test": "kley-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		HTML class attribute construction through key evaluation.
              	@end-module-documentation
              
              	@include:
              		{
              			"outre": "outre",
              			"plough": "plough",
              			"protype": "protype",
              			"truky": "truky",
              			"truly": "truly"
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
                                				Array,
                                				"object",
                                				"string",
                                				"..."
                                			]
                                		}
                                	@end-meta-configuration
                                */

	return outre(plough(plough(arguments).filter(truly).map(function (item) {
		if (protype(item, STRING)) {
			return item;

		} else if (protype(item, OBJECT, FUNCTION)) {
			return truky(item);

		} else {
			throw new Error("invalid class attribute construction key");
		}
	})).filter(truly));
};

module.exports = kley;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsZXkuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJvdXRyZSIsInJlcXVpcmUiLCJwbG91Z2giLCJwcm90eXBlIiwidHJ1a3kiLCJ0cnVseSIsImtsZXkiLCJsaXN0IiwiYXJndW1lbnRzIiwiZmlsdGVyIiwibWFwIiwiaXRlbSIsIlNUUklORyIsIk9CSkVDVCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1LLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0FBYUEsUUFBT1AsTUFBT0UsT0FBUUEsT0FBUU0sU0FBUixFQUFvQkMsTUFBcEIsQ0FBNEJKLEtBQTVCLEVBQW9DSyxHQUFwQyxDQUF5QyxVQUFFQyxJQUFGLEVBQVk7QUFDMUUsTUFBSVIsUUFBU1EsSUFBVCxFQUFlQyxNQUFmLENBQUosRUFBNkI7QUFDNUIsVUFBT0QsSUFBUDs7QUFFQSxHQUhELE1BR00sSUFBSVIsUUFBU1EsSUFBVCxFQUFlRSxNQUFmLEVBQXVCQyxRQUF2QixDQUFKLEVBQXVDO0FBQzVDLFVBQU9WLE1BQU9PLElBQVAsQ0FBUDs7QUFFQSxHQUhLLE1BR0Q7QUFDSixTQUFNLElBQUlJLEtBQUosQ0FBVywwQ0FBWCxDQUFOO0FBQ0E7QUFDRCxFQVZxQixDQUFSLEVBVVJOLE1BVlEsQ0FVQUosS0FWQSxDQUFQLENBQVA7QUFXQSxDQXpCRDs7QUEyQkFXLE9BQU9DLE9BQVAsR0FBaUJYLElBQWpCIiwiZmlsZSI6ImtsZXkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJrbGV5XCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImtsZXkva2xleS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJrbGV5LmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwia2xleVwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9rbGV5LmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJrbGV5LXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0SFRNTCBjbGFzcyBhdHRyaWJ1dGUgY29uc3RydWN0aW9uIHRocm91Z2gga2V5IGV2YWx1YXRpb24uXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJvdXRyZVwiOiBcIm91dHJlXCIsXHJcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJ0cnVreVwiOiBcInRydWt5XCIsXHJcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBvdXRyZSA9IHJlcXVpcmUoIFwib3V0cmVcIiApO1xyXG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCB0cnVreSA9IHJlcXVpcmUoIFwidHJ1a3lcIiApO1xyXG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xyXG5cclxuY29uc3Qga2xleSA9IGZ1bmN0aW9uIGtsZXkoIGxpc3QgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0QXJyYXksXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwiLi4uXCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0cmV0dXJuIG91dHJlKCBwbG91Z2goIHBsb3VnaCggYXJndW1lbnRzICkuZmlsdGVyKCB0cnVseSApLm1hcCggKCBpdGVtICkgPT4ge1xyXG5cdFx0aWYoIHByb3R5cGUoIGl0ZW0sIFNUUklORyApICl7XHJcblx0XHRcdHJldHVybiBpdGVtO1xyXG5cclxuXHRcdH1lbHNlIGlmKCBwcm90eXBlKCBpdGVtLCBPQkpFQ1QsIEZVTkNUSU9OICkgKXtcclxuXHRcdFx0cmV0dXJuIHRydWt5KCBpdGVtICk7XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNsYXNzIGF0dHJpYnV0ZSBjb25zdHJ1Y3Rpb24ga2V5XCIgKTtcclxuXHRcdH1cclxuXHR9ICkgKS5maWx0ZXIoIHRydWx5ICkgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ga2xleTtcclxuIl19
//# sourceMappingURL=kley.support.js.map
