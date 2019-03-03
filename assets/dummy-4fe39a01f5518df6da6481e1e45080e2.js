"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r){var o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,n.default)(o,r.default.modulePrefix)
var a=o
e.default=a}),define("dummy/index",["exports","ember-cli-localforage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var r=n
e.default=r}),define("dummy/routes/application",["exports","ember-cli-localforage"],function(e,t){function n(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(d){return void n(d)}l.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments
return new Promise(function(o,a){var i=e.apply(t,r)
function l(e){n(i,o,a,l,u,"next",e)}function u(e){n(i,o,a,l,u,"throw",e)}l(void 0)})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Route.extend({setupController:function(){var e=r(regeneratorRuntime.mark(function e(){var n,r=arguments
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._super.apply(this,r),e.next=3,t.default.getItem("total")
case 3:n=e.sent,this.controller.set("total",n||0)
case 5:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),actions:{addToTotal:function(){var e=r(regeneratorRuntime.mark(function e(){var n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.controller.get("total"),this.controller.set("total",++n),e.next=4,t.default.setItem("total",n)
case 4:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()}})
e.default=o}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"DvI77AGW",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Ember CLI LocalForage"],[10],[0,"\\n\\n"],[7,"p"],[9],[0,"This persists across refreshes using Local Forage"],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"p"],[9],[7,"button"],[9],[0,"Add To Total"],[3,"action",[[22,0,[]],"addToTotal"]],[10],[10],[0,"\\n"],[7,"br"],[9],[10],[0,"\\n"],[7,"p"],[9],[0,"Total: "],[1,[21,"total"],false],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
