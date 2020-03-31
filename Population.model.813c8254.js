parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awJe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Settings=void 0;var e=document.getElementById("gameContainer");e.width=window.innerWidth,e.height=window.innerHeight;var t={gameContainer:document.getElementById("gameContainer"),canvasWidth:e.width,canvasHeight:e.height,ctx:e.getContext("2d")};exports.Settings=t;
},{}],"zBCY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../View/Settings.view");function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function s(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function e(t,i,e){return i&&s(t.prototype,i),e&&s(t,e),t}var l=t.Settings.canvasWidth,a=t.Settings.canvasHeight,h=function(){function s(e,a,h){i(this,s),this.id=Math.random(),this.lifeSpan=2900,a?(this.dna=e,this.newGenes=!0,this.x=400):(this.dna=e,this.dna.creatingGenes(this.lifeSpan),this.newGenes=!1,this.x=Math.floor(Math.random()*l)),this.y=t.Settings.canvasHeight-25,this.x_step=15,this.height=15,this.width=180,this.color=this.changeColor(),this.dead=!1,this.ball=h,this.index=0,this.lifes=1,this.score=0,this.ballHit=0,this.fitness=0,this.distanceFromBall=0,this.deathPenalty=0}return e(s,[{key:"calcFitness",value:function(){this.distanceFromBall=Math.abs(this.distanceFromBall),this.fitness=this.score*this.ballHit/this.deathPenalty}},{key:"walls_collision",value:function(){var t=this.ball.y+this.ball.y_speed-this.ball.ballRadius<0,i=this.ball.x+this.ball.x_speed+this.ball.ballRadius>l,s=this.ball.x+this.ball.x_speed-this.ball.ballRadius<0,e=this.ball.y+this.ball.y_speed+this.ball.ballRadius>a;switch(!0){case t:this.ball.y_speed=-this.ball.y_speed;break;case s:case i:this.ball.x_speed=-this.ball.x_speed;break;case e:this.ball.y_speed=-this.ball.y_speed,this.lifes-=1,0===this.lifes&&(this.dead=!0,this.calcFitness())}}},{key:"player_collision",value:function(){this.ball.y+this.ball.y_speed+this.ball.ballRadius>=this.y+this.height&&this.ball.x+this.ball.ballRadius<this.x+this.width&&this.x<this.ball.x+this.ball.ballRadius&&(this.ball.y_speed=-this.ball.y_speed,this.ballHit++)}},{key:"drawPlayer",value:function(){var i=t.Settings.ctx;i.beginPath(),i.rect(this.x,a-this.height,this.width,this.height),i.fill(),i.closePath(),i.fillStyle=this.color,this.ball.color=this.color}},{key:"drawBallLine",value:function(){var i=t.Settings.ctx;i.moveTo(this.x+this.width/2,this.y+this.height),i.lineTo(this.ball.x,this.ball.y),i.strokeStyle=this.color,i.stroke()}},{key:"think",value:function(){0==this.dna.genes[this.index]?this.left():this.right()}},{key:"left",value:function(){!(this.x>0)||(this.x-=this.x_step)}},{key:"right",value:function(){!(this.x+this.width<l)||(this.x+=this.x_step)}},{key:"changeColor",value:function(){var t=127*Math.floor(3*Math.random()),i=127*Math.floor(3*Math.random()),s=127*Math.floor(3*Math.random());return"rgba(".concat(t,", ").concat(i,", ").concat(s,", ").concat(Math.random())}},{key:"control",value:function(t){switch(t.key){case"a":this.left();break;case"d":this.right()}}},{key:"getDNA",value:function(){return this.dna}},{key:"start",value:function(){this.newGenes||this.dna.creatingGenes(this.lifeSpan),this.drawPlayer(),this.ball.start(),this.player_collision(),this.walls_collision(),this.think(),this.score++,this.lifeSpan--,this.index++}}]),s}(),n=h;exports.default=n;
},{"../View/Settings.view":"awJe"}],"u6tv":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.DNA=void 0;var r=function(){function n(t){e(this,n),this.genes=t?new Array(t):[]}return t(n,[{key:"creatingGenes",value:function(e){for(var n=0;n<e;n++)this.genes[n]=Math.floor(2*Math.random())}},{key:"crossOver",value:function(e){for(var t=new n(this.genes.length),r=Math.floor(Math.random()*this.genes.length),a=0;a<this.genes.length;a++)a>r?t.genes[a]=this.genes[a]:a<r&&(t.genes[a]=e.genes[a]);return t}},{key:"applyMutate",value:function(){return Math.floor(2*Math.random())}},{key:"mutate",value:function(e){for(var n=0;n<this.genes.length;n++)Math.random()<e&&(this.genes[n]=this.applyMutate())}}]),n}();exports.DNA=r;
},{}],"rqNH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../View/Settings.view");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function s(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}var a=function(){function i(){e(this,i),this.x=500,this.y=t.Settings.canvasHeight/2,this.x_speed=2,this.y_speed=-15,this.color="",this.mass=this.ballRadius*this.ballRadius*this.ballRadius,this.ballRadius=10}return s(i,[{key:"draw",value:function(){var e=t.Settings.ctx;e.beginPath(),e.arc(this.x,this.y,this.ballRadius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.closePath()}},{key:"movement",value:function(){this.x+=this.x_speed,this.y+=this.y_speed}},{key:"start",value:function(){this.draw(),this.movement()}}]),i}(),n=a;exports.default=n;
},{"../View/Settings.view":"awJe"}],"RX0X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=a(require("./Player.model")),e=require("./DNA.model"),i=a(require("./Ball.model"));function a(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}var l=function(){function a(){n(this,a),this.total=100,this.matingPool=[],this.avgFitness=0,this.bestPlayer={fitness:0},this.worstFitness=0,this.generation=1,this.mutationRatio=.05,this.mostBallHit=0,this.deadPopulation=[],this.population=[];for(var o=0;o<this.total;o++)this.population[o]=new t.default(new e.DNA,!1,new i.default)}return r(a,[{key:"setMostBallHit",value:function(){var t=!0,e=!1,i=void 0;try{for(var a,n=this.deadPopulation[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var o=a.value;o.ballHit>this.mostBallHit&&(this.mostBallHit=o.ballHit)}}catch(r){e=!0,i=r}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}},{key:"nextGeneration",value:function(){console.log("Next generation"),this.generation++;for(var e=0;e<this.total;e++){var a=this.acceptReject(),n=this.acceptReject(),o=a.getDNA(),r=n.getDNA(),l=o.crossOver(r);l.mutate(this.mutationRatio),this.population[e]=new t.default(l,!0,new i.default)}}},{key:"pickMatingPool",value:function(){this.matingPool=[];for(var t=0;t<this.total;t++)for(var e=this.deadPopulation[t].fitness,i=0;i<e;i++)this.matingPool.push(this.deadPopulation[i])}},{key:"acceptReject",value:function(){for(var t=0;;){var e=Math.floor(Math.random()*this.total),i=this.deadPopulation[e];if(Math.floor(Math.random()*this.bestPlayer.fitness)<i.fitness)return i;if(++t>5e3)return}}},{key:"getMaxFitness",value:function(){var t=!0,e=!1,i=void 0;try{for(var a,n=this.deadPopulation[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var o=a.value;o.fitness>this.bestPlayer.fitness&&(this.bestPlayer=o)}}catch(r){e=!0,i=r}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}},{key:"getAvgFitnessPerGen",value:function(){for(var t=0,e=0;e<this.deadPopulation.length;e++)t+=this.deadPopulation[e].fitness;this.avgFitness=t/this.deadPopulation.length}},{key:"getWorstFitness",value:function(){for(var t=this.deadPopulation[0].fitness,e=0;e<this.deadPopulation.length;e++)t<this.deadPopulation[e].fitness&&(this.worstFitness=this.deadPopulation[e].fitness)}},{key:"calculateFitness",value:function(){var t=!0,e=!1,i=void 0;try{for(var a,n=this.deadPopulation[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){a.value.calcFitness()}}catch(o){e=!0,i=o}finally{try{t||null==n.return||n.return()}finally{if(e)throw i}}}}]),a}(),s=l;exports.default=s;
},{"./Player.model":"zBCY","./DNA.model":"u6tv","./Ball.model":"rqNH"}]},{},["RX0X"], null)
//# sourceMappingURL=Population.model.813c8254.js.map