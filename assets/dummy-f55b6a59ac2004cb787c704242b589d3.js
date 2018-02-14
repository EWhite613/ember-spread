"use strict";define("dummy/app",["exports","ember","ember-load-initializers","dummy/config/environment","dummy/resolver"],function(e,t,n,l,s){var o=t.default.Application,a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=o.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:s.default}),(0,n.default)(a,l.default.modulePrefix),e.default=a}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets","npm:highlight.js"],function(e,t,n,l){e.default=t.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,l=e.split("\n"),s=0;s<l.length;s++)(t=/^\s*/.exec(l[s]))&&(void 0===n||n>t[0].length)&&(n=t[0].length);return void 0!==n&&n>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+n+"}","g"),"$1")),e},source:t.default.computed("name",function(){return this._unindent((n.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){l.default.highlightBlock(this.get("element"))},language:t.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"coffee":return"coffeescript";case"hbs":return"htmlbars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem";case"ts":return"typescript"}})})}),define("dummy/helpers/hook",["exports","ember-hook/helpers/hook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hook",{enumerable:!0,get:function(){return t.hook}})}),define("dummy/initializers/component-prop-types",["exports","ember-prop-types/initializers/component-prop-types"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-hook/initialize",["exports","ember-hook/initializers/ember-hook/initialize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var s,o=n.default.exportApplicationGlobal;s="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),l[s]||(l[s]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[s]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("dummy/pods/components/normal-dot/component",["exports","ember","dummy/pods/components/normal-dot/template","ember-spread"],function(e,t,n,l){var s=t.default.Component,o=t.default.computed;e.default=s.extend(l.default,{classNames:["normal-dot"],layout:n.default,canvasSize:o("size",function(){return 2*Number(this.get("size"))}).readOnly()})}),define("dummy/pods/components/normal-dot/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wKYLmfg5",block:'{"statements":[["open-element","svg",[]],["dynamic-attr","width",["unknown",["canvasSize"]],null],["dynamic-attr","height",["unknown",["canvasSize"]],null],["dynamic-attr","viewBox",["concat",["0 0 ",["unknown",["canvasSize"]]," ",["unknown",["canvasSize"]]]]],["static-attr","xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],["flush-element"],["text","\\n  "],["open-element","circle",[]],["dynamic-attr","cx",["unknown",["size"]],null],["dynamic-attr","cy",["unknown",["size"]],null],["dynamic-attr","r",["unknown",["size"]],null],["dynamic-attr","fill",["unknown",["color"]],null],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["block",["if"],[["get",["speak"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","  "],["open-element","span",[]],["static-attr","class","speaking"],["flush-element"],["text","\\n    \\""],["append",["unknown",["speak"]],false],["text","\\"\\n  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/pods/components/normal-dot/template.hbs"}})}),define("dummy/pods/components/were-triangle/component",["exports","ember","dummy/pods/components/were-triangle/template","ember-spread"],function(e,t,n,l){var s=t.default.Component,o=t.default.computed;e.default=s.extend(l.default,{classNames:["were-triangle"],layout:n.default,canvasSize:o("size",function(){return 2*Number(this.get("size"))}).readOnly()})}),define("dummy/pods/components/were-triangle/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"nH+21Afm",block:'{"statements":[["open-element","svg",[]],["dynamic-attr","width",["unknown",["canvasSize"]],null],["dynamic-attr","height",["unknown",["canvasSize"]],null],["dynamic-attr","viewBox",["concat",["0 0 ",["unknown",["canvasSize"]]," ",["unknown",["canvasSize"]]]]],["static-attr","xmlns","http://www.w3.org/2000/svg","http://www.w3.org/2000/xmlns/"],["flush-element"],["text","\\n  "],["open-element","polygon",[]],["dynamic-attr","fill",["unknown",["color"]],null],["dynamic-attr","points",["concat",["0,0 ",["unknown",["canvasSize"]],",0 ",["unknown",["size"]],",",["unknown",["canvasSize"]]]]],["flush-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"],["open-element","div",[]],["static-attr","class","verbalization"],["flush-element"],["text","\\n"],["block",["if"],[["get",["speak"]]],null,1],["block",["if"],[["get",["onClick"]]],null,0],["close-element"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","    "],["open-element","button",[]],["static-attr","class","and-so-on"],["modifier",["action"],[["get",[null]],["get",["onClick"]]]],["flush-element"],["text","And so on..."],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","    "],["open-element","span",[]],["static-attr","class","speaking"],["flush-element"],["text","\\n      \\""],["append",["unknown",["speak"]],false],["text","\\"\\n    "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"dummy/pods/components/were-triangle/template.hbs"}})}),define("dummy/pods/index/controller",["exports","ember"],function(e,t){var n=t.default.Controller,l=t.default.computed;e.default=n.extend({dotOptions:t.default.Object.create({size:20,speak:"None of my shirts fit..."}),wereShape:"normal-dot",wereOptions:t.default.Object.create({size:40,speak:"Ok, this is getting ridiculous..."}),noises:["Grunt","growl"],verbalizedNoises:l("noises.[]",function(){var e="";return this.get("noises").forEach(function(t){e=e.concat(t+"...")}),e}).readOnly(),advancedOptions:l("verbalizedNoises",function(){return{color:"red",size:60,speak:this.get("verbalizedNoises"),onClick:this.actions.moreNoises.bind(this)}}).readOnly(),hauntShape:"normal-dot",hauntOptions:t.default.Object.create({size:16,color:"rgb(220, 36, 46)"}),actions:{change:function(){"red"===this.get("wereOptions.color")?(this.set("wereOptions.size",40),this.set("wereOptions.color","black"),this.set("wereOptions.speak","Ok, this is getting ridiculous...")):(this.set("wereOptions.size",60),this.set("wereOptions.color","red"),this.set("wereOptions.speak","...and when did I change color?"))},haunt:function(){"were-triangle"===this.get("hauntShape")?(this.set("hauntShape","normal-dot"),this.set("hauntOptions.speak",null)):(this.set("hauntShape","were-triangle"),this.set("hauntOptions.speak","01100111 01110010 01101111 01110111 01101100"))},transform:function(){"were-triangle"===this.get("wereShape")?(this.set("wereShape","normal-dot"),this.set("wereOptions.speak","...and when did I change color?")):(this.set("wereShape","were-triangle"),this.set("wereOptions.speak","...fooooooooooooobaaaaaaar..."))},moreNoises:function(){this.set("noises",["Snarf","snuffle"])}}})}),define("dummy/pods/index/route",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/pods/index/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"hSAcmh34",block:'{"statements":[["open-element","div",[]],["static-attr","class","story"],["flush-element"],["text","\\n  "],["open-element","h1",[]],["static-attr","class","creepy"],["flush-element"],["text","The legend of the "],["open-element","span",[]],["static-attr","class","red"],["flush-element"],["text","weredot"],["close-element"],["text"," of Ciena"],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    Once upon a time there was a normal dot.  Just an ordinary, nothing to see here, dot.\\n    It lived in an app with other little dots, punctuating i\'s and ending sentences as dots like to do.\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","code"],["flush-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["normal.hbs"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","demo"],["flush-element"],["text","\\n"],["text","      "],["append",["helper",["normal-dot"],null,[["size","speak"],[5,"Punctuation, huzzah!"]]],false],["text","\\n"],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    One day the dot decided to play in a new app.  The app was beautiful and filled with shapes the dot had\\n    never seen before.\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["append",["helper",["normal-dot"],null,[["size","speak"],[5,"Pointy?"]]],false],["text","\\n    "],["open-element","span",[]],["static-attr","style","width: 40px;"],["flush-element"],["close-element"],["text","\\n    "],["append",["helper",["were-triangle"],null,[["size","speak"],[20,"Round?"]]],false],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    The dot enjoyed exploring the new app, but it couldn\'t shake the feeling that something\\n    was wrong.  What the dot didn\'t realize was that the app was home to a powerful developer, who wanted\\n    to fill the world with triangles and hated dots.  Angered by the dot\'s intrusion the developer used\\n    a forbidden (private) API ("],["open-element","a",[]],["static-attr","href","http://emberjs.com/api/#method_defineProperty"],["flush-element"],["text","defineProperty"],["close-element"],["text"," and\\n    "],["open-element","a",[]],["static-attr","href","https://github.com/emberjs/ember.js/blob/v2.9.1/packages/ember-runtime/lib/system/core_object.js#L153"],["flush-element"],["text","setUnknownProperty"],["close-element"],["text",")\\n    and cursed the dot with a mixin, casting it out from the triangle app.\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["append",["helper",["code-snippet"],null,[["name"],["mixin.js"]]],false],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    The dot returned home and while it felt a little...bigger?...it was otherwise still a normal dot\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","code"],["flush-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["dot-options.hbs"]]],false],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["dot-options.js"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","demo"],["flush-element"],["text","\\n"],["text","      "],["append",["helper",["normal-dot"],null,[["options"],[["get",["dotOptions"]]]]],false],["text","\\n"],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    ...but as night fell the dot began to "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"change"]],["flush-element"],["text","CHANGE"],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","code"],["flush-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["were-dynamic.hbs"]]],false],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["were-options.js"]]],false],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["change.js"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","demo"],["flush-element"],["text","\\n"],["text","      "],["append",["helper",["component"],[["get",["wereShape"]]],[["options","spreadOptions"],[["get",["wereOptions"]],["helper",["hash"],null,[["source"],[["helper",["hash"],null,[["object","property"],[["get",[null]],"wereOptions"]]]]]]]]],false],["text","\\n"],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    An edge appeared, then another and another until the dot was quite different indeed.  In fact, it\\n    wasn\'t a dot at all anymore, it was a "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"transform"]],["flush-element"],["text","TRIANGLE"],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","code"],["flush-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["transform.js"]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    The now-triangle, unable to comprehend the transformation, was reduced to a near beast-like state\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","example"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","code"],["flush-element"],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["advanced-options.hbs"]]],false],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["advanced-options.js"]]],false],["text","\\n      "],["append",["helper",["code-snippet"],null,[["name"],["more-noises.js"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","demo"],["flush-element"],["text","\\n"],["text","      "],["append",["helper",["were-triangle"],null,[["options"],[["get",["advancedOptions"]]]]],false],["text","\\n"],["text","    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["open-element","p",[]],["flush-element"],["text","\\n    The next morning the dot returned to normal; however, it worried for the safety of the other dots and\\n    resolved to find a new home, far from the rest of its app.  That was the last anyone heard from the\\n    dot, but legend has it that when the builds are right, in the middle of the night, you can still hear\\n    the lone cry of the were-dot, "],["open-element","button",[]],["modifier",["action"],[["get",[null]],"haunt"]],["flush-element"],["text","HAUNTING"],["close-element"],["text"," Ciena.\\n  "],["close-element"],["text","\\n\\n  "],["open-element","div",[]],["static-attr","class","haunted"],["flush-element"],["text","\\n    "],["append",["helper",["component"],[["get",["hauntShape"]]],[["class","options"],["haunted-dot",["get",["hauntOptions"]]]]],false],["text","\\n    "],["open-element","svg",[]],["static-attr","width","400"],["static-attr","viewBox","0 0 75 25"],["flush-element"],["text","\\n      "],["open-element","g",[]],["flush-element"],["text","\\n        "],["open-element","g",[]],["flush-element"],["text","\\n          "],["open-element","path",[]],["static-attr","fill-rule","evenodd"],["static-attr","clip-rule","evenodd"],["static-attr","fill","#DC242E"],["static-attr","d","M12.9,8.6C11.7,8.3,9.9,8,8.8,8C3.9,8,0,10.9,0,16.2\\n          c0,5.4,3.8,8.2,8.3,8.2c1.3,0,3.4-0.3,4.6-0.9v-4.2c-1,0.4-2.2,0.6-3.2,0.6c-2,0-4.3-1.2-4.3-3.6c0-2.8,2.2-3.8,4.4-3.8\\n          c1,0,2.2,0.3,3.1,0.6V8.6z"],["flush-element"],["close-element"],["text","\\n          "],["open-element","path",[]],["static-attr","fill-rule","evenodd"],["static-attr","clip-rule","evenodd"],["static-attr","fill","#DC242E"],["static-attr","d","M61.4,24.3c2.1,0,3.5-0.8,4.6-2v1.6h5.3v-9c0-2.2-0.4-3.8-1.6-5\\n          c-1.2-1.2-3.2-1.9-6-1.9c-2.3,0-4.4,0.6-6.4,1.2v4c1.8-0.7,3.9-1,5.5-1c2.1,0,3.1,0.9,3.1,2.6v0.3c-0.9-0.3-2.3-0.6-3.8-0.6\\n          c-3.7,0-6.2,1.7-6.2,4.9v0.1C56.1,22.6,58.4,24.3,61.4,24.3z M63.3,20.8c-1.1,0-1.9-0.6-1.9-1.7v-0.1c0-1.2,0.9-1.9,2.5-1.9\\n          c0.8,0,1.5,0.2,2.1,0.5C66.1,19.6,64.9,20.8,63.3,20.8z"],["flush-element"],["close-element"],["text","\\n          "],["open-element","path",[]],["static-attr","fill-rule","evenodd"],["static-attr","clip-rule","evenodd"],["static-attr","fill","#DC242E"],["static-attr","d","M39.5,8.5h5.3v2.4l0.2-0.3C46,9.2,47.4,8,49.6,8\\n          c3.3,0,5.2,2.1,5.2,5.7v10.2h-5.3v-8.5c0-1.8-0.9-2.8-2.3-2.8c-1.4,0-2.4,1-2.4,2.8v8.5h-5.3V8.5z"],["flush-element"],["close-element"],["text","\\n          "],["open-element","g",[]],["flush-element"],["text","\\n            "],["open-element","g",[]],["flush-element"],["text","\\n              "],["open-element","path",[]],["static-attr","fill-rule","evenodd"],["static-attr","clip-rule","evenodd"],["static-attr","fill","#DC242E"],["static-attr","d","M37.9,22c-1.7,1.1-3.9,2.3-6.7,2.3c-2,0-3.8-0.6-5.1-1.6\\n              C23.3,24,21.2,24.4,19,24c-3.5-0.6-4-3.7-4-5.7V8.6h4.9c0,0,0,4.7,0.1,8.1c0.1,2.8,0.7,4.2,3.8,3.4c-0.5-1.1-0.8-2.5-0.8-3.9\\n              c0.1-4.5,3.6-8.6,8.2-8.6c5.3,0,6.5,4.5,4.6,7.5c-1.2,1.9-3,3.5-4.9,4.8c1.9,1.4,4.9,0.4,7-0.9V22z M32.2,15.2\\n              c1.8-2.3,0.4-3.6-1.2-3.3c-1.4,0.3-3.6,2.6-1.8,5.9C30.4,17,31.5,16.1,32.2,15.2z"],["flush-element"],["close-element"],["text","\\n            "],["close-element"],["text","\\n            "],["open-element","circle",[]],["static-attr","fill-rule","evenodd"],["static-attr","clip-rule","evenodd"],["static-attr","fill","#DC242E"],["static-attr","cx","17.5"],["static-attr","cy","3.5"],["static-attr","r","2.9"],["flush-element"],["close-element"],["text","\\n          "],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","g",[]],["flush-element"],["text","\\n          "],["open-element","path",[]],["static-attr","fill","#DC242E"],["static-attr","d","M74,22c0.5,0,1,0.4,1,1c0,0.6-0.4,1-1,1c-0.5,0-1-0.4-1-1C73.1,22.4,73.5,22,74,22z M74,23.8\\n          c0.5,0,0.8-0.4,0.8-0.8c0-0.5-0.4-0.8-0.8-0.8c-0.5,0-0.8,0.4-0.8,0.8C73.2,23.4,73.6,23.8,74,23.8z M73.7,22.4h0.4\\n          c0.3,0,0.4,0.1,0.4,0.3c0,0.2-0.1,0.3-0.3,0.3l0.3,0.5h-0.2L74,23.1h-0.2v0.5h-0.2V22.4z M73.8,22.9H74c0.2,0,0.3,0,0.3-0.2\\n          c0-0.2-0.1-0.2-0.3-0.2h-0.2V22.9z"],["flush-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/index/template.hbs"}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var l=t.default.Router,s=l.extend({location:n.default.locationType,rootURL:n.default.rootURL});s.map(function(){}),e.default=s}),define("dummy/snippets",["exports"],function(e){e.default={"advanced-options.hbs":"      {{were-triangle\n        options=advancedOptions\n      }}","advanced-options.js":"  noises: ['Grunt', 'growl'],\n  verbalizedNoises: computed('noises.[]', function () {\n    let verbalizedNoises = ''\n    this.get('noises').forEach((noise) => {\n      verbalizedNoises = verbalizedNoises.concat(`${noise}...`)\n    })\n    return verbalizedNoises\n  }).readOnly(),\n  advancedOptions: computed('verbalizedNoises', function () {\n    return {\n      color: 'red',\n      size: 60,\n      speak: this.get('verbalizedNoises'),\n      onClick: this.actions.moreNoises.bind(this)\n    }\n  }).readOnly(),","change.js":"    change () {\n      if (this.get('wereOptions.color') === 'red') {\n        this.set('wereOptions.size', 40)\n        this.set('wereOptions.color', 'black')\n        this.set('wereOptions.speak', 'Ok, this is getting ridiculous...')\n      } else {\n        this.set('wereOptions.size', 60)\n        this.set('wereOptions.color', 'red')\n        this.set('wereOptions.speak', '...and when did I change color?')\n      }\n    },","dot-options.hbs":"      {{normal-dot options=dotOptions}}","dot-options.js":"  dotOptions: Ember.Object.create({\n    size: 20,\n    speak: 'None of my shirts fit...'\n  }),","mixin.js":"import SpreadMixin from 'ember-spread'\n\nexport default Component.extend(SpreadMixin, {","more-noises.js":"    moreNoises () {\n      this.set('noises', ['Snarf', 'snuffle'])\n    }","normal.hbs":"      {{normal-dot\n        size=5\n        speak='Punctuation, huzzah!'\n      }}","transform.js":"    transform () {\n      if (this.get('wereShape') === 'were-triangle') {\n        this.set('wereShape', 'normal-dot')\n        this.set('wereOptions.speak', '...and when did I change color?')\n      } else {\n        this.set('wereShape', 'were-triangle')\n        this.set('wereOptions.speak', '...fooooooooooooobaaaaaaar...')\n      }\n    },","were-dynamic.hbs":"      {{component wereShape\n        options=wereOptions\n        spreadOptions=(hash\n          source=(hash\n            object=this\n            property='wereOptions'\n          )\n        )\n      }}","were-options.js":"  wereShape: 'normal-dot',\n  wereOptions: Ember.Object.create({\n    size: 40,\n    speak: 'Ok, this is getting ridiculous...'\n  }),"}}),define("dummy/templates/components/code-snippet",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mJxgtHOS",block:'{"statements":[["append",["unknown",["source"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),s={default:l};return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({});