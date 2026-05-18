"use strict";
exports.id = 539;
exports.ids = [539];
exports.modules = {

/***/ 1794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Clamp)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function Clamp({children}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container center mx-auto 4xl:w-5/11 3xl:w-2/3 md:w-5/6"},children);}Clamp.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired};

/***/ }),

/***/ 3206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: external "/home/runner/work/crown-website/crown-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(8250);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/components/clamp.jsx
var clamp = __webpack_require__(1794);
;// ./src/components/donate-button.jsx
const DonateButton=()=>{return/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"block py-2 pr-4 pl-3 hover:text-white text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow ",to:"/fund"},/*#__PURE__*/index_js_default().createElement("i",{className:"fa fa-heart mr-2"}),"Donate");};/* harmony default export */ const donate_button = (DonateButton);
;// ./src/components/footer.jsx
function Footer(){const data=(0,gatsby_browser_entry.useStaticQuery)("68619037");return/*#__PURE__*/index_js_default().createElement("div",{className:"mt-auto bg-gray-300 px-6 lg:px-8 py-20 text-sm"},/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-wrap"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Download"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/download"},"Latest Crown"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://github.com/crownengine/crown/"},"Source Code"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org/html/latest/changelog.html"},"Changelog"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/crown-license"},"License")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"About"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/about"},"The Crown Foundation"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/about/credits"},"Credits"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/website-about"},"Website"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/roadmap"},"Roadmap"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/privacy-policy"},"Privacy Policy"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/cookie-policy"},"Cookie Policy")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Support"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org"},"User Manual"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org/html/latest/hackers/index.html"},"Developer Manual"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://discord.gg/invite/CeXVWCT"},"Community")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Follow Crown"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row text-lg text-indigo-600"},/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://github.com/crownengine/crown/",title:"Crown Official GitHub page"},/*#__PURE__*/index_js_default().createElement("i",{className:"fab fa-github mr-3","aria-label":"GitHub"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://discord.gg/invite/CeXVWCT",title:"Join Crown on Discord"},/*#__PURE__*/index_js_default().createElement("i",{className:"fab fa-discord mr-3","aria-label":"Discord"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://www.twitter.com/crown_engine",title:"Follow Crown on X"},/*#__PURE__*/index_js_default().createElement("i",{className:"fab fa-x-twitter mr-3","aria-label":"X"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://bsky.app/profile/crownengine.org",title:"Follow Crown on Bluesky"},/*#__PURE__*/index_js_default().createElement("i",{className:"fab fa-bluesky mr-3","aria-label":"Bluesky"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/company/crownengine",title:"Follow Crown on LinkedIn"},/*#__PURE__*/index_js_default().createElement("i",{className:"fab fa-linkedin mr-3","aria-label":"LinkedIn"})))),/*#__PURE__*/index_js_default().createElement("h2",{className:"mt-4 font-semibold uppercase pb-1 text-sm"},"Support Crown"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600 hover:text-indigo-700"},/*#__PURE__*/index_js_default().createElement(donate_button,null))))),/*#__PURE__*/index_js_default().createElement("div",{className:"max-w-screen-xl mx-auto flex flex-col items-center mt-4"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row mt-4 place-items-center space-x-3"},"\xA9",new Date().getFullYear()," ",data.site.siteMetadata.org_title,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"lg:mt-0 text-indigo-600 hover:text-indigo-700 ml-4",to:"/website-about"},/*#__PURE__*/index_js_default().createElement("img",{alt:"Creative Commons License",width:"80",height:"15",src:"https://i.creativecommons.org/l/by-sa/4.0/80x15.png"}))))));}
;// ./src/components/header.jsx
function AboutMenu(){const data=(0,gatsby_browser_entry.useStaticQuery)("3789038097");const menu_items=data.site.siteMetadata.menu;function menuClick(){const dropdowns=document.querySelectorAll(".navbar-menu");dropdowns.forEach(dropdown=>dropdown.classList.toggle("hidden"));}return/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("nav",{className:"flex flex-wrap items-center justify-between"},/*#__PURE__*/index_js_default().createElement("div",{className:"px-4"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"header-logo h-10 w-24 lg:w-36",to:"/"})),/*#__PURE__*/index_js_default().createElement("div",{className:"block lg:hidden px-4"},/*#__PURE__*/index_js_default().createElement("button",{className:"navbar-burger flex items-center py-2 px-4 my-2 text-indigo-500 border border-indigo-500",onClick:menuClick,"aria-label":"Menu"},/*#__PURE__*/index_js_default().createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/index_js_default().createElement("title",null,"Menu"),/*#__PURE__*/index_js_default().createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),/*#__PURE__*/index_js_default().createElement("div",{className:"navbar-menu hidden w-full lg:block lg:w-auto px-4 text-gray-900"},/*#__PURE__*/index_js_default().createElement("ul",{className:"flex flex-col lg:flex-row"},menu_items.map((item,index)=>{if(item.label==="Donate"){return/*#__PURE__*/index_js_default().createElement("li",{key:index,className:"py-2 pl-2 pr-2"},/*#__PURE__*/index_js_default().createElement(donate_button,null));}const is_external=!item.link.startsWith("/");return/*#__PURE__*/index_js_default().createElement("li",{key:index,className:"hover:text-indigo-600"},is_external?/*#__PURE__*/index_js_default().createElement("a",{className:"block py-4 pl-2 pr-2",rel:"noreferrer",target:"_blank",href:item.link},item.label):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"block py-4 pl-2 pr-2",activeClassName:"shadow-[inset_0_-4px_0_0_#4f46e5]"/* indigo-600 */,partiallyActive:true,to:item.link},item.label));})))));}
;// ./src/components/layout.jsx
function Layout({children}){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"bg-gray-100"},/*#__PURE__*/index_js_default().createElement(AboutMenu,null),/*#__PURE__*/index_js_default().createElement("main",null,children),/*#__PURE__*/index_js_default().createElement(Footer,null)));}Layout.propTypes={children:(prop_types_default()).node.isRequired};

/***/ }),

/***/ 4496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6462);
function Seo({description,lang="en",meta,title,image,children}){const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("4134726600");const metaDescription=description||site.siteMetadata.description;const metaImage=site.siteMetadata.siteUrl+(image||site.siteMetadata.image);const canonicalUrl=`${site.siteMetadata.siteUrl}${(0,_reach_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname}`;const faviconUrl=`${site.siteMetadata.siteUrl}/favicon.svg`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html",{lang:lang}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"icon",type:"image/svg+xml",href:faviconUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:image",content:metaImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:url",content:canonicalUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:site",content:site.siteMetadata.x_handle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"fediverse:creator",content:"@crownengine@mastodon.gamedev.place"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"me",href:"https://mastodon.gamedev.place/@crownengine"}),children);}Seo.propTypes={lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)};

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

/***/ 9793:
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
;// ./src/news/crown-0-59-1.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({p:"p",ul:"ul",li:"li",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown v0.59.1 is out! This is a tiny release with fixed state machine creation, improved\ncompatibility with Linux systems and better input detection on Windows."),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"📜 ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.59.0/changelog.html#v0-59-1"},"Changelog")),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"💾 ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://crownengine.org/download"},"Download")),"\n"));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_59_1 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-59-1.mdx









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
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_59_1, props));
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
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-59-1-mdx.js.map