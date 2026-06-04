"use strict";
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 1462:
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
;// ./src/news/crown-0-60.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",strong:"strong",span:"span",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h2,null,"What's New"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown 0.60 is out! This major update introduces significant new features and\nimprovements throughout the engine. A ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"brand new Unit Editor")," has been added\nfor editing prefabs, along with a ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"State Machine Editor")," for configuring\ncomplex 3D skeletal animations."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/094d3230d66aebd7b17dbfc6cb84bbd2/b3178/crown-0-60-animation-editor.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 54.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxklEQVR42mWQXWsTQRSG93+IRUw2MzvJzM7snNntxiRrNrtpeuFHNoQttrYmGm2hutXghZ/XBaEoQqE0MeCFVan/0UmWYlMfXl44c3jncI7BhW1hZBaLJQ1CuRDG3BEOSO1CCkwIImXdN02zZBau+1vX4ncm9Y31/XFnL1sb7d/9cJh8niZHk+TLLDmadj+daCXaD4/rd+77UTuIYtcForEsPY/SivH85Ec2+ZVNfh5Mfx/Mzl/M/rx+8zH7+i2bnb86PRufnr08/n7rdlOCrNYanfW1CqMWtuZxjI3R7t6TZ7vD0dPB8PH2o8H2zs7bdvA+7Q63NtN0YyNN034/iuOw1dIDw1YYRiHGyFpggJTScaTeUK8nHI+Ws6rTUzx0uK51UzvnQilVISgKG0HgE1zMZUgAdYGrlJDQrqAHPlTdeZkDAPprp9bp9AemCG6yesFuFFjdgOUwB7Xpw7hZ5f+eF3kpSa3HWg9XVHdFJQt1r4Ydpe65sudJX8FyXAlmgSCClUjpRq55+DICIFQy9oDr7HLLImVq25SxEsIIW1qG67reJZTnNf3VyF9V3lUYY/rC5IL5tW1us2XoQv+TB3KnlHLB/wI0gJ8kPgjW7AAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/094d3230d66aebd7b17dbfc6cb84bbd2/cb58d/crown-0-60-animation-editor.webp 300w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/f8b1b/crown-0-60-animation-editor.webp 600w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/5bb53/crown-0-60-animation-editor.webp 1200w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/13451/crown-0-60-animation-editor.webp 1230w\"\n              sizes=\"(max-width: 1200px) 100vw, 1200px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/094d3230d66aebd7b17dbfc6cb84bbd2/f2d49/crown-0-60-animation-editor.png 300w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/ff59c/crown-0-60-animation-editor.png 600w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/5ece7/crown-0-60-animation-editor.png 1200w,\n/static/094d3230d66aebd7b17dbfc6cb84bbd2/b3178/crown-0-60-animation-editor.png 1230w\"\n            sizes=\"(max-width: 1200px) 100vw, 1200px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/094d3230d66aebd7b17dbfc6cb84bbd2/5ece7/crown-0-60-animation-editor.png\"\n            alt=\"physics\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Animation State Machine Editor")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Additionally, the Project Browser now features a ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Global Search Bar"),", making\nit much easier to work with large projects full of assets. The Level Tree has\nalso been enhanced with improved search functionality. On the Runtime side, you\nwill be pleased to know that ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Shadow Maps")," has been implemented for\nomni-directional lights."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"On top of that, a total of ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"29 bugs have been fixed")," in this release. Take a\nlook at the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/changelog.html#v0-60-0"},"latest changelog")," for\nthe full list of goodies!"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/00d0c16f93164fba08f795eb1acf8722/b3178/crown-0-60-unit-editor.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 54.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIElEQVR42iVSTU9TQRR9v0B/gBAo7eub73lvvt9HX4FSWkLVJhBoiYUqRjGwNTFxQYIuWLEzJupCVi5c6sZ/of/ISzmZZObe3DPn3jMTpSrFBMdx3F4AYQwrQVgIaZ0z1qRZijBBmCKUJO24GbeWwvFS732Lu6ju1pwzYBBKMEK7o8fz05fPjk+Ons0m06PDyfRgMp0cHO7vTbxXWvGqnQix3PAJRmXU6XT6gz5eIEHIGNOt66qqyrIoypCXLs9DqHyV55JRqbPhyhoRDx5Wy2sr/ShprfY2Ojs7PYpaOGlKwbQxWitng8u6jg+8Le8SxktBBSNc8HslQkjU5OUKDuujabH9dJWVUoOSD8HXxfDm8sfb2bfajkPhijynlIEF2mjKGL8Di5rlpN2dLemx3T1tlEfUbha5L4rCaHd29ub268/x1hnMAhkhpXZ2dnJycXEOmM/nkSDxaGfTG47bDZY0spQ770F7Y31bad8Jg9Fw31ow3qlMliHLfCUEZ4wJIaJW3O4Phr1BH9xCiGSZCsFZV3+8/vX61dWf7/9+f/lbhS3rDFBUynywymoodc5GsMHFZhEDMnhWrZ4Pnlxd35zffrg8//zuxSdnCiiFSZW1wlWUEqgE5yLw7Z4G7sFZKWjWTbsb473uo0ORSikz6b0LITdKGi2ZkGAVFEPnEcLwce5aThaglEohEaOYsIymAAgFB7MkEEATRpWpAL7z7j8p7ZQI1YutbQAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/00d0c16f93164fba08f795eb1acf8722/cb58d/crown-0-60-unit-editor.webp 300w,\n/static/00d0c16f93164fba08f795eb1acf8722/f8b1b/crown-0-60-unit-editor.webp 600w,\n/static/00d0c16f93164fba08f795eb1acf8722/5bb53/crown-0-60-unit-editor.webp 1200w,\n/static/00d0c16f93164fba08f795eb1acf8722/13451/crown-0-60-unit-editor.webp 1230w\"\n              sizes=\"(max-width: 1200px) 100vw, 1200px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/00d0c16f93164fba08f795eb1acf8722/f2d49/crown-0-60-unit-editor.png 300w,\n/static/00d0c16f93164fba08f795eb1acf8722/ff59c/crown-0-60-unit-editor.png 600w,\n/static/00d0c16f93164fba08f795eb1acf8722/5ece7/crown-0-60-unit-editor.png 1200w,\n/static/00d0c16f93164fba08f795eb1acf8722/b3178/crown-0-60-unit-editor.png 1230w\"\n            sizes=\"(max-width: 1200px) 100vw, 1200px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/00d0c16f93164fba08f795eb1acf8722/5ece7/crown-0-60-unit-editor.png\"\n            alt=\"physics\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Unit Editor")),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Thanks!"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"If you appreciate our work, please consider supporting us with a small donation.\nIt truly makes a difference!"),"\n",/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_60 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-60.mdx









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
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_60, props));
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
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-60-mdx.js.map