"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 1363:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/fe941483079a5862e7a206e1313d7750/8c216/crown-0-64-i18n.png","srcSet":"/static/fe941483079a5862e7a206e1313d7750/15a7f/crown-0-64-i18n.png 152w,\\n/static/fe941483079a5862e7a206e1313d7750/1180b/crown-0-64-i18n.png 305w,\\n/static/fe941483079a5862e7a206e1313d7750/8c216/crown-0-64-i18n.png 609w","sizes":"(min-width: 609px) 609px, 100vw"},"sources":[{"srcSet":"/static/fe941483079a5862e7a206e1313d7750/ad314/crown-0-64-i18n.webp 152w,\\n/static/fe941483079a5862e7a206e1313d7750/71839/crown-0-64-i18n.webp 305w,\\n/static/fe941483079a5862e7a206e1313d7750/69393/crown-0-64-i18n.webp 609w","type":"image/webp","sizes":"(min-width: 609px) 609px, 100vw"}]},"width":609,"height":202}');

/***/ }),

/***/ 2207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "/home/runner/work/crown-website/crown-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(8250);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./src/components/clamp.jsx
var clamp = __webpack_require__(1794);
// EXTERNAL MODULE: ./src/components/download-button.jsx
var download_button = __webpack_require__(3914);
;// ./src/components/cta.jsx
function Cta(){const data=(0,gatsby_browser_entry.useStaticQuery)("4007520390");return/*#__PURE__*/index_js_default().createElement("div",{className:"relative mb-16 overflow-hidden bg-deepest"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:"!absolute inset-0 h-full w-full",imgClassName:"object-cover",src:"../images/index/crown-editor.png",alt:"","aria-hidden":"true",loading:"eager",fetchPriority:"high",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(7165)}),/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("section",{className:"relative py-32 px-4"},/*#__PURE__*/index_js_default().createElement("h1",{className:"mt-24 text-display font-bold leading-none text-inverse"},data.site.siteMetadata.subtitle),/*#__PURE__*/index_js_default().createElement("p",{className:"mb-6 max-w-4xl text-title text-inverse"},data.site.siteMetadata.description),/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-wrap gap-4"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null,"Download Crown"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"button button-inverse",to:"/news/crown-0-64"},"See Highlights")))));}
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs + 4 modules
var fa6 = __webpack_require__(2559);
// EXTERNAL MODULE: ./src/components/fade-in.jsx
var fade_in = __webpack_require__(8649);
;// ./src/components/features.jsx
function Feature({children,description,imageOnLeft=false,title}){const text=/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:imageOnLeft?"from-right":"from-left"},/*#__PURE__*/index_js_default().createElement("h3",{className:"mb-5 text-title font-bold leading-tight text-ink"},title),/*#__PURE__*/index_js_default().createElement("p",{className:"text-lead leading-relaxed text-inverse"},description)));const image=/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full md:w-1/2",direction:imageOnLeft?"from-left":"from-right"},children);return/*#__PURE__*/index_js_default().createElement("article",{className:"flex flex-col items-center gap-8 md:flex-row"},imageOnLeft?image:text,imageOnLeft?text:image);}const imageClassName="w-full rounded-widget transform-gpu transition-transform duration-200 ease-out hover:scale-[1.04] motion-reduce:transform-none";function Features(){return/*#__PURE__*/index_js_default().createElement("section",{className:"bg-deepest py-24"},/*#__PURE__*/index_js_default().createElement("div",{className:"mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-20"},/*#__PURE__*/index_js_default().createElement("div",{className:"space-y-32 md:space-y-40"},/*#__PURE__*/index_js_default().createElement(Feature,{title:"Batteries Included",description:"Complete Editor with importers, level editor, deployers, Lua REPL, and much more."},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../images/index/features-batteries-included.png",alt:"Editing a moonlit boat scene in Crown",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(3888)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Fast iteration times",description:"Everything is hot-reloadable in less than a second, gameplay code included.",imageOnLeft:true},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../news/crown-0-60-animation-editor.png",alt:"Previewing an animation in the Crown Editor",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(4863)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Multi-platform",description:"Dev on your favorite desktop platform and ship to Android, HTML5, Linux or Windows."},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../news/crown-0-64.png",alt:"A Crown project running in the editor with development statistics",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(5586)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Performance-first",description:"Runtime data is carefully arranged to reach maximum gameplay performance all the time.",imageOnLeft:true},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../news/crown-0-62-culling.png",alt:"A dense Crown scene used to demonstrate renderer performance",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(7813)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Simple and hackable",description:"Projects are just text files that are compiled into optimized binaries before shipping."},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../news/crown-0-64-shadow-settings.png",alt:"Text-based render settings in a Crown project",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(7006)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Plug-and-play",description:"No account, no internet required. Get a copy, unzip it and start building games.",imageOnLeft:true},/*#__PURE__*/index_js_default().createElement("div",{className:"grid min-h-48 w-full grid-cols-[repeat(5,auto)] items-center justify-center gap-3 text-inverse sm:min-h-64 lg:gap-5",role:"img","aria-label":"Download, unzip and start Crown"},/*#__PURE__*/index_js_default().createElement(fa6/* FaDownload */.WCW,{className:"h-auto w-16 lg:w-24","aria-hidden":"true"}),/*#__PURE__*/index_js_default().createElement("span",{className:"text-title text-muted lg:text-display","aria-hidden":"true"},"\u2192"),/*#__PURE__*/index_js_default().createElement(fa6/* FaFileZipper */.Ydf,{className:"h-auto w-16 lg:w-24","aria-hidden":"true"}),/*#__PURE__*/index_js_default().createElement("span",{className:"text-title text-muted lg:text-display","aria-hidden":"true"},"\u2192"),/*#__PURE__*/index_js_default().createElement(fa6/* FaPlay */.gSK,{className:"h-auto w-16 text-ink lg:w-24","aria-hidden":"true"}))),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Polyglot",description:"Editors are available in four languages, with additional ones on the roadmap."},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:imageClassName,src:"../news/crown-0-64-i18n.png",alt:"Crown Editor menus in French, English, Italian and German",loading:"lazy",placeholder:"dominantColor",quality:90,formats:["auto","webp"],__imageData:__webpack_require__(1363)})),/*#__PURE__*/index_js_default().createElement(Feature,{title:"Free and Open Source",description:"Crown is a public, collaborative project, owned by its contributors and free forever.",imageOnLeft:true},/*#__PURE__*/index_js_default().createElement(fa6/* FaOsi */.FUb,{className:"mx-auto h-48 w-48 text-inverse sm:h-64 sm:w-64","aria-label":"Open Source Initiative"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-24 text-center"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null))));}
// EXTERNAL MODULE: ./src/components/layout.jsx + 2 modules
var layout = __webpack_require__(6696);
// EXTERNAL MODULE: ./src/components/news-list.jsx + 1 modules
var news_list = __webpack_require__(889);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(4496);
;// ./src/pages/index.jsx
function Home({data}){return/*#__PURE__*/index_js_default().createElement(layout/* default */.A,null,/*#__PURE__*/index_js_default().createElement(Cta,null),/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("section",{className:"mb-16 px-4","aria-labelledby":"latest-news"},/*#__PURE__*/index_js_default().createElement("h2",{className:"group mb-6 flex text-title font-bold text-ink"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{id:"latest-news",className:"block",to:"/news"},"Latest News"),/*#__PURE__*/index_js_default().createElement("a",{className:"pointer-events-none ml-2 flex items-center text-lead text-ink opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100",rel:"noreferrer",target:"_blank",href:"https://www.crownengine.org/rss.xml",title:"News RSS feed"},/*#__PURE__*/index_js_default().createElement(fa6/* FaSquareRss */.DlO,{"aria-label":"News RSS feed"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 gap-6 flow-root lg:grid-cols-4 lg:items-stretch"},/*#__PURE__*/index_js_default().createElement("div",{className:"lg:col-span-3 lg:h-full"},/*#__PURE__*/index_js_default().createElement(news_list/* default */.A,{edges:data.allMdx.edges,start:0,limit:1,variant:"regular",excerptClassName:"text-body",sectionClassName:"h-full",listClassName:"h-full",itemClassName:"h-full",linkClassName:"block h-full"})),/*#__PURE__*/index_js_default().createElement("div",{className:"lg:col-span-1 lg:h-full"},/*#__PURE__*/index_js_default().createElement(news_list/* default */.A,{edges:data.allMdx.edges,start:1,limit:3,variant:"overlay",sectionClassName:"lg:h-full",listClassName:"flex flex-col gap-4 lg:h-full",itemClassName:"lg:flex-1",linkClassName:"block h-full"})))),/*#__PURE__*/index_js_default().createElement("section",{className:"mb-16 px-4","aria-labelledby":"crown-foundation"},/*#__PURE__*/index_js_default().createElement("div",{className:"widget flex flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex-1"},/*#__PURE__*/index_js_default().createElement("h2",{id:"crown-foundation",className:"text-title font-bold text-ink"},"The Crown Foundation"),/*#__PURE__*/index_js_default().createElement("p",{className:"mt-2 max-w-4xl text-lead text-ink"},"We develop Crown Engine, publish ready-to-use releases, and maintain free resources that help people build awesome games."),/*#__PURE__*/index_js_default().createElement("div",{className:"mt-5 flex flex-wrap gap-4"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"button button-primary",to:"/about"},"About the Foundation"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"button button-secondary",to:"/fund"},"Help our Mission")))))),/*#__PURE__*/index_js_default().createElement(Features,null));}const data="1513603469";const Head=()=>{return/*#__PURE__*/index_js_default().createElement(seo/* default */.A,{title:"A Game Engine Focused on What Matters"});};

/***/ }),

/***/ 3888:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/567186f58a5f3c5d6eef60a8d7d83f83/f0b25/features-batteries-included.png","srcSet":"/static/567186f58a5f3c5d6eef60a8d7d83f83/6363a/features-batteries-included.png 384w,\\n/static/567186f58a5f3c5d6eef60a8d7d83f83/48c98/features-batteries-included.png 767w,\\n/static/567186f58a5f3c5d6eef60a8d7d83f83/f0b25/features-batteries-included.png 1534w","sizes":"(min-width: 1534px) 1534px, 100vw"},"sources":[{"srcSet":"/static/567186f58a5f3c5d6eef60a8d7d83f83/832df/features-batteries-included.webp 384w,\\n/static/567186f58a5f3c5d6eef60a8d7d83f83/44b4b/features-batteries-included.webp 767w,\\n/static/567186f58a5f3c5d6eef60a8d7d83f83/76caf/features-batteries-included.webp 1534w","type":"image/webp","sizes":"(min-width: 1534px) 1534px, 100vw"}]},"width":1534,"height":776}');

/***/ }),

/***/ 3914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
const DownloadButton=({children="Download Crown",className="",...props})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link,Object.assign({className:`button button-primary ${className}`.trim(),to:"/download"},props),children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButton);

/***/ }),

/***/ 4863:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/094d3230d66aebd7b17dbfc6cb84bbd2/7c603/crown-0-60-animation-editor.png","srcSet":"/static/094d3230d66aebd7b17dbfc6cb84bbd2/31276/crown-0-60-animation-editor.png 308w,\\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/2c27f/crown-0-60-animation-editor.png 615w,\\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/7c603/crown-0-60-animation-editor.png 1230w","sizes":"(min-width: 1230px) 1230px, 100vw"},"sources":[{"srcSet":"/static/094d3230d66aebd7b17dbfc6cb84bbd2/982b9/crown-0-60-animation-editor.webp 308w,\\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/82e5f/crown-0-60-animation-editor.webp 615w,\\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/8b004/crown-0-60-animation-editor.webp 1230w","type":"image/webp","sizes":"(min-width: 1230px) 1230px, 100vw"}]},"width":1230,"height":670}');

/***/ }),

/***/ 5586:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#686878","images":{"fallback":{"src":"/static/ebbcb1305e6c669080902f068be4423c/d4d02/crown-0-64.png","srcSet":"/static/ebbcb1305e6c669080902f068be4423c/bd513/crown-0-64.png 440w,\\n/static/ebbcb1305e6c669080902f068be4423c/aca2e/crown-0-64.png 880w,\\n/static/ebbcb1305e6c669080902f068be4423c/d4d02/crown-0-64.png 1759w","sizes":"(min-width: 1759px) 1759px, 100vw"},"sources":[{"srcSet":"/static/ebbcb1305e6c669080902f068be4423c/9cc06/crown-0-64.webp 440w,\\n/static/ebbcb1305e6c669080902f068be4423c/4ebde/crown-0-64.webp 880w,\\n/static/ebbcb1305e6c669080902f068be4423c/9587f/crown-0-64.webp 1759w","type":"image/webp","sizes":"(min-width: 1759px) 1759px, 100vw"}]},"width":1759,"height":964}');

/***/ }),

/***/ 7006:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#283848","images":{"fallback":{"src":"/static/660ac41734677e41461d1160df16c5b6/b9c28/crown-0-64-shadow-settings.png","srcSet":"/static/660ac41734677e41461d1160df16c5b6/9a826/crown-0-64-shadow-settings.png 190w,\\n/static/660ac41734677e41461d1160df16c5b6/987e7/crown-0-64-shadow-settings.png 380w,\\n/static/660ac41734677e41461d1160df16c5b6/b9c28/crown-0-64-shadow-settings.png 760w","sizes":"(min-width: 760px) 760px, 100vw"},"sources":[{"srcSet":"/static/660ac41734677e41461d1160df16c5b6/94c4f/crown-0-64-shadow-settings.webp 190w,\\n/static/660ac41734677e41461d1160df16c5b6/b8917/crown-0-64-shadow-settings.webp 380w,\\n/static/660ac41734677e41461d1160df16c5b6/55b04/crown-0-64-shadow-settings.webp 760w","type":"image/webp","sizes":"(min-width: 760px) 760px, 100vw"}]},"width":760,"height":504}');

/***/ }),

/***/ 7165:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/fc7f4b4cf3c6c1ad061791d02522f389/e7eaf/crown-editor.png","srcSet":"/static/fc7f4b4cf3c6c1ad061791d02522f389/34c0a/crown-editor.png 305w,\\n/static/fc7f4b4cf3c6c1ad061791d02522f389/d1f48/crown-editor.png 609w,\\n/static/fc7f4b4cf3c6c1ad061791d02522f389/e7eaf/crown-editor.png 1218w","sizes":"(min-width: 1218px) 1218px, 100vw"},"sources":[{"srcSet":"/static/fc7f4b4cf3c6c1ad061791d02522f389/91e92/crown-editor.webp 305w,\\n/static/fc7f4b4cf3c6c1ad061791d02522f389/c492a/crown-editor.webp 609w,\\n/static/fc7f4b4cf3c6c1ad061791d02522f389/b53ad/crown-editor.webp 1218w","type":"image/webp","sizes":"(min-width: 1218px) 1218px, 100vw"}]},"width":1218,"height":756}');

/***/ }),

/***/ 7813:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#88a8b8","images":{"fallback":{"src":"/static/eb391c240ff721b1e6d67b77554653e5/f0588/crown-0-62-culling.png","srcSet":"/static/eb391c240ff721b1e6d67b77554653e5/e110b/crown-0-62-culling.png 320w,\\n/static/eb391c240ff721b1e6d67b77554653e5/7855f/crown-0-62-culling.png 640w,\\n/static/eb391c240ff721b1e6d67b77554653e5/f0588/crown-0-62-culling.png 1280w","sizes":"(min-width: 1280px) 1280px, 100vw"},"sources":[{"srcSet":"/static/eb391c240ff721b1e6d67b77554653e5/cc4ac/crown-0-62-culling.webp 320w,\\n/static/eb391c240ff721b1e6d67b77554653e5/64323/crown-0-62-culling.webp 640w,\\n/static/eb391c240ff721b1e6d67b77554653e5/51924/crown-0-62-culling.webp 1280w","type":"image/webp","sizes":"(min-width: 1280px) 1280px, 100vw"}]},"width":1280,"height":720}');

/***/ }),

/***/ 8649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ FadeIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const distanceClasses={small:{"from-top":"-translate-y-6","from-bottom":"translate-y-6","from-left":"-translate-x-6","from-right":"translate-x-6",none:""},medium:{"from-top":"-translate-y-10","from-bottom":"translate-y-10","from-left":"-translate-x-10","from-right":"translate-x-10",none:""},large:{"from-top":"-translate-y-12","from-bottom":"translate-y-12","from-left":"-translate-x-12","from-right":"translate-x-12",none:""},extra:{"from-top":"-translate-y-20","from-bottom":"translate-y-20","from-left":"-translate-x-20","from-right":"translate-x-20",none:""}};const speedClasses={fast:"duration-300",normal:"duration-500",slow:"duration-700"};function FadeIn({children,className="",direction="from-bottom",distance="large",speed="normal",delay=200,threshold=0.15,once=true}){var _distanceClasses$dist,_directionMap$directi,_speedClasses$speed;const elementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const{0:isVisible,1:setIsVisible}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const element=elementRef.current;if(!element)return;if(!("IntersectionObserver"in window)){setIsVisible(true);return;}const observer=new IntersectionObserver(([entry])=>{setIsVisible(entry.isIntersecting);if(entry.isIntersecting&&once){observer.unobserve(element);}},{threshold});observer.observe(element);return()=>observer.disconnect();},[once,threshold]);const directionMap=(_distanceClasses$dist=distanceClasses[distance])!==null&&_distanceClasses$dist!==void 0?_distanceClasses$dist:distanceClasses.large;const hiddenDirection=(_directionMap$directi=directionMap[direction])!==null&&_directionMap$directi!==void 0?_directionMap$directi:directionMap["from-bottom"];const duration=(_speedClasses$speed=speedClasses[speed])!==null&&_speedClasses$speed!==void 0?_speedClasses$speed:speedClasses.normal;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{ref:elementRef,style:{transitionDelay:isVisible?`${Math.max(0,delay)}ms`:"0ms"},className:["transform-gpu transition-[opacity,transform] ease-out",duration,"motion-reduce:transform-none","motion-reduce:opacity-100","motion-reduce:transition-none",isVisible?"translate-x-0 translate-y-0 opacity-100":`${hiddenDirection} opacity-0`,className].filter(Boolean).join(" ")},children);}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jsx.js.map