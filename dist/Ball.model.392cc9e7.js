parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awJe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Settings=void 0;var e=document.getElementById("gameContainer");e.width=window.innerWidth,e.height=window.innerHeight;var t={gameContainer:document.getElementById("gameContainer"),canvasWidth:e.width,canvasHeight:e.height,ctx:e.getContext("2d")};exports.Settings=t;
},{}],"rqNH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../View/Settings.view");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function s(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}var a=function(){function i(){e(this,i),this.x=500,this.y=t.Settings.canvasHeight/2,this.x_speed=2,this.y_speed=-15,this.color="",this.mass=this.ballRadius*this.ballRadius*this.ballRadius,this.ballRadius=10}return s(i,[{key:"draw",value:function(){var e=t.Settings.ctx;e.beginPath(),e.arc(this.x,this.y,this.ballRadius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.closePath()}},{key:"movement",value:function(){this.x+=this.x_speed,this.y+=this.y_speed}},{key:"start",value:function(){this.draw(),this.movement()}}]),i}(),n=a;exports.default=n;
},{"../View/Settings.view":"awJe"}]},{},["rqNH"], null);
//# sourceMappingURL=Ball.model.392cc9e7.js.map