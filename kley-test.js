const assert = require( "assert" );
const kley = require( "./kley.js" );

assert.deepEqual( kley( { "hello": "world" }, "yeah", [ "ugh" ], { "hello": true } ),
	[ "world", "yeah", "ugh", "hello" ], "should be equal to [ 'world', 'yeah', 'ugh', 'hello' ]" );

console.log( "ok" );
