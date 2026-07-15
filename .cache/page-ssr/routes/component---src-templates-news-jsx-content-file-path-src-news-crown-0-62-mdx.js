"use strict";
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 2589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Head: () => (/* binding */ Head),
  "default": () => (/* binding */ GatsbyMDXWrapper)
});

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: external "/home/runner/work/crown-website/crown-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(8250);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/donation-box.jsx
var donation_box = __webpack_require__(6393);
// EXTERNAL MODULE: ./src/components/download-button.jsx
var download_button = __webpack_require__(3914);
;// ./src/news/crown-0-62.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",strong:"strong",span:"span",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h2,null,"What's New"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown 0.62 is out! This release makes day-to-day work in the editor smoother, improves runtime\nbehavior in larger scenes, and expands input support across platforms."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"On the runtime side, Crown 0.62 refactors the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Mover component"),", adding new features while\nsubstantially improving robustness. It also includes ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"frustum-culling work")," that improves\nperformance in levels with large numbers of units."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/eb391c240ff721b1e6d67b77554653e5/f3baa/crown-0-62-culling.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 56.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAC4jAAAuIwF4pT92AAACxklEQVR42h2S23LaBhRF9UvtD6TThzYP7WQmiQmOTUzspPaQ2MaEi7lKBiQjdEEggYSuGBzXxqGeqTOd9qXTL+gvrWr6ds7L3vusswUpuce9U+kHd/S8kGd5Ec000ecxsr7BnVs0whA5WdHxDZRQZ+ws6Y9UWo7H+k+NZGlT++uRg8ffEc5uH6iNvhLqf1BdJcjjkEs/QvI3jMO/iRWPVjBBXnl4yzFaajpwI9YPGgNTo28aTNcr5r075GmAIC8eKSkur84dDq05FWdD2/dRvwT8W/mHWWVGx5xheQmiHXPlXDL9dE55MaV+1EcaRZQdlVruLUV1iWAY90jxZ7YuQxp6yGvtM9ZkRhL1EPWY8cynpq2Qgxta8pBGp01NCjmZ3VPs20y96f+ipZcSqyiHMFoPmCr3aOmZ5rXJjizSjkNqg4DafERXc9BNj14wozRMOc7GTGyfiRchxqlYLHGRzsb1mujGQrD8LnGachTeMokHNL0vNOJb6pvfaLgBbb3NMFnTtRM6Ny6Gkz5oeEUpDhhaI/qew26xmaLqMriJEI5di30xQjWvCdYKim6hlCqcVmWaaorBGyM5Nn03NfV0DOuaur6isEwxqD6doUv/zk1xddGMGKE+j+i0PZrmmGrfQrZsLhYGomKieks68ZqWOkIce8jp3orSL6d1kayQj/6CtmViKDoTw6fu/4ow/OWI9vcGL795Qn77B1TdTaszpWw4WPYlk82EsuLQn/ppuhFSr4k3l0h8kYKiUpw9UF1+RYyuqNl22sM3BxxvnfEql6Hw5i3ldw1kOUtteMpiuU+cvObd4T6VaoOL0w4nZ3m6rQJB5Tu69T1e9OacpeyOqlVOmmWE3N5Tcvkf2dnKcnH+M3u7WbYPdjj5kOH9i21KjQM+Zp5TeJLleXaP7H6e7cwWjWffcpx9yofMTxQPDzivH/OpvMt/r3U4Jl0ulkEAAAAASUVORK5CYII='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/eb391c240ff721b1e6d67b77554653e5/cb58d/crown-0-62-culling.webp 300w,\n/static/eb391c240ff721b1e6d67b77554653e5/f8b1b/crown-0-62-culling.webp 600w,\n/static/eb391c240ff721b1e6d67b77554653e5/5bb53/crown-0-62-culling.webp 1200w,\n/static/eb391c240ff721b1e6d67b77554653e5/e2782/crown-0-62-culling.webp 1280w\"\n              sizes=\"(max-width: 1200px) 100vw, 1200px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/eb391c240ff721b1e6d67b77554653e5/f2d49/crown-0-62-culling.png 300w,\n/static/eb391c240ff721b1e6d67b77554653e5/ff59c/crown-0-62-culling.png 600w,\n/static/eb391c240ff721b1e6d67b77554653e5/5ece7/crown-0-62-culling.png 1200w,\n/static/eb391c240ff721b1e6d67b77554653e5/f3baa/crown-0-62-culling.png 1280w\"\n            sizes=\"(max-width: 1200px) 100vw, 1200px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/eb391c240ff721b1e6d67b77554653e5/5ece7/crown-0-62-culling.png\"\n            alt=\"crown-0-62-large-level\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Large levels now perform better thanks to frustum-culling improvements")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Input support expands across platforms: ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Android")," now supports keyboard, mouse and joypad input.\n",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"HTML5")," also gains joypad input support: try it on the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://play.crownengine.org/physics"},"updated physics\nsample")," and tell us if you encounter any issues."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Inside the editor, the Console command bar can now ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"suggest completions")," while typing Lua\nexpressions, resources can be ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"duplicated")," straight from the Project Browser, and objects can now\nbe ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"hidden")," or ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"locked")," from the Level Tree."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/3f82bb179a29dedba2a0dcf1c3d1c648/5ece7/crown-0-62-console-browser-tree.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 33.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACBklEQVR42h2PW2/ScByG+0GMd5qMnmBAW+iBFmgp6wHa9aQc1yIR2EGHybjyRr1yGl3cjLvwW5hoFqeGKPEjCfz9ibt48ibvxfPmxTpRp3fPcbqeY3cDz+76rtUf9DuNqNVqiyI/q1etqVJynnh1aWrq1Vlzr9XutduR53kHvu+PNjn+j+u6+6PRyMBosQQ4w61ynIiyrLBieAUEWb22beuT6waQ14pr1ePgFuMhOleCkGA+SxXte55hAcdTCMdxSKVSiCRJMAzjJZapqFByBqjiDoA3e4hSImDUYG7t1L7EnQT4HR4ZYQ5u8wGiORl8krmyHWduWRYQBHEj2oCy2SxsujdYQRagaZnItgyo6ypi8tvAs8zPfFW5ulOTQa/oKMcWoE6qSMFFaDjitaKUf9mNBlA0jYgbIYWKRR42t8+xHM+BqumriqojSamsCIoGgSsseEP7urWrgVbVlrwsrGuktdQoDQJH+FZWlIXTMCGfoZZpEl9TxNayyOVh12l+wBiWhaxkLjNlf7VdDv/QrAyCJC10QfthpbTNmIwUmYNMNoPINAWSKM1L5v3ftXAf0kq4xgX3713OXmfKETTD/kcsSZJXg+Hw9IbB8DTux68nB5Onh/H4+Yk+vYxj5+Lh2Hof+NFFEASXD5LkRTI5fubvHZ17/UdvN3kWJo/Pgvjo3eHxyewf9fTjzontRPYAAAAASUVORK5CYII='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/3f82bb179a29dedba2a0dcf1c3d1c648/cb58d/crown-0-62-console-browser-tree.webp 300w,\n/static/3f82bb179a29dedba2a0dcf1c3d1c648/f8b1b/crown-0-62-console-browser-tree.webp 600w,\n/static/3f82bb179a29dedba2a0dcf1c3d1c648/5bb53/crown-0-62-console-browser-tree.webp 1200w\"\n              sizes=\"(max-width: 1200px) 100vw, 1200px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/3f82bb179a29dedba2a0dcf1c3d1c648/f2d49/crown-0-62-console-browser-tree.png 300w,\n/static/3f82bb179a29dedba2a0dcf1c3d1c648/ff59c/crown-0-62-console-browser-tree.png 600w,\n/static/3f82bb179a29dedba2a0dcf1c3d1c648/5ece7/crown-0-62-console-browser-tree.png 1200w\"\n            sizes=\"(max-width: 1200px) 100vw, 1200px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/3f82bb179a29dedba2a0dcf1c3d1c648/5ece7/crown-0-62-console-browser-tree.png\"\n            alt=\"crown-0-62-editor-workflow\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Console completions, Project Browser duplication, and Level Tree hide/lock controls")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Full documentation in both ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"HTML")," and ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"reStructuredText (RST)")," format is now bundled directly in\nthe binary packages to avoid depending on continued internet access and also help feeding LLMs\nfaster."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release also includes ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"23 fixes")," across the editor, runtime, data compiler and Lua API. That\ncovers issues like flythrough camera stutters, HTML5 text fringe, Linux joypad and keyboard quirks,\nslow shader/material compilation, and more."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"As always, check out the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/changelog.html#v0-62-0"},"latest\nchangelog")," for the complete list of\nimprovements and fixes."),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Join the Development Fund"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"If you're enjoying Crown and want to see more, consider chipping in - it helps\nkeep the project moving."),"\n",/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_62 = (MDXContent);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/components/layout.jsx + 3 modules
var layout = __webpack_require__(3206);
// EXTERNAL MODULE: ./src/components/clamp.jsx
var clamp = __webpack_require__(1794);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(4496);
// EXTERNAL MODULE: ./src/components/mdx.jsx
var components_mdx = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-62.mdx









function NewsTemplate({
  data: {
    mdx
  },
  children,
  pageContext
}) {
  const prevNews = pageContext.prev ? {
    url: `${pageContext.prev.frontmatter.slug}`,
    title: pageContext.prev.frontmatter.title
  } : null;
  const nextNews = pageContext.next ? {
    url: `${pageContext.next.frontmatter.slug}`,
    title: pageContext.next.frontmatter.title
  } : null;
  return /*#__PURE__*/index_js_default().createElement(layout/* default */.A, null, /*#__PURE__*/index_js_default().createElement("div", {
    className: "bg-gray-200"
  }, /*#__PURE__*/index_js_default().createElement(clamp/* default */.A, null, /*#__PURE__*/index_js_default().createElement("section", {
    className: "md:px-40 px-6 pt-16 text-left text-gray-700"
  }, /*#__PURE__*/index_js_default().createElement("span", {
    className: "text-1xl text-gray-500 mb-4"
  }, mdx.frontmatter.date), /*#__PURE__*/index_js_default().createElement("h1", {
    className: "text-5xl font-bold mb-12"
  }, mdx.frontmatter.title)), /*#__PURE__*/index_js_default().createElement("section", {
    className: "md:px-40 px-6 text-left mb-8 text-gray-700"
  }, /*#__PURE__*/index_js_default().createElement(lib/* MDXProvider */.xA, {
    components: components_mdx/* default */.Ay
  }, children)), /*#__PURE__*/index_js_default().createElement("section", {
    className: "flex flex-col md:flex-row md:px-40 px-6 text-gray-700"
  }, prevNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "flex flex-col md:flex-row w-full inline-block py-4 px-4 font-semibold leading-none text-gray-600 hover:text-white hover:bg-indigo-700 rounded",
    to: prevNews.url
  }, "< ", prevNews.title), nextNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "flex flex-col md:flex-row w-full text-end justify-end inline-block py-4 px-4 font-semibold leading-none text-gray-600 hover:text-white hover:bg-indigo-700 rounded",
    to: nextNews.url
  }, nextNews.title, " >"))), /*#__PURE__*/index_js_default().createElement("section", {
    className: "py-32"
  })));
}
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_62, props));
}
const query = "3469695408";
const Head = ({
  data
}) => {
  const title = data.mdx.frontmatter.title;
  const excerpt = data.mdx.excerpt;
  const image = (0,gatsby_image_module/* getSrc */.by)(data.mdx.frontmatter.image);
  return /*#__PURE__*/index_js_default().createElement(seo/* default */.A, {
    title: title,
    description: excerpt,
    image: image
  });
};

/***/ }),

/***/ 3914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
const DownloadButton=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link,{className:"inline-block py-4 px-8 mb-2 font-semibold leading-none text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow",to:"/download"},"Download Crown");};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButton);

/***/ }),

/***/ 5306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports h1, h2, h3, h4, p, a, img, ul, ol, li, blockquote, pre, code */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// See: https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/
function wrap(Tag,baseClasses){return function Component({className="",children,...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag,Object.assign({className:`${baseClasses} ${className}`.trim()},props),children);};}const h1=wrap("h1","text-4xl font-extrabold mt-8 mb-6");const h2=wrap("h2","text-4xl font-extrabold mt-8 mb-6");const h3=wrap("h3","text-3xl font-bold mt-6 mb-3");const h4=wrap("h4","text-2xl font-semibold mt-4 mb-2");const p=wrap("p","leading-relaxed mb-10 mt-10");const a=wrap("a","text-blue-600 underline hover:text-blue-800");const img=wrap("img","rounded-md shadow my-4");const ul=wrap("ul","list-disc pl-6 mb-4");const ol=wrap("ol","list-decimal pl-6 mb-4");const li=wrap("li","mb-1");const blockquote=wrap("blockquote","border-l-4 pl-4 italic bg-gray-50 p-2 rounded");const pre=function Pre({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre",Object.assign({className:`overflow-x-auto p-4 rounded-md mb-4 bg-gray-100 ${className}`},props));};const code=function Code({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code",Object.assign({className:`px-1 py-0.5 rounded bg-gray-200 text-sm ${className}`},props));};const MDXComponents={h1,h2,h3,h4,p,a,img,ul,ol,li,blockquote,pre,code};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXComponents);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-62-mdx.js.map