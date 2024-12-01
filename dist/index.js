"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=u(function(x,t){
var q=require('@stdlib/blas-ext-base-gsumkbn/dist');function v(r,e,n){return r<=0?NaN:r===1||n===0?e[0]:q(r,e,n)/r}t.exports=v
});var b=u(function(l,s){
var o=require('@stdlib/blas-ext-base-gsumkbn/dist').ndarray;function f(r,e,n,a){return r<=0?NaN:r===1||n===0?e[a]:o(r,e,n,a)/r}s.exports=f
});var m=u(function(O,k){
var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=i(),y=b();p(c,"ndarray",y);k.exports=c
});var d=m();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
