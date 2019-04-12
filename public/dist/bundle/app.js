/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([292,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {
	FEEDS_RECEIVED: 'FEEDS_RECEIVED'
	// USERS_RECEIVED: 		'USERS_RECEIVED',
	// USER_CREATED: 			'USER_CREATED',
	// USER_LOGGED_IN: 		'USER_LOGGED_IN',
	// CURRENT_USER_RECEIVED: 	'CURRENT_USER_RECEIVED'

};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

	return _react2.default.createElement(
		_reactRedux.Provider,
		{ store: props.store },
		props.component
	);
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(294);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pages = __webpack_require__(298);

var _reactRedux = __webpack_require__(93);

var _index = __webpack_require__(513);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _index2.default.configure(null) },
	_react2.default.createElement(_pages.Home, null)
);

_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Home = undefined;

var _Home = __webpack_require__(299);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(300);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'wrapper' },
                _react2.default.createElement(
                    'div',
                    { id: 'main' },
                    _react2.default.createElement(
                        'div',
                        { className: 'inner' },
                        _react2.default.createElement(
                            'section',
                            { id: 'banner' },
                            _react2.default.createElement(
                                'div',
                                { className: 'content' },
                                _react2.default.createElement(
                                    'header',
                                    null,
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Welcome to NewsFeed!'
                                    ),
                                    _react2.default.createElement('hr', null),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'A free and fully responsive site template'
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    null,
                                    'Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.'
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'actions' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            { href: '#', className: 'button big' },
                                            'Learn More'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_components.Sidebar, null)
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Sidebar = undefined;

var _Sidebar = __webpack_require__(301);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Sidebar = _Sidebar2.default;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _turbo = __webpack_require__(97);

var _turbo2 = _interopRequireDefault(_turbo);

var _reactRedux = __webpack_require__(93);

var _actions = __webpack_require__(505);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.state = {
            feeds: [],
            feed: {
                name: '',
                url: ''
            }
        };
        return _this;
    }

    _createClass(Sidebar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchFeeds(null).then(function (data) {
                console.log(data);
            }).catch(function (err) {
                alert(err);
            });
        }
    }, {
        key: 'updateFeed',
        value: function updateFeed(field, event) {
            var feed = Object.assign({}, this.state.feed);
            feed[field] = event.target.value;

            this.setState({
                feed: feed
            });
        }
    }, {
        key: 'addFeed',
        value: function addFeed(event) {
            var _this2 = this;

            event.preventDefault();
            //TODO: Create bk endpoint in order to persist the data
            var turboClient = (0, _turbo2.default)({
                site_id: '5cadfcfd5d20970015d8c4a4'
            });

            turboClient.create('feed', this.state.feed).then(function (data) {
                console.log(data);
                var feeds = Object.assign([], _this2.state.feeds);
                feeds.unshift(data);
                _this2.setState({ feeds: feeds });
            }).catch(function (err) {
                alert(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var feeds = this.props.feed.all || [];

            return _react2.default.createElement(
                'div',
                { id: 'sidebar' },
                _react2.default.createElement(
                    'div',
                    { className: 'inner' },
                    _react2.default.createElement(
                        'section',
                        { id: 'search', className: 'alt' },
                        _react2.default.createElement(
                            'form',
                            { method: 'post', action: '#' },
                            _react2.default.createElement('input', { onChange: this.updateFeed.bind(this, 'name'), type: 'text', name: 'query', id: 'query', placeholder: 'Feed Name' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('input', { onChange: this.updateFeed.bind(this, 'url'), type: 'text', name: 'query', id: 'query', placeholder: 'Feed URL' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'button',
                                { onClick: this.addFeed.bind(this) },
                                'Add Feed'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'nav',
                        { id: 'menu' },
                        _react2.default.createElement(
                            'header',
                            { className: 'major' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                'My feeds'
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            null,
                            feeds.map(function (feed, i) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: feed.id },
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        feed.name
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        feed: state.feed
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        fetchFeeds: function fetchFeeds(params) {
            return dispatch(_actions2.default.fetchFeeds(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Sidebar);

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 160,
	"./ar-dz": 161,
	"./ar-dz.js": 161,
	"./ar-kw": 162,
	"./ar-kw.js": 162,
	"./ar-ly": 163,
	"./ar-ly.js": 163,
	"./ar-ma": 164,
	"./ar-ma.js": 164,
	"./ar-sa": 165,
	"./ar-sa.js": 165,
	"./ar-tn": 166,
	"./ar-tn.js": 166,
	"./ar.js": 160,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bm": 170,
	"./bm.js": 170,
	"./bn": 171,
	"./bn.js": 171,
	"./bo": 172,
	"./bo.js": 172,
	"./br": 173,
	"./br.js": 173,
	"./bs": 174,
	"./bs.js": 174,
	"./ca": 175,
	"./ca.js": 175,
	"./cs": 176,
	"./cs.js": 176,
	"./cv": 177,
	"./cv.js": 177,
	"./cy": 178,
	"./cy.js": 178,
	"./da": 179,
	"./da.js": 179,
	"./de": 180,
	"./de-at": 181,
	"./de-at.js": 181,
	"./de-ch": 182,
	"./de-ch.js": 182,
	"./de.js": 180,
	"./dv": 183,
	"./dv.js": 183,
	"./el": 184,
	"./el.js": 184,
	"./en-SG": 185,
	"./en-SG.js": 185,
	"./en-au": 186,
	"./en-au.js": 186,
	"./en-ca": 187,
	"./en-ca.js": 187,
	"./en-gb": 188,
	"./en-gb.js": 188,
	"./en-ie": 189,
	"./en-ie.js": 189,
	"./en-il": 190,
	"./en-il.js": 190,
	"./en-nz": 191,
	"./en-nz.js": 191,
	"./eo": 192,
	"./eo.js": 192,
	"./es": 193,
	"./es-do": 194,
	"./es-do.js": 194,
	"./es-us": 195,
	"./es-us.js": 195,
	"./es.js": 193,
	"./et": 196,
	"./et.js": 196,
	"./eu": 197,
	"./eu.js": 197,
	"./fa": 198,
	"./fa.js": 198,
	"./fi": 199,
	"./fi.js": 199,
	"./fo": 200,
	"./fo.js": 200,
	"./fr": 201,
	"./fr-ca": 202,
	"./fr-ca.js": 202,
	"./fr-ch": 203,
	"./fr-ch.js": 203,
	"./fr.js": 201,
	"./fy": 204,
	"./fy.js": 204,
	"./ga": 205,
	"./ga.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./gu": 209,
	"./gu.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it-ch": 218,
	"./it-ch.js": 218,
	"./it.js": 217,
	"./ja": 219,
	"./ja.js": 219,
	"./jv": 220,
	"./jv.js": 220,
	"./ka": 221,
	"./ka.js": 221,
	"./kk": 222,
	"./kk.js": 222,
	"./km": 223,
	"./km.js": 223,
	"./kn": 224,
	"./kn.js": 224,
	"./ko": 225,
	"./ko.js": 225,
	"./ku": 226,
	"./ku.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mn": 236,
	"./mn.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 238,
	"./ms-my": 239,
	"./ms-my.js": 239,
	"./ms.js": 238,
	"./mt": 240,
	"./mt.js": 240,
	"./my": 241,
	"./my.js": 241,
	"./nb": 242,
	"./nb.js": 242,
	"./ne": 243,
	"./ne.js": 243,
	"./nl": 244,
	"./nl-be": 245,
	"./nl-be.js": 245,
	"./nl.js": 244,
	"./nn": 246,
	"./nn.js": 246,
	"./pa-in": 247,
	"./pa-in.js": 247,
	"./pl": 248,
	"./pl.js": 248,
	"./pt": 249,
	"./pt-br": 250,
	"./pt-br.js": 250,
	"./pt.js": 249,
	"./ro": 251,
	"./ro.js": 251,
	"./ru": 252,
	"./ru.js": 252,
	"./sd": 253,
	"./sd.js": 253,
	"./se": 254,
	"./se.js": 254,
	"./si": 255,
	"./si.js": 255,
	"./sk": 256,
	"./sk.js": 256,
	"./sl": 257,
	"./sl.js": 257,
	"./sq": 258,
	"./sq.js": 258,
	"./sr": 259,
	"./sr-cyrl": 260,
	"./sr-cyrl.js": 260,
	"./sr.js": 259,
	"./ss": 261,
	"./ss.js": 261,
	"./sv": 262,
	"./sv.js": 262,
	"./sw": 263,
	"./sw.js": 263,
	"./ta": 264,
	"./ta.js": 264,
	"./te": 265,
	"./te.js": 265,
	"./tet": 266,
	"./tet.js": 266,
	"./tg": 267,
	"./tg.js": 267,
	"./th": 268,
	"./th.js": 268,
	"./tl-ph": 269,
	"./tl-ph.js": 269,
	"./tlh": 270,
	"./tlh.js": 270,
	"./tr": 271,
	"./tr.js": 271,
	"./tzl": 272,
	"./tzl.js": 272,
	"./tzm": 273,
	"./tzm-latn": 274,
	"./tzm-latn.js": 274,
	"./tzm.js": 273,
	"./ug-cn": 275,
	"./ug-cn.js": 275,
	"./uk": 276,
	"./uk.js": 276,
	"./ur": 277,
	"./ur.js": 277,
	"./uz": 278,
	"./uz-latn": 279,
	"./uz-latn.js": 279,
	"./uz.js": 278,
	"./vi": 280,
	"./vi.js": 280,
	"./x-pseudo": 281,
	"./x-pseudo.js": 281,
	"./yo": 282,
	"./yo.js": 282,
	"./zh-cn": 283,
	"./zh-cn.js": 283,
	"./zh-hk": 284,
	"./zh-hk.js": 284,
	"./zh-tw": 285,
	"./zh-tw.js": 285
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 491;

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(288);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(506);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	fetchFeeds: function fetchFeeds(params) {
		return function (dispatch) {
			return dispatch(_utils.TurboClient.getRequest('feed', params, _constants2.default.FEEDS_RECEIVED));
		};
	}

	/*
  // The following are examples of AsyncAction creators (https://redux.js.org/advanced/asyncactions):
  // Feel free to remove and use your own
 
 createUser: (params) => {
 	return dispatch => {
 		return dispatch(HTTPClient.postAsync({
 			endpoint: '/api/profile',
 			params: params,
 			headers: null,
 			actionType: constants.USER_CREATED
 		}))
 	}
 },
   // Syncronous Action Creator example:
  userAdded: (user) => {
    return {
      user: user,
      actionType: constants.USER_CREATED
    }
  }
   */

};

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderComponents = exports.ServerEntry = exports.HTTPClient = exports.TurboClient = undefined;

var _HTTPClient = __webpack_require__(507);

var _HTTPClient2 = _interopRequireDefault(_HTTPClient);

var _ServerEntry = __webpack_require__(289);

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

var _renderComponents = __webpack_require__(508);

var _renderComponents2 = _interopRequireDefault(_renderComponents);

var _TurboClient = __webpack_require__(511);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.HTTPClient = _HTTPClient2.default;
exports.ServerEntry = _ServerEntry2.default;
exports.renderComponents = _renderComponents2.default;

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(3);

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(5);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(endpoint, params, headers) {
	if (headers == null) headers = {};

	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.get(endpoint).query(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var post = function post(endpoint, params, headers) {
	if (headers == null) headers = {};

	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.post(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var put = function put(endpoint, params, headers) {
	if (headers == null) headers = {};

	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.put(endpoint).send(params).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

var deleteReq = function deleteReq(endpoint, params, headers) {
	if (headers == null) headers = {};

	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.delete(endpoint).set(headers).end(function (err, res) {
			if (err) {
				reject(err);
				return;
			}

			resolve(res.body);
		});
	});
};

exports.default = {
	get: get,
	// getAsync: (endpoint, params, headers, actionType) => {
	getAsync: function getAsync(pkg) {
		return function (dispatch) {
			return get(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	post: post,
	postAsync: function postAsync(pkg) {
		return function (dispatch) {
			return post(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	put: put,
	putAsync: function putAsync(pkg) {
		return function (dispatch) {
			return put(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	delete: deleteReq,
	deleteAsync: function deleteAsync(pkg) {
		return function (dispatch) {
			return deleteReq(pkg.endpoint, pkg.params, pkg.headers).then(function (response) {
				if (pkg.actionType != null) {
					dispatch({
						type: pkg.actionType,
						data: response
					});
				}

				return response;
			}).catch(function (err) {
				throw err;
			});
		};
	}
};

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(509);

var _server2 = _interopRequireDefault(_server);

var _ServerEntry = __webpack_require__(289);

var _ServerEntry2 = _interopRequireDefault(_ServerEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (initialState, component) {
	var app = _react2.default.createElement(component);
	var provider = _react2.default.createElement(_ServerEntry2.default, { component: app, store: initialState });

	return {
		react: _server2.default.renderToString(provider),
		initial: JSON.stringify(initialState.getState())
	};
};

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(97);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(512);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var getRequest = function getRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var putRequest = function putRequest(resource, entity, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var createUser = function createUser(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var login = function login(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var currentUser = function currentUser(actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var uploadFile = function uploadFile(file) {
	return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

exports.default = {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest,
	createUser: createUser,
	login: login,
	currentUser: currentUser,
	uploadFile: uploadFile

};

/***/ }),

/***/ 512:
/***/ (function(module) {

module.exports = {"name":"newsfeed","version":"0.0.0","server":false,"private":true,"scripts":{"start":"node ./bin/www","dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"accepts":"^1.3.5","array-flatten":"1.1.1","bluebird":"^3.5.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"^1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","cross-env":"^5.1.4","debug":"2.6.9","depd":"^1.1.2","dotenv":"^5.0.1","encodeurl":"^1.0.2","escape-html":"^1.0.3","etag":"^1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"^1.1.2","moment":"^2.20.1","on-finished":"^2.3.0","parseurl":"^1.3.2","path-to-regexp":"0.1.7","proxy-addr":"^2.0.3","qs":"6.5.1","range-parser":"^1.2.0","react":"^16.4.2","react-bootstrap":"^0.32.1","react-dom":"^16.4.2","react-dropzone":"^4.2.8","react-redux":"^5.0.7","redux":"^4.0.0","redux-thunk":"^2.3.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"^1.4.0","superagent":"^3.8.2","turbo360":"^1.8.61","type-is":"^1.6.16","utils-merge":"1.0.1","vary":"^1.1.2","vertex360":"latest"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","chai":"^4.1.2","chai-http":"^3.0.0","gulp":"^3.9.1","gulp-6to5":"^3.0.0","gulp-autoprefixer":"^5.0.0","gulp-clean-css":"^3.9.2","gulp-concat":"^2.6.1","gulp-less":"^4.0.0","gulp-rename":"^1.2.2","gulp-sass":"^3.1.0","gulp-uglify":"^3.0.0","json-loader":"^0.5.7","mocha":"^5.0.1","mocha-jscs":"^5.0.1","mocha-jshint":"^2.3.1","nodemon":"^1.17.1","rimraf":"^2.6.2","uglifyjs-webpack-plugin":"^1.2.2","webpack":"^4.1.1","webpack-cli":"^3.1.2"},"deploy":["."],"format":"vertex","app":"5cadfcfd5d20970015d8c4a4"};

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(95);

var _reduxThunk = __webpack_require__(514);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(515);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			feed: _reducers.feedReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.feedReducer = undefined;

var _feedReducer = __webpack_require__(516);

var _feedReducer2 = _interopRequireDefault(_feedReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.feedReducer = _feedReducer2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             	Export your reducers here
                                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                             */

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(288);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	all: null
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.FEEDS_RECEIVED:
			console.log('feeds_received = ', action.data);
			newState['all'] = action.data;
			return newState;

		default:
			return state;
	}
};

/***/ })

/******/ });
//# sourceMappingURL=app.map