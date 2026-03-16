"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=n(function(h,f){
var i=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist'),a=require('@stdlib/math-base-special-pow/dist');function y(e,r){var t;return i(e)||i(r)||r<0?NaN:r===0?e<0?0:1:e<0?0:(t=a(r,2),1-N(-a(e,2)/(2*t)))}f.exports=y
});var s=n(function(j,q){
var d=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,o=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-pow/dist');function F(e){var r;if(o(e)||e<0)return d(NaN);if(e===0)return w(0);return r=v(e,2),t;function t(u){return o(u)?NaN:u<0?0:1-l(-v(u,2)/(2*r))}}q.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),R=s();O(p,"factory",R);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
