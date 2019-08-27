/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__factory, __WEBPACK_LOCAL_MODULE_1__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;var __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__factory, __WEBPACK_LOCAL_MODULE_3__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_5__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_6__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}/*! npm.im/object-fit-images 3.2.3 */var objectFitImages=function(){'use strict';var OFI='bfred-it:object-fit-images';var propRegex=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;var testImg=typeof Image==='undefined'?{style:{'object-position':1}}:new Image();var supportsObjectFit='object-fit'in testImg.style;var supportsObjectPosition='object-position'in testImg.style;var supportsOFI='background-size'in testImg.style;var supportsCurrentSrc=typeof testImg.currentSrc==='string';var nativeGetAttribute=testImg.getAttribute;var nativeSetAttribute=testImg.setAttribute;var autoModeEnabled=false;function createPlaceholder(w,h){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+w+"' height='"+h+"'%3E%3C/svg%3E";}function polyfillCurrentSrc(el){if(el.srcset&&!supportsCurrentSrc&&window.picturefill){var pf=window.picturefill._;// parse srcset with picturefill where currentSrc isn't available
if(!el[pf.ns]||!el[pf.ns].evaled){// force synchronous srcset parsing
pf.fillImg(el,{reselect:true});}if(!el[pf.ns].curSrc){// force picturefill to parse srcset
el[pf.ns].supported=false;pf.fillImg(el,{reselect:true});}// retrieve parsed currentSrc, if any
el.currentSrc=el[pf.ns].curSrc||el.src;}}function getStyle(el){var style=getComputedStyle(el).fontFamily;var parsed;var props={};while((parsed=propRegex.exec(style))!==null){props[parsed[1]]=parsed[2];}return props;}function setPlaceholder(img,width,height){// Default: fill width, no height
var placeholder=createPlaceholder(width||1,height||0);// Only set placeholder if it's different
if(nativeGetAttribute.call(img,'src')!==placeholder){nativeSetAttribute.call(img,'src',placeholder);}}function onImageReady(img,callback){// naturalWidth is only available when the image headers are loaded,
// this loop will poll it every 100ms.
if(img.naturalWidth){callback(img);}else{setTimeout(onImageReady,100,img,callback);}}function fixOne(el){var style=getStyle(el);var ofi=el[OFI];style['object-fit']=style['object-fit']||'fill';// default value
// Avoid running where unnecessary, unless OFI had already done its deed
if(!ofi.img){// fill is the default behavior so no action is necessary
if(style['object-fit']==='fill'){return;}// Where object-fit is supported and object-position isn't (Safari < 10)
if(!ofi.skipTest&&// unless user wants to apply regardless of browser support
supportsObjectFit&&// if browser already supports object-fit
!style['object-position']// unless object-position is used
){return;}}// keep a clone in memory while resetting the original to a blank
if(!ofi.img){ofi.img=new Image(el.width,el.height);ofi.img.srcset=nativeGetAttribute.call(el,"data-ofi-srcset")||el.srcset;ofi.img.src=nativeGetAttribute.call(el,"data-ofi-src")||el.src;// preserve for any future cloneNode calls
// https://github.com/bfred-it/object-fit-images/issues/53
nativeSetAttribute.call(el,"data-ofi-src",el.src);if(el.srcset){nativeSetAttribute.call(el,"data-ofi-srcset",el.srcset);}setPlaceholder(el,el.naturalWidth||el.width,el.naturalHeight||el.height);// remove srcset because it overrides src
if(el.srcset){el.srcset='';}try{keepSrcUsable(el);}catch(err){if(window.console){console.warn('https://bit.ly/ofi-old-browser');}}}polyfillCurrentSrc(ofi.img);el.style.backgroundImage="url(\""+(ofi.img.currentSrc||ofi.img.src).replace(/"/g,'\\"')+"\")";el.style.backgroundPosition=style['object-position']||'center';el.style.backgroundRepeat='no-repeat';el.style.backgroundOrigin='content-box';if(/scale-down/.test(style['object-fit'])){onImageReady(ofi.img,function(){if(ofi.img.naturalWidth>el.width||ofi.img.naturalHeight>el.height){el.style.backgroundSize='contain';}else{el.style.backgroundSize='auto';}});}else{el.style.backgroundSize=style['object-fit'].replace('none','auto').replace('fill','100% 100%');}onImageReady(ofi.img,function(img){setPlaceholder(el,img.naturalWidth,img.naturalHeight);});}function keepSrcUsable(el){var descriptors={get:function get(prop){return el[OFI].img[prop?prop:'src'];},set:function set(value,prop){el[OFI].img[prop?prop:'src']=value;nativeSetAttribute.call(el,"data-ofi-"+prop,value);// preserve for any future cloneNode
fixOne(el);return value;}};Object.defineProperty(el,'src',descriptors);Object.defineProperty(el,'currentSrc',{get:function get(){return descriptors.get('currentSrc');}});Object.defineProperty(el,'srcset',{get:function get(){return descriptors.get('srcset');},set:function set(ss){return descriptors.set(ss,'srcset');}});}function hijackAttributes(){function getOfiImageMaybe(el,name){return el[OFI]&&el[OFI].img&&(name==='src'||name==='srcset')?el[OFI].img:el;}if(!supportsObjectPosition){HTMLImageElement.prototype.getAttribute=function(name){return nativeGetAttribute.call(getOfiImageMaybe(this,name),name);};HTMLImageElement.prototype.setAttribute=function(name,value){return nativeSetAttribute.call(getOfiImageMaybe(this,name),name,String(value));};}}function fix(imgs,opts){var startAutoMode=!autoModeEnabled&&!imgs;opts=opts||{};imgs=imgs||'img';if(supportsObjectPosition&&!opts.skipTest||!supportsOFI){return false;}// use imgs as a selector or just select all images
if(imgs==='img'){imgs=document.getElementsByTagName('img');}else if(typeof imgs==='string'){imgs=document.querySelectorAll(imgs);}else if(!('length'in imgs)){imgs=[imgs];}// apply fix to all
for(var i=0;i<imgs.length;i++){imgs[i][OFI]=imgs[i][OFI]||{skipTest:opts.skipTest};fixOne(imgs[i]);}if(startAutoMode){document.body.addEventListener('load',function(e){if(e.target.tagName==='IMG'){fix(e.target,{skipTest:opts.skipTest});}},true);autoModeEnabled=true;imgs='img';// reset to a generic selector for watchMQ
}// if requested, watch media queries for object-fit change
if(opts.watchMQ){window.addEventListener('resize',fix.bind(null,imgs,{skipTest:opts.skipTest}));}}fix.supportsObjectFit=supportsObjectFit;fix.supportsObjectPosition=supportsObjectPosition;hijackAttributes();return fix;}();/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.9.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */;(function(){'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var supportTransform=function(){var prefixes='transform WebkitTransform MozTransform'.split(' ');var div=document.createElement('div');for(var i=0;i<prefixes.length;i++){if(div&&div.style[prefixes[i]]!==undefined){return prefixes[i];}}return false;}();var ua=navigator.userAgent;var isAndroid=ua.toLowerCase().indexOf('android')>-1;var isIOs=/iPad|iPhone|iPod/.test(ua)&&!window.MSStream;// requestAnimationFrame polyfill
var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);};// init events
function addEventListener(el,eventName,handler){el.addEventListener(eventName,handler);}// Window data
var wndW=void 0;var wndH=void 0;var wndY=void 0;var forceResizeParallax=false;function updateWndVars(e){wndW=window.innerWidth||document.documentElement.clientWidth;wndH=window.innerHeight||document.documentElement.clientHeight;if((typeof e==='undefined'?'undefined':_typeof(e))==='object'&&(e.type==='load'||e.type==='DOMContentLoaded')){forceResizeParallax=true;}}updateWndVars();addEventListener(window,'resize',updateWndVars);addEventListener(window,'orientationchange',updateWndVars);addEventListener(window,'load',updateWndVars);addEventListener(window,'DOMContentLoaded',updateWndVars);// list with all jarallax instances
// need to render all in one scroll/resize event
var jarallaxList=[];// Animate if changed window size or scrolled page
var oldPageData=false;function updateParallax(){if(!jarallaxList.length){return;}if(window.pageYOffset!==undefined){wndY=window.pageYOffset;}else{wndY=(document.documentElement||document.body.parentNode||document.body).scrollTop;}var isResized=forceResizeParallax||!oldPageData||oldPageData.width!==wndW||oldPageData.height!==wndH;var isScrolled=isResized||!oldPageData||oldPageData.y!==wndY;forceResizeParallax=false;if(isResized||isScrolled){jarallaxList.forEach(function(item){if(isResized){item.onResize();}if(isScrolled){item.onScroll();}});oldPageData={width:wndW,height:wndH,y:wndY};}rAF(updateParallax);}var instanceID=0;// Jarallax class
var Jarallax=function(){function Jarallax(item,userOptions){_classCallCheck(this,Jarallax);var self=this;self.instanceID=instanceID++;self.$item=item;self.defaults={type:'scroll',// type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
speed:0.5,// supported value from -1 to 2
imgSrc:null,imgElement:'.jarallax-img',imgSize:'cover',imgPosition:'50% 50%',imgRepeat:'no-repeat',// supported only for background, not for <img> tag
keepImg:false,// keep <img> tag in it's default place
elementInViewport:null,zIndex:-100,noAndroid:false,noIos:false,// video
videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoPlayOnlyVisible:true,// events
onScroll:null,// function(calculations) {}
onInit:null,// function() {}
onDestroy:null,// function() {}
onCoverImage:null// function() {}
};// DEPRECATED: old data-options
var deprecatedDataAttribute=self.$item.getAttribute('data-jarallax');var oldDataOptions=JSON.parse(deprecatedDataAttribute||'{}');if(deprecatedDataAttribute){console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');}// prepare data-options
var dataOptions=self.$item.dataset||{};var pureDataOptions={};Object.keys(dataOptions).forEach(function(key){var loweCaseOption=key.substr(0,1).toLowerCase()+key.substr(1);if(loweCaseOption&&typeof self.defaults[loweCaseOption]!=='undefined'){pureDataOptions[loweCaseOption]=dataOptions[key];}});self.options=self.extend({},self.defaults,oldDataOptions,pureDataOptions,userOptions);self.pureOptions=self.extend({},self.options);// prepare 'true' and 'false' strings to boolean
Object.keys(self.options).forEach(function(key){if(self.options[key]==='true'){self.options[key]=true;}else if(self.options[key]==='false'){self.options[key]=false;}});// fix speed option [-1.0, 2.0]
self.options.speed=Math.min(2,Math.max(-1,parseFloat(self.options.speed)));// custom element to check if parallax in viewport
var elementInVP=self.options.elementInViewport;// get first item from array
if(elementInVP&&(typeof elementInVP==='undefined'?'undefined':_typeof(elementInVP))==='object'&&typeof elementInVP.length!=='undefined'){elementInVP=elementInVP[0];}// check if dom element
if(!(elementInVP instanceof Element)){elementInVP=null;}self.options.elementInViewport=elementInVP;self.image={src:self.options.imgSrc||null,$container:null,useImgTag:false,// position fixed is needed for the most of browsers because absolute position have glitches
// on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
// on mobile devices better scrolled with absolute position
position:isAndroid||isIOs?'absolute':'fixed'};if(self.initImg()&&self.canInitParallax()){self.init();}}// add styles to element
_createClass(Jarallax,[{key:'css',value:function css(el,styles){if(typeof styles==='string'){return window.getComputedStyle(el).getPropertyValue(styles);}// add transform property with vendor prefix
if(styles.transform&&supportTransform){styles[supportTransform]=styles.transform;}Object.keys(styles).forEach(function(key){el.style[key]=styles[key];});return el;}// Extend like jQuery.extend
},{key:'extend',value:function extend(out){var _arguments=arguments;out=out||{};Object.keys(arguments).forEach(function(i){if(!_arguments[i]){return;}Object.keys(_arguments[i]).forEach(function(key){out[key]=_arguments[i][key];});});return out;}// get window size and scroll position. Useful for extensions
},{key:'getWindowData',value:function getWindowData(){return{width:wndW,height:wndH,y:wndY};}// Jarallax functions
},{key:'initImg',value:function initImg(){var self=this;// find image element
var $imgElement=self.options.imgElement;if($imgElement&&typeof $imgElement==='string'){$imgElement=self.$item.querySelector($imgElement);}// check if dom element
if(!($imgElement instanceof Element)){$imgElement=null;}if($imgElement){if(self.options.keepImg){self.image.$item=$imgElement.cloneNode(true);}else{self.image.$item=$imgElement;self.image.$itemParent=$imgElement.parentNode;}self.image.useImgTag=true;}// true if there is img tag
if(self.image.$item){return true;}// get image src
if(self.image.src===null){self.image.src=self.css(self.$item,'background-image').replace(/^url\(['"]?/g,'').replace(/['"]?\)$/g,'');}return!(!self.image.src||self.image.src==='none');}},{key:'canInitParallax',value:function canInitParallax(){return supportTransform&&!(isAndroid&&this.options.noAndroid)&&!(isIOs&&this.options.noIos);}},{key:'init',value:function init(){var self=this;var containerStyles={position:'absolute',top:0,left:0,width:'100%',height:'100%',overflow:'hidden',pointerEvents:'none'};var imageStyles={};if(!self.options.keepImg){// save default user styles
var curStyle=self.$item.getAttribute('style');if(curStyle){self.$item.setAttribute('data-jarallax-original-styles',curStyle);}if(self.image.useImgTag){var curImgStyle=self.image.$item.getAttribute('style');if(curImgStyle){self.image.$item.setAttribute('data-jarallax-original-styles',curImgStyle);}}}// set relative position and z-index to the parent
if(self.css(self.$item,'position')==='static'){self.css(self.$item,{position:'relative'});}if(self.css(self.$item,'z-index')==='auto'){self.css(self.$item,{zIndex:0});}// container for parallax image
self.image.$container=document.createElement('div');self.css(self.image.$container,containerStyles);self.css(self.image.$container,{'z-index':self.options.zIndex});self.image.$container.setAttribute('id','jarallax-container-'+self.instanceID);self.$item.appendChild(self.image.$container);// use img tag
if(self.image.useImgTag){imageStyles=self.extend({'object-fit':self.options.imgSize,'object-position':self.options.imgPosition,// support for plugin https://github.com/bfred-it/object-fit-images
'font-family':'object-fit: '+self.options.imgSize+'; object-position: '+self.options.imgPosition+';','max-width':'none'},containerStyles,imageStyles);// use div with background image
}else{self.image.$item=document.createElement('div');imageStyles=self.extend({'background-position':self.options.imgPosition,'background-size':self.options.imgSize,'background-repeat':self.options.imgRepeat,'background-image':'url("'+self.image.src+'")'},containerStyles,imageStyles);}if(self.options.type==='opacity'||self.options.type==='scale'||self.options.type==='scale-opacity'||self.options.speed===1){self.image.position='absolute';}// check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
// discussion - https://github.com/nk-o/jarallax/issues/9
if(self.image.position==='fixed'){var parentWithTransform=0;var $itemParents=self.$item;while($itemParents!==null&&$itemParents!==document&&parentWithTransform===0){var parentTransform=self.css($itemParents,'-webkit-transform')||self.css($itemParents,'-moz-transform')||self.css($itemParents,'transform');if(parentTransform&&parentTransform!=='none'){parentWithTransform=1;self.image.position='absolute';}$itemParents=$itemParents.parentNode;}}// add position to parallax block
imageStyles.position=self.image.position;// insert parallax image
self.css(self.image.$item,imageStyles);self.image.$container.appendChild(self.image.$item);// set initial position and size
self.coverImage();self.clipContainer();self.onScroll(true);// call onInit event
if(self.options.onInit){self.options.onInit.call(self);}// remove default user background
if(self.css(self.$item,'background-image')!=='none'){self.css(self.$item,{'background-image':'none'});}self.addToParallaxList();}// add to parallax instances list
},{key:'addToParallaxList',value:function addToParallaxList(){jarallaxList.push(this);if(jarallaxList.length===1){updateParallax();}}// remove from parallax instances list
},{key:'removeFromParallaxList',value:function removeFromParallaxList(){var self=this;jarallaxList.forEach(function(item,key){if(item.instanceID===self.instanceID){jarallaxList.splice(key,1);}});}},{key:'destroy',value:function destroy(){var self=this;self.removeFromParallaxList();// return styles on container as before jarallax init
var originalStylesTag=self.$item.getAttribute('data-jarallax-original-styles');self.$item.removeAttribute('data-jarallax-original-styles');// null occurs if there is no style tag before jarallax init
if(!originalStylesTag){self.$item.removeAttribute('style');}else{self.$item.setAttribute('style',originalStylesTag);}if(self.image.useImgTag){// return styles on img tag as before jarallax init
var originalStylesImgTag=self.image.$item.getAttribute('data-jarallax-original-styles');self.image.$item.removeAttribute('data-jarallax-original-styles');// null occurs if there is no style tag before jarallax init
if(!originalStylesImgTag){self.image.$item.removeAttribute('style');}else{self.image.$item.setAttribute('style',originalStylesTag);}// move img tag to its default position
if(self.image.$itemParent){self.image.$itemParent.appendChild(self.image.$item);}}// remove additional dom elements
if(self.$clipStyles){self.$clipStyles.parentNode.removeChild(self.$clipStyles);}if(self.image.$container){self.image.$container.parentNode.removeChild(self.image.$container);}// call onDestroy event
if(self.options.onDestroy){self.options.onDestroy.call(self);}// delete jarallax from item
delete self.$item.jarallax;}// it will remove some image overlapping
// overlapping occur due to an image position fixed inside absolute position element
},{key:'clipContainer',value:function clipContainer(){// needed only when background in fixed position
if(this.image.position!=='fixed'){return;}var self=this;var rect=self.image.$container.getBoundingClientRect();var width=rect.width;var height=rect.height;if(!self.$clipStyles){self.$clipStyles=document.createElement('style');self.$clipStyles.setAttribute('type','text/css');self.$clipStyles.setAttribute('id','jarallax-clip-'+self.instanceID);var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(self.$clipStyles);}var styles='#jarallax-container-'+self.instanceID+' {\n           clip: rect(0 '+width+'px '+height+'px 0);\n           clip: rect(0, '+width+'px, '+height+'px, 0);\n        }';// add clip styles inline (this method need for support IE8 and less browsers)
if(self.$clipStyles.styleSheet){self.$clipStyles.styleSheet.cssText=styles;}else{self.$clipStyles.innerHTML=styles;}}},{key:'coverImage',value:function coverImage(){var self=this;var rect=self.image.$container.getBoundingClientRect();var contH=rect.height;var speed=self.options.speed;var isScroll=self.options.type==='scroll'||self.options.type==='scroll-opacity';var scrollDist=0;var resultH=contH;var resultMT=0;// scroll parallax
if(isScroll){// scroll distance and height for image
if(speed<0){scrollDist=speed*Math.max(contH,wndH);}else{scrollDist=speed*(contH+wndH);}// size for scroll parallax
if(speed>1){resultH=Math.abs(scrollDist-wndH);}else if(speed<0){resultH=scrollDist/speed+Math.abs(scrollDist);}else{resultH+=Math.abs(wndH-contH)*(1-speed);}scrollDist/=2;}// store scroll distance
self.parallaxScrollDistance=scrollDist;// vertical center
if(isScroll){resultMT=(wndH-resultH)/2;}else{resultMT=(contH-resultH)/2;}// apply result to item
self.css(self.image.$item,{height:resultH+'px',marginTop:resultMT+'px',left:self.image.position==='fixed'?rect.left+'px':'0',width:rect.width+'px'});// call onCoverImage event
if(self.options.onCoverImage){self.options.onCoverImage.call(self);}// return some useful data. Used in the video cover function
return{image:{height:resultH,marginTop:resultMT},container:rect};}},{key:'isVisible',value:function isVisible(){return this.isElementInViewport||false;}},{key:'onScroll',value:function onScroll(force){var self=this;var rect=self.$item.getBoundingClientRect();var contT=rect.top;var contH=rect.height;var styles={};// check if in viewport
var viewportRect=rect;if(self.options.elementInViewport){viewportRect=self.options.elementInViewport.getBoundingClientRect();}self.isElementInViewport=viewportRect.bottom>=0&&viewportRect.right>=0&&viewportRect.top<=wndH&&viewportRect.left<=wndW;// stop calculations if item is not in viewport
if(force?false:!self.isElementInViewport){return;}// calculate parallax helping variables
var beforeTop=Math.max(0,contT);var beforeTopEnd=Math.max(0,contH+contT);var afterTop=Math.max(0,-contT);var beforeBottom=Math.max(0,contT+contH-wndH);var beforeBottomEnd=Math.max(0,contH-(contT+contH-wndH));var afterBottom=Math.max(0,-contT+wndH-contH);var fromViewportCenter=1-2*(wndH-contT)/(wndH+contH);// calculate on how percent of section is visible
var visiblePercent=1;if(contH<wndH){visiblePercent=1-(afterTop||beforeBottom)/contH;}else if(beforeTopEnd<=wndH){visiblePercent=beforeTopEnd/wndH;}else if(beforeBottomEnd<=wndH){visiblePercent=beforeBottomEnd/wndH;}// opacity
if(self.options.type==='opacity'||self.options.type==='scale-opacity'||self.options.type==='scroll-opacity'){styles.transform='translate3d(0,0,0)';styles.opacity=visiblePercent;}// scale
if(self.options.type==='scale'||self.options.type==='scale-opacity'){var scale=1;if(self.options.speed<0){scale-=self.options.speed*visiblePercent;}else{scale+=self.options.speed*(1-visiblePercent);}styles.transform='scale('+scale+') translate3d(0,0,0)';}// scroll
if(self.options.type==='scroll'||self.options.type==='scroll-opacity'){var positionY=self.parallaxScrollDistance*fromViewportCenter;// fix if parallax block in absolute position
if(self.image.position==='absolute'){positionY-=contT;}styles.transform='translate3d(0,'+positionY+'px,0)';}self.css(self.image.$item,styles);// call onScroll event
if(self.options.onScroll){self.options.onScroll.call(self,{section:rect,beforeTop:beforeTop,beforeTopEnd:beforeTopEnd,afterTop:afterTop,beforeBottom:beforeBottom,beforeBottomEnd:beforeBottomEnd,afterBottom:afterBottom,visiblePercent:visiblePercent,fromViewportCenter:fromViewportCenter});}}},{key:'onResize',value:function onResize(){this.coverImage();this.clipContainer();}}]);return Jarallax;}();// global definition
var plugin=function plugin(items){// check for dom element
// thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
if((typeof HTMLElement==='undefined'?'undefined':_typeof(HTMLElement))==='object'?items instanceof HTMLElement:items&&(typeof items==='undefined'?'undefined':_typeof(items))==='object'&&items!==null&&items.nodeType===1&&typeof items.nodeName==='string'){items=[items];}var options=arguments[1];var args=Array.prototype.slice.call(arguments,2);var len=items.length;var k=0;var ret=void 0;for(k;k<len;k++){if((typeof options==='undefined'?'undefined':_typeof(options))==='object'||typeof options==='undefined'){if(!items[k].jarallax){items[k].jarallax=new Jarallax(items[k],options);}}else if(items[k].jarallax){// eslint-disable-next-line prefer-spread
ret=items[k].jarallax[options].apply(items[k].jarallax,args);}if(typeof ret!=='undefined'){return ret;}}return items;};plugin.constructor=Jarallax;// no conflict
var oldPlugin=window.jarallax;window.jarallax=plugin;window.jarallax.noConflict=function(){window.jarallax=oldPlugin;return this;};// jQuery support
if(typeof jQuery!=='undefined'){var jQueryPlugin=function jQueryPlugin(){var args=arguments||[];Array.prototype.unshift.call(args,this);var res=plugin.apply(window,args);return(typeof res==='undefined'?'undefined':_typeof(res))!=='object'?res:this;};jQueryPlugin.constructor=Jarallax;// no conflict
var oldJqPlugin=jQuery.fn.jarallax;jQuery.fn.jarallax=jQueryPlugin;jQuery.fn.jarallax.noConflict=function(){jQuery.fn.jarallax=oldJqPlugin;return this;};}// data-jarallax initialization
addEventListener(window,'DOMContentLoaded',function(){plugin(document.querySelectorAll('[data-jarallax]'));});})();/*!
 * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
 * Version : 1.9.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */;(function(){'use strict';var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred(){this._done=[];this._fail=[];}Deferred.prototype={execute:function execute(list,args){var i=list.length;args=Array.prototype.slice.call(args);while(i--){list[i].apply(null,args);}},resolve:function resolve(){this.execute(this._done,arguments);},reject:function reject(){this.execute(this._fail,arguments);},done:function done(callback){this._done.push(callback);},fail:function fail(callback){this._fail.push(callback);}};// init events
function addEventListener(el,eventName,handler){el.addEventListener(eventName,handler);}var ID=0;var YoutubeAPIadded=0;var VimeoAPIadded=0;var loadingYoutubePlayer=0;var loadingVimeoPlayer=0;var loadingYoutubeDeffer=new Deferred();var loadingVimeoDeffer=new Deferred();var VideoWorker=function(){function VideoWorker(url,options){_classCallCheck(this,VideoWorker);var self=this;self.url=url;self.options_default={autoplay:1,loop:1,mute:1,volume:0,controls:0,// start / end video time in ms
startTime:0,endTime:0};self.options=self.extend({},self.options_default,options);// check URL
self.videoID=self.parseURL(url);// init
if(self.videoID){self.ID=ID++;self.loadAPI();self.init();}}// Extend like jQuery.extend
_createClass(VideoWorker,[{key:'extend',value:function extend(out){var _arguments=arguments;out=out||{};Object.keys(arguments).forEach(function(i){if(!_arguments[i]){return;}Object.keys(_arguments[i]).forEach(function(key){out[key]=_arguments[i][key];});});return out;}},{key:'parseURL',value:function parseURL(url){// parse youtube ID
function getYoutubeID(ytUrl){// eslint-disable-next-line no-useless-escape
var regExp=/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;var match=ytUrl.match(regExp);return match&&match[1].length===11?match[1]:false;}// parse vimeo ID
function getVimeoID(vmUrl){// eslint-disable-next-line no-useless-escape
var regExp=/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;var match=vmUrl.match(regExp);return match&&match[3]?match[3]:false;}// parse local string
function getLocalVideos(locUrl){// eslint-disable-next-line no-useless-escape
var videoFormats=locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);var result={};var ready=0;videoFormats.forEach(function(val){// eslint-disable-next-line no-useless-escape
var match=val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);if(match&&match[1]&&match[2]){result[match[1]==='ogv'?'ogg':match[1]]=match[2];ready=1;}});return ready?result:false;}var Youtube=getYoutubeID(url);var Vimeo=getVimeoID(url);var Local=getLocalVideos(url);if(Youtube){this.type='youtube';return Youtube;}else if(Vimeo){this.type='vimeo';return Vimeo;}else if(Local){this.type='local';return Local;}return false;}},{key:'isValid',value:function isValid(){return!!this.videoID;}// events
},{key:'on',value:function on(name,callback){this.userEventsList=this.userEventsList||[];// add new callback in events list
(this.userEventsList[name]||(this.userEventsList[name]=[])).push(callback);}},{key:'off',value:function off(name,callback){var _this=this;if(!this.userEventsList||!this.userEventsList[name]){return;}if(!callback){delete this.userEventsList[name];}else{this.userEventsList[name].forEach(function(val,key){if(val===callback){_this.userEventsList[name][key]=false;}});}}},{key:'fire',value:function fire(name){var _this2=this;var args=[].slice.call(arguments,1);if(this.userEventsList&&typeof this.userEventsList[name]!=='undefined'){this.userEventsList[name].forEach(function(val){// call with all arguments
if(val){val.apply(_this2,args);}});}}},{key:'play',value:function play(start){var self=this;if(!self.player){return;}if(self.type==='youtube'&&self.player.playVideo){if(typeof start!=='undefined'){self.player.seekTo(start||0);}if(YT.PlayerState.PLAYING!==self.player.getPlayerState()){self.player.playVideo();}}if(self.type==='vimeo'){if(typeof start!=='undefined'){self.player.setCurrentTime(start);}self.player.getPaused().then(function(paused){if(paused){self.player.play();}});}if(self.type==='local'){if(typeof start!=='undefined'){self.player.currentTime=start;}if(self.player.paused){self.player.play();}}}},{key:'pause',value:function pause(){var self=this;if(!self.player){return;}if(self.type==='youtube'&&self.player.pauseVideo){if(YT.PlayerState.PLAYING===self.player.getPlayerState()){self.player.pauseVideo();}}if(self.type==='vimeo'){self.player.getPaused().then(function(paused){if(!paused){self.player.pause();}});}if(self.type==='local'){if(!self.player.paused){self.player.pause();}}}},{key:'getImageURL',value:function getImageURL(callback){var self=this;if(self.videoImage){callback(self.videoImage);return;}if(self.type==='youtube'){var availableSizes=['maxresdefault','sddefault','hqdefault','0'];var step=0;var tempImg=new Image();tempImg.onload=function(){// if no thumbnail, youtube add their own image with width = 120px
if((this.naturalWidth||this.width)!==120||step===availableSizes.length-1){// ok
self.videoImage='https://img.youtube.com/vi/'+self.videoID+'/'+availableSizes[step]+'.jpg';callback(self.videoImage);}else{// try another size
step++;this.src='https://img.youtube.com/vi/'+self.videoID+'/'+availableSizes[step]+'.jpg';}};tempImg.src='https://img.youtube.com/vi/'+self.videoID+'/'+availableSizes[step]+'.jpg';}if(self.type==='vimeo'){var request=new XMLHttpRequest();request.open('GET','https://vimeo.com/api/v2/video/'+self.videoID+'.json',true);request.onreadystatechange=function(){if(this.readyState===4){if(this.status>=200&&this.status<400){// Success!
var response=JSON.parse(this.responseText);self.videoImage=response[0].thumbnail_large;callback(self.videoImage);}else{// Error :(
}}};request.send();request=null;}}},{key:'getIframe',value:function getIframe(callback){var self=this;// return generated iframe
if(self.$iframe){callback(self.$iframe);return;}// generate new iframe
self.onAPIready(function(){var hiddenDiv=void 0;if(!self.$iframe){hiddenDiv=document.createElement('div');hiddenDiv.style.display='none';}// Youtube
if(self.type==='youtube'){self.playerOptions={};self.playerOptions.videoId=self.videoID;self.playerOptions.playerVars={autohide:1,rel:0,autoplay:0,// autoplay enable on mobile devices
playsinline:1};// hide controls
if(!self.options.controls){self.playerOptions.playerVars.iv_load_policy=3;self.playerOptions.playerVars.modestbranding=1;self.playerOptions.playerVars.controls=0;self.playerOptions.playerVars.showinfo=0;self.playerOptions.playerVars.disablekb=1;}// events
var ytStarted=void 0;var ytProgressInterval=void 0;self.playerOptions.events={onReady:function onReady(e){// mute
if(self.options.mute){e.target.mute();}else if(self.options.volume){e.target.setVolume(self.options.volume);}// autoplay
if(self.options.autoplay){self.play(self.options.startTime);}self.fire('ready',e);},onStateChange:function onStateChange(e){// loop
if(self.options.loop&&e.data===YT.PlayerState.ENDED){self.play(self.options.startTime);}if(!ytStarted&&e.data===YT.PlayerState.PLAYING){ytStarted=1;self.fire('started',e);}if(e.data===YT.PlayerState.PLAYING){self.fire('play',e);}if(e.data===YT.PlayerState.PAUSED){self.fire('pause',e);}if(e.data===YT.PlayerState.ENDED){self.fire('end',e);}// check for end of video and play again or stop
if(self.options.endTime){if(e.data===YT.PlayerState.PLAYING){ytProgressInterval=setInterval(function(){if(self.options.endTime&&self.player.getCurrentTime()>=self.options.endTime){if(self.options.loop){self.play(self.options.startTime);}else{self.pause();}}},150);}else{clearInterval(ytProgressInterval);}}}};var firstInit=!self.$iframe;if(firstInit){var div=document.createElement('div');div.setAttribute('id',self.playerID);hiddenDiv.appendChild(div);document.body.appendChild(hiddenDiv);}self.player=self.player||new window.YT.Player(self.playerID,self.playerOptions);if(firstInit){self.$iframe=document.getElementById(self.playerID);// get video width and height
self.videoWidth=parseInt(self.$iframe.getAttribute('width'),10)||1280;self.videoHeight=parseInt(self.$iframe.getAttribute('height'),10)||720;}}// Vimeo
if(self.type==='vimeo'){self.playerOptions='';self.playerOptions+='player_id='+self.playerID;self.playerOptions+='&autopause=0';self.playerOptions+='&transparent=0';// hide controls
if(!self.options.controls){self.playerOptions+='&badge=0&byline=0&portrait=0&title=0';}// autoplay
self.playerOptions+='&autoplay='+(self.options.autoplay?'1':'0');// loop
self.playerOptions+='&loop='+(self.options.loop?1:0);if(!self.$iframe){self.$iframe=document.createElement('iframe');self.$iframe.setAttribute('id',self.playerID);self.$iframe.setAttribute('src','https://player.vimeo.com/video/'+self.videoID+'?'+self.playerOptions);self.$iframe.setAttribute('frameborder','0');hiddenDiv.appendChild(self.$iframe);document.body.appendChild(hiddenDiv);}self.player=self.player||new Vimeo.Player(self.$iframe);// get video width and height
self.player.getVideoWidth().then(function(width){self.videoWidth=width||1280;});self.player.getVideoHeight().then(function(height){self.videoHeight=height||720;});// set current time for autoplay
if(self.options.startTime&&self.options.autoplay){self.player.setCurrentTime(self.options.startTime);}// mute
if(self.options.mute){self.player.setVolume(0);}else if(self.options.volume){self.player.setVolume(self.options.volume);}var vmStarted=void 0;self.player.on('timeupdate',function(e){if(!vmStarted){self.fire('started',e);}vmStarted=1;// check for end of video and play again or stop
if(self.options.endTime){if(self.options.endTime&&e.seconds>=self.options.endTime){if(self.options.loop){self.play(self.options.startTime);}else{self.pause();}}}});self.player.on('play',function(e){self.fire('play',e);// check for the start time and start with it
if(self.options.startTime&&e.seconds===0){self.play(self.options.startTime);}});self.player.on('pause',function(e){self.fire('pause',e);});self.player.on('ended',function(e){self.fire('end',e);});self.player.on('loaded',function(e){self.fire('ready',e);});}// Local
function addSourceToLocal(element,src,type){var source=document.createElement('source');source.src=src;source.type=type;element.appendChild(source);}if(self.type==='local'){if(!self.$iframe){self.$iframe=document.createElement('video');// mute
if(self.options.mute){self.$iframe.muted=true;}else if(self.$iframe.volume){self.$iframe.volume=self.options.volume/100;}// loop
if(self.options.loop){self.$iframe.loop=true;}// autoplay enable on mobile devices
self.$iframe.setAttribute('playsinline','');self.$iframe.setAttribute('webkit-playsinline','');self.$iframe.setAttribute('id',self.playerID);hiddenDiv.appendChild(self.$iframe);document.body.appendChild(hiddenDiv);Object.keys(self.videoID).forEach(function(key){addSourceToLocal(self.$iframe,self.videoID[key],'video/'+key);});}self.player=self.player||self.$iframe;var locStarted=void 0;addEventListener(self.player,'playing',function(e){if(!locStarted){self.fire('started',e);}locStarted=1;});addEventListener(self.player,'timeupdate',function(){// check for end of video and play again or stop
if(self.options.endTime){if(self.options.endTime&&this.currentTime>=self.options.endTime){if(self.options.loop){self.play(self.options.startTime);}else{self.pause();}}}});addEventListener(self.player,'play',function(e){self.fire('play',e);});addEventListener(self.player,'pause',function(e){self.fire('pause',e);});addEventListener(self.player,'ended',function(e){self.fire('end',e);});addEventListener(self.player,'loadedmetadata',function(){// get video width and height
self.videoWidth=this.videoWidth||1280;self.videoHeight=this.videoHeight||720;self.fire('ready');// autoplay
if(self.options.autoplay){self.play(self.options.startTime);}});}callback(self.$iframe);});}},{key:'init',value:function init(){var self=this;self.playerID='VideoWorker-'+self.ID;}},{key:'loadAPI',value:function loadAPI(){var self=this;if(YoutubeAPIadded&&VimeoAPIadded){return;}var src='';// load Youtube API
if(self.type==='youtube'&&!YoutubeAPIadded){YoutubeAPIadded=1;src='https://www.youtube.com/iframe_api';}// load Vimeo API
if(self.type==='vimeo'&&!VimeoAPIadded){VimeoAPIadded=1;src='https://player.vimeo.com/api/player.js';}if(!src){return;}// add script in head section
var tag=document.createElement('script');var head=document.getElementsByTagName('head')[0];tag.src=src;head.appendChild(tag);head=null;tag=null;}},{key:'onAPIready',value:function onAPIready(callback){var self=this;// Youtube
if(self.type==='youtube'){// Listen for global YT player callback
if((typeof YT==='undefined'||YT.loaded===0)&&!loadingYoutubePlayer){// Prevents Ready event from being called twice
loadingYoutubePlayer=1;// Creates deferred so, other players know when to wait.
window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady=null;loadingYoutubeDeffer.resolve('done');callback();};}else if((typeof YT==='undefined'?'undefined':_typeof(YT))==='object'&&YT.loaded===1){callback();}else{loadingYoutubeDeffer.done(function(){callback();});}}// Vimeo
if(self.type==='vimeo'){if(typeof Vimeo==='undefined'&&!loadingVimeoPlayer){loadingVimeoPlayer=1;var vimeoInterval=setInterval(function(){if(typeof Vimeo!=='undefined'){clearInterval(vimeoInterval);loadingVimeoDeffer.resolve('done');callback();}},20);}else if(typeof Vimeo!=='undefined'){callback();}else{loadingVimeoDeffer.done(function(){callback();});}}// Local
if(self.type==='local'){callback();}}}]);return VideoWorker;}();window.VideoWorker=VideoWorker;/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */(function(){if(typeof jarallax==='undefined'){return;}var Jarallax=jarallax.constructor;// append video after init Jarallax
var defInit=Jarallax.prototype.init;Jarallax.prototype.init=function(){var self=this;defInit.apply(self);if(self.video){self.video.getIframe(function(iframe){var $parent=iframe.parentNode;self.css(iframe,{position:self.image.position,top:'0px',left:'0px',right:'0px',bottom:'0px',width:'100%',height:'100%',maxWidth:'none',maxHeight:'none',margin:0,zIndex:-1});self.$video=iframe;self.image.$container.appendChild(iframe);// remove parent iframe element (created by VideoWorker)
$parent.parentNode.removeChild($parent);});}};// cover video
var defCoverImage=Jarallax.prototype.coverImage;Jarallax.prototype.coverImage=function(){var self=this;var imageData=defCoverImage.apply(self);var node=self.image.$item.nodeName;if(imageData&&self.video&&(node==='IFRAME'||node==='VIDEO')){var h=imageData.image.height;var w=h*self.image.width/self.image.height;var ml=(imageData.container.width-w)/2;var mt=imageData.image.marginTop;if(imageData.container.width>w){w=imageData.container.width;h=w*self.image.height/self.image.width;ml=0;mt+=(imageData.image.height-h)/2;}// add video height over than need to hide controls
if(node==='IFRAME'){h+=400;mt-=200;}self.css(self.$video,{width:w+'px',marginLeft:ml+'px',height:h+'px',marginTop:mt+'px'});}return imageData;};// init video
var defInitImg=Jarallax.prototype.initImg;Jarallax.prototype.initImg=function(){var self=this;var defaultResult=defInitImg.apply(self);if(!self.options.videoSrc){self.options.videoSrc=self.$item.getAttribute('data-jarallax-video')||null;}if(self.options.videoSrc){self.defaultInitImgResult=defaultResult;return true;}return defaultResult;};var defCanInitParallax=Jarallax.prototype.canInitParallax;Jarallax.prototype.canInitParallax=function(){var self=this;var defaultResult=defCanInitParallax.apply(self);if(!self.options.videoSrc){return defaultResult;}var video=new VideoWorker(self.options.videoSrc,{startTime:self.options.videoStartTime||0,endTime:self.options.videoEndTime||0,mute:self.options.videoVolume?0:1,volume:self.options.videoVolume||0});if(video.isValid()){// if parallax will not be inited, we can add thumbnail on background.
if(!defaultResult){if(!self.defaultInitImgResult){video.getImageURL(function(url){// save default user styles
var curStyle=self.$item.getAttribute('style');if(curStyle){self.$item.setAttribute('data-jarallax-original-styles',curStyle);}// set new background
self.css(self.$item,{'background-image':'url("'+url+'")','background-position':'center','background-size':'cover'});});}// init video
}else{video.on('ready',function(){if(self.options.videoPlayOnlyVisible){var oldOnScroll=self.onScroll;self.onScroll=function(){oldOnScroll.apply(self);if(self.isVisible()){video.play();}else{video.pause();}};}else{video.play();}});video.on('started',function(){self.image.$default_item=self.image.$item;self.image.$item=self.$video;// set video width and height
self.image.width=self.video.videoWidth||1280;self.image.height=self.video.videoHeight||720;self.options.imgWidth=self.image.width;self.options.imgHeight=self.image.height;self.coverImage();self.clipContainer();self.onScroll();// hide image
if(self.image.$default_item){self.image.$default_item.style.display='none';}});self.video=video;// set image if not exists
if(!self.defaultInitImgResult){if(video.type!=='local'){video.getImageURL(function(url){self.image.src=url;self.init();});return false;}// set empty image on local video if not defined
self.image.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';return true;}}}return defaultResult;};// Destroy video parallax
var defDestroy=Jarallax.prototype.destroy;Jarallax.prototype.destroy=function(){var self=this;if(self.image.$default_item){self.image.$item=self.image.$default_item;delete self.image.$default_item;}defDestroy.apply(self);};// data-jarallax-video initialization
addEventListener(window,'DOMContentLoaded',function(){jarallax(document.querySelectorAll('[data-jarallax-video]'));});})();})();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return _typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};(function(global,factory){( false?undefined:_typeof(exports))==='object'&&typeof module!=='undefined'?module.exports=factory(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;})(this,function(){'use strict';var getInstanceSettings=function getInstanceSettings(customSettings){var defaultSettings={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null,callback_enter:null};return _extends({},defaultSettings,customSettings);};var dataPrefix="data-";var getData=function getData(element,attribute){return element.getAttribute(dataPrefix+attribute);};var setData=function setData(element,attribute,value){return element.setAttribute(dataPrefix+attribute,value);};var purgeElements=function purgeElements(elements){return elements.filter(function(element){return!getData(element,"was-processed");});};/* Creates instance and notifies it through the window element */var createInstance=function createInstance(classObj,options){var event;var eventString="LazyLoad::Initialized";var instance=new classObj(options);try{// Works in modern browsers
event=new CustomEvent(eventString,{detail:{instance:instance}});}catch(err){// Works in Internet Explorer (all versions)
event=document.createEvent("CustomEvent");event.initCustomEvent(eventString,false,false,{instance:instance});}window.dispatchEvent(event);};/* Auto initialization of one or more instances of lazyload, depending on the 
        options passed in (plain object or an array) */var autoInitialize=function autoInitialize(classObj,options){if(!options.length){// Plain object
createInstance(classObj,options);}else{// Array of objects
for(var i=0,optionsItem;optionsItem=options[i];i+=1){createInstance(classObj,optionsItem);}}};var setSourcesForPicture=function setSourcesForPicture(element,settings){var dataSrcSet=settings.data_srcset;var parent=element.parentNode;if(parent.tagName!=="PICTURE"){return;}for(var i=0,pictureChild;pictureChild=parent.children[i];i+=1){if(pictureChild.tagName==="SOURCE"){var sourceSrcset=getData(pictureChild,dataSrcSet);if(sourceSrcset){pictureChild.setAttribute("srcset",sourceSrcset);}}}};var setSources=function setSources(element,settings){var dataSrc=settings.data_src,dataSrcSet=settings.data_srcset;var tagName=element.tagName;var elementSrc=getData(element,dataSrc);if(tagName==="IMG"){setSourcesForPicture(element,settings);var imgSrcset=getData(element,dataSrcSet);if(imgSrcset){element.setAttribute("srcset",imgSrcset);}if(elementSrc){element.setAttribute("src",elementSrc);}return;}if(tagName==="IFRAME"){if(elementSrc){element.setAttribute("src",elementSrc);}return;}if(elementSrc){element.style.backgroundImage='url("'+elementSrc+'")';}};var runningOnBrowser=typeof window!=="undefined";var supportsIntersectionObserver=runningOnBrowser&&"IntersectionObserver"in window;var supportsClassList=runningOnBrowser&&"classList"in document.createElement("p");var addClass=function addClass(element,className){if(supportsClassList){element.classList.add(className);return;}element.className+=(element.className?" ":"")+className;};var removeClass=function removeClass(element,className){if(supportsClassList){element.classList.remove(className);return;}element.className=element.className.replace(new RegExp("(^|\\s+)"+className+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"");};var callCallback=function callCallback(callback,argument){if(callback){callback(argument);}};var loadString="load";var errorString="error";var removeListeners=function removeListeners(element,loadHandler,errorHandler){element.removeEventListener(loadString,loadHandler);element.removeEventListener(errorString,errorHandler);};var addOneShotListeners=function addOneShotListeners(element,settings){var onLoad=function onLoad(event){onEvent(event,true,settings);removeListeners(element,onLoad,onError);};var onError=function onError(event){onEvent(event,false,settings);removeListeners(element,onLoad,onError);};element.addEventListener(loadString,onLoad);element.addEventListener(errorString,onError);};var onEvent=function onEvent(event,success,settings){var element=event.target;removeClass(element,settings.class_loading);addClass(element,success?settings.class_loaded:settings.class_error);// Setting loaded or error class
callCallback(success?settings.callback_load:settings.callback_error,element);// Calling loaded or error callback
};var revealElement=function revealElement(element,settings){callCallback(settings.callback_enter,element);if(["IMG","IFRAME"].indexOf(element.tagName)>-1){addOneShotListeners(element,settings);addClass(element,settings.class_loading);}setSources(element,settings);setData(element,"was-processed",true);callCallback(settings.callback_set,element);};/* entry.isIntersecting needs fallback because is null on some versions of MS Edge, and
       entry.intersectionRatio is not enough alone because it could be 0 on some intersecting elements */var isIntersecting=function isIntersecting(element){return element.isIntersecting||element.intersectionRatio>0;};var LazyLoad=function LazyLoad(customSettings,elements){this._settings=getInstanceSettings(customSettings);this._setObserver();this.update(elements);};LazyLoad.prototype={_setObserver:function _setObserver(){var _this=this;if(!supportsIntersectionObserver){return;}var settings=this._settings;var observerSettings={root:settings.container===document?null:settings.container,rootMargin:settings.threshold+"px"};var revealIntersectingElements=function revealIntersectingElements(entries){entries.forEach(function(entry){if(isIntersecting(entry)){var element=entry.target;revealElement(element,_this._settings);_this._observer.unobserve(element);}});_this._elements=purgeElements(_this._elements);};this._observer=new IntersectionObserver(revealIntersectingElements,observerSettings);},update:function update(elements){var _this2=this;var settings=this._settings;var nodeSet=elements||settings.container.querySelectorAll(settings.elements_selector);this._elements=purgeElements(Array.prototype.slice.call(nodeSet));// nodeset to array for IE compatibility
if(this._observer){this._elements.forEach(function(element){_this2._observer.observe(element);});return;}// Fallback: load all elements at once
this._elements.forEach(function(element){revealElement(element,settings);});this._elements=purgeElements(this._elements);},destroy:function destroy(){var _this3=this;if(this._observer){purgeElements(this._elements).forEach(function(element){_this3._observer.unobserve(element);});this._observer=null;}this._elements=null;this._settings=null;}};/* Automatic instances creation if required (useful for async script loading!) */var autoInitOptions=window.lazyLoadOptions;if(runningOnBrowser&&autoInitOptions){autoInitialize(LazyLoad,autoInitOptions);}return LazyLoad;});!function(e,t){"object"==( false?undefined:_typeof2(exports))&&"object"==( false?undefined:_typeof2(module))?module.exports=t(): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports;}var n={};return t.m=e,t.c=n,t.p="dist/",t(0);}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);}}return e;},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function O(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y["default"])(w,j),(0,b["default"])(w,j.once),w;},S=function S(){w=(0,h["default"])(),O();},_=function _(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay");});},E=function E(e){return e===!0||"mobile"===e&&p["default"].mobile()||"phone"===e&&p["default"].phone()||"tablet"===e&&p["default"].tablet()||"function"==typeof e&&e()===!0;},z=function z(e){return j=i(j,e),w=(0,h["default"])(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0);}):document.addEventListener(j.startEvent,function(){O(!0);}),window.addEventListener("resize",(0,f["default"])(O,50,!0)),window.addEventListener("orientationchange",(0,f["default"])(O,50,!0)),window.addEventListener("scroll",(0,u["default"])(function(){(0,b["default"])(w,j.once);},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f["default"])(S,50,!0);}),(0,d["default"])("[data-aos]",S),w);};e.exports={init:z,refresh:O,refreshHard:S};},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n);}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g;}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i;}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y;}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)));}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g);}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(O());}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w);}return void 0===h&&(h=setTimeout(s,t)),g;}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m;}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a});}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t);}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e));}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d;}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e;}var c="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function O(){return h.Date.now();};e.exports=o;}).call(t,function(){return this;}());},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n);}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g;}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i;}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y;}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)));}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g);}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0;}function p(){return void 0===h?g:d(j());}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w);}return void 0===h&&(h=setTimeout(s,t)),g;}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m;}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t);}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e));}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s;}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t;}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e;}var u="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e);},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function j(){return g.Date.now();};e.exports=n;}).call(t,function(){return this;}());},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o();}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++){r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r));}}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t["default"]=n;},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");}function o(){return navigator.userAgent||navigator.vendor||window.opera||"";}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t;};}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e);}return i(e,[{key:"phone",value:function value(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)));}},{key:"mobile",value:function value(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)));}},{key:"tablet",value:function value(){return this.mobile()&&!this.phone();}}]),e;}();t["default"]=new f();},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e,t,_n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!_n&&"true"!==o)&&e.node.classList.remove("aos-animate");},o=function o(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t);});};t["default"]=o;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function a(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r["default"])(e.node,t.offset);}),e;};t["default"]=a;},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e};}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function a(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r["default"])(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i;}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o;};t["default"]=a;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);){t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;}return{top:n,left:t};};t["default"]=n;},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function n(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e});}),t;};t["default"]=n;}]);});/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */ /* global window, document, define, jQuery, setInterval, clearInterval */;(function(factory){'use strict';if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}})(function($){'use strict';var Slick=window.Slick||{};Slick=function(){var instanceUid=0;function Slick(element,settings){var _=this,dataSettings;_.defaults={accessibility:true,adaptiveHeight:false,appendArrows:$(element),appendDots:$(element),arrows:true,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:'50px',cssEase:'ease',customPaging:function customPaging(slider,i){return $('<button type="button" />').text(i+1);},dots:false,dotsClass:'slick-dots',draggable:true,easing:'linear',edgeFriction:0.35,fade:false,focusOnSelect:false,focusOnChange:false,infinite:true,initialSlide:0,lazyLoad:'ondemand',mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:'window',responsive:null,rows:1,rtl:false,slide:'',slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};_.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:false,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,swiping:false,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};$.extend(_,_.initials);_.activeBreakpoint=null;_.animType=null;_.animProp=null;_.breakpoints=[];_.breakpointSettings=[];_.cssTransitions=false;_.focussed=false;_.interrupted=false;_.hidden='hidden';_.paused=true;_.positionProp=null;_.respondTo=null;_.rowCount=1;_.shouldClick=true;_.$slider=$(element);_.$slidesCache=null;_.transformType=null;_.transitionType=null;_.visibilityChange='visibilitychange';_.windowWidth=0;_.windowTimer=null;dataSettings=$(element).data('slick')||{};_.options=$.extend({},_.defaults,settings,dataSettings);_.currentSlide=_.options.initialSlide;_.originalSettings=_.options;if(typeof document.mozHidden!=='undefined'){_.hidden='mozHidden';_.visibilityChange='mozvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){_.hidden='webkitHidden';_.visibilityChange='webkitvisibilitychange';}_.autoPlay=$.proxy(_.autoPlay,_);_.autoPlayClear=$.proxy(_.autoPlayClear,_);_.autoPlayIterator=$.proxy(_.autoPlayIterator,_);_.changeSlide=$.proxy(_.changeSlide,_);_.clickHandler=$.proxy(_.clickHandler,_);_.selectHandler=$.proxy(_.selectHandler,_);_.setPosition=$.proxy(_.setPosition,_);_.swipeHandler=$.proxy(_.swipeHandler,_);_.dragHandler=$.proxy(_.dragHandler,_);_.keyHandler=$.proxy(_.keyHandler,_);_.instanceUid=instanceUid++;// A simple way to check for HTML strings
// Strict HTML recognition (must start with <)
// Extracted from jQuery v1.11 source
_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);}return Slick;}();Slick.prototype.activateADA=function(){var _=this;_.$slideTrack.find('.slick-active').attr({'aria-hidden':'false'}).find('a, input, button, select').attr({'tabindex':'0'});};Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if(typeof index==='boolean'){addBefore=index;index=null;}else if(index<0||index>=_.slideCount){return false;}_.unload();if(typeof index==='number'){if(index===0&&_.$slides.length===0){$(markup).appendTo(_.$slideTrack);}else if(addBefore){$(markup).insertBefore(_.$slides.eq(index));}else{$(markup).insertAfter(_.$slides.eq(index));}}else{if(addBefore===true){$(markup).prependTo(_.$slideTrack);}else{$(markup).appendTo(_.$slideTrack);}}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function(index,element){$(element).attr('data-slick-index',index);});_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.animateHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({height:targetHeight},_.options.speed);}};Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight();if(_.options.rtl===true&&_.options.vertical===false){targetLeft=-targetLeft;}if(_.transformsEnabled===false){if(_.options.vertical===false){_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback);}else{_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback);}}else{if(_.cssTransitions===false){if(_.options.rtl===true){_.currentLeft=-_.currentLeft;}$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function step(now){now=Math.ceil(now);if(_.options.vertical===false){animProps[_.animType]='translate('+now+'px, 0px)';_.$slideTrack.css(animProps);}else{animProps[_.animType]='translate(0px,'+now+'px)';_.$slideTrack.css(animProps);}},complete:function complete(){if(callback){callback.call();}}});}else{_.applyTransition();targetLeft=Math.ceil(targetLeft);if(_.options.vertical===false){animProps[_.animType]='translate3d('+targetLeft+'px, 0px, 0px)';}else{animProps[_.animType]='translate3d(0px,'+targetLeft+'px, 0px)';}_.$slideTrack.css(animProps);if(callback){setTimeout(function(){_.disableTransition();callback.call();},_.options.speed);}}}};Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;if(asNavFor&&asNavFor!==null){asNavFor=$(asNavFor).not(_.$slider);}return asNavFor;};Slick.prototype.asNavFor=function(index){var _=this,asNavFor=_.getNavTarget();if(asNavFor!==null&&_typeof2(asNavFor)==='object'){asNavFor.each(function(){var target=$(this).slick('getSlick');if(!target.unslicked){target.slideHandler(index,true);}});}};Slick.prototype.applyTransition=function(slide){var _=this,transition={};if(_.options.fade===false){transition[_.transitionType]=_.transformType+' '+_.options.speed+'ms '+_.options.cssEase;}else{transition[_.transitionType]='opacity '+_.options.speed+'ms '+_.options.cssEase;}if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear();if(_.slideCount>_.options.slidesToShow){_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed);}};Slick.prototype.autoPlayClear=function(){var _=this;if(_.autoPlayTimer){clearInterval(_.autoPlayTimer);}};Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;if(!_.paused&&!_.interrupted&&!_.focussed){if(_.options.infinite===false){if(_.direction===1&&_.currentSlide+1===_.slideCount-1){_.direction=0;}else if(_.direction===0){slideTo=_.currentSlide-_.options.slidesToScroll;if(_.currentSlide-1===0){_.direction=1;}}}_.slideHandler(slideTo);}};Slick.prototype.buildArrows=function(){var _=this;if(_.options.arrows===true){_.$prevArrow=$(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow=$(_.options.nextArrow).addClass('slick-arrow');if(_.slideCount>_.options.slidesToShow){_.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.prependTo(_.options.appendArrows);}if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.appendTo(_.options.appendArrows);}if(_.options.infinite!==true){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');}}else{_.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({'aria-disabled':'true','tabindex':'-1'});}}};Slick.prototype.buildDots=function(){var _=this,i,dot;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$slider.addClass('slick-dotted');dot=$('<ul />').addClass(_.options.dotsClass);for(i=0;i<=_.getDotCount();i+=1){dot.append($('<li />').append(_.options.customPaging.call(this,_,i)));}_.$dots=dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active');}};Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+':not(.slick-cloned)').addClass('slick-slide');_.slideCount=_.$slides.length;_.$slides.each(function(index,element){$(element).attr('data-slick-index',index).data('originalStyling',$(element).attr('style')||'');});_.$slider.addClass('slick-slider');_.$slideTrack=_.slideCount===0?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list=_.$slideTrack.wrap('<div class="slick-list"/>').parent();_.$slideTrack.css('opacity',0);if(_.options.centerMode===true||_.options.swipeToSlide===true){_.options.slidesToScroll=1;}$('img[data-lazy]',_.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);if(_.options.draggable===true){_.$list.addClass('draggable');}};Slick.prototype.buildRows=function(){var _=this,a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection;newSlides=document.createDocumentFragment();originalSlides=_.$slider.children();if(_.options.rows>0){slidesPerSection=_.options.slidesPerRow*_.options.rows;numOfSlides=Math.ceil(originalSlides.length/slidesPerSection);for(a=0;a<numOfSlides;a++){var slide=document.createElement('div');for(b=0;b<_.options.rows;b++){var row=document.createElement('div');for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);if(originalSlides.get(target)){row.appendChild(originalSlides.get(target));}}slide.appendChild(row);}newSlides.appendChild(slide);}_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({'width':100/_.options.slidesPerRow+'%','display':'inline-block'});}};Slick.prototype.checkResponsive=function(initial,forceUpdate){var _=this,breakpoint,targetBreakpoint,respondToWidth,triggerBreakpoint=false;var sliderWidth=_.$slider.width();var windowWidth=window.innerWidth||$(window).width();if(_.respondTo==='window'){respondToWidth=windowWidth;}else if(_.respondTo==='slider'){respondToWidth=sliderWidth;}else if(_.respondTo==='min'){respondToWidth=Math.min(windowWidth,sliderWidth);}if(_.options.responsive&&_.options.responsive.length&&_.options.responsive!==null){targetBreakpoint=null;for(breakpoint in _.breakpoints){if(_.breakpoints.hasOwnProperty(breakpoint)){if(_.originalSettings.mobileFirst===false){if(respondToWidth<_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}else{if(respondToWidth>_.breakpoints[breakpoint]){targetBreakpoint=_.breakpoints[breakpoint];}}}}if(targetBreakpoint!==null){if(_.activeBreakpoint!==null){if(targetBreakpoint!==_.activeBreakpoint||forceUpdate){_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{_.activeBreakpoint=targetBreakpoint;if(_.breakpointSettings[targetBreakpoint]==='unslick'){_.unslick(targetBreakpoint);}else{_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]);if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);}triggerBreakpoint=targetBreakpoint;}}else{if(_.activeBreakpoint!==null){_.activeBreakpoint=null;_.options=_.originalSettings;if(initial===true){_.currentSlide=_.options.initialSlide;}_.refresh(initial);triggerBreakpoint=targetBreakpoint;}}// only trigger breakpoints during an actual break. not on initialize.
if(!initial&&triggerBreakpoint!==false){_.$slider.trigger('breakpoint',[_,triggerBreakpoint]);}}};Slick.prototype.changeSlide=function(event,dontAnimate){var _=this,$target=$(event.currentTarget),indexOffset,slideOffset,unevenOffset;// If target is a link, prevent default action.
if($target.is('a')){event.preventDefault();}// If target is not the <li> element (ie: a child), find the <li>.
if(!$target.is('li')){$target=$target.closest('li');}unevenOffset=_.slideCount%_.options.slidesToScroll!==0;indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll;switch(event.data.message){case'previous':slideOffset=indexOffset===0?_.options.slidesToScroll:_.options.slidesToShow-indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide-slideOffset,false,dontAnimate);}break;case'next':slideOffset=indexOffset===0?_.options.slidesToScroll:indexOffset;if(_.slideCount>_.options.slidesToShow){_.slideHandler(_.currentSlide+slideOffset,false,dontAnimate);}break;case'index':var index=event.data.index===0?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),false,dontAnimate);$target.children().trigger('focus');break;default:return;}};Slick.prototype.checkNavigable=function(index){var _=this,navigables,prevNavigable;navigables=_.getNavigableIndexes();prevNavigable=0;if(index>navigables[navigables.length-1]){index=navigables[navigables.length-1];}else{for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break;}prevNavigable=navigables[n];}}return index;};Slick.prototype.cleanUpEvents=function(){var _=this;if(_.options.dots&&_.$dots!==null){$('li',_.$dots).off('click.slick',_.changeSlide).off('mouseenter.slick',$.proxy(_.interrupt,_,true)).off('mouseleave.slick',$.proxy(_.interrupt,_,false));if(_.options.accessibility===true){_.$dots.off('keydown.slick',_.keyHandler);}}_.$slider.off('focus.slick blur.slick');if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow&&_.$prevArrow.off('click.slick',_.changeSlide);_.$nextArrow&&_.$nextArrow.off('click.slick',_.changeSlide);if(_.options.accessibility===true){_.$prevArrow&&_.$prevArrow.off('keydown.slick',_.keyHandler);_.$nextArrow&&_.$nextArrow.off('keydown.slick',_.keyHandler);}}_.$list.off('touchstart.slick mousedown.slick',_.swipeHandler);_.$list.off('touchmove.slick mousemove.slick',_.swipeHandler);_.$list.off('touchend.slick mouseup.slick',_.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick',_.swipeHandler);_.$list.off('click.slick',_.clickHandler);$(document).off(_.visibilityChange,_.visibility);_.cleanUpSlideEvents();if(_.options.accessibility===true){_.$list.off('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().off('click.slick',_.selectHandler);}$(window).off('orientationchange.slick.slick-'+_.instanceUid,_.orientationChange);$(window).off('resize.slick.slick-'+_.instanceUid,_.resize);$('[draggable!=true]',_.$slideTrack).off('dragstart',_.preventDefault);$(window).off('load.slick.slick-'+_.instanceUid,_.setPosition);};Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.off('mouseleave.slick',$.proxy(_.interrupt,_,false));};Slick.prototype.cleanUpRows=function(){var _=this,originalSlides;if(_.options.rows>0){originalSlides=_.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);}};Slick.prototype.clickHandler=function(event){var _=this;if(_.shouldClick===false){event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();}};Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear();_.touchObject={};_.cleanUpEvents();$('.slick-cloned',_.$slider).detach();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.$prevArrow.length){_.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}}if(_.$nextArrow&&_.$nextArrow.length){_.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display','');if(_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}}if(_.$slides){_.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function(){$(this).attr('style',$(this).data('originalStyling'));});_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);}_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked=true;if(!refresh){_.$slider.trigger('destroy',[_]);}};Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]='';if(_.options.fade===false){_.$slideTrack.css(transition);}else{_.$slides.eq(slide).css(transition);}};Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex});_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex});if(callback){setTimeout(function(){_.disableTransition(slideIndex);callback.call();},_.options.speed);}}};Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;if(_.cssTransitions===false){_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing);}else{_.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2});}};Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;if(filter!==null){_.$slidesCache=_.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.focusHandler=function(){var _=this;// If any child element receives focus within the slider we need to pause the autoplay
_.$slider.off('focus.slick blur.slick').on('focus.slick','*',function(event){var $sf=$(this);setTimeout(function(){if(_.options.pauseOnFocus){if($sf.is(':focus')){_.focussed=true;_.autoPlay();}}},0);}).on('blur.slick','*',function(event){var $sf=$(this);// When a blur occurs on any elements within the slider we become unfocused
if(_.options.pauseOnFocus){_.focussed=false;_.autoPlay();}});};Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){var _=this;return _.currentSlide;};Slick.prototype.getDotCount=function(){var _=this;var breakPoint=0;var counter=0;var pagerQty=0;if(_.options.infinite===true){if(_.slideCount<=_.options.slidesToShow){++pagerQty;}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}}else if(_.options.centerMode===true){pagerQty=_.slideCount;}else if(!_.options.asNavFor){pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);}else{while(breakPoint<_.slideCount){++pagerQty;breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}}return pagerQty-1;};Slick.prototype.getLeft=function(slideIndex){var _=this,targetLeft,verticalHeight,verticalOffset=0,targetSlide,coef;_.slideOffset=0;verticalHeight=_.$slides.first().outerHeight(true);if(_.options.infinite===true){if(_.slideCount>_.options.slidesToShow){_.slideOffset=_.slideWidth*_.options.slidesToShow*-1;coef=-1;if(_.options.vertical===true&&_.options.centerMode===true){if(_.options.slidesToShow===2){coef=-1.5;}else if(_.options.slidesToShow===1){coef=-2;}}verticalOffset=verticalHeight*_.options.slidesToShow*coef;}if(_.slideCount%_.options.slidesToScroll!==0){if(slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow){if(slideIndex>_.slideCount){_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1;verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1;}else{_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1;verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1;}}}}else{if(slideIndex+_.options.slidesToShow>_.slideCount){_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth;verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight;}}if(_.slideCount<=_.options.slidesToShow){_.slideOffset=0;verticalOffset=0;}if(_.options.centerMode===true&&_.slideCount<=_.options.slidesToShow){_.slideOffset=_.slideWidth*Math.floor(_.options.slidesToShow)/2-_.slideWidth*_.slideCount/2;}else if(_.options.centerMode===true&&_.options.infinite===true){_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth;}else if(_.options.centerMode===true){_.slideOffset=0;_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2);}if(_.options.vertical===false){targetLeft=slideIndex*_.slideWidth*-1+_.slideOffset;}else{targetLeft=slideIndex*verticalHeight*-1+verticalOffset;}if(_.options.variableWidth===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}if(_.options.centerMode===true){if(_.slideCount<=_.options.slidesToShow||_.options.infinite===false){targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex);}else{targetSlide=_.$slideTrack.children('.slick-slide').eq(slideIndex+_.options.slidesToShow+1);}if(_.options.rtl===true){if(targetSlide[0]){targetLeft=(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width())*-1;}else{targetLeft=0;}}else{targetLeft=targetSlide[0]?targetSlide[0].offsetLeft*-1:0;}targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2;}}return targetLeft;};Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){var _=this;return _.options[option];};Slick.prototype.getNavigableIndexes=function(){var _=this,breakPoint=0,counter=0,indexes=[],max;if(_.options.infinite===false){max=_.slideCount;}else{breakPoint=_.options.slidesToScroll*-1;counter=_.options.slidesToScroll*-1;max=_.slideCount*2;}while(breakPoint<max){indexes.push(breakPoint);breakPoint=counter+_.options.slidesToScroll;counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;}return indexes;};Slick.prototype.getSlick=function(){return this;};Slick.prototype.getSlideCount=function(){var _=this,slidesTraversed,swipedSlide,swipeTarget,centerOffset;centerOffset=_.options.centerMode===true?Math.floor(_.$list.width()/2):0;swipeTarget=_.swipeLeft*-1+centerOffset;if(_.options.swipeToSlide===true){_.$slideTrack.find('.slick-slide').each(function(index,slide){var slideOuterWidth,slideOffset,slideRightBoundary;slideOuterWidth=$(slide).outerWidth();slideOffset=slide.offsetLeft;if(_.options.centerMode!==true){slideOffset+=slideOuterWidth/2;}slideRightBoundary=slideOffset+slideOuterWidth;if(swipeTarget<slideRightBoundary){swipedSlide=slide;return false;}});slidesTraversed=Math.abs($(swipedSlide).attr('data-slick-index')-_.currentSlide)||1;return slidesTraversed;}else{return _.options.slidesToScroll;}};Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){var _=this;_.changeSlide({data:{message:'index',index:parseInt(slide)}},dontAnimate);};Slick.prototype.init=function(creation){var _=this;if(!$(_.$slider).hasClass('slick-initialized')){$(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();}if(creation){_.$slider.trigger('init',[_]);}if(_.options.accessibility===true){_.initADA();}if(_.options.autoplay){_.paused=false;_.autoPlay();}};Slick.prototype.initADA=function(){var _=this,numDotGroups=Math.ceil(_.slideCount/_.options.slidesToShow),tabControlIndexes=_.getNavigableIndexes().filter(function(val){return val>=0&&val<_.slideCount;});_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({'aria-hidden':'true','tabindex':'-1'}).find('a, input, button, select').attr({'tabindex':'-1'});if(_.$dots!==null){_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i){var slideControlIndex=tabControlIndexes.indexOf(i);$(this).attr({'role':'tabpanel','id':'slick-slide'+_.instanceUid+i,'tabindex':-1});if(slideControlIndex!==-1){var ariaButtonControl='slick-slide-control'+_.instanceUid+slideControlIndex;if($('#'+ariaButtonControl).length){$(this).attr({'aria-describedby':ariaButtonControl});}}});_.$dots.attr('role','tablist').find('li').each(function(i){var mappedSlideIndex=tabControlIndexes[i];$(this).attr({'role':'presentation'});$(this).find('button').first().attr({'role':'tab','id':'slick-slide-control'+_.instanceUid+i,'aria-controls':'slick-slide'+_.instanceUid+mappedSlideIndex,'aria-label':i+1+' of '+numDotGroups,'aria-selected':null,'tabindex':'-1'});}).eq(_.currentSlide).find('button').attr({'aria-selected':'true','tabindex':'0'}).end();}for(var i=_.currentSlide,max=i+_.options.slidesToShow;i<max;i++){if(_.options.focusOnChange){_.$slides.eq(i).attr({'tabindex':'0'});}else{_.$slides.eq(i).removeAttr('tabindex');}}_.activateADA();};Slick.prototype.initArrowEvents=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.off('click.slick').on('click.slick',{message:'previous'},_.changeSlide);_.$nextArrow.off('click.slick').on('click.slick',{message:'next'},_.changeSlide);if(_.options.accessibility===true){_.$prevArrow.on('keydown.slick',_.keyHandler);_.$nextArrow.on('keydown.slick',_.keyHandler);}}};Slick.prototype.initDotEvents=function(){var _=this;if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('click.slick',{message:'index'},_.changeSlide);if(_.options.accessibility===true){_.$dots.on('keydown.slick',_.keyHandler);}}if(_.options.dots===true&&_.options.pauseOnDotsHover===true&&_.slideCount>_.options.slidesToShow){$('li',_.$dots).on('mouseenter.slick',$.proxy(_.interrupt,_,true)).on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initSlideEvents=function(){var _=this;if(_.options.pauseOnHover){_.$list.on('mouseenter.slick',$.proxy(_.interrupt,_,true));_.$list.on('mouseleave.slick',$.proxy(_.interrupt,_,false));}};Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick',{action:'start'},_.swipeHandler);_.$list.on('touchmove.slick mousemove.slick',{action:'move'},_.swipeHandler);_.$list.on('touchend.slick mouseup.slick',{action:'end'},_.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick',{action:'end'},_.swipeHandler);_.$list.on('click.slick',_.clickHandler);$(document).on(_.visibilityChange,$.proxy(_.visibility,_));if(_.options.accessibility===true){_.$list.on('keydown.slick',_.keyHandler);}if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}$(window).on('orientationchange.slick.slick-'+_.instanceUid,$.proxy(_.orientationChange,_));$(window).on('resize.slick.slick-'+_.instanceUid,$.proxy(_.resize,_));$('[draggable!=true]',_.$slideTrack).on('dragstart',_.preventDefault);$(window).on('load.slick.slick-'+_.instanceUid,_.setPosition);$(_.setPosition);};Slick.prototype.initUI=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.show();_.$nextArrow.show();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.show();}};Slick.prototype.keyHandler=function(event){var _=this;//Dont slide if the cursor is inside the form fields and arrow keys are pressed
if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')){if(event.keyCode===37&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'next':'previous'}});}else if(event.keyCode===39&&_.options.accessibility===true){_.changeSlide({data:{message:_.options.rtl===true?'previous':'next'}});}}};Slick.prototype.lazyLoad=function(){var _=this,loadRange,cloneRange,rangeStart,rangeEnd;function loadImages(imagesScope){$('img[data-lazy]',imagesScope).each(function(){var image=$(this),imageSource=$(this).attr('data-lazy'),imageSrcSet=$(this).attr('data-srcset'),imageSizes=$(this).attr('data-sizes')||_.$slider.attr('data-sizes'),imageToLoad=document.createElement('img');imageToLoad.onload=function(){image.animate({opacity:0},100,function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).animate({opacity:1},200,function(){image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');});_.$slider.trigger('lazyLoaded',[_,image,imageSource]);});};imageToLoad.onerror=function(){image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);};imageToLoad.src=imageSource;});}if(_.options.centerMode===true){if(_.options.infinite===true){rangeStart=_.currentSlide+(_.options.slidesToShow/2+1);rangeEnd=rangeStart+_.options.slidesToShow+2;}else{rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1));rangeEnd=2+(_.options.slidesToShow/2+1)+_.currentSlide;}}else{rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide;rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow);if(_.options.fade===true){if(rangeStart>0)rangeStart--;if(rangeEnd<=_.slideCount)rangeEnd++;}}loadRange=_.$slider.find('.slick-slide').slice(rangeStart,rangeEnd);if(_.options.lazyLoad==='anticipated'){var prevSlide=rangeStart-1,nextSlide=rangeEnd,$slides=_.$slider.find('.slick-slide');for(var i=0;i<_.options.slidesToScroll;i++){if(prevSlide<0)prevSlide=_.slideCount-1;loadRange=loadRange.add($slides.eq(prevSlide));loadRange=loadRange.add($slides.eq(nextSlide));prevSlide--;nextSlide++;}}loadImages(loadRange);if(_.slideCount<=_.options.slidesToShow){cloneRange=_.$slider.find('.slick-slide');loadImages(cloneRange);}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow){cloneRange=_.$slider.find('.slick-cloned').slice(0,_.options.slidesToShow);loadImages(cloneRange);}else if(_.currentSlide===0){cloneRange=_.$slider.find('.slick-cloned').slice(_.options.slidesToShow*-1);loadImages(cloneRange);}};Slick.prototype.loadSlider=function(){var _=this;_.setPosition();_.$slideTrack.css({opacity:1});_.$slider.removeClass('slick-loading');_.initUI();if(_.options.lazyLoad==='progressive'){_.progressiveLazyLoad();}};Slick.prototype.next=Slick.prototype.slickNext=function(){var _=this;_.changeSlide({data:{message:'next'}});};Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive();_.setPosition();};Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear();_.paused=true;};Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay();_.options.autoplay=true;_.paused=false;_.focussed=false;_.interrupted=false;};Slick.prototype.postSlide=function(index){var _=this;if(!_.unslicked){_.$slider.trigger('afterChange',[_,index]);_.animating=false;if(_.slideCount>_.options.slidesToShow){_.setPosition();}_.swipeLeft=null;if(_.options.autoplay){_.autoPlay();}if(_.options.accessibility===true){_.initADA();if(_.options.focusOnChange){var $currentSlide=$(_.$slides.get(_.currentSlide));$currentSlide.attr('tabindex',0).focus();}}}};Slick.prototype.prev=Slick.prototype.slickPrev=function(){var _=this;_.changeSlide({data:{message:'previous'}});};Slick.prototype.preventDefault=function(event){event.preventDefault();};Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var _=this,$imgsToLoad=$('img[data-lazy]',_.$slider),image,imageSource,imageSrcSet,imageSizes,imageToLoad;if($imgsToLoad.length){image=$imgsToLoad.first();imageSource=image.attr('data-lazy');imageSrcSet=image.attr('data-srcset');imageSizes=image.attr('data-sizes')||_.$slider.attr('data-sizes');imageToLoad=document.createElement('img');imageToLoad.onload=function(){if(imageSrcSet){image.attr('srcset',imageSrcSet);if(imageSizes){image.attr('sizes',imageSizes);}}image.attr('src',imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');if(_.options.adaptiveHeight===true){_.setPosition();}_.$slider.trigger('lazyLoaded',[_,image,imageSource]);_.progressiveLazyLoad();};imageToLoad.onerror=function(){if(tryCount<3){/**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */setTimeout(function(){_.progressiveLazyLoad(tryCount+1);},500);}else{image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError',[_,image,imageSource]);_.progressiveLazyLoad();}};imageToLoad.src=imageSource;}else{_.$slider.trigger('allImagesLoaded',[_]);}};Slick.prototype.refresh=function(initializing){var _=this,currentSlide,lastVisibleIndex;lastVisibleIndex=_.slideCount-_.options.slidesToShow;// in non-infinite sliders, we don't want to go past the
// last visible index.
if(!_.options.infinite&&_.currentSlide>lastVisibleIndex){_.currentSlide=lastVisibleIndex;}// if less slides than to show, go to start.
if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}currentSlide=_.currentSlide;_.destroy(true);$.extend(_,_.initials,{currentSlide:currentSlide});_.init();if(!initializing){_.changeSlide({data:{message:'index',index:currentSlide}},false);}};Slick.prototype.registerBreakpoints=function(){var _=this,breakpoint,currentBreakpoint,l,responsiveSettings=_.options.responsive||null;if($.type(responsiveSettings)==='array'&&responsiveSettings.length){_.respondTo=_.options.respondTo||'window';for(breakpoint in responsiveSettings){l=_.breakpoints.length-1;if(responsiveSettings.hasOwnProperty(breakpoint)){currentBreakpoint=responsiveSettings[breakpoint].breakpoint;// loop through the breakpoints and cut out any existing
// ones with the same breakpoint number, we don't want dupes.
while(l>=0){if(_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint){_.breakpoints.splice(l,1);}l--;}_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings;}}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a;});}};Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount=_.$slides.length;if(_.currentSlide>=_.slideCount&&_.currentSlide!==0){_.currentSlide=_.currentSlide-_.options.slidesToScroll;}if(_.slideCount<=_.options.slidesToShow){_.currentSlide=0;}_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false,true);if(_.options.focusOnSelect===true){$(_.$slideTrack).children().on('click.slick',_.selectHandler);}_.setSlideClasses(typeof _.currentSlide==='number'?_.currentSlide:0);_.setPosition();_.focusHandler();_.paused=!_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit',[_]);};Slick.prototype.resize=function(){var _=this;if($(window).width()!==_.windowWidth){clearTimeout(_.windowDelay);_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width();_.checkResponsive();if(!_.unslicked){_.setPosition();}},50);}};Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(typeof index==='boolean'){removeBefore=index;index=removeBefore===true?0:_.slideCount-1;}else{index=removeBefore===true?--index:index;}if(_.slideCount<1||index<0||index>_.slideCount-1){return false;}_.unload();if(removeAll===true){_.$slideTrack.children().remove();}else{_.$slideTrack.children(this.options.slide).eq(index).remove();}_.$slides=_.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache=_.$slides;_.reinit();};Slick.prototype.setCSS=function(position){var _=this,positionProps={},x,y;if(_.options.rtl===true){position=-position;}x=_.positionProp=='left'?Math.ceil(position)+'px':'0px';y=_.positionProp=='top'?Math.ceil(position)+'px':'0px';positionProps[_.positionProp]=position;if(_.transformsEnabled===false){_.$slideTrack.css(positionProps);}else{positionProps={};if(_.cssTransitions===false){positionProps[_.animType]='translate('+x+', '+y+')';_.$slideTrack.css(positionProps);}else{positionProps[_.animType]='translate3d('+x+', '+y+', 0px)';_.$slideTrack.css(positionProps);}}};Slick.prototype.setDimensions=function(){var _=this;if(_.options.vertical===false){if(_.options.centerMode===true){_.$list.css({padding:'0px '+_.options.centerPadding});}}else{_.$list.height(_.$slides.first().outerHeight(true)*_.options.slidesToShow);if(_.options.centerMode===true){_.$list.css({padding:_.options.centerPadding+' 0px'});}}_.listWidth=_.$list.width();_.listHeight=_.$list.height();if(_.options.vertical===false&&_.options.variableWidth===false){_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children('.slick-slide').length));}else if(_.options.variableWidth===true){_.$slideTrack.width(5000*_.slideCount);}else{_.slideWidth=Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true)*_.$slideTrack.children('.slick-slide').length));}var offset=_.$slides.first().outerWidth(true)-_.$slides.first().width();if(_.options.variableWidth===false)_.$slideTrack.children('.slick-slide').width(_.slideWidth-offset);};Slick.prototype.setFade=function(){var _=this,targetLeft;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1;if(_.options.rtl===true){$(element).css({position:'relative',right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}else{$(element).css({position:'relative',left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0});}});_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1});};Slick.prototype.setHeight=function(){var _=this;if(_.options.slidesToShow===1&&_.options.adaptiveHeight===true&&_.options.vertical===false){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height',targetHeight);}};Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){/**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */var _=this,l,item,option,value,refresh=false,type;if($.type(arguments[0])==='object'){option=arguments[0];refresh=arguments[1];type='multiple';}else if($.type(arguments[0])==='string'){option=arguments[0];value=arguments[1];refresh=arguments[2];if(arguments[0]==='responsive'&&$.type(arguments[1])==='array'){type='responsive';}else if(typeof arguments[1]!=='undefined'){type='single';}}if(type==='single'){_.options[option]=value;}else if(type==='multiple'){$.each(option,function(opt,val){_.options[opt]=val;});}else if(type==='responsive'){for(item in value){if($.type(_.options.responsive)!=='array'){_.options.responsive=[value[item]];}else{l=_.options.responsive.length-1;// loop through the responsive object and splice out duplicates.
while(l>=0){if(_.options.responsive[l].breakpoint===value[item].breakpoint){_.options.responsive.splice(l,1);}l--;}_.options.responsive.push(value[item]);}}}if(refresh){_.unload();_.reinit();}};Slick.prototype.setPosition=function(){var _=this;_.setDimensions();_.setHeight();if(_.options.fade===false){_.setCSS(_.getLeft(_.currentSlide));}else{_.setFade();}_.$slider.trigger('setPosition',[_]);};Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=_.options.vertical===true?'top':'left';if(_.positionProp==='top'){_.$slider.addClass('slick-vertical');}else{_.$slider.removeClass('slick-vertical');}if(bodyStyle.WebkitTransition!==undefined||bodyStyle.MozTransition!==undefined||bodyStyle.msTransition!==undefined){if(_.options.useCSS===true){_.cssTransitions=true;}}if(_.options.fade){if(typeof _.options.zIndex==='number'){if(_.options.zIndex<3){_.options.zIndex=3;}}else{_.options.zIndex=_.defaults.zIndex;}}if(bodyStyle.OTransform!==undefined){_.animType='OTransform';_.transformType='-o-transform';_.transitionType='OTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.MozTransform!==undefined){_.animType='MozTransform';_.transformType='-moz-transform';_.transitionType='MozTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.MozPerspective===undefined)_.animType=false;}if(bodyStyle.webkitTransform!==undefined){_.animType='webkitTransform';_.transformType='-webkit-transform';_.transitionType='webkitTransition';if(bodyStyle.perspectiveProperty===undefined&&bodyStyle.webkitPerspective===undefined)_.animType=false;}if(bodyStyle.msTransform!==undefined){_.animType='msTransform';_.transformType='-ms-transform';_.transitionType='msTransition';if(bodyStyle.msTransform===undefined)_.animType=false;}if(bodyStyle.transform!==undefined&&_.animType!==false){_.animType='transform';_.transformType='transform';_.transitionType='transition';}_.transformsEnabled=_.options.useTransform&&_.animType!==null&&_.animType!==false;};Slick.prototype.setSlideClasses=function(index){var _=this,centerOffset,allSlides,indexOffset,remainder;allSlides=_.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden','true');_.$slides.eq(index).addClass('slick-current');if(_.options.centerMode===true){var evenCoef=_.options.slidesToShow%2===0?1:0;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.infinite===true){if(index>=centerOffset&&index<=_.slideCount-1-centerOffset){_.$slides.slice(index-centerOffset+evenCoef,index+centerOffset+1).addClass('slick-active').attr('aria-hidden','false');}else{indexOffset=_.options.slidesToShow+index;allSlides.slice(indexOffset-centerOffset+1+evenCoef,indexOffset+centerOffset+2).addClass('slick-active').attr('aria-hidden','false');}if(index===0){allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass('slick-center');}else if(index===_.slideCount-1){allSlides.eq(_.options.slidesToShow).addClass('slick-center');}}_.$slides.eq(index).addClass('slick-center');}else{if(index>=0&&index<=_.slideCount-_.options.slidesToShow){_.$slides.slice(index,index+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}else if(allSlides.length<=_.options.slidesToShow){allSlides.addClass('slick-active').attr('aria-hidden','false');}else{remainder=_.slideCount%_.options.slidesToShow;indexOffset=_.options.infinite===true?_.options.slidesToShow+index:index;if(_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow){allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass('slick-active').attr('aria-hidden','false');}else{allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass('slick-active').attr('aria-hidden','false');}}}if(_.options.lazyLoad==='ondemand'||_.options.lazyLoad==='anticipated'){_.lazyLoad();}};Slick.prototype.setupInfinite=function(){var _=this,i,slideIndex,infiniteCount;if(_.options.fade===true){_.options.centerMode=false;}if(_.options.infinite===true&&_.options.fade===false){slideIndex=null;if(_.slideCount>_.options.slidesToShow){if(_.options.centerMode===true){infiniteCount=_.options.slidesToShow+1;}else{infiniteCount=_.options.slidesToShow;}for(i=_.slideCount;i>_.slideCount-infiniteCount;i-=1){slideIndex=i-1;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');}for(i=0;i<infiniteCount+_.slideCount;i+=1){slideIndex=i;$(_.$slides[slideIndex]).clone(true).attr('id','').attr('data-slick-index',slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');}_.$slideTrack.find('.slick-cloned').find('[id]').each(function(){$(this).attr('id','');});}}};Slick.prototype.interrupt=function(toggle){var _=this;if(!toggle){_.autoPlay();}_.interrupted=toggle;};Slick.prototype.selectHandler=function(event){var _=this;var targetElement=$(event.target).is('.slick-slide')?$(event.target):$(event.target).parents('.slick-slide');var index=parseInt(targetElement.attr('data-slick-index'));if(!index)index=0;if(_.slideCount<=_.options.slidesToShow){_.slideHandler(index,false,true);return;}_.slideHandler(index);};Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,targetLeft=null,_=this,navTarget;sync=sync||false;if(_.animating===true&&_.options.waitForAnimate===true){return;}if(_.options.fade===true&&_.currentSlide===index){return;}if(sync===false){_.asNavFor(index);}targetSlide=index;targetLeft=_.getLeft(targetSlide);slideLeft=_.getLeft(_.currentSlide);_.currentLeft=_.swipeLeft===null?slideLeft:_.swipeLeft;if(_.options.infinite===false&&_.options.centerMode===false&&(index<0||index>_.getDotCount()*_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}else if(_.options.infinite===false&&_.options.centerMode===true&&(index<0||index>_.slideCount-_.options.slidesToScroll)){if(_.options.fade===false){targetSlide=_.currentSlide;if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(slideLeft,function(){_.postSlide(targetSlide);});}else{_.postSlide(targetSlide);}}return;}if(_.options.autoplay){clearInterval(_.autoPlayTimer);}if(targetSlide<0){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=_.slideCount-_.slideCount%_.options.slidesToScroll;}else{animSlide=_.slideCount+targetSlide;}}else if(targetSlide>=_.slideCount){if(_.slideCount%_.options.slidesToScroll!==0){animSlide=0;}else{animSlide=targetSlide-_.slideCount;}}else{animSlide=targetSlide;}_.animating=true;_.$slider.trigger('beforeChange',[_,_.currentSlide,animSlide]);oldSlide=_.currentSlide;_.currentSlide=animSlide;_.setSlideClasses(_.currentSlide);if(_.options.asNavFor){navTarget=_.getNavTarget();navTarget=navTarget.slick('getSlick');if(navTarget.slideCount<=navTarget.options.slidesToShow){navTarget.setSlideClasses(_.currentSlide);}}_.updateDots();_.updateArrows();if(_.options.fade===true){if(dontAnimate!==true){_.fadeSlideOut(oldSlide);_.fadeSlide(animSlide,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}_.animateHeight();return;}if(dontAnimate!==true&&_.slideCount>_.options.slidesToShow){_.animateSlide(targetLeft,function(){_.postSlide(animSlide);});}else{_.postSlide(animSlide);}};Slick.prototype.startLoad=function(){var _=this;if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow){_.$prevArrow.hide();_.$nextArrow.hide();}if(_.options.dots===true&&_.slideCount>_.options.slidesToShow){_.$dots.hide();}_.$slider.addClass('slick-loading');};Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;xDist=_.touchObject.startX-_.touchObject.curX;yDist=_.touchObject.startY-_.touchObject.curY;r=Math.atan2(yDist,xDist);swipeAngle=Math.round(r*180/Math.PI);if(swipeAngle<0){swipeAngle=360-Math.abs(swipeAngle);}if(swipeAngle<=45&&swipeAngle>=0){return _.options.rtl===false?'left':'right';}if(swipeAngle<=360&&swipeAngle>=315){return _.options.rtl===false?'left':'right';}if(swipeAngle>=135&&swipeAngle<=225){return _.options.rtl===false?'right':'left';}if(_.options.verticalSwiping===true){if(swipeAngle>=35&&swipeAngle<=135){return'down';}else{return'up';}}return'vertical';};Slick.prototype.swipeEnd=function(event){var _=this,slideCount,direction;_.dragging=false;_.swiping=false;if(_.scrolling){_.scrolling=false;return false;}_.interrupted=false;_.shouldClick=_.touchObject.swipeLength>10?false:true;if(_.touchObject.curX===undefined){return false;}if(_.touchObject.edgeHit===true){_.$slider.trigger('edge',[_,_.swipeDirection()]);}if(_.touchObject.swipeLength>=_.touchObject.minSwipe){direction=_.swipeDirection();switch(direction){case'left':case'down':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount();_.currentDirection=0;break;case'right':case'up':slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount();_.currentDirection=1;break;default:}if(direction!='vertical'){_.slideHandler(slideCount);_.touchObject={};_.$slider.trigger('swipe',[_,direction]);}}else{if(_.touchObject.startX!==_.touchObject.curX){_.slideHandler(_.currentSlide);_.touchObject={};}}};Slick.prototype.swipeHandler=function(event){var _=this;if(_.options.swipe===false||'ontouchend'in document&&_.options.swipe===false){return;}else if(_.options.draggable===false&&event.type.indexOf('mouse')!==-1){return;}_.touchObject.fingerCount=event.originalEvent&&event.originalEvent.touches!==undefined?event.originalEvent.touches.length:1;_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold;if(_.options.verticalSwiping===true){_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold;}switch(event.data.action){case'start':_.swipeStart(event);break;case'move':_.swipeMove(event);break;case'end':_.swipeEnd(event);break;}};Slick.prototype.swipeMove=function(event){var _=this,edgeWasHit=false,curLeft,swipeDirection,swipeLength,positionOffset,touches,verticalSwipeLength;touches=event.originalEvent!==undefined?event.originalEvent.touches:null;if(!_.dragging||_.scrolling||touches&&touches.length!==1){return false;}curLeft=_.getLeft(_.currentSlide);_.touchObject.curX=touches!==undefined?touches[0].pageX:event.clientX;_.touchObject.curY=touches!==undefined?touches[0].pageY:event.clientY;_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2)));verticalSwipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)));if(!_.options.verticalSwiping&&!_.swiping&&verticalSwipeLength>4){_.scrolling=true;return false;}if(_.options.verticalSwiping===true){_.touchObject.swipeLength=verticalSwipeLength;}swipeDirection=_.swipeDirection();if(event.originalEvent!==undefined&&_.touchObject.swipeLength>4){_.swiping=true;event.preventDefault();}positionOffset=(_.options.rtl===false?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1);if(_.options.verticalSwiping===true){positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1;}swipeLength=_.touchObject.swipeLength;_.touchObject.edgeHit=false;if(_.options.infinite===false){if(_.currentSlide===0&&swipeDirection==='right'||_.currentSlide>=_.getDotCount()&&swipeDirection==='left'){swipeLength=_.touchObject.swipeLength*_.options.edgeFriction;_.touchObject.edgeHit=true;}}if(_.options.vertical===false){_.swipeLeft=curLeft+swipeLength*positionOffset;}else{_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset;}if(_.options.verticalSwiping===true){_.swipeLeft=curLeft+swipeLength*positionOffset;}if(_.options.fade===true||_.options.touchMove===false){return false;}if(_.animating===true){_.swipeLeft=null;return false;}_.setCSS(_.swipeLeft);};Slick.prototype.swipeStart=function(event){var _=this,touches;_.interrupted=true;if(_.touchObject.fingerCount!==1||_.slideCount<=_.options.slidesToShow){_.touchObject={};return false;}if(event.originalEvent!==undefined&&event.originalEvent.touches!==undefined){touches=event.originalEvent.touches[0];}_.touchObject.startX=_.touchObject.curX=touches!==undefined?touches.pageX:event.clientX;_.touchObject.startY=_.touchObject.curY=touches!==undefined?touches.pageY:event.clientY;_.dragging=true;};Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;if(_.$slidesCache!==null){_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();}};Slick.prototype.unload=function(){var _=this;$('.slick-cloned',_.$slider).remove();if(_.$dots){_.$dots.remove();}if(_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)){_.$prevArrow.remove();}if(_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)){_.$nextArrow.remove();}_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden','true').css('width','');};Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger('unslick',[_,fromBreakpoint]);_.destroy();};Slick.prototype.updateArrows=function(){var _=this,centerOffset;centerOffset=Math.floor(_.options.slidesToShow/2);if(_.options.arrows===true&&_.slideCount>_.options.slidesToShow&&!_.options.infinite){_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');if(_.currentSlide===0){_.$prevArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-_.options.slidesToShow&&_.options.centerMode===false){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}else if(_.currentSlide>=_.slideCount-1&&_.options.centerMode===true){_.$nextArrow.addClass('slick-disabled').attr('aria-disabled','true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled','false');}}};Slick.prototype.updateDots=function(){var _=this;if(_.$dots!==null){_.$dots.find('li').removeClass('slick-active').end();_.$dots.find('li').eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass('slick-active');}};Slick.prototype.visibility=function(){var _=this;if(_.options.autoplay){if(document[_.hidden]){_.interrupted=true;}else{_.interrupted=false;}}};$.fn.slick=function(){var _=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length,i,ret;for(i=0;i<l;i++){if(_typeof2(opt)=='object'||typeof opt=='undefined')_[i].slick=new Slick(_[i],opt);else ret=_[i].slick[opt].apply(_[i].slick,args);if(typeof ret!='undefined')return ret;}return _;};});/* https://github.com/mhuggins/jquery-countTo
   CountTo */(function(factory){if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}})(function($){var CountTo=function CountTo(element,options){this.$element=$(element);this.options=$.extend({},CountTo.DEFAULTS,this.dataOptions(),options);this.init();};CountTo.DEFAULTS={from:0,// the number the element should start at
to:0,// the number the element should end at
speed:1000,// how long it should take to count between the target numbers
refreshInterval:100,// how often the element should be updated
decimals:0,// the number of decimal places to show
formatter:formatter,// handler for formatting the value before rendering
onUpdate:null,// callback method for every time the element is updated
onComplete:null// callback method for when the element finishes updating
};CountTo.prototype.init=function(){this.value=this.options.from;this.loops=Math.ceil(this.options.speed/this.options.refreshInterval);this.loopCount=0;this.increment=(this.options.to-this.options.from)/this.loops;};CountTo.prototype.dataOptions=function(){var options={from:this.$element.data('from'),to:this.$element.data('to'),speed:this.$element.data('speed'),refreshInterval:this.$element.data('refresh-interval'),decimals:this.$element.data('decimals')};var keys=Object.keys(options);for(var i in keys){var key=keys[i];if(typeof options[key]==='undefined'){delete options[key];}}return options;};CountTo.prototype.update=function(){this.value+=this.increment;this.loopCount++;this.render();if(typeof this.options.onUpdate=='function'){this.options.onUpdate.call(this.$element,this.value);}if(this.loopCount>=this.loops){clearInterval(this.interval);this.value=this.options.to;if(typeof this.options.onComplete=='function'){this.options.onComplete.call(this.$element,this.value);}}};CountTo.prototype.render=function(){var formattedValue=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(formattedValue);};CountTo.prototype.restart=function(){this.stop();this.init();this.start();};CountTo.prototype.start=function(){this.stop();this.render();this.interval=setInterval(this.update.bind(this),this.options.refreshInterval);};CountTo.prototype.stop=function(){if(this.interval){clearInterval(this.interval);}};CountTo.prototype.toggle=function(){if(this.interval){this.stop();}else{this.start();}};function formatter(value,options){return value.toFixed(options.decimals);}$.fn.countTo=function(option){return this.each(function(){var $this=$(this);var data=$this.data('countTo');var init=!data||_typeof2(option)==='object';var options=_typeof2(option)==='object'?option:{};var method=typeof option==='string'?option:'start';if(init){if(data)data.stop();$this.data('countTo',data=new CountTo(this,options));}data[method].call(data);});};});/*!
 * Masonry PACKAGED v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */ /**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /* globals define, module, require */if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(jQuery){return factory(window,jQuery);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}})(window,function factory(window,jQuery){'use strict';// ----- utils ----- //
var arraySlice=Array.prototype.slice;// helper function for logging errors
// $.error breaks jQuery chaining
var console=window.console;var logError=typeof console=='undefined'?function(){}:function(message){console.error(message);};// ----- jQueryBridget ----- //
function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return;}// add option method -> $().plugin('option', {...})
if(!PluginClass.prototype.option){// option setter
PluginClass.prototype.option=function(opts){// bail out if not an object
if(!$.isPlainObject(opts)){return;}this.options=$.extend(true,this.options,opts);};}// make jQuery plugin
$.fn[namespace]=function(arg0/*, arg1 */){if(typeof arg0=='string'){// method call $().plugin( 'methodName', { options } )
// shift arguments by 1
var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args);}// just $().plugin({ options })
plainCall(this,arg0);return this;};// $().plugin('methodName')
function methodCall($elems,methodName,args){var returnValue;var pluginMethodStr='$().'+namespace+'("'+methodName+'")';$elems.each(function(i,elem){// get instance
var instance=$.data(elem,namespace);if(!instance){logError(namespace+' not initialized. Cannot call methods, i.e. '+pluginMethodStr);return;}var method=instance[methodName];if(!method||methodName.charAt(0)=='_'){logError(pluginMethodStr+' is not a valid method');return;}// apply method, get return value
var value=method.apply(instance,args);// set return value if value is returned, use only first value
returnValue=returnValue===undefined?value:returnValue;});return returnValue!==undefined?returnValue:$elems;}function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){// set options & init
instance.option(options);instance._init();}else{// initialize new instance
instance=new PluginClass(elem,options);$.data(elem,namespace,instance);}});}updateJQuery($);}// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function updateJQuery($){if(!$||$&&$.bridget){return;}$.bridget=jQueryBridget;}updateJQuery(jQuery||window.jQuery);// -----  ----- //
return jQueryBridget;});/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */(function(global,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, window */if(true){// AMD - RequireJS
!(__WEBPACK_LOCAL_MODULE_1__factory = (factory), (__WEBPACK_LOCAL_MODULE_1__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_1__ = (typeof __WEBPACK_LOCAL_MODULE_1__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_1__factory.call(__WEBPACK_LOCAL_MODULE_1__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_1__module.exports, __WEBPACK_LOCAL_MODULE_1__module)) : __WEBPACK_LOCAL_MODULE_1__factory), (__WEBPACK_LOCAL_MODULE_1__module.loaded = true), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__module.exports));}else {}})(typeof window!='undefined'?window:this,function(){function EvEmitter(){}var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return;}// set events hash
var events=this._events=this._events||{};// set listeners array
var listeners=events[eventName]=events[eventName]||[];// only add once
if(listeners.indexOf(listener)==-1){listeners.push(listener);}return this;};proto.once=function(eventName,listener){if(!eventName||!listener){return;}// add event
this.on(eventName,listener);// set once flag
// set onceEvents hash
var onceEvents=this._onceEvents=this._onceEvents||{};// set onceListeners object
var onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};// set flag
onceListeners[listener]=true;return this;};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}var index=listeners.indexOf(listener);if(index!=-1){listeners.splice(index,1);}return this;};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return;}// copy over to avoid interference if .off() in listener
listeners=listeners.slice(0);args=args||[];// once stuff
var onceListeners=this._onceEvents&&this._onceEvents[eventName];for(var i=0;i<listeners.length;i++){var listener=listeners[i];var isOnce=onceListeners&&onceListeners[listener];if(isOnce){// remove listener
// remove before trigger to prevent recursion
this.off(eventName,listener);// unset once flag
delete onceListeners[listener];}// trigger listener
listener.apply(this,args);}return this;};proto.allOff=function(){delete this._events;delete this._onceEvents;};return EvEmitter;});/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ /*global define: false, module: false, console: false */(function(window,factory){'use strict';if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_2__ = ((function(){return factory();}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));}else {}})(window,function factory(){'use strict';// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function getStyleSize(value){var num=parseFloat(value);// not a percent like '100%', and a number
var isValid=value.indexOf('%')==-1&&!isNaN(num);return isValid&&num;}function noop(){}var logError=typeof console=='undefined'?noop:function(message){console.error(message);};// -------------------------- measurements -------------------------- //
var measurements=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'];var measurementsLength=measurements.length;function getZeroSize(){var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];size[measurement]=0;}return size;}// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError('Style returned '+style+'. Are you running this code in a hidden iframe on Firefox? '+'See http://bit.ly/getsizebug1');}return style;}// -------------------------- setup -------------------------- //
var isSetup=false;var isBoxSizeOuter;/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */function setup(){// setup once
if(isSetup){return;}isSetup=true;// -------------------------- box sizing -------------------------- //
/**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */var div=document.createElement('div');div.style.width='200px';div.style.padding='1px 2px 3px 4px';div.style.borderStyle='solid';div.style.borderWidth='1px 2px 3px 4px';div.style.boxSizing='border-box';var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);getSize.isBoxSizeOuter=isBoxSizeOuter=getStyleSize(style.width)==200;body.removeChild(div);}// -------------------------- getSize -------------------------- //
function getSize(elem){setup();// use querySeletor if elem is string
if(typeof elem=='string'){elem=document.querySelector(elem);}// do not proceed on non-objects
if(!elem||_typeof2(elem)!='object'||!elem.nodeType){return;}var style=getStyle(elem);// if hidden, everything is 0
if(style.display=='none'){return getZeroSize();}var size={};size.width=elem.offsetWidth;size.height=elem.offsetHeight;var isBorderBox=size.isBorderBox=style.boxSizing=='border-box';// get all measurements
for(var i=0;i<measurementsLength;i++){var measurement=measurements[i];var value=style[measurement];var num=parseFloat(value);// any 'auto', 'medium' value will be 0
size[measurement]=!isNaN(num)?num:0;}var paddingWidth=size.paddingLeft+size.paddingRight;var paddingHeight=size.paddingTop+size.paddingBottom;var marginWidth=size.marginLeft+size.marginRight;var marginHeight=size.marginTop+size.marginBottom;var borderWidth=size.borderLeftWidth+size.borderRightWidth;var borderHeight=size.borderTopWidth+size.borderBottomWidth;var isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter;// overwrite width and height if we can get it from style
var styleWidth=getStyleSize(style.width);if(styleWidth!==false){size.width=styleWidth+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingWidth+borderWidth);}var styleHeight=getStyleSize(style.height);if(styleHeight!==false){size.height=styleHeight+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingHeight+borderHeight);}size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size;}return getSize;});/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){/*global define: false, module: false */'use strict';// universal module definition
if(true){// AMD
!(__WEBPACK_LOCAL_MODULE_3__factory = (factory), (__WEBPACK_LOCAL_MODULE_3__module = { id: "desandro-matches-selector/matches-selector", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_3__ = (typeof __WEBPACK_LOCAL_MODULE_3__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_3__factory.call(__WEBPACK_LOCAL_MODULE_3__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_3__module.exports, __WEBPACK_LOCAL_MODULE_3__module)) : __WEBPACK_LOCAL_MODULE_3__factory), (__WEBPACK_LOCAL_MODULE_3__module.loaded = true), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__module.exports));}else {}})(window,function factory(){'use strict';var matchesMethod=function(){var ElemProto=window.Element.prototype;// check for the standard method name first
if(ElemProto.matches){return'matches';}// check un-prefixed
if(ElemProto.matchesSelector){return'matchesSelector';}// check vendor prefixes
var prefixes=['webkit','moz','ms','o'];for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var method=prefix+'MatchesSelector';if(ElemProto[method]){return method;}}}();return function matchesSelector(elem,selector){return elem[matchesMethod](selector);};});/**
 * Fizzy UI utils v2.0.5
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /*globals define, module, require */if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = ((function(matchesSelector){return factory(window,matchesSelector);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));}else {}})(window,function factory(window,matchesSelector){var utils={};// ----- extend ----- //
// extends objects
utils.extend=function(a,b){for(var prop in b){a[prop]=b[prop];}return a;};// ----- modulo ----- //
utils.modulo=function(num,div){return(num%div+div)%div;};// ----- makeArray ----- //
// turn element or nodeList into an array
utils.makeArray=function(obj){var ary=[];if(Array.isArray(obj)){// use object if already an array
ary=obj;}else if(obj&&_typeof2(obj)=='object'&&typeof obj.length=='number'){// convert nodeList to array
for(var i=0;i<obj.length;i++){ary.push(obj[i]);}}else{// array of single index
ary.push(obj);}return ary;};// ----- removeFrom ----- //
utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(index!=-1){ary.splice(index,1);}};// ----- getParent ----- //
utils.getParent=function(elem,selector){while(elem.parentNode&&elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem;}}};// ----- getQueryElement ----- //
// use element as selector string
utils.getQueryElement=function(elem){if(typeof elem=='string'){return document.querySelector(elem);}return elem;};// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};// ----- filterFindElements ----- //
utils.filterFindElements=function(elems,selector){// make array of elems
elems=utils.makeArray(elems);var ffElems=[];elems.forEach(function(elem){// check that elem is an actual element
if(!(elem instanceof HTMLElement)){return;}// add elem if no selector
if(!selector){ffElems.push(elem);return;}// filter & find items if we have a selector
// filter
if(matchesSelector(elem,selector)){ffElems.push(elem);}// find children
var childElems=elem.querySelectorAll(selector);// concat childElems to filterFound array
for(var i=0;i<childElems.length;i++){ffElems.push(childElems[i]);}});return ffElems;};// ----- debounceMethod ----- //
utils.debounceMethod=function(_class,methodName,threshold){// original method
var method=_class.prototype[methodName];var timeoutName=methodName+'Timeout';_class.prototype[methodName]=function(){var timeout=this[timeoutName];if(timeout){clearTimeout(timeout);}var args=arguments;var _this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName];},threshold||100);};};// ----- docReady ----- //
utils.docReady=function(callback){var readyState=document.readyState;if(readyState=='complete'||readyState=='interactive'){// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(callback);}else{document.addEventListener('DOMContentLoaded',callback);}};// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+'-'+$2;}).toLowerCase();};var console=window.console;/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace);var dataAttr='data-'+dashedNamespace;var dataAttrElems=document.querySelectorAll('['+dataAttr+']');var jsDashElems=document.querySelectorAll('.js-'+dashedNamespace);var elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));var dataOptionsAttr=dataAttr+'-options';var jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr);var options;try{options=attr&&JSON.parse(attr);}catch(error){// log error, do not initialize
if(console){console.error('Error parsing '+dataAttr+' on '+elem.className+': '+error);}return;}// initialize
var instance=new WidgetClass(elem,options);// make available via $().data('namespace')
if(jQuery){jQuery.data(elem,namespace,instance);}});});};// -----  ----- //
return utils;});/**
 * Outlayer Item
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, require */if(true){// AMD - RequireJS
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_LOCAL_MODULE_5__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__));}else {}})(window,function factory(EvEmitter,getSize){'use strict';// ----- helpers ----- //
function isEmptyObj(obj){for(var prop in obj){return false;}prop=null;return true;}// -------------------------- CSS3 support -------------------------- //
var docElemStyle=document.documentElement.style;var transitionProperty=typeof docElemStyle.transition=='string'?'transition':'WebkitTransition';var transformProperty=typeof docElemStyle.transform=='string'?'transform':'WebkitTransform';var transitionEndEvent={WebkitTransition:'webkitTransitionEnd',transition:'transitionend'}[transitionProperty];// cache all vendor properties that could have vendor prefix
var vendorProperties={transform:transformProperty,transition:transitionProperty,transitionDuration:transitionProperty+'Duration',transitionProperty:transitionProperty+'Property',transitionDelay:transitionProperty+'Delay'};// -------------------------- Item -------------------------- //
function Item(element,layout){if(!element){return;}this.element=element;// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=layout;this.position={x:0,y:0};this._create();}// inherit EvEmitter
var proto=Item.prototype=Object.create(EvEmitter.prototype);proto.constructor=Item;proto._create=function(){// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:'absolute'});};// trigger specified handler for event type
proto.handleEvent=function(event){var method='on'+event.type;if(this[method]){this[method](event);}};proto.getSize=function(){this.size=getSize(this.element);};/**
 * apply CSS styles to element
 * @param {Object} style
 */proto.css=function(style){var elemStyle=this.element.style;for(var prop in style){// use vendor property if available
var supportedProp=vendorProperties[prop]||prop;elemStyle[supportedProp]=style[prop];}};// measure position, and sets it
proto.getPosition=function(){var style=getComputedStyle(this.element);var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');var xValue=style[isOriginLeft?'left':'right'];var yValue=style[isOriginTop?'top':'bottom'];// convert percent to pixels
var layoutSize=this.layout.size;var x=xValue.indexOf('%')!=-1?parseFloat(xValue)/100*layoutSize.width:parseInt(xValue,10);var y=yValue.indexOf('%')!=-1?parseFloat(yValue)/100*layoutSize.height:parseInt(yValue,10);// clean up 'auto' or other non-integer values
x=isNaN(x)?0:x;y=isNaN(y)?0:y;// remove padding from measurement
x-=isOriginLeft?layoutSize.paddingLeft:layoutSize.paddingRight;y-=isOriginTop?layoutSize.paddingTop:layoutSize.paddingBottom;this.position.x=x;this.position.y=y;};// set settled position, apply padding
proto.layoutPosition=function(){var layoutSize=this.layout.size;var style={};var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');// x
var xPadding=isOriginLeft?'paddingLeft':'paddingRight';var xProperty=isOriginLeft?'left':'right';var xResetProperty=isOriginLeft?'right':'left';var x=this.position.x+layoutSize[xPadding];// set in percentage or pixels
style[xProperty]=this.getXValue(x);// reset other property
style[xResetProperty]='';// y
var yPadding=isOriginTop?'paddingTop':'paddingBottom';var yProperty=isOriginTop?'top':'bottom';var yResetProperty=isOriginTop?'bottom':'top';var y=this.position.y+layoutSize[yPadding];// set in percentage or pixels
style[yProperty]=this.getYValue(y);// reset other property
style[yResetProperty]='';this.css(style);this.emitEvent('layout',[this]);};proto.getXValue=function(x){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&!isHorizontal?x/this.layout.size.width*100+'%':x+'px';};proto.getYValue=function(y){var isHorizontal=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&isHorizontal?y/this.layout.size.height*100+'%':y+'px';};proto._transitionTo=function(x,y){this.getPosition();// get current x & y from top/left
var curX=this.position.x;var curY=this.position.y;var compareX=parseInt(x,10);var compareY=parseInt(y,10);var didNotMove=compareX===this.position.x&&compareY===this.position.y;// save end position
this.setPosition(x,y);// if did not move and not transitioning, just go to layout
if(didNotMove&&!this.isTransitioning){this.layoutPosition();return;}var transX=x-curX;var transY=y-curY;var transitionStyle={};transitionStyle.transform=this.getTranslate(transX,transY);this.transition({to:transitionStyle,onTransitionEnd:{transform:this.layoutPosition},isCleaning:true});};proto.getTranslate=function(x,y){// flip cooridinates if origin on right or bottom
var isOriginLeft=this.layout._getOption('originLeft');var isOriginTop=this.layout._getOption('originTop');x=isOriginLeft?x:-x;y=isOriginTop?y:-y;return'translate3d('+x+'px, '+y+'px, 0)';};// non transition + transform support
proto.goTo=function(x,y){this.setPosition(x,y);this.layoutPosition();};proto.moveTo=proto._transitionTo;proto.setPosition=function(x,y){this.position.x=parseInt(x,10);this.position.y=parseInt(y,10);};// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */ // non transition, just trigger callback
proto._nonTransition=function(args){this.css(args.to);if(args.isCleaning){this._removeStyles(args.to);}for(var prop in args.onTransitionEnd){args.onTransitionEnd[prop].call(this);}};/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */proto.transition=function(args){// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(args);return;}var _transition=this._transn;// keep track of onTransitionEnd callback by css property
for(var prop in args.onTransitionEnd){_transition.onEnd[prop]=args.onTransitionEnd[prop];}// keep track of properties that are transitioning
for(prop in args.to){_transition.ingProperties[prop]=true;// keep track of properties to clean up when transition is done
if(args.isCleaning){_transition.clean[prop]=true;}}// set from styles
if(args.from){this.css(args.from);// force redraw. http://blog.alexmaccaw.com/css-transitions
var h=this.element.offsetHeight;// hack for JSHint to hush about unused var
h=null;}// enable transition
this.enableTransition(args.to);// set styles that are transitioning
this.css(args.to);this.isTransitioning=true;};// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll(str){return str.replace(/([A-Z])/g,function($1){return'-'+$1.toLowerCase();});}var transitionProps='opacity,'+toDashedAll(transformProperty);proto.enableTransition=function()/* style */{// HACK changing transitionProperty during a transition
// will cause transition to jump
if(this.isTransitioning){return;}// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var duration=this.layout.options.transitionDuration;duration=typeof duration=='number'?duration+'ms':duration;// enable transition styles
this.css({transitionProperty:transitionProps,transitionDuration:duration,transitionDelay:this.staggerDelay||0});// listen for transition end event
this.element.addEventListener(transitionEndEvent,this,false);};// ----- events ----- //
proto.onwebkitTransitionEnd=function(event){this.ontransitionend(event);};proto.onotransitionend=function(event){this.ontransitionend(event);};// properties that I munge to make my life easier
var dashedVendorProperties={'-webkit-transform':'transform'};proto.ontransitionend=function(event){// disregard bubbled events from children
if(event.target!==this.element){return;}var _transition=this._transn;// get property name of transitioned property, convert to prefix-free
var propertyName=dashedVendorProperties[event.propertyName]||event.propertyName;// remove property that has completed transitioning
delete _transition.ingProperties[propertyName];// check if any properties are still transitioning
if(isEmptyObj(_transition.ingProperties)){// all properties have completed transitioning
this.disableTransition();}// clean style
if(propertyName in _transition.clean){// clean up style
this.element.style[event.propertyName]='';delete _transition.clean[propertyName];}// trigger onTransitionEnd callback
if(propertyName in _transition.onEnd){var onTransitionEnd=_transition.onEnd[propertyName];onTransitionEnd.call(this);delete _transition.onEnd[propertyName];}this.emitEvent('transitionEnd',[this]);};proto.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(transitionEndEvent,this,false);this.isTransitioning=false;};/**
 * removes style property from element
 * @param {Object} style
**/proto._removeStyles=function(style){// clean up transition styles
var cleanStyle={};for(var prop in style){cleanStyle[prop]='';}this.css(cleanStyle);};var cleanTransitionStyle={transitionProperty:'',transitionDuration:'',transitionDelay:''};proto.removeTransitionStyles=function(){// remove transition
this.css(cleanTransitionStyle);};// ----- stagger ----- //
proto.stagger=function(delay){delay=isNaN(delay)?0:delay;this.staggerDelay=delay+'ms';};// ----- show/hide/remove ----- //
// remove element from DOM
proto.removeElem=function(){this.element.parentNode.removeChild(this.element);// remove display: none
this.css({display:''});this.emitEvent('remove',[this]);};proto.remove=function(){// just remove element if no transition support or no transition
if(!transitionProperty||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return;}// start transition
this.once('transitionEnd',function(){this.removeElem();});this.hide();};proto.reveal=function(){delete this.isHidden;// remove display: none
this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('visibleStyle');onTransitionEnd[transitionEndProperty]=this.onRevealTransitionEnd;this.transition({from:options.hiddenStyle,to:options.visibleStyle,isCleaning:true,onTransitionEnd:onTransitionEnd});};proto.onRevealTransitionEnd=function(){// check if still visible
// during transition, item may have been hidden
if(!this.isHidden){this.emitEvent('reveal');}};/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */proto.getHideRevealTransitionEndProperty=function(styleProperty){var optionStyle=this.layout.options[styleProperty];// use opacity
if(optionStyle.opacity){return'opacity';}// get first property
for(var prop in optionStyle){return prop;}};proto.hide=function(){// set flag
this.isHidden=true;// remove display: none
this.css({display:''});var options=this.layout.options;var onTransitionEnd={};var transitionEndProperty=this.getHideRevealTransitionEndProperty('hiddenStyle');onTransitionEnd[transitionEndProperty]=this.onHideTransitionEnd;this.transition({from:options.visibleStyle,to:options.hiddenStyle,// keep hidden stuff hidden
isCleaning:true,onTransitionEnd:onTransitionEnd});};proto.onHideTransitionEnd=function(){// check if still hidden
// during transition, item may have been un-hidden
if(this.isHidden){this.css({display:'none'});this.emitEvent('hide');}};proto.destroy=function(){this.css({position:'',left:'',right:'',top:'',bottom:'',transition:'',transform:''});};return Item;});/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */(function(window,factory){'use strict';// universal module definition
/* jshint strict: false */ /* globals define, module, require */if(true){// AMD - RequireJS
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_4__,__WEBPACK_LOCAL_MODULE_5__], __WEBPACK_LOCAL_MODULE_6__ = ((function(EvEmitter,getSize,utils,Item){return factory(window,EvEmitter,getSize,utils,Item);}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));}else {}})(window,function factory(window,EvEmitter,getSize,utils,Item){'use strict';// ----- vars ----- //
var console=window.console;var jQuery=window.jQuery;var noop=function noop(){};// -------------------------- Outlayer -------------------------- //
// globally unique identifiers
var GUID=0;// internal store of all Outlayer intances
var instances={};/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */function Outlayer(element,options){var queryElement=utils.getQueryElement(element);if(!queryElement){if(console){console.error('Bad element for '+this.constructor.namespace+': '+(queryElement||element));}return;}this.element=queryElement;// add jQuery
if(jQuery){this.$element=jQuery(this.element);}// options
this.options=utils.extend({},this.constructor.defaults);this.option(options);// add id for Outlayer.getFromElement
var id=++GUID;this.element.outlayerGUID=id;// expando
instances[id]=this;// associate via id
// kick it off
this._create();var isInitLayout=this._getOption('initLayout');if(isInitLayout){this.layout();}}// settings are for internal use only
Outlayer.namespace='outlayer';Outlayer.Item=Item;// default options
Outlayer.defaults={containerStyle:{position:'relative'},initLayout:true,originLeft:true,originTop:true,resize:true,resizeContainer:true,// item options
transitionDuration:'0.4s',hiddenStyle:{opacity:0,transform:'scale(0.001)'},visibleStyle:{opacity:1,transform:'scale(1)'}};var proto=Outlayer.prototype;// inherit EvEmitter
utils.extend(proto,EvEmitter.prototype);/**
 * set options
 * @param {Object} opts
 */proto.option=function(opts){utils.extend(this.options,opts);};/**
 * get backwards compatible option value, check old name
 */proto._getOption=function(option){var oldOption=this.constructor.compatOptions[option];return oldOption&&this.options[oldOption]!==undefined?this.options[oldOption]:this.options[option];};Outlayer.compatOptions={// currentName: oldName
initLayout:'isInitLayout',horizontal:'isHorizontal',layoutInstant:'isLayoutInstant',originLeft:'isOriginLeft',originTop:'isOriginTop',resize:'isResizeBound',resizeContainer:'isResizingContainer'};proto._create=function(){// get items from children
this.reloadItems();// elements that affect layout, but are not laid out
this.stamps=[];this.stamp(this.options.stamp);// set container style
utils.extend(this.element.style,this.options.containerStyle);// bind resize method
var canBindResize=this._getOption('resize');if(canBindResize){this.bindResize();}};// goes through all children again and gets bricks in proper order
proto.reloadItems=function(){// collection of item elements
this.items=this._itemize(this.element.children);};/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */proto._itemize=function(elems){var itemElems=this._filterFindItemElements(elems);var Item=this.constructor.Item;// create new Outlayer Items for collection
var items=[];for(var i=0;i<itemElems.length;i++){var elem=itemElems[i];var item=new Item(elem,this);items.push(item);}return items;};/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */proto._filterFindItemElements=function(elems){return utils.filterFindElements(elems,this.options.itemSelector);};/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */proto.getItemElements=function(){return this.items.map(function(item){return item.element;});};// ----- init & layout ----- //
/**
 * lays out all items
 */proto.layout=function(){this._resetLayout();this._manageStamps();// don't animate first layout
var layoutInstant=this._getOption('layoutInstant');var isInstant=layoutInstant!==undefined?layoutInstant:!this._isLayoutInited;this.layoutItems(this.items,isInstant);// flag for initalized
this._isLayoutInited=true;};// _init is alias for layout
proto._init=proto.layout;/**
 * logic before any new layout
 */proto._resetLayout=function(){this.getSize();};proto.getSize=function(){this.size=getSize(this.element);};/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */proto._getMeasurement=function(measurement,size){var option=this.options[measurement];var elem;if(!option){// default to 0
this[measurement]=0;}else{// use option as an element
if(typeof option=='string'){elem=this.element.querySelector(option);}else if(option instanceof HTMLElement){elem=option;}// use size of element, if element
this[measurement]=elem?getSize(elem)[size]:option;}};/**
 * layout a collection of item elements
 * @api public
 */proto.layoutItems=function(items,isInstant){items=this._getItemsForLayout(items);this._layoutItems(items,isInstant);this._postLayout();};/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */proto._getItemsForLayout=function(items){return items.filter(function(item){return!item.isIgnored;});};/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */proto._layoutItems=function(items,isInstant){this._emitCompleteOnItems('layout',items);if(!items||!items.length){// no items, emit event with empty array
return;}var queue=[];items.forEach(function(item){// get x/y object from method
var position=this._getItemLayoutPosition(item);// enqueue
position.item=item;position.isInstant=isInstant||item.isLayoutInstant;queue.push(position);},this);this._processLayoutQueue(queue);};/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */proto._getItemLayoutPosition=function()/* item */{return{x:0,y:0};};/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */proto._processLayoutQueue=function(queue){this.updateStagger();queue.forEach(function(obj,i){this._positionItem(obj.item,obj.x,obj.y,obj.isInstant,i);},this);};// set stagger from option in milliseconds number
proto.updateStagger=function(){var stagger=this.options.stagger;if(stagger===null||stagger===undefined){this.stagger=0;return;}this.stagger=getMilliseconds(stagger);return this.stagger;};/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */proto._positionItem=function(item,x,y,isInstant,i){if(isInstant){// if not transition, just set CSS
item.goTo(x,y);}else{item.stagger(i*this.stagger);item.moveTo(x,y);}};/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */proto._postLayout=function(){this.resizeContainer();};proto.resizeContainer=function(){var isResizingContainer=this._getOption('resizeContainer');if(!isResizingContainer){return;}var size=this._getContainerSize();if(size){this._setContainerMeasure(size.width,true);this._setContainerMeasure(size.height,false);}};/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */proto._getContainerSize=noop;/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */proto._setContainerMeasure=function(measure,isWidth){if(measure===undefined){return;}var elemSize=this.size;// add padding and border width if border box
if(elemSize.isBorderBox){measure+=isWidth?elemSize.paddingLeft+elemSize.paddingRight+elemSize.borderLeftWidth+elemSize.borderRightWidth:elemSize.paddingBottom+elemSize.paddingTop+elemSize.borderTopWidth+elemSize.borderBottomWidth;}measure=Math.max(measure,0);this.element.style[isWidth?'width':'height']=measure+'px';};/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */proto._emitCompleteOnItems=function(eventName,items){var _this=this;function onComplete(){_this.dispatchEvent(eventName+'Complete',null,[items]);}var count=items.length;if(!items||!count){onComplete();return;}var doneCount=0;function tick(){doneCount++;if(doneCount==count){onComplete();}}// bind callback
items.forEach(function(item){item.once(eventName,tick);});};/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */proto.dispatchEvent=function(type,event,args){// add original event to arguments
var emitArgs=event?[event].concat(args):args;this.emitEvent(type,emitArgs);if(jQuery){// set this.$element
this.$element=this.$element||jQuery(this.element);if(event){// create jQuery event
var $event=jQuery.Event(event);$event.type=type;this.$element.trigger($event,args);}else{// just trigger with type if no event available
this.$element.trigger(type,args);}}};// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */proto.ignore=function(elem){var item=this.getItem(elem);if(item){item.isIgnored=true;}};/**
 * return item to layout collection
 * @param {Element} elem
 */proto.unignore=function(elem){var item=this.getItem(elem);if(item){delete item.isIgnored;}};/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */proto.stamp=function(elems){elems=this._find(elems);if(!elems){return;}this.stamps=this.stamps.concat(elems);// ignore
elems.forEach(this.ignore,this);};/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */proto.unstamp=function(elems){elems=this._find(elems);if(!elems){return;}elems.forEach(function(elem){// filter out removed stamp elements
utils.removeFrom(this.stamps,elem);this.unignore(elem);},this);};/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */proto._find=function(elems){if(!elems){return;}// if string, use argument as selector string
if(typeof elems=='string'){elems=this.element.querySelectorAll(elems);}elems=utils.makeArray(elems);return elems;};proto._manageStamps=function(){if(!this.stamps||!this.stamps.length){return;}this._getBoundingRect();this.stamps.forEach(this._manageStamp,this);};// update boundingLeft / Top
proto._getBoundingRect=function(){// get bounding rect for container element
var boundingRect=this.element.getBoundingClientRect();var size=this.size;this._boundingRect={left:boundingRect.left+size.paddingLeft+size.borderLeftWidth,top:boundingRect.top+size.paddingTop+size.borderTopWidth,right:boundingRect.right-(size.paddingRight+size.borderRightWidth),bottom:boundingRect.bottom-(size.paddingBottom+size.borderBottomWidth)};};/**
 * @param {Element} stamp
**/proto._manageStamp=noop;/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */proto._getElementOffset=function(elem){var boundingRect=elem.getBoundingClientRect();var thisRect=this._boundingRect;var size=getSize(elem);var offset={left:boundingRect.left-thisRect.left-size.marginLeft,top:boundingRect.top-thisRect.top-size.marginTop,right:thisRect.right-boundingRect.right-size.marginRight,bottom:thisRect.bottom-boundingRect.bottom-size.marginBottom};return offset;};// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent=utils.handleEvent;/**
 * Bind layout to window resizing
 */proto.bindResize=function(){window.addEventListener('resize',this);this.isResizeBound=true;};/**
 * Unbind layout to window resizing
 */proto.unbindResize=function(){window.removeEventListener('resize',this);this.isResizeBound=false;};proto.onresize=function(){this.resize();};utils.debounceMethod(Outlayer,'onresize',100);proto.resize=function(){// don't trigger if size did not change
// or if resize was unbound. See #9
if(!this.isResizeBound||!this.needsResizeLayout()){return;}this.layout();};/**
 * check if layout is needed post layout
 * @returns Boolean
 */proto.needsResizeLayout=function(){var size=getSize(this.element);// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
var hasSizes=this.size&&size;return hasSizes&&size.innerWidth!==this.size.innerWidth;};// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/proto.addItems=function(elems){var items=this._itemize(elems);// add items to collection
if(items.length){this.items=this.items.concat(items);}return items;};/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return;}// layout and reveal just the new items
this.layoutItems(items,true);this.reveal(items);};/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return;}// add items to beginning of collection
var previousItems=this.items.slice(0);this.items=items.concat(previousItems);// start new layout
this._resetLayout();this._manageStamps();// layout new stuff without transition
this.layoutItems(items,true);this.reveal(items);// layout previous items
this.layoutItems(previousItems);};/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.reveal=function(items){this._emitCompleteOnItems('reveal',items);if(!items||!items.length){return;}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.reveal();});};/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.hide=function(items){this._emitCompleteOnItems('hide',items);if(!items||!items.length){return;}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.hide();});};/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.revealItemElements=function(elems){var items=this.getItems(elems);this.reveal(items);};/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.hideItemElements=function(elems){var items=this.getItems(elems);this.hide(items);};/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */proto.getItem=function(elem){// loop through items to get the one that matches
for(var i=0;i<this.items.length;i++){var item=this.items[i];if(item.element==elem){// return item
return item;}}};/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */proto.getItems=function(elems){elems=utils.makeArray(elems);var items=[];elems.forEach(function(elem){var item=this.getItem(elem);if(item){items.push(item);}},this);return items;};/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */proto.remove=function(elems){var removeItems=this.getItems(elems);this._emitCompleteOnItems('remove',removeItems);// bail if no items to remove
if(!removeItems||!removeItems.length){return;}removeItems.forEach(function(item){item.remove();// remove item from collection
utils.removeFrom(this.items,item);},this);};// ----- destroy ----- //
// remove and disable Outlayer instance
proto.destroy=function(){// clean up dynamic styles
var style=this.element.style;style.height='';style.position='';style.width='';// destroy items
this.items.forEach(function(item){item.destroy();});this.unbindResize();var id=this.element.outlayerGUID;delete instances[id];// remove reference to instance by id
delete this.element.outlayerGUID;// remove data for jQuery
if(jQuery){jQuery.removeData(this.element,this.constructor.namespace);}};// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */Outlayer.data=function(elem){elem=utils.getQueryElement(elem);var id=elem&&elem.outlayerGUID;return id&&instances[id];};// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */Outlayer.create=function(namespace,options){// sub-class Outlayer
var Layout=subclass(Outlayer);// apply new options and compatOptions
Layout.defaults=utils.extend({},Outlayer.defaults);utils.extend(Layout.defaults,options);Layout.compatOptions=utils.extend({},Outlayer.compatOptions);Layout.namespace=namespace;Layout.data=Outlayer.data;// sub-class Item
Layout.Item=subclass(Item);// -------------------------- declarative -------------------------- //
utils.htmlInit(Layout,namespace);// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
if(jQuery&&jQuery.bridget){jQuery.bridget(namespace,Layout);}return Layout;};function subclass(Parent){function SubClass(){Parent.apply(this,arguments);}SubClass.prototype=Object.create(Parent.prototype);SubClass.prototype.constructor=SubClass;return SubClass;}// ----- helpers ----- //
// how many milliseconds are in each unit
var msUnits={ms:1,s:1000};// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds(time){if(typeof time=='number'){return time;}var matches=time.match(/(^\d*\.?\d*)(\w*)/);var num=matches&&matches[1];var unit=matches&&matches[2];if(!num.length){return 0;}num=parseFloat(num);var mult=msUnits[unit]||1;return num*mult;}// ----- fin ----- //
// back in global
Outlayer.Item=Item;return Outlayer;});/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /*globals define, module, require */if(true){// AMD
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_6__,__WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}})(window,function factory(Outlayer,getSize){// -------------------------- masonryDefinition -------------------------- //
// create an Outlayer layout class
var Masonry=Outlayer.create('masonry');// isFitWidth -> fitWidth
Masonry.compatOptions.fitWidth='isFitWidth';var proto=Masonry.prototype;proto._resetLayout=function(){this.getSize();this._getMeasurement('columnWidth','outerWidth');this._getMeasurement('gutter','outerWidth');this.measureColumns();// reset column Y
this.colYs=[];for(var i=0;i<this.cols;i++){this.colYs.push(0);}this.maxY=0;this.horizontalColIndex=0;};proto.measureColumns=function(){this.getContainerWidth();// if columnWidth is 0, default to outerWidth of first item
if(!this.columnWidth){var firstItem=this.items[0];var firstItemElem=firstItem&&firstItem.element;// columnWidth fall back to item of first element
this.columnWidth=firstItemElem&&getSize(firstItemElem).outerWidth||// if first elem has no width, default to size of container
this.containerWidth;}var columnWidth=this.columnWidth+=this.gutter;// calculate columns
var containerWidth=this.containerWidth+this.gutter;var cols=containerWidth/columnWidth;// fix rounding errors, typically with gutters
var excess=columnWidth-containerWidth%columnWidth;// if overshoot is less than a pixel, round up, otherwise floor it
var mathMethod=excess&&excess<1?'round':'floor';cols=Math[mathMethod](cols);this.cols=Math.max(cols,1);};proto.getContainerWidth=function(){// container is parent if fit width
var isFitWidth=this._getOption('fitWidth');var container=isFitWidth?this.element.parentNode:this.element;// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
var size=getSize(container);this.containerWidth=size&&size.innerWidth;};proto._getItemLayoutPosition=function(item){item.getSize();// how many columns does this brick span
var remainder=item.size.outerWidth%this.columnWidth;var mathMethod=remainder&&remainder<1?'round':'ceil';// round if off by 1 pixel, otherwise use ceil
var colSpan=Math[mathMethod](item.size.outerWidth/this.columnWidth);colSpan=Math.min(colSpan,this.cols);// use horizontal or top column position
var colPosMethod=this.options.horizontalOrder?'_getHorizontalColPosition':'_getTopColPosition';var colPosition=this[colPosMethod](colSpan,item);// position the brick
var position={x:this.columnWidth*colPosition.col,y:colPosition.y};// apply setHeight to necessary columns
var setHeight=colPosition.y+item.size.outerHeight;var setMax=colSpan+colPosition.col;for(var i=colPosition.col;i<setMax;i++){this.colYs[i]=setHeight;}return position;};proto._getTopColPosition=function(colSpan){var colGroup=this._getTopColGroup(colSpan);// get the minimum Y value from the columns
var minimumY=Math.min.apply(Math,colGroup);return{col:colGroup.indexOf(minimumY),y:minimumY};};/**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */proto._getTopColGroup=function(colSpan){if(colSpan<2){// if brick spans only one column, use all the column Ys
return this.colYs;}var colGroup=[];// how many different places could this brick fit horizontally
var groupCount=this.cols+1-colSpan;// for each group potential horizontal position
for(var i=0;i<groupCount;i++){colGroup[i]=this._getColGroupY(i,colSpan);}return colGroup;};proto._getColGroupY=function(col,colSpan){if(colSpan<2){return this.colYs[col];}// make an array of colY values for that one group
var groupColYs=this.colYs.slice(col,col+colSpan);// and get the max value of the array
return Math.max.apply(Math,groupColYs);};// get column position based on horizontal index. #873
proto._getHorizontalColPosition=function(colSpan,item){var col=this.horizontalColIndex%this.cols;var isOver=colSpan>1&&col+colSpan>this.cols;// shift to next row if item can't fit on current row
col=isOver?0:col;// don't let zero-size items take up space
var hasSize=item.size.outerWidth&&item.size.outerHeight;this.horizontalColIndex=hasSize?col+colSpan:this.horizontalColIndex;return{col:col,y:this._getColGroupY(col,colSpan)};};proto._manageStamp=function(stamp){var stampSize=getSize(stamp);var offset=this._getElementOffset(stamp);// get the columns that this stamp affects
var isOriginLeft=this._getOption('originLeft');var firstX=isOriginLeft?offset.left:offset.right;var lastX=firstX+stampSize.outerWidth;var firstCol=Math.floor(firstX/this.columnWidth);firstCol=Math.max(0,firstCol);var lastCol=Math.floor(lastX/this.columnWidth);// lastCol should not go over if multiple of columnWidth #425
lastCol-=lastX%this.columnWidth?0:1;lastCol=Math.min(this.cols-1,lastCol);// set colYs to bottom of the stamp
var isOriginTop=this._getOption('originTop');var stampMaxY=(isOriginTop?offset.top:offset.bottom)+stampSize.outerHeight;for(var i=firstCol;i<=lastCol;i++){this.colYs[i]=Math.max(stampMaxY,this.colYs[i]);}};proto._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var size={height:this.maxY};if(this._getOption('fitWidth')){size.width=this._getContainerFitWidth();}return size;};proto._getContainerFitWidth=function(){var unusedCols=0;// count unused columns
var i=this.cols;while(--i){if(this.colYs[i]!==0){break;}unusedCols++;}// fit container to columns that have been used
return(this.cols-unusedCols)*this.columnWidth-this.gutter;};proto.needsResizeLayout=function(){var previousWidth=this.containerWidth;this.getContainerWidth();return previousWidth!=this.containerWidth;};return Masonry;});// ==================================================
// fancyBox v3.2.10
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;(function(window,document,$,undefined){'use strict';// If there's no jQuery, fancyBox can't work
// =========================================
if(!$){return;}// Check if fancyBox is already initialized
// ========================================
if($.fn.fancybox){if('console'in window){console.log('fancyBox already initialized');}return;}// Private default settings
// ========================
var defaults={// Enable infinite gallery navigation
loop:false,// Space around image, ignored if zoomed-in or viewport width is smaller than 800px
margin:[44,0],// Horizontal space between slides
gutter:50,// Enable keyboard navigation
keyboard:true,// Should display navigation arrows at the screen edges
arrows:true,// Should display infobar (counter and arrows at the top)
infobar:true,// Should display toolbar (buttons at the top)
toolbar:true,// What buttons should appear in the top right corner.
// Buttons will be created using templates from `btnTpl` option
// and they will be placed into toolbar (class="fancybox-toolbar"` element)
buttons:['slideShow','fullScreen','thumbs','share',//'download',
//'zoom',
'close'],// Detect "idle" time in seconds
idleTime:3,// Should display buttons at top right corner of the content
// If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
// Use template from `btnTpl.smallBtn` for customization
smallBtn:'auto',// Disable right-click and use simple image protection for images
protect:false,// Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
modal:false,image:{// Wait for images to load before displaying
// Requires predefined image dimensions
// If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
preload:"auto"},ajax:{// Object containing settings for ajax request
settings:{// This helps to indicate that request comes from the modal
// Feel free to change naming
data:{fancybox:true}}},iframe:{// Iframe template
tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',// Preload iframe before displaying it
// This allows to calculate iframe content width and height
// (note: Due to "Same Origin Policy", you can't get cross domain data).
preload:true,// Custom CSS styling for iframe wrapping element
// You can use this to set custom iframe dimensions
css:{},// Iframe tag attributes
attr:{scrolling:'auto'}},// Default content type if cannot be detected automatically
defaultType:'image',// Open/close animation type
// Possible values:
//   false            - disable
//   "zoom"           - zoom images from/to thumbnail
//   "fade"
//   "zoom-in-out"
//
animationEffect:"zoom",// Duration in ms for open/close animation
animationDuration:500,// Should image change opacity while zooming
// If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
zoomOpacity:"auto",// Transition effect between slides
//
// Possible values:
//   false            - disable
//   "fade'
//   "slide'
//   "circular'
//   "tube'
//   "zoom-in-out'
//   "rotate'
//
transitionEffect:"fade",// Duration in ms for transition animation
transitionDuration:366,// Custom CSS class for slide element
slideClass:'',// Custom CSS class for layout
baseClass:'',// Base template for layout
baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1">'+'<div class="fancybox-bg"></div>'+'<div class="fancybox-inner">'+'<div class="fancybox-infobar">'+'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>'+'</div>'+'<div class="fancybox-toolbar">{{buttons}}</div>'+'<div class="fancybox-navigation">{{arrows}}</div>'+'<div class="fancybox-stage"></div>'+'<div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div>'+'</div>'+'</div>',// Loading indicator template
spinnerTpl:'<div class="fancybox-loading"></div>',// Error message template
errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" />'+'</svg>'+'</a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" />'+'</svg>'+'</button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,10 L30,30 M30,10 L10,30" />'+'</svg>'+'</button>',// This small close button will be appended to your html/inline/ajax content by default,
// if "smallBtn" option is not set to false
smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',// Arrows
arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path>'+'</svg>'+'</button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path>'+'</svg>'+'</button>'},// Container is injected into this element
parentEl:'body',// Focus handling
// ==============
// Try to focus on the first focusable element after opening
autoFocus:false,// Put focus back to active element after closing
backFocus:true,// Do not let user to focus on element outside modal content
trapFocus:true,// Module specific options
// =======================
fullScreen:{autoStart:false},// Set `touch: false` to disable dragging/swiping
touch:{vertical:true,// Allow to drag content vertically
momentum:true// Continue movement after releasing mouse/touch when panning
},// Hash value when initializing manually,
// set `false` to disable hash change
hash:null,// Customize or add new media types
// Example:
/*
        media : {
            youtube : {
                params : {
                    autoplay : 0
                }
            }
        }
        */media:{},slideShow:{autoStart:false,speed:4000},thumbs:{autoStart:false,// Display thumbnails on opening
hideOnClose:true,// Hide thumbnail grid when closing animation starts
parentEl:'.fancybox-container',// Container is injected into this element
axis:'y'// Vertical (y) or horizontal (x) scrolling
},// Use mousewheel to navigate gallery
// If 'auto' - enabled for images only
wheel:'auto',// Callbacks
//==========
// See Documentation/API/Events for more information
// Example:
/*
            afterShow: function( instance, current ) {
                 console.info( 'Clicked element:' );
                 console.info( current.opts.$orig );
            }
        */onInit:$.noop,// When instance has been initialized
beforeLoad:$.noop,// Before the content of a slide is being loaded
afterLoad:$.noop,// When the content of a slide is done loading
beforeShow:$.noop,// Before open animation starts
afterShow:$.noop,// When content is done loading and animating
beforeClose:$.noop,// Before the instance attempts to close. Return false to cancel the close.
afterClose:$.noop,// After instance has been closed
onActivate:$.noop,// When instance is brought to front
onDeactivate:$.noop,// When other instance has been activated
// Interaction
// ===========
// Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
// each option can be string or method that returns value.
//
// Possible values:
//   "close"           - close instance
//   "next"            - move to next gallery item
//   "nextOrClose"     - move to next gallery item or close if gallery has only one item
//   "toggleControls"  - show/hide controls
//   "zoom"            - zoom image (if loaded)
//   false             - do nothing
// Clicked on the content
clickContent:function clickContent(current,event){return current.type==='image'?'zoom':false;},// Clicked on the slide
clickSlide:'close',// Clicked on the background (backdrop) element
clickOutside:'close',// Same as previous two, but for double click
dblclickContent:false,dblclickSlide:false,dblclickOutside:false,// Custom options when mobile device is detected
// =============================================
mobile:{idleTime:false,margin:0,clickContent:function clickContent(current,event){return current.type==='image'?'toggleControls':false;},clickSlide:function clickSlide(current,event){return current.type==='image'?'toggleControls':'close';},dblclickContent:function dblclickContent(current,event){return current.type==='image'?'zoom':false;},dblclickSlide:function dblclickSlide(current,event){return current.type==='image'?'zoom':false;}},// Internationalization
// ============
lang:'en',i18n:{'en':{CLOSE:'Close',NEXT:'Next',PREV:'Previous',ERROR:'The requested content cannot be loaded. <br/> Please try again later.',PLAY_START:'Start slideshow',PLAY_STOP:'Pause slideshow',FULL_SCREEN:'Full screen',THUMBS:'Thumbnails',DOWNLOAD:'Download',SHARE:'Share',ZOOM:'Zoom'},'de':{CLOSE:'Schliessen',NEXT:'Weiter',PREV:'Zurück',ERROR:'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',PLAY_START:'Diaschau starten',PLAY_STOP:'Diaschau beenden',FULL_SCREEN:'Vollbild',THUMBS:'Vorschaubilder',DOWNLOAD:'Herunterladen',SHARE:'Teilen',ZOOM:'Maßstab'}}};// Few useful variables and methods
// ================================
var $W=$(window);var $D=$(document);var called=0;// Check if an object is a jQuery object and not a native JavaScript object
// ========================================================================
var isQuery=function isQuery(obj){return obj&&obj.hasOwnProperty&&obj instanceof $;};// Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
// ===============================================================================
var requestAFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||// if all else fails, use setTimeout
function(callback){return window.setTimeout(callback,1000/60);};}();// Detect the supported transition-end event property name
// =======================================================
var transitionEnd=function(){var t,el=document.createElement("fakeelement");var transitions={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"};for(t in transitions){if(el.style[t]!==undefined){return transitions[t];}}return'transitionend';}();// Force redraw on an element.
// This helps in cases where the browser doesn't redraw an updated element properly.
// =================================================================================
var forceRedraw=function forceRedraw($el){return $el&&$el.length&&$el[0].offsetHeight;};// Class definition
// ================
var FancyBox=function FancyBox(content,opts,index){var self=this;self.opts=$.extend(true,{index:index},$.fancybox.defaults,opts||{});if($.fancybox.isMobile){self.opts=$.extend(true,{},self.opts,self.opts.mobile);}// Exclude buttons option from deep merging
if(opts&&$.isArray(opts.buttons)){self.opts.buttons=opts.buttons;}self.id=self.opts.id||++called;self.group=[];self.currIndex=parseInt(self.opts.index,10)||0;self.prevIndex=null;self.prevPos=null;self.currPos=0;self.firstRun=null;// Create group elements from original item collection
self.createGroup(content);if(!self.group.length){return;}// Save last active element and current scroll position
self.$lastFocus=$(document.activeElement).blur();// Collection of gallery objects
self.slides={};self.init();};$.extend(FancyBox.prototype,{// Create DOM structure
// ====================
init:function init(){var self=this,firstItem=self.group[self.currIndex],firstItemOpts=firstItem.opts,scrollbarWidth=$.fancybox.scrollbarWidth,$scrollDiv,$container,buttonStr;self.scrollTop=$D.scrollTop();self.scrollLeft=$D.scrollLeft();// Hide scrollbars
// ===============
if(!$.fancybox.getInstance()){$('body').addClass('fancybox-active');// iOS hack
if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream){// iOS has problems for input elements inside fixed containers,
// the workaround is to apply `position: fixed` to `<body>` element,
// unfortunately, this makes it lose the scrollbars and forces address bar to appear.
if(firstItem.type!=='image'){$('body').css('top',$('body').scrollTop()*-1).addClass('fancybox-iosfix');}}else if(!$.fancybox.isMobile&&document.body.scrollHeight>window.innerHeight){if(scrollbarWidth===undefined){$scrollDiv=$('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo('body');scrollbarWidth=$.fancybox.scrollbarWidth=$scrollDiv[0].offsetWidth-$scrollDiv[0].clientWidth;$scrollDiv.remove();}$('head').append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+scrollbarWidth+'px; }</style>');$('body').addClass('compensate-for-scrollbar');}}// Build html markup and set references
// ====================================
// Build html code for buttons and insert into main template
buttonStr='';$.each(firstItemOpts.buttons,function(index,value){buttonStr+=firstItemOpts.btnTpl[value]||'';});// Create markup from base template, it will be initially hidden to
// avoid unnecessary work like painting while initializing is not complete
$container=$(self.translate(self,firstItemOpts.baseTpl.replace('\{\{buttons\}\}',buttonStr).replace('\{\{arrows\}\}',firstItemOpts.btnTpl.arrowLeft+firstItemOpts.btnTpl.arrowRight))).attr('id','fancybox-container-'+self.id).addClass('fancybox-is-hidden').addClass(firstItemOpts.baseClass).data('FancyBox',self).appendTo(firstItemOpts.parentEl);// Create object holding references to jQuery wrapped nodes
self.$refs={container:$container};['bg','inner','infobar','toolbar','stage','caption','navigation'].forEach(function(item){self.$refs[item]=$container.find('.fancybox-'+item);});self.trigger('onInit');// Enable events, deactive previous instances
self.activate();// Build slides, load and reveal content
self.jumpTo(self.currIndex);},// Simple i18n support - replaces object keys found in template
// with corresponding values
// ============================================================
translate:function translate(obj,str){var arr=obj.opts.i18n[obj.opts.lang];return str.replace(/\{\{(\w+)\}\}/g,function(match,n){var value=arr[n];if(value===undefined){return match;}return value;});},// Create array of gally item objects
// Check if each object has valid type and content
// ===============================================
createGroup:function createGroup(content){var self=this;var items=$.makeArray(content);$.each(items,function(i,item){var obj={},opts={},$item,type,found,src,srcParts;// Step 1 - Make sure we have an object
// ====================================
if($.isPlainObject(item)){// We probably have manual usage here, something like
// $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )
obj=item;opts=item.opts||item;}else if($.type(item)==='object'&&$(item).length){// Here we probably have jQuery collection returned by some selector
$item=$(item);opts=$item.data();opts=$.extend({},opts,opts.options||{});// Here we store clicked element
opts.$orig=$item;obj.src=opts.src||$item.attr('href');// Assume that simple syntax is used, for example:
//   `$.fancybox.open( $("#test"), {} );`
if(!obj.type&&!obj.src){obj.type='inline';obj.src=item;}}else{// Assume we have a simple html code, for example:
//   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
obj={type:'html',src:item+''};}// Each gallery object has full collection of options
obj.opts=$.extend(true,{},self.opts,opts);// Do not merge buttons array
if($.isArray(opts.buttons)){obj.opts.buttons=opts.buttons;}// Step 2 - Make sure we have content type, if not - try to guess
// ==============================================================
type=obj.type||obj.opts.type;src=obj.src||'';if(!type&&src){if(src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)){type='image';}else if(src.match(/\.(pdf)((\?|#).*)?$/i)){type='pdf';}else if(found=src.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)){type='video';if(!obj.opts.videoFormat){obj.opts.videoFormat='video/'+(found[1]==='ogv'?'ogg':found[1]);}}else if(src.charAt(0)==='#'){type='inline';}}if(type){obj.type=type;}else{self.trigger('objectNeedsType',obj);}// Step 3 - Some adjustments
// =========================
obj.index=self.group.length;// Check if $orig and $thumb objects exist
if(obj.opts.$orig&&!obj.opts.$orig.length){delete obj.opts.$orig;}if(!obj.opts.$thumb&&obj.opts.$orig){obj.opts.$thumb=obj.opts.$orig.find('img:first');}if(obj.opts.$thumb&&!obj.opts.$thumb.length){delete obj.opts.$thumb;}// "caption" is a "special" option, it can be used to customize caption per gallery item ..
if($.type(obj.opts.caption)==='function'){obj.opts.caption=obj.opts.caption.apply(item,[self,obj]);}if($.type(self.opts.caption)==='function'){obj.opts.caption=self.opts.caption.apply(item,[self,obj]);}// Make sure we have caption as a string or jQuery object
if(!(obj.opts.caption instanceof $)){obj.opts.caption=obj.opts.caption===undefined?'':obj.opts.caption+'';}// Check if url contains "filter" used to filter the content
// Example: "ajax.html #something"
if(type==='ajax'){srcParts=src.split(/\s+/,2);if(srcParts.length>1){obj.src=srcParts.shift();obj.opts.filter=srcParts.shift();}}if(obj.opts.smallBtn=='auto'){if($.inArray(type,['html','inline','ajax'])>-1){obj.opts.toolbar=false;obj.opts.smallBtn=true;}else{obj.opts.smallBtn=false;}}// If the type is "pdf", then simply load file into iframe
if(type==='pdf'){obj.type='iframe';obj.opts.iframe.preload=false;}// Hide all buttons and disable interactivity for modal items
if(obj.opts.modal){obj.opts=$.extend(true,obj.opts,{// Remove buttons
infobar:0,toolbar:0,smallBtn:0,// Disable keyboard navigation
keyboard:0,// Disable some modules
slideShow:0,fullScreen:0,thumbs:0,touch:0,// Disable click event handlers
clickContent:false,clickSlide:false,clickOutside:false,dblclickContent:false,dblclickSlide:false,dblclickOutside:false});}// Step 4 - Add processed object to group
// ======================================
self.group.push(obj);});},// Attach an event handler functions for:
//   - navigation buttons
//   - browser scrolling, resizing;
//   - focusing
//   - keyboard
//   - detect idle
// ======================================
addEvents:function addEvents(){var self=this;self.removeEvents();// Make navigation elements clickable
self.$refs.container.on('click.fb-close','[data-fancybox-close]',function(e){e.stopPropagation();e.preventDefault();self.close(e);}).on('click.fb-prev touchend.fb-prev','[data-fancybox-prev]',function(e){e.stopPropagation();e.preventDefault();self.previous();}).on('click.fb-next touchend.fb-next','[data-fancybox-next]',function(e){e.stopPropagation();e.preventDefault();self.next();}).on('click.fb','[data-fancybox-zoom]',function(e){// Click handler for zoom button
self[self.isScaledDown()?'scaleToActual':'scaleToFit']();});// Handle page scrolling and browser resizing
$W.on('orientationchange.fb resize.fb',function(e){if(e&&e.originalEvent&&e.originalEvent.type==="resize"){requestAFrame(function(){self.update();});}else{self.$refs.stage.hide();setTimeout(function(){self.$refs.stage.show();self.update();},600);}});// Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
// (a.k.a. "escaping the modal")
$D.on('focusin.fb',function(e){var instance=$.fancybox?$.fancybox.getInstance():null;if(instance.isClosing||!instance.current||!instance.current.opts.trapFocus||$(e.target).hasClass('fancybox-container')||$(e.target).is(document)){return;}if(instance&&$(e.target).css('position')!=='fixed'&&!instance.$refs.container.has(e.target).length){e.stopPropagation();instance.focus();// Sometimes page gets scrolled, set it back
$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);}});// Enable keyboard navigation
$D.on('keydown.fb',function(e){var current=self.current,keycode=e.keyCode||e.which;if(!current||!current.opts.keyboard){return;}if($(e.target).is('input')||$(e.target).is('textarea')){return;}// Backspace and Esc keys
if(keycode===8||keycode===27){e.preventDefault();self.close(e);return;}// Left arrow and Up arrow
if(keycode===37||keycode===38){e.preventDefault();self.previous();return;}// Righ arrow and Down arrow
if(keycode===39||keycode===40){e.preventDefault();self.next();return;}self.trigger('afterKeydown',e,keycode);});// Hide controls after some inactivity period
if(self.group[self.currIndex].opts.idleTime){self.idleSecondsCounter=0;$D.on('mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',function(e){self.idleSecondsCounter=0;if(self.isIdle){self.showControls();}self.isIdle=false;});self.idleInterval=window.setInterval(function(){self.idleSecondsCounter++;if(self.idleSecondsCounter>=self.group[self.currIndex].opts.idleTime&&!self.isDragging){self.isIdle=true;self.idleSecondsCounter=0;self.hideControls();}},1000);}},// Remove events added by the core
// ===============================
removeEvents:function removeEvents(){var self=this;$W.off('orientationchange.fb resize.fb');$D.off('focusin.fb keydown.fb .fb-idle');this.$refs.container.off('.fb-close .fb-prev .fb-next');if(self.idleInterval){window.clearInterval(self.idleInterval);self.idleInterval=null;}},// Change to previous gallery item
// ===============================
previous:function previous(duration){return this.jumpTo(this.currPos-1,duration);},// Change to next gallery item
// ===========================
next:function next(duration){return this.jumpTo(this.currPos+1,duration);},// Switch to selected gallery item
// ===============================
jumpTo:function jumpTo(pos,duration,slide){var self=this,firstRun,loop,current,previous,canvasWidth,currentPos,transitionProps;var groupLen=self.group.length;if(self.isDragging||self.isClosing||self.isAnimating&&self.firstRun){return;}pos=parseInt(pos,10);loop=self.current?self.current.opts.loop:self.opts.loop;if(!loop&&(pos<0||pos>=groupLen)){return false;}firstRun=self.firstRun=self.firstRun===null;if(groupLen<2&&!firstRun&&!!self.isDragging){return;}previous=self.current;self.prevIndex=self.currIndex;self.prevPos=self.currPos;// Create slides
current=self.createSlide(pos);if(groupLen>1){if(loop||current.index>0){self.createSlide(pos-1);}if(loop||current.index<groupLen-1){self.createSlide(pos+1);}}self.current=current;self.currIndex=current.index;self.currPos=current.pos;self.trigger('beforeShow',firstRun);self.updateControls();currentPos=$.fancybox.getTranslate(current.$slide);current.isMoved=(currentPos.left!==0||currentPos.top!==0)&&!current.$slide.hasClass('fancybox-animated');current.forcedDuration=undefined;if($.isNumeric(duration)){current.forcedDuration=duration;}else{duration=current.opts[firstRun?'animationDuration':'transitionDuration'];}duration=parseInt(duration,10);// Fresh start - reveal container, current slide and start loading content
if(firstRun){if(current.opts.animationEffect&&duration){self.$refs.container.css('transition-duration',duration+'ms');}self.$refs.container.removeClass('fancybox-is-hidden');forceRedraw(self.$refs.container);self.$refs.container.addClass('fancybox-is-open');// Make first slide visible (to display loading icon, if needed)
current.$slide.addClass('fancybox-slide--current');self.loadSlide(current);self.preload('image');return;}// Clean up
$.each(self.slides,function(index,slide){$.fancybox.stop(slide.$slide);});// Make current that slide is visible even if content is still loading
current.$slide.removeClass('fancybox-slide--next fancybox-slide--previous').addClass('fancybox-slide--current');// If slides have been dragged, animate them to correct position
if(current.isMoved){canvasWidth=Math.round(current.$slide.width());$.each(self.slides,function(index,slide){var pos=slide.pos-current.pos;$.fancybox.animate(slide.$slide,{top:0,left:pos*canvasWidth+pos*slide.opts.gutter},duration,function(){slide.$slide.removeAttr('style').removeClass('fancybox-slide--next fancybox-slide--previous');if(slide.pos===self.currPos){current.isMoved=false;self.complete();}});});}else{self.$refs.stage.children().removeAttr('style');}// Start transition that reveals current content
// or wait when it will be loaded
if(current.isLoaded){self.revealContent(current);}else{self.loadSlide(current);}self.preload('image');if(previous.pos===current.pos){return;}// Handle previous slide
// =====================
transitionProps='fancybox-slide--'+(previous.pos>current.pos?'next':'previous');previous.$slide.removeClass('fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous');previous.isComplete=false;if(!duration||!current.isMoved&&!current.opts.transitionEffect){return;}if(current.isMoved){previous.$slide.addClass(transitionProps);}else{transitionProps='fancybox-animated '+transitionProps+' fancybox-fx-'+current.opts.transitionEffect;$.fancybox.animate(previous.$slide,transitionProps,duration,function(){previous.$slide.removeClass(transitionProps).removeAttr('style');});}},// Create new "slide" element
// These are gallery items  that are actually added to DOM
// =======================================================
createSlide:function createSlide(pos){var self=this;var $slide;var index;index=pos%self.group.length;index=index<0?self.group.length+index:index;if(!self.slides[pos]&&self.group[index]){$slide=$('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);self.slides[pos]=$.extend(true,{},self.group[index],{pos:pos,$slide:$slide,isLoaded:false});self.updateSlide(self.slides[pos]);}return self.slides[pos];},// Scale image to the actual size of the image
// ===========================================
scaleToActual:function scaleToActual(x,y,duration){var self=this;var current=self.current;var $what=current.$content;var imgPos,posX,posY,scaleX,scaleY;var canvasWidth=parseInt(current.$slide.width(),10);var canvasHeight=parseInt(current.$slide.height(),10);var newImgWidth=current.width;var newImgHeight=current.height;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return;}$.fancybox.stop($what);self.isAnimating=true;x=x===undefined?canvasWidth*0.5:x;y=y===undefined?canvasHeight*0.5:y;imgPos=$.fancybox.getTranslate($what);scaleX=newImgWidth/imgPos.width;scaleY=newImgHeight/imgPos.height;// Get center position for original image
posX=canvasWidth*0.5-newImgWidth*0.5;posY=canvasHeight*0.5-newImgHeight*0.5;// Make sure image does not move away from edges
if(newImgWidth>canvasWidth){posX=imgPos.left*scaleX-(x*scaleX-x);if(posX>0){posX=0;}if(posX<canvasWidth-newImgWidth){posX=canvasWidth-newImgWidth;}}if(newImgHeight>canvasHeight){posY=imgPos.top*scaleY-(y*scaleY-y);if(posY>0){posY=0;}if(posY<canvasHeight-newImgHeight){posY=canvasHeight-newImgHeight;}}self.updateCursor(newImgWidth,newImgHeight);$.fancybox.animate($what,{top:posY,left:posX,scaleX:scaleX,scaleY:scaleY},duration||330,function(){self.isAnimating=false;});// Stop slideshow
if(self.SlideShow&&self.SlideShow.isActive){self.SlideShow.stop();}},// Scale image to fit inside parent element
// ========================================
scaleToFit:function scaleToFit(duration){var self=this;var current=self.current;var $what=current.$content;var end;if(!(current.type=='image'&&!current.hasError)||!$what||self.isAnimating){return;}$.fancybox.stop($what);self.isAnimating=true;end=self.getFitPos(current);self.updateCursor(end.width,end.height);$.fancybox.animate($what,{top:end.top,left:end.left,scaleX:end.width/$what.width(),scaleY:end.height/$what.height()},duration||330,function(){self.isAnimating=false;});},// Calculate image size to fit inside viewport
// ===========================================
getFitPos:function getFitPos(slide){var self=this;var $what=slide.$content;var imgWidth=slide.width;var imgHeight=slide.height;var margin=slide.opts.margin;var canvasWidth,canvasHeight,minRatio,width,height;if(!$what||!$what.length||!imgWidth&&!imgHeight){return false;}// Convert "margin to CSS style: [ top, right, bottom, left ]
if($.type(margin)==="number"){margin=[margin,margin];}if(margin.length==2){margin=[margin[0],margin[1],margin[0],margin[1]];}// We can not use $slide width here, because it can have different diemensions while in transiton
canvasWidth=parseInt(self.$refs.stage.width(),10)-(margin[1]+margin[3]);canvasHeight=parseInt(self.$refs.stage.height(),10)-(margin[0]+margin[2]);minRatio=Math.min(1,canvasWidth/imgWidth,canvasHeight/imgHeight);width=Math.floor(minRatio*imgWidth);height=Math.floor(minRatio*imgHeight);// Use floor rounding to make sure it really fits
return{top:Math.floor((canvasHeight-height)*0.5)+margin[0],left:Math.floor((canvasWidth-width)*0.5)+margin[3],width:width,height:height};},// Update content size and position for all slides
// ==============================================
update:function update(){var self=this;$.each(self.slides,function(key,slide){self.updateSlide(slide);});},// Update slide content position and size
// ======================================
updateSlide:function updateSlide(slide,duration){var self=this,$what=slide&&slide.$content;if($what&&(slide.width||slide.height)){self.isAnimating=false;$.fancybox.stop($what);$.fancybox.setTranslate($what,self.getFitPos(slide));if(slide.pos===self.currPos){self.updateCursor();}}slide.$slide.trigger('refresh');self.trigger('onUpdate',slide);},// Horizontally center slide
// =========================
centerSlide:function centerSlide(slide,duration){var self=this,canvasWidth,pos;if(self.current){canvasWidth=Math.round(slide.$slide.width());pos=slide.pos-self.current.pos;$.fancybox.animate(slide.$slide,{top:0,left:pos*canvasWidth+pos*slide.opts.gutter,opacity:1},duration===undefined?0:duration,null,false);}},// Update cursor style depending if content can be zoomed
// ======================================================
updateCursor:function updateCursor(nextWidth,nextHeight){var self=this;var isScaledDown;var $container=self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');if(!self.current||self.isClosing){return;}if(self.isZoomable()){$container.addClass('fancybox-is-zoomable');if(nextWidth!==undefined&&nextHeight!==undefined){isScaledDown=nextWidth<self.current.width&&nextHeight<self.current.height;}else{isScaledDown=self.isScaledDown();}if(isScaledDown){// If image is scaled down, then, obviously, it can be zoomed to full size
$container.addClass('fancybox-can-zoomIn');}else{if(self.current.opts.touch){// If image size ir largen than available available and touch module is not disable,
// then user can do panning
$container.addClass('fancybox-can-drag');}else{$container.addClass('fancybox-can-zoomOut');}}}else if(self.current.opts.touch){$container.addClass('fancybox-can-drag');}},// Check if current slide is zoomable
// ==================================
isZoomable:function isZoomable(){var self=this;var current=self.current;var fitPos;if(!current||self.isClosing){return;}// Assume that slide is zoomable if
//   - image is loaded successfuly
//   - click action is "zoom"
//   - actual size of the image is smaller than available area
if(current.type==='image'&&current.isLoaded&&!current.hasError&&(current.opts.clickContent==='zoom'||$.isFunction(current.opts.clickContent)&&current.opts.clickContent(current)==="zoom")){fitPos=self.getFitPos(current);if(current.width>fitPos.width||current.height>fitPos.height){return true;}}return false;},// Check if current image dimensions are smaller than actual
// =========================================================
isScaledDown:function isScaledDown(){var self=this;var current=self.current;var $what=current.$content;var rez=false;if($what){rez=$.fancybox.getTranslate($what);rez=rez.width<current.width||rez.height<current.height;}return rez;},// Check if image dimensions exceed parent element
// ===============================================
canPan:function canPan(){var self=this;var current=self.current;var $what=current.$content;var rez=false;if($what){rez=self.getFitPos(current);rez=Math.abs($what.width()-rez.width)>1||Math.abs($what.height()-rez.height)>1;}return rez;},// Load content into the slide
// ===========================
loadSlide:function loadSlide(slide){var self=this,type,$slide;var ajaxLoad;if(slide.isLoading){return;}if(slide.isLoaded){return;}slide.isLoading=true;self.trigger('beforeLoad',slide);type=slide.type;$slide=slide.$slide;$slide.off('refresh').trigger('onReset').addClass('fancybox-slide--'+(type||'unknown')).addClass(slide.opts.slideClass);// Create content depending on the type
switch(type){case'image':self.setImage(slide);break;case'iframe':self.setIframe(slide);break;case'html':self.setContent(slide,slide.src||slide.content);break;case'inline':if($(slide.src).length){self.setContent(slide,$(slide.src));}else{self.setError(slide);}break;case'ajax':self.showLoading(slide);ajaxLoad=$.ajax($.extend({},slide.opts.ajax.settings,{url:slide.src,success:function success(data,textStatus){if(textStatus==='success'){self.setContent(slide,data);}},error:function error(jqXHR,textStatus){if(jqXHR&&textStatus!=='abort'){self.setError(slide);}}}));$slide.one('onReset',function(){ajaxLoad.abort();});break;case'video':self.setContent(slide,'<video controls>'+'<source src="'+slide.src+'" type="'+slide.opts.videoFormat+'">'+'Your browser doesn\'t support HTML5 video'+'</video>');break;default:self.setError(slide);break;}return true;},// Use thumbnail image, if possible
// ================================
setImage:function setImage(slide){var self=this;var srcset=slide.opts.srcset||slide.opts.image.srcset;var found,temp,pxRatio,windowWidth;// If we have "srcset", then we need to find matching "src" value.
// This is necessary, because when you set an src attribute, the browser will preload the image
// before any javascript or even CSS is applied.
if(srcset){pxRatio=window.devicePixelRatio||1;windowWidth=window.innerWidth*pxRatio;temp=srcset.split(',').map(function(el){var ret={};el.trim().split(/\s+/).forEach(function(el,i){var value=parseInt(el.substring(0,el.length-1),10);if(i===0){return ret.url=el;}if(value){ret.value=value;ret.postfix=el[el.length-1];}});return ret;});// Sort by value
temp.sort(function(a,b){return a.value-b.value;});// Ok, now we have an array of all srcset values
for(var j=0;j<temp.length;j++){var el=temp[j];if(el.postfix==='w'&&el.value>=windowWidth||el.postfix==='x'&&el.value>=pxRatio){found=el;break;}}// If not found, take the last one
if(!found&&temp.length){found=temp[temp.length-1];}if(found){slide.src=found.url;// If we have default width/height values, we can calculate height for matching source
if(slide.width&&slide.height&&found.postfix=='w'){slide.height=slide.width/slide.height*found.value;slide.width=found.value;}}}// This will be wrapper containing both ghost and actual image
slide.$content=$('<div class="fancybox-image-wrap"></div>').addClass('fancybox-is-hidden').appendTo(slide.$slide);// If we have a thumbnail, we can display it while actual image is loading
// Users will not stare at black screen and actual image will appear gradually
if(slide.opts.preload!==false&&slide.opts.width&&slide.opts.height&&(slide.opts.thumb||slide.opts.$thumb)){slide.width=slide.opts.width;slide.height=slide.opts.height;slide.$ghost=$('<img />').one('error',function(){$(this).remove();slide.$ghost=null;self.setBigImage(slide);}).one('load',function(){self.afterLoad(slide);self.setBigImage(slide);}).addClass('fancybox-image').appendTo(slide.$content).attr('src',slide.opts.thumb||slide.opts.$thumb.attr('src'));}else{self.setBigImage(slide);}},// Create full-size image
// ======================
setBigImage:function setBigImage(slide){var self=this;var $img=$('<img />');slide.$image=$img.one('error',function(){self.setError(slide);}).one('load',function(){// Clear timeout that checks if loading icon needs to be displayed
clearTimeout(slide.timouts);slide.timouts=null;if(self.isClosing){return;}slide.width=slide.opts.width||this.naturalWidth;slide.height=slide.opts.height||this.naturalHeight;if(slide.opts.image.srcset){$img.attr('sizes','100vw').attr('srcset',slide.opts.image.srcset);}self.hideLoading(slide);if(slide.$ghost){slide.timouts=setTimeout(function(){slide.timouts=null;slide.$ghost.hide();},Math.min(300,Math.max(1000,slide.height/1600)));}else{self.afterLoad(slide);}}).addClass('fancybox-image').attr('src',slide.src).appendTo(slide.$content);if(($img[0].complete||$img[0].readyState=="complete")&&$img[0].naturalWidth&&$img[0].naturalHeight){$img.trigger('load');}else if($img[0].error){$img.trigger('error');}else{slide.timouts=setTimeout(function(){if(!$img[0].complete&&!slide.hasError){self.showLoading(slide);}},100);}},// Create iframe wrapper, iframe and bindings
// ==========================================
setIframe:function setIframe(slide){var self=this,opts=slide.opts.iframe,$slide=slide.$slide,$iframe;slide.$content=$('<div class="fancybox-content'+(opts.preload?' fancybox-is-hidden':'')+'"></div>').css(opts.css).appendTo($slide);$iframe=$(opts.tpl.replace(/\{rnd\}/g,new Date().getTime())).attr(opts.attr).appendTo(slide.$content);if(opts.preload){self.showLoading(slide);// Unfortunately, it is not always possible to determine if iframe is successfully loaded
// (due to browser security policy)
$iframe.on('load.fb error.fb',function(e){this.isReady=1;slide.$slide.trigger('refresh');self.afterLoad(slide);});// Recalculate iframe content size
// ===============================
$slide.on('refresh.fb',function(){var $wrap=slide.$content,frameWidth=opts.css.width,frameHeight=opts.css.height,scrollWidth,$contents,$body;if($iframe[0].isReady!==1){return;}// Check if content is accessible,
// it will fail if frame is not with the same origin
try{$contents=$iframe.contents();$body=$contents.find('body');}catch(ignore){}// Calculate dimensions for the wrapper
if($body&&$body.length){if(frameWidth===undefined){scrollWidth=$iframe[0].contentWindow.document.documentElement.scrollWidth;frameWidth=Math.ceil($body.outerWidth(true)+($wrap.width()-scrollWidth));frameWidth+=$wrap.outerWidth()-$wrap.innerWidth();}if(frameHeight===undefined){frameHeight=Math.ceil($body.outerHeight(true));frameHeight+=$wrap.outerHeight()-$wrap.innerHeight();}// Resize wrapper to fit iframe content
if(frameWidth){$wrap.width(frameWidth);}if(frameHeight){$wrap.height(frameHeight);}}$wrap.removeClass('fancybox-is-hidden');});}else{this.afterLoad(slide);}$iframe.attr('src',slide.src);if(slide.opts.smallBtn===true){slide.$content.prepend(self.translate(slide,slide.opts.btnTpl.smallBtn));}// Remove iframe if closing or changing gallery item
$slide.one('onReset',function(){// This helps IE not to throw errors when closing
try{$(this).find('iframe').hide().attr('src','//about:blank');}catch(ignore){}$(this).empty();slide.isLoaded=false;});},// Wrap and append content to the slide
// ======================================
setContent:function setContent(slide,content){var self=this;if(self.isClosing){return;}self.hideLoading(slide);slide.$slide.empty();if(isQuery(content)&&content.parent().length){// If content is a jQuery object, then it will be moved to the slide.
// The placeholder is created so we will know where to put it back.
// If user is navigating gallery fast, then the content might be already inside fancyBox
// =====================================================================================
// Make sure content is not already moved to fancyBox
content.parent('.fancybox-slide--inline').trigger('onReset');// Create temporary element marking original place of the content
slide.$placeholder=$('<div></div>').hide().insertAfter(content);// Make sure content is visible
content.css('display','inline-block');}else if(!slide.hasError){// If content is just a plain text, try to convert it to html
if($.type(content)==='string'){content=$('<div>').append($.trim(content)).contents();// If we have text node, then add wrapping element to make vertical alignment work
if(content[0].nodeType===3){content=$('<div>').html(content);}}// If "filter" option is provided, then filter content
if(slide.opts.filter){content=$('<div>').html(content).find(slide.opts.filter);}}slide.$slide.one('onReset',function(){// Pause all html5 video/audio
$(this).find('video,audio').trigger('pause');// Put content back
if(slide.$placeholder){slide.$placeholder.after(content.hide()).remove();slide.$placeholder=null;}// Remove custom close button
if(slide.$smallBtn){slide.$smallBtn.remove();slide.$smallBtn=null;}// Remove content and mark slide as not loaded
if(!slide.hasError){$(this).empty();slide.isLoaded=false;}});slide.$content=$(content).appendTo(slide.$slide);this.afterLoad(slide);},// Display error message
// =====================
setError:function setError(slide){slide.hasError=true;slide.$slide.removeClass('fancybox-slide--'+slide.type);this.setContent(slide,this.translate(slide,slide.opts.errorTpl));},// Show loading icon inside the slide
// ==================================
showLoading:function showLoading(slide){var self=this;slide=slide||self.current;if(slide&&!slide.$spinner){slide.$spinner=$(self.opts.spinnerTpl).appendTo(slide.$slide);}},// Remove loading icon from the slide
// ==================================
hideLoading:function hideLoading(slide){var self=this;slide=slide||self.current;if(slide&&slide.$spinner){slide.$spinner.remove();delete slide.$spinner;}},// Adjustments after slide content has been loaded
// ===============================================
afterLoad:function afterLoad(slide){var self=this;if(self.isClosing){return;}slide.isLoading=false;slide.isLoaded=true;self.trigger('afterLoad',slide);self.hideLoading(slide);if(slide.opts.smallBtn&&!slide.$smallBtn){slide.$smallBtn=$(self.translate(slide,slide.opts.btnTpl.smallBtn)).appendTo(slide.$content.filter('div,form').first());}if(slide.opts.protect&&slide.$content&&!slide.hasError){// Disable right click
slide.$content.on('contextmenu.fb',function(e){if(e.button==2){e.preventDefault();}return true;});// Add fake element on top of the image
// This makes a bit harder for user to select image
if(slide.type==='image'){$('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);}}self.revealContent(slide);},// Make content visible
// This method is called right after content has been loaded or
// user navigates gallery and transition should start
// ============================================================
revealContent:function revealContent(slide){var self=this;var $slide=slide.$slide;var effect,effectClassName,duration,opacity,end,start=false;effect=slide.opts[self.firstRun?'animationEffect':'transitionEffect'];duration=slide.opts[self.firstRun?'animationDuration':'transitionDuration'];duration=parseInt(slide.forcedDuration===undefined?duration:slide.forcedDuration,10);if(slide.isMoved||slide.pos!==self.currPos||!duration){effect=false;}// Check if can zoom
if(effect==='zoom'&&!(slide.pos===self.currPos&&duration&&slide.type==='image'&&!slide.hasError&&(start=self.getThumbPos(slide)))){effect='fade';}// Zoom animation
// ==============
if(effect==='zoom'){end=self.getFitPos(slide);end.scaleX=end.width/start.width;end.scaleY=end.height/start.height;delete end.width;delete end.height;// Check if we need to animate opacity
opacity=slide.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(slide.width/slide.height-start.width/start.height)>0.1;}if(opacity){start.opacity=0.1;end.opacity=1;}// Draw image at start position
$.fancybox.setTranslate(slide.$content.removeClass('fancybox-is-hidden'),start);forceRedraw(slide.$content);// Start animation
$.fancybox.animate(slide.$content,end,duration,function(){self.complete();});return;}self.updateSlide(slide);// Simply show content
// ===================
if(!effect){forceRedraw($slide);slide.$content.removeClass('fancybox-is-hidden');if(slide.pos===self.currPos){self.complete();}return;}$.fancybox.stop($slide);effectClassName='fancybox-animated fancybox-slide--'+(slide.pos>=self.prevPos?'next':'previous')+' fancybox-fx-'+effect;$slide.removeAttr('style').removeClass('fancybox-slide--current fancybox-slide--next fancybox-slide--previous').addClass(effectClassName);slide.$content.removeClass('fancybox-is-hidden');//Force reflow for CSS3 transitions
forceRedraw($slide);$.fancybox.animate($slide,'fancybox-slide--current',duration,function(e){$slide.removeClass(effectClassName).removeAttr('style');if(slide.pos===self.currPos){self.complete();}},true);},// Check if we can and have to zoom from thumbnail
//================================================
getThumbPos:function getThumbPos(slide){var self=this;var rez=false;// Check if element is inside the viewport by at least 1 pixel
var isElementVisible=function isElementVisible($el){var element=$el[0];var elementRect=element.getBoundingClientRect();var parentRects=[];var visibleInAllParents;while(element.parentElement!==null){if($(element.parentElement).css('overflow')==='hidden'||$(element.parentElement).css('overflow')==='auto'){parentRects.push(element.parentElement.getBoundingClientRect());}element=element.parentElement;}visibleInAllParents=parentRects.every(function(parentRect){var visiblePixelX=Math.min(elementRect.right,parentRect.right)-Math.max(elementRect.left,parentRect.left);var visiblePixelY=Math.min(elementRect.bottom,parentRect.bottom)-Math.max(elementRect.top,parentRect.top);return visiblePixelX>0&&visiblePixelY>0;});return visibleInAllParents&&elementRect.bottom>0&&elementRect.right>0&&elementRect.left<$(window).width()&&elementRect.top<$(window).height();};var $thumb=slide.opts.$thumb;var thumbPos=$thumb?$thumb.offset():0;var slidePos;if(thumbPos&&$thumb[0].ownerDocument===document&&isElementVisible($thumb)){slidePos=self.$refs.stage.offset();rez={top:thumbPos.top-slidePos.top+parseFloat($thumb.css("border-top-width")||0),left:thumbPos.left-slidePos.left+parseFloat($thumb.css("border-left-width")||0),width:$thumb.width(),height:$thumb.height(),scaleX:1,scaleY:1};}return rez;},// Final adjustments after current gallery item is moved to position
// and it`s content is loaded
// ==================================================================
complete:function complete(){var self=this,current=self.current,slides={},promise;if(current.isMoved||!current.isLoaded||current.isComplete){return;}current.isComplete=true;current.$slide.siblings().trigger('onReset');self.preload('inline');// Trigger any CSS3 transiton inside the slide
forceRedraw(current.$slide);current.$slide.addClass('fancybox-slide--complete');// Remove unnecessary slides
$.each(self.slides,function(key,slide){if(slide.pos>=self.currPos-1&&slide.pos<=self.currPos+1){slides[slide.pos]=slide;}else if(slide){$.fancybox.stop(slide.$slide);slide.$slide.off().remove();}});self.slides=slides;self.updateCursor();self.trigger('afterShow');// Play first html5 video/audio
current.$slide.find('video,audio').first().trigger('play');// Try to focus on the first focusable element
if($(document.activeElement).is('[disabled]')||current.opts.autoFocus&&!(current.type=='image'||current.type==='iframe')){self.focus();}},// Preload next and previous slides
// ================================
preload:function preload(type){var self=this,next=self.slides[self.currPos+1],prev=self.slides[self.currPos-1];if(next&&next.type===type){self.loadSlide(next);}if(prev&&prev.type===type){self.loadSlide(prev);}},// Try to find and focus on the first focusable element
// ====================================================
focus:function focus(){var current=this.current;var $el;if(this.isClosing){return;}if(current&&current.isComplete){// Look for first input with autofocus attribute
$el=current.$slide.find('input[autofocus]:enabled:visible:first');if(!$el.length){$el=current.$slide.find('button,:input,[tabindex],a').filter(':enabled:visible:first');}}$el=$el&&$el.length?$el:this.$refs.container;$el.focus();},// Activates current instance - brings container to the front and enables keyboard,
// notifies other instances about deactivating
// =================================================================================
activate:function activate(){var self=this;// Deactivate all instances
$('.fancybox-container').each(function(){var instance=$(this).data('FancyBox');// Skip self and closing instances
if(instance&&instance.id!==self.id&&!instance.isClosing){instance.trigger('onDeactivate');instance.removeEvents();instance.isVisible=false;}});self.isVisible=true;if(self.current||self.isIdle){self.update();self.updateControls();}self.trigger('onActivate');self.addEvents();},// Start closing procedure
// This will start "zoom-out" animation if needed and clean everything up afterwards
// =================================================================================
close:function close(e,d){var self=this;var current=self.current;var effect,duration;var $what,opacity,start,end;var done=function done(){self.cleanUp(e);};if(self.isClosing){return false;}self.isClosing=true;// If beforeClose callback prevents closing, make sure content is centered
if(self.trigger('beforeClose',e)===false){self.isClosing=false;requestAFrame(function(){self.update();});return false;}// Remove all events
// If there are multiple instances, they will be set again by "activate" method
self.removeEvents();if(current.timouts){clearTimeout(current.timouts);}$what=current.$content;effect=current.opts.animationEffect;duration=$.isNumeric(d)?d:effect?current.opts.animationDuration:0;// Remove other slides
current.$slide.off(transitionEnd).removeClass('fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated');current.$slide.siblings().trigger('onReset').remove();// Trigger animations
if(duration){self.$refs.container.removeClass('fancybox-is-open').addClass('fancybox-is-closing');}// Clean up
self.hideLoading(current);self.hideControls();self.updateCursor();// Check if possible to zoom-out
if(effect==='zoom'&&!(e!==true&&$what&&duration&&current.type==='image'&&!current.hasError&&(end=self.getThumbPos(current)))){effect='fade';}if(effect==='zoom'){$.fancybox.stop($what);start=$.fancybox.getTranslate($what);start.width=start.width*start.scaleX;start.height=start.height*start.scaleY;// Check if we need to animate opacity
opacity=current.opts.zoomOpacity;if(opacity=='auto'){opacity=Math.abs(current.width/current.height-end.width/end.height)>0.1;}if(opacity){end.opacity=0;}start.scaleX=start.width/end.width;start.scaleY=start.height/end.height;start.width=end.width;start.height=end.height;$.fancybox.setTranslate(current.$content,start);forceRedraw(current.$content);$.fancybox.animate(current.$content,end,duration,done);return true;}if(effect&&duration){// If skip animation
if(e===true){setTimeout(done,duration);}else{$.fancybox.animate(current.$slide.removeClass('fancybox-slide--current'),'fancybox-animated fancybox-slide--previous fancybox-fx-'+effect,duration,done);}}else{done();}return true;},// Final adjustments after removing the instance
// =============================================
cleanUp:function cleanUp(e){var self=this,$body=$('body'),instance,offset;self.current.$slide.trigger('onReset');self.$refs.container.empty().remove();self.trigger('afterClose',e);// Place back focus
if(self.$lastFocus&&!!self.current.opts.backFocus){self.$lastFocus.focus();}self.current=null;// Check if there are other instances
instance=$.fancybox.getInstance();if(instance){instance.activate();}else{$W.scrollTop(self.scrollTop).scrollLeft(self.scrollLeft);$body.removeClass('fancybox-active compensate-for-scrollbar');if($body.hasClass('fancybox-iosfix')){offset=parseInt(document.body.style.top,10);$body.removeClass('fancybox-iosfix').css('top','').scrollTop(offset*-1);}$('#fancybox-style-noscroll').remove();}},// Call callback and trigger an event
// ==================================
trigger:function trigger(name,slide){var args=Array.prototype.slice.call(arguments,1),self=this,obj=slide&&slide.opts?slide:self.current,rez;if(obj){args.unshift(obj);}else{obj=self;}args.unshift(self);if($.isFunction(obj.opts[name])){rez=obj.opts[name].apply(obj,args);}if(rez===false){return rez;}if(name==='afterClose'||!self.$refs){$D.trigger(name+'.fb',args);}else{self.$refs.container.trigger(name+'.fb',args);}},// Update infobar values, navigation button states and reveal caption
// ==================================================================
updateControls:function updateControls(force){var self=this;var current=self.current,index=current.index,caption=current.opts.caption,$container=self.$refs.container,$caption=self.$refs.caption;// Recalculate content dimensions
current.$slide.trigger('refresh');self.$caption=caption&&caption.length?$caption.html(caption):null;if(!self.isHiddenControls&&!self.isIdle){self.showControls();}// Update info and navigation elements
$container.find('[data-fancybox-count]').html(self.group.length);$container.find('[data-fancybox-index]').html(index+1);$container.find('[data-fancybox-prev]').prop('disabled',!current.opts.loop&&index<=0);$container.find('[data-fancybox-next]').prop('disabled',!current.opts.loop&&index>=self.group.length-1);if(current.type==='image'){// Update download button source
$container.find('[data-fancybox-download]').attr('href',current.opts.image.src||current.src).show();}else{$container.find('[data-fancybox-download],[data-fancybox-zoom]').hide();}},// Hide toolbar and caption
// ========================
hideControls:function hideControls(){this.isHiddenControls=true;this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');},showControls:function showControls(){var self=this;var opts=self.current?self.current.opts:self.opts;var $container=self.$refs.container;self.isHiddenControls=false;self.idleSecondsCounter=0;$container.toggleClass('fancybox-show-toolbar',!!(opts.toolbar&&opts.buttons)).toggleClass('fancybox-show-infobar',!!(opts.infobar&&self.group.length>1)).toggleClass('fancybox-show-nav',!!(opts.arrows&&self.group.length>1)).toggleClass('fancybox-is-modal',!!opts.modal);if(self.$caption){$container.addClass('fancybox-show-caption ');}else{$container.removeClass('fancybox-show-caption');}},// Toggle toolbar and caption
// ==========================
toggleControls:function toggleControls(){if(this.isHiddenControls){this.showControls();}else{this.hideControls();}}});$.fancybox={version:"3.2.10",defaults:defaults,// Get current instance and execute a command.
//
// Examples of usage:
//
//   $instance = $.fancybox.getInstance();
//   $.fancybox.getInstance().jumpTo( 1 );
//   $.fancybox.getInstance( 'jumpTo', 1 );
//   $.fancybox.getInstance( function() {
//       console.info( this.currIndex );
//   });
// ======================================================
getInstance:function getInstance(command){var instance=$('.fancybox-container:not(".fancybox-is-closing"):last').data('FancyBox');var args=Array.prototype.slice.call(arguments,1);if(instance instanceof FancyBox){if($.type(command)==='string'){instance[command].apply(instance,args);}else if($.type(command)==='function'){command.apply(instance,args);}return instance;}return false;},// Create new instance
// ===================
open:function open(items,opts,index){return new FancyBox(items,opts,index);},// Close current or all instances
// ==============================
close:function close(all){var instance=this.getInstance();if(instance){instance.close();// Try to find and close next instance
if(all===true){this.close();}}},// Close instances and unbind all events
// ==============================
destroy:function destroy(){this.close(true);$D.off('click.fb-start');},// Try to detect mobile devices
// ============================
isMobile:document.createTouch!==undefined&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),// Detect if 'translate3d' support is available
// ============================================
use3d:function(){var div=document.createElement('div');return window.getComputedStyle&&window.getComputedStyle(div).getPropertyValue('transform')&&!(document.documentMode&&document.documentMode<11);}(),// Helper function to get current visual state of an element
// returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
// =====================================================================
getTranslate:function getTranslate($el){var matrix;if(!$el||!$el.length){return false;}matrix=$el.eq(0).css('transform');if(matrix&&matrix.indexOf('matrix')!==-1){matrix=matrix.split('(')[1];matrix=matrix.split(')')[0];matrix=matrix.split(',');}else{matrix=[];}if(matrix.length){// If IE
if(matrix.length>10){matrix=[matrix[13],matrix[12],matrix[0],matrix[5]];}else{matrix=[matrix[5],matrix[4],matrix[0],matrix[3]];}matrix=matrix.map(parseFloat);}else{matrix=[0,0,1,1];var transRegex=/\.*translate\((.*)px,(.*)px\)/i;var transRez=transRegex.exec($el.eq(0).attr('style'));if(transRez){matrix[0]=parseFloat(transRez[2]);matrix[1]=parseFloat(transRez[1]);}}return{top:matrix[0],left:matrix[1],scaleX:matrix[2],scaleY:matrix[3],opacity:parseFloat($el.css('opacity')),width:$el.width(),height:$el.height()};},// Shortcut for setting "translate3d" properties for element
// Can set be used to set opacity, too
// ========================================================
setTranslate:function setTranslate($el,props){var str='';var css={};if(!$el||!props){return;}if(props.left!==undefined||props.top!==undefined){str=(props.left===undefined?$el.position().left:props.left)+'px, '+(props.top===undefined?$el.position().top:props.top)+'px';if(this.use3d){str='translate3d('+str+', 0px)';}else{str='translate('+str+')';}}if(props.scaleX!==undefined&&props.scaleY!==undefined){str=(str.length?str+' ':'')+'scale('+props.scaleX+', '+props.scaleY+')';}if(str.length){css.transform=str;}if(props.opacity!==undefined){css.opacity=props.opacity;}if(props.width!==undefined){css.width=props.width;}if(props.height!==undefined){css.height=props.height;}return $el.css(css);},// Simple CSS transition handler
// =============================
animate:function animate($el,to,duration,callback,leaveAnimationName){if($.isFunction(duration)){callback=duration;duration=null;}if(!$.isPlainObject(to)){$el.removeAttr('style');}$el.on(transitionEnd,function(e){// Skip events from child elements and z-index change
if(e&&e.originalEvent&&(!$el.is(e.originalEvent.target)||e.originalEvent.propertyName=='z-index')){return;}$.fancybox.stop($el);if($.isPlainObject(to)){if(to.scaleX!==undefined&&to.scaleY!==undefined){$el.css('transition-duration','');to.width=Math.round($el.width()*to.scaleX);to.height=Math.round($el.height()*to.scaleY);to.scaleX=1;to.scaleY=1;$.fancybox.setTranslate($el,to);}if(leaveAnimationName===false){$el.removeAttr('style');}}else if(leaveAnimationName!==true){$el.removeClass(to);}if($.isFunction(callback)){callback(e);}});if($.isNumeric(duration)){$el.css('transition-duration',duration+'ms');}if($.isPlainObject(to)){$.fancybox.setTranslate($el,to);}else{$el.addClass(to);}if(to.scaleX&&$el.hasClass('fancybox-image-wrap')){$el.parent().addClass('fancybox-is-scaling');}// Make sure that `transitionend` callback gets fired
$el.data("timer",setTimeout(function(){$el.trigger('transitionend');},duration+16));},stop:function stop($el){clearTimeout($el.data("timer"));$el.off('transitionend').css('transition-duration','');if($el.hasClass('fancybox-image-wrap')){$el.parent().removeClass('fancybox-is-scaling');}}};// Default click handler for "fancyboxed" links
// ============================================
function _run(e){var $target=$(e.currentTarget),opts=e.data?e.data.options:{},value=$target.attr('data-fancybox')||'',index=0,items=[];// Avoid opening multiple times
if(e.isDefaultPrevented()){return;}e.preventDefault();// Get all related items and find index for clicked one
if(value){items=opts.selector?$(opts.selector):e.data?e.data.items:[];items=items.length?items.filter('[data-fancybox="'+value+'"]'):$('[data-fancybox="'+value+'"]');index=items.index($target);// Sometimes current item can not be found
// (for example, when slider clones items)
if(index<0){index=0;}}else{items=[$target];}$.fancybox.open(items,opts,index);}// Create a jQuery plugin
// ======================
$.fn.fancybox=function(options){var selector;options=options||{};selector=options.selector||false;if(selector){$('body').off('click.fb-start',selector).on('click.fb-start',selector,{options:options},_run);}else{this.off('click.fb-start').on('click.fb-start',{items:this,options:options},_run);}return this;};// Self initializing plugin
// ========================
$D.on('click.fb-start','[data-fancybox]',_run);})(window,document,window.jQuery||jQuery);// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
;(function($){'use strict';// Formats matching url to final form
var format=function format(url,rez,params){if(!url){return;}params=params||'';if($.type(params)==="object"){params=$.param(params,true);}$.each(rez,function(key,value){url=url.replace('$'+key,value||'');});if(params.length){url+=(url.indexOf('?')>0?'&':'?')+params;}return url;};// Object containing properties for each media type
var defaults={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:'transparent',enablejsapi:1,html5:1},paramPlace:8,type:'iframe',url:'//www.youtube.com/embed/$4',thumb:'//img.youtube.com/vi/$4/hqdefault.jpg'},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:'iframe',url:'//player.vimeo.com/video/$2'},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:'iframe',url:'//www.metacafe.com/embed/$1/?ap=1'},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:'iframe',url:'//www.dailymotion.com/embed/video/$1'},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:'iframe',url:'//vine.co/v/$1/embed/simple'},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:'image',url:'//$1/p/$2/media/?size=l'},// Examples:
// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
// https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
// https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:'iframe',url:function url(rez){return'//maps.google.'+rez[2]+'/?ll='+(rez[9]?rez[9]+'&z='+Math.floor(rez[10])+(rez[12]?rez[12].replace(/^\//,"&"):''):rez[12])+'&output='+(rez[12]&&rez[12].indexOf('layer=c')>0?'svembed':'embed');}},// Examples:
// https://www.google.com/maps/search/Empire+State+Building/
// https://www.google.com/maps/search/?api=1&query=centurylink+field
// https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:'iframe',url:function url(rez){return'//maps.google.'+rez[2]+'/maps?q='+rez[5].replace('query=','q=').replace('api=1','')+'&output=embed';}}};$(document).on('objectNeedsType.fb',function(e,instance,item){var url=item.src||'',type=false,media,thumb,rez,params,urlParams,paramObj,provider;media=$.extend(true,{},defaults,item.opts.media);// Look for any matching media type
$.each(media,function(providerName,providerOpts){rez=url.match(providerOpts.matcher);if(!rez){return;}type=providerOpts.type;paramObj={};if(providerOpts.paramPlace&&rez[providerOpts.paramPlace]){urlParams=rez[providerOpts.paramPlace];if(urlParams[0]=='?'){urlParams=urlParams.substring(1);}urlParams=urlParams.split('&');for(var m=0;m<urlParams.length;++m){var p=urlParams[m].split('=',2);if(p.length==2){paramObj[p[0]]=decodeURIComponent(p[1].replace(/\+/g," "));}}}params=$.extend(true,{},providerOpts.params,item.opts[providerName],paramObj);url=$.type(providerOpts.url)==="function"?providerOpts.url.call(this,rez,params,item):format(providerOpts.url,rez,params);thumb=$.type(providerOpts.thumb)==="function"?providerOpts.thumb.call(this,rez,params,item):format(providerOpts.thumb,rez);if(providerName==='vimeo'){url=url.replace('&%23','#');}return false;});// If it is found, then change content type and update the url
if(type){item.src=url;item.type=type;if(!item.opts.thumb&&!(item.opts.$thumb&&item.opts.$thumb.length)){item.opts.thumb=thumb;}if(type==='iframe'){$.extend(true,item.opts,{iframe:{preload:false,attr:{scrolling:"no"}}});item.contentProvider=provider;item.opts.slideClass+=' fancybox-slide--'+(provider=='gmap_place'||provider=='gmap_search'?'map':'video');}}else if(url){item.type=item.opts.defaultType;}});})(window.jQuery||jQuery);// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
;(function(window,document,$){'use strict';var requestAFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||// if all else fails, use setTimeout
function(callback){return window.setTimeout(callback,1000/60);};}();var cancelAFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(id){window.clearTimeout(id);};}();var pointers=function pointers(e){var result=[];e=e.originalEvent||e||window.e;e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var key in e){if(e[key].pageX){result.push({x:e[key].pageX,y:e[key].pageY});}else if(e[key].clientX){result.push({x:e[key].clientX,y:e[key].clientY});}}return result;};var distance=function distance(point2,point1,what){if(!point1||!point2){return 0;}if(what==='x'){return point2.x-point1.x;}else if(what==='y'){return point2.y-point1.y;}return Math.sqrt(Math.pow(point2.x-point1.x,2)+Math.pow(point2.y-point1.y,2));};var isClickable=function isClickable($el){if($el.is('a,area,button,[role="button"],input,label,select,summary,textarea')||$.isFunction($el.get(0).onclick)||$el.data('selectable')){return true;}// Check for attributes like data-fancybox-next or data-fancybox-close
for(var i=0,atts=$el[0].attributes,n=atts.length;i<n;i++){if(atts[i].nodeName.substr(0,14)==='data-fancybox-'){return true;}}return false;};var hasScrollbars=function hasScrollbars(el){var overflowY=window.getComputedStyle(el)['overflow-y'];var overflowX=window.getComputedStyle(el)['overflow-x'];var vertical=(overflowY==='scroll'||overflowY==='auto')&&el.scrollHeight>el.clientHeight;var horizontal=(overflowX==='scroll'||overflowX==='auto')&&el.scrollWidth>el.clientWidth;return vertical||horizontal;};var isScrollable=function isScrollable($el){var rez=false;while(true){rez=hasScrollbars($el.get(0));if(rez){break;}$el=$el.parent();if(!$el.length||$el.hasClass('fancybox-stage')||$el.is('body')){break;}}return rez;};var Guestures=function Guestures(instance){var self=this;self.instance=instance;self.$bg=instance.$refs.bg;self.$stage=instance.$refs.stage;self.$container=instance.$refs.container;self.destroy();self.$container.on('touchstart.fb.touch mousedown.fb.touch',$.proxy(self,'ontouchstart'));};Guestures.prototype.destroy=function(){this.$container.off('.fb.touch');};Guestures.prototype.ontouchstart=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var $content=current.$content;var isTouchDevice=e.type=='touchstart';// Do not respond to both (touch and mouse) events
if(isTouchDevice){self.$container.off('mousedown.fb.touch');}// Ignore right click
if(e.originalEvent&&e.originalEvent.button==2){return;}// Ignore taping on links, buttons, input elements
if(!$target.length||isClickable($target)||isClickable($target.parent())){return;}// Ignore clicks on the scrollbar
if(!$target.is('img')&&e.originalEvent.clientX>$target[0].clientWidth+$target.offset().left){return;}// Ignore clicks while zooming or closing
if(!current||self.instance.isAnimating||self.instance.isClosing){e.stopPropagation();e.preventDefault();return;}self.realPoints=self.startPoints=pointers(e);if(!self.startPoints){return;}e.stopPropagation();self.startEvent=e;self.canTap=true;self.$target=$target;self.$content=$content;self.opts=current.opts.touch;self.isPanning=false;self.isSwiping=false;self.isZooming=false;self.isScrolling=false;self.sliderStartPos=self.sliderLastPos||{top:0,left:0};self.contentStartPos=$.fancybox.getTranslate(self.$content);self.contentLastPos=null;self.startTime=new Date().getTime();self.distanceX=self.distanceY=self.distance=0;self.canvasWidth=Math.round(current.$slide[0].clientWidth);self.canvasHeight=Math.round(current.$slide[0].clientHeight);$(document).off('.fb.touch').on(isTouchDevice?'touchend.fb.touch touchcancel.fb.touch':'mouseup.fb.touch mouseleave.fb.touch',$.proxy(self,"ontouchend")).on(isTouchDevice?'touchmove.fb.touch':'mousemove.fb.touch',$.proxy(self,"ontouchmove"));if($.fancybox.isMobile){document.addEventListener('scroll',self.onscroll,true);}if(!(self.opts||instance.canPan())||!($target.is(self.$stage)||self.$stage.find($target).length)){// Prevent image ghosting while dragging
if($target.is('img')){e.preventDefault();}return;}if(!($.fancybox.isMobile&&(isScrollable($target)||isScrollable($target.parent())))){e.preventDefault();}if(self.startPoints.length===1){if(current.type==='image'&&(self.contentStartPos.width>self.canvasWidth+1||self.contentStartPos.height>self.canvasHeight+1)){$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.isPanning=true;}else{self.isSwiping=true;}self.$container.addClass('fancybox-controls--isGrabbing');}if(self.startPoints.length===2&&!instance.isAnimating&&!current.hasError&&current.type==='image'&&(current.isLoaded||current.$ghost)){self.canTap=false;self.isSwiping=false;self.isPanning=false;self.isZooming=true;$.fancybox.stop(self.$content);self.$content.css('transition-duration','');self.centerPointStartX=(self.startPoints[0].x+self.startPoints[1].x)*0.5-$(window).scrollLeft();self.centerPointStartY=(self.startPoints[0].y+self.startPoints[1].y)*0.5-$(window).scrollTop();self.percentageOfImageAtPinchPointX=(self.centerPointStartX-self.contentStartPos.left)/self.contentStartPos.width;self.percentageOfImageAtPinchPointY=(self.centerPointStartY-self.contentStartPos.top)/self.contentStartPos.height;self.startDistanceBetweenFingers=distance(self.startPoints[0],self.startPoints[1]);}};Guestures.prototype.onscroll=function(e){self.isScrolling=true;};Guestures.prototype.ontouchmove=function(e){var self=this,$target=$(e.target);if(self.isScrolling||!($target.is(self.$stage)||self.$stage.find($target).length)){self.canTap=false;return;}self.newPoints=pointers(e);if(!(self.opts||self.instance.canPan())||!self.newPoints||!self.newPoints.length){return;}if(!(self.isSwiping&&self.isSwiping===true)){e.preventDefault();}self.distanceX=distance(self.newPoints[0],self.startPoints[0],'x');self.distanceY=distance(self.newPoints[0],self.startPoints[0],'y');self.distance=distance(self.newPoints[0],self.startPoints[0]);// Skip false ontouchmove events (Chrome)
if(self.distance>0){if(self.isSwiping){self.onSwipe(e);}else if(self.isPanning){self.onPan();}else if(self.isZooming){self.onZoom();}}};Guestures.prototype.onSwipe=function(e){var self=this,swiping=self.isSwiping,left=self.sliderStartPos.left||0,angle;// If direction is not yet determined
if(swiping===true){// We need at least 10px distance to correctly calculate an angle
if(Math.abs(self.distance)>10){self.canTap=false;if(self.instance.group.length<2&&self.opts.vertical){self.isSwiping='y';}else if(self.instance.isDragging||self.opts.vertical===false||self.opts.vertical==='auto'&&$(window).width()>800){self.isSwiping='x';}else{angle=Math.abs(Math.atan2(self.distanceY,self.distanceX)*180/Math.PI);self.isSwiping=angle>45&&angle<135?'y':'x';}self.canTap=false;if(self.isSwiping==='y'&&$.fancybox.isMobile&&(isScrollable(self.$target)||isScrollable(self.$target.parent()))){self.isScrolling=true;return;}self.instance.isDragging=self.isSwiping;// Reset points to avoid jumping, because we dropped first swipes to calculate the angle
self.startPoints=self.newPoints;$.each(self.instance.slides,function(index,slide){$.fancybox.stop(slide.$slide);slide.$slide.css('transition-duration','');slide.inTransition=false;if(slide.pos===self.instance.current.pos){self.sliderStartPos.left=$.fancybox.getTranslate(slide.$slide).left;}});// Stop slideshow
if(self.instance.SlideShow&&self.instance.SlideShow.isActive){self.instance.SlideShow.stop();}}return;}// Sticky edges
if(swiping=='x'){if(self.distanceX>0&&(self.instance.group.length<2||self.instance.current.index===0&&!self.instance.current.opts.loop)){left=left+Math.pow(self.distanceX,0.8);}else if(self.distanceX<0&&(self.instance.group.length<2||self.instance.current.index===self.instance.group.length-1&&!self.instance.current.opts.loop)){left=left-Math.pow(-self.distanceX,0.8);}else{left=left+self.distanceX;}}self.sliderLastPos={top:swiping=='x'?0:self.sliderStartPos.top+self.distanceY,left:left};if(self.requestId){cancelAFrame(self.requestId);self.requestId=null;}self.requestId=requestAFrame(function(){if(self.sliderLastPos){$.each(self.instance.slides,function(index,slide){var pos=slide.pos-self.instance.currPos;$.fancybox.setTranslate(slide.$slide,{top:self.sliderLastPos.top,left:self.sliderLastPos.left+pos*self.canvasWidth+pos*slide.opts.gutter});});self.$container.addClass('fancybox-is-sliding');}});};Guestures.prototype.onPan=function(){var self=this;// Sometimes, when tapping causally, image can move a bit and that breaks double tapping
if(distance(self.newPoints[0],self.realPoints[0])<($.fancybox.isMobile?10:5)){self.startPoints=self.newPoints;return;}self.canTap=false;self.contentLastPos=self.limitMovement();if(self.requestId){cancelAFrame(self.requestId);self.requestId=null;}self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos);});};// Make panning sticky to the edges
Guestures.prototype.limitMovement=function(){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;var distanceX=self.distanceX;var distanceY=self.distanceY;var contentStartPos=self.contentStartPos;var currentOffsetX=contentStartPos.left;var currentOffsetY=contentStartPos.top;var currentWidth=contentStartPos.width;var currentHeight=contentStartPos.height;var minTranslateX,minTranslateY,maxTranslateX,maxTranslateY,newOffsetX,newOffsetY;if(currentWidth>canvasWidth){newOffsetX=currentOffsetX+distanceX;}else{newOffsetX=currentOffsetX;}newOffsetY=currentOffsetY+distanceY;// Slow down proportionally to traveled distance
minTranslateX=Math.max(0,canvasWidth*0.5-currentWidth*0.5);minTranslateY=Math.max(0,canvasHeight*0.5-currentHeight*0.5);maxTranslateX=Math.min(canvasWidth-currentWidth,canvasWidth*0.5-currentWidth*0.5);maxTranslateY=Math.min(canvasHeight-currentHeight,canvasHeight*0.5-currentHeight*0.5);if(currentWidth>canvasWidth){//   ->
if(distanceX>0&&newOffsetX>minTranslateX){newOffsetX=minTranslateX-1+Math.pow(-minTranslateX+currentOffsetX+distanceX,0.8)||0;}//    <-
if(distanceX<0&&newOffsetX<maxTranslateX){newOffsetX=maxTranslateX+1-Math.pow(maxTranslateX-currentOffsetX-distanceX,0.8)||0;}}if(currentHeight>canvasHeight){//   \/
if(distanceY>0&&newOffsetY>minTranslateY){newOffsetY=minTranslateY-1+Math.pow(-minTranslateY+currentOffsetY+distanceY,0.8)||0;}//   /\
if(distanceY<0&&newOffsetY<maxTranslateY){newOffsetY=maxTranslateY+1-Math.pow(maxTranslateY-currentOffsetY-distanceY,0.8)||0;}}return{top:newOffsetY,left:newOffsetX,scaleX:contentStartPos.scaleX,scaleY:contentStartPos.scaleY};};Guestures.prototype.limitPosition=function(newOffsetX,newOffsetY,newWidth,newHeight){var self=this;var canvasWidth=self.canvasWidth;var canvasHeight=self.canvasHeight;if(newWidth>canvasWidth){newOffsetX=newOffsetX>0?0:newOffsetX;newOffsetX=newOffsetX<canvasWidth-newWidth?canvasWidth-newWidth:newOffsetX;}else{// Center horizontally
newOffsetX=Math.max(0,canvasWidth/2-newWidth/2);}if(newHeight>canvasHeight){newOffsetY=newOffsetY>0?0:newOffsetY;newOffsetY=newOffsetY<canvasHeight-newHeight?canvasHeight-newHeight:newOffsetY;}else{// Center vertically
newOffsetY=Math.max(0,canvasHeight/2-newHeight/2);}return{top:newOffsetY,left:newOffsetX};};Guestures.prototype.onZoom=function(){var self=this;// Calculate current distance between points to get pinch ratio and new width and height
var currentWidth=self.contentStartPos.width;var currentHeight=self.contentStartPos.height;var currentOffsetX=self.contentStartPos.left;var currentOffsetY=self.contentStartPos.top;var endDistanceBetweenFingers=distance(self.newPoints[0],self.newPoints[1]);var pinchRatio=endDistanceBetweenFingers/self.startDistanceBetweenFingers;var newWidth=Math.floor(currentWidth*pinchRatio);var newHeight=Math.floor(currentHeight*pinchRatio);// This is the translation due to pinch-zooming
var translateFromZoomingX=(currentWidth-newWidth)*self.percentageOfImageAtPinchPointX;var translateFromZoomingY=(currentHeight-newHeight)*self.percentageOfImageAtPinchPointY;//Point between the two touches
var centerPointEndX=(self.newPoints[0].x+self.newPoints[1].x)/2-$(window).scrollLeft();var centerPointEndY=(self.newPoints[0].y+self.newPoints[1].y)/2-$(window).scrollTop();// And this is the translation due to translation of the centerpoint
// between the two fingers
var translateFromTranslatingX=centerPointEndX-self.centerPointStartX;var translateFromTranslatingY=centerPointEndY-self.centerPointStartY;// The new offset is the old/current one plus the total translation
var newOffsetX=currentOffsetX+(translateFromZoomingX+translateFromTranslatingX);var newOffsetY=currentOffsetY+(translateFromZoomingY+translateFromTranslatingY);var newPos={top:newOffsetY,left:newOffsetX,scaleX:self.contentStartPos.scaleX*pinchRatio,scaleY:self.contentStartPos.scaleY*pinchRatio};self.canTap=false;self.newWidth=newWidth;self.newHeight=newHeight;self.contentLastPos=newPos;if(self.requestId){cancelAFrame(self.requestId);self.requestId=null;}self.requestId=requestAFrame(function(){$.fancybox.setTranslate(self.$content,self.contentLastPos);});};Guestures.prototype.ontouchend=function(e){var self=this;var dMs=Math.max(new Date().getTime()-self.startTime,1);var swiping=self.isSwiping;var panning=self.isPanning;var zooming=self.isZooming;var scrolling=self.isScrolling;self.endPoints=pointers(e);self.$container.removeClass('fancybox-controls--isGrabbing');$(document).off('.fb.touch');document.removeEventListener('scroll',self.onscroll,true);if(self.requestId){cancelAFrame(self.requestId);self.requestId=null;}self.isSwiping=false;self.isPanning=false;self.isZooming=false;self.isScrolling=false;self.instance.isDragging=false;if(self.canTap){return self.onTap(e);}self.speed=366;// Speed in px/ms
self.velocityX=self.distanceX/dMs*0.5;self.velocityY=self.distanceY/dMs*0.5;self.speedX=Math.max(self.speed*0.5,Math.min(self.speed*1.5,1/Math.abs(self.velocityX)*self.speed));if(panning){self.endPanning();}else if(zooming){self.endZooming();}else{self.endSwiping(swiping,scrolling);}return;};Guestures.prototype.endSwiping=function(swiping,scrolling){var self=this,ret=false,len=self.instance.group.length;self.sliderLastPos=null;// Close if swiped vertically / navigate if horizontally
if(swiping=='y'&&!scrolling&&Math.abs(self.distanceY)>50){// Continue vertical movement
$.fancybox.animate(self.instance.current.$slide,{top:self.sliderStartPos.top+self.distanceY+self.velocityY*150,opacity:0},150);ret=self.instance.close(true,300);}else if(swiping=='x'&&self.distanceX>50&&len>1){ret=self.instance.previous(self.speedX);}else if(swiping=='x'&&self.distanceX<-50&&len>1){ret=self.instance.next(self.speedX);}if(ret===false&&(swiping=='x'||swiping=='y')){if(scrolling||len<2){self.instance.centerSlide(self.instance.current,150);}else{self.instance.jumpTo(self.instance.current.index);}}self.$container.removeClass('fancybox-is-sliding');};// Limit panning from edges
// ========================
Guestures.prototype.endPanning=function(){var self=this;var newOffsetX,newOffsetY,newPos;if(!self.contentLastPos){return;}if(self.opts.momentum===false){newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top;}else{// Continue movement
newOffsetX=self.contentLastPos.left+self.velocityX*self.speed;newOffsetY=self.contentLastPos.top+self.velocityY*self.speed;}newPos=self.limitPosition(newOffsetX,newOffsetY,self.contentStartPos.width,self.contentStartPos.height);newPos.width=self.contentStartPos.width;newPos.height=self.contentStartPos.height;$.fancybox.animate(self.$content,newPos,330);};Guestures.prototype.endZooming=function(){var self=this;var current=self.instance.current;var newOffsetX,newOffsetY,newPos,reset;var newWidth=self.newWidth;var newHeight=self.newHeight;if(!self.contentLastPos){return;}newOffsetX=self.contentLastPos.left;newOffsetY=self.contentLastPos.top;reset={top:newOffsetY,left:newOffsetX,width:newWidth,height:newHeight,scaleX:1,scaleY:1};// Reset scalex/scaleY values; this helps for perfomance and does not break animation
$.fancybox.setTranslate(self.$content,reset);if(newWidth<self.canvasWidth&&newHeight<self.canvasHeight){self.instance.scaleToFit(150);}else if(newWidth>current.width||newHeight>current.height){self.instance.scaleToActual(self.centerPointStartX,self.centerPointStartY,150);}else{newPos=self.limitPosition(newOffsetX,newOffsetY,newWidth,newHeight);// Switch from scale() to width/height or animation will not work correctly
$.fancybox.setTranslate(self.content,$.fancybox.getTranslate(self.$content));$.fancybox.animate(self.$content,newPos,150);}};Guestures.prototype.onTap=function(e){var self=this;var $target=$(e.target);var instance=self.instance;var current=instance.current;var endPoints=e&&pointers(e)||self.startPoints;var tapX=endPoints[0]?endPoints[0].x-self.$stage.offset().left:0;var tapY=endPoints[0]?endPoints[0].y-self.$stage.offset().top:0;var where;var process=function process(prefix){var action=current.opts[prefix];if($.isFunction(action)){action=action.apply(instance,[current,e]);}if(!action){return;}switch(action){case"close":instance.close(self.startEvent);break;case"toggleControls":instance.toggleControls(true);break;case"next":instance.next();break;case"nextOrClose":if(instance.group.length>1){instance.next();}else{instance.close(self.startEvent);}break;case"zoom":if(current.type=='image'&&(current.isLoaded||current.$ghost)){if(instance.canPan()){instance.scaleToFit();}else if(instance.isScaledDown()){instance.scaleToActual(tapX,tapY);}else if(instance.group.length<2){instance.close(self.startEvent);}}break;}};// Ignore right click
if(e.originalEvent&&e.originalEvent.button==2){return;}// Skip if clicked on the scrollbar
if(!$target.is('img')&&tapX>$target[0].clientWidth+$target.offset().left){return;}// Check where is clicked
if($target.is('.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container')){where='Outside';}else if($target.is('.fancybox-slide')){where='Slide';}else if(instance.current.$content&&instance.current.$content.find($target).addBack().filter($target).length){where='Content';}else{return;}// Check if this is a double tap
if(self.tapped){// Stop previously created single tap
clearTimeout(self.tapped);self.tapped=null;// Skip if distance between taps is too big
if(Math.abs(tapX-self.tapX)>50||Math.abs(tapY-self.tapY)>50){return this;}// OK, now we assume that this is a double-tap
process('dblclick'+where);}else{// Single tap will be processed if user has not clicked second time within 300ms
// or there is no need to wait for double-tap
self.tapX=tapX;self.tapY=tapY;if(current.opts['dblclick'+where]&&current.opts['dblclick'+where]!==current.opts['click'+where]){self.tapped=setTimeout(function(){self.tapped=null;process('click'+where);},500);}else{process('click'+where);}}return this;};$(document).on('onActivate.fb',function(e,instance){if(instance&&!instance.Guestures){instance.Guestures=new Guestures(instance);}});})(window,document,window.jQuery||jQuery);// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
;(function(document,$){'use strict';$.extend(true,$.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M13,12 L27,20 L13,27 Z" />'+'<path d="M15,10 v19 M23,10 v19" />'+'</svg>'+'</button>'},slideShow:{autoStart:false,speed:3000}});var SlideShow=function SlideShow(instance){this.instance=instance;this.init();};$.extend(SlideShow.prototype,{timer:null,isActive:false,$button:null,init:function init(){var self=this;self.$button=self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click',function(){self.toggle();});if(self.instance.group.length<2||!self.instance.group[self.instance.currIndex].opts.slideShow){self.$button.hide();}},set:function set(force){var self=this;// Check if reached last element
if(self.instance&&self.instance.current&&(force===true||self.instance.current.opts.loop||self.instance.currIndex<self.instance.group.length-1)){self.timer=setTimeout(function(){if(self.isActive){self.instance.jumpTo((self.instance.currIndex+1)%self.instance.group.length);}},self.instance.current.opts.slideShow.speed);}else{self.stop();self.instance.idleSecondsCounter=0;self.instance.showControls();}},clear:function clear(){var self=this;clearTimeout(self.timer);self.timer=null;},start:function start(){var self=this;var current=self.instance.current;if(current){self.isActive=true;self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_STOP).removeClass('fancybox-button--play').addClass('fancybox-button--pause');self.set(true);}},stop:function stop(){var self=this;var current=self.instance.current;self.clear();self.$button.attr('title',current.opts.i18n[current.opts.lang].PLAY_START).removeClass('fancybox-button--pause').addClass('fancybox-button--play');self.isActive=false;},toggle:function toggle(){var self=this;if(self.isActive){self.stop();}else{self.start();}}});$(document).on({'onInit.fb':function onInitFb(e,instance){if(instance&&!instance.SlideShow){instance.SlideShow=new SlideShow(instance);}},'beforeShow.fb':function beforeShowFb(e,instance,current,firstRun){var SlideShow=instance&&instance.SlideShow;if(firstRun){if(SlideShow&&current.opts.slideShow.autoStart){SlideShow.start();}}else if(SlideShow&&SlideShow.isActive){SlideShow.clear();}},'afterShow.fb':function afterShowFb(e,instance,current){var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){SlideShow.set();}},'afterKeydown.fb':function afterKeydownFb(e,instance,current,keypress,keycode){var SlideShow=instance&&instance.SlideShow;// "P" or Spacebar
if(SlideShow&&current.opts.slideShow&&(keycode===80||keycode===32)&&!$(document.activeElement).is('button,a,input')){keypress.preventDefault();SlideShow.toggle();}},'beforeClose.fb onDeactivate.fb':function beforeCloseFbOnDeactivateFb(e,instance){var SlideShow=instance&&instance.SlideShow;if(SlideShow){SlideShow.stop();}}});// Page Visibility API to pause slideshow when window is not active
$(document).on("visibilitychange",function(){var instance=$.fancybox.getInstance();var SlideShow=instance&&instance.SlideShow;if(SlideShow&&SlideShow.isActive){if(document.hidden){SlideShow.clear();}else{SlideShow.set();}}});})(document,window.jQuery||jQuery);// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
;(function(document,$){'use strict';// Collection of methods supported by user browser
var fn=function(){var fnMap=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],// new WebKit
['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],// old WebKit (Safari 5.1)
['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']];var val;var ret={};var i,j;for(i=0;i<fnMap.length;i++){val=fnMap[i];if(val&&val[1]in document){for(j=0;j<val.length;j++){ret[fnMap[0][j]]=val[j];}return ret;}}return false;}();// If browser does not have Full Screen API, then simply unset default button template and stop
if(!fn){if($&&$.fancybox){$.fancybox.defaults.btnTpl.fullScreen=false;}return;}var FullScreen={request:function request(elem){elem=elem||document.documentElement;elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);},exit:function exit(){document[fn.exitFullscreen]();},toggle:function toggle(elem){elem=elem||document.documentElement;if(this.isFullscreen()){this.exit();}else{this.request(elem);}},isFullscreen:function isFullscreen(){return Boolean(document[fn.fullscreenElement]);},enabled:function enabled(){return Boolean(document[fn.fullscreenEnabled]);}};$.extend(true,$.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />'+'</svg>'+'</button>'},fullScreen:{autoStart:false}});$(document).on({'onInit.fb':function onInitFb(e,instance){var $container;if(instance&&instance.group[instance.currIndex].opts.fullScreen){$container=instance.$refs.container;$container.on('click.fb-fullscreen','[data-fancybox-fullscreen]',function(e){e.stopPropagation();e.preventDefault();FullScreen.toggle($container[0]);});if(instance.opts.fullScreen&&instance.opts.fullScreen.autoStart===true){FullScreen.request($container[0]);}// Expose API
instance.FullScreen=FullScreen;}else if(instance){instance.$refs.toolbar.find('[data-fancybox-fullscreen]').hide();}},'afterKeydown.fb':function afterKeydownFb(e,instance,current,keypress,keycode){// "P" or Spacebar
if(instance&&instance.FullScreen&&keycode===70){keypress.preventDefault();instance.FullScreen.toggle(instance.$refs.container[0]);}},'beforeClose.fb':function beforeCloseFb(instance){if(instance&&instance.FullScreen){FullScreen.exit();}}});$(document).on(fn.fullscreenchange,function(){var isFullscreen=FullScreen.isFullscreen(),instance=$.fancybox.getInstance();if(instance){// If image is zooming, then force to stop and reposition properly
if(instance.current&&instance.current.type==='image'&&instance.isAnimating){instance.current.$content.css('transition','none');instance.isAnimating=false;instance.update(true,true,0);}instance.trigger('onFullscreenChange',isFullscreen);instance.$refs.container.toggleClass('fancybox-is-fullscreen',isFullscreen);}});})(document,window.jQuery||jQuery);// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
;(function(document,$){'use strict';// Make sure there are default values
$.fancybox.defaults=$.extend(true,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">'+'<svg viewBox="0 0 120 120">'+'<path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />'+'</svg>'+'</button>'},thumbs:{autoStart:false,// Display thumbnails on opening
hideOnClose:true,// Hide thumbnail grid when closing animation starts
parentEl:'.fancybox-container',// Container is injected into this element
axis:'y'// Vertical (y) or horizontal (x) scrolling
}},$.fancybox.defaults);var FancyThumbs=function FancyThumbs(instance){this.init(instance);};$.extend(FancyThumbs.prototype,{$button:null,$grid:null,$list:null,isVisible:false,isActive:false,init:function init(instance){var self=this;self.instance=instance;instance.Thumbs=self;// Enable thumbs if at least two group items have thumbnails
var first=instance.group[0],second=instance.group[1];self.opts=instance.group[instance.currIndex].opts.thumbs;self.$button=instance.$refs.toolbar.find('[data-fancybox-thumbs]');if(self.opts&&first&&second&&(first.type=='image'||first.opts.thumb||first.opts.$thumb)&&(second.type=='image'||second.opts.thumb||second.opts.$thumb)){self.$button.show().on('click',function(){self.toggle();});self.isActive=true;}else{self.$button.hide();}},create:function create(){var self=this,instance=self.instance,parentEl=self.opts.parentEl,list,src;self.$grid=$('<div class="fancybox-thumbs fancybox-thumbs-'+self.opts.axis+'"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));// Build list HTML
list='<ul>';$.each(instance.group,function(i,item){src=item.opts.thumb||(item.opts.$thumb?item.opts.$thumb.attr('src'):null);if(!src&&item.type==='image'){src=item.src;}if(src&&src.length){list+='<li data-index="'+i+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+src+'" /></li>';}});list+='</ul>';self.$list=$(list).appendTo(self.$grid).on('click','li',function(){instance.jumpTo($(this).data('index'));});self.$list.find('img').hide().one('load',function(){var $parent=$(this).parent().removeClass('fancybox-thumbs-loading'),thumbWidth=$parent.outerWidth(),thumbHeight=$parent.outerHeight(),width,height,widthRatio,heightRatio;width=this.naturalWidth||this.width;height=this.naturalHeight||this.height;// Calculate thumbnail dimensions; center vertically and horizontally
widthRatio=width/thumbWidth;heightRatio=height/thumbHeight;if(widthRatio>=1&&heightRatio>=1){if(widthRatio>heightRatio){width=width/heightRatio;height=thumbHeight;}else{width=thumbWidth;height=height/widthRatio;}}$(this).css({width:Math.floor(width),height:Math.floor(height),'margin-top':height>thumbHeight?Math.floor(thumbHeight*0.3-height*0.3):Math.floor(thumbHeight*0.5-height*0.5),'margin-left':Math.floor(thumbWidth*0.5-width*0.5)}).show();}).each(function(){this.src=$(this).data('src');});if(self.opts.axis==='x'){self.$list.width(parseInt(self.$grid.css("padding-right"))+instance.group.length*self.$list.children().eq(0).outerWidth(true)+'px');}},focus:function focus(duration){var self=this,$list=self.$list,thumb,thumbPos;if(self.instance.current){thumb=$list.children().removeClass('fancybox-thumbs-active').filter('[data-index="'+self.instance.current.index+'"]').addClass('fancybox-thumbs-active');thumbPos=thumb.position();// Check if need to scroll to make current thumb visible
if(self.opts.axis==='y'&&(thumbPos.top<0||thumbPos.top>$list.height()-thumb.outerHeight())){$list.stop().animate({'scrollTop':$list.scrollTop()+thumbPos.top},duration);}else if(self.opts.axis==='x'&&(thumbPos.left<$list.parent().scrollLeft()||thumbPos.left>$list.parent().scrollLeft()+($list.parent().width()-thumb.outerWidth()))){$list.parent().stop().animate({'scrollLeft':thumbPos.left},duration);}}},update:function update(){this.instance.$refs.container.toggleClass('fancybox-show-thumbs',this.isVisible);if(this.isVisible){if(!this.$grid){this.create();}this.instance.trigger('onThumbsShow');this.focus(0);}else if(this.$grid){this.instance.trigger('onThumbsHide');}// Update content position
this.instance.update();},hide:function hide(){this.isVisible=false;this.update();},show:function show(){this.isVisible=true;this.update();},toggle:function toggle(){this.isVisible=!this.isVisible;this.update();}});$(document).on({'onInit.fb':function onInitFb(e,instance){var Thumbs;if(instance&&!instance.Thumbs){Thumbs=new FancyThumbs(instance);if(Thumbs.isActive&&Thumbs.opts.autoStart===true){Thumbs.show();}}},'beforeShow.fb':function beforeShowFb(e,instance,item,firstRun){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible){Thumbs.focus(firstRun?0:250);}},'afterKeydown.fb':function afterKeydownFb(e,instance,current,keypress,keycode){var Thumbs=instance&&instance.Thumbs;// "G"
if(Thumbs&&Thumbs.isActive&&keycode===71){keypress.preventDefault();Thumbs.toggle();}},'beforeClose.fb':function beforeCloseFb(e,instance){var Thumbs=instance&&instance.Thumbs;if(Thumbs&&Thumbs.isVisible&&Thumbs.opts.hideOnClose!==false){Thumbs.$grid.hide();}}});})(document,window.jQuery);//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
;(function(document,$){'use strict';$.extend(true,$.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">'+'<svg viewBox="0 0 40 40">'+'<path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z">'+'</svg>'+'</button>'},share:{tpl:'<div class="fancybox-share">'+'<h1>{{SHARE}}</h1>'+'<p class="fancybox-share__links">'+'<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>'+'<span>Facebook</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>'+'<span>Pinterest</span>'+'</a>'+'<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">'+'<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>'+'<span>Twitter</span>'+'</a>'+'</p>'+'<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>'+'</div>'}});function escapeHtml(string){var entityMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'};return String(string).replace(/[&<>"'`=\/]/g,function(s){return entityMap[s];});}$(document).on('click','[data-fancybox-share]',function(){var f=$.fancybox.getInstance(),url,tpl;if(f){url=f.current.opts.hash===false?f.current.src:window.location;tpl=f.current.opts.share.tpl.replace(/\{\{media\}\}/g,f.current.type==='image'?encodeURIComponent(f.current.src):'').replace(/\{\{url\}\}/g,encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g,escapeHtml(url)).replace(/\{\{descr\}\}/g,f.$caption?encodeURIComponent(f.$caption.text()):'');$.fancybox.open({src:f.translate(f,tpl),type:'html',opts:{animationEffect:"fade",animationDuration:250,afterLoad:function afterLoad(instance,current){// Opening links in a popup window
current.$content.find('.fancybox-share__links a').click(function(){window.open(this.href,"Share","width=550, height=450");return false;});}}});}});})(document,window.jQuery||jQuery);// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
;(function(document,window,$){'use strict';// Simple $.escapeSelector polyfill (for jQuery prior v3)
if(!$.escapeSelector){$.escapeSelector=function(sel){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;};return(sel+"").replace(rcssescape,fcssescape);};}// Create new history entry only once
var shouldCreateHistory=true;// Variable containing last hash value set by fancyBox
// It will be used to determine if fancyBox needs to close after hash change is detected
var currentHash=null;// Throttling the history change
var timerID=null;// Get info about gallery name and current index from url
function parseUrl(){var hash=window.location.hash.substr(1);var rez=hash.split('-');var index=rez.length>1&&/^\+?\d+$/.test(rez[rez.length-1])?parseInt(rez.pop(-1),10)||1:1;var gallery=rez.join('-');// Index is starting from 1
if(index<1){index=1;}return{hash:hash,index:index,gallery:gallery};}// Trigger click evnt on links to open new fancyBox instance
function triggerFromUrl(url){var $el;if(url.gallery!==''){// If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
$el=$("[data-fancybox='"+$.escapeSelector(url.gallery)+"']").eq(url.index-1);if(!$el.length){// .. if not, try finding element by ID
$el=$("#"+$.escapeSelector(url.gallery)+"");}if($el.length){shouldCreateHistory=false;$el.trigger('click');}}}// Get gallery name from current instance
function getGalleryID(instance){var opts;if(!instance){return false;}opts=instance.current?instance.current.opts:instance.opts;return opts.hash||(opts.$orig?opts.$orig.data('fancybox'):'');}// Start when DOM becomes ready
$(function(){// Check if user has disabled this module
if($.fancybox.defaults.hash===false){return;}// Update hash when opening/closing fancyBox
$(document).on({'onInit.fb':function onInitFb(e,instance){var url,gallery;if(instance.group[instance.currIndex].opts.hash===false){return;}url=parseUrl();gallery=getGalleryID(instance);// Make sure gallery start index matches index from hash
if(gallery&&url.gallery&&gallery==url.gallery){instance.currIndex=url.index-1;}},'beforeShow.fb':function beforeShowFb(e,instance,current){var gallery;if(!current||current.opts.hash===false){return;}gallery=getGalleryID(instance);// Update window hash
if(gallery&&gallery!==''){if(window.location.hash.indexOf(gallery)<0){instance.opts.origHash=window.location.hash;}currentHash=gallery+(instance.group.length>1?'-'+(current.index+1):'');if('replaceState'in window.history){if(timerID){clearTimeout(timerID);}timerID=setTimeout(function(){window.history[shouldCreateHistory?'pushState':'replaceState']({},document.title,window.location.pathname+window.location.search+'#'+currentHash);timerID=null;shouldCreateHistory=false;},300);}else{window.location.hash=currentHash;}}},'beforeClose.fb':function beforeCloseFb(e,instance,current){var gallery,origHash;if(timerID){clearTimeout(timerID);}if(current.opts.hash===false){return;}gallery=getGalleryID(instance);origHash=instance&&instance.opts.origHash?instance.opts.origHash:'';// Remove hash from location bar
if(gallery&&gallery!==''){if('replaceState'in history){window.history.replaceState({},document.title,window.location.pathname+window.location.search+origHash);}else{window.location.hash=origHash;// Keep original scroll position
$(window).scrollTop(instance.scrollTop).scrollLeft(instance.scrollLeft);}}currentHash=null;}});// Check if need to close after url has changed
$(window).on('hashchange.fb',function(){var url=parseUrl();if($.fancybox.getInstance()){if(currentHash&&currentHash!==url.gallery+'-'+url.index&&!(url.index===1&&currentHash==url.gallery)){currentHash=null;$.fancybox.close();}}else if(url.gallery!==''){triggerFromUrl(url);}});// Check current hash and trigger click event on matching element to start fancyBox, if needed
setTimeout(function(){triggerFromUrl(parseUrl());},50);});})(document,window,window.jQuery||jQuery);;(function(document,$){'use strict';var prevTime=new Date().getTime();$(document).on({'onInit.fb':function onInitFb(e,instance,current){instance.$refs.stage.on('mousewheel DOMMouseScroll wheel MozMousePixelScroll',function(e){var current=instance.current,currTime=new Date().getTime();if(instance.group.length<1||current.opts.wheel===false||current.opts.wheel==='auto'&&current.type!=='image'){return;}e.preventDefault();e.stopPropagation();if(current.$slide.hasClass('fancybox-animated')){return;}e=e.originalEvent||e;if(currTime-prevTime<250){return;}prevTime=currTime;instance[(-e.deltaY||-e.deltaX||e.wheelDelta||-e.detail)<0?'next':'previous']();});}});})(document,window.jQuery||jQuery);(function($){function pad(n){return n<10?"0"+n:n;}$.fn.showclock=function(){var currentDate=new Date();var fieldDate=$(this).data('date').split('-');var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2]);var seconds=futureDate.getTime()/1000-currentDate.getTime()/1000;if(seconds<=0||isNaN(seconds)){this.hide();return this;}var days=Math.floor(seconds/86400);seconds=seconds%86400;var hours=Math.floor(seconds/3600);seconds=seconds%3600;var minutes=Math.floor(seconds/60);seconds=Math.floor(seconds%60);var html="";if(days!=0){html+="<div class='countdown-container days'>";html+="<span class='countdown-value days-top'>"+pad(days)+"</span>";html+="<span class='countdown-heading days-bottom'>Days</span>";html+="</div>";}html+="<div class='countdown-container hours'>";html+="<span class='countdown-value hours-top'>"+pad(hours)+"</span>";html+="<span class='countdown-heading hours-bottom'>Hours</span>";html+="</div>";html+="<div class='countdown-container minutes'>";html+="<span class='countdown-value minutes-top'>"+pad(minutes)+"</span>";html+="<span class='countdown-heading minutes-bottom'>Minutes</span>";html+="</div>";html+="<div class='countdown-container seconds'>";html+="<span class='countdown-value seconds-top'>"+pad(seconds)+"</span>";html+="<span class='countdown-heading seconds-bottom'>Seconds</span>";html+="</div>";this.html(html);};$.fn.countdown=function(){var el=$(this);el.showclock();setInterval(function(){el.showclock();},1000);};})(jQuery);jQuery(document).ready(function(){if(jQuery(".js-countdown").length>0)jQuery(".js-countdown").countdown();});/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */(function(f){if(( false?undefined:_typeof2(exports))==="object"&&typeof module!=="undefined"){module.exports=f();}else if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else{ var g; }})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f;}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;}({1:[function(require,module,exports){},{}],2:[function(require,module,exports){/* MIT license */var colorNames=require(6);module.exports={getRgba:getRgba,getHsla:getHsla,getRgb:getRgb,getHsl:getHsl,getHwb:getHwb,getAlpha:getAlpha,hexString:hexString,rgbString:rgbString,rgbaString:rgbaString,percentString:percentString,percentaString:percentaString,hslString:hslString,hslaString:hslaString,hwbString:hwbString,keyword:keyword};function getRgba(string){if(!string){return;}var abbr=/^#([a-fA-F0-9]{3})$/i,hex=/^#([a-fA-F0-9]{6})$/i,rgba=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,per=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,keyword=/(\w+)/;var rgb=[0,0,0],a=1,match=string.match(abbr);if(match){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i]+match[i],16);}}else if(match=string.match(hex)){match=match[1];for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match.slice(i*2,i*2+2),16);}}else if(match=string.match(rgba)){for(var i=0;i<rgb.length;i++){rgb[i]=parseInt(match[i+1]);}a=parseFloat(match[4]);}else if(match=string.match(per)){for(var i=0;i<rgb.length;i++){rgb[i]=Math.round(parseFloat(match[i+1])*2.55);}a=parseFloat(match[4]);}else if(match=string.match(keyword)){if(match[1]=="transparent"){return[0,0,0,0];}rgb=colorNames[match[1]];if(!rgb){return;}}for(var i=0;i<rgb.length;i++){rgb[i]=scale(rgb[i],0,255);}if(!a&&a!=0){a=1;}else{a=scale(a,0,1);}rgb[3]=a;return rgb;}function getHsla(string){if(!string){return;}var hsl=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hsl);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),s=scale(parseFloat(match[2]),0,100),l=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,s,l,a];}}function getHwb(string){if(!string){return;}var hwb=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;var match=string.match(hwb);if(match){var alpha=parseFloat(match[4]);var h=scale(parseInt(match[1]),0,360),w=scale(parseFloat(match[2]),0,100),b=scale(parseFloat(match[3]),0,100),a=scale(isNaN(alpha)?1:alpha,0,1);return[h,w,b,a];}}function getRgb(string){var rgba=getRgba(string);return rgba&&rgba.slice(0,3);}function getHsl(string){var hsla=getHsla(string);return hsla&&hsla.slice(0,3);}function getAlpha(string){var vals=getRgba(string);if(vals){return vals[3];}else if(vals=getHsla(string)){return vals[3];}else if(vals=getHwb(string)){return vals[3];}}// generators
function hexString(rgb){return"#"+hexDouble(rgb[0])+hexDouble(rgb[1])+hexDouble(rgb[2]);}function rgbString(rgba,alpha){if(alpha<1||rgba[3]&&rgba[3]<1){return rgbaString(rgba,alpha);}return"rgb("+rgba[0]+", "+rgba[1]+", "+rgba[2]+")";}function rgbaString(rgba,alpha){if(alpha===undefined){alpha=rgba[3]!==undefined?rgba[3]:1;}return"rgba("+rgba[0]+", "+rgba[1]+", "+rgba[2]+", "+alpha+")";}function percentString(rgba,alpha){if(alpha<1||rgba[3]&&rgba[3]<1){return percentaString(rgba,alpha);}var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgb("+r+"%, "+g+"%, "+b+"%)";}function percentaString(rgba,alpha){var r=Math.round(rgba[0]/255*100),g=Math.round(rgba[1]/255*100),b=Math.round(rgba[2]/255*100);return"rgba("+r+"%, "+g+"%, "+b+"%, "+(alpha||rgba[3]||1)+")";}function hslString(hsla,alpha){if(alpha<1||hsla[3]&&hsla[3]<1){return hslaString(hsla,alpha);}return"hsl("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%)";}function hslaString(hsla,alpha){if(alpha===undefined){alpha=hsla[3]!==undefined?hsla[3]:1;}return"hsla("+hsla[0]+", "+hsla[1]+"%, "+hsla[2]+"%, "+alpha+")";}// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb,alpha){if(alpha===undefined){alpha=hwb[3]!==undefined?hwb[3]:1;}return"hwb("+hwb[0]+", "+hwb[1]+"%, "+hwb[2]+"%"+(alpha!==undefined&&alpha!==1?", "+alpha:"")+")";}function keyword(rgb){return reverseNames[rgb.slice(0,3)];}// helpers
function scale(num,min,max){return Math.min(Math.max(min,num),max);}function hexDouble(num){var str=num.toString(16).toUpperCase();return str.length<2?"0"+str:str;}//create a list of reverse color names
var reverseNames={};for(var name in colorNames){reverseNames[colorNames[name]]=name;}},{"6":6}],3:[function(require,module,exports){/* MIT license */var convert=require(5);var string=require(2);var Color=function Color(obj){if(obj instanceof Color){return obj;}if(!(this instanceof Color)){return new Color(obj);}this.valid=false;this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};// parse Color() argument
var vals;if(typeof obj==='string'){vals=string.getRgba(obj);if(vals){this.setValues('rgb',vals);}else if(vals=string.getHsla(obj)){this.setValues('hsl',vals);}else if(vals=string.getHwb(obj)){this.setValues('hwb',vals);}}else if(_typeof2(obj)==='object'){vals=obj;if(vals.r!==undefined||vals.red!==undefined){this.setValues('rgb',vals);}else if(vals.l!==undefined||vals.lightness!==undefined){this.setValues('hsl',vals);}else if(vals.v!==undefined||vals.value!==undefined){this.setValues('hsv',vals);}else if(vals.w!==undefined||vals.whiteness!==undefined){this.setValues('hwb',vals);}else if(vals.c!==undefined||vals.cyan!==undefined){this.setValues('cmyk',vals);}}};Color.prototype={isValid:function isValid(){return this.valid;},rgb:function rgb(){return this.setSpace('rgb',arguments);},hsl:function hsl(){return this.setSpace('hsl',arguments);},hsv:function hsv(){return this.setSpace('hsv',arguments);},hwb:function hwb(){return this.setSpace('hwb',arguments);},cmyk:function cmyk(){return this.setSpace('cmyk',arguments);},rgbArray:function rgbArray(){return this.values.rgb;},hslArray:function hslArray(){return this.values.hsl;},hsvArray:function hsvArray(){return this.values.hsv;},hwbArray:function hwbArray(){var values=this.values;if(values.alpha!==1){return values.hwb.concat([values.alpha]);}return values.hwb;},cmykArray:function cmykArray(){return this.values.cmyk;},rgbaArray:function rgbaArray(){var values=this.values;return values.rgb.concat([values.alpha]);},hslaArray:function hslaArray(){var values=this.values;return values.hsl.concat([values.alpha]);},alpha:function alpha(val){if(val===undefined){return this.values.alpha;}this.setValues('alpha',val);return this;},red:function red(val){return this.setChannel('rgb',0,val);},green:function green(val){return this.setChannel('rgb',1,val);},blue:function blue(val){return this.setChannel('rgb',2,val);},hue:function hue(val){if(val){val%=360;val=val<0?360+val:val;}return this.setChannel('hsl',0,val);},saturation:function saturation(val){return this.setChannel('hsl',1,val);},lightness:function lightness(val){return this.setChannel('hsl',2,val);},saturationv:function saturationv(val){return this.setChannel('hsv',1,val);},whiteness:function whiteness(val){return this.setChannel('hwb',1,val);},blackness:function blackness(val){return this.setChannel('hwb',2,val);},value:function value(val){return this.setChannel('hsv',2,val);},cyan:function cyan(val){return this.setChannel('cmyk',0,val);},magenta:function magenta(val){return this.setChannel('cmyk',1,val);},yellow:function yellow(val){return this.setChannel('cmyk',2,val);},black:function black(val){return this.setChannel('cmyk',3,val);},hexString:function hexString(){return string.hexString(this.values.rgb);},rgbString:function rgbString(){return string.rgbString(this.values.rgb,this.values.alpha);},rgbaString:function rgbaString(){return string.rgbaString(this.values.rgb,this.values.alpha);},percentString:function percentString(){return string.percentString(this.values.rgb,this.values.alpha);},hslString:function hslString(){return string.hslString(this.values.hsl,this.values.alpha);},hslaString:function hslaString(){return string.hslaString(this.values.hsl,this.values.alpha);},hwbString:function hwbString(){return string.hwbString(this.values.hwb,this.values.alpha);},keyword:function keyword(){return string.keyword(this.values.rgb,this.values.alpha);},rgbNumber:function rgbNumber(){var rgb=this.values.rgb;return rgb[0]<<16|rgb[1]<<8|rgb[2];},luminosity:function luminosity(){// http://www.w3.org/TR/WCAG20/#relativeluminancedef
var rgb=this.values.rgb;var lum=[];for(var i=0;i<rgb.length;i++){var chan=rgb[i]/255;lum[i]=chan<=0.03928?chan/12.92:Math.pow((chan+0.055)/1.055,2.4);}return 0.2126*lum[0]+0.7152*lum[1]+0.0722*lum[2];},contrast:function contrast(color2){// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
var lum1=this.luminosity();var lum2=color2.luminosity();if(lum1>lum2){return(lum1+0.05)/(lum2+0.05);}return(lum2+0.05)/(lum1+0.05);},level:function level(color2){var contrastRatio=this.contrast(color2);if(contrastRatio>=7.1){return'AAA';}return contrastRatio>=4.5?'AA':'';},dark:function dark(){// YIQ equation from http://24ways.org/2010/calculating-color-contrast
var rgb=this.values.rgb;var yiq=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;return yiq<128;},light:function light(){return!this.dark();},negate:function negate(){var rgb=[];for(var i=0;i<3;i++){rgb[i]=255-this.values.rgb[i];}this.setValues('rgb',rgb);return this;},lighten:function lighten(ratio){var hsl=this.values.hsl;hsl[2]+=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},darken:function darken(ratio){var hsl=this.values.hsl;hsl[2]-=hsl[2]*ratio;this.setValues('hsl',hsl);return this;},saturate:function saturate(ratio){var hsl=this.values.hsl;hsl[1]+=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},desaturate:function desaturate(ratio){var hsl=this.values.hsl;hsl[1]-=hsl[1]*ratio;this.setValues('hsl',hsl);return this;},whiten:function whiten(ratio){var hwb=this.values.hwb;hwb[1]+=hwb[1]*ratio;this.setValues('hwb',hwb);return this;},blacken:function blacken(ratio){var hwb=this.values.hwb;hwb[2]+=hwb[2]*ratio;this.setValues('hwb',hwb);return this;},greyscale:function greyscale(){var rgb=this.values.rgb;// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
var val=rgb[0]*0.3+rgb[1]*0.59+rgb[2]*0.11;this.setValues('rgb',[val,val,val]);return this;},clearer:function clearer(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha-alpha*ratio);return this;},opaquer:function opaquer(ratio){var alpha=this.values.alpha;this.setValues('alpha',alpha+alpha*ratio);return this;},rotate:function rotate(degrees){var hsl=this.values.hsl;var hue=(hsl[0]+degrees)%360;hsl[0]=hue<0?360+hue:hue;this.setValues('hsl',hsl);return this;},/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */mix:function mix(mixinColor,weight){var color1=this;var color2=mixinColor;var p=weight===undefined?0.5:weight;var w=2*p-1;var a=color1.alpha()-color2.alpha();var w1=((w*a===-1?w:(w+a)/(1+w*a))+1)/2.0;var w2=1-w1;return this.rgb(w1*color1.red()+w2*color2.red(),w1*color1.green()+w2*color2.green(),w1*color1.blue()+w2*color2.blue()).alpha(color1.alpha()*p+color2.alpha()*(1-p));},toJSON:function toJSON(){return this.rgb();},clone:function clone(){// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
// making the final build way to big to embed in Chart.js. So let's do it manually,
// assuming that values to clone are 1 dimension arrays containing only numbers,
// except 'alpha' which is a number.
var result=new Color();var source=this.values;var target=result.values;var value,type;for(var prop in source){if(source.hasOwnProperty(prop)){value=source[prop];type={}.toString.call(value);if(type==='[object Array]'){target[prop]=value.slice(0);}else if(type==='[object Number]'){target[prop]=value;}else{console.error('unexpected color value:',value);}}}return result;}};Color.prototype.spaces={rgb:['red','green','blue'],hsl:['hue','saturation','lightness'],hsv:['hue','saturation','value'],hwb:['hue','whiteness','blackness'],cmyk:['cyan','magenta','yellow','black']};Color.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]};Color.prototype.getValues=function(space){var values=this.values;var vals={};for(var i=0;i<space.length;i++){vals[space.charAt(i)]=values[space][i];}if(values.alpha!==1){vals.a=values.alpha;}// {r: 255, g: 255, b: 255, a: 0.4}
return vals;};Color.prototype.setValues=function(space,vals){var values=this.values;var spaces=this.spaces;var maxes=this.maxes;var alpha=1;var i;this.valid=true;if(space==='alpha'){alpha=vals;}else if(vals.length){// [10, 10, 10]
values[space]=vals.slice(0,space.length);alpha=vals[space.length];}else if(vals[space.charAt(0)]!==undefined){// {r: 10, g: 10, b: 10}
for(i=0;i<space.length;i++){values[space][i]=vals[space.charAt(i)];}alpha=vals.a;}else if(vals[spaces[space][0]]!==undefined){// {red: 10, green: 10, blue: 10}
var chans=spaces[space];for(i=0;i<space.length;i++){values[space][i]=vals[chans[i]];}alpha=vals.alpha;}values.alpha=Math.max(0,Math.min(1,alpha===undefined?values.alpha:alpha));if(space==='alpha'){return false;}var capped;// cap values of the space prior converting all values
for(i=0;i<space.length;i++){capped=Math.max(0,Math.min(maxes[space][i],values[space][i]));values[space][i]=Math.round(capped);}// convert to all the other color spaces
for(var sname in spaces){if(sname!==space){values[sname]=convert[space][sname](values[space]);}}return true;};Color.prototype.setSpace=function(space,args){var vals=args[0];if(vals===undefined){// color.rgb()
return this.getValues(space);}// color.rgb(10, 10, 10)
if(typeof vals==='number'){vals=Array.prototype.slice.call(args);}this.setValues(space,vals);return this;};Color.prototype.setChannel=function(space,index,val){var svalues=this.values[space];if(val===undefined){// color.red()
return svalues[index];}else if(val===svalues[index]){// color.red(color.red())
return this;}// color.red(100)
svalues[index]=val;this.setValues(space,svalues);return this;};if(typeof window!=='undefined'){window.Color=Color;}module.exports=Color;},{"2":2,"5":5}],4:[function(require,module,exports){/* MIT license */module.exports={rgb2hsl:rgb2hsl,rgb2hsv:rgb2hsv,rgb2hwb:rgb2hwb,rgb2cmyk:rgb2cmyk,rgb2keyword:rgb2keyword,rgb2xyz:rgb2xyz,rgb2lab:rgb2lab,rgb2lch:rgb2lch,hsl2rgb:hsl2rgb,hsl2hsv:hsl2hsv,hsl2hwb:hsl2hwb,hsl2cmyk:hsl2cmyk,hsl2keyword:hsl2keyword,hsv2rgb:hsv2rgb,hsv2hsl:hsv2hsl,hsv2hwb:hsv2hwb,hsv2cmyk:hsv2cmyk,hsv2keyword:hsv2keyword,hwb2rgb:hwb2rgb,hwb2hsl:hwb2hsl,hwb2hsv:hwb2hsv,hwb2cmyk:hwb2cmyk,hwb2keyword:hwb2keyword,cmyk2rgb:cmyk2rgb,cmyk2hsl:cmyk2hsl,cmyk2hsv:cmyk2hsv,cmyk2hwb:cmyk2hwb,cmyk2keyword:cmyk2keyword,keyword2rgb:keyword2rgb,keyword2hsl:keyword2hsl,keyword2hsv:keyword2hsv,keyword2hwb:keyword2hwb,keyword2cmyk:keyword2cmyk,keyword2lab:keyword2lab,keyword2xyz:keyword2xyz,xyz2rgb:xyz2rgb,xyz2lab:xyz2lab,xyz2lch:xyz2lch,lab2xyz:lab2xyz,lab2rgb:lab2rgb,lab2lch:lab2lch,lch2lab:lch2lab,lch2xyz:lch2xyz,lch2rgb:lch2rgb};function rgb2hsl(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,l;if(max==min)h=0;else if(r==max)h=(g-b)/delta;else if(g==max)h=2+(b-r)/delta;else if(b==max)h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)h+=360;l=(min+max)/2;if(max==min)s=0;else if(l<=0.5)s=delta/(max+min);else s=delta/(2-max-min);return[h,s*100,l*100];}function rgb2hsv(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min,h,s,v;if(max==0)s=0;else s=delta/max*1000/10;if(max==min)h=0;else if(r==max)h=(g-b)/delta;else if(g==max)h=2+(b-r)/delta;else if(b==max)h=4+(r-g)/delta;h=Math.min(h*60,360);if(h<0)h+=360;v=max/255*1000/10;return[h,s,v];}function rgb2hwb(rgb){var r=rgb[0],g=rgb[1],b=rgb[2],h=rgb2hsl(rgb)[0],w=1/255*Math.min(r,Math.min(g,b)),b=1-1/255*Math.max(r,Math.max(g,b));return[h,w*100,b*100];}function rgb2cmyk(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,c,m,y,k;k=Math.min(1-r,1-g,1-b);c=(1-r-k)/(1-k)||0;m=(1-g-k)/(1-k)||0;y=(1-b-k)/(1-k)||0;return[c*100,m*100,y*100,k*100];}function rgb2keyword(rgb){return reverseKeywords[JSON.stringify(rgb)];}function rgb2xyz(rgb){var r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;// assume sRGB
r=r>0.04045?Math.pow((r+0.055)/1.055,2.4):r/12.92;g=g>0.04045?Math.pow((g+0.055)/1.055,2.4):g/12.92;b=b>0.04045?Math.pow((b+0.055)/1.055,2.4):b/12.92;var x=r*0.4124+g*0.3576+b*0.1805;var y=r*0.2126+g*0.7152+b*0.0722;var z=r*0.0193+g*0.1192+b*0.9505;return[x*100,y*100,z*100];}function rgb2lab(rgb){var xyz=rgb2xyz(rgb),x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):7.787*x+16/116;y=y>0.008856?Math.pow(y,1/3):7.787*y+16/116;z=z>0.008856?Math.pow(z,1/3):7.787*z+16/116;l=116*y-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}function rgb2lch(args){return lab2lch(rgb2lab(args));}function hsl2rgb(hsl){var h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100,t1,t2,t3,rgb,val;if(s==0){val=l*255;return[val,val,val];}if(l<0.5)t2=l*(1+s);else t2=l+s-l*s;t1=2*l-t2;rgb=[0,0,0];for(var i=0;i<3;i++){t3=h+1/3*-(i-1);t3<0&&t3++;t3>1&&t3--;if(6*t3<1)val=t1+(t2-t1)*6*t3;else if(2*t3<1)val=t2;else if(3*t3<2)val=t1+(t2-t1)*(2/3-t3)*6;else val=t1;rgb[i]=val*255;}return rgb;}function hsl2hsv(hsl){var h=hsl[0],s=hsl[1]/100,l=hsl[2]/100,sv,v;if(l===0){// no need to do calc on black
// also avoids divide by 0 error
return[0,0,0];}l*=2;s*=l<=1?l:2-l;v=(l+s)/2;sv=2*s/(l+s);return[h,sv*100,v*100];}function hsl2hwb(args){return rgb2hwb(hsl2rgb(args));}function hsl2cmyk(args){return rgb2cmyk(hsl2rgb(args));}function hsl2keyword(args){return rgb2keyword(hsl2rgb(args));}function hsv2rgb(hsv){var h=hsv[0]/60,s=hsv[1]/100,v=hsv[2]/100,hi=Math.floor(h)%6;var f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-s*f),t=255*v*(1-s*(1-f)),v=255*v;switch(hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q];}}function hsv2hsl(hsv){var h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,sl,l;l=(2-s)*v;sl=s*v;sl/=l<=1?l:2-l;sl=sl||0;l/=2;return[h,sl*100,l*100];}function hsv2hwb(args){return rgb2hwb(hsv2rgb(args));}function hsv2cmyk(args){return rgb2cmyk(hsv2rgb(args));}function hsv2keyword(args){return rgb2keyword(hsv2rgb(args));}// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb){var h=hwb[0]/360,wh=hwb[1]/100,bl=hwb[2]/100,ratio=wh+bl,i,v,f,n;// wh + bl cant be > 1
if(ratio>1){wh/=ratio;bl/=ratio;}i=Math.floor(6*h);v=1-bl;f=6*h-i;if((i&0x01)!=0){f=1-f;}n=wh+f*(v-wh);// linear interpolation
switch(i){default:case 6:case 0:r=v;g=n;b=wh;break;case 1:r=n;g=v;b=wh;break;case 2:r=wh;g=v;b=n;break;case 3:r=wh;g=n;b=v;break;case 4:r=n;g=wh;b=v;break;case 5:r=v;g=wh;b=n;break;}return[r*255,g*255,b*255];}function hwb2hsl(args){return rgb2hsl(hwb2rgb(args));}function hwb2hsv(args){return rgb2hsv(hwb2rgb(args));}function hwb2cmyk(args){return rgb2cmyk(hwb2rgb(args));}function hwb2keyword(args){return rgb2keyword(hwb2rgb(args));}function cmyk2rgb(cmyk){var c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100,r,g,b;r=1-Math.min(1,c*(1-k)+k);g=1-Math.min(1,m*(1-k)+k);b=1-Math.min(1,y*(1-k)+k);return[r*255,g*255,b*255];}function cmyk2hsl(args){return rgb2hsl(cmyk2rgb(args));}function cmyk2hsv(args){return rgb2hsv(cmyk2rgb(args));}function cmyk2hwb(args){return rgb2hwb(cmyk2rgb(args));}function cmyk2keyword(args){return rgb2keyword(cmyk2rgb(args));}function xyz2rgb(xyz){var x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100,r,g,b;r=x*3.2406+y*-1.5372+z*-0.4986;g=x*-0.9689+y*1.8758+z*0.0415;b=x*0.0557+y*-0.2040+z*1.0570;// assume sRGB
r=r>0.0031308?1.055*Math.pow(r,1.0/2.4)-0.055:r=r*12.92;g=g>0.0031308?1.055*Math.pow(g,1.0/2.4)-0.055:g=g*12.92;b=b>0.0031308?1.055*Math.pow(b,1.0/2.4)-0.055:b=b*12.92;r=Math.min(Math.max(0,r),1);g=Math.min(Math.max(0,g),1);b=Math.min(Math.max(0,b),1);return[r*255,g*255,b*255];}function xyz2lab(xyz){var x=xyz[0],y=xyz[1],z=xyz[2],l,a,b;x/=95.047;y/=100;z/=108.883;x=x>0.008856?Math.pow(x,1/3):7.787*x+16/116;y=y>0.008856?Math.pow(y,1/3):7.787*y+16/116;z=z>0.008856?Math.pow(z,1/3):7.787*z+16/116;l=116*y-16;a=500*(x-y);b=200*(y-z);return[l,a,b];}function xyz2lch(args){return lab2lch(xyz2lab(args));}function lab2xyz(lab){var l=lab[0],a=lab[1],b=lab[2],x,y,z,y2;if(l<=8){y=l*100/903.3;y2=7.787*(y/100)+16/116;}else{y=100*Math.pow((l+16)/116,3);y2=Math.pow(y/100,1/3);}x=x/95.047<=0.008856?x=95.047*(a/500+y2-16/116)/7.787:95.047*Math.pow(a/500+y2,3);z=z/108.883<=0.008859?z=108.883*(y2-b/200-16/116)/7.787:108.883*Math.pow(y2-b/200,3);return[x,y,z];}function lab2lch(lab){var l=lab[0],a=lab[1],b=lab[2],hr,h,c;hr=Math.atan2(b,a);h=hr*360/2/Math.PI;if(h<0){h+=360;}c=Math.sqrt(a*a+b*b);return[l,c,h];}function lab2rgb(args){return xyz2rgb(lab2xyz(args));}function lch2lab(lch){var l=lch[0],c=lch[1],h=lch[2],a,b,hr;hr=h/360*2*Math.PI;a=c*Math.cos(hr);b=c*Math.sin(hr);return[l,a,b];}function lch2xyz(args){return lab2xyz(lch2lab(args));}function lch2rgb(args){return lab2rgb(lch2lab(args));}function keyword2rgb(keyword){return cssKeywords[keyword];}function keyword2hsl(args){return rgb2hsl(keyword2rgb(args));}function keyword2hsv(args){return rgb2hsv(keyword2rgb(args));}function keyword2hwb(args){return rgb2hwb(keyword2rgb(args));}function keyword2cmyk(args){return rgb2cmyk(keyword2rgb(args));}function keyword2lab(args){return rgb2lab(keyword2rgb(args));}function keyword2xyz(args){return rgb2xyz(keyword2rgb(args));}var cssKeywords={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};var reverseKeywords={};for(var key in cssKeywords){reverseKeywords[JSON.stringify(cssKeywords[key])]=key;}},{}],5:[function(require,module,exports){var conversions=require(4);var convert=function convert(){return new Converter();};for(var func in conversions){// export Raw versions
convert[func+"Raw"]=function(func){// accept array or plain args
return function(arg){if(typeof arg=="number")arg=Array.prototype.slice.call(arguments);return conversions[func](arg);};}(func);var pair=/(\w+)2(\w+)/.exec(func),from=pair[1],to=pair[2];// export rgb2hsl and ["rgb"]["hsl"]
convert[from]=convert[from]||{};convert[from][to]=convert[func]=function(func){return function(arg){if(typeof arg=="number")arg=Array.prototype.slice.call(arguments);var val=conversions[func](arg);if(typeof val=="string"||val===undefined)return val;// keyword
for(var i=0;i<val.length;i++){val[i]=Math.round(val[i]);}return val;};}(func);}/* Converter does lazy conversion and caching */var Converter=function Converter(){this.convs={};};/* Either get the values for a space or
  set the values for a space, depending on args */Converter.prototype.routeSpace=function(space,args){var values=args[0];if(values===undefined){// color.rgb()
return this.getValues(space);}// color.rgb(10, 10, 10)
if(typeof values=="number"){values=Array.prototype.slice.call(args);}return this.setValues(space,values);};/* Set the values for a space, invalidating cache */Converter.prototype.setValues=function(space,values){this.space=space;this.convs={};this.convs[space]=values;return this;};/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */Converter.prototype.getValues=function(space){var vals=this.convs[space];if(!vals){var fspace=this.space,from=this.convs[fspace];vals=convert[fspace][space](from);this.convs[space]=vals;}return vals;};["rgb","hsl","hsv","cmyk","keyword"].forEach(function(space){Converter.prototype[space]=function(vals){return this.routeSpace(space,arguments);};});module.exports=convert;},{"4":4}],6:[function(require,module,exports){'use strict';module.exports={"aliceblue":[240,248,255],"antiquewhite":[250,235,215],"aqua":[0,255,255],"aquamarine":[127,255,212],"azure":[240,255,255],"beige":[245,245,220],"bisque":[255,228,196],"black":[0,0,0],"blanchedalmond":[255,235,205],"blue":[0,0,255],"blueviolet":[138,43,226],"brown":[165,42,42],"burlywood":[222,184,135],"cadetblue":[95,158,160],"chartreuse":[127,255,0],"chocolate":[210,105,30],"coral":[255,127,80],"cornflowerblue":[100,149,237],"cornsilk":[255,248,220],"crimson":[220,20,60],"cyan":[0,255,255],"darkblue":[0,0,139],"darkcyan":[0,139,139],"darkgoldenrod":[184,134,11],"darkgray":[169,169,169],"darkgreen":[0,100,0],"darkgrey":[169,169,169],"darkkhaki":[189,183,107],"darkmagenta":[139,0,139],"darkolivegreen":[85,107,47],"darkorange":[255,140,0],"darkorchid":[153,50,204],"darkred":[139,0,0],"darksalmon":[233,150,122],"darkseagreen":[143,188,143],"darkslateblue":[72,61,139],"darkslategray":[47,79,79],"darkslategrey":[47,79,79],"darkturquoise":[0,206,209],"darkviolet":[148,0,211],"deeppink":[255,20,147],"deepskyblue":[0,191,255],"dimgray":[105,105,105],"dimgrey":[105,105,105],"dodgerblue":[30,144,255],"firebrick":[178,34,34],"floralwhite":[255,250,240],"forestgreen":[34,139,34],"fuchsia":[255,0,255],"gainsboro":[220,220,220],"ghostwhite":[248,248,255],"gold":[255,215,0],"goldenrod":[218,165,32],"gray":[128,128,128],"green":[0,128,0],"greenyellow":[173,255,47],"grey":[128,128,128],"honeydew":[240,255,240],"hotpink":[255,105,180],"indianred":[205,92,92],"indigo":[75,0,130],"ivory":[255,255,240],"khaki":[240,230,140],"lavender":[230,230,250],"lavenderblush":[255,240,245],"lawngreen":[124,252,0],"lemonchiffon":[255,250,205],"lightblue":[173,216,230],"lightcoral":[240,128,128],"lightcyan":[224,255,255],"lightgoldenrodyellow":[250,250,210],"lightgray":[211,211,211],"lightgreen":[144,238,144],"lightgrey":[211,211,211],"lightpink":[255,182,193],"lightsalmon":[255,160,122],"lightseagreen":[32,178,170],"lightskyblue":[135,206,250],"lightslategray":[119,136,153],"lightslategrey":[119,136,153],"lightsteelblue":[176,196,222],"lightyellow":[255,255,224],"lime":[0,255,0],"limegreen":[50,205,50],"linen":[250,240,230],"magenta":[255,0,255],"maroon":[128,0,0],"mediumaquamarine":[102,205,170],"mediumblue":[0,0,205],"mediumorchid":[186,85,211],"mediumpurple":[147,112,219],"mediumseagreen":[60,179,113],"mediumslateblue":[123,104,238],"mediumspringgreen":[0,250,154],"mediumturquoise":[72,209,204],"mediumvioletred":[199,21,133],"midnightblue":[25,25,112],"mintcream":[245,255,250],"mistyrose":[255,228,225],"moccasin":[255,228,181],"navajowhite":[255,222,173],"navy":[0,0,128],"oldlace":[253,245,230],"olive":[128,128,0],"olivedrab":[107,142,35],"orange":[255,165,0],"orangered":[255,69,0],"orchid":[218,112,214],"palegoldenrod":[238,232,170],"palegreen":[152,251,152],"paleturquoise":[175,238,238],"palevioletred":[219,112,147],"papayawhip":[255,239,213],"peachpuff":[255,218,185],"peru":[205,133,63],"pink":[255,192,203],"plum":[221,160,221],"powderblue":[176,224,230],"purple":[128,0,128],"rebeccapurple":[102,51,153],"red":[255,0,0],"rosybrown":[188,143,143],"royalblue":[65,105,225],"saddlebrown":[139,69,19],"salmon":[250,128,114],"sandybrown":[244,164,96],"seagreen":[46,139,87],"seashell":[255,245,238],"sienna":[160,82,45],"silver":[192,192,192],"skyblue":[135,206,235],"slateblue":[106,90,205],"slategray":[112,128,144],"slategrey":[112,128,144],"snow":[255,250,250],"springgreen":[0,255,127],"steelblue":[70,130,180],"tan":[210,180,140],"teal":[0,128,128],"thistle":[216,191,216],"tomato":[255,99,71],"turquoise":[64,224,208],"violet":[238,130,238],"wheat":[245,222,179],"white":[255,255,255],"whitesmoke":[245,245,245],"yellow":[255,255,0],"yellowgreen":[154,205,50]};},{}],7:[function(require,module,exports){/**
 * @namespace Chart
 */var Chart=require(29)();Chart.helpers=require(45);// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
require(27)(Chart);Chart.defaults=require(25);Chart.Element=require(26);Chart.elements=require(40);Chart.Interaction=require(28);Chart.platform=require(48);require(31)(Chart);require(22)(Chart);require(23)(Chart);require(24)(Chart);require(30)(Chart);require(33)(Chart);require(32)(Chart);require(35)(Chart);require(54)(Chart);require(52)(Chart);require(53)(Chart);require(55)(Chart);require(56)(Chart);require(57)(Chart);// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);require(16)(Chart);require(17)(Chart);require(18)(Chart);require(19)(Chart);require(20)(Chart);require(21)(Chart);require(8)(Chart);require(9)(Chart);require(10)(Chart);require(11)(Chart);require(12)(Chart);require(13)(Chart);require(14)(Chart);// Loading built-it plugins
var plugins=[];plugins.push(require(49)(Chart),require(50)(Chart),require(51)(Chart));Chart.plugins.register(plugins);Chart.platform.initialize();module.exports=Chart;if(typeof window!=='undefined'){window.Chart=Chart;}// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */Chart.canvasHelpers=Chart.helpers.canvas;},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"35":35,"40":40,"45":45,"48":48,"49":49,"50":50,"51":51,"52":52,"53":53,"54":54,"55":55,"56":56,"57":57,"8":8,"9":9}],8:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bar=function(context,config){config.type='bar';return new Chart(context,config);};};},{}],9:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Bubble=function(context,config){config.type='bubble';return new Chart(context,config);};};},{}],10:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Doughnut=function(context,config){config.type='doughnut';return new Chart(context,config);};};},{}],11:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Line=function(context,config){config.type='line';return new Chart(context,config);};};},{}],12:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.PolarArea=function(context,config){config.type='polarArea';return new Chart(context,config);};};},{}],13:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Radar=function(context,config){config.type='radar';return new Chart(context,config);};};},{}],14:[function(require,module,exports){'use strict';module.exports=function(Chart){Chart.Scatter=function(context,config){config.type='scatter';return new Chart(context,config);};};},{}],15:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('bar',{hover:{mode:'label'},scales:{xAxes:[{type:'category',// Specific to Bar Controller
categoryPercentage:0.8,barPercentage:0.9,// offset settings
offset:true,// grid line settings
gridLines:{offsetGridLines:true}}],yAxes:[{type:'linear'}]}});defaults._set('horizontalBar',{hover:{mode:'index',axis:'y'},scales:{xAxes:[{type:'linear',position:'bottom'}],yAxes:[{position:'left',type:'category',// Specific to Horizontal Bar Controller
categoryPercentage:0.8,barPercentage:0.9,// offset settings
offset:true,// grid line settings
gridLines:{offsetGridLines:true}}]},elements:{rectangle:{borderSkipped:'left'}},tooltips:{callbacks:{title:function title(item,data){// Pick first xLabel for now
var title='';if(item.length>0){if(item[0].yLabel){title=item[0].yLabel;}else if(data.labels.length>0&&item[0].index<data.labels.length){title=data.labels[item[0].index];}}return title;},label:function label(item,data){var datasetLabel=data.datasets[item.datasetIndex].label||'';return datasetLabel+': '+item.xLabel;}},mode:'index',axis:'y'}});module.exports=function(Chart){Chart.controllers.bar=Chart.DatasetController.extend({dataElementType:elements.Rectangle,initialize:function initialize(){var me=this;var meta;Chart.DatasetController.prototype.initialize.apply(me,arguments);meta=me.getMeta();meta.stack=me.getDataset().stack;meta.bar=true;},update:function update(reset){var me=this;var rects=me.getMeta().data;var i,ilen;me._ruler=me.getRuler();for(i=0,ilen=rects.length;i<ilen;++i){me.updateElement(rects[i],i,reset);}},updateElement:function updateElement(rectangle,index,reset){var me=this;var chart=me.chart;var meta=me.getMeta();var dataset=me.getDataset();var custom=rectangle.custom||{};var rectangleOptions=chart.options.elements.rectangle;rectangle._xScale=me.getScaleForId(meta.xAxisID);rectangle._yScale=me.getScaleForId(meta.yAxisID);rectangle._datasetIndex=me.index;rectangle._index=index;rectangle._model={datasetLabel:dataset.label,label:chart.data.labels[index],borderSkipped:custom.borderSkipped?custom.borderSkipped:rectangleOptions.borderSkipped,backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.backgroundColor,index,rectangleOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.borderColor,index,rectangleOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.borderWidth,index,rectangleOptions.borderWidth)};me.updateElementGeometry(rectangle,index,reset);rectangle.pivot();},/**
		 * @private
		 */updateElementGeometry:function updateElementGeometry(rectangle,index,reset){var me=this;var model=rectangle._model;var vscale=me.getValueScale();var base=vscale.getBasePixel();var horizontal=vscale.isHorizontal();var ruler=me._ruler||me.getRuler();var vpixels=me.calculateBarValuePixels(me.index,index);var ipixels=me.calculateBarIndexPixels(me.index,index,ruler);model.horizontal=horizontal;model.base=reset?base:vpixels.base;model.x=horizontal?reset?base:vpixels.head:ipixels.center;model.y=horizontal?ipixels.center:reset?base:vpixels.head;model.height=horizontal?ipixels.size:undefined;model.width=horizontal?undefined:ipixels.size;},/**
		 * @private
		 */getValueScaleId:function getValueScaleId(){return this.getMeta().yAxisID;},/**
		 * @private
		 */getIndexScaleId:function getIndexScaleId(){return this.getMeta().xAxisID;},/**
		 * @private
		 */getValueScale:function getValueScale(){return this.getScaleForId(this.getValueScaleId());},/**
		 * @private
		 */getIndexScale:function getIndexScale(){return this.getScaleForId(this.getIndexScaleId());},/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */getStackCount:function getStackCount(last){var me=this;var chart=me.chart;var scale=me.getIndexScale();var stacked=scale.options.stacked;var ilen=last===undefined?chart.data.datasets.length:last+1;var stacks=[];var i,meta;for(i=0;i<ilen;++i){meta=chart.getDatasetMeta(i);if(meta.bar&&chart.isDatasetVisible(i)&&(stacked===false||stacked===true&&stacks.indexOf(meta.stack)===-1||stacked===undefined&&(meta.stack===undefined||stacks.indexOf(meta.stack)===-1))){stacks.push(meta.stack);}}return stacks.length;},/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @private
		 */getStackIndex:function getStackIndex(datasetIndex){return this.getStackCount(datasetIndex)-1;},/**
		 * @private
		 */getRuler:function getRuler(){var me=this;var scale=me.getIndexScale();var stackCount=me.getStackCount();var datasetIndex=me.index;var pixels=[];var isHorizontal=scale.isHorizontal();var start=isHorizontal?scale.left:scale.top;var end=start+(isHorizontal?scale.width:scale.height);var i,ilen;for(i=0,ilen=me.getMeta().data.length;i<ilen;++i){pixels.push(scale.getPixelForValue(null,i,datasetIndex));}return{pixels:pixels,start:start,end:end,stackCount:stackCount,scale:scale};},/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */calculateBarValuePixels:function calculateBarValuePixels(datasetIndex,index){var me=this;var chart=me.chart;var meta=me.getMeta();var scale=me.getValueScale();var datasets=chart.data.datasets;var value=scale.getRightValue(datasets[datasetIndex].data[index]);var stacked=scale.options.stacked;var stack=meta.stack;var start=0;var i,imeta,ivalue,base,head,size;if(stacked||stacked===undefined&&stack!==undefined){for(i=0;i<datasetIndex;++i){imeta=chart.getDatasetMeta(i);if(imeta.bar&&imeta.stack===stack&&imeta.controller.getValueScaleId()===scale.id&&chart.isDatasetVisible(i)){ivalue=scale.getRightValue(datasets[i].data[index]);if(value<0&&ivalue<0||value>=0&&ivalue>0){start+=ivalue;}}}}base=scale.getPixelForValue(start);head=scale.getPixelForValue(start+value);size=(head-base)/2;return{size:size,base:base,head:head,center:head+size/2};},/**
		 * @private
		 */calculateBarIndexPixels:function calculateBarIndexPixels(datasetIndex,index,ruler){var me=this;var options=ruler.scale.options;var stackIndex=me.getStackIndex(datasetIndex);var pixels=ruler.pixels;var base=pixels[index];var length=pixels.length;var start=ruler.start;var end=ruler.end;var leftSampleSize,rightSampleSize,leftCategorySize,rightCategorySize,fullBarSize,size;if(length===1){leftSampleSize=base>start?base-start:end-base;rightSampleSize=base<end?end-base:base-start;}else{if(index>0){leftSampleSize=(base-pixels[index-1])/2;if(index===length-1){rightSampleSize=leftSampleSize;}}if(index<length-1){rightSampleSize=(pixels[index+1]-base)/2;if(index===0){leftSampleSize=rightSampleSize;}}}leftCategorySize=leftSampleSize*options.categoryPercentage;rightCategorySize=rightSampleSize*options.categoryPercentage;fullBarSize=(leftCategorySize+rightCategorySize)/ruler.stackCount;size=fullBarSize*options.barPercentage;size=Math.min(helpers.valueOrDefault(options.barThickness,size),helpers.valueOrDefault(options.maxBarThickness,Infinity));base-=leftCategorySize;base+=fullBarSize*stackIndex;base+=(fullBarSize-size)/2;return{size:size,base:base,head:base+size,center:base+size/2};},draw:function draw(){var me=this;var chart=me.chart;var scale=me.getValueScale();var rects=me.getMeta().data;var dataset=me.getDataset();var ilen=rects.length;var i=0;helpers.canvas.clipArea(chart.ctx,chart.chartArea);for(;i<ilen;++i){if(!isNaN(scale.getRightValue(dataset.data[i]))){rects[i].draw();}}helpers.canvas.unclipArea(chart.ctx);},setHoverStyle:function setHoverStyle(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.valueAtIndexOrDefault(dataset.hoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.valueAtIndexOrDefault(dataset.hoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.valueAtIndexOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(rectangle){var dataset=this.chart.data.datasets[rectangle._datasetIndex];var index=rectangle._index;var custom=rectangle.custom||{};var model=rectangle._model;var rectangleElementOptions=this.chart.options.elements.rectangle;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.backgroundColor,index,rectangleElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.borderColor,index,rectangleElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.borderWidth,index,rectangleElementOptions.borderWidth);}});Chart.controllers.horizontalBar=Chart.controllers.bar.extend({/**
		 * @private
		 */getValueScaleId:function getValueScaleId(){return this.getMeta().xAxisID;},/**
		 * @private
		 */getIndexScaleId:function getIndexScaleId(){return this.getMeta().yAxisID;}});};},{"25":25,"40":40,"45":45}],16:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('bubble',{hover:{mode:'single'},scales:{xAxes:[{type:'linear',// bubble should probably use a linear scale by default
position:'bottom',id:'x-axis-0'// need an ID so datasets can reference the scale
}],yAxes:[{type:'linear',position:'left',id:'y-axis-0'}]},tooltips:{callbacks:{title:function title(){// Title doesn't make sense for scatter since we format the data as a point
return'';},label:function label(item,data){var datasetLabel=data.datasets[item.datasetIndex].label||'';var dataPoint=data.datasets[item.datasetIndex].data[item.index];return datasetLabel+': ('+item.xLabel+', '+item.yLabel+', '+dataPoint.r+')';}}}});module.exports=function(Chart){Chart.controllers.bubble=Chart.DatasetController.extend({/**
		 * @protected
		 */dataElementType:elements.Point,/**
		 * @protected
		 */update:function update(reset){var me=this;var meta=me.getMeta();var points=meta.data;// Update Points
helpers.each(points,function(point,index){me.updateElement(point,index,reset);});},/**
		 * @protected
		 */updateElement:function updateElement(point,index,reset){var me=this;var meta=me.getMeta();var custom=point.custom||{};var xScale=me.getScaleForId(meta.xAxisID);var yScale=me.getScaleForId(meta.yAxisID);var options=me._resolveElementOptions(point,index);var data=me.getDataset().data[index];var dsIndex=me.index;var x=reset?xScale.getPixelForDecimal(0.5):xScale.getPixelForValue(_typeof2(data)==='object'?data:NaN,index,dsIndex);var y=reset?yScale.getBasePixel():yScale.getPixelForValue(data,index,dsIndex);point._xScale=xScale;point._yScale=yScale;point._options=options;point._datasetIndex=dsIndex;point._index=index;point._model={backgroundColor:options.backgroundColor,borderColor:options.borderColor,borderWidth:options.borderWidth,hitRadius:options.hitRadius,pointStyle:options.pointStyle,radius:reset?0:options.radius,skip:custom.skip||isNaN(x)||isNaN(y),x:x,y:y};point.pivot();},/**
		 * @protected
		 */setHoverStyle:function setHoverStyle(point){var model=point._model;var options=point._options;model.backgroundColor=helpers.valueOrDefault(options.hoverBackgroundColor,helpers.getHoverColor(options.backgroundColor));model.borderColor=helpers.valueOrDefault(options.hoverBorderColor,helpers.getHoverColor(options.borderColor));model.borderWidth=helpers.valueOrDefault(options.hoverBorderWidth,options.borderWidth);model.radius=options.radius+options.hoverRadius;},/**
		 * @protected
		 */removeHoverStyle:function removeHoverStyle(point){var model=point._model;var options=point._options;model.backgroundColor=options.backgroundColor;model.borderColor=options.borderColor;model.borderWidth=options.borderWidth;model.radius=options.radius;},/**
		 * @private
		 */_resolveElementOptions:function _resolveElementOptions(point,index){var me=this;var chart=me.chart;var datasets=chart.data.datasets;var dataset=datasets[me.index];var custom=point.custom||{};var options=chart.options.elements.point;var resolve=helpers.options.resolve;var data=dataset.data[index];var values={};var i,ilen,key;// Scriptable options
var context={chart:chart,dataIndex:index,dataset:dataset,datasetIndex:me.index};var keys=['backgroundColor','borderColor','borderWidth','hoverBackgroundColor','hoverBorderColor','hoverBorderWidth','hoverRadius','hitRadius','pointStyle'];for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];values[key]=resolve([custom[key],dataset[key],options[key]],context,index);}// Custom radius resolution
values.radius=resolve([custom.radius,data?data.r:undefined,dataset.radius,options.radius],context,index);return values;}});};},{"25":25,"40":40,"45":45}],17:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('doughnut',{animation:{// Boolean - Whether we animate the rotation of the Doughnut
animateRotate:true,// Boolean - Whether we animate scaling the Doughnut from the centre
animateScale:false},hover:{mode:'single'},legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}text.push('</li>');}}text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc&&arc.custom||{};var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:valueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:valueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:valueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,// Extra data used for toggling the correct item
index:i};});}return[];}},onClick:function onClick(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);// toggle visibility of index if exists
if(meta.data[index]){meta.data[index].hidden=!meta.data[index].hidden;}}chart.update();}},// The percentage of the chart that we cut out of the middle.
cutoutPercentage:50,// The rotation of the chart, where the first data arc begins.
rotation:Math.PI*-0.5,// The total circumference of the chart.
circumference:Math.PI*2.0,// Need to override these to give a nice default
tooltips:{callbacks:{title:function title(){return'';},label:function label(tooltipItem,data){var dataLabel=data.labels[tooltipItem.index];var value=': '+data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];if(helpers.isArray(dataLabel)){// show value on first line of multiline label
// need to clone because we are changing the value
dataLabel=dataLabel.slice();dataLabel[0]+=value;}else{dataLabel+=value;}return dataLabel;}}}});defaults._set('pie',helpers.clone(defaults.doughnut));defaults._set('pie',{cutoutPercentage:0});module.exports=function(Chart){Chart.controllers.doughnut=Chart.controllers.pie=Chart.DatasetController.extend({dataElementType:elements.Arc,linkScales:helpers.noop,// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
getRingIndex:function getRingIndex(datasetIndex){var ringIndex=0;for(var j=0;j<datasetIndex;++j){if(this.chart.isDatasetVisible(j)){++ringIndex;}}return ringIndex;},update:function update(reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var arcOpts=opts.elements.arc;var availableWidth=chartArea.right-chartArea.left-arcOpts.borderWidth;var availableHeight=chartArea.bottom-chartArea.top-arcOpts.borderWidth;var minSize=Math.min(availableWidth,availableHeight);var offset={x:0,y:0};var meta=me.getMeta();var cutoutPercentage=opts.cutoutPercentage;var circumference=opts.circumference;// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
if(circumference<Math.PI*2.0){var startAngle=opts.rotation%(Math.PI*2.0);startAngle+=Math.PI*2.0*(startAngle>=Math.PI?-1:startAngle<-Math.PI?1:0);var endAngle=startAngle+circumference;var start={x:Math.cos(startAngle),y:Math.sin(startAngle)};var end={x:Math.cos(endAngle),y:Math.sin(endAngle)};var contains0=startAngle<=0&&endAngle>=0||startAngle<=Math.PI*2.0&&Math.PI*2.0<=endAngle;var contains90=startAngle<=Math.PI*0.5&&Math.PI*0.5<=endAngle||startAngle<=Math.PI*2.5&&Math.PI*2.5<=endAngle;var contains180=startAngle<=-Math.PI&&-Math.PI<=endAngle||startAngle<=Math.PI&&Math.PI<=endAngle;var contains270=startAngle<=-Math.PI*0.5&&-Math.PI*0.5<=endAngle||startAngle<=Math.PI*1.5&&Math.PI*1.5<=endAngle;var cutout=cutoutPercentage/100.0;var min={x:contains180?-1:Math.min(start.x*(start.x<0?1:cutout),end.x*(end.x<0?1:cutout)),y:contains270?-1:Math.min(start.y*(start.y<0?1:cutout),end.y*(end.y<0?1:cutout))};var max={x:contains0?1:Math.max(start.x*(start.x>0?1:cutout),end.x*(end.x>0?1:cutout)),y:contains90?1:Math.max(start.y*(start.y>0?1:cutout),end.y*(end.y>0?1:cutout))};var size={width:(max.x-min.x)*0.5,height:(max.y-min.y)*0.5};minSize=Math.min(availableWidth/size.width,availableHeight/size.height);offset={x:(max.x+min.x)*-0.5,y:(max.y+min.y)*-0.5};}chart.borderWidth=me.getMaxBorderWidth(meta.data);chart.outerRadius=Math.max((minSize-chart.borderWidth)/2,0);chart.innerRadius=Math.max(cutoutPercentage?chart.outerRadius/100*cutoutPercentage:0,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();chart.offsetX=offset.x*chart.outerRadius;chart.offsetY=offset.y*chart.outerRadius;meta.total=me.calculateTotal();me.outerRadius=chart.outerRadius-chart.radiusLength*me.getRingIndex(me.index);me.innerRadius=Math.max(me.outerRadius-chart.radiusLength,0);helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function updateElement(arc,index,reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var opts=chart.options;var animationOpts=opts.animation;var centerX=(chartArea.left+chartArea.right)/2;var centerY=(chartArea.top+chartArea.bottom)/2;var startAngle=opts.rotation;// non reset case handled later
var endAngle=opts.rotation;// non reset case handled later
var dataset=me.getDataset();var circumference=reset&&animationOpts.animateRotate?0:arc.hidden?0:me.calculateCircumference(dataset.data[index])*(opts.circumference/(2.0*Math.PI));var innerRadius=reset&&animationOpts.animateScale?0:me.innerRadius;var outerRadius=reset&&animationOpts.animateScale?0:me.outerRadius;var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;helpers.extend(arc,{// Utility
_datasetIndex:me.index,_index:index,// Desired view properties
_model:{x:centerX+chart.offsetX,y:centerY+chart.offsetY,startAngle:startAngle,endAngle:endAngle,circumference:circumference,outerRadius:outerRadius,innerRadius:innerRadius,label:valueAtIndexOrDefault(dataset.label,index,chart.data.labels[index])}});var model=arc._model;// Resets the visual styles
this.removeHoverStyle(arc);// Set correct angles if not resetting
if(!reset||!animationOpts.animateRotate){if(index===0){model.startAngle=opts.rotation;}else{model.startAngle=me.getMeta().data[index-1]._model.endAngle;}model.endAngle=model.startAngle+model.circumference;}arc.pivot();},removeHoverStyle:function removeHoverStyle(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},calculateTotal:function calculateTotal(){var dataset=this.getDataset();var meta=this.getMeta();var total=0;var value;helpers.each(meta.data,function(element,index){value=dataset.data[index];if(!isNaN(value)&&!element.hidden){total+=Math.abs(value);}});/* if (total === 0) {
				total = NaN;
			}*/return total;},calculateCircumference:function calculateCircumference(value){var total=this.getMeta().total;if(total>0&&!isNaN(value)){return Math.PI*2.0*(value/total);}return 0;},// gets the max border or hover width to properly scale pie charts
getMaxBorderWidth:function getMaxBorderWidth(arcs){var max=0;var index=this.index;var length=arcs.length;var borderWidth;var hoverWidth;for(var i=0;i<length;i++){borderWidth=arcs[i]._model?arcs[i]._model.borderWidth:0;hoverWidth=arcs[i]._chart?arcs[i]._chart.config.data.datasets[index].hoverBorderWidth:0;max=borderWidth>max?borderWidth:max;max=hoverWidth>max?hoverWidth:max;}return max;}});};},{"25":25,"40":40,"45":45}],18:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('line',{showLines:true,spanGaps:false,hover:{mode:'label'},scales:{xAxes:[{type:'category',id:'x-axis-0'}],yAxes:[{type:'linear',id:'y-axis-0'}]}});module.exports=function(Chart){function lineEnabled(dataset,options){return helpers.valueOrDefault(dataset.showLine,options.showLines);}Chart.controllers.line=Chart.DatasetController.extend({datasetElementType:elements.Line,dataElementType:elements.Point,update:function update(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data||[];var options=me.chart.options;var lineElementOptions=options.elements.line;var scale=me.getScaleForId(meta.yAxisID);var i,ilen,custom;var dataset=me.getDataset();var showLine=lineEnabled(dataset,options);// Update Line
if(showLine){custom=line.custom||{};// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.tension!==undefined&&dataset.lineTension===undefined){dataset.lineTension=dataset.tension;}// Utility
line._scale=scale;line._datasetIndex=me.index;// Data
line._children=points;// Model
line._model={// Appearance
// The default behavior of lines is to break at null values, according
// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
// This option gives lines the ability to span gaps
spanGaps:dataset.spanGaps?dataset.spanGaps:options.spanGaps,tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:dataset.backgroundColor||lineElementOptions.backgroundColor,borderWidth:custom.borderWidth?custom.borderWidth:dataset.borderWidth||lineElementOptions.borderWidth,borderColor:custom.borderColor?custom.borderColor:dataset.borderColor||lineElementOptions.borderColor,borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:dataset.borderCapStyle||lineElementOptions.borderCapStyle,borderDash:custom.borderDash?custom.borderDash:dataset.borderDash||lineElementOptions.borderDash,borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:dataset.borderDashOffset||lineElementOptions.borderDashOffset,borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:dataset.borderJoinStyle||lineElementOptions.borderJoinStyle,fill:custom.fill?custom.fill:dataset.fill!==undefined?dataset.fill:lineElementOptions.fill,steppedLine:custom.steppedLine?custom.steppedLine:helpers.valueOrDefault(dataset.steppedLine,lineElementOptions.stepped),cubicInterpolationMode:custom.cubicInterpolationMode?custom.cubicInterpolationMode:helpers.valueOrDefault(dataset.cubicInterpolationMode,lineElementOptions.cubicInterpolationMode)};line.pivot();}// Update Points
for(i=0,ilen=points.length;i<ilen;++i){me.updateElement(points[i],i,reset);}if(showLine&&line._model.tension!==0){me.updateBezierControlPoints();}// Now pivot the point for animation
for(i=0,ilen=points.length;i<ilen;++i){points[i].pivot();}},getPointBackgroundColor:function getPointBackgroundColor(point,index){var backgroundColor=this.chart.options.elements.point.backgroundColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.backgroundColor){backgroundColor=custom.backgroundColor;}else if(dataset.pointBackgroundColor){backgroundColor=helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,backgroundColor);}else if(dataset.backgroundColor){backgroundColor=dataset.backgroundColor;}return backgroundColor;},getPointBorderColor:function getPointBorderColor(point,index){var borderColor=this.chart.options.elements.point.borderColor;var dataset=this.getDataset();var custom=point.custom||{};if(custom.borderColor){borderColor=custom.borderColor;}else if(dataset.pointBorderColor){borderColor=helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,borderColor);}else if(dataset.borderColor){borderColor=dataset.borderColor;}return borderColor;},getPointBorderWidth:function getPointBorderWidth(point,index){var borderWidth=this.chart.options.elements.point.borderWidth;var dataset=this.getDataset();var custom=point.custom||{};if(!isNaN(custom.borderWidth)){borderWidth=custom.borderWidth;}else if(!isNaN(dataset.pointBorderWidth)||helpers.isArray(dataset.pointBorderWidth)){borderWidth=helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,borderWidth);}else if(!isNaN(dataset.borderWidth)){borderWidth=dataset.borderWidth;}return borderWidth;},updateElement:function updateElement(point,index,reset){var me=this;var meta=me.getMeta();var custom=point.custom||{};var dataset=me.getDataset();var datasetIndex=me.index;var value=dataset.data[index];var yScale=me.getScaleForId(meta.yAxisID);var xScale=me.getScaleForId(meta.xAxisID);var pointOptions=me.chart.options.elements.point;var x,y;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}if(dataset.hitRadius!==undefined&&dataset.pointHitRadius===undefined){dataset.pointHitRadius=dataset.hitRadius;}x=xScale.getPixelForValue(_typeof2(value)==='object'?value:NaN,index,datasetIndex);y=reset?yScale.getBasePixel():me.calculatePointY(value,index,datasetIndex);// Utility
point._xScale=xScale;point._yScale=yScale;point._datasetIndex=datasetIndex;point._index=index;// Desired view properties
point._model={x:x,y:y,skip:custom.skip||isNaN(x)||isNaN(y),// Appearance
radius:custom.radius||helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointOptions.radius),pointStyle:custom.pointStyle||helpers.valueAtIndexOrDefault(dataset.pointStyle,index,pointOptions.pointStyle),backgroundColor:me.getPointBackgroundColor(point,index),borderColor:me.getPointBorderColor(point,index),borderWidth:me.getPointBorderWidth(point,index),tension:meta.dataset._model?meta.dataset._model.tension:0,steppedLine:meta.dataset._model?meta.dataset._model.steppedLine:false,// Tooltip
hitRadius:custom.hitRadius||helpers.valueAtIndexOrDefault(dataset.pointHitRadius,index,pointOptions.hitRadius)};},calculatePointY:function calculatePointY(value,index,datasetIndex){var me=this;var chart=me.chart;var meta=me.getMeta();var yScale=me.getScaleForId(meta.yAxisID);var sumPos=0;var sumNeg=0;var i,ds,dsMeta;if(yScale.options.stacked){for(i=0;i<datasetIndex;i++){ds=chart.data.datasets[i];dsMeta=chart.getDatasetMeta(i);if(dsMeta.type==='line'&&dsMeta.yAxisID===yScale.id&&chart.isDatasetVisible(i)){var stackedRightValue=Number(yScale.getRightValue(ds.data[index]));if(stackedRightValue<0){sumNeg+=stackedRightValue||0;}else{sumPos+=stackedRightValue||0;}}}var rightValue=Number(yScale.getRightValue(value));if(rightValue<0){return yScale.getPixelForValue(sumNeg+rightValue);}return yScale.getPixelForValue(sumPos+rightValue);}return yScale.getPixelForValue(value);},updateBezierControlPoints:function updateBezierControlPoints(){var me=this;var meta=me.getMeta();var area=me.chart.chartArea;var points=meta.data||[];var i,ilen,point,model,controlPoints;// Only consider points that are drawn in case the spanGaps option is used
if(meta.dataset._model.spanGaps){points=points.filter(function(pt){return!pt._model.skip;});}function capControlPoint(pt,min,max){return Math.max(Math.min(pt,max),min);}if(meta.dataset._model.cubicInterpolationMode==='monotone'){helpers.splineCurveMonotone(points);}else{for(i=0,ilen=points.length;i<ilen;++i){point=points[i];model=point._model;controlPoints=helpers.splineCurve(helpers.previousItem(points,i)._model,model,helpers.nextItem(points,i)._model,meta.dataset._model.tension);model.controlPointPreviousX=controlPoints.previous.x;model.controlPointPreviousY=controlPoints.previous.y;model.controlPointNextX=controlPoints.next.x;model.controlPointNextY=controlPoints.next.y;}}if(me.chart.options.elements.line.capBezierPoints){for(i=0,ilen=points.length;i<ilen;++i){model=points[i]._model;model.controlPointPreviousX=capControlPoint(model.controlPointPreviousX,area.left,area.right);model.controlPointPreviousY=capControlPoint(model.controlPointPreviousY,area.top,area.bottom);model.controlPointNextX=capControlPoint(model.controlPointNextX,area.left,area.right);model.controlPointNextY=capControlPoint(model.controlPointNextY,area.top,area.bottom);}}},draw:function draw(){var me=this;var chart=me.chart;var meta=me.getMeta();var points=meta.data||[];var area=chart.chartArea;var ilen=points.length;var i=0;helpers.canvas.clipArea(chart.ctx,area);if(lineEnabled(me.getDataset(),chart.options)){meta.dataset.draw();}helpers.canvas.unclipArea(chart.ctx);// Draw the points
for(;i<ilen;++i){points[i].draw(area);}},setHoverStyle:function setHoverStyle(point){// Point
var dataset=this.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;model.radius=custom.hoverRadius||helpers.valueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor||helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor||helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth||helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(point){var me=this;var dataset=me.chart.data.datasets[point._datasetIndex];var index=point._index;var custom=point.custom||{};var model=point._model;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}model.radius=custom.radius||helpers.valueAtIndexOrDefault(dataset.pointRadius,index,me.chart.options.elements.point.radius);model.backgroundColor=me.getPointBackgroundColor(point,index);model.borderColor=me.getPointBorderColor(point,index);model.borderWidth=me.getPointBorderWidth(point,index);}});};},{"25":25,"40":40,"45":45}],19:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('polarArea',{scale:{type:'radialLinear',angleLines:{display:false},gridLines:{circular:true},pointLabels:{display:false},ticks:{beginAtZero:true}},// Boolean - Whether to animate the rotation of the chart
animation:{animateRotate:true,animateScale:true},startAngle:-0.5*Math.PI,legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');var data=chart.data;var datasets=data.datasets;var labels=data.labels;if(datasets.length){for(var i=0;i<datasets[0].data.length;++i){text.push('<li><span style="background-color:'+datasets[0].backgroundColor[i]+'"></span>');if(labels[i]){text.push(labels[i]);}text.push('</li>');}}text.push('</ul>');return text.join('');},legend:{labels:{generateLabels:function generateLabels(chart){var data=chart.data;if(data.labels.length&&data.datasets.length){return data.labels.map(function(label,i){var meta=chart.getDatasetMeta(0);var ds=data.datasets[0];var arc=meta.data[i];var custom=arc.custom||{};var valueAtIndexOrDefault=helpers.valueAtIndexOrDefault;var arcOpts=chart.options.elements.arc;var fill=custom.backgroundColor?custom.backgroundColor:valueAtIndexOrDefault(ds.backgroundColor,i,arcOpts.backgroundColor);var stroke=custom.borderColor?custom.borderColor:valueAtIndexOrDefault(ds.borderColor,i,arcOpts.borderColor);var bw=custom.borderWidth?custom.borderWidth:valueAtIndexOrDefault(ds.borderWidth,i,arcOpts.borderWidth);return{text:label,fillStyle:fill,strokeStyle:stroke,lineWidth:bw,hidden:isNaN(ds.data[i])||meta.data[i].hidden,// Extra data used for toggling the correct item
index:i};});}return[];}},onClick:function onClick(e,legendItem){var index=legendItem.index;var chart=this.chart;var i,ilen,meta;for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){meta=chart.getDatasetMeta(i);meta.data[index].hidden=!meta.data[index].hidden;}chart.update();}},// Need to override these to give a nice default
tooltips:{callbacks:{title:function title(){return'';},label:function label(item,data){return data.labels[item.index]+': '+item.yLabel;}}}});module.exports=function(Chart){Chart.controllers.polarArea=Chart.DatasetController.extend({dataElementType:elements.Arc,linkScales:helpers.noop,update:function update(reset){var me=this;var chart=me.chart;var chartArea=chart.chartArea;var meta=me.getMeta();var opts=chart.options;var arcOpts=opts.elements.arc;var minSize=Math.min(chartArea.right-chartArea.left,chartArea.bottom-chartArea.top);chart.outerRadius=Math.max((minSize-arcOpts.borderWidth/2)/2,0);chart.innerRadius=Math.max(opts.cutoutPercentage?chart.outerRadius/100*opts.cutoutPercentage:1,0);chart.radiusLength=(chart.outerRadius-chart.innerRadius)/chart.getVisibleDatasetCount();me.outerRadius=chart.outerRadius-chart.radiusLength*me.index;me.innerRadius=me.outerRadius-chart.radiusLength;meta.count=me.countVisibleElements();helpers.each(meta.data,function(arc,index){me.updateElement(arc,index,reset);});},updateElement:function updateElement(arc,index,reset){var me=this;var chart=me.chart;var dataset=me.getDataset();var opts=chart.options;var animationOpts=opts.animation;var scale=chart.scale;var labels=chart.data.labels;var circumference=me.calculateCircumference(dataset.data[index]);var centerX=scale.xCenter;var centerY=scale.yCenter;// If there is NaN data before us, we need to calculate the starting angle correctly.
// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
var visibleCount=0;var meta=me.getMeta();for(var i=0;i<index;++i){if(!isNaN(dataset.data[i])&&!meta.data[i].hidden){++visibleCount;}}// var negHalfPI = -0.5 * Math.PI;
var datasetStartAngle=opts.startAngle;var distance=arc.hidden?0:scale.getDistanceFromCenterForValue(dataset.data[index]);var startAngle=datasetStartAngle+circumference*visibleCount;var endAngle=startAngle+(arc.hidden?0:circumference);var resetRadius=animationOpts.animateScale?0:scale.getDistanceFromCenterForValue(dataset.data[index]);helpers.extend(arc,{// Utility
_datasetIndex:me.index,_index:index,_scale:scale,// Desired view properties
_model:{x:centerX,y:centerY,innerRadius:0,outerRadius:reset?resetRadius:distance,startAngle:reset&&animationOpts.animateRotate?datasetStartAngle:startAngle,endAngle:reset&&animationOpts.animateRotate?datasetStartAngle:endAngle,label:helpers.valueAtIndexOrDefault(labels,index,labels[index])}});// Apply border and fill style
me.removeHoverStyle(arc);arc.pivot();},removeHoverStyle:function removeHoverStyle(arc){Chart.DatasetController.prototype.removeHoverStyle.call(this,arc,this.chart.options.elements.arc);},countVisibleElements:function countVisibleElements(){var dataset=this.getDataset();var meta=this.getMeta();var count=0;helpers.each(meta.data,function(element,index){if(!isNaN(dataset.data[index])&&!element.hidden){count++;}});return count;},calculateCircumference:function calculateCircumference(value){var count=this.getMeta().count;if(count>0&&!isNaN(value)){return 2*Math.PI/count;}return 0;}});};},{"25":25,"40":40,"45":45}],20:[function(require,module,exports){'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('radar',{scale:{type:'radialLinear'},elements:{line:{tension:0// no bezier in radar
}}});module.exports=function(Chart){Chart.controllers.radar=Chart.DatasetController.extend({datasetElementType:elements.Line,dataElementType:elements.Point,linkScales:helpers.noop,update:function update(reset){var me=this;var meta=me.getMeta();var line=meta.dataset;var points=meta.data;var custom=line.custom||{};var dataset=me.getDataset();var lineElementOptions=me.chart.options.elements.line;var scale=me.chart.scale;// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.tension!==undefined&&dataset.lineTension===undefined){dataset.lineTension=dataset.tension;}helpers.extend(meta.dataset,{// Utility
_datasetIndex:me.index,_scale:scale,// Data
_children:points,_loop:true,// Model
_model:{// Appearance
tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,lineElementOptions.tension),backgroundColor:custom.backgroundColor?custom.backgroundColor:dataset.backgroundColor||lineElementOptions.backgroundColor,borderWidth:custom.borderWidth?custom.borderWidth:dataset.borderWidth||lineElementOptions.borderWidth,borderColor:custom.borderColor?custom.borderColor:dataset.borderColor||lineElementOptions.borderColor,fill:custom.fill?custom.fill:dataset.fill!==undefined?dataset.fill:lineElementOptions.fill,borderCapStyle:custom.borderCapStyle?custom.borderCapStyle:dataset.borderCapStyle||lineElementOptions.borderCapStyle,borderDash:custom.borderDash?custom.borderDash:dataset.borderDash||lineElementOptions.borderDash,borderDashOffset:custom.borderDashOffset?custom.borderDashOffset:dataset.borderDashOffset||lineElementOptions.borderDashOffset,borderJoinStyle:custom.borderJoinStyle?custom.borderJoinStyle:dataset.borderJoinStyle||lineElementOptions.borderJoinStyle}});meta.dataset.pivot();// Update Points
helpers.each(points,function(point,index){me.updateElement(point,index,reset);},me);// Update bezier control points
me.updateBezierControlPoints();},updateElement:function updateElement(point,index,reset){var me=this;var custom=point.custom||{};var dataset=me.getDataset();var scale=me.chart.scale;var pointElementOptions=me.chart.options.elements.point;var pointPosition=scale.getPointPositionForValue(index,dataset.data[index]);// Compatibility: If the properties are defined with only the old name, use those values
if(dataset.radius!==undefined&&dataset.pointRadius===undefined){dataset.pointRadius=dataset.radius;}if(dataset.hitRadius!==undefined&&dataset.pointHitRadius===undefined){dataset.pointHitRadius=dataset.hitRadius;}helpers.extend(point,{// Utility
_datasetIndex:me.index,_index:index,_scale:scale,// Desired view properties
_model:{x:reset?scale.xCenter:pointPosition.x,// value not used in dataset scale, but we want a consistent API between scales
y:reset?scale.yCenter:pointPosition.y,// Appearance
tension:custom.tension?custom.tension:helpers.valueOrDefault(dataset.lineTension,me.chart.options.elements.line.tension),radius:custom.radius?custom.radius:helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius),backgroundColor:custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor),borderColor:custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor),borderWidth:custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth),pointStyle:custom.pointStyle?custom.pointStyle:helpers.valueAtIndexOrDefault(dataset.pointStyle,index,pointElementOptions.pointStyle),// Tooltip
hitRadius:custom.hitRadius?custom.hitRadius:helpers.valueAtIndexOrDefault(dataset.pointHitRadius,index,pointElementOptions.hitRadius)}});point._model.skip=custom.skip?custom.skip:isNaN(point._model.x)||isNaN(point._model.y);},updateBezierControlPoints:function updateBezierControlPoints(){var chartArea=this.chart.chartArea;var meta=this.getMeta();helpers.each(meta.data,function(point,index){var model=point._model;var controlPoints=helpers.splineCurve(helpers.previousItem(meta.data,index,true)._model,model,helpers.nextItem(meta.data,index,true)._model,model.tension);// Prevent the bezier going outside of the bounds of the graph
model.controlPointPreviousX=Math.max(Math.min(controlPoints.previous.x,chartArea.right),chartArea.left);model.controlPointPreviousY=Math.max(Math.min(controlPoints.previous.y,chartArea.bottom),chartArea.top);model.controlPointNextX=Math.max(Math.min(controlPoints.next.x,chartArea.right),chartArea.left);model.controlPointNextY=Math.max(Math.min(controlPoints.next.y,chartArea.bottom),chartArea.top);// Now pivot the point for animation
point.pivot();});},setHoverStyle:function setHoverStyle(point){// Point
var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;model.radius=custom.hoverRadius?custom.hoverRadius:helpers.valueAtIndexOrDefault(dataset.pointHoverRadius,index,this.chart.options.elements.point.hoverRadius);model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor,index,helpers.getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor,index,helpers.getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth,index,model.borderWidth);},removeHoverStyle:function removeHoverStyle(point){var dataset=this.chart.data.datasets[point._datasetIndex];var custom=point.custom||{};var index=point._index;var model=point._model;var pointElementOptions=this.chart.options.elements.point;model.radius=custom.radius?custom.radius:helpers.valueAtIndexOrDefault(dataset.pointRadius,index,pointElementOptions.radius);model.backgroundColor=custom.backgroundColor?custom.backgroundColor:helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor,index,pointElementOptions.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:helpers.valueAtIndexOrDefault(dataset.pointBorderColor,index,pointElementOptions.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:helpers.valueAtIndexOrDefault(dataset.pointBorderWidth,index,pointElementOptions.borderWidth);}});};},{"25":25,"40":40,"45":45}],21:[function(require,module,exports){'use strict';var defaults=require(25);defaults._set('scatter',{hover:{mode:'single'},scales:{xAxes:[{id:'x-axis-1',// need an ID so datasets can reference the scale
type:'linear',// scatter should not use a category axis
position:'bottom'}],yAxes:[{id:'y-axis-1',type:'linear',position:'left'}]},showLines:false,tooltips:{callbacks:{title:function title(){return'';// doesn't make sense for scatter since data are formatted as a point
},label:function label(item){return'('+item.xLabel+', '+item.yLabel+')';}}}});module.exports=function(Chart){// Scatter charts use line controllers
Chart.controllers.scatter=Chart.controllers.line;};},{"25":25}],22:[function(require,module,exports){/* global window: false */'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{animation:{duration:1000,easing:'easeOutQuart',onProgress:helpers.noop,onComplete:helpers.noop}});module.exports=function(Chart){Chart.Animation=Element.extend({chart:null,// the animation associated chart instance
currentStep:0,// the current animation step
numSteps:60,// default number of steps
easing:'',// the easing to use for this animation
render:null,// render function used by the animation service
onAnimationProgress:null,// user specified callback to fire on each step of the animation
onAnimationComplete:null// user specified callback to fire when the animation finishes
});Chart.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */addAnimation:function addAnimation(chart,animation,duration,lazy){var animations=this.animations;var i,ilen;animation.chart=chart;if(!lazy){chart.animating=true;}for(i=0,ilen=animations.length;i<ilen;++i){if(animations[i].chart===chart){animations[i]=animation;return;}}animations.push(animation);// If there are no animations queued, manually kickstart a digest, for lack of a better word
if(animations.length===1){this.requestAnimationFrame();}},cancelAnimation:function cancelAnimation(chart){var index=helpers.findIndex(this.animations,function(animation){return animation.chart===chart;});if(index!==-1){this.animations.splice(index,1);chart.animating=false;}},requestAnimationFrame:function requestAnimationFrame(){var me=this;if(me.request===null){// Skip animation frame requests until the active one is executed.
// This can happen when processing mouse events, e.g. 'mousemove'
// and 'mouseout' events will trigger multiple renders.
me.request=helpers.requestAnimFrame.call(window,function(){me.request=null;me.startDigest();});}},/**
		 * @private
		 */startDigest:function startDigest(){var me=this;var startTime=Date.now();var framesToDrop=0;if(me.dropFrames>1){framesToDrop=Math.floor(me.dropFrames);me.dropFrames=me.dropFrames%1;}me.advance(1+framesToDrop);var endTime=Date.now();me.dropFrames+=(endTime-startTime)/me.frameDuration;// Do we have more stuff to animate?
if(me.animations.length>0){me.requestAnimationFrame();}},/**
		 * @private
		 */advance:function advance(count){var animations=this.animations;var animation,chart;var i=0;while(i<animations.length){animation=animations[i];chart=animation.chart;animation.currentStep=(animation.currentStep||0)+count;animation.currentStep=Math.min(animation.currentStep,animation.numSteps);helpers.callback(animation.render,[chart,animation],chart);helpers.callback(animation.onAnimationProgress,[animation],chart);if(animation.currentStep>=animation.numSteps){helpers.callback(animation.onAnimationComplete,[animation],chart);chart.animating=false;animations.splice(i,1);}else{++i;}}}};/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */Object.defineProperty(Chart.Animation.prototype,'animationObject',{get:function get(){return this;}});/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */Object.defineProperty(Chart.Animation.prototype,'chartInstance',{get:function get(){return this.chart;},set:function set(value){this.chart=value;}});};},{"25":25,"26":26,"45":45}],23:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Interaction=require(28);var platform=require(48);module.exports=function(Chart){var plugins=Chart.plugins;// Create a dictionary of chart types, to allow for extension of existing types
Chart.types={};// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
// Destroy method on the chart will remove the instance of the chart from this reference.
Chart.instances={};// Controllers available for dataset visualization eg. bar, line, slice, etc.
Chart.controllers={};/**
	 * Initializes the given config with global and chart default values.
	 */function initConfig(config){config=config||{};// Do NOT use configMerge() for the data object because this method merges arrays
// and so would change references to labels and datasets, preventing data updates.
var data=config.data=config.data||{};data.datasets=data.datasets||[];data.labels=data.labels||[];config.options=helpers.configMerge(defaults.global,defaults[config.type],config.options||{});return config;}/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */function updateConfig(chart){var newOptions=chart.options;// Update Scale(s) with options
if(newOptions.scale){chart.scale.options=newOptions.scale;}else if(newOptions.scales){newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions){chart.scales[scaleOptions.id].options=scaleOptions;});}// Tooltip
chart.tooltip._options=newOptions.tooltips;}function positionIsHorizontal(position){return position==='top'||position==='bottom';}helpers.extend(Chart.prototype,/** @lends Chart */{/**
		 * @private
		 */construct:function construct(item,config){var me=this;config=initConfig(config);var context=platform.acquireContext(item,config);var canvas=context&&context.canvas;var height=canvas&&canvas.height;var width=canvas&&canvas.width;me.id=helpers.uid();me.ctx=context;me.canvas=canvas;me.config=config;me.width=width;me.height=height;me.aspectRatio=height?width/height:null;me.options=config.options;me._bufferedRender=false;/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */me.chart=me;me.controller=me;// chart.chart.controller #inception
// Add the chart instance to the global namespace
Chart.instances[me.id]=me;// Define alias to the config data: `chart.data === chart.config.data`
Object.defineProperty(me,'data',{get:function get(){return me.config.data;},set:function set(value){me.config.data=value;}});if(!context||!canvas){// The given item is not a compatible context2d element, let's return before finalizing
// the chart initialization but after setting basic chart / controller properties that
// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
// https://github.com/chartjs/Chart.js/issues/2807
console.error("Failed to create chart: can't acquire context from the given item");return;}me.initialize();me.update();},/**
		 * @private
		 */initialize:function initialize(){var me=this;// Before init plugin notification
plugins.notify(me,'beforeInit');helpers.retinaScale(me,me.options.devicePixelRatio);me.bindEvents();if(me.options.responsive){// Initial resize before chart draws (must be silent to preserve initial animations).
me.resize(true);}// Make sure scales have IDs and are built before we build any controllers.
me.ensureScalesHaveIDs();me.buildScales();me.initToolTip();// After init plugin notification
plugins.notify(me,'afterInit');return me;},clear:function clear(){helpers.canvas.clear(this);return this;},stop:function stop(){// Stops any current animation loop occurring
Chart.animationService.cancelAnimation(this);return this;},resize:function resize(silent){var me=this;var options=me.options;var canvas=me.canvas;var aspectRatio=options.maintainAspectRatio&&me.aspectRatio||null;// the canvas render width and height will be casted to integers so make sure that
// the canvas display style uses the same integer values to avoid blurring effect.
// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collased
var newWidth=Math.max(0,Math.floor(helpers.getMaximumWidth(canvas)));var newHeight=Math.max(0,Math.floor(aspectRatio?newWidth/aspectRatio:helpers.getMaximumHeight(canvas)));if(me.width===newWidth&&me.height===newHeight){return;}canvas.width=me.width=newWidth;canvas.height=me.height=newHeight;canvas.style.width=newWidth+'px';canvas.style.height=newHeight+'px';helpers.retinaScale(me,options.devicePixelRatio);if(!silent){// Notify any plugins about the resize
var newSize={width:newWidth,height:newHeight};plugins.notify(me,'resize',[newSize]);// Notify of resize
if(me.options.onResize){me.options.onResize(me,newSize);}me.stop();me.update(me.options.responsiveAnimationDuration);}},ensureScalesHaveIDs:function ensureScalesHaveIDs(){var options=this.options;var scalesOptions=options.scales||{};var scaleOptions=options.scale;helpers.each(scalesOptions.xAxes,function(xAxisOptions,index){xAxisOptions.id=xAxisOptions.id||'x-axis-'+index;});helpers.each(scalesOptions.yAxes,function(yAxisOptions,index){yAxisOptions.id=yAxisOptions.id||'y-axis-'+index;});if(scaleOptions){scaleOptions.id=scaleOptions.id||'scale';}},/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */buildScales:function buildScales(){var me=this;var options=me.options;var scales=me.scales={};var items=[];if(options.scales){items=items.concat((options.scales.xAxes||[]).map(function(xAxisOptions){return{options:xAxisOptions,dtype:'category',dposition:'bottom'};}),(options.scales.yAxes||[]).map(function(yAxisOptions){return{options:yAxisOptions,dtype:'linear',dposition:'left'};}));}if(options.scale){items.push({options:options.scale,dtype:'radialLinear',isDefault:true,dposition:'chartArea'});}helpers.each(items,function(item){var scaleOptions=item.options;var scaleType=helpers.valueOrDefault(scaleOptions.type,item.dtype);var scaleClass=Chart.scaleService.getScaleConstructor(scaleType);if(!scaleClass){return;}if(positionIsHorizontal(scaleOptions.position)!==positionIsHorizontal(item.dposition)){scaleOptions.position=item.dposition;}var scale=new scaleClass({id:scaleOptions.id,options:scaleOptions,ctx:me.ctx,chart:me});scales[scale.id]=scale;scale.mergeTicksOptions();// TODO(SB): I think we should be able to remove this custom case (options.scale)
// and consider it as a regular scale part of the "scales"" map only! This would
// make the logic easier and remove some useless? custom code.
if(item.isDefault){me.scale=scale;}});Chart.scaleService.addScalesToLayout(this);},buildOrUpdateControllers:function buildOrUpdateControllers(){var me=this;var types=[];var newControllers=[];helpers.each(me.data.datasets,function(dataset,datasetIndex){var meta=me.getDatasetMeta(datasetIndex);var type=dataset.type||me.config.type;if(meta.type&&meta.type!==type){me.destroyDatasetMeta(datasetIndex);meta=me.getDatasetMeta(datasetIndex);}meta.type=type;types.push(meta.type);if(meta.controller){meta.controller.updateIndex(datasetIndex);}else{var ControllerClass=Chart.controllers[meta.type];if(ControllerClass===undefined){throw new Error('"'+meta.type+'" is not a chart type.');}meta.controller=new ControllerClass(me,datasetIndex);newControllers.push(meta.controller);}},me);return newControllers;},/**
		 * Reset the elements of all datasets
		 * @private
		 */resetElements:function resetElements(){var me=this;helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.reset();},me);},/**
		* Resets the chart back to it's state before the initial animation
		*/reset:function reset(){this.resetElements();this.tooltip.initialize();},update:function update(config){var me=this;if(!config||_typeof2(config)!=='object'){// backwards compatibility
config={duration:config,lazy:arguments[1]};}updateConfig(me);if(plugins.notify(me,'beforeUpdate')===false){return;}// In case the entire data object changed
me.tooltip._data=me.data;// Make sure dataset controllers are updated and new controllers are reset
var newControllers=me.buildOrUpdateControllers();// Make sure all dataset controllers have correct meta data counts
helpers.each(me.data.datasets,function(dataset,datasetIndex){me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();},me);me.updateLayout();// Can only reset the new controllers after the scales have been updated
helpers.each(newControllers,function(controller){controller.reset();});me.updateDatasets();// Need to reset tooltip in case it is displayed with elements that are removed
// after update.
me.tooltip.initialize();// Last active contains items that were previously in the tooltip.
// When we reset the tooltip, we need to clear it
me.lastActive=[];// Do this before render so that any plugins that need final scale updates can use it
plugins.notify(me,'afterUpdate');if(me._bufferedRender){me._bufferedRequest={duration:config.duration,easing:config.easing,lazy:config.lazy};}else{me.render(config);}},/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */updateLayout:function updateLayout(){var me=this;if(plugins.notify(me,'beforeLayout')===false){return;}Chart.layoutService.update(this,this.width,this.height);/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */plugins.notify(me,'afterScaleUpdate');plugins.notify(me,'afterLayout');},/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */updateDatasets:function updateDatasets(){var me=this;if(plugins.notify(me,'beforeDatasetsUpdate')===false){return;}for(var i=0,ilen=me.data.datasets.length;i<ilen;++i){me.updateDataset(i);}plugins.notify(me,'afterDatasetsUpdate');},/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */updateDataset:function updateDataset(index){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index};if(plugins.notify(me,'beforeDatasetUpdate',[args])===false){return;}meta.controller.update();plugins.notify(me,'afterDatasetUpdate',[args]);},render:function render(config){var me=this;if(!config||_typeof2(config)!=='object'){// backwards compatibility
config={duration:config,lazy:arguments[1]};}var duration=config.duration;var lazy=config.lazy;if(plugins.notify(me,'beforeRender')===false){return;}var animationOptions=me.options.animation;var onComplete=function onComplete(animation){plugins.notify(me,'afterRender');helpers.callback(animationOptions&&animationOptions.onComplete,[animation],me);};if(animationOptions&&(typeof duration!=='undefined'&&duration!==0||typeof duration==='undefined'&&animationOptions.duration!==0)){var animation=new Chart.Animation({numSteps:(duration||animationOptions.duration)/16.66,// 60 fps
easing:config.easing||animationOptions.easing,render:function render(chart,animationObject){var easingFunction=helpers.easing.effects[animationObject.easing];var currentStep=animationObject.currentStep;var stepDecimal=currentStep/animationObject.numSteps;chart.draw(easingFunction(stepDecimal),stepDecimal,currentStep);},onAnimationProgress:animationOptions.onProgress,onAnimationComplete:onComplete});Chart.animationService.addAnimation(me,animation,duration,lazy);}else{me.draw();// See https://github.com/chartjs/Chart.js/issues/3781
onComplete(new Chart.Animation({numSteps:0,chart:me}));}return me;},draw:function draw(easingValue){var me=this;me.clear();if(helpers.isNullOrUndef(easingValue)){easingValue=1;}me.transition(easingValue);if(plugins.notify(me,'beforeDraw',[easingValue])===false){return;}// Draw all the scales
helpers.each(me.boxes,function(box){box.draw(me.chartArea);},me);if(me.scale){me.scale.draw();}me.drawDatasets(easingValue);me._drawTooltip(easingValue);plugins.notify(me,'afterDraw',[easingValue]);},/**
		 * @private
		 */transition:function transition(easingValue){var me=this;for(var i=0,ilen=(me.data.datasets||[]).length;i<ilen;++i){if(me.isDatasetVisible(i)){me.getDatasetMeta(i).controller.transition(easingValue);}}me.tooltip.transition(easingValue);},/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */drawDatasets:function drawDatasets(easingValue){var me=this;if(plugins.notify(me,'beforeDatasetsDraw',[easingValue])===false){return;}// Draw datasets reversed to support proper line stacking
for(var i=(me.data.datasets||[]).length-1;i>=0;--i){if(me.isDatasetVisible(i)){me.drawDataset(i,easingValue);}}plugins.notify(me,'afterDatasetsDraw',[easingValue]);},/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */drawDataset:function drawDataset(index,easingValue){var me=this;var meta=me.getDatasetMeta(index);var args={meta:meta,index:index,easingValue:easingValue};if(plugins.notify(me,'beforeDatasetDraw',[args])===false){return;}meta.controller.draw(easingValue);plugins.notify(me,'afterDatasetDraw',[args]);},/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */_drawTooltip:function _drawTooltip(easingValue){var me=this;var tooltip=me.tooltip;var args={tooltip:tooltip,easingValue:easingValue};if(plugins.notify(me,'beforeTooltipDraw',[args])===false){return;}tooltip.draw();plugins.notify(me,'afterTooltipDraw',[args]);},// Get the single element that was clicked on
// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
getElementAtEvent:function getElementAtEvent(e){return Interaction.modes.single(this,e);},getElementsAtEvent:function getElementsAtEvent(e){return Interaction.modes.label(this,e,{intersect:true});},getElementsAtXAxis:function getElementsAtXAxis(e){return Interaction.modes['x-axis'](this,e,{intersect:true});},getElementsAtEventForMode:function getElementsAtEventForMode(e,mode,options){var method=Interaction.modes[mode];if(typeof method==='function'){return method(this,e,options);}return[];},getDatasetAtEvent:function getDatasetAtEvent(e){return Interaction.modes.dataset(this,e,{intersect:true});},getDatasetMeta:function getDatasetMeta(datasetIndex){var me=this;var dataset=me.data.datasets[datasetIndex];if(!dataset._meta){dataset._meta={};}var meta=dataset._meta[me.id];if(!meta){meta=dataset._meta[me.id]={type:null,data:[],dataset:null,controller:null,hidden:null,// See isDatasetVisible() comment
xAxisID:null,yAxisID:null};}return meta;},getVisibleDatasetCount:function getVisibleDatasetCount(){var count=0;for(var i=0,ilen=this.data.datasets.length;i<ilen;++i){if(this.isDatasetVisible(i)){count++;}}return count;},isDatasetVisible:function isDatasetVisible(datasetIndex){var meta=this.getDatasetMeta(datasetIndex);// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
return typeof meta.hidden==='boolean'?!meta.hidden:!this.data.datasets[datasetIndex].hidden;},generateLegend:function generateLegend(){return this.options.legendCallback(this);},/**
		 * @private
		 */destroyDatasetMeta:function destroyDatasetMeta(datasetIndex){var id=this.id;var dataset=this.data.datasets[datasetIndex];var meta=dataset._meta&&dataset._meta[id];if(meta){meta.controller.destroy();delete dataset._meta[id];}},destroy:function destroy(){var me=this;var canvas=me.canvas;var i,ilen;me.stop();// dataset controllers need to cleanup associated data
for(i=0,ilen=me.data.datasets.length;i<ilen;++i){me.destroyDatasetMeta(i);}if(canvas){me.unbindEvents();helpers.canvas.clear(me);platform.releaseContext(me.ctx);me.canvas=null;me.ctx=null;}plugins.notify(me,'destroy');delete Chart.instances[me.id];},toBase64Image:function toBase64Image(){return this.canvas.toDataURL.apply(this.canvas,arguments);},initToolTip:function initToolTip(){var me=this;me.tooltip=new Chart.Tooltip({_chart:me,_chartInstance:me,// deprecated, backward compatibility
_data:me.data,_options:me.options.tooltips},me);},/**
		 * @private
		 */bindEvents:function bindEvents(){var me=this;var listeners=me._listeners={};var listener=function listener(){me.eventHandler.apply(me,arguments);};helpers.each(me.options.events,function(type){platform.addEventListener(me,type,listener);listeners[type]=listener;});// Elements used to detect size change should not be injected for non responsive charts.
// See https://github.com/chartjs/Chart.js/issues/2210
if(me.options.responsive){listener=function listener(){me.resize();};platform.addEventListener(me,'resize',listener);listeners.resize=listener;}},/**
		 * @private
		 */unbindEvents:function unbindEvents(){var me=this;var listeners=me._listeners;if(!listeners){return;}delete me._listeners;helpers.each(listeners,function(listener,type){platform.removeEventListener(me,type,listener);});},updateHoverStyle:function updateHoverStyle(elements,mode,enabled){var method=enabled?'setHoverStyle':'removeHoverStyle';var element,i,ilen;for(i=0,ilen=elements.length;i<ilen;++i){element=elements[i];if(element){this.getDatasetMeta(element._datasetIndex).controller[method](element);}}},/**
		 * @private
		 */eventHandler:function eventHandler(e){var me=this;var tooltip=me.tooltip;if(plugins.notify(me,'beforeEvent',[e])===false){return;}// Buffer any update calls so that renders do not occur
me._bufferedRender=true;me._bufferedRequest=null;var changed=me.handleEvent(e);changed|=tooltip&&tooltip.handleEvent(e);plugins.notify(me,'afterEvent',[e]);var bufferedRequest=me._bufferedRequest;if(bufferedRequest){// If we have an update that was triggered, we need to do a normal render
me.render(bufferedRequest);}else if(changed&&!me.animating){// If entering, leaving, or changing elements, animate the change via pivot
me.stop();// We only need to render at this point. Updating will cause scales to be
// recomputed generating flicker & using more memory than necessary.
me.render(me.options.hover.animationDuration,true);}me._bufferedRender=false;me._bufferedRequest=null;return me;},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */handleEvent:function handleEvent(e){var me=this;var options=me.options||{};var hoverOptions=options.hover;var changed=false;me.lastActive=me.lastActive||[];// Find Active Elements for hover and tooltips
if(e.type==='mouseout'){me.active=[];}else{me.active=me.getElementsAtEventForMode(e,hoverOptions.mode,hoverOptions);}// Invoke onHover hook
// Need to call with native event here to not break backwards compatibility
helpers.callback(options.onHover||options.hover.onHover,[e["native"],me.active],me);if(e.type==='mouseup'||e.type==='click'){if(options.onClick){// Use e.native here for backwards compatibility
options.onClick.call(me,e["native"],me.active);}}// Remove styling for last active (even if it may still be active)
if(me.lastActive.length){me.updateHoverStyle(me.lastActive,hoverOptions.mode,false);}// Built in hover styling
if(me.active.length&&hoverOptions.mode){me.updateHoverStyle(me.active,hoverOptions.mode,true);}changed=!helpers.arrayEquals(me.active,me.lastActive);// Remember Last Actives
me.lastActive=me.active;return changed;}});/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */Chart.Controller=Chart;};},{"25":25,"28":28,"45":45,"48":48}],24:[function(require,module,exports){'use strict';var helpers=require(45);module.exports=function(Chart){var arrayEvents=['push','pop','shift','splice','unshift'];/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */function listenArrayEvents(array,listener){if(array._chartjs){array._chartjs.listeners.push(listener);return;}Object.defineProperty(array,'_chartjs',{configurable:true,enumerable:false,value:{listeners:[listener]}});arrayEvents.forEach(function(key){var method='onData'+key.charAt(0).toUpperCase()+key.slice(1);var base=array[key];Object.defineProperty(array,key,{configurable:true,enumerable:false,value:function value(){var args=Array.prototype.slice.call(arguments);var res=base.apply(this,args);helpers.each(array._chartjs.listeners,function(object){if(typeof object[method]==='function'){object[method].apply(object,args);}});return res;}});});}/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */function unlistenArrayEvents(array,listener){var stub=array._chartjs;if(!stub){return;}var listeners=stub.listeners;var index=listeners.indexOf(listener);if(index!==-1){listeners.splice(index,1);}if(listeners.length>0){return;}arrayEvents.forEach(function(key){delete array[key];});delete array._chartjs;}// Base class for all dataset controllers (line, bar, etc)
Chart.DatasetController=function(chart,datasetIndex){this.initialize(chart,datasetIndex);};helpers.extend(Chart.DatasetController.prototype,{/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */datasetElementType:null,/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */dataElementType:null,initialize:function initialize(chart,datasetIndex){var me=this;me.chart=chart;me.index=datasetIndex;me.linkScales();me.addElements();},updateIndex:function updateIndex(datasetIndex){this.index=datasetIndex;},linkScales:function linkScales(){var me=this;var meta=me.getMeta();var dataset=me.getDataset();if(meta.xAxisID===null){meta.xAxisID=dataset.xAxisID||me.chart.options.scales.xAxes[0].id;}if(meta.yAxisID===null){meta.yAxisID=dataset.yAxisID||me.chart.options.scales.yAxes[0].id;}},getDataset:function getDataset(){return this.chart.data.datasets[this.index];},getMeta:function getMeta(){return this.chart.getDatasetMeta(this.index);},getScaleForId:function getScaleForId(scaleID){return this.chart.scales[scaleID];},reset:function reset(){this.update(true);},/**
		 * @private
		 */destroy:function destroy(){if(this._data){unlistenArrayEvents(this._data,this);}},createMetaDataset:function createMetaDataset(){var me=this;var type=me.datasetElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index});},createMetaData:function createMetaData(index){var me=this;var type=me.dataElementType;return type&&new type({_chart:me.chart,_datasetIndex:me.index,_index:index});},addElements:function addElements(){var me=this;var meta=me.getMeta();var data=me.getDataset().data||[];var metaData=meta.data;var i,ilen;for(i=0,ilen=data.length;i<ilen;++i){metaData[i]=metaData[i]||me.createMetaData(i);}meta.dataset=meta.dataset||me.createMetaDataset();},addElementAndReset:function addElementAndReset(index){var element=this.createMetaData(index);this.getMeta().data.splice(index,0,element);this.updateElement(element,index,true);},buildOrUpdateElements:function buildOrUpdateElements(){var me=this;var dataset=me.getDataset();var data=dataset.data||(dataset.data=[]);// In order to correctly handle data addition/deletion animation (an thus simulate
// real-time charts), we need to monitor these data modifications and synchronize
// the internal meta data accordingly.
if(me._data!==data){if(me._data){// This case happens when the user replaced the data array instance.
unlistenArrayEvents(me._data,me);}listenArrayEvents(data,me);me._data=data;}// Re-sync meta data in case the user replaced the data array or if we missed
// any updates and so make sure that we handle number of datapoints changing.
me.resyncElements();},update:helpers.noop,transition:function transition(easingValue){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;for(;i<ilen;++i){elements[i].transition(easingValue);}if(meta.dataset){meta.dataset.transition(easingValue);}},draw:function draw(){var meta=this.getMeta();var elements=meta.data||[];var ilen=elements.length;var i=0;if(meta.dataset){meta.dataset.draw();}for(;i<ilen;++i){elements[i].draw();}},removeHoverStyle:function removeHoverStyle(element,elementOpts){var dataset=this.chart.data.datasets[element._datasetIndex];var index=element._index;var custom=element.custom||{};var valueOrDefault=helpers.valueAtIndexOrDefault;var model=element._model;model.backgroundColor=custom.backgroundColor?custom.backgroundColor:valueOrDefault(dataset.backgroundColor,index,elementOpts.backgroundColor);model.borderColor=custom.borderColor?custom.borderColor:valueOrDefault(dataset.borderColor,index,elementOpts.borderColor);model.borderWidth=custom.borderWidth?custom.borderWidth:valueOrDefault(dataset.borderWidth,index,elementOpts.borderWidth);},setHoverStyle:function setHoverStyle(element){var dataset=this.chart.data.datasets[element._datasetIndex];var index=element._index;var custom=element.custom||{};var valueOrDefault=helpers.valueAtIndexOrDefault;var getHoverColor=helpers.getHoverColor;var model=element._model;model.backgroundColor=custom.hoverBackgroundColor?custom.hoverBackgroundColor:valueOrDefault(dataset.hoverBackgroundColor,index,getHoverColor(model.backgroundColor));model.borderColor=custom.hoverBorderColor?custom.hoverBorderColor:valueOrDefault(dataset.hoverBorderColor,index,getHoverColor(model.borderColor));model.borderWidth=custom.hoverBorderWidth?custom.hoverBorderWidth:valueOrDefault(dataset.hoverBorderWidth,index,model.borderWidth);},/**
		 * @private
		 */resyncElements:function resyncElements(){var me=this;var meta=me.getMeta();var data=me.getDataset().data;var numMeta=meta.data.length;var numData=data.length;if(numData<numMeta){meta.data.splice(numData,numMeta-numData);}else if(numData>numMeta){me.insertElements(numMeta,numData-numMeta);}},/**
		 * @private
		 */insertElements:function insertElements(start,count){for(var i=0;i<count;++i){this.addElementAndReset(start+i);}},/**
		 * @private
		 */onDataPush:function onDataPush(){this.insertElements(this.getDataset().data.length-1,arguments.length);},/**
		 * @private
		 */onDataPop:function onDataPop(){this.getMeta().data.pop();},/**
		 * @private
		 */onDataShift:function onDataShift(){this.getMeta().data.shift();},/**
		 * @private
		 */onDataSplice:function onDataSplice(start,count){this.getMeta().data.splice(start,count);this.insertElements(start,arguments.length-2);},/**
		 * @private
		 */onDataUnshift:function onDataUnshift(){this.insertElements(0,arguments.length);}});Chart.DatasetController.extend=helpers.inherits;};},{"45":45}],25:[function(require,module,exports){'use strict';var helpers=require(45);module.exports={/**
	 * @private
	 */_set:function _set(scope,values){return helpers.merge(this[scope]||(this[scope]={}),values);}};},{"45":45}],26:[function(require,module,exports){'use strict';var color=require(3);var helpers=require(45);function interpolate(start,view,model,ease){var keys=Object.keys(model);var i,ilen,key,actual,origin,target,type,c0,c1;for(i=0,ilen=keys.length;i<ilen;++i){key=keys[i];target=model[key];// if a value is added to the model after pivot() has been called, the view
// doesn't contain it, so let's initialize the view to the target value.
if(!view.hasOwnProperty(key)){view[key]=target;}actual=view[key];if(actual===target||key[0]==='_'){continue;}if(!start.hasOwnProperty(key)){start[key]=actual;}origin=start[key];type=_typeof2(target);if(type===_typeof2(origin)){if(type==='string'){c0=color(origin);if(c0.valid){c1=color(target);if(c1.valid){view[key]=c1.mix(c0,ease).rgbString();continue;}}}else if(type==='number'&&isFinite(origin)&&isFinite(target)){view[key]=origin+(target-origin)*ease;continue;}}view[key]=target;}}var Element=function Element(configuration){helpers.extend(this,configuration);this.initialize.apply(this,arguments);};helpers.extend(Element.prototype,{initialize:function initialize(){this.hidden=false;},pivot:function pivot(){var me=this;if(!me._view){me._view=helpers.clone(me._model);}me._start={};return me;},transition:function transition(ease){var me=this;var model=me._model;var start=me._start;var view=me._view;// No animation -> No Transition
if(!model||ease===1){me._view=model;me._start=null;return me;}if(!view){view=me._view={};}if(!start){start=me._start={};}interpolate(start,view,model,ease);return me;},tooltipPosition:function tooltipPosition(){return{x:this._model.x,y:this._model.y};},hasValue:function hasValue(){return helpers.isNumber(this._model.x)&&helpers.isNumber(this._model.y);}});Element.extend=helpers.inherits;module.exports=Element;},{"3":3,"45":45}],27:[function(require,module,exports){/* global window: false */ /* global document: false */'use strict';var color=require(3);var defaults=require(25);var helpers=require(45);module.exports=function(Chart){// -- Basic js utility methods
helpers.configMerge=function()/* objects ... */{return helpers.merge(helpers.clone(arguments[0]),[].slice.call(arguments,1),{merger:function merger(key,target,source,options){var tval=target[key]||{};var sval=source[key];if(key==='scales'){// scale config merging is complex. Add our own function here for that
target[key]=helpers.scaleMerge(tval,sval);}else if(key==='scale'){// used in polar area & radar charts since there is only one scale
target[key]=helpers.merge(tval,[Chart.scaleService.getScaleDefaults(sval.type),sval]);}else{helpers._merger(key,target,source,options);}}});};helpers.scaleMerge=function()/* objects ... */{return helpers.merge(helpers.clone(arguments[0]),[].slice.call(arguments,1),{merger:function merger(key,target,source,options){if(key==='xAxes'||key==='yAxes'){var slen=source[key].length;var i,type,scale;if(!target[key]){target[key]=[];}for(i=0;i<slen;++i){scale=source[key][i];type=helpers.valueOrDefault(scale.type,key==='xAxes'?'category':'linear');if(i>=target[key].length){target[key].push({});}if(!target[key][i].type||scale.type&&scale.type!==target[key][i].type){// new/untyped scale or type changed: let's apply the new defaults
// then merge source scale to correctly overwrite the defaults.
helpers.merge(target[key][i],[Chart.scaleService.getScaleDefaults(type),scale]);}else{// scales type are the same
helpers.merge(target[key][i],scale);}}}else{helpers._merger(key,target,source,options);}}});};helpers.where=function(collection,filterCallback){if(helpers.isArray(collection)&&Array.prototype.filter){return collection.filter(filterCallback);}var filtered=[];helpers.each(collection,function(item){if(filterCallback(item)){filtered.push(item);}});return filtered;};helpers.findIndex=Array.prototype.findIndex?function(array,callback,scope){return array.findIndex(callback,scope);}:function(array,callback,scope){scope=scope===undefined?array:scope;for(var i=0,ilen=array.length;i<ilen;++i){if(callback.call(scope,array[i],i,array)){return i;}}return-1;};helpers.findNextWhere=function(arrayToSearch,filterCallback,startIndex){// Default to start of the array
if(helpers.isNullOrUndef(startIndex)){startIndex=-1;}for(var i=startIndex+1;i<arrayToSearch.length;i++){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};helpers.findPreviousWhere=function(arrayToSearch,filterCallback,startIndex){// Default to end of the array
if(helpers.isNullOrUndef(startIndex)){startIndex=arrayToSearch.length;}for(var i=startIndex-1;i>=0;i--){var currentItem=arrayToSearch[i];if(filterCallback(currentItem)){return currentItem;}}};// -- Math methods
helpers.isNumber=function(n){return!isNaN(parseFloat(n))&&isFinite(n);};helpers.almostEquals=function(x,y,epsilon){return Math.abs(x-y)<epsilon;};helpers.almostWhole=function(x,epsilon){var rounded=Math.round(x);return rounded-epsilon<x&&rounded+epsilon>x;};helpers.max=function(array){return array.reduce(function(max,value){if(!isNaN(value)){return Math.max(max,value);}return max;},Number.NEGATIVE_INFINITY);};helpers.min=function(array){return array.reduce(function(min,value){if(!isNaN(value)){return Math.min(min,value);}return min;},Number.POSITIVE_INFINITY);};helpers.sign=Math.sign?function(x){return Math.sign(x);}:function(x){x=+x;// convert to a number
if(x===0||isNaN(x)){return x;}return x>0?1:-1;};helpers.log10=Math.log10?function(x){return Math.log10(x);}:function(x){return Math.log(x)/Math.LN10;};helpers.toRadians=function(degrees){return degrees*(Math.PI/180);};helpers.toDegrees=function(radians){return radians*(180/Math.PI);};// Gets the angle from vertical upright to the point about a centre.
helpers.getAngleFromPoint=function(centrePoint,anglePoint){var distanceFromXCenter=anglePoint.x-centrePoint.x;var distanceFromYCenter=anglePoint.y-centrePoint.y;var radialDistanceFromCenter=Math.sqrt(distanceFromXCenter*distanceFromXCenter+distanceFromYCenter*distanceFromYCenter);var angle=Math.atan2(distanceFromYCenter,distanceFromXCenter);if(angle<-0.5*Math.PI){angle+=2.0*Math.PI;// make sure the returned angle is in the range of (-PI/2, 3PI/2]
}return{angle:angle,distance:radialDistanceFromCenter};};helpers.distanceBetweenPoints=function(pt1,pt2){return Math.sqrt(Math.pow(pt2.x-pt1.x,2)+Math.pow(pt2.y-pt1.y,2));};helpers.aliasPixel=function(pixelWidth){return pixelWidth%2===0?0:0.5;};helpers.splineCurve=function(firstPoint,middlePoint,afterPoint,t){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
var previous=firstPoint.skip?middlePoint:firstPoint;var current=middlePoint;var next=afterPoint.skip?middlePoint:afterPoint;var d01=Math.sqrt(Math.pow(current.x-previous.x,2)+Math.pow(current.y-previous.y,2));var d12=Math.sqrt(Math.pow(next.x-current.x,2)+Math.pow(next.y-current.y,2));var s01=d01/(d01+d12);var s12=d12/(d01+d12);// If all points are the same, s01 & s02 will be inf
s01=isNaN(s01)?0:s01;s12=isNaN(s12)?0:s12;var fa=t*s01;// scaling factor for triangle Ta
var fb=t*s12;return{previous:{x:current.x-fa*(next.x-previous.x),y:current.y-fa*(next.y-previous.y)},next:{x:current.x+fb*(next.x-previous.x),y:current.y+fb*(next.y-previous.y)}};};helpers.EPSILON=Number.EPSILON||1e-14;helpers.splineCurveMonotone=function(points){// This function calculates Bézier control points in a similar way than |splineCurve|,
// but preserves monotonicity of the provided data and ensures no local extremums are added
// between the dataset discrete points due to the interpolation.
// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
var pointsWithTangents=(points||[]).map(function(point){return{model:point._model,deltaK:0,mK:0};});// Calculate slopes (deltaK) and initialize tangents (mK)
var pointsLen=pointsWithTangents.length;var i,pointBefore,pointCurrent,pointAfter;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointAfter&&!pointAfter.model.skip){var slopeDeltaX=pointAfter.model.x-pointCurrent.model.x;// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
pointCurrent.deltaK=slopeDeltaX!==0?(pointAfter.model.y-pointCurrent.model.y)/slopeDeltaX:0;}if(!pointBefore||pointBefore.model.skip){pointCurrent.mK=pointCurrent.deltaK;}else if(!pointAfter||pointAfter.model.skip){pointCurrent.mK=pointBefore.deltaK;}else if(this.sign(pointBefore.deltaK)!==this.sign(pointCurrent.deltaK)){pointCurrent.mK=0;}else{pointCurrent.mK=(pointBefore.deltaK+pointCurrent.deltaK)/2;}}// Adjust tangents to ensure monotonic properties
var alphaK,betaK,tauK,squaredMagnitude;for(i=0;i<pointsLen-1;++i){pointCurrent=pointsWithTangents[i];pointAfter=pointsWithTangents[i+1];if(pointCurrent.model.skip||pointAfter.model.skip){continue;}if(helpers.almostEquals(pointCurrent.deltaK,0,this.EPSILON)){pointCurrent.mK=pointAfter.mK=0;continue;}alphaK=pointCurrent.mK/pointCurrent.deltaK;betaK=pointAfter.mK/pointCurrent.deltaK;squaredMagnitude=Math.pow(alphaK,2)+Math.pow(betaK,2);if(squaredMagnitude<=9){continue;}tauK=3/Math.sqrt(squaredMagnitude);pointCurrent.mK=alphaK*tauK*pointCurrent.deltaK;pointAfter.mK=betaK*tauK*pointCurrent.deltaK;}// Compute control points
var deltaX;for(i=0;i<pointsLen;++i){pointCurrent=pointsWithTangents[i];if(pointCurrent.model.skip){continue;}pointBefore=i>0?pointsWithTangents[i-1]:null;pointAfter=i<pointsLen-1?pointsWithTangents[i+1]:null;if(pointBefore&&!pointBefore.model.skip){deltaX=(pointCurrent.model.x-pointBefore.model.x)/3;pointCurrent.model.controlPointPreviousX=pointCurrent.model.x-deltaX;pointCurrent.model.controlPointPreviousY=pointCurrent.model.y-deltaX*pointCurrent.mK;}if(pointAfter&&!pointAfter.model.skip){deltaX=(pointAfter.model.x-pointCurrent.model.x)/3;pointCurrent.model.controlPointNextX=pointCurrent.model.x+deltaX;pointCurrent.model.controlPointNextY=pointCurrent.model.y+deltaX*pointCurrent.mK;}}};helpers.nextItem=function(collection,index,loop){if(loop){return index>=collection.length-1?collection[0]:collection[index+1];}return index>=collection.length-1?collection[collection.length-1]:collection[index+1];};helpers.previousItem=function(collection,index,loop){if(loop){return index<=0?collection[collection.length-1]:collection[index-1];}return index<=0?collection[0]:collection[index-1];};// Implementation of the nice number algorithm used in determining where axis labels will go
helpers.niceNum=function(range,round){var exponent=Math.floor(helpers.log10(range));var fraction=range/Math.pow(10,exponent);var niceFraction;if(round){if(fraction<1.5){niceFraction=1;}else if(fraction<3){niceFraction=2;}else if(fraction<7){niceFraction=5;}else{niceFraction=10;}}else if(fraction<=1.0){niceFraction=1;}else if(fraction<=2){niceFraction=2;}else if(fraction<=5){niceFraction=5;}else{niceFraction=10;}return niceFraction*Math.pow(10,exponent);};// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
helpers.requestAnimFrame=function(){if(typeof window==='undefined'){return function(callback){callback();};}return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};}();// -- DOM methods
helpers.getRelativePosition=function(evt,chart){var mouseX,mouseY;var e=evt.originalEvent||evt;var canvas=evt.currentTarget||evt.srcElement;var boundingRect=canvas.getBoundingClientRect();var touches=e.touches;if(touches&&touches.length>0){mouseX=touches[0].clientX;mouseY=touches[0].clientY;}else{mouseX=e.clientX;mouseY=e.clientY;}// Scale mouse coordinates into canvas coordinates
// by following the pattern laid out by 'jerryj' in the comments of
// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
var paddingLeft=parseFloat(helpers.getStyle(canvas,'padding-left'));var paddingTop=parseFloat(helpers.getStyle(canvas,'padding-top'));var paddingRight=parseFloat(helpers.getStyle(canvas,'padding-right'));var paddingBottom=parseFloat(helpers.getStyle(canvas,'padding-bottom'));var width=boundingRect.right-boundingRect.left-paddingLeft-paddingRight;var height=boundingRect.bottom-boundingRect.top-paddingTop-paddingBottom;// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
mouseX=Math.round((mouseX-boundingRect.left-paddingLeft)/width*canvas.width/chart.currentDevicePixelRatio);mouseY=Math.round((mouseY-boundingRect.top-paddingTop)/height*canvas.height/chart.currentDevicePixelRatio);return{x:mouseX,y:mouseY};};// Private helper function to convert max-width/max-height values that may be percentages into a number
function parseMaxStyle(styleValue,node,parentProperty){var valueInPixels;if(typeof styleValue==='string'){valueInPixels=parseInt(styleValue,10);if(styleValue.indexOf('%')!==-1){// percentage * size in dimension
valueInPixels=valueInPixels/100*node.parentNode[parentProperty];}}else{valueInPixels=styleValue;}return valueInPixels;}/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */function isConstrainedValue(value){return value!==undefined&&value!==null&&value!=='none';}// Private helper to get a constraint dimension
// @param domNode : the node to check the constraint on
// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
// @param percentageProperty : property of parent to use when calculating width as a percentage
// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
function getConstraintDimension(domNode,maxStyle,percentageProperty){var view=document.defaultView;var parentNode=domNode.parentNode;var constrainedNode=view.getComputedStyle(domNode)[maxStyle];var constrainedContainer=view.getComputedStyle(parentNode)[maxStyle];var hasCNode=isConstrainedValue(constrainedNode);var hasCContainer=isConstrainedValue(constrainedContainer);var infinity=Number.POSITIVE_INFINITY;if(hasCNode||hasCContainer){return Math.min(hasCNode?parseMaxStyle(constrainedNode,domNode,percentageProperty):infinity,hasCContainer?parseMaxStyle(constrainedContainer,parentNode,percentageProperty):infinity);}return'none';}// returns Number or undefined if no constraint
helpers.getConstraintWidth=function(domNode){return getConstraintDimension(domNode,'max-width','clientWidth');};// returns Number or undefined if no constraint
helpers.getConstraintHeight=function(domNode){return getConstraintDimension(domNode,'max-height','clientHeight');};helpers.getMaximumWidth=function(domNode){var container=domNode.parentNode;if(!container){return domNode.clientWidth;}var paddingLeft=parseInt(helpers.getStyle(container,'padding-left'),10);var paddingRight=parseInt(helpers.getStyle(container,'padding-right'),10);var w=container.clientWidth-paddingLeft-paddingRight;var cw=helpers.getConstraintWidth(domNode);return isNaN(cw)?w:Math.min(w,cw);};helpers.getMaximumHeight=function(domNode){var container=domNode.parentNode;if(!container){return domNode.clientHeight;}var paddingTop=parseInt(helpers.getStyle(container,'padding-top'),10);var paddingBottom=parseInt(helpers.getStyle(container,'padding-bottom'),10);var h=container.clientHeight-paddingTop-paddingBottom;var ch=helpers.getConstraintHeight(domNode);return isNaN(ch)?h:Math.min(h,ch);};helpers.getStyle=function(el,property){return el.currentStyle?el.currentStyle[property]:document.defaultView.getComputedStyle(el,null).getPropertyValue(property);};helpers.retinaScale=function(chart,forceRatio){var pixelRatio=chart.currentDevicePixelRatio=forceRatio||window.devicePixelRatio||1;if(pixelRatio===1){return;}var canvas=chart.canvas;var height=chart.height;var width=chart.width;canvas.height=height*pixelRatio;canvas.width=width*pixelRatio;chart.ctx.scale(pixelRatio,pixelRatio);// If no style has been set on the canvas, the render size is used as display size,
// making the chart visually bigger, so let's enforce it to the "correct" values.
// See https://github.com/chartjs/Chart.js/issues/3575
canvas.style.height=height+'px';canvas.style.width=width+'px';};// -- Canvas methods
helpers.fontString=function(pixelSize,fontStyle,fontFamily){return fontStyle+' '+pixelSize+'px '+fontFamily;};helpers.longestText=function(ctx,font,arrayOfThings,cache){cache=cache||{};var data=cache.data=cache.data||{};var gc=cache.garbageCollect=cache.garbageCollect||[];if(cache.font!==font){data=cache.data={};gc=cache.garbageCollect=[];cache.font=font;}ctx.font=font;var longest=0;helpers.each(arrayOfThings,function(thing){// Undefined strings and arrays should not be measured
if(thing!==undefined&&thing!==null&&helpers.isArray(thing)!==true){longest=helpers.measureText(ctx,data,gc,longest,thing);}else if(helpers.isArray(thing)){// if it is an array lets measure each element
// to do maybe simplify this function a bit so we can do this more recursively?
helpers.each(thing,function(nestedThing){// Undefined strings and arrays should not be measured
if(nestedThing!==undefined&&nestedThing!==null&&!helpers.isArray(nestedThing)){longest=helpers.measureText(ctx,data,gc,longest,nestedThing);}});}});var gcLen=gc.length/2;if(gcLen>arrayOfThings.length){for(var i=0;i<gcLen;i++){delete data[gc[i]];}gc.splice(0,gcLen);}return longest;};helpers.measureText=function(ctx,data,gc,longest,string){var textWidth=data[string];if(!textWidth){textWidth=data[string]=ctx.measureText(string).width;gc.push(string);}if(textWidth>longest){longest=textWidth;}return longest;};helpers.numberOfLabelLines=function(arrayOfThings){var numberOfLines=1;helpers.each(arrayOfThings,function(thing){if(helpers.isArray(thing)){if(thing.length>numberOfLines){numberOfLines=thing.length;}}});return numberOfLines;};helpers.color=!color?function(value){console.error('Color.js not found!');return value;}:function(value){/* global CanvasGradient */if(value instanceof CanvasGradient){value=defaults.global.defaultColor;}return color(value);};helpers.getHoverColor=function(colorValue){/* global CanvasPattern */return colorValue instanceof CanvasPattern?colorValue:helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();};};},{"25":25,"3":3,"45":45}],28:[function(require,module,exports){'use strict';var helpers=require(45);/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */function getRelativePosition(e,chart){if(e["native"]){return{x:e.x,y:e.y};}return helpers.getRelativePosition(e,chart);}/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */function parseVisibleItems(chart,handler){var datasets=chart.data.datasets;var meta,i,j,ilen,jlen;for(i=0,ilen=datasets.length;i<ilen;++i){if(!chart.isDatasetVisible(i)){continue;}meta=chart.getDatasetMeta(i);for(j=0,jlen=meta.data.length;j<jlen;++j){var element=meta.data[j];if(!element._view.skip){handler(element);}}}}/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */function getIntersectItems(chart,position){var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);}});return elements;}/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */function getNearestItems(chart,position,intersect,distanceMetric){var minDistance=Number.POSITIVE_INFINITY;var nearestItems=[];parseVisibleItems(chart,function(element){if(intersect&&!element.inRange(position.x,position.y)){return;}var center=element.getCenterPoint();var distance=distanceMetric(position,center);if(distance<minDistance){nearestItems=[element];minDistance=distance;}else if(distance===minDistance){// Can have multiple items at the same distance in which case we sort by size
nearestItems.push(element);}});return nearestItems;}/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */function getDistanceMetricForAxis(axis){var useX=axis.indexOf('x')!==-1;var useY=axis.indexOf('y')!==-1;return function(pt1,pt2){var deltaX=useX?Math.abs(pt1.x-pt2.x):0;var deltaY=useY?Math.abs(pt1.y-pt2.y):0;return Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2));};}function indexMode(chart,e,options){var position=getRelativePosition(e,chart);// Default axis for index mode is 'x' to match old behaviour
options.axis=options.axis||'x';var distanceMetric=getDistanceMetricForAxis(options.axis);var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false,distanceMetric);var elements=[];if(!items.length){return[];}chart.data.datasets.forEach(function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex);var element=meta.data[items[0]._index];// don't count items that are skipped (null data)
if(element&&!element._view.skip){elements.push(element);}}});return elements;}/**
 * @interface IInteractionOptions
 */ /**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */ /**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */module.exports={// Helper function for different modes
modes:{single:function single(chart,e){var position=getRelativePosition(e,chart);var elements=[];parseVisibleItems(chart,function(element){if(element.inRange(position.x,position.y)){elements.push(element);return elements;}});return elements.slice(0,1);},/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */label:indexMode,/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */index:indexMode,/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */dataset:function dataset(chart,e,options){var position=getRelativePosition(e,chart);options.axis=options.axis||'xy';var distanceMetric=getDistanceMetricForAxis(options.axis);var items=options.intersect?getIntersectItems(chart,position):getNearestItems(chart,position,false,distanceMetric);if(items.length>0){items=chart.getDatasetMeta(items[0]._datasetIndex).data;}return items;},/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */'x-axis':function xAxis(chart,e){return indexMode(chart,e,{intersect:false});},/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */point:function point(chart,e){var position=getRelativePosition(e,chart);return getIntersectItems(chart,position);},/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */nearest:function nearest(chart,e,options){var position=getRelativePosition(e,chart);options.axis=options.axis||'xy';var distanceMetric=getDistanceMetricForAxis(options.axis);var nearestItems=getNearestItems(chart,position,options.intersect,distanceMetric);// We have multiple items at the same distance from the event. Now sort by smallest
if(nearestItems.length>1){nearestItems.sort(function(a,b){var sizeA=a.getArea();var sizeB=b.getArea();var ret=sizeA-sizeB;if(ret===0){// if equal sort by dataset index
ret=a._datasetIndex-b._datasetIndex;}return ret;});}// Return only 1 item
return nearestItems.slice(0,1);},/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */x:function x(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inXRange(position.x)){items.push(element);}if(element.inRange(position.x,position.y)){intersectsItem=true;}});// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
if(options.intersect&&!intersectsItem){items=[];}return items;},/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */y:function y(chart,e,options){var position=getRelativePosition(e,chart);var items=[];var intersectsItem=false;parseVisibleItems(chart,function(element){if(element.inYRange(position.y)){items.push(element);}if(element.inRange(position.x,position.y)){intersectsItem=true;}});// If we want to trigger on an intersect and we don't have any items
// that intersect the position, return nothing
if(options.intersect&&!intersectsItem){items=[];}return items;}}};},{"45":45}],29:[function(require,module,exports){'use strict';var defaults=require(25);defaults._set('global',{responsive:true,responsiveAnimationDuration:0,maintainAspectRatio:true,events:['mousemove','mouseout','click','touchstart','touchmove'],hover:{onHover:null,mode:'nearest',intersect:true,animationDuration:400},onClick:null,defaultColor:'rgba(0,0,0,0.1)',defaultFontColor:'#666',defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:'normal',showLines:true,// Element defaults defined in element extensions
elements:{},// Layout options such as padding
layout:{padding:{top:0,right:0,bottom:0,left:0}}});module.exports=function(){// Occupy the global variable of Chart, and create a simple base class
var Chart=function Chart(item,config){this.construct(item,config);return this;};Chart.Chart=Chart;return Chart;};},{"25":25}],30:[function(require,module,exports){'use strict';var helpers=require(45);module.exports=function(Chart){function filterByPosition(array,position){return helpers.where(array,function(v){return v.position===position;});}function sortByWeight(array,reverse){array.forEach(function(v,i){v._tmpIndex_=i;return v;});array.sort(function(a,b){var v0=reverse?b:a;var v1=reverse?a:b;return v0.weight===v1.weight?v0._tmpIndex_-v1._tmpIndex_:v0.weight-v1.weight;});array.forEach(function(v){delete v._tmpIndex_;});}/**
	 * @interface ILayoutItem
	 * @prop {String} position - The position of the item in the chart layout. Possible values are
	 * 'left', 'top', 'right', 'bottom', and 'chartArea'
	 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
	 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
	 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
	 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
	 * @prop {Function} getPadding -  Returns an object with padding on the edges
	 * @prop {Number} width - Width of item. Must be valid after update()
	 * @prop {Number} height - Height of item. Must be valid after update()
	 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
	 */ // The layout service is very self explanatory.  It's responsible for the layout within a chart.
// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
// It is this service's responsibility of carrying out that layout.
Chart.layoutService={defaults:{},/**
		 * Register a box to a chart.
		 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
		 * @param {Chart} chart - the chart to use
		 * @param {ILayoutItem} item - the item to add to be layed out
		 */addBox:function addBox(chart,item){if(!chart.boxes){chart.boxes=[];}// initialize item with default values
item.fullWidth=item.fullWidth||false;item.position=item.position||'top';item.weight=item.weight||0;chart.boxes.push(item);},/**
		 * Remove a layoutItem from a chart
		 * @param {Chart} chart - the chart to remove the box from
		 * @param {Object} layoutItem - the item to remove from the layout
		 */removeBox:function removeBox(chart,layoutItem){var index=chart.boxes?chart.boxes.indexOf(layoutItem):-1;if(index!==-1){chart.boxes.splice(index,1);}},/**
		 * Sets (or updates) options on the given `item`.
		 * @param {Chart} chart - the chart in which the item lives (or will be added to)
		 * @param {Object} item - the item to configure with the given options
		 * @param {Object} options - the new item options.
		 */configure:function configure(chart,item,options){var props=['fullWidth','position','weight'];var ilen=props.length;var i=0;var prop;for(;i<ilen;++i){prop=props[i];if(options.hasOwnProperty(prop)){item[prop]=options[prop];}}},/**
		 * Fits boxes of the given chart into the given size by having each box measure itself
		 * then running a fitting algorithm
		 * @param {Chart} chart - the chart
		 * @param {Number} width - the width to fit into
		 * @param {Number} height - the height to fit into
		 */update:function update(chart,width,height){if(!chart){return;}var layoutOptions=chart.options.layout||{};var padding=helpers.options.toPadding(layoutOptions.padding);var leftPadding=padding.left;var rightPadding=padding.right;var topPadding=padding.top;var bottomPadding=padding.bottom;var leftBoxes=filterByPosition(chart.boxes,'left');var rightBoxes=filterByPosition(chart.boxes,'right');var topBoxes=filterByPosition(chart.boxes,'top');var bottomBoxes=filterByPosition(chart.boxes,'bottom');var chartAreaBoxes=filterByPosition(chart.boxes,'chartArea');// Sort boxes by weight. A higher weight is further away from the chart area
sortByWeight(leftBoxes,true);sortByWeight(rightBoxes,false);sortByWeight(topBoxes,true);sortByWeight(bottomBoxes,false);// Essentially we now have any number of boxes on each of the 4 sides.
// Our canvas looks like the following.
// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
// B1 is the bottom axis
// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
// an error will be thrown.
//
// |----------------------------------------------------|
// |                  T1 (Full Width)                   |
// |----------------------------------------------------|
// |    |    |                 T2                  |    |
// |    |----|-------------------------------------|----|
// |    |    | C1 |                           | C2 |    |
// |    |    |----|                           |----|    |
// |    |    |                                     |    |
// | L1 | L2 |           ChartArea (C0)            | R1 |
// |    |    |                                     |    |
// |    |    |----|                           |----|    |
// |    |    | C3 |                           | C4 |    |
// |    |----|-------------------------------------|----|
// |    |    |                 B1                  |    |
// |----------------------------------------------------|
// |                  B2 (Full Width)                   |
// |----------------------------------------------------|
//
// What we do to find the best sizing, we do the following
// 1. Determine the minimum size of the chart area.
// 2. Split the remaining width equally between each vertical axis
// 3. Split the remaining height equally between each horizontal axis
// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
// 5. Adjust the sizes of each axis based on it's minimum reported size.
// 6. Refit each axis
// 7. Position each axis in the final location
// 8. Tell the chart the final location of the chart area
// 9. Tell any axes that overlay the chart area the positions of the chart area
// Step 1
var chartWidth=width-leftPadding-rightPadding;var chartHeight=height-topPadding-bottomPadding;var chartAreaWidth=chartWidth/2;// min 50%
var chartAreaHeight=chartHeight/2;// min 50%
// Step 2
var verticalBoxWidth=(width-chartAreaWidth)/(leftBoxes.length+rightBoxes.length);// Step 3
var horizontalBoxHeight=(height-chartAreaHeight)/(topBoxes.length+bottomBoxes.length);// Step 4
var maxChartAreaWidth=chartWidth;var maxChartAreaHeight=chartHeight;var minBoxSizes=[];function getMinimumBoxSize(box){var minSize;var isHorizontal=box.isHorizontal();if(isHorizontal){minSize=box.update(box.fullWidth?chartWidth:maxChartAreaWidth,horizontalBoxHeight);maxChartAreaHeight-=minSize.height;}else{minSize=box.update(verticalBoxWidth,chartAreaHeight);maxChartAreaWidth-=minSize.width;}minBoxSizes.push({horizontal:isHorizontal,minSize:minSize,box:box});}helpers.each(leftBoxes.concat(rightBoxes,topBoxes,bottomBoxes),getMinimumBoxSize);// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
var maxHorizontalLeftPadding=0;var maxHorizontalRightPadding=0;var maxVerticalTopPadding=0;var maxVerticalBottomPadding=0;helpers.each(topBoxes.concat(bottomBoxes),function(horizontalBox){if(horizontalBox.getPadding){var boxPadding=horizontalBox.getPadding();maxHorizontalLeftPadding=Math.max(maxHorizontalLeftPadding,boxPadding.left);maxHorizontalRightPadding=Math.max(maxHorizontalRightPadding,boxPadding.right);}});helpers.each(leftBoxes.concat(rightBoxes),function(verticalBox){if(verticalBox.getPadding){var boxPadding=verticalBox.getPadding();maxVerticalTopPadding=Math.max(maxVerticalTopPadding,boxPadding.top);maxVerticalBottomPadding=Math.max(maxVerticalBottomPadding,boxPadding.bottom);}});// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
// be if the axes are drawn at their minimum sizes.
// Steps 5 & 6
var totalLeftBoxesWidth=leftPadding;var totalRightBoxesWidth=rightPadding;var totalTopBoxesHeight=topPadding;var totalBottomBoxesHeight=bottomPadding;// Function to fit a box
function fitBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minBox){return minBox.box===box;});if(minBoxSize){if(box.isHorizontal()){var scaleMargin={left:Math.max(totalLeftBoxesWidth,maxHorizontalLeftPadding),right:Math.max(totalRightBoxesWidth,maxHorizontalRightPadding),top:0,bottom:0};// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
// on the margin. Sometimes they need to increase in size slightly
box.update(box.fullWidth?chartWidth:maxChartAreaWidth,chartHeight/2,scaleMargin);}else{box.update(minBoxSize.minSize.width,maxChartAreaHeight);}}}// Update, and calculate the left and right margins for the horizontal boxes
helpers.each(leftBoxes.concat(rightBoxes),fitBox);helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});// Set the Left and Right margins for the horizontal boxes
helpers.each(topBoxes.concat(bottomBoxes),fitBox);// Figure out how much margin is on the top and bottom of the vertical boxes
helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});function finalFitVerticalBox(box){var minBoxSize=helpers.findNextWhere(minBoxSizes,function(minSize){return minSize.box===box;});var scaleMargin={left:0,right:0,top:totalTopBoxesHeight,bottom:totalBottomBoxesHeight};if(minBoxSize){box.update(minBoxSize.minSize.width,maxChartAreaHeight,scaleMargin);}}// Let the left layout know the final margin
helpers.each(leftBoxes.concat(rightBoxes),finalFitVerticalBox);// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
totalLeftBoxesWidth=leftPadding;totalRightBoxesWidth=rightPadding;totalTopBoxesHeight=topPadding;totalBottomBoxesHeight=bottomPadding;helpers.each(leftBoxes,function(box){totalLeftBoxesWidth+=box.width;});helpers.each(rightBoxes,function(box){totalRightBoxesWidth+=box.width;});helpers.each(topBoxes,function(box){totalTopBoxesHeight+=box.height;});helpers.each(bottomBoxes,function(box){totalBottomBoxesHeight+=box.height;});// We may be adding some padding to account for rotated x axis labels
var leftPaddingAddition=Math.max(maxHorizontalLeftPadding-totalLeftBoxesWidth,0);totalLeftBoxesWidth+=leftPaddingAddition;totalRightBoxesWidth+=Math.max(maxHorizontalRightPadding-totalRightBoxesWidth,0);var topPaddingAddition=Math.max(maxVerticalTopPadding-totalTopBoxesHeight,0);totalTopBoxesHeight+=topPaddingAddition;totalBottomBoxesHeight+=Math.max(maxVerticalBottomPadding-totalBottomBoxesHeight,0);// Figure out if our chart area changed. This would occur if the dataset layout label rotation
// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
// without calling `fit` again
var newMaxChartAreaHeight=height-totalTopBoxesHeight-totalBottomBoxesHeight;var newMaxChartAreaWidth=width-totalLeftBoxesWidth-totalRightBoxesWidth;if(newMaxChartAreaWidth!==maxChartAreaWidth||newMaxChartAreaHeight!==maxChartAreaHeight){helpers.each(leftBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(rightBoxes,function(box){box.height=newMaxChartAreaHeight;});helpers.each(topBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});helpers.each(bottomBoxes,function(box){if(!box.fullWidth){box.width=newMaxChartAreaWidth;}});maxChartAreaHeight=newMaxChartAreaHeight;maxChartAreaWidth=newMaxChartAreaWidth;}// Step 7 - Position the boxes
var left=leftPadding+leftPaddingAddition;var top=topPadding+topPaddingAddition;function placeBox(box){if(box.isHorizontal()){box.left=box.fullWidth?leftPadding:totalLeftBoxesWidth;box.right=box.fullWidth?width-rightPadding:totalLeftBoxesWidth+maxChartAreaWidth;box.top=top;box.bottom=top+box.height;// Move to next point
top=box.bottom;}else{box.left=left;box.right=left+box.width;box.top=totalTopBoxesHeight;box.bottom=totalTopBoxesHeight+maxChartAreaHeight;// Move to next point
left=box.right;}}helpers.each(leftBoxes.concat(topBoxes),placeBox);// Account for chart width and height
left+=maxChartAreaWidth;top+=maxChartAreaHeight;helpers.each(rightBoxes,placeBox);helpers.each(bottomBoxes,placeBox);// Step 8
chart.chartArea={left:totalLeftBoxesWidth,top:totalTopBoxesHeight,right:totalLeftBoxesWidth+maxChartAreaWidth,bottom:totalTopBoxesHeight+maxChartAreaHeight};// Step 9
helpers.each(chartAreaBoxes,function(box){box.left=chart.chartArea.left;box.top=chart.chartArea.top;box.right=chart.chartArea.right;box.bottom=chart.chartArea.bottom;box.update(maxChartAreaWidth,maxChartAreaHeight);});}};};},{"45":45}],31:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{plugins:{}});module.exports=function(Chart){/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */Chart.plugins={/**
		 * Globally registered plugins.
		 * @private
		 */_plugins:[],/**
		 * This identifier is used to invalidate the descriptors cache attached to each chart
		 * when a global plugin is registered or unregistered. In this case, the cache ID is
		 * incremented and descriptors are regenerated during following API calls.
		 * @private
		 */_cacheId:0,/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */register:function register(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){if(p.indexOf(plugin)===-1){p.push(plugin);}});this._cacheId++;},/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */unregister:function unregister(plugins){var p=this._plugins;[].concat(plugins).forEach(function(plugin){var idx=p.indexOf(plugin);if(idx!==-1){p.splice(idx,1);}});this._cacheId++;},/**
		 * Remove all registered plugins.
		 * @since 2.1.5
		 */clear:function clear(){this._plugins=[];this._cacheId++;},/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */count:function count(){return this._plugins.length;},/**
		 * Returns all registered plugin instances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */getAll:function getAll(){return this._plugins;},/**
		 * Calls enabled plugins for `chart` on the specified hook and with the given args.
		 * This method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {Object} chart - The chart instance for which plugins should be called.
		 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] - Extra arguments to apply to the hook call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */notify:function notify(chart,hook,args){var descriptors=this.descriptors(chart);var ilen=descriptors.length;var i,descriptor,plugin,params,method;for(i=0;i<ilen;++i){descriptor=descriptors[i];plugin=descriptor.plugin;method=plugin[hook];if(typeof method==='function'){params=[chart].concat(args||[]);params.push(descriptor.options);if(method.apply(plugin,params)===false){return false;}}}return true;},/**
		 * Returns descriptors of enabled plugins for the given chart.
		 * @returns {Array} [{ plugin, options }]
		 * @private
		 */descriptors:function descriptors(chart){var cache=chart._plugins||(chart._plugins={});if(cache.id===this._cacheId){return cache.descriptors;}var plugins=[];var descriptors=[];var config=chart&&chart.config||{};var options=config.options&&config.options.plugins||{};this._plugins.concat(config.plugins||[]).forEach(function(plugin){var idx=plugins.indexOf(plugin);if(idx!==-1){return;}var id=plugin.id;var opts=options[id];if(opts===false){return;}if(opts===true){opts=helpers.clone(defaults.global.plugins[id]);}plugins.push(plugin);descriptors.push({plugin:plugin,options:opts||{}});});cache.descriptors=descriptors;cache.id=this._cacheId;return descriptors;}};/**
	 * Plugin extension hooks.
	 * @interface IPlugin
	 * @since 2.1.0
	 */ /**
	 * @method IPlugin#beforeInit
	 * @desc Called before initializing `chart`.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#afterInit
	 * @desc Called after `chart` has been initialized and before the first update.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeUpdate
	 * @desc Called before updating `chart`. If any plugin returns `false`, the update
	 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart update.
	 */ /**
	 * @method IPlugin#afterUpdate
	 * @desc Called after `chart` has been updated and before rendering. Note that this
	 * hook will not be called if the chart update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeDatasetsUpdate
 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
	 * the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} false to cancel the datasets update.
	 * @since version 2.1.5
	 */ /**
	 * @method IPlugin#afterDatasetsUpdate
	 * @desc Called after the `chart` datasets have been updated. Note that this hook
	 * will not be called if the datasets update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @since version 2.1.5
	 */ /**
	 * @method IPlugin#beforeDatasetUpdate
 	 * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
	 * returns `false`, the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */ /**
	 * @method IPlugin#afterDatasetUpdate
 	 * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
	 * that this hook will not be called if the datasets update has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeLayout
	 * @desc Called before laying out `chart`. If any plugin returns `false`,
	 * the layout update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart layout.
	 */ /**
	 * @method IPlugin#afterLayout
	 * @desc Called after the `chart` has been layed out. Note that this hook will not
	 * be called if the layout update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeRender
	 * @desc Called before rendering `chart`. If any plugin returns `false`,
	 * the rendering is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart rendering.
	 */ /**
	 * @method IPlugin#afterRender
	 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
	 * that this hook will not be called if the rendering has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeDraw
	 * @desc Called before drawing `chart` at every animation frame specified by the given
	 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
	 * another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart drawing.
	 */ /**
	 * @method IPlugin#afterDraw
	 * @desc Called after the `chart` has been drawn for the specific easing value. Note
	 * that this hook will not be called if the drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeDatasetsDraw
 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
	 * the datasets drawing is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */ /**
	 * @method IPlugin#afterDatasetsDraw
	 * @desc Called after the `chart` datasets have been drawn. Note that this hook
	 * will not be called if the datasets drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#beforeDatasetDraw
 	 * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
	 * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
	 * is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */ /**
	 * @method IPlugin#afterDatasetDraw
 	 * @desc Called after the `chart` datasets at the given `args.index` have been drawn
	 * (datasets are drawn in the reverse order). Note that this hook will not be called
	 * if the datasets drawing has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */ /**
  	 * @method IPlugin#beforeTooltipDraw
	 * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
	 * the tooltip drawing is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart tooltip drawing.
  	 */ /**
 	 * @method IPlugin#afterTooltipDraw
  	 * @desc Called after drawing the `tooltip`. Note that this hook will not
 	 * be called if the tooltip drawing has been previously cancelled.
 	 * @param {Chart} chart - The chart instance.
 	 * @param {Object} args - The call arguments.
 	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 	 * @param {Object} options - The plugin options.
 	 */ /**
	 * @method IPlugin#beforeEvent
 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
	 * the event will be discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#afterEvent
	 * @desc Called after the `event` has been consumed. Note that this hook
	 * will not be called if the `event` has been previously discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#resize
	 * @desc Called after the chart as been resized.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
	 * @param {Object} options - The plugin options.
	 */ /**
	 * @method IPlugin#destroy
	 * @desc Called after the chart as been destroyed.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */ /**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove at version 3
	 * @private
	 */Chart.pluginService=Chart.plugins;/**
	 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
	 * effect, instead simply create/register plugins via plain JavaScript objects.
	 * @interface Chart.PluginBase
	 * @deprecated since version 2.5.0
	 * @todo remove at version 3
	 * @private
	 */Chart.PluginBase=Element.extend({});};},{"25":25,"26":26,"45":45}],32:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var Ticks=require(34);defaults._set('scale',{display:true,position:'left',offset:false,// grid line settings
gridLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1,drawBorder:true,drawOnChartArea:true,drawTicks:true,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:'rgba(0,0,0,0.25)',zeroLineBorderDash:[],zeroLineBorderDashOffset:0.0,offsetGridLines:false,borderDash:[],borderDashOffset:0.0},// scale label
scaleLabel:{// display property
display:false,// actual label
labelString:'',// line height
lineHeight:1.2,// top/bottom padding
padding:{top:4,bottom:4}},// label settings
ticks:{beginAtZero:false,minRotation:0,maxRotation:50,mirror:false,padding:0,reverse:false,display:true,autoSkip:true,autoSkipPadding:0,labelOffset:0,// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
callback:Ticks.formatters.values,minor:{},major:{}}});function labelsFromTicks(ticks){var labels=[];var i,ilen;for(i=0,ilen=ticks.length;i<ilen;++i){labels.push(ticks[i].label);}return labels;}function getLineValue(scale,index,offsetGridLines){var lineValue=scale.getPixelForTick(index);if(offsetGridLines){if(index===0){lineValue-=(scale.getPixelForTick(1)-lineValue)/2;}else{lineValue-=(lineValue-scale.getPixelForTick(index-1))/2;}}return lineValue;}module.exports=function(Chart){function computeTextSize(context,tick,font){return helpers.isArray(tick)?helpers.longestText(context,font,tick):context.measureText(tick).width;}function parseFontOptions(options){var valueOrDefault=helpers.valueOrDefault;var globalDefaults=defaults.global;var size=valueOrDefault(options.fontSize,globalDefaults.defaultFontSize);var style=valueOrDefault(options.fontStyle,globalDefaults.defaultFontStyle);var family=valueOrDefault(options.fontFamily,globalDefaults.defaultFontFamily);return{size:size,style:style,family:family,font:helpers.fontString(size,style,family)};}function parseLineHeight(options){return helpers.options.toLineHeight(helpers.valueOrDefault(options.lineHeight,1.2),helpers.valueOrDefault(options.fontSize,defaults.global.defaultFontSize));}Chart.Scale=Element.extend({/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */getPadding:function getPadding(){var me=this;return{left:me.paddingLeft||0,top:me.paddingTop||0,right:me.paddingRight||0,bottom:me.paddingBottom||0};},/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */getTicks:function getTicks(){return this._ticks;},// These methods are ordered by lifecyle. Utilities then follow.
// Any function defined here is inherited by all scale types.
// Any function can be extended by the scale type
mergeTicksOptions:function mergeTicksOptions(){var ticks=this.options.ticks;if(ticks.minor===false){ticks.minor={display:false};}if(ticks.major===false){ticks.major={display:false};}for(var key in ticks){if(key!=='major'&&key!=='minor'){if(typeof ticks.minor[key]==='undefined'){ticks.minor[key]=ticks[key];}if(typeof ticks.major[key]==='undefined'){ticks.major[key]=ticks[key];}}}},beforeUpdate:function beforeUpdate(){helpers.callback(this.options.beforeUpdate,[this]);},update:function update(maxWidth,maxHeight,margins){var me=this;var i,ilen,labels,label,ticks,tick;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=helpers.extend({left:0,right:0,top:0,bottom:0},margins);me.longestTextCache=me.longestTextCache||{};// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Data min/max
me.beforeDataLimits();me.determineDataLimits();me.afterDataLimits();// Ticks - `this.ticks` is now DEPRECATED!
// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
// and must not be accessed directly from outside this class. `this.ticks` being
// around for long time and not marked as private, we can't change its structure
// without unexpected breaking changes. If you need to access the scale ticks,
// use scale.getTicks() instead.
me.beforeBuildTicks();// New implementations should return an array of objects but for BACKWARD COMPAT,
// we still support no return (`this.ticks` internally set by calling this method).
ticks=me.buildTicks()||[];me.afterBuildTicks();me.beforeTickToLabelConversion();// New implementations should return the formatted tick labels but for BACKWARD
// COMPAT, we still support no return (`this.ticks` internally changed by calling
// this method and supposed to contain only string values).
labels=me.convertTicksToLabels(ticks)||me.ticks;me.afterTickToLabelConversion();me.ticks=labels;// BACKWARD COMPATIBILITY
// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!
// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
for(i=0,ilen=labels.length;i<ilen;++i){label=labels[i];tick=ticks[i];if(!tick){ticks.push(tick={label:label,major:false});}else{tick.label=label;}}me._ticks=ticks;// Tick Rotation
me.beforeCalculateTickRotation();me.calculateTickRotation();me.afterCalculateTickRotation();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:function afterUpdate(){helpers.callback(this.options.afterUpdate,[this]);},//
beforeSetDimensions:function beforeSetDimensions(){helpers.callback(this.options.beforeSetDimensions,[this]);},setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;},afterSetDimensions:function afterSetDimensions(){helpers.callback(this.options.afterSetDimensions,[this]);},// Data limits
beforeDataLimits:function beforeDataLimits(){helpers.callback(this.options.beforeDataLimits,[this]);},determineDataLimits:helpers.noop,afterDataLimits:function afterDataLimits(){helpers.callback(this.options.afterDataLimits,[this]);},//
beforeBuildTicks:function beforeBuildTicks(){helpers.callback(this.options.beforeBuildTicks,[this]);},buildTicks:helpers.noop,afterBuildTicks:function afterBuildTicks(){helpers.callback(this.options.afterBuildTicks,[this]);},beforeTickToLabelConversion:function beforeTickToLabelConversion(){helpers.callback(this.options.beforeTickToLabelConversion,[this]);},convertTicksToLabels:function convertTicksToLabels(){var me=this;// Convert ticks to strings
var tickOpts=me.options.ticks;me.ticks=me.ticks.map(tickOpts.userCallback||tickOpts.callback,this);},afterTickToLabelConversion:function afterTickToLabelConversion(){helpers.callback(this.options.afterTickToLabelConversion,[this]);},//
beforeCalculateTickRotation:function beforeCalculateTickRotation(){helpers.callback(this.options.beforeCalculateTickRotation,[this]);},calculateTickRotation:function calculateTickRotation(){var me=this;var context=me.ctx;var tickOpts=me.options.ticks;var labels=labelsFromTicks(me._ticks);// Get the width of each grid by calculating the difference
// between x offsets between 0 and 1.
var tickFont=parseFontOptions(tickOpts);context.font=tickFont.font;var labelRotation=tickOpts.minRotation||0;if(labels.length&&me.options.display&&me.isHorizontal()){var originalLabelWidth=helpers.longestText(context,tickFont.font,labels,me.longestTextCache);var labelWidth=originalLabelWidth;var cosRotation,sinRotation;// Allow 3 pixels x2 padding either side for label readability
var tickWidth=me.getPixelForTick(1)-me.getPixelForTick(0)-6;// Max label rotation can be set or default to 90 - also act as a loop counter
while(labelWidth>tickWidth&&labelRotation<tickOpts.maxRotation){var angleRadians=helpers.toRadians(labelRotation);cosRotation=Math.cos(angleRadians);sinRotation=Math.sin(angleRadians);if(sinRotation*originalLabelWidth>me.maxHeight){// go back one step
labelRotation--;break;}labelRotation++;labelWidth=cosRotation*originalLabelWidth;}}me.labelRotation=labelRotation;},afterCalculateTickRotation:function afterCalculateTickRotation(){helpers.callback(this.options.afterCalculateTickRotation,[this]);},//
beforeFit:function beforeFit(){helpers.callback(this.options.beforeFit,[this]);},fit:function fit(){var me=this;// Reset
var minSize=me.minSize={width:0,height:0};var labels=labelsFromTicks(me._ticks);var opts=me.options;var tickOpts=opts.ticks;var scaleLabelOpts=opts.scaleLabel;var gridLineOpts=opts.gridLines;var display=opts.display;var isHorizontal=me.isHorizontal();var tickFont=parseFontOptions(tickOpts);var tickMarkLength=opts.gridLines.tickMarkLength;// Width
if(isHorizontal){// subtract the margins to line up with the chartArea if we are a full width scale
minSize.width=me.isFullWidth()?me.maxWidth-me.margins.left-me.margins.right:me.maxWidth;}else{minSize.width=display&&gridLineOpts.drawTicks?tickMarkLength:0;}// height
if(isHorizontal){minSize.height=display&&gridLineOpts.drawTicks?tickMarkLength:0;}else{minSize.height=me.maxHeight;// fill all the height
}// Are we showing a title for the scale?
if(scaleLabelOpts.display&&display){var scaleLabelLineHeight=parseLineHeight(scaleLabelOpts);var scaleLabelPadding=helpers.options.toPadding(scaleLabelOpts.padding);var deltaHeight=scaleLabelLineHeight+scaleLabelPadding.height;if(isHorizontal){minSize.height+=deltaHeight;}else{minSize.width+=deltaHeight;}}// Don't bother fitting the ticks if we are not showing them
if(tickOpts.display&&display){var largestTextWidth=helpers.longestText(me.ctx,tickFont.font,labels,me.longestTextCache);var tallestLabelHeightInLines=helpers.numberOfLabelLines(labels);var lineSpace=tickFont.size*0.5;var tickPadding=me.options.ticks.padding;if(isHorizontal){// A horizontal axis is more constrained by the height.
me.longestLabelWidth=largestTextWidth;var angleRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(angleRadians);var sinRotation=Math.sin(angleRadians);// TODO - improve this calculation
var labelHeight=sinRotation*largestTextWidth+tickFont.size*tallestLabelHeightInLines+lineSpace*(tallestLabelHeightInLines-1)+lineSpace;// padding
minSize.height=Math.min(me.maxHeight,minSize.height+labelHeight+tickPadding);me.ctx.font=tickFont.font;var firstLabelWidth=computeTextSize(me.ctx,labels[0],tickFont.font);var lastLabelWidth=computeTextSize(me.ctx,labels[labels.length-1],tickFont.font);// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
// which means that the right padding is dominated by the font height
if(me.labelRotation!==0){me.paddingLeft=opts.position==='bottom'?cosRotation*firstLabelWidth+3:cosRotation*lineSpace+3;// add 3 px to move away from canvas edges
me.paddingRight=opts.position==='bottom'?cosRotation*lineSpace+3:cosRotation*lastLabelWidth+3;}else{me.paddingLeft=firstLabelWidth/2+3;// add 3 px to move away from canvas edges
me.paddingRight=lastLabelWidth/2+3;}}else{// A vertical axis is more constrained by the width. Labels are the
// dominant factor here, so get that length first and account for padding
if(tickOpts.mirror){largestTextWidth=0;}else{// use lineSpace for consistency with horizontal axis
// tickPadding is not implemented for horizontal
largestTextWidth+=tickPadding+lineSpace;}minSize.width=Math.min(me.maxWidth,minSize.width+largestTextWidth);me.paddingTop=tickFont.size/2;me.paddingBottom=tickFont.size/2;}}me.handleMargins();me.width=minSize.width;me.height=minSize.height;},/**
		 * Handle margins and padding interactions
		 * @private
		 */handleMargins:function handleMargins(){var me=this;if(me.margins){me.paddingLeft=Math.max(me.paddingLeft-me.margins.left,0);me.paddingTop=Math.max(me.paddingTop-me.margins.top,0);me.paddingRight=Math.max(me.paddingRight-me.margins.right,0);me.paddingBottom=Math.max(me.paddingBottom-me.margins.bottom,0);}},afterFit:function afterFit(){helpers.callback(this.options.afterFit,[this]);},// Shared Methods
isHorizontal:function isHorizontal(){return this.options.position==='top'||this.options.position==='bottom';},isFullWidth:function isFullWidth(){return this.options.fullWidth;},// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
getRightValue:function getRightValue(rawValue){// Null and undefined values first
if(helpers.isNullOrUndef(rawValue)){return NaN;}// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
if(typeof rawValue==='number'&&!isFinite(rawValue)){return NaN;}// If it is in fact an object, dive in one more level
if(rawValue){if(this.isHorizontal()){if(rawValue.x!==undefined){return this.getRightValue(rawValue.x);}}else if(rawValue.y!==undefined){return this.getRightValue(rawValue.y);}}// Value is good, return it
return rawValue;},/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */getLabelForIndex:helpers.noop,/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */getPixelForValue:helpers.noop,/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */getValueForPixel:helpers.noop,/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getPixelForTick:function getPixelForTick(index){var me=this;var offset=me.options.offset;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var tickWidth=innerWidth/Math.max(me._ticks.length-(offset?0:1),1);var pixel=tickWidth*index+me.paddingLeft;if(offset){pixel+=tickWidth/2;}var finalVal=me.left+Math.round(pixel);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}var innerHeight=me.height-(me.paddingTop+me.paddingBottom);return me.top+index*(innerHeight/(me._ticks.length-1));},/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getPixelForDecimal:function getPixelForDecimal(decimal){var me=this;if(me.isHorizontal()){var innerWidth=me.width-(me.paddingLeft+me.paddingRight);var valueOffset=innerWidth*decimal+me.paddingLeft;var finalVal=me.left+Math.round(valueOffset);finalVal+=me.isFullWidth()?me.margins.left:0;return finalVal;}return me.top+decimal*me.height;},/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */getBasePixel:function getBasePixel(){return this.getPixelForValue(this.getBaseValue());},getBaseValue:function getBaseValue(){var me=this;var min=me.min;var max=me.max;return me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0;},/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */_autoSkip:function _autoSkip(ticks){var skipRatio;var me=this;var isHorizontal=me.isHorizontal();var optionTicks=me.options.ticks.minor;var tickCount=ticks.length;var labelRotationRadians=helpers.toRadians(me.labelRotation);var cosRotation=Math.cos(labelRotationRadians);var longestRotatedLabel=me.longestLabelWidth*cosRotation;var result=[];var i,tick,shouldSkip;// figure out the maximum number of gridlines to show
var maxTicks;if(optionTicks.maxTicksLimit){maxTicks=optionTicks.maxTicksLimit;}if(isHorizontal){skipRatio=false;if((longestRotatedLabel+optionTicks.autoSkipPadding)*tickCount>me.width-(me.paddingLeft+me.paddingRight)){skipRatio=1+Math.floor((longestRotatedLabel+optionTicks.autoSkipPadding)*tickCount/(me.width-(me.paddingLeft+me.paddingRight)));}// if they defined a max number of optionTicks,
// increase skipRatio until that number is met
if(maxTicks&&tickCount>maxTicks){skipRatio=Math.max(skipRatio,Math.floor(tickCount/maxTicks));}}for(i=0;i<tickCount;i++){tick=ticks[i];// Since we always show the last tick,we need may need to hide the last shown one before
shouldSkip=skipRatio>1&&i%skipRatio>0||i%skipRatio===0&&i+skipRatio>=tickCount;if(shouldSkip&&i!==tickCount-1){// leave tick in place but make sure it's not displayed (#4635)
delete tick.label;}result.push(tick);}return result;},// Actually draw the scale on the canvas
// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
draw:function draw(chartArea){var me=this;var options=me.options;if(!options.display){return;}var context=me.ctx;var globalDefaults=defaults.global;var optionTicks=options.ticks.minor;var optionMajorTicks=options.ticks.major||optionTicks;var gridLines=options.gridLines;var scaleLabel=options.scaleLabel;var isRotated=me.labelRotation!==0;var isHorizontal=me.isHorizontal();var ticks=optionTicks.autoSkip?me._autoSkip(me.getTicks()):me.getTicks();var tickFontColor=helpers.valueOrDefault(optionTicks.fontColor,globalDefaults.defaultFontColor);var tickFont=parseFontOptions(optionTicks);var majorTickFontColor=helpers.valueOrDefault(optionMajorTicks.fontColor,globalDefaults.defaultFontColor);var majorTickFont=parseFontOptions(optionMajorTicks);var tl=gridLines.drawTicks?gridLines.tickMarkLength:0;var scaleLabelFontColor=helpers.valueOrDefault(scaleLabel.fontColor,globalDefaults.defaultFontColor);var scaleLabelFont=parseFontOptions(scaleLabel);var scaleLabelPadding=helpers.options.toPadding(scaleLabel.padding);var labelRotationRadians=helpers.toRadians(me.labelRotation);var itemsToDraw=[];var xTickStart=options.position==='right'?me.left:me.right-tl;var xTickEnd=options.position==='right'?me.left+tl:me.right;var yTickStart=options.position==='bottom'?me.top:me.bottom-tl;var yTickEnd=options.position==='bottom'?me.top+tl:me.bottom;helpers.each(ticks,function(tick,index){// autoskipper skipped this tick (#4635)
if(helpers.isNullOrUndef(tick.label)){return;}var label=tick.label;var lineWidth,lineColor,borderDash,borderDashOffset;if(index===me.zeroLineIndex&&options.offset===gridLines.offsetGridLines){// Draw the first index specially
lineWidth=gridLines.zeroLineWidth;lineColor=gridLines.zeroLineColor;borderDash=gridLines.zeroLineBorderDash;borderDashOffset=gridLines.zeroLineBorderDashOffset;}else{lineWidth=helpers.valueAtIndexOrDefault(gridLines.lineWidth,index);lineColor=helpers.valueAtIndexOrDefault(gridLines.color,index);borderDash=helpers.valueOrDefault(gridLines.borderDash,globalDefaults.borderDash);borderDashOffset=helpers.valueOrDefault(gridLines.borderDashOffset,globalDefaults.borderDashOffset);}// Common properties
var tx1,ty1,tx2,ty2,x1,y1,x2,y2,labelX,labelY;var textAlign='middle';var textBaseline='middle';var tickPadding=optionTicks.padding;if(isHorizontal){var labelYOffset=tl+tickPadding;if(options.position==='bottom'){// bottom
textBaseline=!isRotated?'top':'middle';textAlign=!isRotated?'center':'right';labelY=me.top+labelYOffset;}else{// top
textBaseline=!isRotated?'bottom':'middle';textAlign=!isRotated?'center':'left';labelY=me.bottom-labelYOffset;}var xLineValue=getLineValue(me,index,gridLines.offsetGridLines&&ticks.length>1);if(xLineValue<me.left){lineColor='rgba(0,0,0,0)';}xLineValue+=helpers.aliasPixel(lineWidth);labelX=me.getPixelForTick(index)+optionTicks.labelOffset;// x values for optionTicks (need to consider offsetLabel option)
tx1=tx2=x1=x2=xLineValue;ty1=yTickStart;ty2=yTickEnd;y1=chartArea.top;y2=chartArea.bottom;}else{var isLeft=options.position==='left';var labelXOffset;if(optionTicks.mirror){textAlign=isLeft?'left':'right';labelXOffset=tickPadding;}else{textAlign=isLeft?'right':'left';labelXOffset=tl+tickPadding;}labelX=isLeft?me.right-labelXOffset:me.left+labelXOffset;var yLineValue=getLineValue(me,index,gridLines.offsetGridLines&&ticks.length>1);if(yLineValue<me.top){lineColor='rgba(0,0,0,0)';}yLineValue+=helpers.aliasPixel(lineWidth);labelY=me.getPixelForTick(index)+optionTicks.labelOffset;tx1=xTickStart;tx2=xTickEnd;x1=chartArea.left;x2=chartArea.right;ty1=ty2=y1=y2=yLineValue;}itemsToDraw.push({tx1:tx1,ty1:ty1,tx2:tx2,ty2:ty2,x1:x1,y1:y1,x2:x2,y2:y2,labelX:labelX,labelY:labelY,glWidth:lineWidth,glColor:lineColor,glBorderDash:borderDash,glBorderDashOffset:borderDashOffset,rotation:-1*labelRotationRadians,label:label,major:tick.major,textBaseline:textBaseline,textAlign:textAlign});});// Draw all of the tick labels, tick marks, and grid lines at the correct places
helpers.each(itemsToDraw,function(itemToDraw){if(gridLines.display){context.save();context.lineWidth=itemToDraw.glWidth;context.strokeStyle=itemToDraw.glColor;if(context.setLineDash){context.setLineDash(itemToDraw.glBorderDash);context.lineDashOffset=itemToDraw.glBorderDashOffset;}context.beginPath();if(gridLines.drawTicks){context.moveTo(itemToDraw.tx1,itemToDraw.ty1);context.lineTo(itemToDraw.tx2,itemToDraw.ty2);}if(gridLines.drawOnChartArea){context.moveTo(itemToDraw.x1,itemToDraw.y1);context.lineTo(itemToDraw.x2,itemToDraw.y2);}context.stroke();context.restore();}if(optionTicks.display){// Make sure we draw text in the correct color and font
context.save();context.translate(itemToDraw.labelX,itemToDraw.labelY);context.rotate(itemToDraw.rotation);context.font=itemToDraw.major?majorTickFont.font:tickFont.font;context.fillStyle=itemToDraw.major?majorTickFontColor:tickFontColor;context.textBaseline=itemToDraw.textBaseline;context.textAlign=itemToDraw.textAlign;var label=itemToDraw.label;if(helpers.isArray(label)){for(var i=0,y=0;i<label.length;++i){// We just make sure the multiline element is a string here..
context.fillText(''+label[i],0,y);// apply same lineSpacing as calculated @ L#320
y+=tickFont.size*1.5;}}else{context.fillText(label,0,0);}context.restore();}});if(scaleLabel.display){// Draw the scale label
var scaleLabelX;var scaleLabelY;var rotation=0;var halfLineHeight=parseLineHeight(scaleLabel)/2;if(isHorizontal){scaleLabelX=me.left+(me.right-me.left)/2;// midpoint of the width
scaleLabelY=options.position==='bottom'?me.bottom-halfLineHeight-scaleLabelPadding.bottom:me.top+halfLineHeight+scaleLabelPadding.top;}else{var isLeft=options.position==='left';scaleLabelX=isLeft?me.left+halfLineHeight+scaleLabelPadding.top:me.right-halfLineHeight-scaleLabelPadding.top;scaleLabelY=me.top+(me.bottom-me.top)/2;rotation=isLeft?-0.5*Math.PI:0.5*Math.PI;}context.save();context.translate(scaleLabelX,scaleLabelY);context.rotate(rotation);context.textAlign='center';context.textBaseline='middle';context.fillStyle=scaleLabelFontColor;// render in correct colour
context.font=scaleLabelFont.font;context.fillText(scaleLabel.labelString,0,0);context.restore();}if(gridLines.drawBorder){// Draw the line at the edge of the axis
context.lineWidth=helpers.valueAtIndexOrDefault(gridLines.lineWidth,0);context.strokeStyle=helpers.valueAtIndexOrDefault(gridLines.color,0);var x1=me.left;var x2=me.right;var y1=me.top;var y2=me.bottom;var aliasPixel=helpers.aliasPixel(context.lineWidth);if(isHorizontal){y1=y2=options.position==='top'?me.bottom:me.top;y1+=aliasPixel;y2+=aliasPixel;}else{x1=x2=options.position==='left'?me.right:me.left;x1+=aliasPixel;x2+=aliasPixel;}context.beginPath();context.moveTo(x1,y1);context.lineTo(x2,y2);context.stroke();}}});};},{"25":25,"26":26,"34":34,"45":45}],33:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);module.exports=function(Chart){Chart.scaleService={// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
// use the new chart options to grab the correct scale
constructors:{},// Use a registration function so that we can move to an ES6 map when we no longer need to support
// old browsers
// Scale config defaults
defaults:{},registerScaleType:function registerScaleType(type,scaleConstructor,scaleDefaults){this.constructors[type]=scaleConstructor;this.defaults[type]=helpers.clone(scaleDefaults);},getScaleConstructor:function getScaleConstructor(type){return this.constructors.hasOwnProperty(type)?this.constructors[type]:undefined;},getScaleDefaults:function getScaleDefaults(type){// Return the scale defaults merged with the global settings so that we always use the latest ones
return this.defaults.hasOwnProperty(type)?helpers.merge({},[defaults.scale,this.defaults[type]]):{};},updateScaleDefaults:function updateScaleDefaults(type,additions){var me=this;if(me.defaults.hasOwnProperty(type)){me.defaults[type]=helpers.extend(me.defaults[type],additions);}},addScalesToLayout:function addScalesToLayout(chart){// Adds each scale to the chart.boxes array to be sized accordingly
helpers.each(chart.scales,function(scale){// Set ILayoutItem parameters for backwards compatibility
scale.fullWidth=scale.options.fullWidth;scale.position=scale.options.position;scale.weight=scale.options.weight;Chart.layoutService.addBox(chart,scale);});}};};},{"25":25,"45":45}],34:[function(require,module,exports){'use strict';var helpers=require(45);/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */module.exports={/**
	 * Namespace to hold generators for different types of ticks
	 * @namespace Chart.Ticks.generators
	 */generators:{/**
		 * Interface for the options provided to the numeric tick generator
		 * @interface INumericTickGenerationOptions
		 */ /**
		 * The maximum number of ticks to display
		 * @name INumericTickGenerationOptions#maxTicks
		 * @type Number
		 */ /**
		 * The distance between each tick.
		 * @name INumericTickGenerationOptions#stepSize
		 * @type Number
		 * @optional
		 */ /**
		 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
		 * @name INumericTickGenerationOptions#min
		 * @type Number
		 * @optional
		 */ /**
		 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
		 * @name INumericTickGenerationOptions#max
		 * @type Number
		 * @optional
		 */ /**
		 * Generate a set of linear ticks
		 * @method Chart.Ticks.generators.linear
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */linear:function linear(generationOptions,dataRange){var ticks=[];// To get a "nice" value for the tick spacing, we will use the appropriately named
// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
// for details.
var spacing;if(generationOptions.stepSize&&generationOptions.stepSize>0){spacing=generationOptions.stepSize;}else{var niceRange=helpers.niceNum(dataRange.max-dataRange.min,false);spacing=helpers.niceNum(niceRange/(generationOptions.maxTicks-1),true);}var niceMin=Math.floor(dataRange.min/spacing)*spacing;var niceMax=Math.ceil(dataRange.max/spacing)*spacing;// If min, max and stepSize is set and they make an evenly spaced scale use it.
if(generationOptions.min&&generationOptions.max&&generationOptions.stepSize){// If very close to our whole number, use it.
if(helpers.almostWhole((generationOptions.max-generationOptions.min)/generationOptions.stepSize,spacing/1000)){niceMin=generationOptions.min;niceMax=generationOptions.max;}}var numSpaces=(niceMax-niceMin)/spacing;// If very close to our rounded value, use it.
if(helpers.almostEquals(numSpaces,Math.round(numSpaces),spacing/1000)){numSpaces=Math.round(numSpaces);}else{numSpaces=Math.ceil(numSpaces);}// Put the values into the ticks array
ticks.push(generationOptions.min!==undefined?generationOptions.min:niceMin);for(var j=1;j<numSpaces;++j){ticks.push(niceMin+j*spacing);}ticks.push(generationOptions.max!==undefined?generationOptions.max:niceMax);return ticks;},/**
		 * Generate a set of logarithmic ticks
		 * @method Chart.Ticks.generators.logarithmic
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */logarithmic:function logarithmic(generationOptions,dataRange){var ticks=[];var valueOrDefault=helpers.valueOrDefault;// Figure out what the max number of ticks we can support it is based on the size of
// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
// the graph
var tickVal=valueOrDefault(generationOptions.min,Math.pow(10,Math.floor(helpers.log10(dataRange.min))));var endExp=Math.floor(helpers.log10(dataRange.max));var endSignificand=Math.ceil(dataRange.max/Math.pow(10,endExp));var exp,significand;if(tickVal===0){exp=Math.floor(helpers.log10(dataRange.minNotZero));significand=Math.floor(dataRange.minNotZero/Math.pow(10,exp));ticks.push(tickVal);tickVal=significand*Math.pow(10,exp);}else{exp=Math.floor(helpers.log10(tickVal));significand=Math.floor(tickVal/Math.pow(10,exp));}do{ticks.push(tickVal);++significand;if(significand===10){significand=1;++exp;}tickVal=significand*Math.pow(10,exp);}while(exp<endExp||exp===endExp&&significand<endSignificand);var lastTick=valueOrDefault(generationOptions.max,tickVal);ticks.push(lastTick);return ticks;}},/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */formatters:{/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */values:function values(value){return helpers.isArray(value)?value:''+value;},/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */linear:function linear(tickValue,index,ticks){// If we have lots of ticks, don't use the ones
var delta=ticks.length>3?ticks[2]-ticks[1]:ticks[1]-ticks[0];// If we have a number like 2.5 as the delta, figure out how many decimal places we need
if(Math.abs(delta)>1){if(tickValue!==Math.floor(tickValue)){// not an integer
delta=tickValue-Math.floor(tickValue);}}var logDelta=helpers.log10(Math.abs(delta));var tickString='';if(tickValue!==0){var numDecimal=-1*Math.floor(logDelta);numDecimal=Math.max(Math.min(numDecimal,20),0);// toFixed has a max of 20 decimal places
tickString=tickValue.toFixed(numDecimal);}else{tickString='0';// never show decimal places for 0
}return tickString;},logarithmic:function logarithmic(tickValue,index,ticks){var remain=tickValue/Math.pow(10,Math.floor(helpers.log10(tickValue)));if(tickValue===0){return'0';}else if(remain===1||remain===2||remain===5||index===0||index===ticks.length-1){return tickValue.toExponential();}return'';}}};},{"45":45}],35:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{tooltips:{enabled:true,custom:null,mode:'nearest',position:'average',intersect:true,backgroundColor:'rgba(0,0,0,0.8)',titleFontStyle:'bold',titleSpacing:2,titleMarginBottom:6,titleFontColor:'#fff',titleAlign:'left',bodySpacing:2,bodyFontColor:'#fff',bodyAlign:'left',footerFontStyle:'bold',footerSpacing:2,footerMarginTop:6,footerFontColor:'#fff',footerAlign:'left',yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:'#fff',displayColors:true,borderColor:'rgba(0,0,0,0)',borderWidth:0,callbacks:{// Args are: (tooltipItems, data)
beforeTitle:helpers.noop,title:function title(tooltipItems,data){// Pick first xLabel for now
var title='';var labels=data.labels;var labelCount=labels?labels.length:0;if(tooltipItems.length>0){var item=tooltipItems[0];if(item.xLabel){title=item.xLabel;}else if(labelCount>0&&item.index<labelCount){title=labels[item.index];}}return title;},afterTitle:helpers.noop,// Args are: (tooltipItems, data)
beforeBody:helpers.noop,// Args are: (tooltipItem, data)
beforeLabel:helpers.noop,label:function label(tooltipItem,data){var label=data.datasets[tooltipItem.datasetIndex].label||'';if(label){label+=': ';}label+=tooltipItem.yLabel;return label;},labelColor:function labelColor(tooltipItem,chart){var meta=chart.getDatasetMeta(tooltipItem.datasetIndex);var activeElement=meta.data[tooltipItem.index];var view=activeElement._view;return{borderColor:view.borderColor,backgroundColor:view.backgroundColor};},labelTextColor:function labelTextColor(){return this._options.bodyFontColor;},afterLabel:helpers.noop,// Args are: (tooltipItems, data)
afterBody:helpers.noop,// Args are: (tooltipItems, data)
beforeFooter:helpers.noop,footer:helpers.noop,afterFooter:helpers.noop}}});module.exports=function(Chart){/**
 	 * Helper method to merge the opacity into a color
 	 */function mergeOpacity(colorString,opacity){var color=helpers.color(colorString);return color.alpha(opacity*color.alpha()).rgbaString();}// Helper to push or concat based on if the 2nd parameter is an array or not
function pushOrConcat(base,toPush){if(toPush){if(helpers.isArray(toPush)){// base = base.concat(toPush);
Array.prototype.push.apply(base,toPush);}else{base.push(toPush);}}return base;}// Private helper to create a tooltip item model
// @param element : the chart element (point, arc, bar) to create the tooltip item for
// @return : new tooltip item
function createTooltipItem(element){var xScale=element._xScale;var yScale=element._yScale||element._scale;// handle radar || polarArea charts
var index=element._index;var datasetIndex=element._datasetIndex;return{xLabel:xScale?xScale.getLabelForIndex(index,datasetIndex):'',yLabel:yScale?yScale.getLabelForIndex(index,datasetIndex):'',index:index,datasetIndex:datasetIndex,x:element._model.x,y:element._model.y};}/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */function getBaseModel(tooltipOpts){var globalDefaults=defaults.global;var valueOrDefault=helpers.valueOrDefault;return{// Positioning
xPadding:tooltipOpts.xPadding,yPadding:tooltipOpts.yPadding,xAlign:tooltipOpts.xAlign,yAlign:tooltipOpts.yAlign,// Body
bodyFontColor:tooltipOpts.bodyFontColor,_bodyFontFamily:valueOrDefault(tooltipOpts.bodyFontFamily,globalDefaults.defaultFontFamily),_bodyFontStyle:valueOrDefault(tooltipOpts.bodyFontStyle,globalDefaults.defaultFontStyle),_bodyAlign:tooltipOpts.bodyAlign,bodyFontSize:valueOrDefault(tooltipOpts.bodyFontSize,globalDefaults.defaultFontSize),bodySpacing:tooltipOpts.bodySpacing,// Title
titleFontColor:tooltipOpts.titleFontColor,_titleFontFamily:valueOrDefault(tooltipOpts.titleFontFamily,globalDefaults.defaultFontFamily),_titleFontStyle:valueOrDefault(tooltipOpts.titleFontStyle,globalDefaults.defaultFontStyle),titleFontSize:valueOrDefault(tooltipOpts.titleFontSize,globalDefaults.defaultFontSize),_titleAlign:tooltipOpts.titleAlign,titleSpacing:tooltipOpts.titleSpacing,titleMarginBottom:tooltipOpts.titleMarginBottom,// Footer
footerFontColor:tooltipOpts.footerFontColor,_footerFontFamily:valueOrDefault(tooltipOpts.footerFontFamily,globalDefaults.defaultFontFamily),_footerFontStyle:valueOrDefault(tooltipOpts.footerFontStyle,globalDefaults.defaultFontStyle),footerFontSize:valueOrDefault(tooltipOpts.footerFontSize,globalDefaults.defaultFontSize),_footerAlign:tooltipOpts.footerAlign,footerSpacing:tooltipOpts.footerSpacing,footerMarginTop:tooltipOpts.footerMarginTop,// Appearance
caretSize:tooltipOpts.caretSize,cornerRadius:tooltipOpts.cornerRadius,backgroundColor:tooltipOpts.backgroundColor,opacity:0,legendColorBackground:tooltipOpts.multiKeyBackground,displayColors:tooltipOpts.displayColors,borderColor:tooltipOpts.borderColor,borderWidth:tooltipOpts.borderWidth};}/**
	 * Get the size of the tooltip
	 */function getTooltipSize(tooltip,model){var ctx=tooltip._chart.ctx;var height=model.yPadding*2;// Tooltip Padding
var width=0;// Count of all lines in the body
var body=model.body;var combinedBodyLength=body.reduce(function(count,bodyItem){return count+bodyItem.before.length+bodyItem.lines.length+bodyItem.after.length;},0);combinedBodyLength+=model.beforeBody.length+model.afterBody.length;var titleLineCount=model.title.length;var footerLineCount=model.footer.length;var titleFontSize=model.titleFontSize;var bodyFontSize=model.bodyFontSize;var footerFontSize=model.footerFontSize;height+=titleLineCount*titleFontSize;// Title Lines
height+=titleLineCount?(titleLineCount-1)*model.titleSpacing:0;// Title Line Spacing
height+=titleLineCount?model.titleMarginBottom:0;// Title's bottom Margin
height+=combinedBodyLength*bodyFontSize;// Body Lines
height+=combinedBodyLength?(combinedBodyLength-1)*model.bodySpacing:0;// Body Line Spacing
height+=footerLineCount?model.footerMarginTop:0;// Footer Margin
height+=footerLineCount*footerFontSize;// Footer Lines
height+=footerLineCount?(footerLineCount-1)*model.footerSpacing:0;// Footer Line Spacing
// Title width
var widthPadding=0;var maxLineWidth=function maxLineWidth(line){width=Math.max(width,ctx.measureText(line).width+widthPadding);};ctx.font=helpers.fontString(titleFontSize,model._titleFontStyle,model._titleFontFamily);helpers.each(model.title,maxLineWidth);// Body width
ctx.font=helpers.fontString(bodyFontSize,model._bodyFontStyle,model._bodyFontFamily);helpers.each(model.beforeBody.concat(model.afterBody),maxLineWidth);// Body lines may include some extra width due to the color box
widthPadding=model.displayColors?bodyFontSize+2:0;helpers.each(body,function(bodyItem){helpers.each(bodyItem.before,maxLineWidth);helpers.each(bodyItem.lines,maxLineWidth);helpers.each(bodyItem.after,maxLineWidth);});// Reset back to 0
widthPadding=0;// Footer width
ctx.font=helpers.fontString(footerFontSize,model._footerFontStyle,model._footerFontFamily);helpers.each(model.footer,maxLineWidth);// Add padding
width+=2*model.xPadding;return{width:width,height:height};}/**
	 * Helper to get the alignment of a tooltip given the size
	 */function determineAlignment(tooltip,size){var model=tooltip._model;var chart=tooltip._chart;var chartArea=tooltip._chart.chartArea;var xAlign='center';var yAlign='center';if(model.y<size.height){yAlign='top';}else if(model.y>chart.height-size.height){yAlign='bottom';}var lf,rf;// functions to determine left, right alignment
var olf,orf;// functions to determine if left/right alignment causes tooltip to go outside chart
var yf;// function to get the y alignment if the tooltip goes outside of the left or right edges
var midX=(chartArea.left+chartArea.right)/2;var midY=(chartArea.top+chartArea.bottom)/2;if(yAlign==='center'){lf=function lf(x){return x<=midX;};rf=function rf(x){return x>midX;};}else{lf=function lf(x){return x<=size.width/2;};rf=function rf(x){return x>=chart.width-size.width/2;};}olf=function olf(x){return x+size.width>chart.width;};orf=function orf(x){return x-size.width<0;};yf=function yf(y){return y<=midY?'top':'bottom';};if(lf(model.x)){xAlign='left';// Is tooltip too wide and goes over the right side of the chart.?
if(olf(model.x)){xAlign='center';yAlign=yf(model.y);}}else if(rf(model.x)){xAlign='right';// Is tooltip too wide and goes outside left edge of canvas?
if(orf(model.x)){xAlign='center';yAlign=yf(model.y);}}var opts=tooltip._options;return{xAlign:opts.xAlign?opts.xAlign:xAlign,yAlign:opts.yAlign?opts.yAlign:yAlign};}/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */function getBackgroundPoint(vm,size,alignment){// Background Position
var x=vm.x;var y=vm.y;var caretSize=vm.caretSize;var caretPadding=vm.caretPadding;var cornerRadius=vm.cornerRadius;var xAlign=alignment.xAlign;var yAlign=alignment.yAlign;var paddingAndSize=caretSize+caretPadding;var radiusAndPadding=cornerRadius+caretPadding;if(xAlign==='right'){x-=size.width;}else if(xAlign==='center'){x-=size.width/2;}if(yAlign==='top'){y+=paddingAndSize;}else if(yAlign==='bottom'){y-=size.height+paddingAndSize;}else{y-=size.height/2;}if(yAlign==='center'){if(xAlign==='left'){x+=paddingAndSize;}else if(xAlign==='right'){x-=paddingAndSize;}}else if(xAlign==='left'){x-=radiusAndPadding;}else if(xAlign==='right'){x+=radiusAndPadding;}return{x:x,y:y};}Chart.Tooltip=Element.extend({initialize:function initialize(){this._model=getBaseModel(this._options);this._lastActive=[];},// Get the title
// Args are: (tooltipItem, data)
getTitle:function getTitle(){var me=this;var opts=me._options;var callbacks=opts.callbacks;var beforeTitle=callbacks.beforeTitle.apply(me,arguments);var title=callbacks.title.apply(me,arguments);var afterTitle=callbacks.afterTitle.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeTitle);lines=pushOrConcat(lines,title);lines=pushOrConcat(lines,afterTitle);return lines;},// Args are: (tooltipItem, data)
getBeforeBody:function getBeforeBody(){var lines=this._options.callbacks.beforeBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},// Args are: (tooltipItem, data)
getBody:function getBody(tooltipItems,data){var me=this;var callbacks=me._options.callbacks;var bodyItems=[];helpers.each(tooltipItems,function(tooltipItem){var bodyItem={before:[],lines:[],after:[]};pushOrConcat(bodyItem.before,callbacks.beforeLabel.call(me,tooltipItem,data));pushOrConcat(bodyItem.lines,callbacks.label.call(me,tooltipItem,data));pushOrConcat(bodyItem.after,callbacks.afterLabel.call(me,tooltipItem,data));bodyItems.push(bodyItem);});return bodyItems;},// Args are: (tooltipItem, data)
getAfterBody:function getAfterBody(){var lines=this._options.callbacks.afterBody.apply(this,arguments);return helpers.isArray(lines)?lines:lines!==undefined?[lines]:[];},// Get the footer and beforeFooter and afterFooter lines
// Args are: (tooltipItem, data)
getFooter:function getFooter(){var me=this;var callbacks=me._options.callbacks;var beforeFooter=callbacks.beforeFooter.apply(me,arguments);var footer=callbacks.footer.apply(me,arguments);var afterFooter=callbacks.afterFooter.apply(me,arguments);var lines=[];lines=pushOrConcat(lines,beforeFooter);lines=pushOrConcat(lines,footer);lines=pushOrConcat(lines,afterFooter);return lines;},update:function update(changed){var me=this;var opts=me._options;// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
// which breaks any animations.
var existingModel=me._model;var model=me._model=getBaseModel(opts);var active=me._active;var data=me._data;// In the case where active.length === 0 we need to keep these at existing values for good animations
var alignment={xAlign:existingModel.xAlign,yAlign:existingModel.yAlign};var backgroundPoint={x:existingModel.x,y:existingModel.y};var tooltipSize={width:existingModel.width,height:existingModel.height};var tooltipPosition={x:existingModel.caretX,y:existingModel.caretY};var i,len;if(active.length){model.opacity=1;var labelColors=[];var labelTextColors=[];tooltipPosition=Chart.Tooltip.positioners[opts.position].call(me,active,me._eventPosition);var tooltipItems=[];for(i=0,len=active.length;i<len;++i){tooltipItems.push(createTooltipItem(active[i]));}// If the user provided a filter function, use it to modify the tooltip items
if(opts.filter){tooltipItems=tooltipItems.filter(function(a){return opts.filter(a,data);});}// If the user provided a sorting function, use it to modify the tooltip items
if(opts.itemSort){tooltipItems=tooltipItems.sort(function(a,b){return opts.itemSort(a,b,data);});}// Determine colors for boxes
helpers.each(tooltipItems,function(tooltipItem){labelColors.push(opts.callbacks.labelColor.call(me,tooltipItem,me._chart));labelTextColors.push(opts.callbacks.labelTextColor.call(me,tooltipItem,me._chart));});// Build the Text Lines
model.title=me.getTitle(tooltipItems,data);model.beforeBody=me.getBeforeBody(tooltipItems,data);model.body=me.getBody(tooltipItems,data);model.afterBody=me.getAfterBody(tooltipItems,data);model.footer=me.getFooter(tooltipItems,data);// Initial positioning and colors
model.x=Math.round(tooltipPosition.x);model.y=Math.round(tooltipPosition.y);model.caretPadding=opts.caretPadding;model.labelColors=labelColors;model.labelTextColors=labelTextColors;// data points
model.dataPoints=tooltipItems;// We need to determine alignment of the tooltip
tooltipSize=getTooltipSize(this,model);alignment=determineAlignment(this,tooltipSize);// Final Size and Position
backgroundPoint=getBackgroundPoint(model,tooltipSize,alignment);}else{model.opacity=0;}model.xAlign=alignment.xAlign;model.yAlign=alignment.yAlign;model.x=backgroundPoint.x;model.y=backgroundPoint.y;model.width=tooltipSize.width;model.height=tooltipSize.height;// Point where the caret on the tooltip points to
model.caretX=tooltipPosition.x;model.caretY=tooltipPosition.y;me._model=model;if(changed&&opts.custom){opts.custom.call(me,model);}return me;},drawCaret:function drawCaret(tooltipPoint,size){var ctx=this._chart.ctx;var vm=this._view;var caretPosition=this.getCaretPosition(tooltipPoint,size,vm);ctx.lineTo(caretPosition.x1,caretPosition.y1);ctx.lineTo(caretPosition.x2,caretPosition.y2);ctx.lineTo(caretPosition.x3,caretPosition.y3);},getCaretPosition:function getCaretPosition(tooltipPoint,size,vm){var x1,x2,x3,y1,y2,y3;var caretSize=vm.caretSize;var cornerRadius=vm.cornerRadius;var xAlign=vm.xAlign;var yAlign=vm.yAlign;var ptX=tooltipPoint.x;var ptY=tooltipPoint.y;var width=size.width;var height=size.height;if(yAlign==='center'){y2=ptY+height/2;if(xAlign==='left'){x1=ptX;x2=x1-caretSize;x3=x1;y1=y2+caretSize;y3=y2-caretSize;}else{x1=ptX+width;x2=x1+caretSize;x3=x1;y1=y2-caretSize;y3=y2+caretSize;}}else{if(xAlign==='left'){x2=ptX+cornerRadius+caretSize;x1=x2-caretSize;x3=x2+caretSize;}else if(xAlign==='right'){x2=ptX+width-cornerRadius-caretSize;x1=x2-caretSize;x3=x2+caretSize;}else{x2=ptX+width/2;x1=x2-caretSize;x3=x2+caretSize;}if(yAlign==='top'){y1=ptY;y2=y1-caretSize;y3=y1;}else{y1=ptY+height;y2=y1+caretSize;y3=y1;// invert drawing order
var tmp=x3;x3=x1;x1=tmp;}}return{x1:x1,x2:x2,x3:x3,y1:y1,y2:y2,y3:y3};},drawTitle:function drawTitle(pt,vm,ctx,opacity){var title=vm.title;if(title.length){ctx.textAlign=vm._titleAlign;ctx.textBaseline='top';var titleFontSize=vm.titleFontSize;var titleSpacing=vm.titleSpacing;ctx.fillStyle=mergeOpacity(vm.titleFontColor,opacity);ctx.font=helpers.fontString(titleFontSize,vm._titleFontStyle,vm._titleFontFamily);var i,len;for(i=0,len=title.length;i<len;++i){ctx.fillText(title[i],pt.x,pt.y);pt.y+=titleFontSize+titleSpacing;// Line Height and spacing
if(i+1===title.length){pt.y+=vm.titleMarginBottom-titleSpacing;// If Last, add margin, remove spacing
}}}},drawBody:function drawBody(pt,vm,ctx,opacity){var bodyFontSize=vm.bodyFontSize;var bodySpacing=vm.bodySpacing;var body=vm.body;ctx.textAlign=vm._bodyAlign;ctx.textBaseline='top';ctx.font=helpers.fontString(bodyFontSize,vm._bodyFontStyle,vm._bodyFontFamily);// Before Body
var xLinePadding=0;var fillLineOfText=function fillLineOfText(line){ctx.fillText(line,pt.x+xLinePadding,pt.y);pt.y+=bodyFontSize+bodySpacing;};// Before body lines
ctx.fillStyle=mergeOpacity(vm.bodyFontColor,opacity);helpers.each(vm.beforeBody,fillLineOfText);var drawColorBoxes=vm.displayColors;xLinePadding=drawColorBoxes?bodyFontSize+2:0;// Draw body lines now
helpers.each(body,function(bodyItem,i){var textColor=mergeOpacity(vm.labelTextColors[i],opacity);ctx.fillStyle=textColor;helpers.each(bodyItem.before,fillLineOfText);helpers.each(bodyItem.lines,function(line){// Draw Legend-like boxes if needed
if(drawColorBoxes){// Fill a white rect so that colours merge nicely if the opacity is < 1
ctx.fillStyle=mergeOpacity(vm.legendColorBackground,opacity);ctx.fillRect(pt.x,pt.y,bodyFontSize,bodyFontSize);// Border
ctx.lineWidth=1;ctx.strokeStyle=mergeOpacity(vm.labelColors[i].borderColor,opacity);ctx.strokeRect(pt.x,pt.y,bodyFontSize,bodyFontSize);// Inner square
ctx.fillStyle=mergeOpacity(vm.labelColors[i].backgroundColor,opacity);ctx.fillRect(pt.x+1,pt.y+1,bodyFontSize-2,bodyFontSize-2);ctx.fillStyle=textColor;}fillLineOfText(line);});helpers.each(bodyItem.after,fillLineOfText);});// Reset back to 0 for after body
xLinePadding=0;// After body lines
helpers.each(vm.afterBody,fillLineOfText);pt.y-=bodySpacing;// Remove last body spacing
},drawFooter:function drawFooter(pt,vm,ctx,opacity){var footer=vm.footer;if(footer.length){pt.y+=vm.footerMarginTop;ctx.textAlign=vm._footerAlign;ctx.textBaseline='top';ctx.fillStyle=mergeOpacity(vm.footerFontColor,opacity);ctx.font=helpers.fontString(vm.footerFontSize,vm._footerFontStyle,vm._footerFontFamily);helpers.each(footer,function(line){ctx.fillText(line,pt.x,pt.y);pt.y+=vm.footerFontSize+vm.footerSpacing;});}},drawBackground:function drawBackground(pt,vm,ctx,tooltipSize,opacity){ctx.fillStyle=mergeOpacity(vm.backgroundColor,opacity);ctx.strokeStyle=mergeOpacity(vm.borderColor,opacity);ctx.lineWidth=vm.borderWidth;var xAlign=vm.xAlign;var yAlign=vm.yAlign;var x=pt.x;var y=pt.y;var width=tooltipSize.width;var height=tooltipSize.height;var radius=vm.cornerRadius;ctx.beginPath();ctx.moveTo(x+radius,y);if(yAlign==='top'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+width-radius,y);ctx.quadraticCurveTo(x+width,y,x+width,y+radius);if(yAlign==='center'&&xAlign==='right'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+width,y+height-radius);ctx.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);if(yAlign==='bottom'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x+radius,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-radius);if(yAlign==='center'&&xAlign==='left'){this.drawCaret(pt,tooltipSize);}ctx.lineTo(x,y+radius);ctx.quadraticCurveTo(x,y,x+radius,y);ctx.closePath();ctx.fill();if(vm.borderWidth>0){ctx.stroke();}},draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;if(vm.opacity===0){return;}var tooltipSize={width:vm.width,height:vm.height};var pt={x:vm.x,y:vm.y};// IE11/Edge does not like very small opacities, so snap to 0
var opacity=Math.abs(vm.opacity<1e-3)?0:vm.opacity;// Truthy/falsey value for empty tooltip
var hasTooltipContent=vm.title.length||vm.beforeBody.length||vm.body.length||vm.afterBody.length||vm.footer.length;if(this._options.enabled&&hasTooltipContent){// Draw Background
this.drawBackground(pt,vm,ctx,tooltipSize,opacity);// Draw Title, Body, and Footer
pt.x+=vm.xPadding;pt.y+=vm.yPadding;// Titles
this.drawTitle(pt,vm,ctx,opacity);// Body
this.drawBody(pt,vm,ctx,opacity);// Footer
this.drawFooter(pt,vm,ctx,opacity);}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */handleEvent:function handleEvent(e){var me=this;var options=me._options;var changed=false;me._lastActive=me._lastActive||[];// Find Active Elements for tooltips
if(e.type==='mouseout'){me._active=[];}else{me._active=me._chart.getElementsAtEventForMode(e,options.mode,options);}// Remember Last Actives
changed=!helpers.arrayEquals(me._active,me._lastActive);// If tooltip didn't change, do not handle the target event
if(!changed){return false;}me._lastActive=me._active;if(options.enabled||options.custom){me._eventPosition={x:e.x,y:e.y};var model=me._model;me.update(true);me.pivot();// See if our tooltip position changed
changed|=model.x!==me._model.x||model.y!==me._model.y;}return changed;}});/**
	 * @namespace Chart.Tooltip.positioners
	 */Chart.Tooltip.positioners={/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */average:function average(elements){if(!elements.length){return false;}var i,len;var x=0;var y=0;var count=0;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var pos=el.tooltipPosition();x+=pos.x;y+=pos.y;++count;}}return{x:Math.round(x/count),y:Math.round(y/count)};},/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */nearest:function nearest(elements,eventPosition){var x=eventPosition.x;var y=eventPosition.y;var minDistance=Number.POSITIVE_INFINITY;var i,len,nearestElement;for(i=0,len=elements.length;i<len;++i){var el=elements[i];if(el&&el.hasValue()){var center=el.getCenterPoint();var d=helpers.distanceBetweenPoints(eventPosition,center);if(d<minDistance){minDistance=d;nearestElement=el;}}}if(nearestElement){var tp=nearestElement.tooltipPosition();x=tp.x;y=tp.y;}return{x:x,y:y};}};};},{"25":25,"26":26,"45":45}],36:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{elements:{arc:{backgroundColor:defaults.global.defaultColor,borderColor:'#fff',borderWidth:2}}});module.exports=Element.extend({inLabelRange:function inLabelRange(mouseX){var vm=this._view;if(vm){return Math.pow(mouseX-vm.x,2)<Math.pow(vm.radius+vm.hoverRadius,2);}return false;},inRange:function inRange(chartX,chartY){var vm=this._view;if(vm){var pointRelativePosition=helpers.getAngleFromPoint(vm,{x:chartX,y:chartY});var angle=pointRelativePosition.angle;var distance=pointRelativePosition.distance;// Sanitise angle range
var startAngle=vm.startAngle;var endAngle=vm.endAngle;while(endAngle<startAngle){endAngle+=2.0*Math.PI;}while(angle>endAngle){angle-=2.0*Math.PI;}while(angle<startAngle){angle+=2.0*Math.PI;}// Check if within the range of the open/close angle
var betweenAngles=angle>=startAngle&&angle<=endAngle;var withinRadius=distance>=vm.innerRadius&&distance<=vm.outerRadius;return betweenAngles&&withinRadius;}return false;},getCenterPoint:function getCenterPoint(){var vm=this._view;var halfAngle=(vm.startAngle+vm.endAngle)/2;var halfRadius=(vm.innerRadius+vm.outerRadius)/2;return{x:vm.x+Math.cos(halfAngle)*halfRadius,y:vm.y+Math.sin(halfAngle)*halfRadius};},getArea:function getArea(){var vm=this._view;return Math.PI*((vm.endAngle-vm.startAngle)/(2*Math.PI))*(Math.pow(vm.outerRadius,2)-Math.pow(vm.innerRadius,2));},tooltipPosition:function tooltipPosition(){var vm=this._view;var centreAngle=vm.startAngle+(vm.endAngle-vm.startAngle)/2;var rangeFromCentre=(vm.outerRadius-vm.innerRadius)/2+vm.innerRadius;return{x:vm.x+Math.cos(centreAngle)*rangeFromCentre,y:vm.y+Math.sin(centreAngle)*rangeFromCentre};},draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;var sA=vm.startAngle;var eA=vm.endAngle;ctx.beginPath();ctx.arc(vm.x,vm.y,vm.outerRadius,sA,eA);ctx.arc(vm.x,vm.y,vm.innerRadius,eA,sA,true);ctx.closePath();ctx.strokeStyle=vm.borderColor;ctx.lineWidth=vm.borderWidth;ctx.fillStyle=vm.backgroundColor;ctx.fill();ctx.lineJoin='bevel';if(vm.borderWidth){ctx.stroke();}}});},{"25":25,"26":26,"45":45}],37:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var globalDefaults=defaults.global;defaults._set('global',{elements:{line:{tension:0.4,backgroundColor:globalDefaults.defaultColor,borderWidth:3,borderColor:globalDefaults.defaultColor,borderCapStyle:'butt',borderDash:[],borderDashOffset:0.0,borderJoinStyle:'miter',capBezierPoints:true,fill:true// do we fill in the area between the line and its base axis
}}});module.exports=Element.extend({draw:function draw(){var me=this;var vm=me._view;var ctx=me._chart.ctx;var spanGaps=vm.spanGaps;var points=me._children.slice();// clone array
var globalOptionLineElements=globalDefaults.elements.line;var lastDrawnIndex=-1;var index,current,previous,currentVM;// If we are looping, adding the first point again
if(me._loop&&points.length){points.push(points[0]);}ctx.save();// Stroke Line Options
ctx.lineCap=vm.borderCapStyle||globalOptionLineElements.borderCapStyle;// IE 9 and 10 do not support line dash
if(ctx.setLineDash){ctx.setLineDash(vm.borderDash||globalOptionLineElements.borderDash);}ctx.lineDashOffset=vm.borderDashOffset||globalOptionLineElements.borderDashOffset;ctx.lineJoin=vm.borderJoinStyle||globalOptionLineElements.borderJoinStyle;ctx.lineWidth=vm.borderWidth||globalOptionLineElements.borderWidth;ctx.strokeStyle=vm.borderColor||globalDefaults.defaultColor;// Stroke Line
ctx.beginPath();lastDrawnIndex=-1;for(index=0;index<points.length;++index){current=points[index];previous=helpers.previousItem(points,index);currentVM=current._view;// First point moves to it's starting position no matter what
if(index===0){if(!currentVM.skip){ctx.moveTo(currentVM.x,currentVM.y);lastDrawnIndex=index;}}else{previous=lastDrawnIndex===-1?previous:points[lastDrawnIndex];if(!currentVM.skip){if(lastDrawnIndex!==index-1&&!spanGaps||lastDrawnIndex===-1){// There was a gap and this is the first point after the gap
ctx.moveTo(currentVM.x,currentVM.y);}else{// Line to next point
helpers.canvas.lineTo(ctx,previous._view,current._view);}lastDrawnIndex=index;}}}ctx.stroke();ctx.restore();}});},{"25":25,"26":26,"45":45}],38:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);var defaultColor=defaults.global.defaultColor;defaults._set('global',{elements:{point:{radius:3,pointStyle:'circle',backgroundColor:defaultColor,borderColor:defaultColor,borderWidth:1,// Hover
hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});function xRange(mouseX){var vm=this._view;return vm?Math.pow(mouseX-vm.x,2)<Math.pow(vm.radius+vm.hitRadius,2):false;}function yRange(mouseY){var vm=this._view;return vm?Math.pow(mouseY-vm.y,2)<Math.pow(vm.radius+vm.hitRadius,2):false;}module.exports=Element.extend({inRange:function inRange(mouseX,mouseY){var vm=this._view;return vm?Math.pow(mouseX-vm.x,2)+Math.pow(mouseY-vm.y,2)<Math.pow(vm.hitRadius+vm.radius,2):false;},inLabelRange:xRange,inXRange:xRange,inYRange:yRange,getCenterPoint:function getCenterPoint(){var vm=this._view;return{x:vm.x,y:vm.y};},getArea:function getArea(){return Math.PI*Math.pow(this._view.radius,2);},tooltipPosition:function tooltipPosition(){var vm=this._view;return{x:vm.x,y:vm.y,padding:vm.radius+vm.borderWidth};},draw:function draw(chartArea){var vm=this._view;var model=this._model;var ctx=this._chart.ctx;var pointStyle=vm.pointStyle;var radius=vm.radius;var x=vm.x;var y=vm.y;var color=helpers.color;var errMargin=1.01;// 1.01 is margin for Accumulated error. (Especially Edge, IE.)
var ratio=0;if(vm.skip){return;}ctx.strokeStyle=vm.borderColor||defaultColor;ctx.lineWidth=helpers.valueOrDefault(vm.borderWidth,defaults.global.elements.point.borderWidth);ctx.fillStyle=vm.backgroundColor||defaultColor;// Cliping for Points.
// going out from inner charArea?
if(chartArea!==undefined&&(model.x<chartArea.left||chartArea.right*errMargin<model.x||model.y<chartArea.top||chartArea.bottom*errMargin<model.y)){// Point fade out
if(model.x<chartArea.left){ratio=(x-model.x)/(chartArea.left-model.x);}else if(chartArea.right*errMargin<model.x){ratio=(model.x-x)/(model.x-chartArea.right);}else if(model.y<chartArea.top){ratio=(y-model.y)/(chartArea.top-model.y);}else if(chartArea.bottom*errMargin<model.y){ratio=(model.y-y)/(model.y-chartArea.bottom);}ratio=Math.round(ratio*100)/100;ctx.strokeStyle=color(ctx.strokeStyle).alpha(ratio).rgbString();ctx.fillStyle=color(ctx.fillStyle).alpha(ratio).rgbString();}helpers.canvas.drawPoint(ctx,pointStyle,radius,x,y);}});},{"25":25,"26":26,"45":45}],39:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);defaults._set('global',{elements:{rectangle:{backgroundColor:defaults.global.defaultColor,borderColor:defaults.global.defaultColor,borderSkipped:'bottom',borderWidth:0}}});function isVertical(bar){return bar._view.width!==undefined;}/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */function getBarBounds(bar){var vm=bar._view;var x1,x2,y1,y2;if(isVertical(bar)){// vertical
var halfWidth=vm.width/2;x1=vm.x-halfWidth;x2=vm.x+halfWidth;y1=Math.min(vm.y,vm.base);y2=Math.max(vm.y,vm.base);}else{// horizontal bar
var halfHeight=vm.height/2;x1=Math.min(vm.x,vm.base);x2=Math.max(vm.x,vm.base);y1=vm.y-halfHeight;y2=vm.y+halfHeight;}return{left:x1,top:y1,right:x2,bottom:y2};}module.exports=Element.extend({draw:function draw(){var ctx=this._chart.ctx;var vm=this._view;var left,right,top,bottom,signX,signY,borderSkipped;var borderWidth=vm.borderWidth;if(!vm.horizontal){// bar
left=vm.x-vm.width/2;right=vm.x+vm.width/2;top=vm.y;bottom=vm.base;signX=1;signY=bottom>top?1:-1;borderSkipped=vm.borderSkipped||'bottom';}else{// horizontal bar
left=vm.base;right=vm.x;top=vm.y-vm.height/2;bottom=vm.y+vm.height/2;signX=right>left?1:-1;signY=1;borderSkipped=vm.borderSkipped||'left';}// Canvas doesn't allow us to stroke inside the width so we can
// adjust the sizes to fit if we're setting a stroke on the line
if(borderWidth){// borderWidth shold be less than bar width and bar height.
var barSize=Math.min(Math.abs(left-right),Math.abs(top-bottom));borderWidth=borderWidth>barSize?barSize:borderWidth;var halfStroke=borderWidth/2;// Adjust borderWidth when bar top position is near vm.base(zero).
var borderLeft=left+(borderSkipped!=='left'?halfStroke*signX:0);var borderRight=right+(borderSkipped!=='right'?-halfStroke*signX:0);var borderTop=top+(borderSkipped!=='top'?halfStroke*signY:0);var borderBottom=bottom+(borderSkipped!=='bottom'?-halfStroke*signY:0);// not become a vertical line?
if(borderLeft!==borderRight){top=borderTop;bottom=borderBottom;}// not become a horizontal line?
if(borderTop!==borderBottom){left=borderLeft;right=borderRight;}}ctx.beginPath();ctx.fillStyle=vm.backgroundColor;ctx.strokeStyle=vm.borderColor;ctx.lineWidth=borderWidth;// Corner points, from bottom-left to bottom-right clockwise
// | 1 2 |
// | 0 3 |
var corners=[[left,bottom],[left,top],[right,top],[right,bottom]];// Find first (starting) corner with fallback to 'bottom'
var borders=['bottom','left','top','right'];var startCorner=borders.indexOf(borderSkipped,0);if(startCorner===-1){startCorner=0;}function cornerAt(index){return corners[(startCorner+index)%4];}// Draw rectangle from 'startCorner'
var corner=cornerAt(0);ctx.moveTo(corner[0],corner[1]);for(var i=1;i<4;i++){corner=cornerAt(i);ctx.lineTo(corner[0],corner[1]);}ctx.fill();if(borderWidth){ctx.stroke();}},height:function height(){var vm=this._view;return vm.base-vm.y;},inRange:function inRange(mouseX,mouseY){var inRange=false;if(this._view){var bounds=getBarBounds(this);inRange=mouseX>=bounds.left&&mouseX<=bounds.right&&mouseY>=bounds.top&&mouseY<=bounds.bottom;}return inRange;},inLabelRange:function inLabelRange(mouseX,mouseY){var me=this;if(!me._view){return false;}var inRange=false;var bounds=getBarBounds(me);if(isVertical(me)){inRange=mouseX>=bounds.left&&mouseX<=bounds.right;}else{inRange=mouseY>=bounds.top&&mouseY<=bounds.bottom;}return inRange;},inXRange:function inXRange(mouseX){var bounds=getBarBounds(this);return mouseX>=bounds.left&&mouseX<=bounds.right;},inYRange:function inYRange(mouseY){var bounds=getBarBounds(this);return mouseY>=bounds.top&&mouseY<=bounds.bottom;},getCenterPoint:function getCenterPoint(){var vm=this._view;var x,y;if(isVertical(this)){x=vm.x;y=(vm.y+vm.base)/2;}else{x=(vm.x+vm.base)/2;y=vm.y;}return{x:x,y:y};},getArea:function getArea(){var vm=this._view;return vm.width*Math.abs(vm.y-vm.base);},tooltipPosition:function tooltipPosition(){var vm=this._view;return{x:vm.x,y:vm.y};}});},{"25":25,"26":26}],40:[function(require,module,exports){'use strict';module.exports={};module.exports.Arc=require(36);module.exports.Line=require(37);module.exports.Point=require(38);module.exports.Rectangle=require(39);},{"36":36,"37":37,"38":38,"39":39}],41:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * @namespace Chart.helpers.canvas
 */var exports=module.exports={/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */clear:function clear(chart){chart.ctx.clearRect(0,0,chart.width,chart.height);},/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */roundedRect:function roundedRect(ctx,x,y,width,height,radius){if(radius){var rx=Math.min(radius,width/2);var ry=Math.min(radius,height/2);ctx.moveTo(x+rx,y);ctx.lineTo(x+width-rx,y);ctx.quadraticCurveTo(x+width,y,x+width,y+ry);ctx.lineTo(x+width,y+height-ry);ctx.quadraticCurveTo(x+width,y+height,x+width-rx,y+height);ctx.lineTo(x+rx,y+height);ctx.quadraticCurveTo(x,y+height,x,y+height-ry);ctx.lineTo(x,y+ry);ctx.quadraticCurveTo(x,y,x+rx,y);}else{ctx.rect(x,y,width,height);}},drawPoint:function drawPoint(ctx,style,radius,x,y){var type,edgeLength,xOffset,yOffset,height,size;if(style&&_typeof2(style)==='object'){type=style.toString();if(type==='[object HTMLImageElement]'||type==='[object HTMLCanvasElement]'){ctx.drawImage(style,x-style.width/2,y-style.height/2,style.width,style.height);return;}}if(isNaN(radius)||radius<=0){return;}switch(style){// Default includes circle
default:ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.closePath();ctx.fill();break;case'triangle':ctx.beginPath();edgeLength=3*radius/Math.sqrt(3);height=edgeLength*Math.sqrt(3)/2;ctx.moveTo(x-edgeLength/2,y+height/3);ctx.lineTo(x+edgeLength/2,y+height/3);ctx.lineTo(x,y-2*height/3);ctx.closePath();ctx.fill();break;case'rect':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.fillRect(x-size,y-size,2*size,2*size);ctx.strokeRect(x-size,y-size,2*size,2*size);break;case'rectRounded':var offset=radius/Math.SQRT2;var leftX=x-offset;var topY=y-offset;var sideSize=Math.SQRT2*radius;ctx.beginPath();this.roundedRect(ctx,leftX,topY,sideSize,sideSize,radius/2);ctx.closePath();ctx.fill();break;case'rectRot':size=1/Math.SQRT2*radius;ctx.beginPath();ctx.moveTo(x-size,y);ctx.lineTo(x,y+size);ctx.lineTo(x+size,y);ctx.lineTo(x,y-size);ctx.closePath();ctx.fill();break;case'cross':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'crossRot':ctx.beginPath();xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'star':ctx.beginPath();ctx.moveTo(x,y+radius);ctx.lineTo(x,y-radius);ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);xOffset=Math.cos(Math.PI/4)*radius;yOffset=Math.sin(Math.PI/4)*radius;ctx.moveTo(x-xOffset,y-yOffset);ctx.lineTo(x+xOffset,y+yOffset);ctx.moveTo(x-xOffset,y+yOffset);ctx.lineTo(x+xOffset,y-yOffset);ctx.closePath();break;case'line':ctx.beginPath();ctx.moveTo(x-radius,y);ctx.lineTo(x+radius,y);ctx.closePath();break;case'dash':ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+radius,y);ctx.closePath();break;}ctx.stroke();},clipArea:function clipArea(ctx,area){ctx.save();ctx.beginPath();ctx.rect(area.left,area.top,area.right-area.left,area.bottom-area.top);ctx.clip();},unclipArea:function unclipArea(ctx){ctx.restore();},lineTo:function lineTo(ctx,previous,target,flip){if(target.steppedLine){if(target.steppedLine==='after'&&!flip||target.steppedLine!=='after'&&flip){ctx.lineTo(previous.x,target.y);}else{ctx.lineTo(target.x,previous.y);}ctx.lineTo(target.x,target.y);return;}if(!target.tension){ctx.lineTo(target.x,target.y);return;}ctx.bezierCurveTo(flip?previous.controlPointPreviousX:previous.controlPointNextX,flip?previous.controlPointPreviousY:previous.controlPointNextY,flip?target.controlPointNextX:target.controlPointPreviousX,flip?target.controlPointNextY:target.controlPointPreviousY,target.x,target.y);}};// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.clear=exports.clear;/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.drawRoundedRectangle=function(ctx){ctx.beginPath();exports.roundedRect.apply(exports,arguments);ctx.closePath();};},{"42":42}],42:[function(require,module,exports){'use strict';/**
 * @namespace Chart.helpers
 */var helpers={/**
	 * An empty function that can be used, for example, for optional callback.
	 */noop:function noop(){},/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */uid:function(){var id=0;return function(){return id++;};}(),/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */isNullOrUndef:function isNullOrUndef(value){return value===null||typeof value==='undefined';},/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */isArray:Array.isArray?Array.isArray:function(value){return Object.prototype.toString.call(value)==='[object Array]';},/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */isObject:function isObject(value){return value!==null&&Object.prototype.toString.call(value)==='[object Object]';},/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */valueOrDefault:function valueOrDefault(value,defaultValue){return typeof value==='undefined'?defaultValue:value;},/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */valueAtIndexOrDefault:function valueAtIndexOrDefault(value,index,defaultValue){return helpers.valueOrDefault(helpers.isArray(value)?value[index]:value,defaultValue);},/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */callback:function callback(fn,args,thisArg){if(fn&&typeof fn.call==='function'){return fn.apply(thisArg,args);}},/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */each:function each(loopable,fn,thisArg,reverse){var i,len,keys;if(helpers.isArray(loopable)){len=loopable.length;if(reverse){for(i=len-1;i>=0;i--){fn.call(thisArg,loopable[i],i);}}else{for(i=0;i<len;i++){fn.call(thisArg,loopable[i],i);}}}else if(helpers.isObject(loopable)){keys=Object.keys(loopable);len=keys.length;for(i=0;i<len;i++){fn.call(thisArg,loopable[keys[i]],keys[i]);}}},/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */arrayEquals:function arrayEquals(a0,a1){var i,ilen,v0,v1;if(!a0||!a1||a0.length!==a1.length){return false;}for(i=0,ilen=a0.length;i<ilen;++i){v0=a0[i];v1=a1[i];if(v0 instanceof Array&&v1 instanceof Array){if(!helpers.arrayEquals(v0,v1)){return false;}}else if(v0!==v1){// NOTE: two different object instances will never be equal: {x:20} != {x:20}
return false;}}return true;},/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */clone:function clone(source){if(helpers.isArray(source)){return source.map(helpers.clone);}if(helpers.isObject(source)){var target={};var keys=Object.keys(source);var klen=keys.length;var k=0;for(;k<klen;++k){target[keys[k]]=helpers.clone(source[keys[k]]);}return target;}return source;},/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */_merger:function _merger(key,target,source,options){var tval=target[key];var sval=source[key];if(helpers.isObject(tval)&&helpers.isObject(sval)){helpers.merge(tval,sval,options);}else{target[key]=helpers.clone(sval);}},/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */_mergerIf:function _mergerIf(key,target,source){var tval=target[key];var sval=source[key];if(helpers.isObject(tval)&&helpers.isObject(sval)){helpers.mergeIf(tval,sval);}else if(!target.hasOwnProperty(key)){target[key]=helpers.clone(sval);}},/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */merge:function merge(target,source,options){var sources=helpers.isArray(source)?source:[source];var ilen=sources.length;var merge,i,keys,klen,k;if(!helpers.isObject(target)){return target;}options=options||{};merge=options.merger||helpers._merger;for(i=0;i<ilen;++i){source=sources[i];if(!helpers.isObject(source)){continue;}keys=Object.keys(source);for(k=0,klen=keys.length;k<klen;++k){merge(keys[k],target,source,options);}}return target;},/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */mergeIf:function mergeIf(target,source){return helpers.merge(target,source,{merger:helpers._mergerIf});},/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */extend:function extend(target){var setFn=function setFn(value,key){target[key]=value;};for(var i=1,ilen=arguments.length;i<ilen;++i){helpers.each(arguments[i],setFn);}return target;},/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */inherits:function inherits(extensions){var me=this;var ChartElement=extensions&&extensions.hasOwnProperty('constructor')?extensions.constructor:function(){return me.apply(this,arguments);};var Surrogate=function Surrogate(){this.constructor=ChartElement;};Surrogate.prototype=me.prototype;ChartElement.prototype=new Surrogate();ChartElement.extend=helpers.inherits;if(extensions){helpers.extend(ChartElement.prototype,extensions);}ChartElement.__super__=me.prototype;return ChartElement;}};module.exports=helpers;// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */helpers.callCallback=helpers.callback;/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.indexOf=function(array,item,fromIndex){return Array.prototype.indexOf.call(array,item,fromIndex);};/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.getValueOrDefault=helpers.valueOrDefault;/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.getValueAtIndexOrDefault=helpers.valueAtIndexOrDefault;},{}],43:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */var effects={linear:function linear(t){return t;},easeInQuad:function easeInQuad(t){return t*t;},easeOutQuad:function easeOutQuad(t){return-t*(t-2);},easeInOutQuad:function easeInOutQuad(t){if((t/=0.5)<1){return 0.5*t*t;}return-0.5*(--t*(t-2)-1);},easeInCubic:function easeInCubic(t){return t*t*t;},easeOutCubic:function easeOutCubic(t){return(t=t-1)*t*t+1;},easeInOutCubic:function easeInOutCubic(t){if((t/=0.5)<1){return 0.5*t*t*t;}return 0.5*((t-=2)*t*t+2);},easeInQuart:function easeInQuart(t){return t*t*t*t;},easeOutQuart:function easeOutQuart(t){return-((t=t-1)*t*t*t-1);},easeInOutQuart:function easeInOutQuart(t){if((t/=0.5)<1){return 0.5*t*t*t*t;}return-0.5*((t-=2)*t*t*t-2);},easeInQuint:function easeInQuint(t){return t*t*t*t*t;},easeOutQuint:function easeOutQuint(t){return(t=t-1)*t*t*t*t+1;},easeInOutQuint:function easeInOutQuint(t){if((t/=0.5)<1){return 0.5*t*t*t*t*t;}return 0.5*((t-=2)*t*t*t*t+2);},easeInSine:function easeInSine(t){return-Math.cos(t*(Math.PI/2))+1;},easeOutSine:function easeOutSine(t){return Math.sin(t*(Math.PI/2));},easeInOutSine:function easeInOutSine(t){return-0.5*(Math.cos(Math.PI*t)-1);},easeInExpo:function easeInExpo(t){return t===0?0:Math.pow(2,10*(t-1));},easeOutExpo:function easeOutExpo(t){return t===1?1:-Math.pow(2,-10*t)+1;},easeInOutExpo:function easeInOutExpo(t){if(t===0){return 0;}if(t===1){return 1;}if((t/=0.5)<1){return 0.5*Math.pow(2,10*(t-1));}return 0.5*(-Math.pow(2,-10*--t)+2);},easeInCirc:function easeInCirc(t){if(t>=1){return t;}return-(Math.sqrt(1-t*t)-1);},easeOutCirc:function easeOutCirc(t){return Math.sqrt(1-(t=t-1)*t);},easeInOutCirc:function easeInOutCirc(t){if((t/=0.5)<1){return-0.5*(Math.sqrt(1-t*t)-1);}return 0.5*(Math.sqrt(1-(t-=2)*t)+1);},easeInElastic:function easeInElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}return-(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));},easeOutElastic:function easeOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if(t===1){return 1;}if(!p){p=0.3;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}return a*Math.pow(2,-10*t)*Math.sin((t-s)*(2*Math.PI)/p)+1;},easeInOutElastic:function easeInOutElastic(t){var s=1.70158;var p=0;var a=1;if(t===0){return 0;}if((t/=0.5)===2){return 1;}if(!p){p=0.45;}if(a<1){a=1;s=p/4;}else{s=p/(2*Math.PI)*Math.asin(1/a);}if(t<1){return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p));}return a*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*(2*Math.PI)/p)*0.5+1;},easeInBack:function easeInBack(t){var s=1.70158;return t*t*((s+1)*t-s);},easeOutBack:function easeOutBack(t){var s=1.70158;return(t=t-1)*t*((s+1)*t+s)+1;},easeInOutBack:function easeInOutBack(t){var s=1.70158;if((t/=0.5)<1){return 0.5*(t*t*(((s*=1.525)+1)*t-s));}return 0.5*((t-=2)*t*(((s*=1.525)+1)*t+s)+2);},easeInBounce:function easeInBounce(t){return 1-effects.easeOutBounce(1-t);},easeOutBounce:function easeOutBounce(t){if(t<1/2.75){return 7.5625*t*t;}if(t<2/2.75){return 7.5625*(t-=1.5/2.75)*t+0.75;}if(t<2.5/2.75){return 7.5625*(t-=2.25/2.75)*t+0.9375;}return 7.5625*(t-=2.625/2.75)*t+0.984375;},easeInOutBounce:function easeInOutBounce(t){if(t<0.5){return effects.easeInBounce(t*2)*0.5;}return effects.easeOutBounce(t*2-1)*0.5+0.5;}};module.exports={effects:effects};// DEPRECATIONS
/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.easingEffects=effects;},{"42":42}],44:[function(require,module,exports){'use strict';var helpers=require(42);/**
 * @alias Chart.helpers.options
 * @namespace
 */module.exports={/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */toLineHeight:function toLineHeight(value,size){var matches=(''+value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!matches||matches[1]==='normal'){return size*1.2;}value=+matches[2];switch(matches[3]){case'px':return value;case'%':value/=100;break;default:break;}return size*value;},/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */toPadding:function toPadding(value){var t,r,b,l;if(helpers.isObject(value)){t=+value.top||0;r=+value.right||0;b=+value.bottom||0;l=+value.left||0;}else{t=r=b=l=+value||0;}return{top:t,right:r,bottom:b,left:l,height:t+b,width:l+r};},/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */resolve:function resolve(inputs,context,index){var i,ilen,value;for(i=0,ilen=inputs.length;i<ilen;++i){value=inputs[i];if(value===undefined){continue;}if(context!==undefined&&typeof value==='function'){value=value(context);}if(index!==undefined&&helpers.isArray(value)){value=value[index];}if(value!==undefined){return value;}}}};},{"42":42}],45:[function(require,module,exports){'use strict';module.exports=require(42);module.exports.easing=require(43);module.exports.canvas=require(41);module.exports.options=require(44);},{"41":41,"42":42,"43":43,"44":44}],46:[function(require,module,exports){/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */module.exports={acquireContext:function acquireContext(item){if(item&&item.canvas){// Support for any object associated to a canvas (including a context2d)
item=item.canvas;}return item&&item.getContext('2d')||null;}};},{}],47:[function(require,module,exports){/**
 * Chart.Platform implementation for targeting a web browser
 */'use strict';var helpers=require(45);var EXPANDO_KEY='$chartjs';var CSS_PREFIX='chartjs-';var CSS_RENDER_MONITOR=CSS_PREFIX+'render-monitor';var CSS_RENDER_ANIMATION=CSS_PREFIX+'render-animation';var ANIMATION_START_EVENTS=['animationstart','webkitAnimationStart'];/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */var EVENT_TYPES={touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup',pointerenter:'mouseenter',pointerdown:'mousedown',pointermove:'mousemove',pointerup:'mouseup',pointerleave:'mouseout',pointerout:'mouseout'};/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */function readUsedSize(element,property){var value=helpers.getStyle(element,property);var matches=value&&value.match(/^(\d+)(\.\d+)?px$/);return matches?Number(matches[1]):undefined;}/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */function initCanvas(canvas,config){var style=canvas.style;// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
// returns null or '' if no explicit value has been set to the canvas attribute.
var renderHeight=canvas.getAttribute('height');var renderWidth=canvas.getAttribute('width');// Chart.js modifies some canvas values that we want to restore on destroy
canvas[EXPANDO_KEY]={initial:{height:renderHeight,width:renderWidth,style:{display:style.display,height:style.height,width:style.width}}};// Force canvas to display as block to avoid extra space caused by inline
// elements, which would interfere with the responsive resize process.
// https://github.com/chartjs/Chart.js/issues/2538
style.display=style.display||'block';if(renderWidth===null||renderWidth===''){var displayWidth=readUsedSize(canvas,'width');if(displayWidth!==undefined){canvas.width=displayWidth;}}if(renderHeight===null||renderHeight===''){if(canvas.style.height===''){// If no explicit render height and style height, let's apply the aspect ratio,
// which one can be specified by the user but also by charts as default option
// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
canvas.height=canvas.width/(config.options.aspectRatio||2);}else{var displayHeight=readUsedSize(canvas,'height');if(displayWidth!==undefined){canvas.height=displayHeight;}}}return canvas;}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */var supportsEventListenerOptions=function(){var supports=false;try{var options=Object.defineProperty({},'passive',{get:function get(){supports=true;}});window.addEventListener('e',null,options);}catch(e){// continue regardless of error
}return supports;}();// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions=supportsEventListenerOptions?{passive:true}:false;function _addEventListener(node,type,listener){node.addEventListener(type,listener,eventListenerOptions);}function _removeEventListener(node,type,listener){node.removeEventListener(type,listener,eventListenerOptions);}function createEvent(type,chart,x,y,nativeEvent){return{type:type,chart:chart,"native":nativeEvent||null,x:x!==undefined?x:null,y:y!==undefined?y:null};}function fromNativeEvent(event,chart){var type=EVENT_TYPES[event.type]||event.type;var pos=helpers.getRelativePosition(event,chart);return createEvent(type,chart,pos.x,pos.y,event);}function throttled(fn,thisArg){var ticking=false;var args=[];return function(){args=Array.prototype.slice.call(arguments);thisArg=thisArg||this;if(!ticking){ticking=true;helpers.requestAnimFrame.call(window,function(){ticking=false;fn.apply(thisArg,args);});}};}// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler){var resizer=document.createElement('div');var cls=CSS_PREFIX+'size-monitor';var maxSize=1000000;var style='position:absolute;'+'left:0;'+'top:0;'+'right:0;'+'bottom:0;'+'overflow:hidden;'+'pointer-events:none;'+'visibility:hidden;'+'z-index:-1;';resizer.style.cssText=style;resizer.className=cls;resizer.innerHTML='<div class="'+cls+'-expand" style="'+style+'">'+'<div style="'+'position:absolute;'+'width:'+maxSize+'px;'+'height:'+maxSize+'px;'+'left:0;'+'top:0">'+'</div>'+'</div>'+'<div class="'+cls+'-shrink" style="'+style+'">'+'<div style="'+'position:absolute;'+'width:200%;'+'height:200%;'+'left:0; '+'top:0">'+'</div>'+'</div>';var expand=resizer.childNodes[0];var shrink=resizer.childNodes[1];resizer._reset=function(){expand.scrollLeft=maxSize;expand.scrollTop=maxSize;shrink.scrollLeft=maxSize;shrink.scrollTop=maxSize;};var onScroll=function onScroll(){resizer._reset();handler();};_addEventListener(expand,'scroll',onScroll.bind(expand,'expand'));_addEventListener(shrink,'scroll',onScroll.bind(shrink,'shrink'));return resizer;}// https://davidwalsh.name/detect-node-insertion
function watchForRender(node,handler){var expando=node[EXPANDO_KEY]||(node[EXPANDO_KEY]={});var proxy=expando.renderProxy=function(e){if(e.animationName===CSS_RENDER_ANIMATION){handler();}};helpers.each(ANIMATION_START_EVENTS,function(type){_addEventListener(node,type,proxy);});// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
// is removed then added back immediately (same animation frame?). Accessing the
// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
// https://github.com/chartjs/Chart.js/issues/4737
expando.reflow=!!node.offsetParent;node.classList.add(CSS_RENDER_MONITOR);}function unwatchForRender(node){var expando=node[EXPANDO_KEY]||{};var proxy=expando.renderProxy;if(proxy){helpers.each(ANIMATION_START_EVENTS,function(type){_removeEventListener(node,type,proxy);});delete expando.renderProxy;}node.classList.remove(CSS_RENDER_MONITOR);}function addResizeListener(node,listener,chart){var expando=node[EXPANDO_KEY]||(node[EXPANDO_KEY]={});// Let's keep track of this added resizer and thus avoid DOM query when removing it.
var resizer=expando.resizer=createResizer(throttled(function(){if(expando.resizer){return listener(createEvent('resize',chart));}}));// The resizer needs to be attached to the node parent, so we first need to be
// sure that `node` is attached to the DOM before injecting the resizer element.
watchForRender(node,function(){if(expando.resizer){var container=node.parentNode;if(container&&container!==resizer.parentNode){container.insertBefore(resizer,container.firstChild);}// The container size might have changed, let's reset the resizer state.
resizer._reset();}});}function removeResizeListener(node){var expando=node[EXPANDO_KEY]||{};var resizer=expando.resizer;delete expando.resizer;unwatchForRender(node);if(resizer&&resizer.parentNode){resizer.parentNode.removeChild(resizer);}}function injectCSS(platform,css){// http://stackoverflow.com/q/3922139
var style=platform._style||document.createElement('style');if(!platform._style){platform._style=style;css='/* Chart.js */\n'+css;style.setAttribute('type','text/css');document.getElementsByTagName('head')[0].appendChild(style);}style.appendChild(document.createTextNode(css));}module.exports={/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */_enabled:typeof window!=='undefined'&&typeof document!=='undefined',initialize:function initialize(){var keyframes='from{opacity:0.99}to{opacity:1}';injectCSS(this,// DOM rendering detection
// https://davidwalsh.name/detect-node-insertion
'@-webkit-keyframes '+CSS_RENDER_ANIMATION+'{'+keyframes+'}'+'@keyframes '+CSS_RENDER_ANIMATION+'{'+keyframes+'}'+'.'+CSS_RENDER_MONITOR+'{'+'-webkit-animation:'+CSS_RENDER_ANIMATION+' 0.001s;'+'animation:'+CSS_RENDER_ANIMATION+' 0.001s;'+'}');},acquireContext:function acquireContext(item,config){if(typeof item==='string'){item=document.getElementById(item);}else if(item.length){// Support for array based queries (such as jQuery)
item=item[0];}if(item&&item.canvas){// Support for any object associated to a canvas (including a context2d)
item=item.canvas;}// To prevent canvas fingerprinting, some add-ons undefine the getContext
// method, for example: https://github.com/kkapsner/CanvasBlocker
// https://github.com/chartjs/Chart.js/issues/2807
var context=item&&item.getContext&&item.getContext('2d');// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
// inside an iframe or when running in a protected environment. We could guess the
// types from their toString() value but let's keep things flexible and assume it's
// a sufficient condition if the item has a context2D which has item as `canvas`.
// https://github.com/chartjs/Chart.js/issues/3887
// https://github.com/chartjs/Chart.js/issues/4102
// https://github.com/chartjs/Chart.js/issues/4152
if(context&&context.canvas===item){initCanvas(item,config);return context;}return null;},releaseContext:function releaseContext(context){var canvas=context.canvas;if(!canvas[EXPANDO_KEY]){return;}var initial=canvas[EXPANDO_KEY].initial;['height','width'].forEach(function(prop){var value=initial[prop];if(helpers.isNullOrUndef(value)){canvas.removeAttribute(prop);}else{canvas.setAttribute(prop,value);}});helpers.each(initial.style||{},function(value,key){canvas.style[key]=value;});// The canvas render size might have been changed (and thus the state stack discarded),
// we can't use save() and restore() to restore the initial state. So make sure that at
// least the canvas context is reset to the default state by setting the canvas width.
// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
canvas.width=canvas.width;delete canvas[EXPANDO_KEY];},addEventListener:function addEventListener(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){// Note: the resize event is not supported on all browsers.
addResizeListener(canvas,listener,chart);return;}var expando=listener[EXPANDO_KEY]||(listener[EXPANDO_KEY]={});var proxies=expando.proxies||(expando.proxies={});var proxy=proxies[chart.id+'_'+type]=function(event){listener(fromNativeEvent(event,chart));};_addEventListener(canvas,type,proxy);},removeEventListener:function removeEventListener(chart,type,listener){var canvas=chart.canvas;if(type==='resize'){// Note: the resize event is not supported on all browsers.
removeResizeListener(canvas,listener);return;}var expando=listener[EXPANDO_KEY]||{};var proxies=expando.proxies||{};var proxy=proxies[chart.id+'_'+type];if(!proxy){return;}_removeEventListener(canvas,type,proxy);}};// DEPRECATIONS
/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.addEvent=_addEventListener;/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */helpers.removeEvent=_removeEventListener;},{"45":45}],48:[function(require,module,exports){'use strict';var helpers=require(45);var basic=require(46);var dom=require(47);// @TODO Make possible to select another platform at build time.
var implementation=dom._enabled?dom:basic;/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */module.exports=helpers.extend({/**
	 * @since 2.7.0
	 */initialize:function initialize(){},/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */acquireContext:function acquireContext(){},/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */releaseContext:function releaseContext(){},/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */addEventListener:function addEventListener(){},/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */removeEventListener:function removeEventListener(){}},implementation);/**
 * @interface IPlatform
 * Allows abstracting platform dependencies away from the chart
 * @borrows Chart.platform.acquireContext as acquireContext
 * @borrows Chart.platform.releaseContext as releaseContext
 * @borrows Chart.platform.addEventListener as addEventListener
 * @borrows Chart.platform.removeEventListener as removeEventListener
 */ /**
 * @interface IEvent
 * @prop {String} type - The event type name, possible values are:
 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
 */},{"45":45,"46":46,"47":47}],49:[function(require,module,exports){/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */'use strict';var defaults=require(25);var elements=require(40);var helpers=require(45);defaults._set('global',{plugins:{filler:{propagate:true}}});module.exports=function(){var mappers={dataset:function dataset(source){var index=source.fill;var chart=source.chart;var meta=chart.getDatasetMeta(index);var visible=meta&&chart.isDatasetVisible(index);var points=visible&&meta.dataset._children||[];var length=points.length||0;return!length?null:function(point,i){return i<length&&points[i]._view||null;};},boundary:function boundary(source){var boundary=source.boundary;var x=boundary?boundary.x:null;var y=boundary?boundary.y:null;return function(point){return{x:x===null?point.x:x,y:y===null?point.y:y};};}};// @todo if (fill[0] === '#')
function decodeFill(el,index,count){var model=el._model||{};var fill=model.fill;var target;if(fill===undefined){fill=!!model.backgroundColor;}if(fill===false||fill===null){return false;}if(fill===true){return'origin';}target=parseFloat(fill,10);if(isFinite(target)&&Math.floor(target)===target){if(fill[0]==='-'||fill[0]==='+'){target=index+target;}if(target===index||target<0||target>=count){return false;}return target;}switch(fill){// compatibility
case'bottom':return'start';case'top':return'end';case'zero':return'origin';// supported boundaries
case'origin':case'start':case'end':return fill;// invalid fill values
default:return false;}}function computeBoundary(source){var model=source.el._model||{};var scale=source.el._scale||{};var fill=source.fill;var target=null;var horizontal;if(isFinite(fill)){return null;}// Backward compatibility: until v3, we still need to support boundary values set on
// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
// controllers might still use it (e.g. the Smith chart).
if(fill==='start'){target=model.scaleBottom===undefined?scale.bottom:model.scaleBottom;}else if(fill==='end'){target=model.scaleTop===undefined?scale.top:model.scaleTop;}else if(model.scaleZero!==undefined){target=model.scaleZero;}else if(scale.getBasePosition){target=scale.getBasePosition();}else if(scale.getBasePixel){target=scale.getBasePixel();}if(target!==undefined&&target!==null){if(target.x!==undefined&&target.y!==undefined){return target;}if(typeof target==='number'&&isFinite(target)){horizontal=scale.isHorizontal();return{x:horizontal?target:null,y:horizontal?null:target};}}return null;}function resolveTarget(sources,index,propagate){var source=sources[index];var fill=source.fill;var visited=[index];var target;if(!propagate){return fill;}while(fill!==false&&visited.indexOf(fill)===-1){if(!isFinite(fill)){return fill;}target=sources[fill];if(!target){return false;}if(target.visible){return fill;}visited.push(fill);fill=target.fill;}return false;}function createMapper(source){var fill=source.fill;var type='dataset';if(fill===false){return null;}if(!isFinite(fill)){type='boundary';}return mappers[type](source);}function isDrawable(point){return point&&!point.skip;}function drawArea(ctx,curve0,curve1,len0,len1){var i;if(!len0||!len1){return;}// building first area curve (normal)
ctx.moveTo(curve0[0].x,curve0[0].y);for(i=1;i<len0;++i){helpers.canvas.lineTo(ctx,curve0[i-1],curve0[i]);}// joining the two area curves
ctx.lineTo(curve1[len1-1].x,curve1[len1-1].y);// building opposite area curve (reverse)
for(i=len1-1;i>0;--i){helpers.canvas.lineTo(ctx,curve1[i],curve1[i-1],true);}}function doFill(ctx,points,mapper,view,color,loop){var count=points.length;var span=view.spanGaps;var curve0=[];var curve1=[];var len0=0;var len1=0;var i,ilen,index,p0,p1,d0,d1;ctx.beginPath();for(i=0,ilen=count+!!loop;i<ilen;++i){index=i%count;p0=points[index]._view;p1=mapper(p0,index,view);d0=isDrawable(p0);d1=isDrawable(p1);if(d0&&d1){len0=curve0.push(p0);len1=curve1.push(p1);}else if(len0&&len1){if(!span){drawArea(ctx,curve0,curve1,len0,len1);len0=len1=0;curve0=[];curve1=[];}else{if(d0){curve0.push(p0);}if(d1){curve1.push(p1);}}}}drawArea(ctx,curve0,curve1,len0,len1);ctx.closePath();ctx.fillStyle=color;ctx.fill();}return{id:'filler',afterDatasetsUpdate:function afterDatasetsUpdate(chart,options){var count=(chart.data.datasets||[]).length;var propagate=options.propagate;var sources=[];var meta,i,el,source;for(i=0;i<count;++i){meta=chart.getDatasetMeta(i);el=meta.dataset;source=null;if(el&&el._model&&el instanceof elements.Line){source={visible:chart.isDatasetVisible(i),fill:decodeFill(el,i,count),chart:chart,el:el};}meta.$filler=source;sources.push(source);}for(i=0;i<count;++i){source=sources[i];if(!source){continue;}source.fill=resolveTarget(sources,i,propagate);source.boundary=computeBoundary(source);source.mapper=createMapper(source);}},beforeDatasetDraw:function beforeDatasetDraw(chart,args){var meta=args.meta.$filler;if(!meta){return;}var ctx=chart.ctx;var el=meta.el;var view=el._view;var points=el._children||[];var mapper=meta.mapper;var color=view.backgroundColor||defaults.global.defaultColor;if(mapper&&color&&points.length){helpers.canvas.clipArea(ctx,chart.chartArea);doFill(ctx,points,mapper,view,color,el._loop);helpers.canvas.unclipArea(ctx);}}};};},{"25":25,"40":40,"45":45}],50:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{legend:{display:true,position:'top',fullWidth:true,reverse:false,weight:1000,// a callback that will handle
onClick:function onClick(e,legendItem){var index=legendItem.datasetIndex;var ci=this.chart;var meta=ci.getDatasetMeta(index);// See controller.isDatasetVisible comment
meta.hidden=meta.hidden===null?!ci.data.datasets[index].hidden:null;// We hid a dataset ... rerender the chart
ci.update();},onHover:null,labels:{boxWidth:40,padding:10,// Generates labels shown in the legend
// Valid properties to return:
// text : text to display
// fillStyle : fill of coloured box
// strokeStyle: stroke of coloured box
// hidden : if this legend item refers to a hidden item
// lineCap : cap style for line
// lineDash
// lineDashOffset :
// lineJoin :
// lineWidth :
generateLabels:function generateLabels(chart){var data=chart.data;return helpers.isArray(data.datasets)?data.datasets.map(function(dataset,i){return{text:dataset.label,fillStyle:!helpers.isArray(dataset.backgroundColor)?dataset.backgroundColor:dataset.backgroundColor[0],hidden:!chart.isDatasetVisible(i),lineCap:dataset.borderCapStyle,lineDash:dataset.borderDash,lineDashOffset:dataset.borderDashOffset,lineJoin:dataset.borderJoinStyle,lineWidth:dataset.borderWidth,strokeStyle:dataset.borderColor,pointStyle:dataset.pointStyle,// Below is extra data used for toggling the datasets
datasetIndex:i};},this):[];}}},legendCallback:function legendCallback(chart){var text=[];text.push('<ul class="'+chart.id+'-legend">');for(var i=0;i<chart.data.datasets.length;i++){text.push('<li><span style="background-color:'+chart.data.datasets[i].backgroundColor+'"></span>');if(chart.data.datasets[i].label){text.push(chart.data.datasets[i].label);}text.push('</li>');}text.push('</ul>');return text.join('');}});module.exports=function(Chart){var layout=Chart.layoutService;var noop=helpers.noop;/**
	 * Helper function to get the box width based on the usePointStyle option
	 * @param labelopts {Object} the label options on the legend
	 * @param fontSize {Number} the label font size
	 * @return {Number} width of the color box area
	 */function getBoxWidth(labelOpts,fontSize){return labelOpts.usePointStyle?fontSize*Math.SQRT2:labelOpts.boxWidth;}Chart.Legend=Element.extend({initialize:function initialize(config){helpers.extend(this,config);// Contains hit boxes for each dataset (in dataset order)
this.legendHitBoxes=[];// Are we in doughnut mode which has a different data type
this.doughnutMode=false;},// These methods are ordered by lifecycle. Utilities then follow.
// Any function defined here is inherited by all legend types.
// Any function can be extended by the legend type
beforeUpdate:noop,update:function update(maxWidth,maxHeight,margins){var me=this;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Labels
me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:noop,//
beforeSetDimensions:noop,setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;// Reset minSize
me.minSize={width:0,height:0};},afterSetDimensions:noop,//
beforeBuildLabels:noop,buildLabels:function buildLabels(){var me=this;var labelOpts=me.options.labels||{};var legendItems=helpers.callback(labelOpts.generateLabels,[me.chart],me)||[];if(labelOpts.filter){legendItems=legendItems.filter(function(item){return labelOpts.filter(item,me.chart.data);});}if(me.options.reverse){legendItems.reverse();}me.legendItems=legendItems;},afterBuildLabels:noop,//
beforeFit:noop,fit:function fit(){var me=this;var opts=me.options;var labelOpts=opts.labels;var display=opts.display;var ctx=me.ctx;var globalDefault=defaults.global;var valueOrDefault=helpers.valueOrDefault;var fontSize=valueOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize);var fontStyle=valueOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle);var fontFamily=valueOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily);var labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);// Reset hit boxes
var hitboxes=me.legendHitBoxes=[];var minSize=me.minSize;var isHorizontal=me.isHorizontal();if(isHorizontal){minSize.width=me.maxWidth;// fill all the width
minSize.height=display?10:0;}else{minSize.width=display?10:0;minSize.height=me.maxHeight;// fill all the height
}// Increase sizes here
if(display){ctx.font=labelFont;if(isHorizontal){// Labels
// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
var lineWidths=me.lineWidths=[0];var totalHeight=me.legendItems.length?fontSize+labelOpts.padding:0;ctx.textAlign='left';ctx.textBaseline='top';helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var width=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;if(lineWidths[lineWidths.length-1]+width+labelOpts.padding>=me.width){totalHeight+=fontSize+labelOpts.padding;lineWidths[lineWidths.length]=me.left;}// Store the hitbox width and height here. Final position will be updated in `draw`
hitboxes[i]={left:0,top:0,width:width,height:fontSize};lineWidths[lineWidths.length-1]+=width+labelOpts.padding;});minSize.height+=totalHeight;}else{var vPadding=labelOpts.padding;var columnWidths=me.columnWidths=[];var totalWidth=labelOpts.padding;var currentColWidth=0;var currentColHeight=0;var itemHeight=fontSize+vPadding;helpers.each(me.legendItems,function(legendItem,i){var boxWidth=getBoxWidth(labelOpts,fontSize);var itemWidth=boxWidth+fontSize/2+ctx.measureText(legendItem.text).width;// If too tall, go to new column
if(currentColHeight+itemHeight>minSize.height){totalWidth+=currentColWidth+labelOpts.padding;columnWidths.push(currentColWidth);// previous column width
currentColWidth=0;currentColHeight=0;}// Get max width
currentColWidth=Math.max(currentColWidth,itemWidth);currentColHeight+=itemHeight;// Store the hitbox width and height here. Final position will be updated in `draw`
hitboxes[i]={left:0,top:0,width:itemWidth,height:fontSize};});totalWidth+=currentColWidth;columnWidths.push(currentColWidth);minSize.width+=totalWidth;}}me.width=minSize.width;me.height=minSize.height;},afterFit:noop,// Shared Methods
isHorizontal:function isHorizontal(){return this.options.position==='top'||this.options.position==='bottom';},// Actually draw the legend on the canvas
draw:function draw(){var me=this;var opts=me.options;var labelOpts=opts.labels;var globalDefault=defaults.global;var lineDefault=globalDefault.elements.line;var legendWidth=me.width;var lineWidths=me.lineWidths;if(opts.display){var ctx=me.ctx;var valueOrDefault=helpers.valueOrDefault;var fontColor=valueOrDefault(labelOpts.fontColor,globalDefault.defaultFontColor);var fontSize=valueOrDefault(labelOpts.fontSize,globalDefault.defaultFontSize);var fontStyle=valueOrDefault(labelOpts.fontStyle,globalDefault.defaultFontStyle);var fontFamily=valueOrDefault(labelOpts.fontFamily,globalDefault.defaultFontFamily);var labelFont=helpers.fontString(fontSize,fontStyle,fontFamily);var cursor;// Canvas setup
ctx.textAlign='left';ctx.textBaseline='middle';ctx.lineWidth=0.5;ctx.strokeStyle=fontColor;// for strikethrough effect
ctx.fillStyle=fontColor;// render in correct colour
ctx.font=labelFont;var boxWidth=getBoxWidth(labelOpts,fontSize);var hitboxes=me.legendHitBoxes;// current position
var drawLegendBox=function drawLegendBox(x,y,legendItem){if(isNaN(boxWidth)||boxWidth<=0){return;}// Set the ctx for the box
ctx.save();ctx.fillStyle=valueOrDefault(legendItem.fillStyle,globalDefault.defaultColor);ctx.lineCap=valueOrDefault(legendItem.lineCap,lineDefault.borderCapStyle);ctx.lineDashOffset=valueOrDefault(legendItem.lineDashOffset,lineDefault.borderDashOffset);ctx.lineJoin=valueOrDefault(legendItem.lineJoin,lineDefault.borderJoinStyle);ctx.lineWidth=valueOrDefault(legendItem.lineWidth,lineDefault.borderWidth);ctx.strokeStyle=valueOrDefault(legendItem.strokeStyle,globalDefault.defaultColor);var isLineWidthZero=valueOrDefault(legendItem.lineWidth,lineDefault.borderWidth)===0;if(ctx.setLineDash){// IE 9 and 10 do not support line dash
ctx.setLineDash(valueOrDefault(legendItem.lineDash,lineDefault.borderDash));}if(opts.labels&&opts.labels.usePointStyle){// Recalculate x and y for drawPoint() because its expecting
// x and y to be center of figure (instead of top left)
var radius=fontSize*Math.SQRT2/2;var offSet=radius/Math.SQRT2;var centerX=x+offSet;var centerY=y+offSet;// Draw pointStyle as legend symbol
helpers.canvas.drawPoint(ctx,legendItem.pointStyle,radius,centerX,centerY);}else{// Draw box as legend symbol
if(!isLineWidthZero){ctx.strokeRect(x,y,boxWidth,fontSize);}ctx.fillRect(x,y,boxWidth,fontSize);}ctx.restore();};var fillText=function fillText(x,y,legendItem,textWidth){var halfFontSize=fontSize/2;var xLeft=boxWidth+halfFontSize+x;var yMiddle=y+halfFontSize;ctx.fillText(legendItem.text,xLeft,yMiddle);if(legendItem.hidden){// Strikethrough the text if hidden
ctx.beginPath();ctx.lineWidth=2;ctx.moveTo(xLeft,yMiddle);ctx.lineTo(xLeft+textWidth,yMiddle);ctx.stroke();}};// Horizontal
var isHorizontal=me.isHorizontal();if(isHorizontal){cursor={x:me.left+(legendWidth-lineWidths[0])/2,y:me.top+labelOpts.padding,line:0};}else{cursor={x:me.left+labelOpts.padding,y:me.top+labelOpts.padding,line:0};}var itemHeight=fontSize+labelOpts.padding;helpers.each(me.legendItems,function(legendItem,i){var textWidth=ctx.measureText(legendItem.text).width;var width=boxWidth+fontSize/2+textWidth;var x=cursor.x;var y=cursor.y;if(isHorizontal){if(x+width>=legendWidth){y=cursor.y+=itemHeight;cursor.line++;x=cursor.x=me.left+(legendWidth-lineWidths[cursor.line])/2;}}else if(y+itemHeight>me.bottom){x=cursor.x=x+me.columnWidths[cursor.line]+labelOpts.padding;y=cursor.y=me.top+labelOpts.padding;cursor.line++;}drawLegendBox(x,y,legendItem);hitboxes[i].left=x;hitboxes[i].top=y;// Fill the actual label
fillText(x,y,legendItem,textWidth);if(isHorizontal){cursor.x+=width+labelOpts.padding;}else{cursor.y+=itemHeight;}});}},/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @return {Boolean} true if a change occured
		 */handleEvent:function handleEvent(e){var me=this;var opts=me.options;var type=e.type==='mouseup'?'click':e.type;var changed=false;if(type==='mousemove'){if(!opts.onHover){return;}}else if(type==='click'){if(!opts.onClick){return;}}else{return;}// Chart event already has relative position in it
var x=e.x;var y=e.y;if(x>=me.left&&x<=me.right&&y>=me.top&&y<=me.bottom){// See if we are touching one of the dataset boxes
var lh=me.legendHitBoxes;for(var i=0;i<lh.length;++i){var hitBox=lh[i];if(x>=hitBox.left&&x<=hitBox.left+hitBox.width&&y>=hitBox.top&&y<=hitBox.top+hitBox.height){// Touching an element
if(type==='click'){// use e.native for backwards compatibility
opts.onClick.call(me,e["native"],me.legendItems[i]);changed=true;break;}else if(type==='mousemove'){// use e.native for backwards compatibility
opts.onHover.call(me,e["native"],me.legendItems[i]);changed=true;break;}}}}return changed;}});function createNewLegendAndAttach(chart,legendOpts){var legend=new Chart.Legend({ctx:chart.ctx,options:legendOpts,chart:chart});layout.configure(chart,legend,legendOpts);layout.addBox(chart,legend);chart.legend=legend;}return{id:'legend',beforeInit:function beforeInit(chart){var legendOpts=chart.options.legend;if(legendOpts){createNewLegendAndAttach(chart,legendOpts);}},beforeUpdate:function beforeUpdate(chart){var legendOpts=chart.options.legend;var legend=chart.legend;if(legendOpts){helpers.mergeIf(legendOpts,defaults.global.legend);if(legend){layout.configure(chart,legend,legendOpts);legend.options=legendOpts;}else{createNewLegendAndAttach(chart,legendOpts);}}else if(legend){layout.removeBox(chart,legend);delete chart.legend;}},afterEvent:function afterEvent(chart,e){var legend=chart.legend;if(legend){legend.handleEvent(e);}}};};},{"25":25,"26":26,"45":45}],51:[function(require,module,exports){'use strict';var defaults=require(25);var Element=require(26);var helpers=require(45);defaults._set('global',{title:{display:false,fontStyle:'bold',fullWidth:true,lineHeight:1.2,padding:10,position:'top',text:'',weight:2000// by default greater than legend (1000) to be above
}});module.exports=function(Chart){var layout=Chart.layoutService;var noop=helpers.noop;Chart.Title=Element.extend({initialize:function initialize(config){var me=this;helpers.extend(me,config);// Contains hit boxes for each dataset (in dataset order)
me.legendHitBoxes=[];},// These methods are ordered by lifecycle. Utilities then follow.
beforeUpdate:noop,update:function update(maxWidth,maxHeight,margins){var me=this;// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
me.beforeUpdate();// Absorb the master measurements
me.maxWidth=maxWidth;me.maxHeight=maxHeight;me.margins=margins;// Dimensions
me.beforeSetDimensions();me.setDimensions();me.afterSetDimensions();// Labels
me.beforeBuildLabels();me.buildLabels();me.afterBuildLabels();// Fit
me.beforeFit();me.fit();me.afterFit();//
me.afterUpdate();return me.minSize;},afterUpdate:noop,//
beforeSetDimensions:noop,setDimensions:function setDimensions(){var me=this;// Set the unconstrained dimension before label rotation
if(me.isHorizontal()){// Reset position before calculating rotation
me.width=me.maxWidth;me.left=0;me.right=me.width;}else{me.height=me.maxHeight;// Reset position before calculating rotation
me.top=0;me.bottom=me.height;}// Reset padding
me.paddingLeft=0;me.paddingTop=0;me.paddingRight=0;me.paddingBottom=0;// Reset minSize
me.minSize={width:0,height:0};},afterSetDimensions:noop,//
beforeBuildLabels:noop,buildLabels:noop,afterBuildLabels:noop,//
beforeFit:noop,fit:function fit(){var me=this;var valueOrDefault=helpers.valueOrDefault;var opts=me.options;var display=opts.display;var fontSize=valueOrDefault(opts.fontSize,defaults.global.defaultFontSize);var minSize=me.minSize;var lineCount=helpers.isArray(opts.text)?opts.text.length:1;var lineHeight=helpers.options.toLineHeight(opts.lineHeight,fontSize);var textSize=display?lineCount*lineHeight+opts.padding*2:0;if(me.isHorizontal()){minSize.width=me.maxWidth;// fill all the width
minSize.height=textSize;}else{minSize.width=textSize;minSize.height=me.maxHeight;// fill all the height
}me.width=minSize.width;me.height=minSize.height;},afterFit:noop,// Shared Methods
isHorizontal:function isHorizontal(){var pos=this.options.position;return pos==='top'||pos==='bottom';},// Actually draw the title block on the canvas
draw:function draw(){var me=this;var ctx=me.ctx;var valueOrDefault=helpers.valueOrDefault;var opts=me.options;var globalDefaults=defaults.global;if(opts.display){var fontSize=valueOrDefault(opts.fontSize,globalDefaults.defaultFontSize);var fontStyle=valueOrDefault(opts.fontStyle,globalDefaults.defaultFontStyle);var fontFamily=valueOrDefault(opts.fontFamily,globalDefaults.defaultFontFamily);var titleFont=helpers.fontString(fontSize,fontStyle,fontFamily);var lineHeight=helpers.options.toLineHeight(opts.lineHeight,fontSize);var offset=lineHeight/2+opts.padding;var rotation=0;var top=me.top;var left=me.left;var bottom=me.bottom;var right=me.right;var maxWidth,titleX,titleY;ctx.fillStyle=valueOrDefault(opts.fontColor,globalDefaults.defaultFontColor);// render in correct colour
ctx.font=titleFont;// Horizontal
if(me.isHorizontal()){titleX=left+(right-left)/2;// midpoint of the width
titleY=top+offset;maxWidth=right-left;}else{titleX=opts.position==='left'?left+offset:right-offset;titleY=top+(bottom-top)/2;maxWidth=bottom-top;rotation=Math.PI*(opts.position==='left'?-0.5:0.5);}ctx.save();ctx.translate(titleX,titleY);ctx.rotate(rotation);ctx.textAlign='center';ctx.textBaseline='middle';var text=opts.text;if(helpers.isArray(text)){var y=0;for(var i=0;i<text.length;++i){ctx.fillText(text[i],0,y,maxWidth);y+=lineHeight;}}else{ctx.fillText(text,0,0,maxWidth);}ctx.restore();}}});function createNewTitleBlockAndAttach(chart,titleOpts){var title=new Chart.Title({ctx:chart.ctx,options:titleOpts,chart:chart});layout.configure(chart,title,titleOpts);layout.addBox(chart,title);chart.titleBlock=title;}return{id:'title',beforeInit:function beforeInit(chart){var titleOpts=chart.options.title;if(titleOpts){createNewTitleBlockAndAttach(chart,titleOpts);}},beforeUpdate:function beforeUpdate(chart){var titleOpts=chart.options.title;var titleBlock=chart.titleBlock;if(titleOpts){helpers.mergeIf(titleOpts,defaults.global.title);if(titleBlock){layout.configure(chart,titleBlock,titleOpts);titleBlock.options=titleOpts;}else{createNewTitleBlockAndAttach(chart,titleOpts);}}else if(titleBlock){Chart.layoutService.removeBox(chart,titleBlock);delete chart.titleBlock;}}};};},{"25":25,"26":26,"45":45}],52:[function(require,module,exports){'use strict';module.exports=function(Chart){// Default config for a category scale
var defaultConfig={position:'bottom'};var DatasetScale=Chart.Scale.extend({/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/getLabels:function getLabels(){var data=this.chart.data;return this.options.labels||(this.isHorizontal()?data.xLabels:data.yLabels)||data.labels;},determineDataLimits:function determineDataLimits(){var me=this;var labels=me.getLabels();me.minIndex=0;me.maxIndex=labels.length-1;var findIndex;if(me.options.ticks.min!==undefined){// user specified min value
findIndex=labels.indexOf(me.options.ticks.min);me.minIndex=findIndex!==-1?findIndex:me.minIndex;}if(me.options.ticks.max!==undefined){// user specified max value
findIndex=labels.indexOf(me.options.ticks.max);me.maxIndex=findIndex!==-1?findIndex:me.maxIndex;}me.min=labels[me.minIndex];me.max=labels[me.maxIndex];},buildTicks:function buildTicks(){var me=this;var labels=me.getLabels();// If we are viewing some subset of labels, slice the original array
me.ticks=me.minIndex===0&&me.maxIndex===labels.length-1?labels:labels.slice(me.minIndex,me.maxIndex+1);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){var me=this;var data=me.chart.data;var isHorizontal=me.isHorizontal();if(data.yLabels&&!isHorizontal){return me.getRightValue(data.datasets[datasetIndex].data[index]);}return me.ticks[index-me.minIndex];},// Used to get data value locations.  Value can either be an index or a numerical value
getPixelForValue:function getPixelForValue(value,index){var me=this;var offset=me.options.offset;// 1 is added because we need the length but we have the indexes
var offsetAmt=Math.max(me.maxIndex+1-me.minIndex-(offset?0:1),1);// If value is a data object, then index is the index in the data array,
// not the index of the scale. We need to change that.
var valueCategory;if(value!==undefined&&value!==null){valueCategory=me.isHorizontal()?value.x:value.y;}if(valueCategory!==undefined||value!==undefined&&isNaN(index)){var labels=me.getLabels();value=valueCategory||value;var idx=labels.indexOf(value);index=idx!==-1?idx:index;}if(me.isHorizontal()){var valueWidth=me.width/offsetAmt;var widthOffset=valueWidth*(index-me.minIndex);if(offset){widthOffset+=valueWidth/2;}return me.left+Math.round(widthOffset);}var valueHeight=me.height/offsetAmt;var heightOffset=valueHeight*(index-me.minIndex);if(offset){heightOffset+=valueHeight/2;}return me.top+Math.round(heightOffset);},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.ticks[index],index+this.minIndex,null);},getValueForPixel:function getValueForPixel(pixel){var me=this;var offset=me.options.offset;var value;var offsetAmt=Math.max(me._ticks.length-(offset?0:1),1);var horz=me.isHorizontal();var valueDimension=(horz?me.width:me.height)/offsetAmt;pixel-=horz?me.left:me.top;if(offset){pixel-=valueDimension/2;}if(pixel<=0){value=0;}else{value=Math.round(pixel/valueDimension);}return value+me.minIndex;},getBasePixel:function getBasePixel(){return this.bottom;}});Chart.scaleService.registerScaleType('category',DatasetScale,defaultConfig);};},{}],53:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var defaultConfig={position:'left',ticks:{callback:Ticks.formatters.linear}};var LinearScale=Chart.LinearScaleBase.extend({determineDataLimits:function determineDataLimits(){var me=this;var opts=me.options;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var isHorizontal=me.isHorizontal();var DEFAULT_MIN=0;var DEFAULT_MAX=1;function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}// First Calculate the range
me.min=null;me.max=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
opts.stacked===undefined&&meta.stack===undefined?datasetIndex:'',meta.stack].join('.');if(valuesPerStack[key]===undefined){valuesPerStack[key]={positiveValues:[],negativeValues:[]};}// Store these per type
var positiveValues=valuesPerStack[key].positiveValues;var negativeValues=valuesPerStack[key].negativeValues;if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}positiveValues[index]=positiveValues[index]||0;negativeValues[index]=negativeValues[index]||0;if(opts.relativePoints){positiveValues[index]=100;}else if(value<0){negativeValues[index]+=value;}else{positiveValues[index]+=value;}});}});helpers.each(valuesPerStack,function(valuesForType){var values=valuesForType.positiveValues.concat(valuesForType.negativeValues);var minVal=helpers.min(values);var maxVal=helpers.max(values);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}});}});}me.min=isFinite(me.min)&&!isNaN(me.min)?me.min:DEFAULT_MIN;me.max=isFinite(me.max)&&!isNaN(me.max)?me.max:DEFAULT_MAX;// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
this.handleTickRangeOptions();},getTickLimit:function getTickLimit(){var maxTicks;var me=this;var tickOpts=me.options.ticks;if(me.isHorizontal()){maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.width/50));}else{// The factor of 2 used to scale the font size has been experimentally determined.
var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,defaults.global.defaultFontSize);maxTicks=Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(me.height/(2*tickFontSize)));}return maxTicks;},// Called after the ticks are built. We need
handleDirectionalChanges:function handleDirectionalChanges(){if(!this.isHorizontal()){// We are in a vertical orientation. The top value is the highest. So reverse the array
this.ticks.reverse();}},getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},// Utils
getPixelForValue:function getPixelForValue(value){// This must be called after fit has been run so that
// this.left, this.top, this.right, and this.bottom have been defined
var me=this;var start=me.start;var rightValue=+me.getRightValue(value);var pixel;var range=me.end-start;if(me.isHorizontal()){pixel=me.left+me.width/range*(rightValue-start);return Math.round(pixel);}pixel=me.bottom-me.height/range*(rightValue-start);return Math.round(pixel);},getValueForPixel:function getValueForPixel(pixel){var me=this;var isHorizontal=me.isHorizontal();var innerDimension=isHorizontal?me.width:me.height;var offset=(isHorizontal?pixel-me.left:me.bottom-pixel)/innerDimension;return me.start+(me.end-me.start)*offset;},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.ticksAsNumbers[index]);}});Chart.scaleService.registerScaleType('linear',LinearScale,defaultConfig);};},{"25":25,"34":34,"45":45}],54:[function(require,module,exports){'use strict';var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var noop=helpers.noop;Chart.LinearScaleBase=Chart.Scale.extend({getRightValue:function getRightValue(value){if(typeof value==='string'){return+value;}return Chart.Scale.prototype.getRightValue.call(this,value);},handleTickRangeOptions:function handleTickRangeOptions(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
// do nothing since that would make the chart weird. If the user really wants a weird chart
// axis, they can manually override it
if(tickOpts.beginAtZero){var minSign=helpers.sign(me.min);var maxSign=helpers.sign(me.max);if(minSign<0&&maxSign<0){// move the top up to 0
me.max=0;}else if(minSign>0&&maxSign>0){// move the bottom down to 0
me.min=0;}}var setMin=tickOpts.min!==undefined||tickOpts.suggestedMin!==undefined;var setMax=tickOpts.max!==undefined||tickOpts.suggestedMax!==undefined;if(tickOpts.min!==undefined){me.min=tickOpts.min;}else if(tickOpts.suggestedMin!==undefined){if(me.min===null){me.min=tickOpts.suggestedMin;}else{me.min=Math.min(me.min,tickOpts.suggestedMin);}}if(tickOpts.max!==undefined){me.max=tickOpts.max;}else if(tickOpts.suggestedMax!==undefined){if(me.max===null){me.max=tickOpts.suggestedMax;}else{me.max=Math.max(me.max,tickOpts.suggestedMax);}}if(setMin!==setMax){// We set the min or the max but not both.
// So ensure that our range is good
// Inverted or 0 length range can happen when
// ticks.min is set, and no datasets are visible
if(me.min>=me.max){if(setMin){me.max=me.min+1;}else{me.min=me.max-1;}}}if(me.min===me.max){me.max++;if(!tickOpts.beginAtZero){me.min--;}}},getTickLimit:noop,handleDirectionalChanges:noop,buildTicks:function buildTicks(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// Figure out what the max number of ticks we can support it is based on the size of
// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
// the graph. Make sure we always have at least 2 ticks
var maxTicks=me.getTickLimit();maxTicks=Math.max(2,maxTicks);var numericGeneratorOptions={maxTicks:maxTicks,min:tickOpts.min,max:tickOpts.max,stepSize:helpers.valueOrDefault(tickOpts.fixedStepSize,tickOpts.stepSize)};var ticks=me.ticks=Ticks.generators.linear(numericGeneratorOptions,me);me.handleDirectionalChanges();// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}},convertTicksToLabels:function convertTicksToLabels(){var me=this;me.ticksAsNumbers=me.ticks.slice();me.zeroLineIndex=me.ticks.indexOf(0);Chart.Scale.prototype.convertTicksToLabels.call(me);}});};},{"34":34,"45":45}],55:[function(require,module,exports){'use strict';var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var defaultConfig={position:'left',// label settings
ticks:{callback:Ticks.formatters.logarithmic}};var LogarithmicScale=Chart.Scale.extend({determineDataLimits:function determineDataLimits(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var chart=me.chart;var data=chart.data;var datasets=data.datasets;var valueOrDefault=helpers.valueOrDefault;var isHorizontal=me.isHorizontal();function IDMatches(meta){return isHorizontal?meta.xAxisID===me.id:meta.yAxisID===me.id;}// Calculate Range
me.min=null;me.max=null;me.minNotZero=null;var hasStacks=opts.stacked;if(hasStacks===undefined){helpers.each(datasets,function(dataset,datasetIndex){if(hasStacks){return;}var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)&&meta.stack!==undefined){hasStacks=true;}});}if(opts.stacked||hasStacks){var valuesPerStack={};helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);var key=[meta.type,// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
opts.stacked===undefined&&meta.stack===undefined?datasetIndex:'',meta.stack].join('.');if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){if(valuesPerStack[key]===undefined){valuesPerStack[key]=[];}helpers.each(dataset.data,function(rawValue,index){var values=valuesPerStack[key];var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}values[index]=values[index]||0;if(opts.relativePoints){values[index]=100;}else{// Don't need to split positive and negative since the log scale can't handle a 0 crossing
values[index]+=value;}});}});helpers.each(valuesPerStack,function(valuesForType){var minVal=helpers.min(valuesForType);var maxVal=helpers.max(valuesForType);me.min=me.min===null?minVal:Math.min(me.min,minVal);me.max=me.max===null?maxVal:Math.max(me.max,maxVal);});}else{helpers.each(datasets,function(dataset,datasetIndex){var meta=chart.getDatasetMeta(datasetIndex);if(chart.isDatasetVisible(datasetIndex)&&IDMatches(meta)){helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}if(me.min===null){me.min=value;}else if(value<me.min){me.min=value;}if(me.max===null){me.max=value;}else if(value>me.max){me.max=value;}if(value!==0&&(me.minNotZero===null||value<me.minNotZero)){me.minNotZero=value;}});}});}me.min=valueOrDefault(tickOpts.min,me.min);me.max=valueOrDefault(tickOpts.max,me.max);if(me.min===me.max){if(me.min!==0&&me.min!==null){me.min=Math.pow(10,Math.floor(helpers.log10(me.min))-1);me.max=Math.pow(10,Math.floor(helpers.log10(me.max))+1);}else{me.min=1;me.max=10;}}},buildTicks:function buildTicks(){var me=this;var opts=me.options;var tickOpts=opts.ticks;var generationOptions={min:tickOpts.min,max:tickOpts.max};var ticks=me.ticks=Ticks.generators.logarithmic(generationOptions,me);if(!me.isHorizontal()){// We are in a vertical orientation. The top value is the highest. So reverse the array
ticks.reverse();}// At this point, we need to update our max and min given the tick values since we have expanded the
// range of the scale
me.max=helpers.max(ticks);me.min=helpers.min(ticks);if(tickOpts.reverse){ticks.reverse();me.start=me.max;me.end=me.min;}else{me.start=me.min;me.end=me.max;}},convertTicksToLabels:function convertTicksToLabels(){this.tickValues=this.ticks.slice();Chart.Scale.prototype.convertTicksToLabels.call(this);},// Get the correct tooltip label
getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},getPixelForTick:function getPixelForTick(index){return this.getPixelForValue(this.tickValues[index]);},getPixelForValue:function getPixelForValue(value){var me=this;var start=me.start;var newVal=+me.getRightValue(value);var opts=me.options;var tickOpts=opts.ticks;var innerDimension,pixel,range;if(me.isHorizontal()){range=helpers.log10(me.end)-helpers.log10(start);// todo: if start === 0
if(newVal===0){pixel=me.left;}else{innerDimension=me.width;pixel=me.left+innerDimension/range*(helpers.log10(newVal)-helpers.log10(start));}}else{// Bottom - top since pixels increase downward on a screen
innerDimension=me.height;if(start===0&&!tickOpts.reverse){range=helpers.log10(me.end)-helpers.log10(me.minNotZero);if(newVal===start){pixel=me.bottom;}else if(newVal===me.minNotZero){pixel=me.bottom-innerDimension*0.02;}else{pixel=me.bottom-innerDimension*0.02-innerDimension*0.98/range*(helpers.log10(newVal)-helpers.log10(me.minNotZero));}}else if(me.end===0&&tickOpts.reverse){range=helpers.log10(me.start)-helpers.log10(me.minNotZero);if(newVal===me.end){pixel=me.top;}else if(newVal===me.minNotZero){pixel=me.top+innerDimension*0.02;}else{pixel=me.top+innerDimension*0.02+innerDimension*0.98/range*(helpers.log10(newVal)-helpers.log10(me.minNotZero));}}else if(newVal===0){pixel=tickOpts.reverse?me.top:me.bottom;}else{range=helpers.log10(me.end)-helpers.log10(start);innerDimension=me.height;pixel=me.bottom-innerDimension/range*(helpers.log10(newVal)-helpers.log10(start));}}return pixel;},getValueForPixel:function getValueForPixel(pixel){var me=this;var range=helpers.log10(me.end)-helpers.log10(me.start);var value,innerDimension;if(me.isHorizontal()){innerDimension=me.width;value=me.start*Math.pow(10,(pixel-me.left)*range/innerDimension);}else{// todo: if start === 0
innerDimension=me.height;value=Math.pow(10,(me.bottom-pixel)*range/innerDimension)/me.start;}return value;}});Chart.scaleService.registerScaleType('logarithmic',LogarithmicScale,defaultConfig);};},{"34":34,"45":45}],56:[function(require,module,exports){'use strict';var defaults=require(25);var helpers=require(45);var Ticks=require(34);module.exports=function(Chart){var globalDefaults=defaults.global;var defaultConfig={display:true,// Boolean - Whether to animate scaling the chart from the centre
animate:true,position:'chartArea',angleLines:{display:true,color:'rgba(0, 0, 0, 0.1)',lineWidth:1},gridLines:{circular:false},// label settings
ticks:{// Boolean - Show a backdrop to the scale label
showLabelBackdrop:true,// String - The colour of the label backdrop
backdropColor:'rgba(255,255,255,0.75)',// Number - The backdrop padding above & below the label in pixels
backdropPaddingY:2,// Number - The backdrop padding to the side of the label in pixels
backdropPaddingX:2,callback:Ticks.formatters.linear},pointLabels:{// Boolean - if true, show point labels
display:true,// Number - Point label font size in pixels
fontSize:10,// Function - Used to convert point labels
callback:function callback(label){return label;}}};function getValueCount(scale){var opts=scale.options;return opts.angleLines.display||opts.pointLabels.display?scale.chart.data.labels.length:0;}function getPointLabelFontOptions(scale){var pointLabelOptions=scale.options.pointLabels;var fontSize=helpers.valueOrDefault(pointLabelOptions.fontSize,globalDefaults.defaultFontSize);var fontStyle=helpers.valueOrDefault(pointLabelOptions.fontStyle,globalDefaults.defaultFontStyle);var fontFamily=helpers.valueOrDefault(pointLabelOptions.fontFamily,globalDefaults.defaultFontFamily);var font=helpers.fontString(fontSize,fontStyle,fontFamily);return{size:fontSize,style:fontStyle,family:fontFamily,font:font};}function measureLabelSize(ctx,fontSize,label){if(helpers.isArray(label)){return{w:helpers.longestText(ctx,ctx.font,label),h:label.length*fontSize+(label.length-1)*1.5*fontSize};}return{w:ctx.measureText(label).width,h:fontSize};}function determineLimits(angle,pos,size,min,max){if(angle===min||angle===max){return{start:pos-size/2,end:pos+size/2};}else if(angle<min||angle>max){return{start:pos-size-5,end:pos};}return{start:pos,end:pos+size+5};}/**
	 * Helper function to fit a radial linear scale with point labels
	 */function fitWithPointLabels(scale){/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */var plFont=getPointLabelFontOptions(scale);// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);var furthestLimits={r:scale.width,l:0,t:scale.height,b:0};var furthestAngles={};var i,textSize,pointPosition;scale.ctx.font=plFont.font;scale._pointLabelSizes=[];var valueCount=getValueCount(scale);for(i=0;i<valueCount;i++){pointPosition=scale.getPointPosition(i,largestPossibleRadius);textSize=measureLabelSize(scale.ctx,plFont.size,scale.pointLabels[i]||'');scale._pointLabelSizes[i]=textSize;// Add quarter circle to make degree 0 mean top of circle
var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians)%360;var hLimits=determineLimits(angle,pointPosition.x,textSize.w,0,180);var vLimits=determineLimits(angle,pointPosition.y,textSize.h,90,270);if(hLimits.start<furthestLimits.l){furthestLimits.l=hLimits.start;furthestAngles.l=angleRadians;}if(hLimits.end>furthestLimits.r){furthestLimits.r=hLimits.end;furthestAngles.r=angleRadians;}if(vLimits.start<furthestLimits.t){furthestLimits.t=vLimits.start;furthestAngles.t=angleRadians;}if(vLimits.end>furthestLimits.b){furthestLimits.b=vLimits.end;furthestAngles.b=angleRadians;}}scale.setReductions(largestPossibleRadius,furthestLimits,furthestAngles);}/**
	 * Helper function to fit a radial linear scale with no point labels
	 */function _fit(scale){var largestPossibleRadius=Math.min(scale.height/2,scale.width/2);scale.drawingArea=Math.round(largestPossibleRadius);scale.setCenterPoint(0,0,0,0);}function getTextAlignForAngle(angle){if(angle===0||angle===180){return'center';}else if(angle<180){return'left';}return'right';}function fillText(ctx,text,position,fontSize){if(helpers.isArray(text)){var y=position.y;var spacing=1.5*fontSize;for(var i=0;i<text.length;++i){ctx.fillText(text[i],position.x,y);y+=spacing;}}else{ctx.fillText(text,position.x,position.y);}}function adjustPointPositionForLabelHeight(angle,textSize,position){if(angle===90||angle===270){position.y-=textSize.h/2;}else if(angle>270||angle<90){position.y-=textSize.h;}}function drawPointLabels(scale){var ctx=scale.ctx;var valueOrDefault=helpers.valueOrDefault;var opts=scale.options;var angleLineOpts=opts.angleLines;var pointLabelOpts=opts.pointLabels;ctx.lineWidth=angleLineOpts.lineWidth;ctx.strokeStyle=angleLineOpts.color;var outerDistance=scale.getDistanceFromCenterForValue(opts.ticks.reverse?scale.min:scale.max);// Point Label Font
var plFont=getPointLabelFontOptions(scale);ctx.textBaseline='top';for(var i=getValueCount(scale)-1;i>=0;i--){if(angleLineOpts.display){var outerPosition=scale.getPointPosition(i,outerDistance);ctx.beginPath();ctx.moveTo(scale.xCenter,scale.yCenter);ctx.lineTo(outerPosition.x,outerPosition.y);ctx.stroke();ctx.closePath();}if(pointLabelOpts.display){// Extra 3px out for some label spacing
var pointLabelPosition=scale.getPointPosition(i,outerDistance+5);// Keep this in loop since we may support array properties here
var pointLabelFontColor=valueOrDefault(pointLabelOpts.fontColor,globalDefaults.defaultFontColor);ctx.font=plFont.font;ctx.fillStyle=pointLabelFontColor;var angleRadians=scale.getIndexAngle(i);var angle=helpers.toDegrees(angleRadians);ctx.textAlign=getTextAlignForAngle(angle);adjustPointPositionForLabelHeight(angle,scale._pointLabelSizes[i],pointLabelPosition);fillText(ctx,scale.pointLabels[i]||'',pointLabelPosition,plFont.size);}}}function drawRadiusLine(scale,gridLineOpts,radius,index){var ctx=scale.ctx;ctx.strokeStyle=helpers.valueAtIndexOrDefault(gridLineOpts.color,index-1);ctx.lineWidth=helpers.valueAtIndexOrDefault(gridLineOpts.lineWidth,index-1);if(scale.options.gridLines.circular){// Draw circular arcs between the points
ctx.beginPath();ctx.arc(scale.xCenter,scale.yCenter,radius,0,Math.PI*2);ctx.closePath();ctx.stroke();}else{// Draw straight lines connecting each index
var valueCount=getValueCount(scale);if(valueCount===0){return;}ctx.beginPath();var pointPosition=scale.getPointPosition(0,radius);ctx.moveTo(pointPosition.x,pointPosition.y);for(var i=1;i<valueCount;i++){pointPosition=scale.getPointPosition(i,radius);ctx.lineTo(pointPosition.x,pointPosition.y);}ctx.closePath();ctx.stroke();}}function numberOrZero(param){return helpers.isNumber(param)?param:0;}var LinearRadialScale=Chart.LinearScaleBase.extend({setDimensions:function setDimensions(){var me=this;var opts=me.options;var tickOpts=opts.ticks;// Set the unconstrained dimension before label rotation
me.width=me.maxWidth;me.height=me.maxHeight;me.xCenter=Math.round(me.width/2);me.yCenter=Math.round(me.height/2);var minSize=helpers.min([me.height,me.width]);var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);me.drawingArea=opts.display?minSize/2-(tickFontSize/2+tickOpts.backdropPaddingY):minSize/2;},determineDataLimits:function determineDataLimits(){var me=this;var chart=me.chart;var min=Number.POSITIVE_INFINITY;var max=Number.NEGATIVE_INFINITY;helpers.each(chart.data.datasets,function(dataset,datasetIndex){if(chart.isDatasetVisible(datasetIndex)){var meta=chart.getDatasetMeta(datasetIndex);helpers.each(dataset.data,function(rawValue,index){var value=+me.getRightValue(rawValue);if(isNaN(value)||meta.data[index].hidden){return;}min=Math.min(value,min);max=Math.max(value,max);});}});me.min=min===Number.POSITIVE_INFINITY?0:min;me.max=max===Number.NEGATIVE_INFINITY?0:max;// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
me.handleTickRangeOptions();},getTickLimit:function getTickLimit(){var tickOpts=this.options.ticks;var tickFontSize=helpers.valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);return Math.min(tickOpts.maxTicksLimit?tickOpts.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*tickFontSize)));},convertTicksToLabels:function convertTicksToLabels(){var me=this;Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);// Point labels
me.pointLabels=me.chart.data.labels.map(me.options.pointLabels.callback,me);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){return+this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);},fit:function fit(){if(this.options.pointLabels.display){fitWithPointLabels(this);}else{_fit(this);}},/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */setReductions:function setReductions(largestPossibleRadius,furthestLimits,furthestAngles){var me=this;var radiusReductionLeft=furthestLimits.l/Math.sin(furthestAngles.l);var radiusReductionRight=Math.max(furthestLimits.r-me.width,0)/Math.sin(furthestAngles.r);var radiusReductionTop=-furthestLimits.t/Math.cos(furthestAngles.t);var radiusReductionBottom=-Math.max(furthestLimits.b-me.height,0)/Math.cos(furthestAngles.b);radiusReductionLeft=numberOrZero(radiusReductionLeft);radiusReductionRight=numberOrZero(radiusReductionRight);radiusReductionTop=numberOrZero(radiusReductionTop);radiusReductionBottom=numberOrZero(radiusReductionBottom);me.drawingArea=Math.min(Math.round(largestPossibleRadius-(radiusReductionLeft+radiusReductionRight)/2),Math.round(largestPossibleRadius-(radiusReductionTop+radiusReductionBottom)/2));me.setCenterPoint(radiusReductionLeft,radiusReductionRight,radiusReductionTop,radiusReductionBottom);},setCenterPoint:function setCenterPoint(leftMovement,rightMovement,topMovement,bottomMovement){var me=this;var maxRight=me.width-rightMovement-me.drawingArea;var maxLeft=leftMovement+me.drawingArea;var maxTop=topMovement+me.drawingArea;var maxBottom=me.height-bottomMovement-me.drawingArea;me.xCenter=Math.round((maxLeft+maxRight)/2+me.left);me.yCenter=Math.round((maxTop+maxBottom)/2+me.top);},getIndexAngle:function getIndexAngle(index){var angleMultiplier=Math.PI*2/getValueCount(this);var startAngle=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0;var startAngleRadians=startAngle*Math.PI*2/360;// Start from the top instead of right, so remove a quarter of the circle
return index*angleMultiplier+startAngleRadians;},getDistanceFromCenterForValue:function getDistanceFromCenterForValue(value){var me=this;if(value===null){return 0;// null always in center
}// Take into account half font size + the yPadding of the top value
var scalingFactor=me.drawingArea/(me.max-me.min);if(me.options.ticks.reverse){return(me.max-value)*scalingFactor;}return(value-me.min)*scalingFactor;},getPointPosition:function getPointPosition(index,distanceFromCenter){var me=this;var thisAngle=me.getIndexAngle(index)-Math.PI/2;return{x:Math.round(Math.cos(thisAngle)*distanceFromCenter)+me.xCenter,y:Math.round(Math.sin(thisAngle)*distanceFromCenter)+me.yCenter};},getPointPositionForValue:function getPointPositionForValue(index,value){return this.getPointPosition(index,this.getDistanceFromCenterForValue(value));},getBasePosition:function getBasePosition(){var me=this;var min=me.min;var max=me.max;return me.getPointPositionForValue(0,me.beginAtZero?0:min<0&&max<0?max:min>0&&max>0?min:0);},draw:function draw(){var me=this;var opts=me.options;var gridLineOpts=opts.gridLines;var tickOpts=opts.ticks;var valueOrDefault=helpers.valueOrDefault;if(opts.display){var ctx=me.ctx;var startAngle=this.getIndexAngle(0);// Tick Font
var tickFontSize=valueOrDefault(tickOpts.fontSize,globalDefaults.defaultFontSize);var tickFontStyle=valueOrDefault(tickOpts.fontStyle,globalDefaults.defaultFontStyle);var tickFontFamily=valueOrDefault(tickOpts.fontFamily,globalDefaults.defaultFontFamily);var tickLabelFont=helpers.fontString(tickFontSize,tickFontStyle,tickFontFamily);helpers.each(me.ticks,function(label,index){// Don't draw a centre value (if it is minimum)
if(index>0||tickOpts.reverse){var yCenterOffset=me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);// Draw circular lines around the scale
if(gridLineOpts.display&&index!==0){drawRadiusLine(me,gridLineOpts,yCenterOffset,index);}if(tickOpts.display){var tickFontColor=valueOrDefault(tickOpts.fontColor,globalDefaults.defaultFontColor);ctx.font=tickLabelFont;ctx.save();ctx.translate(me.xCenter,me.yCenter);ctx.rotate(startAngle);if(tickOpts.showLabelBackdrop){var labelWidth=ctx.measureText(label).width;ctx.fillStyle=tickOpts.backdropColor;ctx.fillRect(-labelWidth/2-tickOpts.backdropPaddingX,-yCenterOffset-tickFontSize/2-tickOpts.backdropPaddingY,labelWidth+tickOpts.backdropPaddingX*2,tickFontSize+tickOpts.backdropPaddingY*2);}ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=tickFontColor;ctx.fillText(label,0,-yCenterOffset);ctx.restore();}}});if(opts.angleLines.display||opts.pointLabels.display){drawPointLabels(me);}}}});Chart.scaleService.registerScaleType('radialLinear',LinearRadialScale,defaultConfig);};},{"25":25,"34":34,"45":45}],57:[function(require,module,exports){/* global window: false */'use strict';var moment=require(1);moment=typeof moment==='function'?moment:window.moment;var defaults=require(25);var helpers=require(45);// Integer constants are from the ES6 spec.
var MIN_INTEGER=Number.MIN_SAFE_INTEGER||-9007199254740991;var MAX_INTEGER=Number.MAX_SAFE_INTEGER||9007199254740991;var INTERVALS={millisecond:{common:true,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:true,size:1000,steps:[1,2,5,10,30]},minute:{common:true,size:60000,steps:[1,2,5,10,30]},hour:{common:true,size:3600000,steps:[1,2,3,6,12]},day:{common:true,size:86400000,steps:[1,2,5]},week:{common:false,size:604800000,steps:[1,2,3,4]},month:{common:true,size:2.628e9,steps:[1,2,3]},quarter:{common:false,size:7.884e9,steps:[1,2,3,4]},year:{common:true,size:3.154e10}};var UNITS=Object.keys(INTERVALS);function sorter(a,b){return a-b;}function arrayUnique(items){var hash={};var out=[];var i,ilen,item;for(i=0,ilen=items.length;i<ilen;++i){item=items[i];if(!hash[item]){hash[item]=true;out.push(item);}}return out;}/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */function buildLookupTable(timestamps,min,max,distribution){if(distribution==='linear'||!timestamps.length){return[{time:min,pos:0},{time:max,pos:1}];}var table=[];var items=[min];var i,ilen,prev,curr,next;for(i=0,ilen=timestamps.length;i<ilen;++i){curr=timestamps[i];if(curr>min&&curr<max){items.push(curr);}}items.push(max);for(i=0,ilen=items.length;i<ilen;++i){next=items[i+1];prev=items[i-1];curr=items[i];// only add points that breaks the scale linearity
if(prev===undefined||next===undefined||Math.round((next+prev)/2)!==curr){table.push({time:curr,pos:i/(ilen-1)});}}return table;}// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table,key,value){var lo=0;var hi=table.length-1;var mid,i0,i1;while(lo>=0&&lo<=hi){mid=lo+hi>>1;i0=table[mid-1]||null;i1=table[mid];if(!i0){// given value is outside table (before first item)
return{lo:null,hi:i1};}else if(i1[key]<value){lo=mid+1;}else if(i0[key]>value){hi=mid-1;}else{return{lo:i0,hi:i1};}}// given value is outside table (after last item)
return{lo:i1,hi:null};}/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */function interpolate(table,skey,sval,tkey){var range=lookup(table,skey,sval);// Note: the lookup table ALWAYS contains at least 2 items (min and max)
var prev=!range.lo?table[0]:!range.hi?table[table.length-2]:range.lo;var next=!range.lo?table[1]:!range.hi?table[table.length-1]:range.hi;var span=next[skey]-prev[skey];var ratio=span?(sval-prev[skey])/span:0;var offset=(next[tkey]-prev[tkey])*ratio;return prev[tkey]+offset;}/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */function momentify(value,options){var parser=options.parser;var format=options.parser||options.format;if(typeof parser==='function'){return parser(value);}if(typeof value==='string'&&typeof format==='string'){return moment(value,format);}if(!(value instanceof moment)){value=moment(value);}if(value.isValid()){return value;}// Labels are in an incompatible moment format and no `parser` has been provided.
// The user might still use the deprecated `format` option to convert his inputs.
if(typeof format==='function'){return format(value);}return value;}function parse(input,scale){if(helpers.isNullOrUndef(input)){return null;}var options=scale.options.time;var value=momentify(scale.getRightValue(input),options);if(!value.isValid()){return null;}if(options.round){value.startOf(options.round);}return value.valueOf();}/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */function determineStepSize(min,max,unit,capacity){var range=max-min;var interval=INTERVALS[unit];var milliseconds=interval.size;var steps=interval.steps;var i,ilen,factor;if(!steps){return Math.ceil(range/((capacity||1)*milliseconds));}for(i=0,ilen=steps.length;i<ilen;++i){factor=steps[i];if(Math.ceil(range/(milliseconds*factor))<=capacity){break;}}return factor;}/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */function determineUnitForAutoTicks(minUnit,min,max,capacity){var ilen=UNITS.length;var i,interval,factor;for(i=UNITS.indexOf(minUnit);i<ilen-1;++i){interval=INTERVALS[UNITS[i]];factor=interval.steps?interval.steps[interval.steps.length-1]:MAX_INTEGER;if(interval.common&&Math.ceil((max-min)/(factor*interval.size))<=capacity){return UNITS[i];}}return UNITS[ilen-1];}/**
 * Figures out what unit to format a set of ticks with
 */function determineUnitForFormatting(ticks,minUnit,min,max){var duration=moment.duration(moment(max).diff(moment(min)));var ilen=UNITS.length;var i,unit;for(i=ilen-1;i>=UNITS.indexOf(minUnit);i--){unit=UNITS[i];if(INTERVALS[unit].common&&duration.as(unit)>=ticks.length){return unit;}}return UNITS[minUnit?UNITS.indexOf(minUnit):0];}function determineMajorUnit(unit){for(var i=UNITS.indexOf(unit)+1,ilen=UNITS.length;i<ilen;++i){if(INTERVALS[UNITS[i]].common){return UNITS[i];}}}/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */function generate(min,max,capacity,options){var timeOpts=options.time;var minor=timeOpts.unit||determineUnitForAutoTicks(timeOpts.minUnit,min,max,capacity);var major=determineMajorUnit(minor);var stepSize=helpers.valueOrDefault(timeOpts.stepSize,timeOpts.unitStepSize);var weekday=minor==='week'?timeOpts.isoWeekday:false;var majorTicksEnabled=options.ticks.major.enabled;var interval=INTERVALS[minor];var first=moment(min);var last=moment(max);var ticks=[];var time;if(!stepSize){stepSize=determineStepSize(min,max,minor,capacity);}// For 'week' unit, handle the first day of week option
if(weekday){first=first.isoWeekday(weekday);last=last.isoWeekday(weekday);}// Align first/last ticks on unit
first=first.startOf(weekday?'day':minor);last=last.startOf(weekday?'day':minor);// Make sure that the last tick include max
if(last<max){last.add(1,minor);}time=moment(first);if(majorTicksEnabled&&major&&!weekday&&!timeOpts.round){// Align the first tick on the previous `minor` unit aligned on the `major` unit:
// we first aligned time on the previous `major` unit then add the number of full
// stepSize there is between first and the previous major time.
time.startOf(major);time.add(~~((first-time)/(interval.size*stepSize))*stepSize,minor);}for(;time<last;time.add(stepSize,minor)){ticks.push(+time);}ticks.push(+time);return ticks;}/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */function computeOffsets(table,ticks,min,max,options){var left=0;var right=0;var upper,lower;if(options.offset&&ticks.length){if(!options.time.min){upper=ticks.length>1?ticks[1]:max;lower=ticks[0];left=(interpolate(table,'time',upper,'pos')-interpolate(table,'time',lower,'pos'))/2;}if(!options.time.max){upper=ticks[ticks.length-1];lower=ticks.length>1?ticks[ticks.length-2]:min;right=(interpolate(table,'time',upper,'pos')-interpolate(table,'time',lower,'pos'))/2;}}return{left:left,right:right};}function ticksFromTimestamps(values,majorUnit){var ticks=[];var i,ilen,value,major;for(i=0,ilen=values.length;i<ilen;++i){value=values[i];major=majorUnit?value===+moment(value).startOf(majorUnit):false;ticks.push({value:value,major:major});}return ticks;}module.exports=function(Chart){var defaultConfig={position:'bottom',/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */distribution:'linear',/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */bounds:'data',time:{parser:false,// false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
format:false,// DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
unit:false,// false == automatic or override with week, month, year, etc.
round:false,// none, or override with week, month, year, etc.
displayFormat:false,// DEPRECATED
isoWeekday:false,// override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
minUnit:'millisecond',// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
displayFormats:{millisecond:'h:mm:ss.SSS a',// 11:20:01.123 AM,
second:'h:mm:ss a',// 11:20:01 AM
minute:'h:mm a',// 11:20 AM
hour:'hA',// 5PM
day:'MMM D',// Sep 4
week:'ll',// Week 46, or maybe "[W]WW - YYYY" ?
month:'MMM YYYY',// Sept 2015
quarter:'[Q]Q - YYYY',// Q3
year:'YYYY'// 2015
}},ticks:{autoSkip:false,/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */source:'auto',major:{enabled:false}}};var TimeScale=Chart.Scale.extend({initialize:function initialize(){if(!moment){throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');}this.mergeTicksOptions();Chart.Scale.prototype.initialize.call(this);},update:function update(){var me=this;var options=me.options;// DEPRECATIONS: output a message only one time per update
if(options.time&&options.time.format){console.warn('options.time.format is deprecated and replaced by options.time.parser.');}return Chart.Scale.prototype.update.apply(me,arguments);},/**
		 * Allows data to be referenced via 't' attribute
		 */getRightValue:function getRightValue(rawValue){if(rawValue&&rawValue.t!==undefined){rawValue=rawValue.t;}return Chart.Scale.prototype.getRightValue.call(this,rawValue);},determineDataLimits:function determineDataLimits(){var me=this;var chart=me.chart;var timeOpts=me.options.time;var min=MAX_INTEGER;var max=MIN_INTEGER;var timestamps=[];var datasets=[];var labels=[];var i,j,ilen,jlen,data,timestamp;// Convert labels to timestamps
for(i=0,ilen=chart.data.labels.length;i<ilen;++i){labels.push(parse(chart.data.labels[i],me));}// Convert data to timestamps
for(i=0,ilen=(chart.data.datasets||[]).length;i<ilen;++i){if(chart.isDatasetVisible(i)){data=chart.data.datasets[i].data;// Let's consider that all data have the same format.
if(helpers.isObject(data[0])){datasets[i]=[];for(j=0,jlen=data.length;j<jlen;++j){timestamp=parse(data[j],me);timestamps.push(timestamp);datasets[i][j]=timestamp;}}else{timestamps.push.apply(timestamps,labels);datasets[i]=labels.slice(0);}}else{datasets[i]=[];}}if(labels.length){// Sort labels **after** data have been converted
labels=arrayUnique(labels).sort(sorter);min=Math.min(min,labels[0]);max=Math.max(max,labels[labels.length-1]);}if(timestamps.length){timestamps=arrayUnique(timestamps).sort(sorter);min=Math.min(min,timestamps[0]);max=Math.max(max,timestamps[timestamps.length-1]);}min=parse(timeOpts.min,me)||min;max=parse(timeOpts.max,me)||max;// In case there is no valid min/max, let's use today limits
min=min===MAX_INTEGER?+moment().startOf('day'):min;max=max===MIN_INTEGER?+moment().endOf('day')+1:max;// Make sure that max is strictly higher than min (required by the lookup table)
me.min=Math.min(min,max);me.max=Math.max(min+1,max);// PRIVATE
me._horizontal=me.isHorizontal();me._table=[];me._timestamps={data:timestamps,datasets:datasets,labels:labels};},buildTicks:function buildTicks(){var me=this;var min=me.min;var max=me.max;var options=me.options;var timeOpts=options.time;var timestamps=[];var ticks=[];var i,ilen,timestamp;switch(options.ticks.source){case'data':timestamps=me._timestamps.data;break;case'labels':timestamps=me._timestamps.labels;break;case'auto':default:timestamps=generate(min,max,me.getLabelCapacity(min),options);}if(options.bounds==='ticks'&&timestamps.length){min=timestamps[0];max=timestamps[timestamps.length-1];}// Enforce limits with user min/max options
min=parse(timeOpts.min,me)||min;max=parse(timeOpts.max,me)||max;// Remove ticks outside the min/max range
for(i=0,ilen=timestamps.length;i<ilen;++i){timestamp=timestamps[i];if(timestamp>=min&&timestamp<=max){ticks.push(timestamp);}}me.min=min;me.max=max;// PRIVATE
me._unit=timeOpts.unit||determineUnitForFormatting(ticks,timeOpts.minUnit,me.min,me.max);me._majorUnit=determineMajorUnit(me._unit);me._table=buildLookupTable(me._timestamps.data,min,max,options.distribution);me._offsets=computeOffsets(me._table,ticks,min,max,options);return ticksFromTimestamps(ticks,me._majorUnit);},getLabelForIndex:function getLabelForIndex(index,datasetIndex){var me=this;var data=me.chart.data;var timeOpts=me.options.time;var label=data.labels&&index<data.labels.length?data.labels[index]:'';var value=data.datasets[datasetIndex].data[index];if(helpers.isObject(value)){label=me.getRightValue(value);}if(timeOpts.tooltipFormat){label=momentify(label,timeOpts).format(timeOpts.tooltipFormat);}return label;},/**
		 * Function to format an individual tick mark
		 * @private
		 */tickFormatFunction:function tickFormatFunction(tick,index,ticks,formatOverride){var me=this;var options=me.options;var time=tick.valueOf();var formats=options.time.displayFormats;var minorFormat=formats[me._unit];var majorUnit=me._majorUnit;var majorFormat=formats[majorUnit];var majorTime=tick.clone().startOf(majorUnit).valueOf();var majorTickOpts=options.ticks.major;var major=majorTickOpts.enabled&&majorUnit&&majorFormat&&time===majorTime;var label=tick.format(formatOverride?formatOverride:major?majorFormat:minorFormat);var tickOpts=major?majorTickOpts:options.ticks.minor;var formatter=helpers.valueOrDefault(tickOpts.callback,tickOpts.userCallback);return formatter?formatter(label,index,ticks):label;},convertTicksToLabels:function convertTicksToLabels(ticks){var labels=[];var i,ilen;for(i=0,ilen=ticks.length;i<ilen;++i){labels.push(this.tickFormatFunction(moment(ticks[i].value),i,ticks));}return labels;},/**
		 * @private
		 */getPixelForOffset:function getPixelForOffset(time){var me=this;var size=me._horizontal?me.width:me.height;var start=me._horizontal?me.left:me.top;var pos=interpolate(me._table,'time',time,'pos');return start+size*(me._offsets.left+pos)/(me._offsets.left+1+me._offsets.right);},getPixelForValue:function getPixelForValue(value,index,datasetIndex){var me=this;var time=null;if(index!==undefined&&datasetIndex!==undefined){time=me._timestamps.datasets[datasetIndex][index];}if(time===null){time=parse(value,me);}if(time!==null){return me.getPixelForOffset(time);}},getPixelForTick:function getPixelForTick(index){var ticks=this.getTicks();return index>=0&&index<ticks.length?this.getPixelForOffset(ticks[index].value):null;},getValueForPixel:function getValueForPixel(pixel){var me=this;var size=me._horizontal?me.width:me.height;var start=me._horizontal?me.left:me.top;var pos=(size?(pixel-start)/size:0)*(me._offsets.left+1+me._offsets.left)-me._offsets.right;var time=interpolate(me._table,'pos',pos,'time');return moment(time);},/**
		 * Crude approximation of what the label width might be
		 * @private
		 */getLabelWidth:function getLabelWidth(label){var me=this;var ticksOpts=me.options.ticks;var tickLabelWidth=me.ctx.measureText(label).width;var angle=helpers.toRadians(ticksOpts.maxRotation);var cosRotation=Math.cos(angle);var sinRotation=Math.sin(angle);var tickFontSize=helpers.valueOrDefault(ticksOpts.fontSize,defaults.global.defaultFontSize);return tickLabelWidth*cosRotation+tickFontSize*sinRotation;},/**
		 * @private
		 */getLabelCapacity:function getLabelCapacity(exampleTime){var me=this;var formatOverride=me.options.time.displayFormats.millisecond;// Pick the longest format for guestimation
var exampleLabel=me.tickFormatFunction(moment(exampleTime),0,[],formatOverride);var tickLabelWidth=me.getLabelWidth(exampleLabel);var innerWidth=me.isHorizontal()?me.width:me.height;return Math.floor(innerWidth/tickLabelWidth);}});Chart.scaleService.registerScaleType('time',TimeScale,defaultConfig);};},{"1":1,"25":25,"45":45}]},{},[7])(7);});/**
 * Basic structure: TC_Class is the public class that is returned upon being called
 * 
 * So, if you do
 *      var tc = $(".timer").TimeCircles();
 *      
 * tc will contain an instance of the public TimeCircles class. It is important to
 * note that TimeCircles is not chained in the conventional way, check the
 * documentation for more info on how TimeCircles can be chained.
 * 
 * After being called/created, the public TimerCircles class will then- for each element
 * within it's collection, either fetch or create an instance of the private class.
 * Each function called upon the public class will be forwarded to each instance
 * of the private classes within the relevant element collection
 **/(function($){var useWindow=window;// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if(!Object.keys){Object.keys=function(){'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if(_typeof2(obj)!=='object'&&(typeof obj!=='function'||obj===null)){throw new TypeError('Object.keys called on non-object');}var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop);}}if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i]);}}}return result;};}();}// Used to disable some features on IE8
var limited_mode=false;var tick_duration=200;// in ms
var debug=location.hash==="#debug";function debug_log(msg){if(debug){console.log(msg);}}var allUnits=["Days","Hours","Minutes","Seconds"];var nextUnits={Seconds:"Minutes",Minutes:"Hours",Hours:"Days",Days:"Years"};var secondsIn={Seconds:1,Minutes:60,Hours:3600,Days:86400,Months:2678400,Years:31536000};/**
     * Converts hex color code into object containing integer values for the r,g,b use
     * This function (hexToRgb) originates from:
     * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
     * @param {string} hex color code
     */function hexToRgb(hex){// Verify already RGB (e.g. "rgb(0,0,0)") or RGBA (e.g. "rgba(0,0,0,0.5)")
var rgba=/^rgba?\(([\d]+),([\d]+),([\d]+)(,([\d\.]+))?\)$/;if(rgba.test(hex)){var result=rgba.exec(hex);return{r:parseInt(result[1]),g:parseInt(result[2]),b:parseInt(result[3]),a:parseInt(result[5]?result[5]:1)};}// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null;}function isCanvasSupported(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'));}/**
     * Function s4() and guid() originate from:
     * http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
     */function s4(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);}/**
     * Creates a unique id
     * @returns {String}
     */function guid(){return s4()+s4()+'-'+s4()+'-'+s4()+'-'+s4()+'-'+s4()+s4()+s4();}/**
     * Array.prototype.indexOf fallback for IE8
     * @param {Mixed} mixed
     * @returns {Number}
     */if(!Array.prototype.indexOf){Array.prototype.indexOf=function(elt/*, from*/){var len=this.length>>>0;var from=Number(arguments[1])||0;from=from<0?Math.ceil(from):Math.floor(from);if(from<0)from+=len;for(;from<len;from++){if(from in this&&this[from]===elt)return from;}return-1;};}function parse_date(str){var match=str.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s[0-9]{1,2}:[0-9]{2}:[0-9]{2}$/);if(match!==null&&match.length>0){var parts=str.split(" ");var date=parts[0].split("-");var time=parts[1].split(":");return new Date(date[0],date[1]-1,date[2],time[0],time[1],time[2]);}// Fallback for different date formats
var d=Date.parse(str);if(!isNaN(d))return d;d=Date.parse(str.replace(/-/g,'/').replace('T',' '));if(!isNaN(d))return d;// Cant find anything
return new Date();}function parse_times(diff,old_diff,total_duration,units,floor){var raw_time={};var raw_old_time={};var time={};var pct={};var old_pct={};var old_time={};var greater_unit=null;for(var i=0;i<units.length;i++){var unit=units[i];var maxUnits;if(greater_unit===null){maxUnits=total_duration/secondsIn[unit];}else{maxUnits=secondsIn[greater_unit]/secondsIn[unit];}var curUnits=diff/secondsIn[unit];var oldUnits=old_diff/secondsIn[unit];if(floor){if(curUnits>0)curUnits=Math.floor(curUnits);else curUnits=Math.ceil(curUnits);if(oldUnits>0)oldUnits=Math.floor(oldUnits);else oldUnits=Math.ceil(oldUnits);}if(unit!=="Days"){curUnits=curUnits%maxUnits;oldUnits=oldUnits%maxUnits;}raw_time[unit]=curUnits;time[unit]=Math.abs(curUnits);raw_old_time[unit]=oldUnits;old_time[unit]=Math.abs(oldUnits);pct[unit]=Math.abs(curUnits)/maxUnits;old_pct[unit]=Math.abs(oldUnits)/maxUnits;greater_unit=unit;}return{raw_time:raw_time,raw_old_time:raw_old_time,time:time,old_time:old_time,pct:pct,old_pct:old_pct};}var TC_Instance_List={};function updateUsedWindow(){if(typeof useWindow.TC_Instance_List!=="undefined"){TC_Instance_List=useWindow.TC_Instance_List;}else{useWindow.TC_Instance_List=TC_Instance_List;}initializeAnimationFrameHandler(useWindow);};function initializeAnimationFrameHandler(w){var vendors=['webkit','moz'];for(var x=0;x<vendors.length&&!w.requestAnimationFrame;++x){w.requestAnimationFrame=w[vendors[x]+'RequestAnimationFrame'];w.cancelAnimationFrame=w[vendors[x]+'CancelAnimationFrame'];}if(!w.requestAnimationFrame||!w.cancelAnimationFrame){w.requestAnimationFrame=function(callback,element,instance){if(typeof instance==="undefined")instance={data:{last_frame:0}};var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-instance.data.last_frame));var id=w.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);instance.data.last_frame=currTime+timeToCall;return id;};w.cancelAnimationFrame=function(id){clearTimeout(id);};}};var TC_Instance=function TC_Instance(element,options){this.element=element;this.container;this.listeners=null;this.data={paused:false,last_frame:0,animation_frame:null,interval_fallback:null,timer:false,total_duration:null,prev_time:null,drawn_units:[],text_elements:{Days:null,Hours:null,Minutes:null,Seconds:null},attributes:{canvas:null,context:null,item_size:null,line_width:null,radius:null,outer_radius:null},state:{fading:{Days:false,Hours:false,Minutes:false,Seconds:false}}};this.config=null;this.setOptions(options);this.initialize();};TC_Instance.prototype.clearListeners=function(){this.listeners={all:[],visible:[]};};TC_Instance.prototype.addTime=function(seconds_to_add){if(this.data.attributes.ref_date instanceof Date){var d=this.data.attributes.ref_date;d.setSeconds(d.getSeconds()+seconds_to_add);}else if(!isNaN(this.data.attributes.ref_date)){this.data.attributes.ref_date+=seconds_to_add*1000;}};TC_Instance.prototype.initialize=function(clear_listeners){// Initialize drawn units
this.data.drawn_units=[];for(var i=0;i<Object.keys(this.config.time).length;i++){var unit=Object.keys(this.config.time)[i];if(this.config.time[unit].show){this.data.drawn_units.push(unit);}}// Avoid stacking
$(this.element).children('div.time_circles').remove();if(typeof clear_listeners==="undefined")clear_listeners=true;if(clear_listeners||this.listeners===null){this.clearListeners();}this.container=$("<div>");this.container.addClass('time_circles');this.container.appendTo(this.element);// Determine the needed width and height of TimeCircles
var height=this.element.offsetHeight;var width=this.element.offsetWidth;if(height===0)height=$(this.element).height();if(width===0)width=$(this.element).width();if(height===0&&width>0)height=width/this.data.drawn_units.length;else if(width===0&&height>0)width=height*this.data.drawn_units.length;// Create our canvas and set it to the appropriate size
var canvasElement=document.createElement('canvas');canvasElement.width=width;canvasElement.height=height;// Add canvas elements
this.data.attributes.canvas=$(canvasElement);this.data.attributes.canvas.appendTo(this.container);// Check if the browser has browser support
var canvasSupported=isCanvasSupported();// If the browser doesn't have browser support, check if explorer canvas is loaded
// (A javascript library that adds canvas support to browsers that don't have it)
if(!canvasSupported&&typeof G_vmlCanvasManager!=="undefined"){G_vmlCanvasManager.initElement(canvasElement);limited_mode=true;canvasSupported=true;}if(canvasSupported){this.data.attributes.context=canvasElement.getContext('2d');}this.data.attributes.item_size=Math.min(width/this.data.drawn_units.length,height);this.data.attributes.line_width=this.data.attributes.item_size*this.config.fg_width;this.data.attributes.radius=(this.data.attributes.item_size*0.8-this.data.attributes.line_width)/2;this.data.attributes.outer_radius=this.data.attributes.radius+0.5*Math.max(this.data.attributes.line_width,this.data.attributes.line_width*this.config.bg_width);// Prepare Time Elements
var i=0;for(var key in this.data.text_elements){if(!this.config.time[key].show)continue;var textElement=$("<div>");textElement.addClass('textDiv_'+key);textElement.css("top",Math.round(0.35*this.data.attributes.item_size));textElement.css("left",Math.round(i++*this.data.attributes.item_size));textElement.css("width",this.data.attributes.item_size);textElement.appendTo(this.container);var headerElement=$("<h4>");headerElement.text(this.config.time[key].text);// Options
headerElement.css("font-size",Math.round(this.config.text_size*this.data.attributes.item_size));headerElement.appendTo(textElement);var numberElement=$("<span>");numberElement.css("font-size",Math.round(this.config.number_size*this.data.attributes.item_size));numberElement.appendTo(textElement);this.data.text_elements[key]=numberElement;}this.start();if(!this.config.start){this.data.paused=true;}// Set up interval fallback
var _this=this;this.data.interval_fallback=useWindow.setInterval(function(){_this.update.call(_this,true);},100);};TC_Instance.prototype.update=function(nodraw){if(typeof nodraw==="undefined"){nodraw=false;}else if(nodraw&&this.data.paused){return;}if(limited_mode){//Per unit clearing doesn't work in IE8 using explorer canvas, so do it in one time. The downside is that radial fade cant be used
this.data.attributes.context.clearRect(0,0,this.data.attributes.canvas[0].width,this.data.attributes.canvas[0].hright);}var diff,old_diff;var prevDate=this.data.prev_time;var curDate=new Date();this.data.prev_time=curDate;if(prevDate===null)prevDate=curDate;// If not counting past zero, and time < 0, then simply draw the zero point once, and call stop
if(!this.config.count_past_zero){if(curDate>this.data.attributes.ref_date){for(var i=0;i<this.data.drawn_units.length;i++){var key=this.data.drawn_units[i];// Set the text value
this.data.text_elements[key].text("0");var x=i*this.data.attributes.item_size+this.data.attributes.item_size/2;var y=this.data.attributes.item_size/2;var color=this.config.time[key].color;this.drawArc(x,y,color,0);}this.stop();return;}}// Compare current time with reference
diff=(this.data.attributes.ref_date-curDate)/1000;old_diff=(this.data.attributes.ref_date-prevDate)/1000;var floor=this.config.animation!=="smooth";var visible_times=parse_times(diff,old_diff,this.data.total_duration,this.data.drawn_units,floor);var all_times=parse_times(diff,old_diff,secondsIn["Years"],allUnits,floor);var i=0;var j=0;var lastKey=null;var cur_shown=this.data.drawn_units.slice();for(var i in allUnits){var key=allUnits[i];// Notify (all) listeners
if(Math.floor(all_times.raw_time[key])!==Math.floor(all_times.raw_old_time[key])){this.notifyListeners(key,Math.floor(all_times.time[key]),Math.floor(diff),"all");}if(cur_shown.indexOf(key)<0)continue;// Notify (visible) listeners
if(Math.floor(visible_times.raw_time[key])!==Math.floor(visible_times.raw_old_time[key])){this.notifyListeners(key,Math.floor(visible_times.time[key]),Math.floor(diff),"visible");}if(!nodraw){// Set the text value
this.data.text_elements[key].text(Math.floor(Math.abs(visible_times.time[key])));var x=j*this.data.attributes.item_size+this.data.attributes.item_size/2;var y=this.data.attributes.item_size/2;var color=this.config.time[key].color;if(this.config.animation==="smooth"){if(lastKey!==null&&!limited_mode){if(Math.floor(visible_times.time[lastKey])>Math.floor(visible_times.old_time[lastKey])){this.radialFade(x,y,color,1,key);this.data.state.fading[key]=true;}else if(Math.floor(visible_times.time[lastKey])<Math.floor(visible_times.old_time[lastKey])){this.radialFade(x,y,color,0,key);this.data.state.fading[key]=true;}}if(!this.data.state.fading[key]){this.drawArc(x,y,color,visible_times.pct[key]);}}else{this.animateArc(x,y,color,visible_times.pct[key],visible_times.old_pct[key],new Date().getTime()+tick_duration);}}lastKey=key;j++;}// Dont request another update if we should be paused
if(this.data.paused||nodraw){return;}// We need this for our next frame either way
var _this=this;var update=function update(){_this.update.call(_this);};// Either call next update immediately, or in a second
if(this.config.animation==="smooth"){// Smooth animation, Queue up the next frame
this.data.animation_frame=useWindow.requestAnimationFrame(update,_this.element,_this);}else{// Tick animation, Don't queue until very slightly after the next second happens
var delay=diff%1*1000;if(delay<0)delay=1000+delay;delay+=50;_this.data.animation_frame=useWindow.setTimeout(function(){_this.data.animation_frame=useWindow.requestAnimationFrame(update,_this.element,_this);},delay);}};TC_Instance.prototype.animateArc=function(x,y,color,target_pct,cur_pct,animation_end){if(this.data.attributes.context===null)return;var diff=cur_pct-target_pct;if(Math.abs(diff)>0.5){if(target_pct===0){this.radialFade(x,y,color,1);}else{this.radialFade(x,y,color,0);}}else{var progress=(tick_duration-(animation_end-new Date().getTime()))/tick_duration;if(progress>1)progress=1;var pct=cur_pct*(1-progress)+target_pct*progress;this.drawArc(x,y,color,pct);//var show_pct =
if(progress>=1)return;var _this=this;useWindow.requestAnimationFrame(function(){_this.animateArc(x,y,color,target_pct,cur_pct,animation_end);},this.element);}};TC_Instance.prototype.drawArc=function(x,y,color,pct){if(this.data.attributes.context===null)return;var clear_radius=Math.max(this.data.attributes.outer_radius,this.data.attributes.item_size/2);if(!limited_mode){this.data.attributes.context.clearRect(x-clear_radius,y-clear_radius,clear_radius*2,clear_radius*2);}if(this.config.use_background){this.data.attributes.context.beginPath();this.data.attributes.context.arc(x,y,this.data.attributes.radius,0,2*Math.PI,false);this.data.attributes.context.lineWidth=this.data.attributes.line_width*this.config.bg_width;// line color
this.data.attributes.context.strokeStyle=this.config.circle_bg_color;this.data.attributes.context.stroke();}// Direction
var startAngle,endAngle,counterClockwise;var defaultOffset=-0.5*Math.PI;var fullCircle=2*Math.PI;startAngle=defaultOffset+this.config.start_angle/360*fullCircle;var offset=2*pct*Math.PI;if(this.config.direction==="Both"){counterClockwise=false;startAngle-=offset/2;endAngle=startAngle+offset;}else{if(this.config.direction==="Clockwise"){counterClockwise=false;endAngle=startAngle+offset;}else{counterClockwise=true;endAngle=startAngle-offset;}}this.data.attributes.context.beginPath();this.data.attributes.context.arc(x,y,this.data.attributes.radius,startAngle,endAngle,counterClockwise);this.data.attributes.context.lineWidth=this.data.attributes.line_width;// line color
this.data.attributes.context.strokeStyle=color;this.data.attributes.context.stroke();};TC_Instance.prototype.radialFade=function(x,y,color,from,key){// TODO: Make fade_time option
var rgb=hexToRgb(color);var _this=this;// We have a few inner scopes here that will need access to our instance
var step=0.2*(from===1?-1:1);var i;for(i=0;from<=1&&from>=0;i++){// Create inner scope so our variables are not changed by the time the Timeout triggers
(function(){var delay=50*i;var rgba="rgba("+rgb.r+", "+rgb.g+", "+rgb.b+", "+Math.round(from*10)/10+")";useWindow.setTimeout(function(){_this.drawArc(x,y,rgba,1);},delay);})();from+=step;}if(_typeof2(key)!==undefined){useWindow.setTimeout(function(){_this.data.state.fading[key]=false;},50*i);}};TC_Instance.prototype.timeLeft=function(){if(this.data.paused&&typeof this.data.timer==="number"){return this.data.timer;}var now=new Date();return(this.data.attributes.ref_date-now)/1000;};TC_Instance.prototype.start=function(){useWindow.cancelAnimationFrame(this.data.animation_frame);useWindow.clearTimeout(this.data.animation_frame);// Check if a date was passed in html attribute or jquery data
var attr_data_date=$(this.element).data('date');if(typeof attr_data_date==="undefined"){attr_data_date=$(this.element).attr('data-date');}if(typeof attr_data_date==="string"){this.data.attributes.ref_date=parse_date(attr_data_date);}// Check if this is an unpause of a timer
else if(typeof this.data.timer==="number"){if(this.data.paused){this.data.attributes.ref_date=new Date().getTime()+this.data.timer*1000;}}else{// Try to get data-timer
var attr_data_timer=$(this.element).data('timer');if(typeof attr_data_timer==="undefined"){attr_data_timer=$(this.element).attr('data-timer');}if(typeof attr_data_timer==="string"){attr_data_timer=parseFloat(attr_data_timer);}if(typeof attr_data_timer==="number"){this.data.timer=attr_data_timer;this.data.attributes.ref_date=new Date().getTime()+attr_data_timer*1000;}else{// data-timer and data-date were both not set
// use config date
this.data.attributes.ref_date=this.config.ref_date;}}// Start running
this.data.paused=false;this.update.call(this);};TC_Instance.prototype.restart=function(){this.data.timer=false;this.start();};TC_Instance.prototype.stop=function(){if(typeof this.data.timer==="number"){this.data.timer=this.timeLeft(this);}// Stop running
this.data.paused=true;useWindow.cancelAnimationFrame(this.data.animation_frame);};TC_Instance.prototype.destroy=function(){this.clearListeners();this.stop();useWindow.clearInterval(this.data.interval_fallback);this.data.interval_fallback=null;this.container.remove();$(this.element).removeAttr('data-tc-id');$(this.element).removeData('tc-id');};TC_Instance.prototype.setOptions=function(options){if(this.config===null){this.default_options.ref_date=new Date();this.config=$.extend(true,{},this.default_options);}$.extend(true,this.config,options);// Use window.top if use_top_frame is true
if(this.config.use_top_frame){useWindow=window.top;}else{useWindow=window;}updateUsedWindow();this.data.total_duration=this.config.total_duration;if(typeof this.data.total_duration==="string"){if(typeof secondsIn[this.data.total_duration]!=="undefined"){// If set to Years, Months, Days, Hours or Minutes, fetch the secondsIn value for that
this.data.total_duration=secondsIn[this.data.total_duration];}else if(this.data.total_duration==="Auto"){// If set to auto, total_duration is the size of 1 unit, of the unit type bigger than the largest shown
for(var i=0;i<Object.keys(this.config.time).length;i++){var unit=Object.keys(this.config.time)[i];if(this.config.time[unit].show){this.data.total_duration=secondsIn[nextUnits[unit]];break;}}}else{// If it's a string, but neither of the above, user screwed up.
this.data.total_duration=secondsIn["Years"];console.error("Valid values for TimeCircles config.total_duration are either numeric, or (string) Years, Months, Days, Hours, Minutes, Auto");}}};TC_Instance.prototype.addListener=function(f,context,type){if(typeof f!=="function")return;if(typeof type==="undefined")type="visible";this.listeners[type].push({func:f,scope:context});};TC_Instance.prototype.notifyListeners=function(unit,value,total,type){for(var i=0;i<this.listeners[type].length;i++){var listener=this.listeners[type][i];listener.func.apply(listener.scope,[unit,value,total]);}};TC_Instance.prototype.default_options={ref_date:new Date(),start:true,animation:"smooth",count_past_zero:true,circle_bg_color:"#60686F",use_background:true,fg_width:0.1,bg_width:1.2,text_size:0.07,number_size:0.28,total_duration:"Auto",direction:"Clockwise",use_top_frame:false,start_angle:0,time:{Days:{show:true,text:"Days",color:"#FC6"},Hours:{show:true,text:"Hours",color:"#9CF"},Minutes:{show:true,text:"Minutes",color:"#BFB"},Seconds:{show:true,text:"Seconds",color:"#F99"}}};// Time circle class
var TC_Class=function TC_Class(elements,options){this.elements=elements;this.options=options;this.foreach();};TC_Class.prototype.getInstance=function(element){var instance;var cur_id=$(element).data("tc-id");if(typeof cur_id==="undefined"){cur_id=guid();$(element).attr("data-tc-id",cur_id);}if(typeof TC_Instance_List[cur_id]==="undefined"){var options=this.options;var element_options=$(element).data('options');if(typeof element_options==="string"){element_options=JSON.parse(element_options);}if(_typeof2(element_options)==="object"){options=$.extend(true,{},this.options,element_options);}instance=new TC_Instance(element,options);TC_Instance_List[cur_id]=instance;}else{instance=TC_Instance_List[cur_id];if(typeof this.options!=="undefined"){instance.setOptions(this.options);}}return instance;};TC_Class.prototype.addTime=function(seconds_to_add){this.foreach(function(instance){instance.addTime(seconds_to_add);});};TC_Class.prototype.foreach=function(callback){var _this=this;this.elements.each(function(){var instance=_this.getInstance(this);if(typeof callback==="function"){callback(instance);}});return this;};TC_Class.prototype.start=function(){this.foreach(function(instance){instance.start();});return this;};TC_Class.prototype.stop=function(){this.foreach(function(instance){instance.stop();});return this;};TC_Class.prototype.restart=function(){this.foreach(function(instance){instance.restart();});return this;};TC_Class.prototype.rebuild=function(){this.foreach(function(instance){instance.initialize(false);});return this;};TC_Class.prototype.getTime=function(){return this.getInstance(this.elements[0]).timeLeft();};TC_Class.prototype.addListener=function(f,type){if(typeof type==="undefined")type="visible";var _this=this;this.foreach(function(instance){instance.addListener(f,_this.elements,type);});return this;};TC_Class.prototype.destroy=function(){this.foreach(function(instance){instance.destroy();});return this;};TC_Class.prototype.end=function(){return this.elements;};$.fn.TimeCircles=function(options){return new TC_Class(this,options);};})(jQuery);/*  jQuery Nice Select - v1.1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */(function($){$.fn.niceSelect=function(method){// Methods
if(typeof method=='string'){if(method=='update'){this.each(function(){var $select=$(this);var $dropdown=$(this).next('.nice-select');var open=$dropdown.hasClass('open');if($dropdown.length){$dropdown.remove();create_nice_select($select);if(open){$select.next().trigger('click');}}});}else if(method=='destroy'){this.each(function(){var $select=$(this);var $dropdown=$(this).next('.nice-select');if($dropdown.length){$dropdown.remove();$select.css('display','');}});if($('.nice-select').length==0){$(document).off('.nice_select');}}else{console.log('Method "'+method+'" does not exist.');}return this;}// Hide native select
this.hide();// Create custom markup
this.each(function(){var $select=$(this);if(!$select.next().hasClass('nice-select')){create_nice_select($select);}});function create_nice_select($select){$select.after($('<div></div>').addClass('nice-select').addClass($select.attr('class')||'').addClass($select.attr('disabled')?'disabled':'').attr('tabindex',$select.attr('disabled')?null:'0').html('<span class="current"></span><ul class="list"></ul>'));var $dropdown=$select.next();var $options=$select.find('option');var $selected=$select.find('option:selected');$dropdown.find('.current').html($selected.data('display')||$selected.text());$options.each(function(i){var $option=$(this);var display=$option.data('display');$dropdown.find('ul').append($('<li></li>').attr('data-value',$option.val()).attr('data-display',display||null).addClass('option'+($option.is(':selected')?' selected':'')+($option.is(':disabled')?' disabled':'')).html($option.text()));});}/* Event listeners */ // Unbind existing events in case that the plugin has been initialized before
$(document).off('.nice_select');// Open/close
$(document).on('click.nice_select','.nice-select',function(event){var $dropdown=$(this);$('.nice-select').not($dropdown).removeClass('open');$dropdown.toggleClass('open');if($dropdown.hasClass('open')){$dropdown.find('.option');$dropdown.find('.focus').removeClass('focus');$dropdown.find('.selected').addClass('focus');}else{$dropdown.focus();}});// Close when clicking outside
$(document).on('click.nice_select',function(event){if($(event.target).closest('.nice-select').length===0){$('.nice-select').removeClass('open').find('.option');}});// Option click
$(document).on('click.nice_select','.nice-select .option:not(.disabled)',function(event){var $option=$(this);var $dropdown=$option.closest('.nice-select');$dropdown.find('.selected').removeClass('selected');$option.addClass('selected');var text=$option.data('display')||$option.text();$dropdown.find('.current').text(text);$dropdown.prev('select').val($option.data('value')).trigger('change');});// Keyboard events
$(document).on('keydown.nice_select','.nice-select',function(event){var $dropdown=$(this);var $focused_option=$($dropdown.find('.focus')||$dropdown.find('.list .option.selected'));// Space or Enter
if(event.keyCode==32||event.keyCode==13){if($dropdown.hasClass('open')){$focused_option.trigger('click');}else{$dropdown.trigger('click');}return false;// Down
}else if(event.keyCode==40){if(!$dropdown.hasClass('open')){$dropdown.trigger('click');}else{var $next=$focused_option.nextAll('.option:not(.disabled)').first();if($next.length>0){$dropdown.find('.focus').removeClass('focus');$next.addClass('focus');}}return false;// Up
}else if(event.keyCode==38){if(!$dropdown.hasClass('open')){$dropdown.trigger('click');}else{var $prev=$focused_option.prevAll('.option:not(.disabled)').first();if($prev.length>0){$dropdown.find('.focus').removeClass('focus');$prev.addClass('focus');}}return false;// Esc
}else if(event.keyCode==27){if($dropdown.hasClass('open')){$dropdown.trigger('click');}// Tab
}else if(event.keyCode==9){if($dropdown.hasClass('open')){return false;}}});// Detect CSS pointer-events support, for IE <= 10. From Modernizr.
var style=document.createElement('a').style;style.cssText='pointer-events:auto';if(style.pointerEvents!=='auto'){$('html').addClass('no-csspointerevents');}return this;};})(jQuery);/// <reference path='lib/ofi.js' />
/// <reference path='lib/jarallax.js' />
/// <reference path='lib/jarallax-video.js' />
/// <reference path='lib/lazyload.js' />
/// <reference path='lib/aos.js' />
/// <reference path='lib/slick.js' />
/// <reference path='lib/jquery.countTo.js' />
/// <reference path='lib/masonry.pkgd.js' />
/// <reference path='lib/jquery.fancybox.js' />
/// <reference path='lib/countdown.js' />
/// <reference path='lib/Chart.js' />
/// <reference path='lib/TimeCircles.js' />
/// <reference path='lib/jquery.nice-select.js' />
(function($){/*-- Strict mode enabled --*/'use strict';var $window=$(window),nHtmlNode=document.documentElement,nBodyNode=document.body||document.getElementsByTagName('body')[0],jBodyNode=$(nBodyNode);var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);};/* LazyLoad
	================================================== */var myLazyLoad=new LazyLoad({elements_selector:".lazy",data_src:'src',data_srcset:'srcset',threshold:500,callback_enter:function callback_enter(element){},callback_load:function callback_load(element){element.removeAttribute('data-src');var oTimeout=setTimeout(function(){clearTimeout(oTimeout);AOS.refresh();},500);},callback_set:function callback_set(element){},callback_error:function callback_error(element){element.src="https://placeholdit.imgix.net/~text?txtsize=21&txt=Image%20not%20load&w=200&h=200";}});/* scroll animate
	================================================== */AOS.init({offset:120,delay:100,duration:450,// or 200, 250, 300, 350.....
easing:'ease-in-out-quad',once:true,disable:'mobile'});/* top bar
	================================================== */function _top_bar(){var nHeader=document.getElementById('top-bar'),nMenuToggler=document.getElementById('top-bar__navigation-toggler'),nMenu=document.getElementById('top-bar__navigation'),jHeader=$(nHeader),jMenuToggler=$(nMenuToggler),jMenu=$(nMenu),jLink=jMenu.find('li a'),jSubmenu=jMenu.find('.submenu'),jAfterHeader;if(jSubmenu.length>0){jSubmenu.parent('li').addClass('has-submenu');};jAfterHeader=$('#start-screen');if(jAfterHeader.length===0){jAfterHeader=$('#intro');};jLink.on('touchend click',function(e){var $this=$(this),$parent=$this.parent();if(jMenuToggler.is(':visible')&&$this.next(jSubmenu).length){if($this.next().is(':visible')){$parent.removeClass('drop_active');$this.next().slideUp('fast');}else{$this.closest('ul').find('li').removeClass('drop_active');$this.closest('ul').find('.submenu').slideUp('fast');$parent.addClass('drop_active');$this.next().slideDown('fast');};return false;};});jMenuToggler.on('touchend click',function(e){e.preventDefault();var $this=$(this);$this.toggleClass('is-active');jHeader.toggleClass('is-expanded');if($this.hasClass('is-active')){nHtmlNode.style.overflow='hidden';}else{nHtmlNode.style.overflow='';}return false;});$window.smartresize(function(){if(window.innerWidth>=991){jHeader.removeClass('is-expanded');jMenuToggler.removeClass('is-active');jSubmenu.removeAttr('style');nHtmlNode.style.overflow='';}});$window.on('scroll',{previousTop:0},function(){var currentTop=$window.scrollTop();if(!jHeader.hasClass('is-expanded')){//check if user is scrolling up
if(currentTop<this.previousTop){//if scrolling up...
if(currentTop>0&&jHeader.hasClass('is-fixed')){jHeader.addClass('is-visible');}else{jHeader.removeClass('is-visible is-fixed');if(jHeader.hasClass('top-bar--light')&&jHeader.hasClass('top-bar--dark')){jHeader.removeClass('top-bar--dark');}}}else{//if scrolling down...
jHeader.removeClass('is-visible');if(currentTop>200&&!jHeader.hasClass('is-fixed')){jHeader.addClass('is-fixed top-bar--dark');}}this.previousTop=currentTop;}});};/* choose lang
	================================================== */function _choose_lang(){var nChooseLang=document.getElementById('top-bar__choose-lang'),jChooseLang=$(nChooseLang);if(jChooseLang.length>0){var curImage=jChooseLang.find('.img--active'),list=jChooseLang.find('.list'),listItem=list.children('li');jChooseLang.on('click','i',function(){list.slideToggle();jChooseLang.toggleClass('is-active');});listItem.on('click',function(e){e.preventDefault();var activeSrc=curImage.attr('src'),$this=$(this),img=$this.children('img'),src=img.attr('src');curImage.attr('src',src);img.attr('src',activeSrc);list.delay(300).slideUp(function(){jChooseLang.removeClass('is-active');});return false;});};};/* intro slider
	================================================== */function _intro_slider(){var slider=$('.start-screen__slider');if(slider.length>0){slider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:1000,mobileFirst:true,slidesToShow:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>'});};};/* posts slider
	================================================== */function _posts_slider(){var pSlider=$('.posts--slider');if(pSlider.length>0){pSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[{breakpoint:560,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:2}}]});};};/* testimonial
	================================================== */function _testimonial(){var tSlider=$('.testimonial--slider');if(tSlider.length>0){tSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>'});};};/* review
	================================================== */function _review(){var rSlider=$('.review--slider');if(rSlider.length>0){rSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]});};};/* word rotating
	================================================== */function _word_rotating(){var wSlider=$('.word-rotating--slider');if(wSlider.length>0){wSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>'});};};/* screenshots slider
	================================================== */function _screenshots_slider(){var sSlider=$('.screenshots--slider');if(sSlider.length>0){sSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[{breakpoint:560,settings:{centerMode:true,centerPadding:'15%',slidesToShow:1,slidesToScroll:1}},{breakpoint:1700,settings:{centerMode:true,centerPadding:'10%',slidesToShow:2,slidesToScroll:2}}]});};};/* feature slider
	================================================== */function _feature_slider(){var fSlider=$('.feature--slider');if(fSlider.length>0){fSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[// {
// 	breakpoint: 560,
// 	settings: {
// 		centerMode: true,
// 		centerPadding: '20%',
// 	}
// },
// {
// 	breakpoint: 767,
// 	settings: {
// 		centerMode: false,
// 		centerPadding: '0',
// 		slidesToShow: 2
// 	}
// },
// {
// 	breakpoint: 1500,
// 	settings: {
// 		slidesToShow: 3
// 	},
// }
]});};};/* projects slider
	================================================== */function _projects_slider(){var pSlider=$('.projects--slider');if(pSlider.length>0){pSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[{breakpoint:560,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}}]});};};/* posts slider
	================================================== */function _events_slider(){var pSlider=$('.events--slider');if(pSlider.length>0){pSlider.slick({autoplay:true,autoplaySpeed:3000,adaptiveHeight:true,speed:800,mobileFirst:true,slidesToShow:1,dots:true,arrows:false,prevArrow:'<i class="fontello-left-open slick-prev"></i>',nextArrow:'<i class="fontello-right-open slick-next"></i>',responsive:[{breakpoint:560,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:2}},{breakpoint:1700,settings:{slidesToShow:5,slidesToScroll:2}}]});};};/* lightbox
	================================================== */function _fancybox(){var galleryElement=$("a[data-fancybox]");if(galleryElement.length>0){$("[data-fancybox]").fancybox({buttons:['slideShow','fullScreen','thumbs',// 'share',
//'download',
//'zoom',
'close'],loop:true,protect:true,wheel:false,transitionEffect:"tube",fixedContentPos:!1// new
});}};/* accordion
	================================================== */function _accordion(){var oAccordion=$('.accordion-container');if(oAccordion.length>0){var oAccItem=oAccordion.find('.accordion-item'),oAccTrigger=oAccordion.find('.accordion-toggler');oAccordion.each(function(){$(this).find('.accordion-item:eq(0)').addClass('active');});oAccTrigger.on('click',function(j){j.preventDefault();var $this=$(this),parent=$this.parent(),dropDown=$this.next('article');parent.toggleClass('active').siblings(oAccItem).removeClass('active').find('article').not(dropDown).slideUp();dropDown.stop(false,true).slideToggle();return false;});};};/* tabs
	================================================== */function _tabs(){var oTab=$('.tab-container');if(oTab.length>0){var oTabTrigger=oTab.find('nav a');oTab.each(function(){$(this).find('nav a:eq(0)').addClass('active').end().find('.tab-content__item:eq(0)').addClass('is-visible');});oTabTrigger.on('click',function(g){g.preventDefault();var $this=$(this),index=$this.index(),parent=$this.closest('.tab-container');$this.addClass('active').siblings(oTabTrigger).removeClass('active');parent.find('.tab-content__item.is-visible').removeClass('is-visible').end().find('.tab-content__item:eq('+index+')').addClass('is-visible');return false;});};};/* scrollTo
	================================================== */function _scrollTo(){var Link=$('a[href*="#"]').not('[href="#"]').not('[href="#0"]');Link.on('touchend click',function(e){$this=$(this),_offset=135;if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').stop().animate({scrollTop:target.offset().top-_offset},1000);}return false;};});};/* scroll to top
	================================================== */function _scrollTop(){var nBtnToTopWrap=document.getElementById('btn-to-top-wrap'),jBtnToTopWrap=$(nBtnToTopWrap);if(jBtnToTopWrap.length>0){var nBtnToTop=document.getElementById('btn-to-top'),jBtnToTop=$(nBtnToTop);jBtnToTop.on('click',function(e){e.preventDefault();$('body,html').stop().animate({scrollTop:0},1500);return false;});$window.on('scroll',function(e){var currentTop=$window.scrollTop();if(currentTop>jBtnToTop.data('visible-offset')){if(jBtnToTopWrap.is(":hidden")){jBtnToTopWrap.fadeIn();};}else{if(jBtnToTopWrap.is(":visible")){jBtnToTopWrap.fadeOut();};};});};};/* parallax
	================================================== */function _parallax(){if(device.desktop()){var el=document.querySelectorAll('.jarallax');jarallax(el,{type:'scroll',// scroll, scale, opacity, scroll-opacity, scale-opacity
zIndex:-20,onScroll:function onScroll(calculations){// console.log(calculations);
},// elementInViewport: $(this),
onInit:function onInit(){},onDestroy:function onDestroy(){},onCoverImage:function onCoverImage(){}});};};/* counters
	================================================== */function _counters(){var counter=$('.js-count');function _countInit(){counter.each(function(){var $this=$(this);if($this.is_on_screen()&&!$this.hasClass('animate')){$this.addClass('animate').countTo({from:0,speed:2000,refreshInterval:100});};});};if(counter.length>0){_countInit();$window.on('scroll',function(e){// _countInit();
if(requestAnimationFrame){requestAnimationFrame(function(){_countInit();});}else{_countInit();}});};};/* google map
	================================================== */function _g_map(){var maps=$('.g_map');if(maps.length>0){var apiKey=maps.attr('data-api-key');// console.log(apiKey)
$.getScript('http://maps.google.com/maps/api/js?key='+apiKey+' &sensor=false',function(data,textStatus,jqxhr){maps.each(function(){var current_map=$(this);var latlng=new google.maps.LatLng(current_map.attr('data-longitude'),current_map.attr('data-latitude'));var point=current_map.attr('data-marker');var myOptions={zoom:14,center:latlng,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,scrollwheel:false,draggable:true,panControl:false,zoomControl:false,disableDefaultUI:true};var stylez=[{featureType:"all",elementType:"all",stylers:[{saturation:-100// <-- THIS
}]}];var map=new google.maps.Map(current_map[0],myOptions);var mapType=new google.maps.StyledMapType(stylez,{name:"Grayscale"});map.mapTypes.set('Grayscale',mapType);map.setMapTypeId('Grayscale');var marker=new google.maps.Marker({map:map,icon:{size:new google.maps.Size(62,74),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,75),url:point},position:latlng});google.maps.event.addDomListener(window,"resize",function(){var center=map.getCenter();google.maps.event.trigger(map,"resize");map.setCenter(center);});});});};};/* contact form
	================================================== */function _contact_form(){var jForm=$('.js-contact-form');if(jForm.length>0){jForm.each(function(){var $this=$(this);$this.on('submit',function(){var $this=$(this),str=$this.serialize(),note=$this.find('.form__note');$.ajax({type:"POST",url:"send_mail/contact_process.php",data:str,success:function success(msg){var result='<span style="color: green"><br/>Your message has been sent. Thank you!</span>';note.html(result);$this.get(0).reset();setTimeout(function(){note.html('');},3000);},error:function error(err){var result='<span style="color: red"><br/>Your message not sent! Error: "'+err.responseJSON.message+'"</span>';note.html(result);},complete:function complete(){}});return false;});});};};/* object-fit polyfill
	================================================== */function _objectFit(){objectFitImages();};/* custom select
	================================================== */function _custom_select(){if($('.js-select').length>0){$('.js-select').niceSelect();};};$(document).ready(function(){/* top bar
		================================================== */_top_bar();/* choose lang
		================================================== */_choose_lang();/* intro_ slider
		================================================== */_intro_slider();/* posts slider
		================================================== */_posts_slider();/* testimonial
		================================================== */_testimonial();/* review
		================================================== */_review();/* word rotating
		================================================== */_word_rotating();/* screenshots slider
		================================================== */_screenshots_slider();/* feature slider
		================================================== */_feature_slider();/* projects slider
		================================================== */_projects_slider();/* posts slider
		================================================== */_events_slider();/* lightbox
		================================================== */_fancybox();/* accordion
		================================================== */_accordion();/* tabs
		================================================== */_tabs();/* scrollTo
		================================================== */_scrollTo();/* scroll to top
		================================================== */_scrollTop();/* parallax
		================================================== */_parallax();/* counters
		================================================== */_counters();/* object-fit polyfill
		================================================== */_objectFit();/* contact form
		================================================== */_contact_form();/* custom select
		================================================== */_custom_select();});$window.on('load',function(){var jMasonry=$('.js-masonry');if(jMasonry.length>0){jMasonry.masonry('layout');}/* google map
		================================================== */_g_map();});$.fn.is_on_screen=function(){var viewport={top:$window.scrollTop(),left:$window.scrollLeft()};viewport.right=viewport.left+$window.width();viewport.bottom=viewport.top+$window.height();var bounds=this.offset();bounds.right=bounds.left+this.outerWidth();bounds.bottom=bounds.top+this.outerHeight();return!(viewport.right<bounds.left||viewport.left>bounds.right||viewport.bottom<bounds.top||viewport.top>bounds.bottom);};/* smartresize
	================================================== */(function($,sr){// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
var debounce=function debounce(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap)func.apply(obj,args);timeout=null;};if(timeout)clearTimeout(timeout);else if(execAsap)func.apply(obj,args);timeout=setTimeout(delayed,threshold||100);};};// smartresize 
jQuery.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr);};})(jQuery,'smartresize');})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./resources/js/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\API\blog\resources\js\main.js */"./resources/js/main.js");


/***/ })

/******/ });