// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY;function w(r){return r===s||r===b}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var _=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var N=A&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return _.call(r);t=r[d],u=d,n=null!=(o=r)&&m.call(o,u);try{r[d]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[d]=t:delete r[d],e}:function(r){return _.call(r)},U="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var h,j="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(U&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I=h,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=P,V="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),t=n,r=(V&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,q={uint16:k,uint8:M};(Y=new q.uint16(1))[0]=4660;var C,z,B=52===new q.uint8(Y.buffer)[0];!0===B?(C=1,z=0):(C=0,z=1);var D={HIGH:C,LOW:z},J=new H(1),K=new I(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,n,t,e){return J[0]=r,n[e]=K[Q],n[e+t]=K[R],n}function Z(r){return X(r,[0,0],1,0)}c(Z,"assign",X);var $,rr,nr=!0===B?1:0,tr=new H(1),er=new I(tr.buffer);function or(r){return tr[0]=r,er[nr]}!0===B?($=1,rr=0):($=0,rr=1);var ur={HIGH:$,LOW:rr},ir=new H(1),ar=new I(ir.buffer),fr=ur.HIGH,cr=ur.LOW;function lr(r,n){return ar[fr]=r,ar[cr]=n,ir[0]}var yr=[0,0];function vr(r,n){var t,e;return Z.assign(r,yr,1,0),t=yr[0],t&=2147483647,e=or(n),lr(t|=e&=2147483648,yr[1])}function pr(r){return Math.abs(r)}function br(r,n,t,e){return l(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&pr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return br(r,[0,0],1,0)}),"assign",br);var sr=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||l(r)||w(r)?r:(br(r,sr,1,0),n+=sr[1],n+=function(r){var n=or(r);return(n=(2146435072&n)>>>20)-1023|0}(r=sr[0]),n<-1074?vr(0,r):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Z.assign(r,wr,1,0),t=wr[0],t&=2148532223,e*lr(t|=n+1023<<20,wr[1])))}function _r(r){var n;return l(r)||r===s?r:r===b?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return Ar(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function mr(r){return y(r)===r}function dr(r){return mr(r/2)}function Nr(r){return dr(r>0?r-1:r+1)}var Ur=Math.sqrt,gr=!0===B?0:1,hr=new H(1),jr=new I(hr.buffer);function Ir(r,n){return hr[0]=r,jr[gr]=n>>>0,hr[0]}function Or(r){return 0|r}var Sr=!0===B?1:0,Er=new H(1),Fr=new I(Er.buffer);function Hr(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}var Tr=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];var Lr=1e300,Mr=1e-300,Vr=[0,0],Wr=[0,0];function kr(r,n){var t,e,o,u,i,a,f,c,y,v,p,A,_,m;if(l(r)||l(n))return NaN;if(Z.assign(n,Vr,1,0),i=Vr[0],0===Vr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ur(r);if(-.5===n)return 1/Ur(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:pr(r)<1==(n===s)?0:s}(r,n)}if(Z.assign(r,Vr,1,0),u=Vr[0],0===Vr[1]){if(0===u)return function(r,n){return n===b?s:n===s?0:n>0?Nr(n)?r:0:Nr(n)?vr(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&Nr(n))return-1;if(w(r))return r===b?kr(-0,-n):n<0?0:s}if(r<0&&!1===mr(n))return(r-r)/(r-r);if(o=pr(r),t=2147483647&u|0,e=2147483647&i|0,f=i>>>31|0,a=(a=u>>>31|0)&&Nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&or(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Lr*Lr:a*Mr*Mr;if(t>1072693248)return 0===f?a*Lr*Lr:a*Mr*Mr;p=function(r,n){var t,e,o,u,i,a;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Wr,o)}else p=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p,b,s,w,A,_,m,d,N,U,g;return d=0,t<1048576&&(d-=53,t=or(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?U=0:N<767610?U=1:(U=0,d+=1,t-=1048576),i=Ir(o=(_=(n=Hr(n,t))-(c=Tr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Hr(0,e+=U<<18),A=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),f=Ir(f=3+(u=i*i)+(A+=(a=m*(_-i*f-i*(n-(f-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=Ir(y=(_=i*f)+(m=a*f+(A-(f-3-u))*o),0))+.9617966939259756*(m-(y-_))+Pr[U])-((b=Ir(b=(v=.9617967009544373*y)+p+(l=Gr[U])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Wr,o,t);if(A=(v=(n-(c=Ir(n,0)))*p[0]+n*p[1])+(y=c*p[0]),Z.assign(A,Vr,1,0),_=Or(Vr[0]),m=Or(Vr[1]),_>=1083179008){if(0!=(_-1083179008|m))return a*Lr*Lr;if(v+8008566259537294e-32>A-y)return a*Lr*Lr}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|m))return a*Mr*Mr;if(v<=A-y)return a*Mr*Mr}return A=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Hr(0,e)),r=Or(r=or(c=1-((c=(i=.6931471824645996*(u=Ir(u=t+n,0)))+(a=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Ar(c,l):Hr(c,r)}(_,y,v),a*A}function xr(r,n){var t;return l(r)||l(n)||n<0?NaN:0===n?r<0?0:1:r<0?0:(t=kr(n,2),1-_r(-kr(r,2)/(2*t)))}function Yr(r){return function(){return r}}function qr(r){return l(r)?Yr(NaN):function(n){if(l(n))return NaN;return n<r?0:1}}function Cr(r){var n;return l(r)||r<0?Yr(NaN):0===r?qr(0):(n=kr(r,2),function(r){if(l(r))return NaN;if(r<0)return 0;return 1-_r(-kr(r,2)/(2*n))})}c((function(r,n){return l(r)||l(n)?NaN:r<n?0:1}),"factory",qr),c(xr,"factory",Cr);export{xr as default,Cr as factory};
//# sourceMappingURL=mod.js.map
