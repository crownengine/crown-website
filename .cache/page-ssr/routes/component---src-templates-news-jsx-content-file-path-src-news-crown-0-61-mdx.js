"use strict";
exports.id = 128;
exports.ids = [128];
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

/***/ 4191:
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
;// ./src/news/crown-0-61.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",strong:"strong",span:"span",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.h2,null,"What's New"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release upgrades the Linux rendering backend of Crown to a\nfull ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Vulkan")," solution. That gives us a clean path for future performance\nwork and fixes compatibility issues with tricky but increasingly common\nsetups like ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"XWayland + NVIDIA")," where the old GL backend wasn't doing\nwell."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 828px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/3c8aabe31a802c5ed5b42183d9462f71/aaaf2/crown-0-61-crown-vulkan.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 50.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABrklEQVR42p2S20oCURSGRwvyAULzMGrjYcaRyGNaIWEWRVAwECTWiJo6DVREN10ZPkhWD9HpCYwKn6QeQfhbezNZRDd28bM2e+/1raPgj+URUBfBrFNKIpxYgTRXgIvOX/fjSGBO3mgWXjmH5TUN9ZaJasNArrgDT3SBvwXUMYDMIbG0Cb1hotvt4rnfx9vrCzqdS5SrbajZEnzyAgL0WSR5LfHK/gK6QmlUake4velhOBxyDQYDfLy/4/b6ClvaPs/UT5WEyCFOlSgk5uyxWuKzgo2AZb2Fp6dH9Ho9mKYJQRBgGEd4uL9DaWuXtyMYW8SFmMCZP4nybBqboQxSFChIkJiSg2RBBaeUQrV5jFQywUFMNpuN23hchbZXhzuSwSx9zhFAkzI4DKZwTuAmWZ3gF2ISxUgWM6oFrLdPMeNycojdbudiZ0WOYK9qgFXBhucmh5CSh0wZMYUtG2UZKr+G0jBOUCgUMDk5AYdjCqW1ddRaJ6Oh+NXvIfh+SfzZQxbZQ+l6qZwNTYdea+Kg1kJpuwJ3OMPvx9lHYbTYlMF0cB5yehURWm52/s9ifwLgzErwBA/cXAAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/3c8aabe31a802c5ed5b42183d9462f71/cb58d/crown-0-61-crown-vulkan.webp 300w,\n/static/3c8aabe31a802c5ed5b42183d9462f71/f8b1b/crown-0-61-crown-vulkan.webp 600w,\n/static/3c8aabe31a802c5ed5b42183d9462f71/61a6b/crown-0-61-crown-vulkan.webp 828w\"\n              sizes=\"(max-width: 828px) 100vw, 828px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/3c8aabe31a802c5ed5b42183d9462f71/f2d49/crown-0-61-crown-vulkan.png 300w,\n/static/3c8aabe31a802c5ed5b42183d9462f71/ff59c/crown-0-61-crown-vulkan.png 600w,\n/static/3c8aabe31a802c5ed5b42183d9462f71/aaaf2/crown-0-61-crown-vulkan.png 828w\"\n            sizes=\"(max-width: 828px) 100vw, 828px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/3c8aabe31a802c5ed5b42183d9462f71/aaaf2/crown-0-61-crown-vulkan.png\"\n            alt=\"crown-vulkan\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Crown now uses Vulkan for rendering on Linux!")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"In this update we added ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"15 new manual pages"),", covering ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/importing_resources/index.html"},"how")," to ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/importing_resources/importing_sprites.html"},"import"),"\n",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/importing_resources/importing_textures.html"},"resources"),", many ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/level_editor/level_viewport.html"},"Level")," ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/level_editor/inspector.html"},"Editor")," ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/level_editor/level_tree.html"},"features"),", and ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/rendering/lighting.html"},"various")," ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/physics/rigid_bodies.html"},"other")," ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/level_editor/texture_settings.html"},"topics")," to help you get up to speed faster."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 816px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/2450e838bfe8abe1b27badde48379d86/41d0c/crown-0-61-move-rotate-scale.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 31.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNUlEQVR42k1QXUsDMRC8f+Ql2SR39tpL7moPa6EclRax1YII+uST1I8HEYsW/dHjJie2Dwu7md2ZzCRSSiilICSX0CBNsNaiLEtorWG0gZQCymieDbIsg/e+w4zhO4Kirg9vSVVV3BBGvkbjzphAgnghiAQCaxTaSY16kLOY3hOaDhufTOB7LnIE0sQ5h2ZYYfv+hbuHewz7xxHwlUeaClxdz7H73mG9mKMwBDIWwVUqBFbzGT63P1heLjGwJookkgitH+Bjs8HNegk/zqPtnH9yJBTWqwu8Pr9gMWtRmoDZaE0w6W07xdvTI85XUxSuiyQhJrRKYlQWaLh0pqI1zbY1q5rcovFDlHmBjHiOWXaZ9Vj4tHbwfRbK/iwHUPOS5MykIibqwv0vXury3Ad/iIUbOsB+Aa/5zxYBoIg7AAAAAElFTkSuQmCC'); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/2450e838bfe8abe1b27badde48379d86/cb58d/crown-0-61-move-rotate-scale.webp 300w,\n/static/2450e838bfe8abe1b27badde48379d86/f8b1b/crown-0-61-move-rotate-scale.webp 600w,\n/static/2450e838bfe8abe1b27badde48379d86/86ed8/crown-0-61-move-rotate-scale.webp 816w\"\n              sizes=\"(max-width: 816px) 100vw, 816px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/2450e838bfe8abe1b27badde48379d86/f2d49/crown-0-61-move-rotate-scale.png 300w,\n/static/2450e838bfe8abe1b27badde48379d86/ff59c/crown-0-61-move-rotate-scale.png 600w,\n/static/2450e838bfe8abe1b27badde48379d86/41d0c/crown-0-61-move-rotate-scale.png 816w\"\n            sizes=\"(max-width: 816px) 100vw, 816px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/2450e838bfe8abe1b27badde48379d86/41d0c/crown-0-61-move-rotate-scale.png\"\n            alt=\"crown-move-rotate-scale\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Our favorite figure from the new documentation pages")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown 0.61 also brings a much-needed ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"HSV color picker"),", a new ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"flythrough\ncamera mode")," for zipping around viewports, and lots of small ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"tweaks and fixes"),"\nacross the editor."),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 326px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/d4374ec53ac43c653555f835b557851a/97507/crown-0-61-hsv-color-picker.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 151.99999999999997%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,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'); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/d4374ec53ac43c653555f835b557851a/cb58d/crown-0-61-hsv-color-picker.webp 300w,\n/static/d4374ec53ac43c653555f835b557851a/20dbe/crown-0-61-hsv-color-picker.webp 326w\"\n              sizes=\"(max-width: 326px) 100vw, 326px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/d4374ec53ac43c653555f835b557851a/f2d49/crown-0-61-hsv-color-picker.png 300w,\n/static/d4374ec53ac43c653555f835b557851a/97507/crown-0-61-hsv-color-picker.png 326w\"\n            sizes=\"(max-width: 326px) 100vw, 326px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/d4374ec53ac43c653555f835b557851a/97507/crown-0-61-hsv-color-picker.png\"\n            alt=\"hsv-color-picker\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"The new HSV color picker")),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"As always, check out the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/latest/changelog.html#v0-61-0"},"latest\nchangelog")," to see the full list of improvements and fixes. And don't forget to hop into our ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://discord.gg/invite/CeXVWCT"},"discord")," server and share your thoughts on the new stuff!"),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement(_components.h2,null,"Join the Development Fund"),"\n",/*#__PURE__*/index_js_default().createElement(_components.p,null,"If you're enjoying Crown and want to see more, consider chipping in - it helps\nkeep the project moving."),"\n",/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_61 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-61.mdx









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
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_61, props));
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
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-61-mdx.js.map