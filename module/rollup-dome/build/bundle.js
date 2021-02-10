(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var userInfo = {
  name: 'hxl'
};

function fn1() {
  console.log('fn1');
}

function fn2() {
  console.log('fn2');
}

console.log(userInfo);
fn1();
fn2();

})));
