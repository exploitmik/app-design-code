!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r,t){},function(e,r,t){"use strict";t.r(r);var o,n;t(0);gsap.timeline().from(".hero__smartphone",{delay:1,duration:2,opacity:0,x:-80}).from(".hero__title",{duration:1,opacity:0,x:80},"-=1.5").from(".hero__action",{duration:.5,opacity:0,y:-20},"-=.8"),o=new ScrollMagic.Controller,(n=gsap.timeline()).from(".workflow__title",{duration:4,opacity:0,y:-100}).from(".workflow__wrapper",{duration:2,opacity:0,y:100,stagger:.8}).from(".workflow__figure",{duration:2,opacity:0,y:-50,stagger:.4}),new ScrollMagic.Scene({triggerElement:".workflow__content",duration:"90%",triggerHook:.8,reverse:!1}).setTween(n).addTo(o),function(){var e=new ScrollMagic.Controller,r=gsap.timeline();r.from(".offer__wrapper",{duration:5,opacity:0,y:-200}).from(".offer__smartphone",{duration:2,opacity:0,scale:2},"-=4"),new ScrollMagic.Scene({triggerElement:".offer__content",duration:"80%",triggerHook:.9,reverse:!1}).setTween(r).addTo(e)}(),function(){var e=new ScrollMagic.Controller,r=gsap.timeline();r.from(".feedback__title",{duration:5,opacity:0,y:200}).from(".feedback__description",{duration:5,opacity:0,y:200}),new ScrollMagic.Scene({triggerElement:".feedback__content",duration:"70%",triggerHook:1,reverse:!1}).setTween(r).addTo(e)}()}]);