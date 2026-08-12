"use strict";
exports.id = 257;
exports.ids = [257];
exports.modules = {

/***/ 3914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
const defaultColorClasses="text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700";const DownloadButton=({children="Download Crown",colorClassName=defaultColorClasses,className="",...props})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link,Object.assign({className:`inline-block py-2 px-8 font-semibold rounded shadow ${colorClassName} ${className}`.trim(),to:"/download"},props),children);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadButton);

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

/***/ 7858:
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
;// ./src/components/documentation-button.jsx
const defaultColorClasses="text-gray-200 hover:text-white bg-indigo-600 hover:bg-indigo-700";const DocumentationButton=({href,children="Read the Documentation",colorClassName=defaultColorClasses,className="",...props})=>{return/*#__PURE__*/index_js_default().createElement("a",Object.assign({className:`inline-block py-4 px-8 mb-2 font-semibold leading-none rounded shadow ${colorClassName} ${className}`.trim(),href:href},props),children);};/* harmony default export */ const documentation_button = (DocumentationButton);
// EXTERNAL MODULE: ./src/components/download-button.jsx
var download_button = __webpack_require__(3914);
// EXTERNAL MODULE: ./src/components/donate-button.jsx
var donate_button = __webpack_require__(9409);
;// ./src/news/crown-0-64-color-grading.png
/* harmony default export */ const crown_0_64_color_grading = ("/static/crown-0-64-color-grading-a04c403ebe37b24ddba06b3bf6940eea.png");
;// ./src/news/crown-0-64-deploy.mp4
/* harmony default export */ const crown_0_64_deploy = ("/static/crown-0-64-deploy-c33e1039f6ae5dfb47263661bea6de6d.mp4");
;// ./src/news/crown-0-64-i18n.png
/* harmony default export */ const crown_0_64_i18n = ("/static/crown-0-64-i18n-17429a3af71cd3081924de07c13d2dce.png");
;// ./src/news/crown-0-64-input-double-drag.mp4
/* harmony default export */ const crown_0_64_input_double_drag = ("/static/crown-0-64-input-double-drag-44a4da18992cba5820e0c822b64b8449.mp4");
;// ./src/news/crown-0-64-rename-move-delete.png
/* harmony default export */ const crown_0_64_rename_move_delete = ("/static/crown-0-64-rename-move-delete-a81dbab40c7ac820e8ee8d24b413b1ef.png");
;// ./src/news/crown-0-64-resource-dependencies.png
/* harmony default export */ const crown_0_64_resource_dependencies = ("/static/crown-0-64-resource-dependencies-b288dd9aebfd887b45c5ede76cd4c844.png");
;// ./src/news/crown-0-64-shadow-settings.png
/* harmony default export */ const crown_0_64_shadow_settings = ("/static/crown-0-64-shadow-settings-7f615e7084b1db8641d2874adeaac415.png");
;// ./src/news/crown-0-64-stat.mp4
/* harmony default export */ const crown_0_64_stat = ("/static/crown-0-64-stat-3dab592c4290a3a11264f0360a00b38f.mp4");
;// ./src/components/fade-in.jsx
const distanceClasses={small:{"from-top":"-translate-y-6","from-bottom":"translate-y-6","from-left":"-translate-x-6","from-right":"translate-x-6",none:""},medium:{"from-top":"-translate-y-10","from-bottom":"translate-y-10","from-left":"-translate-x-10","from-right":"translate-x-10",none:""},large:{"from-top":"-translate-y-12","from-bottom":"translate-y-12","from-left":"-translate-x-12","from-right":"translate-x-12",none:""},extra:{"from-top":"-translate-y-20","from-bottom":"translate-y-20","from-left":"-translate-x-20","from-right":"translate-x-20",none:""}};const speedClasses={fast:"duration-300",normal:"duration-500",slow:"duration-700"};function FadeIn({children,className="",direction="from-bottom",distance="large",speed="normal",delay=200,threshold=0.15,once=true}){var _distanceClasses$dist,_directionMap$directi,_speedClasses$speed;const elementRef=(0,index_js_.useRef)(null);const{0:isVisible,1:setIsVisible}=(0,index_js_.useState)(false);(0,index_js_.useEffect)(()=>{const element=elementRef.current;if(!element)return;if(!("IntersectionObserver"in window)){setIsVisible(true);return;}const observer=new IntersectionObserver(([entry])=>{setIsVisible(entry.isIntersecting);if(entry.isIntersecting&&once){observer.unobserve(element);}},{threshold});observer.observe(element);return()=>observer.disconnect();},[once,threshold]);const directionMap=(_distanceClasses$dist=distanceClasses[distance])!==null&&_distanceClasses$dist!==void 0?_distanceClasses$dist:distanceClasses.large;const hiddenDirection=(_directionMap$directi=directionMap[direction])!==null&&_directionMap$directi!==void 0?_directionMap$directi:directionMap["from-bottom"];const duration=(_speedClasses$speed=speedClasses[speed])!==null&&_speedClasses$speed!==void 0?_speedClasses$speed:speedClasses.normal;return/*#__PURE__*/index_js_default().createElement("div",{ref:elementRef,style:{transitionDelay:isVisible?`${Math.max(0,delay)}ms`:"0ms"},className:["transform-gpu transition-[opacity,transform] ease-out",duration,"motion-reduce:transform-none","motion-reduce:opacity-100","motion-reduce:transition-none",isVisible?"translate-x-0 translate-y-0 opacity-100":`${hiddenDirection} opacity-0`,className].filter(Boolean).join(" ")},children);}
;// ./src/news/crown-0-64.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*//*Video: crown-0-64-shadows.mp4
<video className="rounded-xl" autoPlay muted loop playsInline controls>
<source src={shadowsVideo} type="video/mp4" />
</video>
<span className="block text-center">The new sun-shadow controls in a large scene.</span>
*//*Video: crown-0-64-resource-management.mp4
<video className="rounded-xl" autoPlay muted loop playsInline controls>
<source src={resourceManagement} type="video/mp4" />
</video>
<span className="block text-center">Explore dependencies, reorganize resources and change a Unit's prefab without leaving the editor.</span>
*//*Video: crown-0-64-command-line-deploy.mp4
<video className="rounded-xl" autoPlay muted loop playsInline controls>
<source src={commandLineDeploy} type="video/mp4" />
</video>
<span className="block text-center">Creating, importing and deploying a Crown project from the command line.</span>
*/function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong",code:"code",a:"a"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Faster rendering and editing in large worlds, new color-grading controls, click-and-drag numeric\nfields, a more capable Project Browser, and command-line tools that make it easier to automate\nproject builds and deployments."),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-wrap gap-4 whitespace-nowrap"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null,"Download Crown 0.64"),/*#__PURE__*/index_js_default().createElement(donate_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-lime-400",style:{marginTop:0}},"Full ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Speed")," Ahead"),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Worlds containing ",/*#__PURE__*/index_js_default().createElement("strong",null,"many Units render faster"),", selected objects are cheaper to draw, and moving large groups of Units in the Level Editor is now much smoother."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The editor also handles large Unit trees and Units made of many meshes more efficiently."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The new ",/*#__PURE__*/index_js_default().createElement("strong",null,/*#__PURE__*/index_js_default().createElement("code",{className:"px-1 py-0.5 rounded bg-gray-700 text-gray-100"},"stat")," console command")," makes the results easier to inspect by displaying useful runtime performance statistics.")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full mx-auto rounded-xl transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_64_stat,type:"video/mp4"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},/*#__PURE__*/index_js_default().createElement("code",{className:"px-1 py-0.5 rounded bg-gray-700 text-gray-100"},"stat")," command showing live performance statistics."))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full max-w-md mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_64_color_grading,alt:"Color Grading component controls"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-rose-400",style:{marginTop:0}},/*#__PURE__*/index_js_default().createElement("span",{className:"bg-gradient-to-r from-rose-700 via-amber-400 to-blue-500 bg-clip-text text-transparent font-bold tracking-wide"},"Color")," the Mood")),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The new ",/*#__PURE__*/index_js_default().createElement("strong",null,"Color Grading component")," makes it easy to define the final look of a scene directly in the editor."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"It provides controls for ",/*#__PURE__*/index_js_default().createElement("strong",null,"exposure"),", ",/*#__PURE__*/index_js_default().createElement("strong",null,"contrast")," and ",/*#__PURE__*/index_js_default().createElement("strong",null,"saturation"),", plus a ",/*#__PURE__*/index_js_default().createElement("strong",null,"color filter")," for tinting the rendered image."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Whether you want a subtle shift in mood or a bold stylized palette, you can now achieve it without changing lights or materials."))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-amber-400",style:{marginTop:0}},"Made in the ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Shade"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Sun shadows have received a substantial upgrade too. Shadow ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"distance and shadow-map quality")," are now configurable, as are cascade split weight and overlap."),/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Shadow cascades now ",/*#__PURE__*/index_js_default().createElement("strong",null,"blend smoothly")," across overlaps, reducing visible transitions."))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full max-w-lg mx-auto"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_64_shadow_settings,alt:"Sun shadow render settings"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"The new sun shadow quality and cascade controls."))),"\n","\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full max-w-md mx-auto",direction:"from-bottom"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_64_deploy,type:"video/mp4"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Package creation no longer blocks the editor."))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-top"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-blue-400",style:{marginTop:0}},/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Ship")," non-Stop")),/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Deploying a project now runs ",/*#__PURE__*/index_js_default().createElement("strong",null,"asynchronously"),", keeping the editor responsive while your game is being packaged."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Android deployment has also been refined: ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"minimum and target SDK versions")," are configurable, and the deployer now only needs ",/*#__PURE__*/index_js_default().createElement("strong",null,"3 paths")," to find the required toolchain.")),/*#__PURE__*/index_js_default().createElement("span",{className:"block"},/*#__PURE__*/index_js_default().createElement(documentation_button,{colorClassName:"text-gray-950 hover:text-gray-950 bg-blue-400 hover:bg-blue-500",href:"https://docs.crownengine.org/html/v0.64.0/deploying/"},"Deploy Instructions")))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid md:grid-cols-6 gap-8 p-8 bg-gray-800 rounded-2xl shadow-lg",style:{marginTop:"25rem",marginBottom:"25rem"}},/*#__PURE__*/index_js_default().createElement("div",{className:"col-span-6 md:col-span-3 flex flex-col justify-center gap-6"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[60px] leading-tight font-light text-rose-400",style:{margin:0}},"Fuel the ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Future"))),/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-2xl text-gray-200 leading-relaxed",style:{margin:0}},"If you're enjoying Crown and want to see more, consider chipping in - it helps keep the project moving."))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-span-6 md:col-span-3 text-base"},/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-blue-400",style:{marginTop:0}},/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Drag")," et Impera")),/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Numeric entries can now be adjusted with a ",/*#__PURE__*/index_js_default().createElement("strong",null,"click and drag gesture"),", making it faster to fine-tune properties without repeatedly reaching for the keyboard."))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full mx-auto",direction:"from-right"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full mx-auto rounded-xl transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_64_input_double_drag,type:"video/mp4"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Click and drag a numeric entry to adjust its value.")))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("img",{className:"mx-auto rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",style:{width:"21rem",maxWidth:"100%"},src:crown_0_64_rename_move_delete,alt:"Rename, move and delete resource commands"}))),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-lime-400",style:{marginTop:0}},"Everything in Its ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Place"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The Project Browser can now ",/*#__PURE__*/index_js_default().createElement("strong",null,"move, rename and delete resources"),", making it possible to organize a project without leaving the editor."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"Units can also have their ",/*#__PURE__*/index_js_default().createElement("strong",null,"prefab changed")," at any time, so replacing a placeholder or switching an existing object to a different variant no longer requires rebuilding it from scratch."))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:true},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-blue-400",style:{marginTop:0}},"Follow that ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Dependency"),"!")),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The new dialog outlines dependencies between resources."),/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-bottom"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"It is a handy way to understand unfamiliar projects, track down references and check the impact of a change before reorganizing content."))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full mx-auto"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_64_resource_dependencies,alt:"Resource Dependencies dialog"})))),"\n","\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-xl shadow transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_64_i18n,alt:"Editor menus in four languages"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"The editor menus in French, English, Italian and German.")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mb-5 text-rose-400",style:{marginTop:0}},/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Ciao.")," Salut. Hallo.")),/*#__PURE__*/index_js_default().createElement(FadeIn,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-xl"},"The editor UI has been translated into ",/*#__PURE__*/index_js_default().createElement("strong",null,"Italian, French and German"),", making Crown more accessible to a wider range of developers.")))),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[42px] leading-tight font-light mt-80 mb-5 text-lime-400 text-center"},"Crown on ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Command"))),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Projects can now be ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"created and deployed from the command line"),", and resources can be imported\nthe same way. These new commands make routine operations scriptable and open the door to automated\nbuild and deployment workflows.")),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-left"},/*#__PURE__*/index_js_default().createElement(documentation_button,{colorClassName:"text-gray-950 hover:text-gray-950 bg-lime-400 hover:bg-lime-500",href:"https://docs.crownengine.org/html/v0.64.0/reference/command_line.html#editor-options"},"CLI Reference")),"\n","\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement("h2",{className:"text-[48px] leading-tight font-light mt-80 mb-5 text-amber-400"},"That's ",/*#__PURE__*/index_js_default().createElement("span",{className:"underline decoration-2 underline-offset-8 font-bold"},"not")," all Folks!")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Level editing gains a command to ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"align selected objects")," to the current camera view.")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Lua suggestions")," in the Command Bar received many fixes, and items can now be accepted by pressing\nTab.")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"The ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Mover component")," no longer pushes dynamic objects and now handles intersections with triggers\non its own, removing the need to add supplemental physics components to a Unit.")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"On Linux, the new ",/*#__PURE__*/index_js_default().createElement(_components.code,null,"--display-server")," option lets games select either the ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"X11 or Wayland\nbackend"),", with X11 remaining the default.")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,/*#__PURE__*/index_js_default().createElement(_components.strong,null,"Identical physics colliders")," inside Levels are now shared to reduce load times and improve\nruntime performance.")),"\n",/*#__PURE__*/index_js_default().createElement(FadeIn,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"This release also includes ",/*#__PURE__*/index_js_default().createElement(_components.strong,null,"more than 50 corrections")," across the Editor, Runtime, Data Compiler\nand Lua API. Check out the ",/*#__PURE__*/index_js_default().createElement(_components.a,{href:"https://docs.crownengine.org/html/v0.64.0/changelog.html#v0-64-0"},"latest\nchangelog")," for the complete list\nof improvements and fixes.")),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center mt-16 mb-32"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null,"Download Crown 0.64")));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_64 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-64.mdx









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
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_64, props));
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

/***/ })

};
;
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-64-mdx.js.map