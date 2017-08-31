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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsZXkuc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJvdXRyZSIsInJlcXVpcmUiLCJwbG91Z2giLCJwcm90eXBlIiwidHJ1a3kiLCJ0cnVseSIsImtsZXkiLCJsaXN0IiwiYXJndW1lbnRzIiwiZmlsdGVyIiwibWFwIiwiaXRlbSIsIlNUUklORyIsIk9CSkVDVCIsIkZVTkNUSU9OIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxVQUFVRixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1LLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQ2pDOzs7Ozs7Ozs7Ozs7O0FBYUEsUUFBT1AsTUFBT0UsT0FBUUEsT0FBUU0sU0FBUixFQUFvQkMsTUFBcEIsQ0FBNEJKLEtBQTVCLEVBQW9DSyxHQUFwQyxDQUF5QyxVQUFFQyxJQUFGLEVBQVk7QUFDMUUsTUFBSVIsUUFBU1EsSUFBVCxFQUFlQyxNQUFmLENBQUosRUFBNkI7QUFDNUIsVUFBT0QsSUFBUDs7QUFFQSxHQUhELE1BR00sSUFBSVIsUUFBU1EsSUFBVCxFQUFlRSxNQUFmLEVBQXVCQyxRQUF2QixDQUFKLEVBQXVDO0FBQzVDLFVBQU9WLE1BQU9PLElBQVAsQ0FBUDs7QUFFQSxHQUhLLE1BR0Q7QUFDSixTQUFNLElBQUlJLEtBQUosQ0FBVywwQ0FBWCxDQUFOO0FBQ0E7QUFDRCxFQVZxQixDQUFSLEVBVVJOLE1BVlEsQ0FVQUosS0FWQSxDQUFQLENBQVA7QUFXQSxDQXpCRDs7QUEyQkFXLE9BQU9DLE9BQVAsR0FBaUJYLElBQWpCIiwiZmlsZSI6ImtsZXkuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwia2xleVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwia2xleS9rbGV5LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJrbGV5LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImtsZXlcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2tsZXkuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJrbGV5LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0SFRNTCBjbGFzcyBhdHRyaWJ1dGUgY29uc3RydWN0aW9uIHRocm91Z2gga2V5IGV2YWx1YXRpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcIm91dHJlXCI6IFwib3V0cmVcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInRydWt5XCI6IFwidHJ1a3lcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IG91dHJlID0gcmVxdWlyZSggXCJvdXRyZVwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHRydWt5ID0gcmVxdWlyZSggXCJ0cnVreVwiICk7XG5jb25zdCB0cnVseSA9IHJlcXVpcmUoIFwidHJ1bHlcIiApO1xuXG5jb25zdCBrbGV5ID0gZnVuY3Rpb24ga2xleSggbGlzdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdEFycmF5LFxuXHRcdFx0XHRcdFwib2JqZWN0XCIsXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHJldHVybiBvdXRyZSggcGxvdWdoKCBwbG91Z2goIGFyZ3VtZW50cyApLmZpbHRlciggdHJ1bHkgKS5tYXAoICggaXRlbSApID0+IHtcblx0XHRpZiggcHJvdHlwZSggaXRlbSwgU1RSSU5HICkgKXtcblx0XHRcdHJldHVybiBpdGVtO1xuXG5cdFx0fWVsc2UgaWYoIHByb3R5cGUoIGl0ZW0sIE9CSkVDVCwgRlVOQ1RJT04gKSApe1xuXHRcdFx0cmV0dXJuIHRydWt5KCBpdGVtICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNsYXNzIGF0dHJpYnV0ZSBjb25zdHJ1Y3Rpb24ga2V5XCIgKTtcblx0XHR9XG5cdH0gKSApLmZpbHRlciggdHJ1bHkgKSApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrbGV5O1xuIl19
//# sourceMappingURL=kley.support.js.map
