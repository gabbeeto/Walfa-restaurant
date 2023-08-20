/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./source/styling/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/styling/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Darling.ttf */ "./source/styling/fonts/Darling.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Butter.otf */ "./source/styling/fonts/Butter.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Voice In My Head.otf */ "./source/styling/fonts/Voice In My Head.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face{
font-family: 'default';
src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}


@font-face{
font-family: 'button';
src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}


@font-face{
font-family: 'price';
src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

:root{
--yellow: #f3b87b;
--darkYellow: #9A744C;
--brown: #352921;
--pink: #FF74C4;
--white: white;
--black:black;
}

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

body{
background-color: var(--yellow);
font-family: 'default';
color: var(--black);
}

h1,h2,p,figCaption, span, button{
text-align: center;

}

h2{
font-size: calc(1.5rem + 4px);
}


p{
font-size: calc(1rem + 4px);
max-width: 98vw;
}

figcaption{
font-size: calc(1.5rem + 4px) ;
}

figure h3{
font-size: calc(1.6rem + 4px);
font-family: 'price';
}




/*header section*/
header{
border-bottom: 2px solid white;
background-color: var(--brown);
display: flex;
justify-content: center;
align-items: center;
color: var(--pink);
}

header h1{
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
}

@media(max-width:460px){
header h1{
flex-direction: column;
gap: 2px;
}
}

a:link{
color: #DC8389;
}
a:visited{
color: #CB88EF;
}












main, section, section:nth-of-type(3) div{
display: flex;
justify-content: center;
align-items: center;
}


section:not(section:first-of-type){
display: none;
}

section:first-of-type{
gap: 5px;
margin-top: 10px;
}

section:nth-of-type(3)  div{
flex-direction: column;
text-align: center;
border: 2px solid var(--black);
padding: 10px;
border-radius: 5px;
background-color: #FFC85C;
}


button{
background-color: var(--brown);
border: 2px solid var(--white);
color: var(--white);
padding: 15px;
border-radius: 30px;
font-family: 'button';
font-size: calc(1rem + 5px);
}


main, section:nth-of-type(2),section:nth-of-type(4){
flex-direction: column;
gap: 10px;
}

ul{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
gap: 30px;
}

li{
list-style: none;
background-color: var(--darkYellow);
width: 98%;
height: 98%;
align-self: center;
justify-self: center;
padding: 2px;
border-radius: 10px;
}

figure,li{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

img{
width: 80%;
height: 80%;
}
`, "",{"version":3,"sources":["webpack://./source/styling/style.css"],"names":[],"mappings":"AAAA;AACA,sBAAsB;AACtB,4CAA+B;AAC/B;;;AAGA;AACA,qBAAqB;AACrB,4CAA8B;AAC9B;;;AAGA;AACA,oBAAoB;AACpB,4CAA2C;AAC3C;;AAEA;AACA,iBAAiB;AACjB,qBAAqB;AACrB,gBAAgB;AAChB,eAAe;AACf,cAAc;AACd,aAAa;AACb;;AAEA;AACA,SAAS;AACT,UAAU;AACV,sBAAsB;AACtB;;AAEA;AACA,+BAA+B;AAC/B,sBAAsB;AACtB,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;;AAElB;;AAEA;AACA,6BAA6B;AAC7B;;;AAGA;AACA,2BAA2B;AAC3B,eAAe;AACf;;AAEA;AACA,8BAA8B;AAC9B;;AAEA;AACA,6BAA6B;AAC7B,oBAAoB;AACpB;;;;;AAKA,iBAAiB;AACjB;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,SAAS;AACT,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;AACA;AACA,sBAAsB;AACtB,QAAQ;AACR;AACA;;AAEA;AACA,cAAc;AACd;AACA;AACA,cAAc;AACd;;;;;;;;;;;;;AAaA;AACA,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB;;;AAGA;AACA,aAAa;AACb;;AAEA;AACA,QAAQ;AACR,gBAAgB;AAChB;;AAEA;AACA,sBAAsB;AACtB,kBAAkB;AAClB,8BAA8B;AAC9B,aAAa;AACb,kBAAkB;AAClB,yBAAyB;AACzB;;;AAGA;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,mBAAmB;AACnB,aAAa;AACb,mBAAmB;AACnB,qBAAqB;AACrB,2BAA2B;AAC3B;;;AAGA;AACA,sBAAsB;AACtB,SAAS;AACT;;AAEA;AACA,aAAa;AACb,0DAA0D;AAC1D,SAAS;AACT;;AAEA;AACA,gBAAgB;AAChB,mCAAmC;AACnC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,oBAAoB;AACpB,YAAY;AACZ,mBAAmB;AACnB;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;AACA,UAAU;AACV,WAAW;AACX","sourcesContent":["@font-face{\nfont-family: 'default';\nsrc: url('./fonts/Darling.ttf');\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url('./fonts/Butter.otf');\n}\n\n\n@font-face{\nfont-family: 'price';\nsrc: url('./fonts/Voice\\ In\\ My\\ Head.otf');\n}\n\n:root{\n--yellow: #f3b87b;\n--darkYellow: #9A744C;\n--brown: #352921;\n--pink: #FF74C4;\n--white: white;\n--black:black;\n}\n\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n\nbody{\nbackground-color: var(--yellow);\nfont-family: 'default';\ncolor: var(--black);\n}\n\nh1,h2,p,figCaption, span, button{\ntext-align: center;\n\n}\n\nh2{\nfont-size: calc(1.5rem + 4px);\n}\n\n\np{\nfont-size: calc(1rem + 4px);\nmax-width: 98vw;\n}\n\nfigcaption{\nfont-size: calc(1.5rem + 4px) ;\n}\n\nfigure h3{\nfont-size: calc(1.6rem + 4px);\nfont-family: 'price';\n}\n\n\n\n\n/*header section*/\nheader{\nborder-bottom: 2px solid white;\nbackground-color: var(--brown);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: var(--pink);\n}\n\nheader h1{\ndisplay: flex;\ngap: 10px;\njustify-content: center;\nalign-items: center;\n}\n\n@media(max-width:460px){\nheader h1{\nflex-direction: column;\ngap: 2px;\n}\n}\n\na:link{\ncolor: #DC8389;\n}\na:visited{\ncolor: #CB88EF;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmain, section, section:nth-of-type(3) div{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n\nsection:not(section:first-of-type){\ndisplay: none;\n}\n\nsection:first-of-type{\ngap: 5px;\nmargin-top: 10px;\n}\n\nsection:nth-of-type(3)  div{\nflex-direction: column;\ntext-align: center;\nborder: 2px solid var(--black);\npadding: 10px;\nborder-radius: 5px;\nbackground-color: #FFC85C;\n}\n\n\nbutton{\nbackground-color: var(--brown);\nborder: 2px solid var(--white);\ncolor: var(--white);\npadding: 15px;\nborder-radius: 30px;\nfont-family: 'button';\nfont-size: calc(1rem + 5px);\n}\n\n\nmain, section:nth-of-type(2),section:nth-of-type(4){\nflex-direction: column;\ngap: 10px;\n}\n\nul{\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(200px,1fr));\ngap: 30px;\n}\n\nli{\nlist-style: none;\nbackground-color: var(--darkYellow);\nwidth: 98%;\nheight: 98%;\nalign-self: center;\njustify-self: center;\npadding: 2px;\nborder-radius: 10px;\n}\n\nfigure,li{\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n}\n\nimg{\nwidth: 80%;\nheight: 80%;\n}\n"],"sourceRoot":""}]);
// Exports
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./source/styling/style.css":
/*!**********************************!*\
  !*** ./source/styling/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./source/styling/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./source/html.js":
/*!************************!*\
  !*** ./source/html.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutButton: () => (/* binding */ aboutButton),
/* harmony export */   homeButton: () => (/* binding */ homeButton),
/* harmony export */   menuButton: () => (/* binding */ menuButton),
/* harmony export */   sectionForAbout: () => (/* binding */ sectionForAbout),
/* harmony export */   sectionForButtons: () => (/* binding */ sectionForButtons),
/* harmony export */   sectionForHome: () => (/* binding */ sectionForHome),
/* harmony export */   sectionForMenu: () => (/* binding */ sectionForMenu)
/* harmony export */ });
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling/style.css */ "./source/styling/style.css");
/* harmony import */ var _img_noodles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/noodles.png */ "./source/img/noodles.png");
/* harmony import */ var _img_fish_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/fish.png */ "./source/img/fish.png");
/* harmony import */ var _img_pizza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pizza.png */ "./source/img/pizza.png");
/* harmony import */ var _img_hamburguer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/hamburguer.png */ "./source/img/hamburguer.png");







//simplify code section


function mkEl(el){
return document.createElement(el);
}


function appendInDocument(el){
document.body.appendChild(el);
}

function append(el,el2){
el.appendChild(el2)
}


function createFood(foodname, price, image, foodInfo){
const li = mkEl('li');




const figure = mkEl('figure')

let img = mkEl('img');
img.src = image;

let foodName = mkEl('figCaption');
foodName.innerText = foodname;

const foodAndPriceInfoContainer = mkEl('div');

let foodInformation = mkEl('p');
foodInformation.innerText = foodInfo;

let priceInformation = mkEl('h3');
priceInformation.innerText = price;

append(foodList, li);
append(li, figure);
append(figure, img);
append(figure, foodAndPriceInfoContainer);
append(foodAndPriceInfoContainer, foodName);
append(foodAndPriceInfoContainer, priceInformation);
append(li, foodInformation);

}






//header section 

const header = mkEl('header');
const tittle = mkEl('h1');
tittle.innerHTML = `Walfa Restaurant <span> by <a href='https://gabbeeto.github.io/' target='_blank'>gabbeto</a> </span>`;


appendInDocument(header);
append(header, tittle);



const main = mkEl('main');
appendInDocument(main);

const sectionForButtons = mkEl('Section');
sectionForButtons.id = 'buttonSection';

const homeButton = mkEl('button');
homeButton.innerText = 'home';


const menuButton = mkEl('button');
menuButton.innerText = 'menu';


const aboutButton = mkEl('button');
aboutButton.innerText = 'about me';



append(main, sectionForButtons);
append(sectionForButtons, homeButton);
append(sectionForButtons, menuButton);
append(sectionForButtons, aboutButton);







//home section
const sectionForHome = mkEl('section')
sectionForHome.id = 'home';


const homeTittle = mkEl('h2')
homeTittle.innerText = 'Welcome to Restaurant'


const homeDescription = mkEl('p')
homeDescription.innerText = `This Restaurant is made for the walfa community so walfas can have a great place to go and eat together. non-walfas are also welcomed to the restaurant. We hope you have a great time right here. if you are a 'loquendero'/'loquender', we have a special meal for you. We do not condome any violence nor any malicious activity. Thank you for reading.`


append(main, sectionForHome);
append(sectionForHome, homeTittle);
append(sectionForHome, homeDescription);











//menu section
const sectionForMenu = mkEl('section');
sectionForMenu.id = 'menu';

const foodList  = mkEl('ul');






append(main, sectionForMenu);
append(sectionForMenu, foodList);
createFood('noodles','3$', _img_noodles_png__WEBPACK_IMPORTED_MODULE_1__, 'my favorite food')
createFood('pizza', '5$' ,_img_pizza_png__WEBPACK_IMPORTED_MODULE_3__,'I like this one' )
createFood('hamburguer', '4$', _img_hamburguer_png__WEBPACK_IMPORTED_MODULE_4__, 'I desire this one sometimes')
createFood('fish', '2$', _img_fish_png__WEBPACK_IMPORTED_MODULE_2__, `this is the one I hate, but it's loved by the walfa community`)












//'about us' section
const sectionForAbout = mkEl('section');
sectionForAbout.id = 'about';



const aboutMeTittle = mkEl('h2')
aboutMeTittle.innerText = 'I am Gabbeeto'


const aboutMeDescription = mkEl('p')
aboutMeDescription.innerText = `I usually code for fun, I hope you like this fake restaurant, I've been learning how to code for few months`;

append(main, sectionForAbout);
append(sectionForAbout, aboutMeTittle);
append(sectionForAbout, aboutMeDescription);





/***/ }),

/***/ "./source/img/fish.png":
/*!*****************************!*\
  !*** ./source/img/fish.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fish.png";

/***/ }),

/***/ "./source/img/hamburguer.png":
/*!***********************************!*\
  !*** ./source/img/hamburguer.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hamburguer.png";

/***/ }),

/***/ "./source/img/noodles.png":
/*!********************************!*\
  !*** ./source/img/noodles.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "noodles.png";

/***/ }),

/***/ "./source/img/pizza.png":
/*!******************************!*\
  !*** ./source/img/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza.png";

/***/ }),

/***/ "./source/styling/fonts/Butter.otf":
/*!*****************************************!*\
  !*** ./source/styling/fonts/Butter.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Butter.otf";

/***/ }),

/***/ "./source/styling/fonts/Darling.ttf":
/*!******************************************!*\
  !*** ./source/styling/fonts/Darling.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Darling.ttf";

/***/ }),

/***/ "./source/styling/fonts/Voice In My Head.otf":
/*!***************************************************!*\
  !*** ./source/styling/fonts/Voice In My Head.otf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Voice In My Head.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html.js */ "./source/html.js");


displaySection(_html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForHome, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForMenu, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForAbout);

_html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForButtons.addEventListener('click',openTab)

function openTab(event){
if(event.target == _html_js__WEBPACK_IMPORTED_MODULE_0__.homeButton){
displaySection(_html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForHome, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForMenu, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForAbout);
}
else if(event.target == _html_js__WEBPACK_IMPORTED_MODULE_0__.menuButton){
displaySection(_html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForMenu, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForHome, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForAbout);
}
else if(event.target == _html_js__WEBPACK_IMPORTED_MODULE_0__.aboutButton){
displaySection(_html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForAbout, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForHome, _html_js__WEBPACK_IMPORTED_MODULE_0__.sectionForMenu);
}
}

function displaySection(displayedSection, UndisplayedSection1, UndisplayedSection2){
displayedSection.style.display = 'flex';
UndisplayedSection1.style.display = 'none';
UndisplayedSection2.style.display = 'none';
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0RBQWMsRUFBRSxvREFBYyxFQUFFLHFEQUFlO0FBQzlEO0FBQ0Esd0JBQXdCLGlEQUFXO0FBQ25DLGVBQWUscURBQWUsRUFBRSxvREFBYyxFQUFFLG9EQUFjO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3M/ZGE4NSIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2UvaHRtbC5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2UvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9EYXJsaW5nLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQnV0dGVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvVm9pY2UgSW4gTXkgSGVhZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuXG5AZm9udC1mYWNle1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAncHJpY2UnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbjpyb290e1xuLS15ZWxsb3c6ICNmM2I4N2I7XG4tLWRhcmtZZWxsb3c6ICM5QTc0NEM7XG4tLWJyb3duOiAjMzUyOTIxO1xuLS1waW5rOiAjRkY3NEM0O1xuLS13aGl0ZTogd2hpdGU7XG4tLWJsYWNrOmJsYWNrO1xufVxuXG4qe1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbmgxLGgyLHAsZmlnQ2FwdGlvbiwgc3BhbiwgYnV0dG9ue1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmgye1xuZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDRweCk7XG59XG5cblxucHtcbmZvbnQtc2l6ZTogY2FsYygxcmVtICsgNHB4KTtcbm1heC13aWR0aDogOTh2dztcbn1cblxuZmlnY2FwdGlvbntcbmZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyA0cHgpIDtcbn1cblxuZmlndXJlIGgze1xuZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDRweCk7XG5mb250LWZhbWlseTogJ3ByaWNlJztcbn1cblxuXG5cblxuLypoZWFkZXIgc2VjdGlvbiovXG5oZWFkZXJ7XG5ib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuY29sb3I6IHZhcigtLXBpbmspO1xufVxuXG5oZWFkZXIgaDF7XG5kaXNwbGF5OiBmbGV4O1xuZ2FwOiAxMHB4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjQ2MHB4KXtcbmhlYWRlciBoMXtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5nYXA6IDJweDtcbn1cbn1cblxuYTpsaW5re1xuY29sb3I6ICNEQzgzODk7XG59XG5hOnZpc2l0ZWR7XG5jb2xvcjogI0NCODhFRjtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1haW4sIHNlY3Rpb24sIHNlY3Rpb246bnRoLW9mLXR5cGUoMykgZGl2e1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5zZWN0aW9uOm5vdChzZWN0aW9uOmZpcnN0LW9mLXR5cGUpe1xuZGlzcGxheTogbm9uZTtcbn1cblxuc2VjdGlvbjpmaXJzdC1vZi10eXBle1xuZ2FwOiA1cHg7XG5tYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zZWN0aW9uOm50aC1vZi10eXBlKDMpICBkaXZ7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzogMTBweDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkM4NUM7XG59XG5cblxuYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24pO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6IDE1cHg7XG5ib3JkZXItcmFkaXVzOiAzMHB4O1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuZm9udC1zaXplOiBjYWxjKDFyZW0gKyA1cHgpO1xufVxuXG5cbm1haW4sIHNlY3Rpb246bnRoLW9mLXR5cGUoMiksc2VjdGlvbjpudGgtb2YtdHlwZSg0KXtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5nYXA6IDEwcHg7XG59XG5cbnVse1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsMWZyKSk7XG5nYXA6IDMwcHg7XG59XG5cbmxpe1xubGlzdC1zdHlsZTogbm9uZTtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtZZWxsb3cpO1xud2lkdGg6IDk4JTtcbmhlaWdodDogOTglO1xuYWxpZ24tc2VsZjogY2VudGVyO1xuanVzdGlmeS1zZWxmOiBjZW50ZXI7XG5wYWRkaW5nOiAycHg7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5maWd1cmUsbGl7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW1ne1xud2lkdGg6IDgwJTtcbmhlaWdodDogODAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxzQkFBc0I7QUFDdEIsNENBQStCO0FBQy9COzs7QUFHQTtBQUNBLHFCQUFxQjtBQUNyQiw0Q0FBOEI7QUFDOUI7OztBQUdBO0FBQ0Esb0JBQW9CO0FBQ3BCLDRDQUEyQztBQUMzQzs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixjQUFjO0FBQ2QsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNULFVBQVU7QUFDVixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7OztBQUdBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QixvQkFBb0I7QUFDcEI7Ozs7O0FBS0EsaUJBQWlCO0FBQ2pCO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7O0FBR0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekI7OztBQUdBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsMkJBQTJCO0FBQzNCOzs7QUFHQTtBQUNBLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsMERBQTBEO0FBQzFELFNBQVM7QUFDVDs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixtQ0FBbUM7QUFDbkMsVUFBVTtBQUNWLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG5zcmM6IHVybCgnLi9mb250cy9EYXJsaW5nLnR0ZicpO1xcbn1cXG5cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5zcmM6IHVybCgnLi9mb250cy9CdXR0ZXIub3RmJyk7XFxufVxcblxcblxcbkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdwcmljZSc7XFxuc3JjOiB1cmwoJy4vZm9udHMvVm9pY2VcXFxcIEluXFxcXCBNeVxcXFwgSGVhZC5vdGYnKTtcXG59XFxuXFxuOnJvb3R7XFxuLS15ZWxsb3c6ICNmM2I4N2I7XFxuLS1kYXJrWWVsbG93OiAjOUE3NDRDO1xcbi0tYnJvd246ICMzNTI5MjE7XFxuLS1waW5rOiAjRkY3NEM0O1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tYmxhY2s6YmxhY2s7XFxufVxcblxcbip7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuaDEsaDIscCxmaWdDYXB0aW9uLCBzcGFuLCBidXR0b257XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5oMntcXG5mb250LXNpemU6IGNhbGMoMS41cmVtICsgNHB4KTtcXG59XFxuXFxuXFxucHtcXG5mb250LXNpemU6IGNhbGMoMXJlbSArIDRweCk7XFxubWF4LXdpZHRoOiA5OHZ3O1xcbn1cXG5cXG5maWdjYXB0aW9ue1xcbmZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyA0cHgpIDtcXG59XFxuXFxuZmlndXJlIGgze1xcbmZvbnQtc2l6ZTogY2FsYygxLjZyZW0gKyA0cHgpO1xcbmZvbnQtZmFtaWx5OiAncHJpY2UnO1xcbn1cXG5cXG5cXG5cXG5cXG4vKmhlYWRlciBzZWN0aW9uKi9cXG5oZWFkZXJ7XFxuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duKTtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuY29sb3I6IHZhcigtLXBpbmspO1xcbn1cXG5cXG5oZWFkZXIgaDF7XFxuZGlzcGxheTogZmxleDtcXG5nYXA6IDEwcHg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhKG1heC13aWR0aDo0NjBweCl7XFxuaGVhZGVyIGgxe1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuZ2FwOiAycHg7XFxufVxcbn1cXG5cXG5hOmxpbmt7XFxuY29sb3I6ICNEQzgzODk7XFxufVxcbmE6dmlzaXRlZHtcXG5jb2xvcjogI0NCODhFRjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxubWFpbiwgc2VjdGlvbiwgc2VjdGlvbjpudGgtb2YtdHlwZSgzKSBkaXZ7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5zZWN0aW9uOm5vdChzZWN0aW9uOmZpcnN0LW9mLXR5cGUpe1xcbmRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZXtcXG5nYXA6IDVweDtcXG5tYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5zZWN0aW9uOm50aC1vZi10eXBlKDMpICBkaXZ7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6IDEwcHg7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmJhY2tncm91bmQtY29sb3I6ICNGRkM4NUM7XFxufVxcblxcblxcbmJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XFxucGFkZGluZzogMTVweDtcXG5ib3JkZXItcmFkaXVzOiAzMHB4O1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5mb250LXNpemU6IGNhbGMoMXJlbSArIDVweCk7XFxufVxcblxcblxcbm1haW4sIHNlY3Rpb246bnRoLW9mLXR5cGUoMiksc2VjdGlvbjpudGgtb2YtdHlwZSg0KXtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMTBweDtcXG59XFxuXFxudWx7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LDFmcikpO1xcbmdhcDogMzBweDtcXG59XFxuXFxubGl7XFxubGlzdC1zdHlsZTogbm9uZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrWWVsbG93KTtcXG53aWR0aDogOTglO1xcbmhlaWdodDogOTglO1xcbmFsaWduLXNlbGY6IGNlbnRlcjtcXG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5wYWRkaW5nOiAycHg7XFxuYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuZmlndXJlLGxpe1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbWd7XFxud2lkdGg6IDgwJTtcXG5oZWlnaHQ6IDgwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGluZy9zdHlsZS5jc3MnO1xuaW1wb3J0IG5vb2RsZXNJbWcgZnJvbSAnLi9pbWcvbm9vZGxlcy5wbmcnXG5pbXBvcnQgZmlzaEltZyBmcm9tICcuL2ltZy9maXNoLnBuZydcbmltcG9ydCBwaXp6YUltZyBmcm9tICcuL2ltZy9waXp6YS5wbmcnXG5pbXBvcnQgaGFtYnVyZ3VlckltZyBmcm9tICcuL2ltZy9oYW1idXJndWVyLnBuZydcblxuXG4vL3NpbXBsaWZ5IGNvZGUgc2VjdGlvblxuXG5cbmZ1bmN0aW9uIG1rRWwoZWwpe1xucmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZEluRG9jdW1lbnQoZWwpe1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChlbCxlbDIpe1xuZWwuYXBwZW5kQ2hpbGQoZWwyKVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2QoZm9vZG5hbWUsIHByaWNlLCBpbWFnZSwgZm9vZEluZm8pe1xuY29uc3QgbGkgPSBta0VsKCdsaScpO1xuXG5cblxuXG5jb25zdCBmaWd1cmUgPSBta0VsKCdmaWd1cmUnKVxuXG5sZXQgaW1nID0gbWtFbCgnaW1nJyk7XG5pbWcuc3JjID0gaW1hZ2U7XG5cbmxldCBmb29kTmFtZSA9IG1rRWwoJ2ZpZ0NhcHRpb24nKTtcbmZvb2ROYW1lLmlubmVyVGV4dCA9IGZvb2RuYW1lO1xuXG5jb25zdCBmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyID0gbWtFbCgnZGl2Jyk7XG5cbmxldCBmb29kSW5mb3JtYXRpb24gPSBta0VsKCdwJyk7XG5mb29kSW5mb3JtYXRpb24uaW5uZXJUZXh0ID0gZm9vZEluZm87XG5cbmxldCBwcmljZUluZm9ybWF0aW9uID0gbWtFbCgnaDMnKTtcbnByaWNlSW5mb3JtYXRpb24uaW5uZXJUZXh0ID0gcHJpY2U7XG5cbmFwcGVuZChmb29kTGlzdCwgbGkpO1xuYXBwZW5kKGxpLCBmaWd1cmUpO1xuYXBwZW5kKGZpZ3VyZSwgaW1nKTtcbmFwcGVuZChmaWd1cmUsIGZvb2RBbmRQcmljZUluZm9Db250YWluZXIpO1xuYXBwZW5kKGZvb2RBbmRQcmljZUluZm9Db250YWluZXIsIGZvb2ROYW1lKTtcbmFwcGVuZChmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyLCBwcmljZUluZm9ybWF0aW9uKTtcbmFwcGVuZChsaSwgZm9vZEluZm9ybWF0aW9uKTtcblxufVxuXG5cblxuXG5cblxuLy9oZWFkZXIgc2VjdGlvbiBcblxuY29uc3QgaGVhZGVyID0gbWtFbCgnaGVhZGVyJyk7XG5jb25zdCB0aXR0bGUgPSBta0VsKCdoMScpO1xudGl0dGxlLmlubmVySFRNTCA9IGBXYWxmYSBSZXN0YXVyYW50IDxzcGFuPiBieSA8YSBocmVmPSdodHRwczovL2dhYmJlZXRvLmdpdGh1Yi5pby8nIHRhcmdldD0nX2JsYW5rJz5nYWJiZXRvPC9hPiA8L3NwYW4+YDtcblxuXG5hcHBlbmRJbkRvY3VtZW50KGhlYWRlcik7XG5hcHBlbmQoaGVhZGVyLCB0aXR0bGUpO1xuXG5cblxuY29uc3QgbWFpbiA9IG1rRWwoJ21haW4nKTtcbmFwcGVuZEluRG9jdW1lbnQobWFpbik7XG5cbmV4cG9ydCBjb25zdCBzZWN0aW9uRm9yQnV0dG9ucyA9IG1rRWwoJ1NlY3Rpb24nKTtcbnNlY3Rpb25Gb3JCdXR0b25zLmlkID0gJ2J1dHRvblNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaG9tZUJ1dHRvbiA9IG1rRWwoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnaG9tZSc7XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b24gPSBta0VsKCdidXR0b24nKTtcbm1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ21lbnUnO1xuXG5cbmV4cG9ydCBjb25zdCBhYm91dEJ1dHRvbiA9IG1rRWwoJ2J1dHRvbicpO1xuYWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gJ2Fib3V0IG1lJztcblxuXG5cbmFwcGVuZChtYWluLCBzZWN0aW9uRm9yQnV0dG9ucyk7XG5hcHBlbmQoc2VjdGlvbkZvckJ1dHRvbnMsIGhvbWVCdXR0b24pO1xuYXBwZW5kKHNlY3Rpb25Gb3JCdXR0b25zLCBtZW51QnV0dG9uKTtcbmFwcGVuZChzZWN0aW9uRm9yQnV0dG9ucywgYWJvdXRCdXR0b24pO1xuXG5cblxuXG5cblxuXG4vL2hvbWUgc2VjdGlvblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Gb3JIb21lID0gbWtFbCgnc2VjdGlvbicpXG5zZWN0aW9uRm9ySG9tZS5pZCA9ICdob21lJztcblxuXG5jb25zdCBob21lVGl0dGxlID0gbWtFbCgnaDInKVxuaG9tZVRpdHRsZS5pbm5lclRleHQgPSAnV2VsY29tZSB0byBSZXN0YXVyYW50J1xuXG5cbmNvbnN0IGhvbWVEZXNjcmlwdGlvbiA9IG1rRWwoJ3AnKVxuaG9tZURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGBUaGlzIFJlc3RhdXJhbnQgaXMgbWFkZSBmb3IgdGhlIHdhbGZhIGNvbW11bml0eSBzbyB3YWxmYXMgY2FuIGhhdmUgYSBncmVhdCBwbGFjZSB0byBnbyBhbmQgZWF0IHRvZ2V0aGVyLiBub24td2FsZmFzIGFyZSBhbHNvIHdlbGNvbWVkIHRvIHRoZSByZXN0YXVyYW50LiBXZSBob3BlIHlvdSBoYXZlIGEgZ3JlYXQgdGltZSByaWdodCBoZXJlLiBpZiB5b3UgYXJlIGEgJ2xvcXVlbmRlcm8nLydsb3F1ZW5kZXInLCB3ZSBoYXZlIGEgc3BlY2lhbCBtZWFsIGZvciB5b3UuIFdlIGRvIG5vdCBjb25kb21lIGFueSB2aW9sZW5jZSBub3IgYW55IG1hbGljaW91cyBhY3Rpdml0eS4gVGhhbmsgeW91IGZvciByZWFkaW5nLmBcblxuXG5hcHBlbmQobWFpbiwgc2VjdGlvbkZvckhvbWUpO1xuYXBwZW5kKHNlY3Rpb25Gb3JIb21lLCBob21lVGl0dGxlKTtcbmFwcGVuZChzZWN0aW9uRm9ySG9tZSwgaG9tZURlc2NyaXB0aW9uKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4vL21lbnUgc2VjdGlvblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Gb3JNZW51ID0gbWtFbCgnc2VjdGlvbicpO1xuc2VjdGlvbkZvck1lbnUuaWQgPSAnbWVudSc7XG5cbmNvbnN0IGZvb2RMaXN0ICA9IG1rRWwoJ3VsJyk7XG5cblxuXG5cblxuXG5hcHBlbmQobWFpbiwgc2VjdGlvbkZvck1lbnUpO1xuYXBwZW5kKHNlY3Rpb25Gb3JNZW51LCBmb29kTGlzdCk7XG5jcmVhdGVGb29kKCdub29kbGVzJywnMyQnLCBub29kbGVzSW1nLCAnbXkgZmF2b3JpdGUgZm9vZCcpXG5jcmVhdGVGb29kKCdwaXp6YScsICc1JCcgLHBpenphSW1nLCdJIGxpa2UgdGhpcyBvbmUnIClcbmNyZWF0ZUZvb2QoJ2hhbWJ1cmd1ZXInLCAnNCQnLCBoYW1idXJndWVySW1nLCAnSSBkZXNpcmUgdGhpcyBvbmUgc29tZXRpbWVzJylcbmNyZWF0ZUZvb2QoJ2Zpc2gnLCAnMiQnLCBmaXNoSW1nLCBgdGhpcyBpcyB0aGUgb25lIEkgaGF0ZSwgYnV0IGl0J3MgbG92ZWQgYnkgdGhlIHdhbGZhIGNvbW11bml0eWApXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLydhYm91dCB1cycgc2VjdGlvblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Gb3JBYm91dCA9IG1rRWwoJ3NlY3Rpb24nKTtcbnNlY3Rpb25Gb3JBYm91dC5pZCA9ICdhYm91dCc7XG5cblxuXG5jb25zdCBhYm91dE1lVGl0dGxlID0gbWtFbCgnaDInKVxuYWJvdXRNZVRpdHRsZS5pbm5lclRleHQgPSAnSSBhbSBHYWJiZWV0bydcblxuXG5jb25zdCBhYm91dE1lRGVzY3JpcHRpb24gPSBta0VsKCdwJylcbmFib3V0TWVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgSSB1c3VhbGx5IGNvZGUgZm9yIGZ1biwgSSBob3BlIHlvdSBsaWtlIHRoaXMgZmFrZSByZXN0YXVyYW50LCBJJ3ZlIGJlZW4gbGVhcm5pbmcgaG93IHRvIGNvZGUgZm9yIGZldyBtb250aHNgO1xuXG5hcHBlbmQobWFpbiwgc2VjdGlvbkZvckFib3V0KTtcbmFwcGVuZChzZWN0aW9uRm9yQWJvdXQsIGFib3V0TWVUaXR0bGUpO1xuYXBwZW5kKHNlY3Rpb25Gb3JBYm91dCwgYWJvdXRNZURlc2NyaXB0aW9uKTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc2VjdGlvbkZvckJ1dHRvbnMsIGhvbWVCdXR0b24sYWJvdXRCdXR0b24sbWVudUJ1dHRvbiwgc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9yQWJvdXQgfSBmcm9tIFwiLi9odG1sLmpzXCI7XG5cbmRpc3BsYXlTZWN0aW9uKHNlY3Rpb25Gb3JIb21lLCBzZWN0aW9uRm9yTWVudSwgc2VjdGlvbkZvckFib3V0KTtcblxuc2VjdGlvbkZvckJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG9wZW5UYWIpXG5cbmZ1bmN0aW9uIG9wZW5UYWIoZXZlbnQpe1xuaWYoZXZlbnQudGFyZ2V0ID09IGhvbWVCdXR0b24pe1xuZGlzcGxheVNlY3Rpb24oc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9yQWJvdXQpO1xufVxuZWxzZSBpZihldmVudC50YXJnZXQgPT0gbWVudUJ1dHRvbil7XG5kaXNwbGF5U2VjdGlvbihzZWN0aW9uRm9yTWVudSwgc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JBYm91dCk7XG59XG5lbHNlIGlmKGV2ZW50LnRhcmdldCA9PSBhYm91dEJ1dHRvbil7XG5kaXNwbGF5U2VjdGlvbihzZWN0aW9uRm9yQWJvdXQsIHNlY3Rpb25Gb3JIb21lLCBzZWN0aW9uRm9yTWVudSk7XG59XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZWN0aW9uKGRpc3BsYXllZFNlY3Rpb24sIFVuZGlzcGxheWVkU2VjdGlvbjEsIFVuZGlzcGxheWVkU2VjdGlvbjIpe1xuZGlzcGxheWVkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuVW5kaXNwbGF5ZWRTZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuVW5kaXNwbGF5ZWRTZWN0aW9uMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=