"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var o=void 0
o=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,n.default)(o,r.default.modulePrefix),e.default=o}),define("dummy/index",["exports","ember-cli-localforage"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/routes/application",["exports","ember-cli-localforage"],function(e,t){function n(e){return function(){var t=e.apply(this,arguments)
return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),u=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)})
e(u)}return r("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({setupController:function(){var e=n(regeneratorRuntime.mark(function e(){var n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.default.getItem("total")
case 2:n=e.sent,this.controller.set("total",n||0)
case 4:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}(),actions:{addToTotal:function(){var e=n(regeneratorRuntime.mark(function e(){var n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.controller.get("total"),this.controller.set("total",++n),e.next=4,t.default.setItem("total",n)
case 4:case"end":return e.stop()}},e,this)}))
return function(){return e.apply(this,arguments)}}()}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"uxCJhihm",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Ember CLI LocalForage"],[8],[0,"\\n\\n"],[6,"p"],[7],[0,"This persists across refreshes using Local Forage"],[8],[0,"\\n"],[6,"br"],[7],[8],[0,"\\n"],[6,"p"],[7],[6,"button"],[3,"action",[[19,0,[]],"addToTotal"]],[7],[0,"Add To Total"],[8],[8],[0,"\\n"],[6,"br"],[7],[8],[0,"\\n"],[6,"p"],[7],[0,"Total: "],[1,[18,"total"],false],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
