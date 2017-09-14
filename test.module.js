"use strict";

/*;
	@test-license:
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
	@end-test-license

	@test-configuration:
		{
			"package": "kley",
			"path": "kley/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/kley.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should/as-function",
			"kley": "kley"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const kley = require( "./kley.js" );
//: @end-server

//: @client:
const kley = require( "./kley.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "kley", ( ) => {

	describe( "`kley( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to [ 'world', 'yeah', 'ugh', 'hello' ]", ( ) => {

			assert.deepEqual( kley( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ),
				[ "world", "yeah", "ugh", "hello" ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "kley", ( ) => {

	describe( "`kley( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to [ 'world', 'yeah', 'ugh', 'hello' ]", ( ) => {

			assert.deepEqual( kley( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ),
				[ "world", "yeah", "ugh", "hello" ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "kley", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`kley( { 'hello': 'world' }, 'yeah', [ 'ugh' ], { 'hello': true } )`", ( ) => {
		it( "should be equal to [ 'world', 'yeah', 'ugh', 'hello' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( kley( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "world", "yeah", "ugh", "hello" ] );

		} );
	} );

} );

//: @end-bridge
