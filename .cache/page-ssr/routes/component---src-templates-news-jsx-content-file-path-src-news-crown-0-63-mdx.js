"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

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

/***/ }),

/***/ 8776:
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
;// ./src/news/crown-0-63-drag.mp4
/* harmony default export */ const crown_0_63_drag = ("/static/crown-0-63-drag-b50d1f65686d675e25fb448b9137c5bf.mp4");
;// ./src/news/crown-0-63-physics-debug.mp4
/* harmony default export */ const crown_0_63_physics_debug = ("/static/crown-0-63-physics-debug-4d229208a9d38794c629681abf80b76c.mp4");
;// ./src/news/crown-0-63-lod-unit-editor.mp4
/* harmony default export */ const crown_0_63_lod_unit_editor = ("/static/crown-0-63-lod-unit-editor-cc7f98d8db62f122174057615a8b9005.mp4");
;// ./src/news/crown-0-63.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",strong:"strong",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h2,null,"What's New"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"After almost two months of development, The Crown Foundation is proud to present ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Crown 0.63")," to\nthe gamedev community!"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release adds a new ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"LOD Group component")," that lets you optimize performance by dynamically\nchoosing which mesh a Unit should render based on its distance from the camera. The LOD Group\ncomponent can be fine-tuned in the Unit Editor and is automatically imported from scene files."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Speaking of scene files, Crown 0.63 introduces support for the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"OBJ mesh format"),", improves the\nexisting FBX importer with ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"MikkTSpace tangent-space calculation"),", and also brings many\ncorrections to texture and material extraction (special thanks to Gallonigher, one of our community\nmembers, for his valuable testing efforts!)."),"\n",/*#__PURE__*/index_js_default().createElement("video",{autoPlay:true,muted:true,loop:true,playsInline:true,controls:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_63_lod_unit_editor,type:"video/mp4"})),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"A test unit with dummy LODs in the Unit Editor."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This new version also introduces several ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"new physics joint components"),". These include the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Fixed\nJoint")," for simple physics-based unit parenting, the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Spring Joint")," to simulate bouncy behavior, a\n",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Limb Joint")," dedicated to ragdoll simulation, the highly configurable general-purpose ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"D6\nJoint"),", and more!"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"As part of the new joints work, Crown 0.63 also brings the ability to customize more ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.63.0/reference/boot_config.html#physics-configurations"},"physics\nsimulation\nparameters"),"\nas well as a ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"new physics command")," to access useful physics debugging visualizations."),"\n",/*#__PURE__*/index_js_default().createElement("video",{autoPlay:true,muted:true,loop:true,playsInline:true,controls:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_63_physics_debug,type:"video/mp4"})),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Debug visualization for a chain of units connected via the new Limb Joint."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Overall, the level-editing experience has been greatly improved with the introduction of numerous\nenhancements throughout the toolset: the flythrough ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"camera speed can now be easily adjusted")," via\ndedicated keybinds, objects and resources have gained ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"drag & drop support"),", and ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"hide and lock\ncontrols")," in the Level Tree are now ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"smoother and more fun to use")," thanks to the ability to\ntoggle them in bulk with a simple click-and-drag gesture."),"\n",/*#__PURE__*/index_js_default().createElement("video",{autoPlay:true,muted:true,loop:true,playsInline:true,controls:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_63_drag,type:"video/mp4"})),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"You can now just click and drag over hide/lock controls to toggle them in bulk."),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Roadmap Updates"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"An important item has been checked off the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://www.crownengine.org/roadmap"},"roadmap")," with the\nintroduction of the new ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"SaveGame system")," that provides a ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.63.0/lua_api.html#savegame"},"simple asynchronous\nAPI")," for persisting the game state\non all supported platforms. Another significant step forward is the relaxation of ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"cross-resource\nreference checks"),", which now trigger a warning without hard-stopping the Data Compiler\nunnecessarily."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Some time has also been spent on cementing the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"hot-reloading support"),", which has been ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"expanded\nto almost all resource types")," with the addition of meshes, sounds, fonts, sprites and sprite\nanimations."),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Legacy Hardware Support"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release brings back the good old ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"OpenGL renderer")," on Linux, in addition to the recently\nintroduced one based on Vulkan. A new ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.63.0/reference/boot_config.html#renderer-configurations"},"boot config\noption"),"\nhas been added to choose between the two. The Vulkan renderer remains the default on Linux, with\nautomatic fallback to GL."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release also includes ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"30 corrections")," for issues present in the previous version. Check out\nthe ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.63.0/changelog.html#v0-63-0"},"latest changelog")," for the\ncomplete list of improvements and fixes."),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Join the Development Fund"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"If you're enjoying Crown and want to see more, consider chipping in - it helps\nkeep the project moving."),"\n",/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_63 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-63.mdx









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
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_63, props));
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

/***/ })

};
;
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-63-mdx.js.map