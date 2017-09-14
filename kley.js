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

const outre = require( "outre" );
const plough = require( "plough" );
const protype = require( "protype" );
const truky = require( "truky" );
const truly = require( "truly" );

const kley = function kley( list ){
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

	return outre( plough( plough( arguments ).filter( truly ).map( ( item ) => {
		if( typeof item == "string" ){
			return item;

		}else if( protype( item, OBJECT, FUNCTION ) ){
			return truky( item );

		}else{
			throw new Error( "invalid class attribute construction key" );
		}
	} ) ).filter( truly ) );
};

module.exports = kley;
