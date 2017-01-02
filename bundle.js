require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var Row = React.createClass({
	displayName: 'Row',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'Row..needs more stuff'
		);
	}
});

exports['default'] = Row;
module.exports = exports['default'];

},{"react":undefined}],"grid8":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');
var Row = require('./Row');

var Grid8 = React.createClass({
	displayName: 'Grid8',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				'grid8..needs more stuff'
			),
			React.createElement(Row, null)
		);
	}
});

exports['default'] = Grid8;
module.exports = exports['default'];

},{"./Row":1,"react":undefined}]},{},[]);
