// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@esm/index.mjs";function d(t,r){var i;return s(t)||s(r)||r<0?NaN:0===r?t<0?0:1:t<0?0:(i=n(r,2),1-e(-n(t,2)/(2*i)))}function m(t){var d;return s(t)||t<0?r(NaN):0===t?i(0):(d=n(t,2),function(t){if(s(t))return NaN;if(t<0)return 0;return 1-e(-n(t,2)/(2*d))})}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
