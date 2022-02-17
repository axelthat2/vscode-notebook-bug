/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".UWIZg5uJYemfpzu\\+T0RVsw\\=\\= code {\n  font-family: monospace;\n  font-size: 12px;\n  color: lightblue;\n}\n", "",{"version":3,"sources":["webpack://src/client/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB","sourcesContent":[".json code {\n  font-family: monospace;\n  font-size: 12px;\n  color: lightblue;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"json": "UWIZg5uJYemfpzu+T0RVsw=="
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ A),
/* harmony export */   "options": () => (/* binding */ l)
/* harmony export */ });
var n,l,u,i,t,r,o,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return y(l,f,t,r,null)}function y(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u:o};return null==o&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||r)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?k(t):r,t.__h),z(u,t),t.__e!=r&&b(t)))})}function w(n,l,u,i,t,r,o,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,r,o,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r}return void 0!==o?o:t.nextSibling}function C(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||H(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||H(n,r,l[r],u[r],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?T:I,r):n.removeEventListener(l,r?T:I,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,r,o,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,r,o,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,r,o,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(o=o&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,r,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&k(i,0),c),null!=o)for(_=o.length;_--;)null!=o[_]&&h(o[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==y.value||_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,r;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&N(t[r],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var r,o,f;l.__&&l.__(u,i),o=(r="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!r&&t||i).__k=v(d,null,[u]),o||e,e,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,r,o,f=a({},l.props);for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,r||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./src/client/style.css":
/*!******************************!*\
  !*** ./src/client/style.css ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/render.ts":
/*!******************************!*\
  !*** ./src/client/render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/client/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
// We've set up this sample using CSS modules, which lets you import class
// names into JavaScript: https://github.com/css-modules/css-modules
// You can configure or change this in the webpack.config.js file.

// This function is called to render your contents.
function render({ container, mime, value }) {
    // Format the JSON and insert it as <pre><code>{ ... }</code></pre>
    // Replace this with your custom code!
    const pre = document.createElement('pre');
    pre.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0__.json);
    const code = document.createElement('code');
    code.textContent = `mime type: ${mime}\n\n${JSON.stringify(value, null, 2)}`;
    pre.appendChild(code);
    container.appendChild(pre);
}
if (false) {}


/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./node_modules/vscode-notebook-error-overlay/dist/overlay.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

let manager;
// This conditional will be checked by webpack so the error overlay isn't
// included in the production build:
if (true) {
    manager = new _overlay__WEBPACK_IMPORTED_MODULE_0__.ErrorOverlayManager();
}
else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/overlay.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/overlay.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorOverlayManager": () => (/* binding */ ErrorOverlayManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./node_modules/vscode-notebook-error-overlay/dist/ui.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const isPromiseLike = (x) => typeof x === 'object' && !!x && typeof x.then === 'function';
/**
 * Implementation of the error overlay manager.
 */
class ErrorOverlayManager {
    constructor() {
        this.containers = [];
        this.unmountOverlay = new Map();
        this.isInstalledGlobally = false;
        this.listener = (rawEvent) => {
            if (rawEvent.data.type === 'webpackErrors') {
                for (const container of this.containers) {
                    this.displayErrorIn(container, rawEvent.data.data, 1 /* Compilation */);
                }
            }
        };
    }
    /**
     * @inheritdoc
     */
    install(container) {
        if (!this.isInstalledGlobally) {
            this.isInstalledGlobally = true;
            window.addEventListener('message', this.listener);
        }
        const containers = this.containers.filter((c) => document.body.contains(c));
        containers.push(container);
        this.containers = containers;
    }
    wrap(container, fn) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false);
        this.install(container);
        const retry = () => this.wrap(container, fn);
        try {
            const ret = fn();
            if (ret && isPromiseLike(ret)) {
                return ret.then((v) => v, (err) => {
                    this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
                    return undefined;
                });
            }
        }
        catch (err) {
            this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
        }
        return undefined;
    }
    /**
     * @inheritdoc
     */
    uninstall() {
        for (const unmount of this.unmountOverlay.values()) {
            unmount(false);
        }
        this.unmountOverlay.clear();
        window.removeEventListener('message', this.listener);
    }
    displayErrorIn(container, errors, source, retry) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false); // make sure we don't ovewrite and get confused
        const errorStrs = errors.map((e) => typeof e === 'string' ? e : e.stack || e.message || String(e));
        const elem = ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui__WEBPACK_IMPORTED_MODULE_1__.Overlay, { source: source, close: () => this.hideErrorIn(container, true), errors: errorStrs }));
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(elem, container);
        this.unmountOverlay.set(container, (allowRetry) => {
            const overlay = container.querySelector('.notebook-error-overlay');
            if (overlay) {
                container.removeChild(overlay);
            }
            if (allowRetry && retry) {
                retry();
            }
        });
    }
    hideErrorIn(container, allowRetry) {
        const unmountFn = this.unmountOverlay.get(container);
        if (unmountFn) {
            unmountFn(allowRetry);
            this.unmountOverlay.delete(container);
        }
    }
}
//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/ui.js":
/*!***************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/ui.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-webview-tools */ "./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const colors = (0,vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__.parseColors)();
const Overlay = ({ errors, source, close }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: "notebook-error-overlay", style: { minHeight: 500 } },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            fontFamily: colors["font-family" /* FontFamily */],
            fontSize: colors["font-size" /* FontSize */],
            fontWeight: colors["font-weight" /* FontWeight */],
            background: colors["inputValidation-errorBackground" /* InputValidationErrorBackground */],
            border: `1px solid ${colors["inputValidation-errorBorder" /* InputValidationErrorBorder */]}`,
            color: colors["inputValidation-errorForeground" /* InputValidationErrorForeground */],
            padding: 5,
        } },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { style: { fontSize: '1.5em', margin: '0 0 0.25em', fontWeight: 'normal' } },
            "Errors occurred when ",
            source === 1 /* Compilation */ ? 'compiling' : 'rendering',
            ":"),
        errors.map((err, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ErrorMessage, { error: err, key: i })))),
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(CloseButton, { onClick: close, source: source })));
const CloseButton = ({ source, onClick, }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: onClick, title: source === 1 /* Compilation */ ? 'Dismiss' : 'Retry', style: {
        position: 'absolute',
        top: 3,
        right: 3,
        border: 0,
        background: 'none',
        padding: 0,
        margin: 0,
        outline: 0,
        cursor: 'pointer',
    } }, source === 1 /* Compilation */ ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.00001 8.70711L11.6465 12.3536L12.3536 11.6465L8.70711 8.00001L12.3536 4.35356L11.6465 3.64645L8.00001 7.2929L4.35356 3.64645L3.64645 4.35356L7.2929 8.00001L3.64645 11.6465L4.35356 12.3536L8.00001 8.70711Z", fill: "#C5C5C5" }))) : ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.00583 8.26691L0.78 9.50003L0 8.73003L2.09 6.66003L2.85 6.67003L4.94 8.79003L4.18 9.55003L3.01348 8.36995C3.20279 10.9587 5.363 13 8 13C9.91063 13 11.571 11.9283 12.4127 10.3533L13.226 10.95C12.1959 12.771 10.2415 14 8 14C4.77573 14 2.14547 11.4568 2.00583 8.26691ZM12.9961 7.80051L11.76 6.55005L11 7.31005L13.09 9.42005L13.85 9.43005L15.94 7.36005L15.19 6.60005L13.996 7.78004C13.8803 4.56822 11.2401 2 8 2C5.83726 2 3.94178 3.14429 2.88597 4.86047L3.69562 5.45435C4.56645 3.98499 6.16818 3 8 3C10.6946 3 12.8914 5.13152 12.9961 7.80051Z", fill: "#C5C5C5" })))));
const ErrorMessage = ({ error }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("pre", { style: {
        fontFamily: colors["editor-font-family" /* EditorFontFamily */],
        fontSize: colors["editor-font-size" /* EditorFontSize */],
        fontWeight: colors["editor-font-weight" /* EditorFontWeight */],
        width: '100%',
        overflowX: 'auto',
        lineHeight: '1.5em'
    } }, error.split('\n').map((line, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("code", { key: i, style: {
        padding: '0.1em 0.3em',
        background: i % 2 ? 'rgba(0, 0, 0, 0.2)' : 'none',
        display: 'table-row',
        whitespace: 'no-wrap',
    } }, line)))));
//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseColors": () => (/* binding */ parseColors),
/* harmony export */   "observeColors": () => (/* binding */ observeColors)
/* harmony export */ });
/**
 * Parses the vscode CSS variables from the document, and returns them.
 */
const parseColors = () => {
    const rawVars = String(document.documentElement.getAttribute('style'));
    const re = new RegExp('--vscode-(.*?):(.*?)(;|$)', 'g');
    const vars = {};
    let match;
    while ((match = re.exec(rawVars)) !== null) {
        const [, key, value] = match;
        vars[key] = value;
    }
    return vars;
};
/**
 * Watches the body and calls the callback function when the colors change.
 * This can very easily be wrapped into a react or preact hook, for example:
 *
 * ```
 * import { useState, useEffect } from 'preact/hooks';
 *
 * const useCssVariables = () => {
 *   const [vars, setVars] = useState<{ [key: string]: string }>({});
 *   useEffect(() => observeColors(setVars), []);
 *   return vars;
 * }
 * ```
 */
const observeColors = (onChange) => {
    onChange(parseColors());
    const observer = new MutationObserver(() => {
        onChange(parseColors());
    });
    observer.observe(document.documentElement, {
        attributeFilter: ['style'],
        childList: false,
        subtree: false,
    });
    return () => observer.disconnect();
};
//# sourceMappingURL=parse-colors.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "";
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate": () => (/* binding */ activate)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/client/render.ts");
/* harmony import */ var vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-notebook-error-overlay */ "./node_modules/vscode-notebook-error-overlay/dist/index.js");


__webpack_require__.p = new URL(import.meta.url.replace(/[^/]+$/, '') + "").toString();
// ----------------------------------------------------------------------------
// This is the entrypoint to the notebook renderer's webview client-side code.
// This contains some boilerplate that calls the `render()` function when new
// output is available. You probably don't need to change this code; put your
// rendering logic inside of the `render()` function.
// ----------------------------------------------------------------------------
const activate = context => {
    return {
        renderOutputItem(outputItem, element) {
            let shadow = element.shadowRoot;
            if (!shadow) {
                shadow = element.attachShadow({ mode: 'open' });
                const root = document.createElement('div');
                root.id = 'root';
                shadow.append(root);
            }
            const root = shadow.querySelector('#root');
            vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__["default"].wrap(root, () => {
                root.innerHTML = '';
                const node = document.createElement('div');
                root.appendChild(node);
                (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)({ container: node, mime: outputItem.mime, value: outputItem.json(), context });
            });
        },
        disposeOutputItem(outputId) {
            // Do any teardown here. outputId is the cell output being deleted, or
            // undefined if we're clearing all outputs.
        }
    };
};

})();

var __webpack_exports__activate = __webpack_exports__.activate;
export { __webpack_exports__activate as activate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTtZQUN4QixzRUFBc0U7WUFDdEUsMkNBQTJDO1FBQzdDLENBQUM7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvY2VyeS1ib29rLy4vc3JjL2NsaWVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ3JvY2VyeS1ib29rLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9zcmMvY2xpZW50L3N0eWxlLmNzcz9lZmVmIiwid2VicGFjazovL2dyb2NlcnktYm9vay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9zcmMvY2xpZW50L3JlbmRlci50cyIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9ub2RlX21vZHVsZXMvdnNjb2RlLW5vdGVib29rLWVycm9yLW92ZXJsYXkvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9ub2RlX21vZHVsZXMvdnNjb2RlLW5vdGVib29rLWVycm9yLW92ZXJsYXkvZGlzdC9vdmVybGF5LmpzIiwid2VicGFjazovL2dyb2NlcnktYm9vay8uL25vZGVfbW9kdWxlcy92c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheS9kaXN0L3VpLmpzIiwid2VicGFjazovL2dyb2NlcnktYm9vay8uL25vZGVfbW9kdWxlcy92c2NvZGUtd2Vidmlldy10b29scy9kaXN0L3BrZy9wYXJzZS1jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vZ3JvY2VyeS1ib29rL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dyb2NlcnktYm9vay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyb2NlcnktYm9vay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dyb2NlcnktYm9vay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyb2NlcnktYm9vay93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ncm9jZXJ5LWJvb2svLi9zcmMvY2xpZW50L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5VV0laZzV1SlllbWZwenVcXFxcK1QwUlZzd1xcXFw9XFxcXD0gY29kZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jbGllbnQvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmpzb24gY29kZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwianNvblwiOiBcIlVXSVpnNXVKWWVtZnB6dStUMFJWc3c9PVwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT15LnZhbHVlfHxfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFdlJ3ZlIHNldCB1cCB0aGlzIHNhbXBsZSB1c2luZyBDU1MgbW9kdWxlcywgd2hpY2ggbGV0cyB5b3UgaW1wb3J0IGNsYXNzXG4vLyBuYW1lcyBpbnRvIEphdmFTY3JpcHQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9jc3MtbW9kdWxlcy9jc3MtbW9kdWxlc1xuLy8gWW91IGNhbiBjb25maWd1cmUgb3IgY2hhbmdlIHRoaXMgaW4gdGhlIHdlYnBhY2suY29uZmlnLmpzIGZpbGUuXG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdHlwZSB7IFJlbmRlcmVyQ29udGV4dCB9IGZyb20gJ3ZzY29kZS1ub3RlYm9vay1yZW5kZXJlcic7XG5cbmludGVyZmFjZSBJUmVuZGVySW5mbyB7XG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIG1pbWU6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgY29udGV4dDogUmVuZGVyZXJDb250ZXh0PHVua25vd24+O1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byByZW5kZXIgeW91ciBjb250ZW50cy5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoeyBjb250YWluZXIsIG1pbWUsIHZhbHVlIH06IElSZW5kZXJJbmZvKSB7XG4gIC8vIEZvcm1hdCB0aGUgSlNPTiBhbmQgaW5zZXJ0IGl0IGFzIDxwcmU+PGNvZGU+eyAuLi4gfTwvY29kZT48L3ByZT5cbiAgLy8gUmVwbGFjZSB0aGlzIHdpdGggeW91ciBjdXN0b20gY29kZSFcbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gIHByZS5jbGFzc0xpc3QuYWRkKHN0eWxlLmpzb24pO1xuICBjb25zdCBjb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY29kZScpO1xuICBjb2RlLnRleHRDb250ZW50ID0gYG1pbWUgdHlwZTogJHttaW1lfVxcblxcbiR7SlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpfWA7XG4gIHByZS5hcHBlbmRDaGlsZChjb2RlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByZSk7XG59XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWRkRGlzcG9zZUhhbmRsZXIoKCkgPT4ge1xuICAgIC8vIEluIGRldmVsb3BtZW50LCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSB0aGUgcmVuZGVyZXIgaXMgcmVsb2FkZWQuIFlvdVxuICAgIC8vIGNhbiB1c2UgdGhpcyB0byBjbGVhbiB1cCBvciBzdGFzaCBhbnkgc3RhdGUuXG4gIH0pO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbXBvcnQgeyBFcnJvck92ZXJsYXlNYW5hZ2VyIH0gZnJvbSAnLi9vdmVybGF5JztcclxubGV0IG1hbmFnZXI7XHJcbi8vIFRoaXMgY29uZGl0aW9uYWwgd2lsbCBiZSBjaGVja2VkIGJ5IHdlYnBhY2sgc28gdGhlIGVycm9yIG92ZXJsYXkgaXNuJ3RcclxuLy8gaW5jbHVkZWQgaW4gdGhlIHByb2R1Y3Rpb24gYnVpbGQ6XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgbWFuYWdlciA9IG5ldyBFcnJvck92ZXJsYXlNYW5hZ2VyKCk7XHJcbn1cclxuZWxzZSB7XHJcbiAgICBtYW5hZ2VyID0ge1xyXG4gICAgICAgIGluc3RhbGw6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgICAgICB3cmFwOiAoXywgdCkgPT4gdCgpLFxyXG4gICAgICAgIHVuaW5zdGFsbDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2VyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb3B5cmlnaHQgKEMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmltcG9ydCB7IHJlbmRlciwgaCB9IGZyb20gJ3ByZWFjdCc7XHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuL3VpJztcclxuY29uc3QgaXNQcm9taXNlTGlrZSA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgISF4ICYmIHR5cGVvZiB4LnRoZW4gPT09ICdmdW5jdGlvbic7XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgZXJyb3Igb3ZlcmxheSBtYW5hZ2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEVycm9yT3ZlcmxheU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gW107XHJcbiAgICAgICAgdGhpcy51bm1vdW50T3ZlcmxheSA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmlzSW5zdGFsbGVkR2xvYmFsbHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVyID0gKHJhd0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyYXdFdmVudC5kYXRhLnR5cGUgPT09ICd3ZWJwYWNrRXJyb3JzJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5jb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JJbihjb250YWluZXIsIHJhd0V2ZW50LmRhdGEuZGF0YSwgMSAvKiBDb21waWxhdGlvbiAqLyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW5oZXJpdGRvY1xyXG4gICAgICovXHJcbiAgICBpbnN0YWxsKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luc3RhbGxlZEdsb2JhbGx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJbnN0YWxsZWRHbG9iYWxseSA9IHRydWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSB0aGlzLmNvbnRhaW5lcnMuZmlsdGVyKChjKSA9PiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGMpKTtcclxuICAgICAgICBjb250YWluZXJzLnB1c2goY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMgPSBjb250YWluZXJzO1xyXG4gICAgfVxyXG4gICAgd3JhcChjb250YWluZXIsIGZuKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhpZGVFcnJvckluKGNvbnRhaW5lciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFsbChjb250YWluZXIpO1xyXG4gICAgICAgIGNvbnN0IHJldHJ5ID0gKCkgPT4gdGhpcy53cmFwKGNvbnRhaW5lciwgZm4pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IGZuKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXQgJiYgaXNQcm9taXNlTGlrZShyZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnRoZW4oKHYpID0+IHYsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvckluKGNvbnRhaW5lciwgW2Vycl0sIDAgLyogUnVudGltZSAqLywgcmV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9ySW4oY29udGFpbmVyLCBbZXJyXSwgMCAvKiBSdW50aW1lICovLCByZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBpbmhlcml0ZG9jXHJcbiAgICAgKi9cclxuICAgIHVuaW5zdGFsbCgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHVubW91bnQgb2YgdGhpcy51bm1vdW50T3ZlcmxheS52YWx1ZXMoKSkge1xyXG4gICAgICAgICAgICB1bm1vdW50KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bm1vdW50T3ZlcmxheS5jbGVhcigpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5saXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5RXJyb3JJbihjb250YWluZXIsIGVycm9ycywgc291cmNlLCByZXRyeSkge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlRXJyb3JJbihjb250YWluZXIsIGZhbHNlKTsgLy8gbWFrZSBzdXJlIHdlIGRvbid0IG92ZXdyaXRlIGFuZCBnZXQgY29uZnVzZWRcclxuICAgICAgICBjb25zdCBlcnJvclN0cnMgPSBlcnJvcnMubWFwKChlKSA9PiB0eXBlb2YgZSA9PT0gJ3N0cmluZycgPyBlIDogZS5zdGFjayB8fCBlLm1lc3NhZ2UgfHwgU3RyaW5nKGUpKTtcclxuICAgICAgICBjb25zdCBlbGVtID0gKGgoT3ZlcmxheSwgeyBzb3VyY2U6IHNvdXJjZSwgY2xvc2U6ICgpID0+IHRoaXMuaGlkZUVycm9ySW4oY29udGFpbmVyLCB0cnVlKSwgZXJyb3JzOiBlcnJvclN0cnMgfSkpO1xyXG4gICAgICAgIHJlbmRlcihlbGVtLCBjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMudW5tb3VudE92ZXJsYXkuc2V0KGNvbnRhaW5lciwgKGFsbG93UmV0cnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubm90ZWJvb2stZXJyb3Itb3ZlcmxheScpO1xyXG4gICAgICAgICAgICBpZiAob3ZlcmxheSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbGxvd1JldHJ5ICYmIHJldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXRyeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBoaWRlRXJyb3JJbihjb250YWluZXIsIGFsbG93UmV0cnkpIHtcclxuICAgICAgICBjb25zdCB1bm1vdW50Rm4gPSB0aGlzLnVubW91bnRPdmVybGF5LmdldChjb250YWluZXIpO1xyXG4gICAgICAgIGlmICh1bm1vdW50Rm4pIHtcclxuICAgICAgICAgICAgdW5tb3VudEZuKGFsbG93UmV0cnkpO1xyXG4gICAgICAgICAgICB0aGlzLnVubW91bnRPdmVybGF5LmRlbGV0ZShjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdmVybGF5LmpzLm1hcCIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvcHlyaWdodCAoQykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuaW1wb3J0IHsgaCB9IGZyb20gJ3ByZWFjdCc7XHJcbmltcG9ydCB7IHBhcnNlQ29sb3JzIH0gZnJvbSAndnNjb2RlLXdlYnZpZXctdG9vbHMnO1xyXG5jb25zdCBjb2xvcnMgPSBwYXJzZUNvbG9ycygpO1xyXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9ICh7IGVycm9ycywgc291cmNlLCBjbG9zZSB9KSA9PiAoaChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJub3RlYm9vay1lcnJvci1vdmVybGF5XCIsIHN0eWxlOiB7IG1pbkhlaWdodDogNTAwIH0gfSxcclxuICAgIGgoXCJkaXZcIiwgeyBzdHlsZToge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogY29sb3JzW1wiZm9udC1mYW1pbHlcIiAvKiBGb250RmFtaWx5ICovXSxcclxuICAgICAgICAgICAgZm9udFNpemU6IGNvbG9yc1tcImZvbnQtc2l6ZVwiIC8qIEZvbnRTaXplICovXSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogY29sb3JzW1wiZm9udC13ZWlnaHRcIiAvKiBGb250V2VpZ2h0ICovXSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JzW1wiaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZFwiIC8qIElucHV0VmFsaWRhdGlvbkVycm9yQmFja2dyb3VuZCAqL10sXHJcbiAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2NvbG9yc1tcImlucHV0VmFsaWRhdGlvbi1lcnJvckJvcmRlclwiIC8qIElucHV0VmFsaWRhdGlvbkVycm9yQm9yZGVyICovXX1gLFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzW1wiaW5wdXRWYWxpZGF0aW9uLWVycm9yRm9yZWdyb3VuZFwiIC8qIElucHV0VmFsaWRhdGlvbkVycm9yRm9yZWdyb3VuZCAqL10sXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXHJcbiAgICAgICAgfSB9LFxyXG4gICAgICAgIGgoXCJoMVwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAnMS41ZW0nLCBtYXJnaW46ICcwIDAgMC4yNWVtJywgZm9udFdlaWdodDogJ25vcm1hbCcgfSB9LFxyXG4gICAgICAgICAgICBcIkVycm9ycyBvY2N1cnJlZCB3aGVuIFwiLFxyXG4gICAgICAgICAgICBzb3VyY2UgPT09IDEgLyogQ29tcGlsYXRpb24gKi8gPyAnY29tcGlsaW5nJyA6ICdyZW5kZXJpbmcnLFxyXG4gICAgICAgICAgICBcIjpcIiksXHJcbiAgICAgICAgZXJyb3JzLm1hcCgoZXJyLCBpKSA9PiAoaChFcnJvck1lc3NhZ2UsIHsgZXJyb3I6IGVyciwga2V5OiBpIH0pKSkpLFxyXG4gICAgaChDbG9zZUJ1dHRvbiwgeyBvbkNsaWNrOiBjbG9zZSwgc291cmNlOiBzb3VyY2UgfSkpKTtcclxuY29uc3QgQ2xvc2VCdXR0b24gPSAoeyBzb3VyY2UsIG9uQ2xpY2ssIH0pID0+IChoKFwiYnV0dG9uXCIsIHsgb25DbGljazogb25DbGljaywgdGl0bGU6IHNvdXJjZSA9PT0gMSAvKiBDb21waWxhdGlvbiAqLyA/ICdEaXNtaXNzJyA6ICdSZXRyeScsIHN0eWxlOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAzLFxyXG4gICAgICAgIHJpZ2h0OiAzLFxyXG4gICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0gfSwgc291cmNlID09PSAxIC8qIENvbXBpbGF0aW9uICovID8gKGgoXCJzdmdcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgdmlld0JveDogXCIwIDAgMTYgMTZcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcclxuICAgIGgoXCJwYXRoXCIsIHsgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIsIGQ6IFwiTTguMDAwMDEgOC43MDcxMUwxMS42NDY1IDEyLjM1MzZMMTIuMzUzNiAxMS42NDY1TDguNzA3MTEgOC4wMDAwMUwxMi4zNTM2IDQuMzUzNTZMMTEuNjQ2NSAzLjY0NjQ1TDguMDAwMDEgNy4yOTI5TDQuMzUzNTYgMy42NDY0NUwzLjY0NjQ1IDQuMzUzNTZMNy4yOTI5IDguMDAwMDFMMy42NDY0NSAxMS42NDY1TDQuMzUzNTYgMTIuMzUzNkw4LjAwMDAxIDguNzA3MTFaXCIsIGZpbGw6IFwiI0M1QzVDNVwiIH0pKSkgOiAoaChcInN2Z1wiLCB7IHdpZHRoOiBcIjE2XCIsIGhlaWdodDogXCIxNlwiLCB2aWV3Qm94OiBcIjAgMCAxNiAxNlwiLCBmaWxsOiBcIm5vbmVcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxyXG4gICAgaChcInBhdGhcIiwgeyBmaWxsUnVsZTogXCJldmVub2RkXCIsIGNsaXBSdWxlOiBcImV2ZW5vZGRcIiwgZDogXCJNMi4wMDU4MyA4LjI2NjkxTDAuNzggOS41MDAwM0wwIDguNzMwMDNMMi4wOSA2LjY2MDAzTDIuODUgNi42NzAwM0w0Ljk0IDguNzkwMDNMNC4xOCA5LjU1MDAzTDMuMDEzNDggOC4zNjk5NUMzLjIwMjc5IDEwLjk1ODcgNS4zNjMgMTMgOCAxM0M5LjkxMDYzIDEzIDExLjU3MSAxMS45MjgzIDEyLjQxMjcgMTAuMzUzM0wxMy4yMjYgMTAuOTVDMTIuMTk1OSAxMi43NzEgMTAuMjQxNSAxNCA4IDE0QzQuNzc1NzMgMTQgMi4xNDU0NyAxMS40NTY4IDIuMDA1ODMgOC4yNjY5MVpNMTIuOTk2MSA3LjgwMDUxTDExLjc2IDYuNTUwMDVMMTEgNy4zMTAwNUwxMy4wOSA5LjQyMDA1TDEzLjg1IDkuNDMwMDVMMTUuOTQgNy4zNjAwNUwxNS4xOSA2LjYwMDA1TDEzLjk5NiA3Ljc4MDA0QzEzLjg4MDMgNC41NjgyMiAxMS4yNDAxIDIgOCAyQzUuODM3MjYgMiAzLjk0MTc4IDMuMTQ0MjkgMi44ODU5NyA0Ljg2MDQ3TDMuNjk1NjIgNS40NTQzNUM0LjU2NjQ1IDMuOTg0OTkgNi4xNjgxOCAzIDggM0MxMC42OTQ2IDMgMTIuODkxNCA1LjEzMTUyIDEyLjk5NjEgNy44MDA1MVpcIiwgZmlsbDogXCIjQzVDNUM1XCIgfSkpKSkpO1xyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoeyBlcnJvciB9KSA9PiAoaChcInByZVwiLCB7IHN0eWxlOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogY29sb3JzW1wiZWRpdG9yLWZvbnQtZmFtaWx5XCIgLyogRWRpdG9yRm9udEZhbWlseSAqL10sXHJcbiAgICAgICAgZm9udFNpemU6IGNvbG9yc1tcImVkaXRvci1mb250LXNpemVcIiAvKiBFZGl0b3JGb250U2l6ZSAqL10sXHJcbiAgICAgICAgZm9udFdlaWdodDogY29sb3JzW1wiZWRpdG9yLWZvbnQtd2VpZ2h0XCIgLyogRWRpdG9yRm9udFdlaWdodCAqL10sXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBvdmVyZmxvd1g6ICdhdXRvJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS41ZW0nXHJcbiAgICB9IH0sIGVycm9yLnNwbGl0KCdcXG4nKS5tYXAoKGxpbmUsIGkpID0+IChoKFwiY29kZVwiLCB7IGtleTogaSwgc3R5bGU6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMC4xZW0gMC4zZW0nLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IGkgJSAyID8gJ3JnYmEoMCwgMCwgMCwgMC4yKScgOiAnbm9uZScsXHJcbiAgICAgICAgZGlzcGxheTogJ3RhYmxlLXJvdycsXHJcbiAgICAgICAgd2hpdGVzcGFjZTogJ25vLXdyYXAnLFxyXG4gICAgfSB9LCBsaW5lKSkpKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVpLmpzLm1hcCIsIi8qKlxyXG4gKiBQYXJzZXMgdGhlIHZzY29kZSBDU1MgdmFyaWFibGVzIGZyb20gdGhlIGRvY3VtZW50LCBhbmQgcmV0dXJucyB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhcnNlQ29sb3JzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmF3VmFycyA9IFN0cmluZyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdHlsZScpKTtcclxuICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCgnLS12c2NvZGUtKC4qPyk6KC4qPykoO3wkKScsICdnJyk7XHJcbiAgICBjb25zdCB2YXJzID0ge307XHJcbiAgICBsZXQgbWF0Y2g7XHJcbiAgICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhyYXdWYXJzKSkgIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBbLCBrZXksIHZhbHVlXSA9IG1hdGNoO1xyXG4gICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhcnM7XHJcbn07XHJcbi8qKlxyXG4gKiBXYXRjaGVzIHRoZSBib2R5IGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgY29sb3JzIGNoYW5nZS5cclxuICogVGhpcyBjYW4gdmVyeSBlYXNpbHkgYmUgd3JhcHBlZCBpbnRvIGEgcmVhY3Qgb3IgcHJlYWN0IGhvb2ssIGZvciBleGFtcGxlOlxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3ByZWFjdC9ob29rcyc7XHJcbiAqXHJcbiAqIGNvbnN0IHVzZUNzc1ZhcmlhYmxlcyA9ICgpID0+IHtcclxuICogICBjb25zdCBbdmFycywgc2V0VmFyc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9Pih7fSk7XHJcbiAqICAgdXNlRWZmZWN0KCgpID0+IG9ic2VydmVDb2xvcnMoc2V0VmFycyksIFtdKTtcclxuICogICByZXR1cm4gdmFycztcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjb25zdCBvYnNlcnZlQ29sb3JzID0gKG9uQ2hhbmdlKSA9PiB7XHJcbiAgICBvbkNoYW5nZShwYXJzZUNvbG9ycygpKTtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKHBhcnNlQ29sb3JzKCkpO1xyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddLFxyXG4gICAgICAgIGNoaWxkTGlzdDogZmFsc2UsXHJcbiAgICAgICAgc3VidHJlZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWNvbG9ycy5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgZXJyb3JPdmVybGF5IGZyb20gJ3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5JztcbmltcG9ydCB0eXBlIHsgQWN0aXZhdGlvbkZ1bmN0aW9uIH0gZnJvbSAndnNjb2RlLW5vdGVib29rLXJlbmRlcmVyJztcblxuLy8gRml4IHRoZSBwdWJsaWMgcGF0aCBzbyB0aGF0IGFueSBhc3luYyBpbXBvcnQoKSdzIHdvcmsgYXMgZXhwZWN0ZWQuXG5kZWNsYXJlIGNvbnN0IF9fd2VicGFja19yZWxhdGl2ZV9lbnRyeXBvaW50X3RvX3Jvb3RfXzogc3RyaW5nO1xuZGVjbGFyZSBjb25zdCBzY3JpcHRVcmw6IHN0cmluZztcblxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSBuZXcgVVJMKHNjcmlwdFVybC5yZXBsYWNlKC9bXi9dKyQvLCAnJykgKyBfX3dlYnBhY2tfcmVsYXRpdmVfZW50cnlwb2ludF90b19yb290X18pLnRvU3RyaW5nKCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgaXMgdGhlIGVudHJ5cG9pbnQgdG8gdGhlIG5vdGVib29rIHJlbmRlcmVyJ3Mgd2VidmlldyBjbGllbnQtc2lkZSBjb2RlLlxuLy8gVGhpcyBjb250YWlucyBzb21lIGJvaWxlcnBsYXRlIHRoYXQgY2FsbHMgdGhlIGByZW5kZXIoKWAgZnVuY3Rpb24gd2hlbiBuZXdcbi8vIG91dHB1dCBpcyBhdmFpbGFibGUuIFlvdSBwcm9iYWJseSBkb24ndCBuZWVkIHRvIGNoYW5nZSB0aGlzIGNvZGU7IHB1dCB5b3VyXG4vLyByZW5kZXJpbmcgbG9naWMgaW5zaWRlIG9mIHRoZSBgcmVuZGVyKClgIGZ1bmN0aW9uLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgY29uc3QgYWN0aXZhdGU6IEFjdGl2YXRpb25GdW5jdGlvbiA9IGNvbnRleHQgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlbmRlck91dHB1dEl0ZW0ob3V0cHV0SXRlbSwgZWxlbWVudCkge1xuICAgICAgbGV0IHNoYWRvdyA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIGlmICghc2hhZG93KSB7XG4gICAgICAgIHNoYWRvdyA9IGVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvb3QuaWQgPSAncm9vdCc7XG4gICAgICAgIHNoYWRvdy5hcHBlbmQocm9vdCk7XG4gICAgICB9XG4gICAgICBjb25zdCByb290ID0gc2hhZG93LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjcm9vdCcpITtcbiAgICAgIGVycm9yT3ZlcmxheS53cmFwKHJvb3QsICgpID0+IHtcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb290LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgICAgIHJlbmRlcih7IGNvbnRhaW5lcjogbm9kZSwgbWltZTogb3V0cHV0SXRlbS5taW1lLCB2YWx1ZTogb3V0cHV0SXRlbS5qc29uKCksIGNvbnRleHQgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2VPdXRwdXRJdGVtKG91dHB1dElkKSB7XG4gICAgICAvLyBEbyBhbnkgdGVhcmRvd24gaGVyZS4gb3V0cHV0SWQgaXMgdGhlIGNlbGwgb3V0cHV0IGJlaW5nIGRlbGV0ZWQsIG9yXG4gICAgICAvLyB1bmRlZmluZWQgaWYgd2UncmUgY2xlYXJpbmcgYWxsIG91dHB1dHMuXG4gICAgfVxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==