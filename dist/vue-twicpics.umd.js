!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).vuetwicpics=e()}(this,(function(){"use strict";const t={name:"twic-img",props:{src:{type:String,required:!0},alt:String,title:String,placeholder:{type:String,default:"transparent"},ratio:{type:String,default:"1:1"},focus:String,step:String,output:{type:String,default:"preview"},absolute:{type:Boolean,default:!1},sizeType:{type:String,default:"cover",validator:t=>["cover","contain"].includes(t)}},computed:{pHolder(){return"preview"===this.placeholder?"transparent":this.placeholder},apiRatio(){return this.ratio.replace("/",":")},userRatio(){return this.ratio.split("/").reverse().join("/")},style(){const{absolute:t,userRatio:e,$domain:r,src:n,sizeType:i,apiRatio:o,output:a}=this;return{position:t?"absolute":"relative",width:t?"100%":"",height:t?"100%":"",paddingTop:t?"":`calc(${e}*100%)`,backgroundSize:"cover",backgroundImage:`url(${r}${n}?twic=v1/${i}=${o}/output=${a})`}},twicSrc(){return{[`data-${this.$twicClass}-src`]:`image:${this.src}`}},twicFocus(){return{[`data-${this.$twicClass}-src-focus`]:this.focus}},twicStep(){return{[`data-${this.$twicClass}-src-step`]:this.step}}}},e={};var r=function(t,e,r,n,i,o,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}(t,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"twic-img",style:t.style},[r("img",t._b({staticClass:"twic-img__img",attrs:{alt:t.alt,title:t.title,src:this.$domain+"/v1/"+t.sizeType+"="+t.apiRatio+"/placeholder:"+t.pHolder}},"img",[t.twicSrc,t.twicFocus,t.twicStep],!1))])}),[],!1,(function(t){for(let r in e)this[r]=e[r]}),null,null,null).exports;function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){i=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o={install:function(t){t.script=function(t){var e=t.domain,r=t.params,i="".concat(e,"/?v1");if(!document.querySelector('script[src="'+i+'"]')){var o=document.createElement("script"),a=r&&Object.entries(r).map((function(t){var e=n(t,2),r=e[0],i=e[1];return"maxDpr"===r?"&max-dpr=".concat(i):"&".concat(r,"=").concat(i)})).join("");o.src=r?i+a:i;var s=document.createElement("link");s.setAttribute("rel","preconnect"),s.setAttribute("href",e),document.head.appendChild(s),document.head.appendChild(o)}}}},a={install:function(t,e){t.component("twic-img",r),t.use(o),t.script({domain:e.domain,params:e.defaultParams}),t.prototype.$domain=e.domain,t.prototype.$twicClass=e.defaultParams&&e.defaultParams.class?e.defaultParams.class:"twic"}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(a),a}));
