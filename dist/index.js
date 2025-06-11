"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=n(function(l,u){
var b=require('@stdlib/blas-ext-base-gsumkbn/dist').ndarray;function d(r,e,a,c){return r<=0?NaN:b(r,e,a,c)/r}u.exports=d
});var i=n(function(O,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),k=t();function m(r,e,a){return k(r,e,a,f(r,a))}s.exports=m
});var v=n(function(R,q){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),p=t();y(o,"ndarray",p);q.exports=o
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
