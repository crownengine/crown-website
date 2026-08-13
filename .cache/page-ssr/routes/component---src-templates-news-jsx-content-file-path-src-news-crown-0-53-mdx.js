"use strict";
exports.id = 383;
exports.ids = [383];
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
function Seo({description,lang="en",meta,title,image,children}){const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.useStaticQuery)("2793356909");const metaDescription=description||site.siteMetadata.description;const metaImage=site.siteMetadata.siteUrl+(image||site.siteMetadata.image);const canonicalUrl=`${site.siteMetadata.siteUrl}${(0,_reach_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)().pathname}`;const faviconIcoUrl=`${site.siteMetadata.siteUrl}/favicon.ico`;const faviconPngUrl=`${site.siteMetadata.siteUrl}/favicon.png`;const faviconSvgUrl=`${site.siteMetadata.siteUrl}/favicon.svg`;const documentTitle=title.includes(site.siteMetadata.title)?title:`${title} — ${site.siteMetadata.title}`;const organization={"@context":"https://schema.org","@type":"Organization","@id":`${site.siteMetadata.siteUrl}/#organization`,name:site.siteMetadata.org_title,legalName:site.siteMetadata.org_title,url:site.siteMetadata.siteUrl,logo:`${site.siteMetadata.siteUrl}/favicon.png`,description:site.siteMetadata.org_description,email:site.siteMetadata.tcf_mail_address,taxID:site.siteMetadata.org_tax_id,sameAs:["https://github.com/crownengine","https://www.linkedin.com/company/crownengine","https://mastodon.gamedev.place/@crownengine","https://bsky.app/profile/crownengine.org"]};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html",{lang:lang}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title",null,documentTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"icon",href:faviconIcoUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"icon",type:"image/png",sizes:"96x96",href:faviconPngUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"icon",type:"image/svg+xml",href:faviconSvgUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:title",content:documentTitle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:type",content:"website"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:image",content:metaImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"og:url",content:canonicalUrl}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:description",content:metaDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:site",content:site.siteMetadata.x_handle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"twitter:title",content:documentTitle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta",{name:"fediverse:creator",content:"@crownengine@mastodon.gamedev.place"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link",{rel:"me",href:"https://mastodon.gamedev.place/@crownengine"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script",{type:"application/ld+json"},JSON.stringify(organization)),children);}Seo.propTypes={lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)};

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
function wrap(Tag,baseClasses){return function Component({className="",children,...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag,Object.assign({className:`${baseClasses} ${className}`.trim()},props),children);};}const h1=wrap("h1","text-4xl font-extrabold mt-8 mb-6");const h2=wrap("h2","text-4xl font-extrabold mt-8 mb-6");const h3=wrap("h3","text-3xl font-bold mt-6 mb-3");const h4=wrap("h4","text-2xl font-semibold mt-4 mb-2");const p=wrap("p","leading-relaxed mb-10 mt-10");const a=wrap("a","text-blue-400 underline hover:text-blue-300");const img=wrap("img","rounded-md shadow my-4");const ul=wrap("ul","list-disc pl-6 mb-4");const ol=wrap("ol","list-decimal pl-6 mb-4");const li=wrap("li","mb-1");const blockquote=wrap("blockquote","border-l-4 pl-4 italic bg-gray-800 p-2 rounded");const pre=function Pre({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre",Object.assign({className:`overflow-x-auto p-4 rounded-md mb-4 bg-gray-800 text-gray-100 ${className}`},props));};const code=function Code({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code",Object.assign({className:`px-1 py-0.5 rounded bg-gray-700 text-gray-100 text-sm ${className}`},props));};const MDXComponents={h1,h2,h3,h4,p,a,img,ul,ol,li,blockquote,pre,code};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXComponents);

/***/ }),

/***/ 6696:
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
// EXTERNAL MODULE: ./node_modules/react-icons/fa6/index.mjs + 4 modules
var fa6 = __webpack_require__(2559);
// EXTERNAL MODULE: ./src/components/clamp.jsx
var clamp = __webpack_require__(1794);
// EXTERNAL MODULE: ./src/components/donate-button.jsx
var donate_button = __webpack_require__(9409);
;// ./src/components/footer.jsx
function Footer(){const data=(0,gatsby_browser_entry.useStaticQuery)("3304111942");return/*#__PURE__*/index_js_default().createElement("footer",{className:"mt-auto bg-gray-300 px-6 py-16 text-sm lg:px-8"},/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-wrap"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Download"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/download"},"Latest Crown"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://github.com/crownengine/crown/"},"Source Code"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org/html/latest/changelog.html"},"Changelog"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/crown-license"},"License")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"About"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/about"},"Mission & Activities"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/about/credits"},"Credits"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/website-about"},"Website"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/roadmap"},"Roadmap"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/privacy-policy"},"Privacy Policy"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/cookie-policy"},"Cookie Policy")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Support"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org"},"User Manual"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://docs.crownengine.org/html/latest/hackers/contributing.html"},"Developer Manual"),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://discord.gg/invite/CeXVWCT"},"Community"))),/*#__PURE__*/index_js_default().createElement("h2",{className:"mt-4 font-semibold uppercase pb-1 text-sm"},"News"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/news"},"Latest News"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"hover:text-indigo-800",to:"/media-coverage"},"Media Coverage")))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-1/2 md:w-1/4"},/*#__PURE__*/index_js_default().createElement("h2",{className:"font-semibold uppercase pb-1 text-sm"},"Follow Crown"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row text-lg text-indigo-600"},/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://github.com/crownengine/crown/",title:"Crown Official GitHub page"},/*#__PURE__*/index_js_default().createElement(fa6/* FaGithub */.hL4,{className:"mr-3","aria-label":"GitHub"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://discord.gg/invite/CeXVWCT",title:"Join Crown on Discord"},/*#__PURE__*/index_js_default().createElement(fa6/* FaDiscord */.O4U,{className:"mr-3","aria-label":"Discord"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://www.twitter.com/crown_engine",title:"Follow Crown on X"},/*#__PURE__*/index_js_default().createElement(fa6/* FaXTwitter */.TCj,{className:"mr-3","aria-label":"X"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://www.linkedin.com/company/crownengine",title:"Follow Crown on LinkedIn"},/*#__PURE__*/index_js_default().createElement(fa6/* FaLinkedin */.QEs,{className:"mr-3","aria-label":"LinkedIn"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://mastodon.gamedev.place/@crownengine",title:"Follow Crown on Mastodon"},/*#__PURE__*/index_js_default().createElement(fa6/* FaMastodon */.hHC,{className:"mr-3","aria-label":"Mastodon"})),/*#__PURE__*/index_js_default().createElement("a",{className:"hover:text-indigo-800",rel:"noreferrer",target:"_blank",href:"https://bsky.app/profile/crownengine.org",title:"Follow Crown on Bluesky"},/*#__PURE__*/index_js_default().createElement(fa6/* FaBluesky */.fr_,{className:"mr-3","aria-label":"Bluesky"})))),/*#__PURE__*/index_js_default().createElement("h2",{className:"mt-4 font-semibold uppercase pb-1 text-sm"},"Support Crown"),/*#__PURE__*/index_js_default().createElement("nav",{className:"mb-2"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col space-y-2 lg:mt-0 text-indigo-600 hover:text-indigo-700"},/*#__PURE__*/index_js_default().createElement(donate_button/* default */.A,null))))),/*#__PURE__*/index_js_default().createElement("div",{className:"mx-auto mt-4 flex max-w-screen-xl flex-col items-center"},/*#__PURE__*/index_js_default().createElement("div",{className:"mt-4 flex flex-wrap place-items-center justify-center gap-x-3 gap-y-2"},/*#__PURE__*/index_js_default().createElement("span",null,"\xA9",new Date().getFullYear()," ",data.site.siteMetadata.org_title),/*#__PURE__*/index_js_default().createElement("span",{"aria-hidden":"true"},"\xB7"),/*#__PURE__*/index_js_default().createElement("span",null,"Tax Code/VAT No. ",data.site.siteMetadata.org_tax_id),/*#__PURE__*/index_js_default().createElement("span",{"aria-hidden":"true"},"\xB7"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"text-indigo-600 hover:text-indigo-700",to:"/website-about"},"Website credits and license")))));}
;// ./src/components/header.jsx
function Header(){const{0:isOpen,1:setIsOpen}=(0,index_js_.useState)(false);const data=(0,gatsby_browser_entry.useStaticQuery)("3789038097");const menu_items=data.site.siteMetadata.menu;return/*#__PURE__*/index_js_default().createElement(clamp/* default */.A,null,/*#__PURE__*/index_js_default().createElement("nav",{className:"flex flex-wrap items-center justify-between","aria-label":"Primary navigation"},/*#__PURE__*/index_js_default().createElement("div",{className:"px-4"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"header-logo h-10 w-24 lg:w-36",to:"/","aria-label":"Crown Engine home"})),/*#__PURE__*/index_js_default().createElement("div",{className:"block lg:hidden px-4"},/*#__PURE__*/index_js_default().createElement("button",{className:"navbar-burger flex items-center py-2 px-4 my-2 text-indigo-500 border border-indigo-500",onClick:()=>setIsOpen(open=>!open),"aria-label":"Menu","aria-controls":"primary-navigation","aria-expanded":isOpen},/*#__PURE__*/index_js_default().createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},/*#__PURE__*/index_js_default().createElement("title",null,"Menu"),/*#__PURE__*/index_js_default().createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),/*#__PURE__*/index_js_default().createElement("div",{id:"primary-navigation",className:`${isOpen?"block":"hidden"} w-full lg:block lg:w-auto px-4 text-gray-900`},/*#__PURE__*/index_js_default().createElement("ul",{className:"flex flex-col lg:flex-row"},menu_items.map((item,index)=>{if(item.label==="Donate"){return/*#__PURE__*/index_js_default().createElement("li",{key:index,className:"py-2 pl-2 pr-2"},/*#__PURE__*/index_js_default().createElement(donate_button/* default */.A,null));}const is_external=!item.link.startsWith("/");return/*#__PURE__*/index_js_default().createElement("li",{key:index,className:"hover:text-indigo-600"},is_external?/*#__PURE__*/index_js_default().createElement("a",{className:"block py-4 pl-2 pr-2",rel:"noreferrer",target:"_blank",href:item.link},item.label):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"block py-4 pl-2 pr-2",activeClassName:"shadow-[inset_0_-4px_0_0_#4f46e5]"/* indigo-600 */,partiallyActive:true,to:item.link,onClick:()=>setIsOpen(false)},item.label));})))));}
;// ./src/components/layout.jsx
function Layout({children}){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("div",{className:"bg-gray-100"},/*#__PURE__*/index_js_default().createElement(Header,null),/*#__PURE__*/index_js_default().createElement("main",null,children),/*#__PURE__*/index_js_default().createElement(Footer,null)));}Layout.propTypes={children:(prop_types_default()).node.isRequired};

/***/ }),

/***/ 8558:
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
;// ./src/news/crown-0-53.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({p:"p",ul:"ul",li:"li",a:"a",span:"span"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown 0.53 is out with a new API for 3D GUIs, conditional render states, refined Sprite and Font\nimporters, thumbnails in the Project Tree and many Runtime fixes:"),"\n",/*#__PURE__*/index_js_default().createElement(_components.ul,null,"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"📜 ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.53.0/changelog.html#nov-2024"},"Changelog")),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"💾 ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://crownengine.org/download"},"Download")),"\n",/*#__PURE__*/index_js_default().createElement(_components.li,null,"❤️ ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://crownengine.org/fund"},"Donate")),"\n"),"\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/5276ec97083bc5030de7d4587c52c4d7/5f376/crown-0-53-gui.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 55.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACTUlEQVR42j1R227TQBBd0YamF7X1etdrO/EliWM7N6eNqhaQCGloqaAQNVBVgiLUqg+8gqiQ+A5e4GsPM7bKw8ie2ZlzzpwRQRAgTVN0u13keY4kSVAUBeI4hmMZeDsO6qs3WFn5Acsq4DgSWhvY2oH6HwaOMVR3IMIwRKfTged5JWCWZYiiCK4y2J1Y2HpXw2p+ASF+4/k0x+HhBjztotdS6IY20lij3VBw5C4CnwBZCQO5rlsq5QjCJpomwvpyC+KPQO1WYrs2w+3dNpbLOvotDwe9AIvjMd7Ph0jVOtq7j6muIXhl3/dh2zZ6pG40meBj0sG9H+HVgYL4/ggbH+rwSIHrKxij8WTQwPGzQ7w+eYmrkwMcdT0MmhKtwIVoNPxSnVIKMa2viOBycxN/hcC3tTVY5I0xDnlXeaSUxvn0GGezGeZPj5DINcyLEFE7IR8JkBt8X9MADWkFSd/+joVPBLaor8NRDrSqwDSD2hKLF1Pc//yFrzef8WUxxd3lnGZt6qGVez2J0Uii3SaTuzbCUCEkw03ooNVRaDYrQp8M9zynBCyyFOdv3+DsZIbrqwtcL0+hqM5biPHYQr8v6bo2gkDTgWyMCwujocRgIMt8OLTAfUzIPWlmEQF5aqr8gdR16coPYFkm0WhosOKCAUn13p5VBtf4nWv8liSqVMMAgwEJomDiPJcQzMpDk0k1yDkfgQcfwJiUa0NSvb9fqU1Tu7SJo0PWsKgoUpWH7Bv7wwz8zwfiRl6ZQZiE31hFHFdeMwCDMxiTsce8wT+PmzN0dbhrCQAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/5276ec97083bc5030de7d4587c52c4d7/87421/crown-0-53-gui.webp 300w,\n/static/5276ec97083bc5030de7d4587c52c4d7/1e606/crown-0-53-gui.webp 600w,\n/static/5276ec97083bc5030de7d4587c52c4d7/16816/crown-0-53-gui.webp 1200w,\n/static/5276ec97083bc5030de7d4587c52c4d7/83400/crown-0-53-gui.webp 1279w\"\n              sizes=\"(max-width: 1200px) 100vw, 1200px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/5276ec97083bc5030de7d4587c52c4d7/1b5bc/crown-0-53-gui.png 300w,\n/static/5276ec97083bc5030de7d4587c52c4d7/d8ea8/crown-0-53-gui.png 600w,\n/static/5276ec97083bc5030de7d4587c52c4d7/16d68/crown-0-53-gui.png 1200w,\n/static/5276ec97083bc5030de7d4587c52c4d7/5f376/crown-0-53-gui.png 1279w\"\n            sizes=\"(max-width: 1200px) 100vw, 1200px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/5276ec97083bc5030de7d4587c52c4d7/16d68/crown-0-53-gui.png\"\n            alt=\"gui\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}),"\n","\n","\n",/*#__PURE__*/index_js_default().createElement(_components.span,{dangerouslySetInnerHTML:{__html:"<span\n      class=\"gatsby-resp-image-wrapper\"\n      style=\"position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1134px; \"\n    >\n      <a\n    class=\"gatsby-resp-image-link\"\n    href=\"/static/84d33ae750aa716df3b300dfcd0f17aa/4c753/crown-0-53-sprite.png\"\n    style=\"display: block\"\n    target=\"_blank\"\n    rel=\"noopener\"\n  >\n    <span\n    class=\"gatsby-resp-image-background-image\"\n    style=\"padding-bottom: 63%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC10lEQVR42nWT3UuTYRjGPRVxxhwKk9EU5z59v/bu+8tlao6Oo5OoEyMoyKiD5qYQ2KSMDuov6APCD0qhOSELV0tC25aW1jZt+Rd00vnV/TxzIwgPLp4PeH/vdd33czdZHQKsVgvMZvOx6u3thclkQigUgj/gh9vjgaIoNclKY+90OtHU0dmJlpYWNDc3HyudTge9Xo9AMIhoJIKIzweFPmYw2SvT/h+gwWDA+Pg4pqamkEgkSBOYmJg42ieQTCYhyzI6OjqgulREQ2FEVD8kRYaTgP3hfihqzSkHGo1G5HI5VKtVlMplVA5+onxQRaVSQZnO+/v7iMVi0Gq1UCnqILk7bbPBLokQqVzmITNERYTQL0AURQY8iXQ6jWKxiI8EXl+aw/vFp/iwnsXm1ha2SENDQ2jXtsPr9WJw4BTC3gB3K0syJJ8EmdyyFKqq1hyuZjL4treHtZU0fm/M48/GC7x9NY/89g4K+TxGRka4w3AoiDOxs1B9IYoocQiD8pXE6siBmcwq9na/Ir30Esszt7Cz8BjZzDKK+U0UCgUMDw9zYIiAAeqyw26DjWKLAsVk0ZkoLoM2gN8JuPj8CZI3b+P+zEO8W1vDdv4T8oViA+ij+rHYPT09MHZ3QyAIOzsVJ18bkVkNd7YLeJNZwXR8EmOXriG9uoYvnzd4HetAt9sFH30okBM/wYJWKxy0WgYsEGWx3hQjstksDg9/Ifd6AZNjY7hx8SrmHqVQKe3iR6mE0dFRDgwEAjyyy+tB1OVC1G6HQ5JgGawBeWT2DuPxOGZnH+Bu/DKunL+DC+eeIXn9Iu6lppFKzcBFHWXv0O/3Ux3DcKpuCFQ/QZS4K1GoueNN6aRJaWtrQ2trKzQnNNAbHDD2eKDVtdOdBhqNhsO6urrg8bgRjkTh9kfgUp30I9d/aurrY/Nq4errs8BiMdFsm/iezS9TfZa5K9ZZofaI65IotnB09xdj5/a7qAWYKAAAAABJRU5ErkJggg=='); background-size: cover; display: block;\"\n  ></span>\n  <picture>\n          <source\n              srcset=\"/static/84d33ae750aa716df3b300dfcd0f17aa/87421/crown-0-53-sprite.webp 300w,\n/static/84d33ae750aa716df3b300dfcd0f17aa/1e606/crown-0-53-sprite.webp 600w,\n/static/84d33ae750aa716df3b300dfcd0f17aa/f1d7e/crown-0-53-sprite.webp 1134w\"\n              sizes=\"(max-width: 1134px) 100vw, 1134px\"\n              type=\"image/webp\"\n            />\n          <source\n            srcset=\"/static/84d33ae750aa716df3b300dfcd0f17aa/1b5bc/crown-0-53-sprite.png 300w,\n/static/84d33ae750aa716df3b300dfcd0f17aa/d8ea8/crown-0-53-sprite.png 600w,\n/static/84d33ae750aa716df3b300dfcd0f17aa/4c753/crown-0-53-sprite.png 1134w\"\n            sizes=\"(max-width: 1134px) 100vw, 1134px\"\n            type=\"image/png\"\n          />\n          <img\n            class=\"gatsby-resp-image-image\"\n            src=\"/static/84d33ae750aa716df3b300dfcd0f17aa/4c753/crown-0-53-sprite.png\"\n            alt=\"sprite\"\n            title=\"\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            style=\"width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;\"\n          />\n        </picture>\n  </a>\n    </span>"}}));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_53 = (MDXContent);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./src/components/layout.jsx + 2 modules
var layout = __webpack_require__(6696);
// EXTERNAL MODULE: ./src/components/clamp.jsx
var clamp = __webpack_require__(1794);
// EXTERNAL MODULE: ./src/components/seo.jsx
var seo = __webpack_require__(4496);
// EXTERNAL MODULE: ./src/components/mdx.jsx
var mdx = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-53.mdx









function ShowcaseParagraph({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("p", Object.assign({
    className: `leading-relaxed mb-5 text-xl ${className}`.trim()
  }, props));
}
function NewsHeading({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("h2", Object.assign({
    className: `text-[42px] font-extrabold mt-8 mb-6 ${className}`.trim()
  }, props));
}
function NewsParagraph({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("p", Object.assign({
    className: `leading-relaxed mb-10 mt-10 text-xl ${className}`.trim()
  }, props));
}
const NewsMDXComponents = {
  ...mdx/* default */.Ay,
  h2: NewsHeading,
  p: NewsParagraph
};
const ShowcaseMDXComponents = {
  ...mdx/* default */.Ay,
  p: ShowcaseParagraph
};
function NewsTemplate({
  data: {
    mdx
  },
  children,
  pageContext
}) {
  const isShowcase = mdx.frontmatter.showcase === true;
  const prevNews = pageContext.prev ? {
    url: `${pageContext.prev.frontmatter.slug}`,
    title: pageContext.prev.frontmatter.title
  } : null;
  const nextNews = pageContext.next ? {
    url: `${pageContext.next.frontmatter.slug}`,
    title: pageContext.next.frontmatter.title
  } : null;
  return /*#__PURE__*/index_js_default().createElement(layout/* default */.A, null, /*#__PURE__*/index_js_default().createElement("div", {
    className: "bg-gray-950"
  }, /*#__PURE__*/index_js_default().createElement(clamp/* default */.A, null, /*#__PURE__*/index_js_default().createElement("section", {
    className: isShowcase ? "px-4 pt-32 text-left text-gray-200" : "px-4 pt-16 text-left text-gray-200"
  }, /*#__PURE__*/index_js_default().createElement("span", {
    className: "text-1xl text-gray-400 mb-4"
  }, mdx.frontmatter.date), /*#__PURE__*/index_js_default().createElement("h1", {
    className: isShowcase ? "text-8xl font-extrabold mb-4" : "text-8xl font-bold mb-12"
  }, mdx.frontmatter.title)), /*#__PURE__*/index_js_default().createElement("section", {
    className: isShowcase ? "px-4 text-left mb-8 text-lg text-gray-200" : "px-4 text-left mb-8 text-gray-200"
  }, /*#__PURE__*/index_js_default().createElement(lib/* MDXProvider */.xA, {
    components: isShowcase ? ShowcaseMDXComponents : NewsMDXComponents
  }, children)), /*#__PURE__*/index_js_default().createElement("section", {
    className: "flex flex-col md:flex-row px-4 text-gray-200"
  }, prevNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "flex flex-col md:flex-row w-full inline-block py-4 px-4 font-semibold leading-none text-gray-400 hover:text-white hover:bg-indigo-700 rounded",
    to: prevNews.url
  }, "< ", prevNews.title), nextNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "flex flex-col md:flex-row w-full text-end justify-end inline-block py-4 px-4 font-semibold leading-none text-gray-400 hover:text-white hover:bg-indigo-700 rounded",
    to: nextNews.url
  }, nextNews.title, " >"))), /*#__PURE__*/index_js_default().createElement("section", {
    className: "py-32"
  })));
}
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_53, props));
}
const query = "832893926";
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

/***/ 9409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2559);
const DonateButton=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link,{className:" inline-block group relative isolate block overflow-hidden rounded bg-indigo-600 px-4 py-2 text-white shadow transition-colors duration-300 hover:bg-indigo-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 ",to:"/fund"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{className:" inline-block pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-0 ease-out group-hover:translate-x-full group-hover:duration-700 group-focus-visible:translate-x-full group-focus-visible:duration-700 motion-reduce:transition-none "}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_2__/* .FaHeart */ .Mbv,{className:"mr-2 inline","aria-hidden":"true"}),"Donate");};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonateButton);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-53-mdx.js.map