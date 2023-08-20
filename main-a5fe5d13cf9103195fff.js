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


section:last-of-type img{
width: 20vw;
height: 20vw;

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
`, "",{"version":3,"sources":["webpack://./source/styling/style.css"],"names":[],"mappings":"AAAA;AACA,sBAAsB;AACtB,4CAA+B;AAC/B;;;AAGA;AACA,qBAAqB;AACrB,4CAA8B;AAC9B;;;AAGA;AACA,oBAAoB;AACpB,4CAA2C;AAC3C;;AAEA;AACA,iBAAiB;AACjB,qBAAqB;AACrB,gBAAgB;AAChB,eAAe;AACf,cAAc;AACd,aAAa;AACb;;AAEA;AACA,SAAS;AACT,UAAU;AACV,sBAAsB;AACtB;;AAEA;AACA,+BAA+B;AAC/B,sBAAsB;AACtB,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;;AAElB;;AAEA;AACA,6BAA6B;AAC7B;;;AAGA;AACA,2BAA2B;AAC3B,eAAe;AACf;;;AAGA,+BAA+B;AAC/B;AACA,iBAAiB;AACjB,2CAA2C;AAC3C;;AAEA,+BAA+B;AAC/B;AACA,8BAA8B;AAC9B;;;AAGA;AACA,6BAA6B;AAC7B,oBAAoB;AACpB;;;;;AAKA,iBAAiB;AACjB;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,SAAS;AACT,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;AACA;AACA,sBAAsB;AACtB,QAAQ;AACR;AACA;;AAEA;AACA,cAAc;AACd;AACA;AACA,cAAc;AACd;;;;;;;;;;;;;AAaA;AACA,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB;;;AAGA;AACA,kBAAkB;AAClB,WAAW;AACX,YAAY;AACZ;;;AAGA;AACA,WAAW;AACX,YAAY;AACZ,mBAAmB;;AAEnB;;;AAGA;AACA,kBAAkB;AAClB,YAAY;AACZ,mBAAmB;AACnB,aAAa;AACb,QAAQ;AACR,UAAU;AACV,2BAA2B;AAC3B,YAAY;AACZ,8BAA8B;AAC9B,qBAAqB;AACrB;;;;AAIA;AACA,aAAa;AACb;;AAEA;AACA,QAAQ;AACR,gBAAgB;AAChB;;AAEA;AACA,sBAAsB;AACtB,kBAAkB;AAClB,8BAA8B;AAC9B,aAAa;AACb,kBAAkB;AAClB,yBAAyB;AACzB;;;AAGA;AACA,WAAW;AACX,YAAY;;AAEZ;;;AAGA;AACA,8BAA8B;AAC9B,8BAA8B;AAC9B,mBAAmB;AACnB,aAAa;AACb,mBAAmB;AACnB,qBAAqB;AACrB,2BAA2B;AAC3B;;;AAGA;AACA,sBAAsB;AACtB,SAAS;AACT;;AAEA;AACA,aAAa;AACb,0DAA0D;AAC1D,SAAS;AACT;;AAEA;AACA,gBAAgB;AAChB,mCAAmC;AACnC,UAAU;AACV,WAAW;AACX,kBAAkB;AAClB,oBAAoB;AACpB,YAAY;AACZ,mBAAmB;AACnB;;AAEA;AACA,aAAa;AACb,sBAAsB;AACtB,uBAAuB;AACvB,mBAAmB;AACnB;;;;AAIA;AACA,UAAU;AACV,WAAW;AACX","sourcesContent":["@font-face{\nfont-family: 'default';\nsrc: url('./fonts/Darling.ttf');\n}\n\n\n@font-face{\nfont-family: 'button';\nsrc: url('./fonts/Butter.otf');\n}\n\n\n@font-face{\nfont-family: 'price';\nsrc: url('./fonts/Voice\\ In\\ My\\ Head.otf');\n}\n\n:root{\n--yellow: #f3b87b;\n--darkYellow: #9A744C;\n--brown: #352921;\n--pink: #FF74C4;\n--white: white;\n--black:black;\n}\n\n*{\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n\nbody{\nbackground-color: var(--yellow);\nfont-family: 'default';\ncolor: var(--black);\n}\n\nh1,h2,p,figCaption, span, button{\ntext-align: center;\n\n}\n\nh2{\nfont-size: calc(1.5rem + 4px);\n}\n\n\np{\nfont-size: calc(1rem + 4px);\nmax-width: 98vw;\n}\n\n\n/*figcaption from home section*/\nsection:nth-of-type(2) figcaption{\nfont-size: 3.9vw ;\n/*font-size: min(7.5vw,calc(3rem + 4px)) ;*/\n}\n\n/*figcaption from menu section*/\nsection:nth-of-type(3) figcaption{\nfont-size: calc(1.5rem + 4px) ;\n}\n\n\nfigure h3{\nfont-size: calc(1.6rem + 4px);\nfont-family: 'price';\n}\n\n\n\n\n/*header section*/\nheader{\nborder-bottom: 2px solid white;\nbackground-color: var(--brown);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: var(--pink);\n}\n\nheader h1{\ndisplay: flex;\ngap: 10px;\njustify-content: center;\nalign-items: center;\n}\n\n@media(max-width:460px){\nheader h1{\nflex-direction: column;\ngap: 2px;\n}\n}\n\na:link{\ncolor: #DC8389;\n}\na:visited{\ncolor: #CB88EF;\n}\n\n\n\n\n\n\n\n\n\n\n\n\nmain, section, section:nth-of-type(3) div{\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\n\nsection:nth-of-type(2) figure{\nposition: relative;\nwidth: 90vw;\nheight: 40vw;\n}\n\n\nsection:nth-of-type(2) img{\nwidth: 100%;\nheight: 100%;\nborder-radius: 20px;\n\n}\n\n\nsection:nth-of-type(2) figcaption{\nposition: absolute;\npadding: 2px;\nborder-radius: 10px;\nopacity: 0.65;\ntop: 2vw;\nleft: 50vw;\ntransform: translateX(-56%);\ncolor: white;\nbackground-color: var(--black);\nfont-family: 'button';\n}\n\n\n\nsection:not(section:first-of-type){\ndisplay: none;\n}\n\nsection:first-of-type{\ngap: 5px;\nmargin-top: 10px;\n}\n\nsection:nth-of-type(3)  div{\nflex-direction: column;\ntext-align: center;\nborder: 2px solid var(--black);\npadding: 10px;\nborder-radius: 5px;\nbackground-color: #FFC85C;\n}\n\n\nsection:last-of-type img{\nwidth: 20vw;\nheight: 20vw;\n\n}\n\n\nbutton{\nbackground-color: var(--brown);\nborder: 2px solid var(--white);\ncolor: var(--white);\npadding: 15px;\nborder-radius: 30px;\nfont-family: 'button';\nfont-size: calc(1rem + 5px);\n}\n\n\nmain, section:nth-of-type(2),section:nth-of-type(4){\nflex-direction: column;\ngap: 10px;\n}\n\nul{\ndisplay: grid;\ngrid-template-columns: repeat(auto-fit, minmax(200px,1fr));\ngap: 30px;\n}\n\nli{\nlist-style: none;\nbackground-color: var(--darkYellow);\nwidth: 98%;\nheight: 98%;\nalign-self: center;\njustify-self: center;\npadding: 2px;\nborder-radius: 10px;\n}\n\nfigure,li{\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n}\n\n\n\nimg{\nwidth: 80%;\nheight: 80%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _img_croissant_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/croissant.png */ "./source/img/croissant.png");
/* harmony import */ var _img_frenchFries_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/frenchFries.png */ "./source/img/frenchFries.png");
/* harmony import */ var _img_salad_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/salad.png */ "./source/img/salad.png");
/* harmony import */ var _img_pork_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/pork.png */ "./source/img/pork.png");
/* harmony import */ var _img_gabbetoFace_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/gabbetoFace.png */ "./source/img/gabbetoFace.png");








 
 
 
 



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
createFood('noodles','3$', _img_noodles_png__WEBPACK_IMPORTED_MODULE_2__, 'my favorite food');
createFood('pizza', '5$' ,_img_pizza_png__WEBPACK_IMPORTED_MODULE_4__,'I like this one' );
createFood('hamburguer', '4$', _img_hamburguer_png__WEBPACK_IMPORTED_MODULE_5__, 'I desire this one sometimes');
createFood('fish', '2$', _img_fish_png__WEBPACK_IMPORTED_MODULE_3__, `loved by walfas but not by me`);
createFood('pork', '5$', _img_pork_png__WEBPACK_IMPORTED_MODULE_9__, `over-rated`);
createFood('salad', '3$', _img_salad_png__WEBPACK_IMPORTED_MODULE_8__, `for those of you who are vegan`);
createFood('croissant', '2$', _img_croissant_png__WEBPACK_IMPORTED_MODULE_6__, `je ne peux pas parle le francai`);
createFood('french fries', '3$', _img_frenchFries_png__WEBPACK_IMPORTED_MODULE_7__, `if you want the mcdunals feeling`);












//'about me' section
const sectionForAbout = mkEl('section');
sectionForAbout.id = 'about';



const aboutMeTittle = mkEl('h2')
aboutMeTittle.innerText = 'I am Gabbeeto'


const aboutMeDescription = mkEl('p')
aboutMeDescription.innerHTML = `I usually code for fun, I hope you like this fake restaurant, I've been learning how to code for few months. you can visit my own <a  href='https://gabbeeto.github.io/' target='_blank'>page<a> and my own <a target='_blank' href='https://github.com/gabbeeto/'>github account</a> if you want to`;

const facePicture = mkEl('img');
facePicture.src = _img_gabbetoFace_png__WEBPACK_IMPORTED_MODULE_10__;


append(main, sectionForAbout);
append(sectionForAbout, aboutMeTittle);
append(sectionForAbout, aboutMeDescription);
append(sectionForAbout, facePicture);





/***/ }),

/***/ "./source/img/croissant.png":
/*!**********************************!*\
  !*** ./source/img/croissant.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "croissant.png";

/***/ }),

/***/ "./source/img/fish.png":
/*!*****************************!*\
  !*** ./source/img/fish.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fish.png";

/***/ }),

/***/ "./source/img/frenchFries.png":
/*!************************************!*\
  !*** ./source/img/frenchFries.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "frenchFries.png";

/***/ }),

/***/ "./source/img/gabbetoFace.png":
/*!************************************!*\
  !*** ./source/img/gabbetoFace.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gabbetoFace.png";

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

/***/ "./source/img/pork.png":
/*!*****************************!*\
  !*** ./source/img/pork.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pork.png";

/***/ }),

/***/ "./source/img/restaurantPicture.png":
/*!******************************************!*\
  !*** ./source/img/restaurantPicture.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "restaurantPicture.png";

/***/ }),

/***/ "./source/img/salad.png":
/*!******************************!*\
  !*** ./source/img/salad.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "salad.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1hNWZlNWQxM2NmOTEwMzE5NWZmZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhIQUFzQztBQUNsRiw0Q0FBNEMsNEhBQXFDO0FBQ2pGLDRDQUE0QyxnSkFBK0M7QUFDM0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5Qzs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRixZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxVQUFVLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxVQUFVLG9DQUFvQyx5QkFBeUIsa0NBQWtDLEdBQUcsaUJBQWlCLHdCQUF3QixpQ0FBaUMsR0FBRyxpQkFBaUIsdUJBQXVCLGlEQUFpRCxHQUFHLFVBQVUsb0JBQW9CLHdCQUF3QixtQkFBbUIsa0JBQWtCLGlCQUFpQixnQkFBZ0IsR0FBRyxNQUFNLFlBQVksYUFBYSx5QkFBeUIsR0FBRyxTQUFTLGtDQUFrQyx5QkFBeUIsc0JBQXNCLEdBQUcscUNBQXFDLHFCQUFxQixLQUFLLE9BQU8sZ0NBQWdDLEdBQUcsUUFBUSw4QkFBOEIsa0JBQWtCLEdBQUcsMEVBQTBFLG9CQUFvQiw0Q0FBNEMsS0FBSyx3RUFBd0UsaUNBQWlDLEdBQUcsZ0JBQWdCLGdDQUFnQyx1QkFBdUIsR0FBRyxxQ0FBcUMsaUNBQWlDLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLHNCQUFzQixxQkFBcUIsR0FBRyxjQUFjLGdCQUFnQixZQUFZLDBCQUEwQixzQkFBc0IsR0FBRyw0QkFBNEIsWUFBWSx5QkFBeUIsV0FBVyxHQUFHLEdBQUcsV0FBVyxpQkFBaUIsR0FBRyxZQUFZLGlCQUFpQixHQUFHLG9FQUFvRSxnQkFBZ0IsMEJBQTBCLHNCQUFzQixHQUFHLG9DQUFvQyxxQkFBcUIsY0FBYyxlQUFlLEdBQUcsaUNBQWlDLGNBQWMsZUFBZSxzQkFBc0IsS0FBSyx3Q0FBd0MscUJBQXFCLGVBQWUsc0JBQXNCLGdCQUFnQixXQUFXLGFBQWEsOEJBQThCLGVBQWUsaUNBQWlDLHdCQUF3QixHQUFHLDJDQUEyQyxnQkFBZ0IsR0FBRywwQkFBMEIsV0FBVyxtQkFBbUIsR0FBRyxnQ0FBZ0MseUJBQXlCLHFCQUFxQixpQ0FBaUMsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsR0FBRywrQkFBK0IsY0FBYyxlQUFlLEtBQUssYUFBYSxpQ0FBaUMsaUNBQWlDLHNCQUFzQixnQkFBZ0Isc0JBQXNCLHdCQUF3Qiw4QkFBOEIsR0FBRywwREFBMEQseUJBQXlCLFlBQVksR0FBRyxPQUFPLGdCQUFnQiw2REFBNkQsWUFBWSxHQUFHLE9BQU8sbUJBQW1CLHNDQUFzQyxhQUFhLGNBQWMscUJBQXFCLHVCQUF1QixlQUFlLHNCQUFzQixHQUFHLGNBQWMsZ0JBQWdCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLEdBQUcsWUFBWSxhQUFhLGNBQWMsR0FBRyxxQkFBcUI7QUFDNXFKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDL08xQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjZCO0FBQ29COztBQUVQO0FBQ047QUFDRTtBQUNVOztBQUVGO0FBQ0k7QUFDWjtBQUNGOztBQUVjOztBQUVsRDs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVPO0FBQ1A7O0FBRU87QUFDUDs7O0FBR087QUFDUDs7O0FBR087QUFDUDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ087QUFDUDs7QUFFQTs7O0FBR0E7QUFDQSxrQkFBa0IsdURBQU87O0FBRXpCO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNPO0FBQ1A7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFVO0FBQ3JDLDBCQUEwQiwyQ0FBUTtBQUNsQywrQkFBK0IsZ0RBQWE7QUFDNUMseUJBQXlCLDBDQUFPO0FBQ2hDLHlCQUF5QiwwQ0FBTztBQUNoQywwQkFBMEIsMkNBQVE7QUFDbEMsOEJBQThCLCtDQUFZO0FBQzFDLGlDQUFpQyxpREFBYzs7Ozs7Ozs7Ozs7OztBQWEvQztBQUNPO0FBQ1A7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtEQUFjOzs7QUFHaEM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdk1BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7OztBQ0FrSTs7QUFFbEksZUFBZSxvREFBYyxFQUFFLG9EQUFjLEVBQUUscURBQWU7O0FBRTlELHVEQUFpQjs7QUFFakI7QUFDQSxtQkFBbUIsZ0RBQVU7QUFDN0IsZUFBZSxvREFBYyxFQUFFLG9EQUFjLEVBQUUscURBQWU7QUFDOUQ7QUFDQSx3QkFBd0IsZ0RBQVU7QUFDbEMsZUFBZSxvREFBYyxFQUFFLG9EQUFjLEVBQUUscURBQWU7QUFDOUQ7QUFDQSx3QkFBd0IsaURBQVc7QUFDbkMsZUFBZSxxREFBZSxFQUFFLG9EQUFjLEVBQUUsb0RBQWM7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL3NvdXJjZS9zdHlsaW5nL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL3NvdXJjZS9zdHlsaW5nL3N0eWxlLmNzcz9kYTg1Iiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL3NvdXJjZS9odG1sLmpzIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93YWxmYS1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dhbGZhLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2FsZmEtcmVzdGF1cmFudC8uL3NvdXJjZS9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0RhcmxpbmcudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CdXR0ZXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Wb2ljZSBJbiBNeSBIZWFkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNle1xuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5cbkBmb250LWZhY2V7XG5mb250LWZhbWlseTogJ2J1dHRvbic7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuXG5AZm9udC1mYWNle1xuZm9udC1mYW1pbHk6ICdwcmljZSc7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuOnJvb3R7XG4tLXllbGxvdzogI2YzYjg3Yjtcbi0tZGFya1llbGxvdzogIzlBNzQ0Qztcbi0tYnJvd246ICMzNTI5MjE7XG4tLXBpbms6ICNGRjc0QzQ7XG4tLXdoaXRlOiB3aGl0ZTtcbi0tYmxhY2s6YmxhY2s7XG59XG5cbip7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keXtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuaDEsaDIscCxmaWdDYXB0aW9uLCBzcGFuLCBidXR0b257XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuaDJ7XG5mb250LXNpemU6IGNhbGMoMS41cmVtICsgNHB4KTtcbn1cblxuXG5we1xuZm9udC1zaXplOiBjYWxjKDFyZW0gKyA0cHgpO1xubWF4LXdpZHRoOiA5OHZ3O1xufVxuXG5cbi8qZmlnY2FwdGlvbiBmcm9tIGhvbWUgc2VjdGlvbiovXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIGZpZ2NhcHRpb257XG5mb250LXNpemU6IDMuOXZ3IDtcbi8qZm9udC1zaXplOiBtaW4oNy41dncsY2FsYygzcmVtICsgNHB4KSkgOyovXG59XG5cbi8qZmlnY2FwdGlvbiBmcm9tIG1lbnUgc2VjdGlvbiovXG5zZWN0aW9uOm50aC1vZi10eXBlKDMpIGZpZ2NhcHRpb257XG5mb250LXNpemU6IGNhbGMoMS41cmVtICsgNHB4KSA7XG59XG5cblxuZmlndXJlIGgze1xuZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDRweCk7XG5mb250LWZhbWlseTogJ3ByaWNlJztcbn1cblxuXG5cblxuLypoZWFkZXIgc2VjdGlvbiovXG5oZWFkZXJ7XG5ib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuY29sb3I6IHZhcigtLXBpbmspO1xufVxuXG5oZWFkZXIgaDF7XG5kaXNwbGF5OiBmbGV4O1xuZ2FwOiAxMHB4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjQ2MHB4KXtcbmhlYWRlciBoMXtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5nYXA6IDJweDtcbn1cbn1cblxuYTpsaW5re1xuY29sb3I6ICNEQzgzODk7XG59XG5hOnZpc2l0ZWR7XG5jb2xvcjogI0NCODhFRjtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1haW4sIHNlY3Rpb24sIHNlY3Rpb246bnRoLW9mLXR5cGUoMykgZGl2e1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIGZpZ3VyZXtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbndpZHRoOiA5MHZ3O1xuaGVpZ2h0OiA0MHZ3O1xufVxuXG5cbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgaW1ne1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5ib3JkZXItcmFkaXVzOiAyMHB4O1xuXG59XG5cblxuc2VjdGlvbjpudGgtb2YtdHlwZSgyKSBmaWdjYXB0aW9ue1xucG9zaXRpb246IGFic29sdXRlO1xucGFkZGluZzogMnB4O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbm9wYWNpdHk6IDAuNjU7XG50b3A6IDJ2dztcbmxlZnQ6IDUwdnc7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTU2JSk7XG5jb2xvcjogd2hpdGU7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5mb250LWZhbWlseTogJ2J1dHRvbic7XG59XG5cblxuXG5zZWN0aW9uOm5vdChzZWN0aW9uOmZpcnN0LW9mLXR5cGUpe1xuZGlzcGxheTogbm9uZTtcbn1cblxuc2VjdGlvbjpmaXJzdC1vZi10eXBle1xuZ2FwOiA1cHg7XG5tYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5zZWN0aW9uOm50aC1vZi10eXBlKDMpICBkaXZ7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzogMTBweDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkM4NUM7XG59XG5cblxuc2VjdGlvbjpsYXN0LW9mLXR5cGUgaW1ne1xud2lkdGg6IDIwdnc7XG5oZWlnaHQ6IDIwdnc7XG5cbn1cblxuXG5idXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icm93bik7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0td2hpdGUpO1xucGFkZGluZzogMTVweDtcbmJvcmRlci1yYWRpdXM6IDMwcHg7XG5mb250LWZhbWlseTogJ2J1dHRvbic7XG5mb250LXNpemU6IGNhbGMoMXJlbSArIDVweCk7XG59XG5cblxubWFpbiwgc2VjdGlvbjpudGgtb2YtdHlwZSgyKSxzZWN0aW9uOm50aC1vZi10eXBlKDQpe1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmdhcDogMTBweDtcbn1cblxudWx7XG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwxZnIpKTtcbmdhcDogMzBweDtcbn1cblxubGl7XG5saXN0LXN0eWxlOiBub25lO1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1llbGxvdyk7XG53aWR0aDogOTglO1xuaGVpZ2h0OiA5OCU7XG5hbGlnbi1zZWxmOiBjZW50ZXI7XG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbnBhZGRpbmc6IDJweDtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmZpZ3VyZSxsaXtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuaW1ne1xud2lkdGg6IDgwJTtcbmhlaWdodDogODAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxzQkFBc0I7QUFDdEIsNENBQStCO0FBQy9COzs7QUFHQTtBQUNBLHFCQUFxQjtBQUNyQiw0Q0FBOEI7QUFDOUI7OztBQUdBO0FBQ0Esb0JBQW9CO0FBQ3BCLDRDQUEyQztBQUMzQzs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixjQUFjO0FBQ2QsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNULFVBQVU7QUFDVixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0Isc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7OztBQUdBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjs7O0FBR0EsK0JBQStCO0FBQy9CO0FBQ0EsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQzs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQSw4QkFBOEI7QUFDOUI7OztBQUdBO0FBQ0EsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQjs7Ozs7QUFLQSxpQkFBaUI7QUFDakI7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COzs7QUFHQTtBQUNBLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1gsWUFBWTtBQUNaOzs7QUFHQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osbUJBQW1COztBQUVuQjs7O0FBR0E7QUFDQSxrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsUUFBUTtBQUNSLFVBQVU7QUFDViwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7Ozs7QUFJQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFFBQVE7QUFDUixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qjs7O0FBR0E7QUFDQSxXQUFXO0FBQ1gsWUFBWTs7QUFFWjs7O0FBR0E7QUFDQSw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0I7OztBQUdBO0FBQ0Esc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGFBQWE7QUFDYiwwREFBMEQ7QUFDMUQsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG1DQUFtQztBQUNuQyxVQUFVO0FBQ1YsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7OztBQUlBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuc3JjOiB1cmwoJy4vZm9udHMvRGFybGluZy50dGYnKTtcXG59XFxuXFxuXFxuQGZvbnQtZmFjZXtcXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxuc3JjOiB1cmwoJy4vZm9udHMvQnV0dGVyLm90ZicpO1xcbn1cXG5cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAncHJpY2UnO1xcbnNyYzogdXJsKCcuL2ZvbnRzL1ZvaWNlXFxcXCBJblxcXFwgTXlcXFxcIEhlYWQub3RmJyk7XFxufVxcblxcbjpyb290e1xcbi0teWVsbG93OiAjZjNiODdiO1xcbi0tZGFya1llbGxvdzogIzlBNzQ0QztcXG4tLWJyb3duOiAjMzUyOTIxO1xcbi0tcGluazogI0ZGNzRDNDtcXG4tLXdoaXRlOiB3aGl0ZTtcXG4tLWJsYWNrOmJsYWNrO1xcbn1cXG5cXG4qe1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbmgxLGgyLHAsZmlnQ2FwdGlvbiwgc3BhbiwgYnV0dG9ue1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuaDJ7XFxuZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDRweCk7XFxufVxcblxcblxcbnB7XFxuZm9udC1zaXplOiBjYWxjKDFyZW0gKyA0cHgpO1xcbm1heC13aWR0aDogOTh2dztcXG59XFxuXFxuXFxuLypmaWdjYXB0aW9uIGZyb20gaG9tZSBzZWN0aW9uKi9cXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIGZpZ2NhcHRpb257XFxuZm9udC1zaXplOiAzLjl2dyA7XFxuLypmb250LXNpemU6IG1pbig3LjV2dyxjYWxjKDNyZW0gKyA0cHgpKSA7Ki9cXG59XFxuXFxuLypmaWdjYXB0aW9uIGZyb20gbWVudSBzZWN0aW9uKi9cXG5zZWN0aW9uOm50aC1vZi10eXBlKDMpIGZpZ2NhcHRpb257XFxuZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDRweCkgO1xcbn1cXG5cXG5cXG5maWd1cmUgaDN7XFxuZm9udC1zaXplOiBjYWxjKDEuNnJlbSArIDRweCk7XFxuZm9udC1mYW1pbHk6ICdwcmljZSc7XFxufVxcblxcblxcblxcblxcbi8qaGVhZGVyIHNlY3Rpb24qL1xcbmhlYWRlcntcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJvd24pO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5jb2xvcjogdmFyKC0tcGluayk7XFxufVxcblxcbmhlYWRlciBoMXtcXG5kaXNwbGF5OiBmbGV4O1xcbmdhcDogMTBweDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEobWF4LXdpZHRoOjQ2MHB4KXtcXG5oZWFkZXIgaDF7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5nYXA6IDJweDtcXG59XFxufVxcblxcbmE6bGlua3tcXG5jb2xvcjogI0RDODM4OTtcXG59XFxuYTp2aXNpdGVke1xcbmNvbG9yOiAjQ0I4OEVGO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5tYWluLCBzZWN0aW9uLCBzZWN0aW9uOm50aC1vZi10eXBlKDMpIGRpdntcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgZmlndXJle1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG53aWR0aDogOTB2dztcXG5oZWlnaHQ6IDQwdnc7XFxufVxcblxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgaW1ne1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5ib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbn1cXG5cXG5cXG5zZWN0aW9uOm50aC1vZi10eXBlKDIpIGZpZ2NhcHRpb257XFxucG9zaXRpb246IGFic29sdXRlO1xcbnBhZGRpbmc6IDJweDtcXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xcbm9wYWNpdHk6IDAuNjU7XFxudG9wOiAydnc7XFxubGVmdDogNTB2dztcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTU2JSk7XFxuY29sb3I6IHdoaXRlO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5mb250LWZhbWlseTogJ2J1dHRvbic7XFxufVxcblxcblxcblxcbnNlY3Rpb246bm90KHNlY3Rpb246Zmlyc3Qtb2YtdHlwZSl7XFxuZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBle1xcbmdhcDogNXB4O1xcbm1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbnNlY3Rpb246bnRoLW9mLXR5cGUoMykgIGRpdntcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbnRleHQtYWxpZ246IGNlbnRlcjtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogMTBweDtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogI0ZGQzg1QztcXG59XFxuXFxuXFxuc2VjdGlvbjpsYXN0LW9mLXR5cGUgaW1ne1xcbndpZHRoOiAyMHZ3O1xcbmhlaWdodDogMjB2dztcXG5cXG59XFxuXFxuXFxuYnV0dG9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyb3duKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOiAxNXB4O1xcbmJvcmRlci1yYWRpdXM6IDMwcHg7XFxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xcbmZvbnQtc2l6ZTogY2FsYygxcmVtICsgNXB4KTtcXG59XFxuXFxuXFxubWFpbiwgc2VjdGlvbjpudGgtb2YtdHlwZSgyKSxzZWN0aW9uOm50aC1vZi10eXBlKDQpe1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuZ2FwOiAxMHB4O1xcbn1cXG5cXG51bHtcXG5kaXNwbGF5OiBncmlkO1xcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsMWZyKSk7XFxuZ2FwOiAzMHB4O1xcbn1cXG5cXG5saXtcXG5saXN0LXN0eWxlOiBub25lO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtZZWxsb3cpO1xcbndpZHRoOiA5OCU7XFxuaGVpZ2h0OiA5OCU7XFxuYWxpZ24tc2VsZjogY2VudGVyO1xcbmp1c3RpZnktc2VsZjogY2VudGVyO1xcbnBhZGRpbmc6IDJweDtcXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5maWd1cmUsbGl7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbmltZ3tcXG53aWR0aDogODAlO1xcbmhlaWdodDogODAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcyc7XG5pbXBvcnQgbWFpbkltZyBmcm9tICcuL2ltZy9yZXN0YXVyYW50UGljdHVyZS5wbmcnXG5cbmltcG9ydCBub29kbGVzSW1nIGZyb20gJy4vaW1nL25vb2RsZXMucG5nJ1xuaW1wb3J0IGZpc2hJbWcgZnJvbSAnLi9pbWcvZmlzaC5wbmcnXG5pbXBvcnQgcGl6emFJbWcgZnJvbSAnLi9pbWcvcGl6emEucG5nJ1xuaW1wb3J0IGhhbWJ1cmd1ZXJJbWcgZnJvbSAnLi9pbWcvaGFtYnVyZ3Vlci5wbmcnXG5cbmltcG9ydCBjcm9pc3NhbnRJbWcgZnJvbSAnLi9pbWcvY3JvaXNzYW50LnBuZycgXG5pbXBvcnQgZnJlbmNoRnJpZXNJbWcgZnJvbSAnLi9pbWcvZnJlbmNoRnJpZXMucG5nJyBcbmltcG9ydCBzYWxhZEltZyBmcm9tICcuL2ltZy9zYWxhZC5wbmcnIFxuaW1wb3J0IHBvcmtJbWcgZnJvbSAnLi9pbWcvcG9yay5wbmcnIFxuXG5pbXBvcnQgZmFjZVBpY3R1cmVJbWcgZnJvbSAnLi9pbWcvZ2FiYmV0b0ZhY2UucG5nJ1xuXG4vL3NpbXBsaWZ5IGNvZGUgc2VjdGlvblxuXG5cbmZ1bmN0aW9uIG1rRWwoZWwpe1xucmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZEluRG9jdW1lbnQoZWwpe1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChlbCxlbDIpe1xuZWwuYXBwZW5kQ2hpbGQoZWwyKVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2QoZm9vZG5hbWUsIHByaWNlLCBpbWFnZSwgZm9vZEluZm8pe1xuY29uc3QgbGkgPSBta0VsKCdsaScpO1xuXG5cblxuXG5jb25zdCBmaWd1cmUgPSBta0VsKCdmaWd1cmUnKVxuXG5sZXQgaW1nID0gbWtFbCgnaW1nJyk7XG5pbWcuc3JjID0gaW1hZ2U7XG5cbmxldCBmb29kTmFtZSA9IG1rRWwoJ2ZpZ0NhcHRpb24nKTtcbmZvb2ROYW1lLmlubmVyVGV4dCA9IGZvb2RuYW1lO1xuXG5jb25zdCBmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyID0gbWtFbCgnZGl2Jyk7XG5cbmxldCBmb29kSW5mb3JtYXRpb24gPSBta0VsKCdwJyk7XG5mb29kSW5mb3JtYXRpb24uaW5uZXJUZXh0ID0gZm9vZEluZm87XG5cbmxldCBwcmljZUluZm9ybWF0aW9uID0gbWtFbCgnaDMnKTtcbnByaWNlSW5mb3JtYXRpb24uaW5uZXJUZXh0ID0gcHJpY2U7XG5cbmFwcGVuZChmb29kTGlzdCwgbGkpO1xuYXBwZW5kKGxpLCBmaWd1cmUpO1xuYXBwZW5kKGZpZ3VyZSwgaW1nKTtcbmFwcGVuZChmaWd1cmUsIGZvb2RBbmRQcmljZUluZm9Db250YWluZXIpO1xuYXBwZW5kKGZvb2RBbmRQcmljZUluZm9Db250YWluZXIsIGZvb2ROYW1lKTtcbmFwcGVuZChmb29kQW5kUHJpY2VJbmZvQ29udGFpbmVyLCBwcmljZUluZm9ybWF0aW9uKTtcbmFwcGVuZChsaSwgZm9vZEluZm9ybWF0aW9uKTtcblxufVxuXG5cblxuXG5cblxuLy9oZWFkZXIgc2VjdGlvbiBcblxuY29uc3QgaGVhZGVyID0gbWtFbCgnaGVhZGVyJyk7XG5jb25zdCB0aXR0bGUgPSBta0VsKCdoMScpO1xudGl0dGxlLmlubmVySFRNTCA9IGBXYWxmYSBSZXN0YXVyYW50IDxzcGFuPiBieSA8YSBocmVmPSdodHRwczovL2dhYmJlZXRvLmdpdGh1Yi5pby8nIHRhcmdldD0nX2JsYW5rJz5nYWJiZXRvPC9hPiA8L3NwYW4+YDtcblxuXG5hcHBlbmRJbkRvY3VtZW50KGhlYWRlcik7XG5hcHBlbmQoaGVhZGVyLCB0aXR0bGUpO1xuXG5cblxuY29uc3QgbWFpbiA9IG1rRWwoJ21haW4nKTtcbmFwcGVuZEluRG9jdW1lbnQobWFpbik7XG5cbmV4cG9ydCBjb25zdCBzZWN0aW9uRm9yQnV0dG9ucyA9IG1rRWwoJ1NlY3Rpb24nKTtcbnNlY3Rpb25Gb3JCdXR0b25zLmlkID0gJ2J1dHRvblNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaG9tZUJ1dHRvbiA9IG1rRWwoJ2J1dHRvbicpO1xuaG9tZUJ1dHRvbi5pbm5lclRleHQgPSAnaG9tZSc7XG5cblxuZXhwb3J0IGNvbnN0IG1lbnVCdXR0b24gPSBta0VsKCdidXR0b24nKTtcbm1lbnVCdXR0b24uaW5uZXJUZXh0ID0gJ21lbnUnO1xuXG5cbmV4cG9ydCBjb25zdCBhYm91dEJ1dHRvbiA9IG1rRWwoJ2J1dHRvbicpO1xuYWJvdXRCdXR0b24uaW5uZXJUZXh0ID0gJ2Fib3V0IG1lJztcblxuXG5cbmFwcGVuZChtYWluLCBzZWN0aW9uRm9yQnV0dG9ucyk7XG5hcHBlbmQoc2VjdGlvbkZvckJ1dHRvbnMsIGhvbWVCdXR0b24pO1xuYXBwZW5kKHNlY3Rpb25Gb3JCdXR0b25zLCBtZW51QnV0dG9uKTtcbmFwcGVuZChzZWN0aW9uRm9yQnV0dG9ucywgYWJvdXRCdXR0b24pO1xuXG5cblxuXG5cblxuXG4vL2hvbWUgc2VjdGlvblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Gb3JIb21lID0gbWtFbCgnc2VjdGlvbicpXG5zZWN0aW9uRm9ySG9tZS5pZCA9ICdob21lJztcblxuY29uc3QgbWFpbkZpZ3VyZSA9IG1rRWwoJ2ZpZ3VyZScpO1xuXG5cbmNvbnN0IG1haW5QaWN0dXJlID0gbWtFbCgnaW1nJyk7XG5tYWluUGljdHVyZS5zcmMgPSBtYWluSW1nO1xuXG5jb25zdCBob21lVGl0dGxlID0gbWtFbCgnZmlnY2FwdGlvbicpXG5ob21lVGl0dGxlLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIHRoZSBSZXN0YXVyYW50ISdcblxuXG5jb25zdCBob21lRGVzY3JpcHRpb24gPSBta0VsKCdwJylcbmhvbWVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgVGhpcyBSZXN0YXVyYW50IGlzIG1hZGUgZm9yIHRoZSB3YWxmYSBjb21tdW5pdHkgc28gd2FsZmFzIGNhbiBoYXZlIGEgZ3JlYXQgcGxhY2UgdG8gZ28gYW5kIGVhdCB0b2dldGhlci4gbm9uLXdhbGZhcyBhcmUgYWxzbyB3ZWxjb21lZCB0byB0aGUgcmVzdGF1cmFudC4gV2UgaG9wZSB5b3UgaGF2ZSBhIGdyZWF0IHRpbWUgcmlnaHQgaGVyZS4gaWYgeW91IGFyZSBhICdsb3F1ZW5kZXJvJy8nbG9xdWVuZGVyJywgd2UgaGF2ZSBhIHNwZWNpYWwgbWVhbCBmb3IgeW91LiBXZSBkbyBub3QgY29uZG9tZSBhbnkgdmlvbGVuY2Ugbm9yIGFueSBtYWxpY2lvdXMgYWN0aXZpdHkuIFRoYW5rIHlvdSBmb3IgcmVhZGluZy5gXG5cblxuYXBwZW5kKG1haW4sIHNlY3Rpb25Gb3JIb21lKTtcblxuYXBwZW5kKHNlY3Rpb25Gb3JIb21lLCBtYWluRmlndXJlKTtcbmFwcGVuZChtYWluRmlndXJlLCBtYWluUGljdHVyZSk7XG5hcHBlbmQobWFpbkZpZ3VyZSwgaG9tZVRpdHRsZSk7XG5hcHBlbmQoc2VjdGlvbkZvckhvbWUsIGhvbWVEZXNjcmlwdGlvbik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9tZW51IHNlY3Rpb25cbmV4cG9ydCBjb25zdCBzZWN0aW9uRm9yTWVudSA9IG1rRWwoJ3NlY3Rpb24nKTtcbnNlY3Rpb25Gb3JNZW51LmlkID0gJ21lbnUnO1xuXG5jb25zdCBmb29kTGlzdCAgPSBta0VsKCd1bCcpO1xuXG5cblxuXG5cblxuYXBwZW5kKG1haW4sIHNlY3Rpb25Gb3JNZW51KTtcbmFwcGVuZChzZWN0aW9uRm9yTWVudSwgZm9vZExpc3QpO1xuY3JlYXRlRm9vZCgnbm9vZGxlcycsJzMkJywgbm9vZGxlc0ltZywgJ215IGZhdm9yaXRlIGZvb2QnKTtcbmNyZWF0ZUZvb2QoJ3BpenphJywgJzUkJyAscGl6emFJbWcsJ0kgbGlrZSB0aGlzIG9uZScgKTtcbmNyZWF0ZUZvb2QoJ2hhbWJ1cmd1ZXInLCAnNCQnLCBoYW1idXJndWVySW1nLCAnSSBkZXNpcmUgdGhpcyBvbmUgc29tZXRpbWVzJyk7XG5jcmVhdGVGb29kKCdmaXNoJywgJzIkJywgZmlzaEltZywgYGxvdmVkIGJ5IHdhbGZhcyBidXQgbm90IGJ5IG1lYCk7XG5jcmVhdGVGb29kKCdwb3JrJywgJzUkJywgcG9ya0ltZywgYG92ZXItcmF0ZWRgKTtcbmNyZWF0ZUZvb2QoJ3NhbGFkJywgJzMkJywgc2FsYWRJbWcsIGBmb3IgdGhvc2Ugb2YgeW91IHdobyBhcmUgdmVnYW5gKTtcbmNyZWF0ZUZvb2QoJ2Nyb2lzc2FudCcsICcyJCcsIGNyb2lzc2FudEltZywgYGplIG5lIHBldXggcGFzIHBhcmxlIGxlIGZyYW5jYWlgKTtcbmNyZWF0ZUZvb2QoJ2ZyZW5jaCBmcmllcycsICczJCcsIGZyZW5jaEZyaWVzSW1nLCBgaWYgeW91IHdhbnQgdGhlIG1jZHVuYWxzIGZlZWxpbmdgKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vJ2Fib3V0IG1lJyBzZWN0aW9uXG5leHBvcnQgY29uc3Qgc2VjdGlvbkZvckFib3V0ID0gbWtFbCgnc2VjdGlvbicpO1xuc2VjdGlvbkZvckFib3V0LmlkID0gJ2Fib3V0JztcblxuXG5cbmNvbnN0IGFib3V0TWVUaXR0bGUgPSBta0VsKCdoMicpXG5hYm91dE1lVGl0dGxlLmlubmVyVGV4dCA9ICdJIGFtIEdhYmJlZXRvJ1xuXG5cbmNvbnN0IGFib3V0TWVEZXNjcmlwdGlvbiA9IG1rRWwoJ3AnKVxuYWJvdXRNZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBJIHVzdWFsbHkgY29kZSBmb3IgZnVuLCBJIGhvcGUgeW91IGxpa2UgdGhpcyBmYWtlIHJlc3RhdXJhbnQsIEkndmUgYmVlbiBsZWFybmluZyBob3cgdG8gY29kZSBmb3IgZmV3IG1vbnRocy4geW91IGNhbiB2aXNpdCBteSBvd24gPGEgIGhyZWY9J2h0dHBzOi8vZ2FiYmVldG8uZ2l0aHViLmlvLycgdGFyZ2V0PSdfYmxhbmsnPnBhZ2U8YT4gYW5kIG15IG93biA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL2dhYmJlZXRvLyc+Z2l0aHViIGFjY291bnQ8L2E+IGlmIHlvdSB3YW50IHRvYDtcblxuY29uc3QgZmFjZVBpY3R1cmUgPSBta0VsKCdpbWcnKTtcbmZhY2VQaWN0dXJlLnNyYyA9IGZhY2VQaWN0dXJlSW1nO1xuXG5cbmFwcGVuZChtYWluLCBzZWN0aW9uRm9yQWJvdXQpO1xuYXBwZW5kKHNlY3Rpb25Gb3JBYm91dCwgYWJvdXRNZVRpdHRsZSk7XG5hcHBlbmQoc2VjdGlvbkZvckFib3V0LCBhYm91dE1lRGVzY3JpcHRpb24pO1xuYXBwZW5kKHNlY3Rpb25Gb3JBYm91dCwgZmFjZVBpY3R1cmUpO1xuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBzZWN0aW9uRm9yQnV0dG9ucywgaG9tZUJ1dHRvbixhYm91dEJ1dHRvbixtZW51QnV0dG9uLCBzZWN0aW9uRm9ySG9tZSwgc2VjdGlvbkZvck1lbnUsIHNlY3Rpb25Gb3JBYm91dCB9IGZyb20gXCIuL2h0bWwuanNcIjtcblxuZGlzcGxheVNlY3Rpb24oc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9yQWJvdXQpO1xuXG5zZWN0aW9uRm9yQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsb3BlblRhYilcblxuZnVuY3Rpb24gb3BlblRhYihldmVudCl7XG5pZihldmVudC50YXJnZXQgPT0gaG9tZUJ1dHRvbil7XG5kaXNwbGF5U2VjdGlvbihzZWN0aW9uRm9ySG9tZSwgc2VjdGlvbkZvck1lbnUsIHNlY3Rpb25Gb3JBYm91dCk7XG59XG5lbHNlIGlmKGV2ZW50LnRhcmdldCA9PSBtZW51QnV0dG9uKXtcbmRpc3BsYXlTZWN0aW9uKHNlY3Rpb25Gb3JNZW51LCBzZWN0aW9uRm9ySG9tZSwgc2VjdGlvbkZvckFib3V0KTtcbn1cbmVsc2UgaWYoZXZlbnQudGFyZ2V0ID09IGFib3V0QnV0dG9uKXtcbmRpc3BsYXlTZWN0aW9uKHNlY3Rpb25Gb3JBYm91dCwgc2VjdGlvbkZvckhvbWUsIHNlY3Rpb25Gb3JNZW51KTtcbn1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVNlY3Rpb24oZGlzcGxheWVkU2VjdGlvbiwgVW5kaXNwbGF5ZWRTZWN0aW9uMSwgVW5kaXNwbGF5ZWRTZWN0aW9uMil7XG5kaXNwbGF5ZWRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5VbmRpc3BsYXllZFNlY3Rpb24xLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5VbmRpc3BsYXllZFNlY3Rpb24yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==