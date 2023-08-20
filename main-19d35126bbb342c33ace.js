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


/*figcaption from home section*/
section:nth-of-type(2) figcaption{
font-size: 3.9vw ;
/*font-size: min(7.5vw,calc(3rem + 4px)) ;*/
}

/*figcaption from menu section*/
section:nth-of-type(3) figcaption{
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


section:nth-of-type(2) figure{
position: relative;
width: 90vw;
height: 40vw;
}


section:nth-of-type(2) img{
width: 100%;
height: 100%;
border-radius: 20px;

}


section:nth-of-type(2) figcaption{
position: absolute;
padding: 2px;
border-radius: 10px;
opacity: 0.65;
top: 2vw;
left: 50vw;
transform: translateX(-56%);
color: white;
background-color: var(--black);
font-family: 'button';
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
`, "",{"version":3,"sources":["webpack://./source/styling/style.css"],"names":[],"mappings":"AAAA;AACA,sBAAsB;AACtB,4CAA+B;AAC/B;;;AAGA;AACA,qBAAqB;AACrB,4CAA8B;AAC9B;;;AAGA;AACA,oBAAoB;AACpB,4CAA2C;AAC3C;;AAEA;AACA,iBAAiB;AACjB,qBAAqB;AACrB,gBAAgB;AAChB,eAAe;AACf,cAAc;AACd,aAAa;AACb;;AAEA;AACA,SAAS;AACT,UAAU;AACV,sBAAsB;AACtB;;AAEA;AACA,+BAA+B;AAC/B,sBAAsB;AACtB,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;;AAElB;;AAEA;AACA,6BAA6B;AAC7B;;;AAGA;AACA,2BAA2B;AAC3B,eAAe;AACf;;;AAGA,+BAA+B;AAC/B;AACA,iBAAiB;AACjB,2CAA2C;AAC3C;;AAEA,+BAA+B;AAC/B;AACA,8BAA8B;AAC9B;;;AAGA;AACA,6BAA6B;AAC7B,oBAAoB;AACpB;;;;;AAKA,iBAAiB;AACjB;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,SAAS;AACT,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;AACA;AACA,sBAAsB;AACtB,QAAQ;AACR;AACA;;AAEA;AACA,cAAc;AACd;AACA;AACA,cAAc;AACd;;;;;;;;;;;;;AAaA;AACA,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB;;;AAGA;AACA,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ;;;AAGA;AACA,WAAW;AACX,YAAY;AACZ,mBAAmB;;AAEnB;;;AAGA;AACA,kBAAkB;AAClB,YAAY;AACZ,mBAAmB;AACnB,aAAa;AACb,QAAQ;AACR,UAAU;AACV,2BAA2B;AAC3B,YAAY;AACZ,8BAA8B;AAC9B,qBAAqB;AACrB;;;;AAIA;AACA,aAAa;AACb;;AAEA;AACA,QAAQ;AACR,gBAAgB;AAChB;;AAEA;AACA,sBAAsB;AACtB,kBAAkB;AAClB,8BAA8B;AAC9B,aAAa;AACb,kBAAkB;AAClB,yBAAyB;AACzB;;;AAGA;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,mBAAmB;AACnB,aAAa;AACb,mBAAmB;AACnB,qBAAqB;AACrB,2BAA2B;AAC3B;;;AAGA;AACA,sBAAsB;AACtB,SAAS;AACT;;AAEA;AACA,aAAa;AACb,0DAA0D;AAC1D,SAAS;AACT;;AAEA;AACA,gBAAgB;AAChB,mCAAmC;AACnC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,oBAAoB;AACpB,YAAY;AACZ,mBAAmB;AACnB;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,uBAAuB;AACvB,mBAAmB;AACnB;;;;AAIA;AACA,UAAU;AACV,WAAW;AACX","sourcesContent":["@font-face{\nfont-family: 'default';\nsrc: url('./fonts/Darling.ttf');\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url('./fonts/Butter.otf');\n}\n\n\n@font-face{\nfont-family: 'price';\nsrc: url('./fonts/Voice\\ In\\ My\\ Head.otf');\n}\n\n:root{\n--yellow: #f3b87b;\n--darkYellow: #9A744C;\n--brown: #352921;\n--pink: #FF74C4;\n--white: white;\n--black:black;\n}\n\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n\nbody{\nbackground-color: var(--yellow);\nfont-family: 'default';\ncolor: var(--black);\n}\n\nh1,h2,p,figCaption, span, button{\ntext-align: center;\n\n}\n\nh2{\nfont-size: calc(1.5rem + 4px);\n}\n\n\np{\nfont-size: calc(1rem + 4px);\nmax-width: 98vw;\n}\n\n\n/*figcaption from home section*/\nsection:nth-of-type(2) figcaption{\nfont-size: 3.9vw ;\n/*font-size: min(7.5vw,calc(3rem + 4px)) ;*/\n}\n\n/*figcaption from menu section*/\nsection:nth-of-type(3) figcaption{\nfont-size: calc(1.5rem + 4px) ;\n}\n\n\nfigure h3{\nfont-size: calc(1.6rem + 4px);\nfont-family: 'price';\n}\n\n\n\n\n/*header section*/\nheader{\nborder-bottom: 2px solid white;\nbackground-color: var(--brown);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: var(--pink);\n}\n\nheader h1{\ndisplay: flex;\ngap: 10px;\njustify-content: center;\nalign-items: center;\n}\n\n@media(max-width:460px){\nheader h1{\nflex-direction: column;\ngap: 2px;\n}\n}\n\na:link{\ncolor: #DC8389;\n}\na:visited{\ncolor: #CB88EF;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmain, section, section:nth-of-type(3) div{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n\nsection:nth-of-type(2) figure{\nposition: relative;\nwidth: 90vw;\nheight: 40vw;\n}\n\n\nsection:nth-of-type(2) img{\nwidth: 100%;\nheight: 100%;\nborder-radius: 20px;\n\n}\n\n\nsection:nth-of-type(2) figcaption{\nposition: absolute;\npadding: 2px;\nborder-radius: 10px;\nopacity: 0.65;\ntop: 2vw;\nleft: 50vw;\ntransform: translateX(-56%);\ncolor: white;\nbackground-color: var(--black);\nfont-family: 'button';\n}\n\n\n\nsection:not(section:first-of-type){\ndisplay: none;\n}\n\nsection:first-of-type{\ngap: 5px;\nmargin-top: 10px;\n}\n\nsection:nth-of-type(3)  div{\nflex-direction: column;\ntext-align: center;\nborder: 2px solid var(--black);\npadding: 10px;\nborder-radius: 5px;\nbackground-color: #FFC85C;\n}\n\n\nbutton{\nbackground-color: var(--brown);\nborder: 2px solid var(--white);\ncolor: var(--white);\npadding: 15px;\nborder-radius: 30px;\nfont-family: 'button';\nfont-size: calc(1rem + 5px);\n}\n\n\nmain, section:nth-of-type(2),section:nth-of-type(4){\nflex-direction: column;\ngap: 10px;\n}\n\nul{\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(200px,1fr));\ngap: 30px;\n}\n\nli{\nlist-style: none;\nbackground-color: var(--darkYellow);\nwidth: 98%;\nheight: 98%;\nalign-self: center;\njustify-self: center;\npadding: 2px;\nborder-radius: 10px;\n}\n\nfigure,li{\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n}\n\n\n\nimg{\nwidth: 80%;\nheight: 80%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_restaurantPicture_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/restaurantPicture.png */ "./source/img/restaurantPicture.png");
/* harmony import */ var _img_noodles_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/noodles.png */ "./source/img/noodles.png");
/* harmony import */ var _img_fish_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/fish.png */ "./source/img/fish.png");
/* harmony import */ var _img_pizza_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pizza.png */ "./source/img/pizza.png");
/* harmony import */ var _img_hamburguer_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/hamburguer.png */ "./source/img/hamburguer.png");








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

const mainFigure = mkEl('figure');


const mainPicture = mkEl('img');
mainPicture.src = _img_restaurantPicture_png__WEBPACK_IMPORTED_MODULE_1__;

const homeTittle = mkEl('figcaption')
homeTittle.innerText = 'Welcome to the Restaurant!'


const homeDescription = mkEl('p')
homeDescription.innerText = `This Restaurant is made for the walfa community so walfas can have a great place to go and eat together. non-walfas are also welcomed to the restaurant. We hope you have a great time right here. if you are a 'loquendero'/'loquender', we have a special meal for you. We do not condome any violence nor any malicious activity. Thank you for reading.`


append(main, sectionForHome);

append(sectionForHome, mainFigure);
append(mainFigure, mainPicture);
append(mainFigure, homeTittle);
append(sectionForHome, homeDescription);











//menu section
const sectionForMenu = mkEl('section');
sectionForMenu.id = 'menu';

const foodList  = mkEl('ul');






append(main, sectionForMenu);
append(sectionForMenu, foodList);
createFood('noodles','3$', _img_noodles_png__WEBPACK_IMPORTED_MODULE_2__, 'my favorite food')
createFood('pizza', '5$' ,_img_pizza_png__WEBPACK_IMPORTED_MODULE_4__,'I like this one' )
createFood('hamburguer', '4$', _img_hamburguer_png__WEBPACK_IMPORTED_MODULE_5__, 'I desire this one sometimes')
createFood('fish', '2$', _img_fish_png__WEBPACK_IMPORTED_MODULE_3__, `loved by walfas but not by me`)












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

/***/ "./source/img/restaurantPicture.png":
/*!******************************************!*\
  !*** ./source/img/restaurantPicture.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurantPicture.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7QUNBa0k7O0FBRWxJLGVBQWUsb0RBQWMsRUFBRSxvREFBYyxFQUFFLHFEQUFlOztBQUU5RCx1REFBaUI7O0FBRWpCO0FBQ0EsbUJBQW1CLGdEQUFVO0FBQzdCLGVBQWUsb0RBQWMsRUFBRSxvREFBYyxFQUFFLHFEQUFlO0FBQzlEO0FBQ0Esd0JBQXdCLGdEQUFVO0FBQ2xDLGVBQWUsb0RBQWMsRUFBRSxvREFBYyxFQUFFLHFEQUFlO0FBQzlEO0FBQ0Esd0JBQXdCLGlEQUFXO0FBQ25DLGVBQWUscURBQWUsRUFBRSxvREFBYyxFQUFFLG9EQUFjO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3M/ZGE4NSIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2UvaHRtbC5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9zb3VyY2UvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9EYXJsaW5nLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQnV0dGVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvVm9pY2UgSW4gTXkgSGVhZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuXG5AZm9udC1mYWNle1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAncHJpY2UnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbjpyb290e1xuLS15ZWxsb3c6ICNmM2I4N2I7XG4tLWRhcmtZZWxsb3c6ICM5QTc0NEM7XG4tLWJyb3duOiAjMzUyOTIxO1xuLS1waW5rOiAjRkY3NEM0O1xuLS13aGl0ZTogd2hpdGU7XG4tLWJsYWNrOmJsYWNrO1xufVxuXG4qe1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG59XG5cbmgxLGgyLHAsZmlnQ2FwdGlvbiwgc3BhbiwgYnV0dG9ue1xudGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbmgye1xuZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDRweCk7XG59XG5cblxucHtcbmZvbnQtc2l6ZTogY2FsYygxcmVtICsgNHB4KTtcbm1heC13aWR0aDogOTh2dztcbn1cblxuXG4vKmZpZ2NhcHRpb24gZnJvbSBob21lIHNlY3Rpb24qL1xuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSBmaWdjYXB0aW9ue1xuZm9udC1zaXplOiAzLjl2dyA7XG4vKmZvbnQtc2l6ZTogbWluKDcuNXZ3LGNhbGMoM3JlbSArIDRweCkpIDsqL1xufVxuXG4vKmZpZ2NhcHRpb24gZnJvbSBtZW51IHNlY3Rpb24qL1xuc2VjdGlvbjpudGgtb2YtdHlwZSgzKSBmaWdjYXB0aW9ue1xuZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDRweCkgO1xufVxuXG5cbmZpZ3VyZSBoM3tcbmZvbnQtc2l6ZTogY2FsYygxLjZyZW0gKyA0cHgpO1xuZm9udC1mYW1pbHk6ICdwcmljZSc7XG59XG5cblxuXG5cbi8qaGVhZGVyIHNlY3Rpb24qL1xuaGVhZGVye1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24pO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmNvbG9yOiB2YXIoLS1waW5rKTtcbn1cblxuaGVhZGVyIGgxe1xuZGlzcGxheTogZmxleDtcbmdhcDogMTBweDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhKG1heC13aWR0aDo0NjBweCl7XG5oZWFkZXIgaDF7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuZ2FwOiAycHg7XG59XG59XG5cbmE6bGlua3tcbmNvbG9yOiAjREM4Mzg5O1xufVxuYTp2aXNpdGVke1xuY29sb3I6ICNDQjg4RUY7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYWluLCBzZWN0aW9uLCBzZWN0aW9uOm50aC1vZi10eXBlKDMpIGRpdntcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSBmaWd1cmV7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG53aWR0aDogOTB2dztcbmhlaWdodDogNDB2dztcbn1cblxuXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIGltZ3tcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuYm9yZGVyLXJhZGl1czogMjBweDtcblxufVxuXG5cbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgZmlnY2FwdGlvbntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnBhZGRpbmc6IDJweDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5vcGFjaXR5OiAwLjY1O1xudG9wOiAydnc7XG5sZWZ0OiA1MHZ3O1xudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01NiUpO1xuY29sb3I6IHdoaXRlO1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xufVxuXG5cblxuc2VjdGlvbjpub3Qoc2VjdGlvbjpmaXJzdC1vZi10eXBlKXtcbmRpc3BsYXk6IG5vbmU7XG59XG5cbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZXtcbmdhcDogNXB4O1xubWFyZ2luLXRvcDogMTBweDtcbn1cblxuc2VjdGlvbjpudGgtb2YtdHlwZSgzKSAgZGl2e1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDEwcHg7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDODVDO1xufVxuXG5cbmJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5wYWRkaW5nOiAxNXB4O1xuYm9yZGVyLXJhZGl1czogMzBweDtcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcbmZvbnQtc2l6ZTogY2FsYygxcmVtICsgNXB4KTtcbn1cblxuXG5tYWluLCBzZWN0aW9uOm50aC1vZi10eXBlKDIpLHNlY3Rpb246bnRoLW9mLXR5cGUoNCl7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuZ2FwOiAxMHB4O1xufVxuXG51bHtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LDFmcikpO1xuZ2FwOiAzMHB4O1xufVxuXG5saXtcbmxpc3Qtc3R5bGU6IG5vbmU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrWWVsbG93KTtcbndpZHRoOiA5OCU7XG5oZWlnaHQ6IDk4JTtcbmFsaWduLXNlbGY6IGNlbnRlcjtcbmp1c3RpZnktc2VsZjogY2VudGVyO1xucGFkZGluZzogMnB4O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuZmlndXJlLGxpe1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG5pbWd7XG53aWR0aDogODAlO1xuaGVpZ2h0OiA4MCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NvdXJjZS9zdHlsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLHNCQUFzQjtBQUN0Qiw0Q0FBK0I7QUFDL0I7OztBQUdBO0FBQ0EscUJBQXFCO0FBQ3JCLDRDQUE4QjtBQUM5Qjs7O0FBR0E7QUFDQSxvQkFBb0I7QUFDcEIsNENBQTJDO0FBQzNDOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLGNBQWM7QUFDZCxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qjs7O0FBR0E7QUFDQSwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmOzs7QUFHQSwrQkFBK0I7QUFDL0I7QUFDQSxpQkFBaUI7QUFDakIsMkNBQTJDO0FBQzNDOztBQUVBLCtCQUErQjtBQUMvQjtBQUNBLDhCQUE4QjtBQUM5Qjs7O0FBR0E7QUFDQSw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCOzs7OztBQUtBLGlCQUFpQjtBQUNqQjtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkI7OztBQUdBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxZQUFZO0FBQ1o7OztBQUdBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixtQkFBbUI7O0FBRW5COzs7QUFHQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixRQUFRO0FBQ1IsVUFBVTtBQUNWLDJCQUEyQjtBQUMzQixZQUFZO0FBQ1osOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjs7OztBQUlBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCOzs7QUFHQTtBQUNBLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLDJCQUEyQjtBQUMzQjs7O0FBR0E7QUFDQSxzQkFBc0I7QUFDdEIsU0FBUztBQUNUOztBQUVBO0FBQ0EsYUFBYTtBQUNiLDBEQUEwRDtBQUMxRCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsbUNBQW1DO0FBQ25DLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixZQUFZO0FBQ1osbUJBQW1CO0FBQ25COztBQUVBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COzs7O0FBSUE7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG5zcmM6IHVybCgnLi9mb250cy9EYXJsaW5nLnR0ZicpO1xcbn1cXG5cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5zcmM6IHVybCgnLi9mb250cy9CdXR0ZXIub3RmJyk7XFxufVxcblxcblxcbkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdwcmljZSc7XFxuc3JjOiB1cmwoJy4vZm9udHMvVm9pY2VcXFxcIEluXFxcXCBNeVxcXFwgSGVhZC5vdGYnKTtcXG59XFxuXFxuOnJvb3R7XFxuLS15ZWxsb3c6ICNmM2I4N2I7XFxuLS1kYXJrWWVsbG93OiAjOUE3NDRDO1xcbi0tYnJvd246ICMzNTI5MjE7XFxuLS1waW5rOiAjRkY3NEM0O1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tYmxhY2s6YmxhY2s7XFxufVxcblxcbip7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuaDEsaDIscCxmaWdDYXB0aW9uLCBzcGFuLCBidXR0b257XFxudGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG5oMntcXG5mb250LXNpemU6IGNhbGMoMS41cmVtICsgNHB4KTtcXG59XFxuXFxuXFxucHtcXG5mb250LXNpemU6IGNhbGMoMXJlbSArIDRweCk7XFxubWF4LXdpZHRoOiA5OHZ3O1xcbn1cXG5cXG5cXG4vKmZpZ2NhcHRpb24gZnJvbSBob21lIHNlY3Rpb24qL1xcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgZmlnY2FwdGlvbntcXG5mb250LXNpemU6IDMuOXZ3IDtcXG4vKmZvbnQtc2l6ZTogbWluKDcuNXZ3LGNhbGMoM3JlbSArIDRweCkpIDsqL1xcbn1cXG5cXG4vKmZpZ2NhcHRpb24gZnJvbSBtZW51IHNlY3Rpb24qL1xcbnNlY3Rpb246bnRoLW9mLXR5cGUoMykgZmlnY2FwdGlvbntcXG5mb250LXNpemU6IGNhbGMoMS41cmVtICsgNHB4KSA7XFxufVxcblxcblxcbmZpZ3VyZSBoM3tcXG5mb250LXNpemU6IGNhbGMoMS42cmVtICsgNHB4KTtcXG5mb250LWZhbWlseTogJ3ByaWNlJztcXG59XFxuXFxuXFxuXFxuXFxuLypoZWFkZXIgc2VjdGlvbiovXFxuaGVhZGVye1xcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmNvbG9yOiB2YXIoLS1waW5rKTtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbmRpc3BsYXk6IGZsZXg7XFxuZ2FwOiAxMHB4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYShtYXgtd2lkdGg6NDYwcHgpe1xcbmhlYWRlciBoMXtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmdhcDogMnB4O1xcbn1cXG59XFxuXFxuYTpsaW5re1xcbmNvbG9yOiAjREM4Mzg5O1xcbn1cXG5hOnZpc2l0ZWR7XFxuY29sb3I6ICNDQjg4RUY7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbm1haW4sIHNlY3Rpb24sIHNlY3Rpb246bnRoLW9mLXR5cGUoMykgZGl2e1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSBmaWd1cmV7XFxucG9zaXRpb246IHJlbGF0aXZlO1xcbndpZHRoOiA5MHZ3O1xcbmhlaWdodDogNDB2dztcXG59XFxuXFxuXFxuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSBpbWd7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbmJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxufVxcblxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgZmlnY2FwdGlvbntcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxucGFkZGluZzogMnB4O1xcbmJvcmRlci1yYWRpdXM6IDEwcHg7XFxub3BhY2l0eTogMC42NTtcXG50b3A6IDJ2dztcXG5sZWZ0OiA1MHZ3O1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTYlKTtcXG5jb2xvcjogd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG59XFxuXFxuXFxuXFxuc2VjdGlvbjpub3Qoc2VjdGlvbjpmaXJzdC1vZi10eXBlKXtcXG5kaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGV7XFxuZ2FwOiA1cHg7XFxubWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuc2VjdGlvbjpudGgtb2YtdHlwZSgzKSAgZGl2e1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxudGV4dC1hbGlnbjogY2VudGVyO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiAxMHB4O1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDODVDO1xcbn1cXG5cXG5cXG5idXR0b257XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24pO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0td2hpdGUpO1xcbnBhZGRpbmc6IDE1cHg7XFxuYm9yZGVyLXJhZGl1czogMzBweDtcXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxuZm9udC1zaXplOiBjYWxjKDFyZW0gKyA1cHgpO1xcbn1cXG5cXG5cXG5tYWluLCBzZWN0aW9uOm50aC1vZi10eXBlKDIpLHNlY3Rpb246bnRoLW9mLXR5cGUoNCl7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5nYXA6IDEwcHg7XFxufVxcblxcbnVse1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwxZnIpKTtcXG5nYXA6IDMwcHg7XFxufVxcblxcbmxpe1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1llbGxvdyk7XFxud2lkdGg6IDk4JTtcXG5oZWlnaHQ6IDk4JTtcXG5hbGlnbi1zZWxmOiBjZW50ZXI7XFxuanVzdGlmeS1zZWxmOiBjZW50ZXI7XFxucGFkZGluZzogMnB4O1xcbmJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmZpZ3VyZSxsaXtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuaW1ne1xcbndpZHRoOiA4MCU7XFxuaGVpZ2h0OiA4MCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxpbmcvc3R5bGUuY3NzJztcbmltcG9ydCBtYWluSW1nIGZyb20gJy4vaW1nL3Jlc3RhdXJhbnRQaWN0dXJlLnBuZydcbmltcG9ydCBub29kbGVzSW1nIGZyb20gJy4vaW1nL25vb2RsZXMucG5nJ1xuaW1wb3J0IGZpc2hJbWcgZnJvbSAnLi9pbWcvZmlzaC5wbmcnXG5pbXBvcnQgcGl6emFJbWcgZnJvbSAnLi9pbWcvcGl6emEucG5nJ1xuaW1wb3J0IGhhbWJ1cmd1ZXJJbWcgZnJvbSAnLi9pbWcvaGFtYnVyZ3Vlci5wbmcnXG5cblxuLy9zaW1wbGlmeSBjb2RlIHNlY3Rpb25cblxuXG5mdW5jdGlvbiBta0VsKGVsKXtcbnJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbn1cblxuXG5mdW5jdGlvbiBhcHBlbmRJbkRvY3VtZW50KGVsKXtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoZWwsZWwyKXtcbmVsLmFwcGVuZENoaWxkKGVsMilcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb29kKGZvb2RuYW1lLCBwcmljZSwgaW1hZ2UsIGZvb2RJbmZvKXtcbmNvbnN0IGxpID0gbWtFbCgnbGknKTtcblxuXG5cblxuY29uc3QgZmlndXJlID0gbWtFbCgnZmlndXJlJylcblxubGV0IGltZyA9IG1rRWwoJ2ltZycpO1xuaW1nLnNyYyA9IGltYWdlO1xuXG5sZXQgZm9vZE5hbWUgPSBta0VsKCdmaWdDYXB0aW9uJyk7XG5mb29kTmFtZS5pbm5lclRleHQgPSBmb29kbmFtZTtcblxuY29uc3QgZm9vZEFuZFByaWNlSW5mb0NvbnRhaW5lciA9IG1rRWwoJ2RpdicpO1xuXG5sZXQgZm9vZEluZm9ybWF0aW9uID0gbWtFbCgncCcpO1xuZm9vZEluZm9ybWF0aW9uLmlubmVyVGV4dCA9IGZvb2RJbmZvO1xuXG5sZXQgcHJpY2VJbmZvcm1hdGlvbiA9IG1rRWwoJ2gzJyk7XG5wcmljZUluZm9ybWF0aW9uLmlubmVyVGV4dCA9IHByaWNlO1xuXG5hcHBlbmQoZm9vZExpc3QsIGxpKTtcbmFwcGVuZChsaSwgZmlndXJlKTtcbmFwcGVuZChmaWd1cmUsIGltZyk7XG5hcHBlbmQoZmlndXJlLCBmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyKTtcbmFwcGVuZChmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyLCBmb29kTmFtZSk7XG5hcHBlbmQoZm9vZEFuZFByaWNlSW5mb0NvbnRhaW5lciwgcHJpY2VJbmZvcm1hdGlvbik7XG5hcHBlbmQobGksIGZvb2RJbmZvcm1hdGlvbik7XG5cbn1cblxuXG5cblxuXG5cbi8vaGVhZGVyIHNlY3Rpb24gXG5cbmNvbnN0IGhlYWRlciA9IG1rRWwoJ2hlYWRlcicpO1xuY29uc3QgdGl0dGxlID0gbWtFbCgnaDEnKTtcbnRpdHRsZS5pbm5lckhUTUwgPSBgV2FsZmEgUmVzdGF1cmFudCA8c3Bhbj4gYnkgPGEgaHJlZj0naHR0cHM6Ly9nYWJiZWV0by5naXRodWIuaW8vJyB0YXJnZXQ9J19ibGFuayc+Z2FiYmV0bzwvYT4gPC9zcGFuPmA7XG5cblxuYXBwZW5kSW5Eb2N1bWVudChoZWFkZXIpO1xuYXBwZW5kKGhlYWRlciwgdGl0dGxlKTtcblxuXG5cbmNvbnN0IG1haW4gPSBta0VsKCdtYWluJyk7XG5hcHBlbmRJbkRvY3VtZW50KG1haW4pO1xuXG5leHBvcnQgY29uc3Qgc2VjdGlvbkZvckJ1dHRvbnMgPSBta0VsKCdTZWN0aW9uJyk7XG5zZWN0aW9uRm9yQnV0dG9ucy5pZCA9ICdidXR0b25TZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGhvbWVCdXR0b24gPSBta0VsKCdidXR0b24nKTtcbmhvbWVCdXR0b24uaW5uZXJUZXh0ID0gJ2hvbWUnO1xuXG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uID0gbWtFbCgnYnV0dG9uJyk7XG5tZW51QnV0dG9uLmlubmVyVGV4dCA9ICdtZW51JztcblxuXG5leHBvcnQgY29uc3QgYWJvdXRCdXR0b24gPSBta0VsKCdidXR0b24nKTtcbmFib3V0QnV0dG9uLmlubmVyVGV4dCA9ICdhYm91dCBtZSc7XG5cblxuXG5hcHBlbmQobWFpbiwgc2VjdGlvbkZvckJ1dHRvbnMpO1xuYXBwZW5kKHNlY3Rpb25Gb3JCdXR0b25zLCBob21lQnV0dG9uKTtcbmFwcGVuZChzZWN0aW9uRm9yQnV0dG9ucywgbWVudUJ1dHRvbik7XG5hcHBlbmQoc2VjdGlvbkZvckJ1dHRvbnMsIGFib3V0QnV0dG9uKTtcblxuXG5cblxuXG5cblxuLy9ob21lIHNlY3Rpb25cbmV4cG9ydCBjb25zdCBzZWN0aW9uRm9ySG9tZSA9IG1rRWwoJ3NlY3Rpb24nKVxuc2VjdGlvbkZvckhvbWUuaWQgPSAnaG9tZSc7XG5cbmNvbnN0IG1haW5GaWd1cmUgPSBta0VsKCdmaWd1cmUnKTtcblxuXG5jb25zdCBtYWluUGljdHVyZSA9IG1rRWwoJ2ltZycpO1xubWFpblBpY3R1cmUuc3JjID0gbWFpbkltZztcblxuY29uc3QgaG9tZVRpdHRsZSA9IG1rRWwoJ2ZpZ2NhcHRpb24nKVxuaG9tZVRpdHRsZS5pbm5lclRleHQgPSAnV2VsY29tZSB0byB0aGUgUmVzdGF1cmFudCEnXG5cblxuY29uc3QgaG9tZURlc2NyaXB0aW9uID0gbWtFbCgncCcpXG5ob21lRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYFRoaXMgUmVzdGF1cmFudCBpcyBtYWRlIGZvciB0aGUgd2FsZmEgY29tbXVuaXR5IHNvIHdhbGZhcyBjYW4gaGF2ZSBhIGdyZWF0IHBsYWNlIHRvIGdvIGFuZCBlYXQgdG9nZXRoZXIuIG5vbi13YWxmYXMgYXJlIGFsc28gd2VsY29tZWQgdG8gdGhlIHJlc3RhdXJhbnQuIFdlIGhvcGUgeW91IGhhdmUgYSBncmVhdCB0aW1lIHJpZ2h0IGhlcmUuIGlmIHlvdSBhcmUgYSAnbG9xdWVuZGVybycvJ2xvcXVlbmRlcicsIHdlIGhhdmUgYSBzcGVjaWFsIG1lYWwgZm9yIHlvdS4gV2UgZG8gbm90IGNvbmRvbWUgYW55IHZpb2xlbmNlIG5vciBhbnkgbWFsaWNpb3VzIGFjdGl2aXR5LiBUaGFuayB5b3UgZm9yIHJlYWRpbmcuYFxuXG5cbmFwcGVuZChtYWluLCBzZWN0aW9uRm9ySG9tZSk7XG5cbmFwcGVuZChzZWN0aW9uRm9ySG9tZSwgbWFpbkZpZ3VyZSk7XG5hcHBlbmQobWFpbkZpZ3VyZSwgbWFpblBpY3R1cmUpO1xuYXBwZW5kKG1haW5GaWd1cmUsIGhvbWVUaXR0bGUpO1xuYXBwZW5kKHNlY3Rpb25Gb3JIb21lLCBob21lRGVzY3JpcHRpb24pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vbWVudSBzZWN0aW9uXG5leHBvcnQgY29uc3Qgc2VjdGlvbkZvck1lbnUgPSBta0VsKCdzZWN0aW9uJyk7XG5zZWN0aW9uRm9yTWVudS5pZCA9ICdtZW51JztcblxuY29uc3QgZm9vZExpc3QgID0gbWtFbCgndWwnKTtcblxuXG5cblxuXG5cbmFwcGVuZChtYWluLCBzZWN0aW9uRm9yTWVudSk7XG5hcHBlbmQoc2VjdGlvbkZvck1lbnUsIGZvb2RMaXN0KTtcbmNyZWF0ZUZvb2QoJ25vb2RsZXMnLCczJCcsIG5vb2RsZXNJbWcsICdteSBmYXZvcml0ZSBmb29kJylcbmNyZWF0ZUZvb2QoJ3BpenphJywgJzUkJyAscGl6emFJbWcsJ0kgbGlrZSB0aGlzIG9uZScgKVxuY3JlYXRlRm9vZCgnaGFtYnVyZ3VlcicsICc0JCcsIGhhbWJ1cmd1ZXJJbWcsICdJIGRlc2lyZSB0aGlzIG9uZSBzb21ldGltZXMnKVxuY3JlYXRlRm9vZCgnZmlzaCcsICcyJCcsIGZpc2hJbWcsIGBsb3ZlZCBieSB3YWxmYXMgYnV0IG5vdCBieSBtZWApXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLydhYm91dCB1cycgc2VjdGlvblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Gb3JBYm91dCA9IG1rRWwoJ3NlY3Rpb24nKTtcbnNlY3Rpb25Gb3JBYm91dC5pZCA9ICdhYm91dCc7XG5cblxuXG5jb25zdCBhYm91dE1lVGl0dGxlID0gbWtFbCgnaDInKVxuYWJvdXRNZVRpdHRsZS5pbm5lclRleHQgPSAnSSBhbSBHYWJiZWV0bydcblxuXG5jb25zdCBhYm91dE1lRGVzY3JpcHRpb24gPSBta0VsKCdwJylcbmFib3V0TWVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgSSB1c3VhbGx5IGNvZGUgZm9yIGZ1biwgSSBob3BlIHlvdSBsaWtlIHRoaXMgZmFrZSByZXN0YXVyYW50LCBJJ3ZlIGJlZW4gbGVhcm5pbmcgaG93IHRvIGNvZGUgZm9yIGZldyBtb250aHNgO1xuXG5hcHBlbmQobWFpbiwgc2VjdGlvbkZvckFib3V0KTtcbmFwcGVuZChzZWN0aW9uRm9yQWJvdXQsIGFib3V0TWVUaXR0bGUpO1xuYXBwZW5kKHNlY3Rpb25Gb3JBYm91dCwgYWJvdXRNZURlc2NyaXB0aW9uKTtcblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc2VjdGlvbkZvckJ1dHRvbnMsIGhvbWVCdXR0b24sYWJvdXRCdXR0b24sbWVudUJ1dHRvbiwgc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9yQWJvdXQgfSBmcm9tIFwiLi9odG1sLmpzXCI7XG5cbmRpc3BsYXlTZWN0aW9uKHNlY3Rpb25Gb3JIb21lLCBzZWN0aW9uRm9yTWVudSwgc2VjdGlvbkZvckFib3V0KTtcblxuc2VjdGlvbkZvckJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG9wZW5UYWIpXG5cbmZ1bmN0aW9uIG9wZW5UYWIoZXZlbnQpe1xuaWYoZXZlbnQudGFyZ2V0ID09IGhvbWVCdXR0b24pe1xuZGlzcGxheVNlY3Rpb24oc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9yQWJvdXQpO1xufVxuZWxzZSBpZihldmVudC50YXJnZXQgPT0gbWVudUJ1dHRvbil7XG5kaXNwbGF5U2VjdGlvbihzZWN0aW9uRm9yTWVudSwgc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JBYm91dCk7XG59XG5lbHNlIGlmKGV2ZW50LnRhcmdldCA9PSBhYm91dEJ1dHRvbil7XG5kaXNwbGF5U2VjdGlvbihzZWN0aW9uRm9yQWJvdXQsIHNlY3Rpb25Gb3JIb21lLCBzZWN0aW9uRm9yTWVudSk7XG59XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTZWN0aW9uKGRpc3BsYXllZFNlY3Rpb24sIFVuZGlzcGxheWVkU2VjdGlvbjEsIFVuZGlzcGxheWVkU2VjdGlvbjIpe1xuZGlzcGxheWVkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuVW5kaXNwbGF5ZWRTZWN0aW9uMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuVW5kaXNwbGF5ZWRTZWN0aW9uMi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=