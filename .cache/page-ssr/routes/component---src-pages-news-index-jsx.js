"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 1495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MediaCoverageList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
const articles=[{outlet:"Engines Database",title:"This Week in Game Engines #39",author:"Henrique L. Alves",date:"August 19, 2026",url:"https://enginesdatabase.com/blog/this-week-in-game-engines-39/",screenshot:"/media-coverage/engines-database.png"},{outlet:"Phoronix",title:"Crown Engine 0.63 Restores Its OpenGL Renderer For Legacy Hardware Support",author:"Michael Larabel",date:"June 4, 2026",url:"https://www.phoronix.com/news/Crown-Engine-0.63",screenshot:"/media-coverage/phoronix-crown-engine-0.60.png"},{outlet:"Phoronix",title:"Open-Source Crown Game Engine v0.60 Released",author:"Michael Larabel",date:"December 31, 2025",url:"https://www.phoronix.com/news/Crown-Engine-0.60",screenshot:"/media-coverage/phoronix-crown-engine-0.60.png"}];function MediaCoverageCard({article,titleAs:Title}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article",{className:"widget group flex h-full flex-col overflow-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"block overflow-hidden bg-deepest",href:article.url,rel:"noreferrer",target:"_blank","aria-label":article.title},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"aspect-video w-full transform-gpu object-cover opacity-90 transition duration-200 ease-out group-hover:scale-[1.04] group-hover:opacity-100 motion-reduce:group-hover:scale-100",src:article.screenshot,alt:`${article.outlet} article screenshot`})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"p-6 flex-1 flex flex-col"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-caption font-semibold mb-4 flex items-center gap-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"uppercase text-brand"},article.outlet),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"text-inverse-muted","aria-hidden":"true"},"|"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"text-muted"},article.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Title,{className:"text-lead font-semibold text-ink mb-3 leading-tight"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"hover:text-brand-hover",href:article.url,rel:"noreferrer",target:"_blank"},article.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mt-auto text-small text-muted"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"By ",article.author))));}MediaCoverageCard.propTypes={article:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,titleAs:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType).isRequired};function MediaCoverageList({limit=Infinity,titleAs="h2"}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"text-left text-muted"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"grid gap-5 md:grid-cols-3"},articles.slice(0,limit).map(article=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MediaCoverageCard,{key:article.url,article:article,titleAs:titleAs}))));}MediaCoverageList.propTypes={limit:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),titleAs:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType)};

/***/ }),

/***/ 2293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ NewsIndex)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_clamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1794);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6696);
/* harmony import */ var _components_media_coverage_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1495);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4496);
/* harmony import */ var _components_news_list_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(889);
// See: https://www.gatsbyjs.com/docs/adding-a-list-of-markdown-blog-posts/
function NewsIndex({data}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"bg-deepest"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_clamp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"px-4 pb-16 pt-12","aria-labelledby":"news-heading"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"mb-6 text-title font-bold text-inverse"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{id:"news-heading",className:"hover:text-brand-light",to:"/news/all"},"News")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_news_list_jsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{edges:data.allMdx.edges,limit:1,listClassName:"grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",itemClassName:"col-span-full",sectionClassName:"mb-12"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_news_list_jsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{edges:data.allMdx.edges,start:1,limit:3,listClassName:"grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-4 gap-y-12",itemClassName:""})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_clamp__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"mb-16 mt-12 px-4","aria-labelledby":"media-coverage-heading"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"mb-6 text-title font-bold text-ink"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{id:"media-coverage-heading",className:"hover:text-brand-hover",to:"/media-coverage"},"Media Coverage")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_media_coverage_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{limit:3,titleAs:"h3"}))));}const pageQuery="2582294709";const Head=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{title:"Crown - Latest News"});

/***/ })

};
;
//# sourceMappingURL=component---src-pages-news-index-jsx.js.map