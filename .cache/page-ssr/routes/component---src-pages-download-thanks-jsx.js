"use strict";
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 1241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Thanks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_clamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1794);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3206);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4496);
/* harmony import */ var _components_donation_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6393);
/* harmony import */ var _components_stats_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1723);
function Thanks({location}){var _location$state;const download_url=((_location$state=location.state)===null||_location$state===void 0?void 0:_location$state.crown_download_url)||"none";(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(download_url==="none")return;const timer=setTimeout(()=>{window.location.href=download_url;},400);return()=>clearTimeout(timer);},[download_url]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"pb-80 md:pb-0 bg-gradient-to-b from-gray-900 to-gray-800"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_clamp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"py-0 md:py-24 px-4 text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"w-full max-w-2xl mx-auto"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"mt-28 text-lg text-gray-300"},"Your download will start soon. If it didn't, click here to start it"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"underline",href:download_url==="none"?"https://github.com/crownengine/crown/releases":download_url},"manually"),".")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_clamp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"py-2 px-4 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"grid md:grid-cols-6 gap-6 mb-40"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-span-6 md:col-span-3 flex flex-col gap-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"text-6xl font-bold text-transparent"},"Help Crown grow Stronger and Faster"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-2xl text-gray-300"},"Donations support Core Contributors working on Features, Maintenance and Improvements \uD83E\uDD70")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"col-span-6 md:col-span-3 flex flex-col gap-6 relative",id:"donation-box"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"absolute top-0 left-0 w-full"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_donation_box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,null))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"bg-gradient-to-b from-gray-900 to-gray-800 py-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_clamp__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"p-8 text-white"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_stats_banner__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,null)))));}const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{title:"Thanks"});

/***/ }),

/***/ 1723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
const StatsBanner=()=>{const data=(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.useStaticQuery)("2541940361");const stats=data.site.siteMetadata.stats;const{0:counters,1:setCounters}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(stats.map(()=>0));const floatsRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stats.map(()=>0));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const duration=1000;const intervalMs=33;// Per-tick increment so all finish in exactly 'duration'.
const increments=stats.map(s=>s.value*intervalMs/duration);const interval=setInterval(()=>{let allDone=true;const next=stats.map((s,i)=>{floatsRef.current[i]+=increments[i];if(floatsRef.current[i]<s.value){allDone=false;return Math.floor(floatsRef.current[i]);}else{return s.value;}});setCounters(next);if(allDone)clearInterval(interval);},intervalMs);return()=>clearInterval(interval);},[stats]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"my-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-6 text-center"},stats.map((item,i)=>{const is_external=!item.link.startsWith("/");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:item.label},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"text-6xl font-extrabold leading-tight"},counters[i].toLocaleString(),item.suffix||""),is_external?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:item.link,target:"_blank",rel:"noopener noreferrer",className:"mt-2 block uppercase tracking-wide text-base font-bold text-gray-400 hover:text-gray-200"},item.label):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"mt-2 block uppercase tracking-wide text-base font-bold text-gray-400 hover:text-gray-200",to:item.link},item.label));})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsBanner);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-download-thanks-jsx.js.map