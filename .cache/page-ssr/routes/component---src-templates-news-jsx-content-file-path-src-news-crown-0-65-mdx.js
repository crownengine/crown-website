"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

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

/***/ 4653:
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
;// ./src/images/icons/before-after.svg
/* harmony default export */ const before_after = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMTBtbSIKICAgaGVpZ2h0PSI2bW0iCiAgIHZpZXdCb3g9IjAgMCAxMCA2IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMxIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0yKSI+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MC4wMjE7cGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIKICAgICAgIGQ9Ik0gNiwyIFYgOCBMIDEwLDUgWiIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDowLjAyMTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgZD0iTSAzLjk5OTk5OTksMiBWIDggTCAwLDUgWiIKICAgICAgIGlkPSJwYXRoMyIgLz4KICA8L2c+Cjwvc3ZnPgo=");
;// ./src/components/before-after.jsx
function BeforeAfter({beforeSrc,afterSrc,beforeAlt,afterAlt,beforeLabel="Before",afterLabel="After",ariaLabel="Compare before and after images",initialPosition=50,className=""}){const{0:position,1:setPosition}=(0,index_js_.useState)(Math.min(100,Math.max(0,initialPosition)));const{0:isFocused,1:setIsFocused}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",{className:`relative isolate overflow-hidden rounded-widget select-none ${className}`.trim()},/*#__PURE__*/index_js_default().createElement("img",{className:"block h-auto w-full",src:afterSrc,alt:afterAlt,draggable:false}),/*#__PURE__*/index_js_default().createElement("span",{className:"pointer-events-none absolute right-3 top-3 rounded-widget bg-dark/80 px-2 py-1 text-small font-semibold text-inverse"},afterLabel),/*#__PURE__*/index_js_default().createElement("div",{className:"absolute inset-0 overflow-hidden",style:{clipPath:`inset(0 ${100-position}% 0 0)`}},/*#__PURE__*/index_js_default().createElement("img",{className:"block h-full w-full object-cover",src:beforeSrc,alt:beforeAlt,draggable:false}),/*#__PURE__*/index_js_default().createElement("span",{className:"pointer-events-none absolute left-3 top-3 rounded-widget bg-dark/80 px-2 py-1 text-small font-semibold text-inverse"},beforeLabel)),/*#__PURE__*/index_js_default().createElement("input",{className:"absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0",type:"range",min:"0",max:"100",value:position,"aria-label":ariaLabel,"aria-valuetext":`${position}% before`,onChange:event=>setPosition(Number(event.target.value)),onFocus:()=>setIsFocused(true),onBlur:()=>setIsFocused(false)}),/*#__PURE__*/index_js_default().createElement("div",{className:"pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-inverse",style:{left:`${position}%`,transform:"translateX(-50%)"},"aria-hidden":"true"},/*#__PURE__*/index_js_default().createElement("span",{className:`absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-inverse bg-dark shadow-lg ${isFocused?"ring-4 ring-brand":""}`.trim()},/*#__PURE__*/index_js_default().createElement("img",{className:"h-4 w-auto",src:before_after,alt:""}))));}
// EXTERNAL MODULE: ./src/components/download-button.jsx
var download_button = __webpack_require__(3914);
// EXTERNAL MODULE: ./src/components/donate-button.jsx
var donate_button = __webpack_require__(9409);
;// ./src/news/crown-0-65-editor-layout-optimization.gif
/* harmony default export */ const crown_0_65_editor_layout_optimization = ("/static/crown-0-65-editor-layout-optimization-92280cb56dfc5553365755eb752f884e.gif");
;// ./src/news/crown-0-65-light-cookie.mp4
/* harmony default export */ const crown_0_65_light_cookie = ("/static/crown-0-65-light-cookie-4b93ac310ea7722188db2c031c76caec.mp4");
;// ./src/news/crown-0-65-multi-material.mp4
/* harmony default export */ const crown_0_65_multi_material = ("/static/crown-0-65-multi-material-ed943f342461b8e9c5252da936fe90a3.mp4");
;// ./src/news/crown-0-65-numeric-entries.mp4
/* harmony default export */ const crown_0_65_numeric_entries = ("/static/crown-0-65-numeric-entries-eb1c8c2d5fdbb7eea91a8c6cb011560d.mp4");
;// ./src/news/crown-0-65-compiler.mp4
/* harmony default export */ const crown_0_65_compiler = ("/static/crown-0-65-compiler-800d624e92a571fd09fc7791b7ac4078.mp4");
;// ./src/news/crown-0-65-project-brower-filter.png
/* harmony default export */ const crown_0_65_project_brower_filter = ("/static/crown-0-65-project-brower-filter-73ee097c52ee5eb3144c96964c0d1f51.png");
;// ./src/news/crown-0-65-resource-chooser.mp4
/* harmony default export */ const crown_0_65_resource_chooser = ("/static/crown-0-65-resource-chooser-d8cb3e15662c5da61cd0e70c37742ab4.mp4");
;// ./src/news/crown-0-65-shadow-after.png
/* harmony default export */ const crown_0_65_shadow_after = ("/static/crown-0-65-shadow-after-2daeb07ad574ce51ac4d06f22f271ad3.png");
;// ./src/news/crown-0-65-shadow-before.png
/* harmony default export */ const crown_0_65_shadow_before = ("/static/crown-0-65-shadow-before-c257404ebe0dca960e55490dc673b924.png");
;// ./src/news/crown-0-65-triplanar.mp4
/* harmony default export */ const crown_0_65_triplanar = ("/static/crown-0-65-triplanar-1951912b58bb8946047b02c4c0862413.mp4");
;// ./src/news/crown-0-65-unit-editor-collider.mp4
/* harmony default export */ const crown_0_65_unit_editor_collider = ("/static/crown-0-65-unit-editor-collider-a17478028ec6b713d4b10afdce1b1c39.mp4");
// EXTERNAL MODULE: ./src/components/fade-in.jsx
var fade_in = __webpack_require__(8649);
;// ./src/news/crown-0-65.mdx
/*@jsxRuntime classic @jsx React.createElement @jsxFrag React.Fragment*/function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib/* useMDXComponents */.RP)(),props.components);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(_components.p,null,"Crown 0.65 expands rendering and scene-import capabilities while improving editor usability and\nperformance on large projects. Materials and lighting are more flexible, resources are easier to\nfind and data compilation makes better use of available hardware."),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-wrap gap-4 whitespace-nowrap"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null,"Download Crown 0.65"),/*#__PURE__*/index_js_default().createElement(donate_button/* default */.A)),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"news-starry"},/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-lime",style:{marginTop:0}},"A Material ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Difference")),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Meshes can now use ",/*#__PURE__*/index_js_default().createElement("strong",null,"multiple material slots"),"."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The existing scene importers have been updated to fully support them."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The scene-import pipeline also gains a new format: Crown can now import ",/*#__PURE__*/index_js_default().createElement("strong",null,"glTF 2.0 scenes")," in both text and binary form.")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("video",{className:"w-full mx-auto rounded-widget",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_multi_material,type:"video/mp4"})))),/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[3fr_1fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("video",{className:"news-video-radial-blend w-full rounded-widget",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_triplanar,type:"video/mp4"})))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-blue",style:{marginTop:0}},"Map It ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Your Way"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The mesh shader now supports ",/*#__PURE__*/index_js_default().createElement("strong",null,"world-space and local-space triplanar mapping"),"."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Use ",/*#__PURE__*/index_js_default().createElement("code",{className:"inline-block rounded-widget border border-brand-border bg-brand-surface px-2 py-0.5 font-mono text-small font-semibold tracking-wide text-brand-light"},"+TRIPLANAR")," for textures that stay fixed in the world. Add ",/*#__PURE__*/index_js_default().createElement("code",{className:"inline-block rounded-widget border border-brand-border bg-brand-surface px-2 py-0.5 font-mono text-small font-semibold tracking-wide text-brand-light"},"+TRIPLANAR_LOCAL")," too when the texture should move with the object."))),/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-amber",style:{marginTop:0}},"Out of the ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Shadows"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Local lights make better use of their shadow atlas, allocating tiles more effectively for ",/*#__PURE__*/index_js_default().createElement("strong",null,"much higher shadow resolution"),"."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"A new configurable ",/*#__PURE__*/index_js_default().createElement("strong",null,"normal-offset bias")," also helps improve overall shadow-mapping quality.")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-right"},/*#__PURE__*/index_js_default().createElement(BeforeAfter,{beforeSrc:crown_0_65_shadow_before,afterSrc:crown_0_65_shadow_after,beforeAlt:"Local light shadows before improved atlas tile allocation",afterAlt:"Local light shadows after improved atlas tile allocation",beforeLabel:"0.64",afterLabel:"0.65",ariaLabel:"Compare local light shadow quality before and after the improvements",className:"w-full"})))),/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full max-w-lg mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_light_cookie,type:"video/mp4"})))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-blue",style:{marginTop:0}},"Come in, Take a ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Cookie"))),/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"All light types can now project a ",/*#__PURE__*/index_js_default().createElement("strong",null,"cookie texture"),", with scale and offset controls for adjusting how its pattern falls across the scene.")))),/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-lime",style:{marginTop:0}},"Collision ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Vision"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The Unit Editor can now visualize an actor's ",/*#__PURE__*/index_js_default().createElement("strong",null,"collision shape")," directly in its viewport.")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-right"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_unit_editor_collider,type:"video/mp4"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Editing a box collider in the Unit Editor."))))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"widget news-donation-glow grid md:grid-cols-6 gap-8 p-8",style:{marginTop:"25rem",marginBottom:"25rem"}},/*#__PURE__*/index_js_default().createElement("div",{className:"col-span-6 md:col-span-3 flex flex-col justify-center gap-6"},/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal editorial-rose",style:{margin:0}},"Want to ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Help?"))),/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("p",{className:"text-lead text-inverse leading-relaxed",style:{margin:0}},"Crown exists because contributors spend real time designing features, writing code, testing changes and fixing bugs. Donations help support the people doing that work."))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-span-6 md:col-span-3 text-body"},/*#__PURE__*/index_js_default().createElement(donation_box/* default */.A,{className:"bg-panel"}))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[3fr_1fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_65_editor_layout_optimization,alt:"Comparison of the original and more compact editor layouts"}))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-lime",style:{marginTop:0}},"Room to ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Work"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The editor now makes better use of the available space by ",/*#__PURE__*/index_js_default().createElement("strong",null,"making the menu bar more compact")," and packing Inspector properties more efficiently."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Property widgets adapt better as panels are resized, while tighter spacing in the Project Browser allows more content to fit on screen."))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-rose",style:{marginTop:0}},/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Choose")," Wisely")),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The Resource Chooser has been redesigned with ",/*#__PURE__*/index_js_default().createElement("strong",null,"support for thumbnails")," and ",/*#__PURE__*/index_js_default().createElement("strong",null,"two view modes"),", making assets much easier to find."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Opening a Level now uses the new chooser too, avoiding cumbersome navigation in ordinary file pickers.")),/*#__PURE__*/index_js_default().createElement("div",{className:"w-full md:w-1/2"},/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full max-w-lg mx-auto",direction:"from-right"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_resource_chooser,type:"video/mp4"}))))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[2fr_1fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full mx-auto rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_numeric_entries,type:"video/mp4"})),/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center"},"Model by CharlieCatling."))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-blue",style:{marginTop:0}},"Fine by ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Design"))),/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Numeric entries gain dedicated ",/*#__PURE__*/index_js_default().createElement("strong",null,"snapping and precision modes.")),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Hold ",/*#__PURE__*/index_js_default().createElement("strong",null,"Ctrl")," while dragging to snap the value, or hold ",/*#__PURE__*/index_js_default().createElement("strong",null,"Shift")," for finer adjustments."),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Editing also feels more deliberate thanks to clearer visual states, predictable Escape-key behavior and the removal of unwanted undo steps.")))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-lime",style:{marginTop:0}},"Just Your ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Type"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The Project Browser can now ",/*#__PURE__*/index_js_default().createElement("strong",null,"filter resources by type"),"."),/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-left"},/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"Searching is also ",/*#__PURE__*/index_js_default().createElement("strong",null,"much faster"),", keeping the browser responsive in large projects with many resources and thumbnails."))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full max-w-sm mx-auto",direction:"from-right"},/*#__PURE__*/index_js_default().createElement("img",{className:"w-full rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",src:crown_0_65_project_brower_filter,alt:"Project Browser menu for filtering resources by type"})))),"\n",/*#__PURE__*/index_js_default().createElement("div",{className:"grid grid-cols-1 md:grid-cols-[3fr_1fr] items-start gap-8 mt-80"},/*#__PURE__*/index_js_default().createElement("div",{className:"self-center"},/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{className:"w-full mx-auto",direction:"from-left"},/*#__PURE__*/index_js_default().createElement("video",{className:"w-full mx-auto rounded-widget transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02] motion-reduce:transform-none",autoPlay:true,muted:true,loop:true,playsInline:true},/*#__PURE__*/index_js_default().createElement("source",{src:crown_0_65_compiler,type:"video/mp4"})))),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,{direction:"from-right"},/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mb-5 editorial-amber",style:{marginTop:0}},"Firing on All ",/*#__PURE__*/index_js_default().createElement("span",{className:"font-bold"},"Cores"))),/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mb-5 text-lead"},"The Data Compiler now builds resources ",/*#__PURE__*/index_js_default().createElement("strong",null,"in parallel"),", shortening the wait between making a change and seeing it live."))),"\n",/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,null,/*#__PURE__*/index_js_default().createElement("h2",{className:"text-title leading-tight font-normal mt-80 mb-5 editorial-rose"},"But Wait, There's ",/*#__PURE__*/index_js_default().createElement("strong",null,"More"))),"\n",/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,null,/*#__PURE__*/index_js_default().createElement("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 list-disc pl-6 text-lead leading-relaxed"},/*#__PURE__*/index_js_default().createElement("li",null,"Crown can now play ",/*#__PURE__*/index_js_default().createElement("strong",null,"MP3 audio files"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"The Projects panel can create ",/*#__PURE__*/index_js_default().createElement("strong",null,"temporary projects"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"A new ",/*#__PURE__*/index_js_default().createElement("strong",null,"Vignette")," post-processing effect is now available."),/*#__PURE__*/index_js_default().createElement("li",null,"Animated meshes now use ",/*#__PURE__*/index_js_default().createElement("strong",null,"correct precomputed bounds"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"An automatic update check makes new Crown releases easier to discover."),/*#__PURE__*/index_js_default().createElement("li",null,"Files can now be imported directly from the ",/*#__PURE__*/index_js_default().createElement("strong",null,"Project Browser"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"The Project Browser offers better keyboard workflows."),/*#__PURE__*/index_js_default().createElement("li",null,"Identical mesh geometries are automatically ",/*#__PURE__*/index_js_default().createElement("strong",null,"deduplicated")," at compile time."),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("strong",null,"Packages")," can be created from the Project Browser."),/*#__PURE__*/index_js_default().createElement("li",null,"Imported models now receive a ",/*#__PURE__*/index_js_default().createElement("strong",null,"default animation"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"Objects in the Level Editor can be moved to the camera view with ",/*#__PURE__*/index_js_default().createElement("strong",null,"Ctrl+Alt+F"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"Large scenes now re-import faster."),/*#__PURE__*/index_js_default().createElement("li",null,"Opening and closing the Unit Editor is ",/*#__PURE__*/index_js_default().createElement("strong",null,"faster")," when working with large units."),/*#__PURE__*/index_js_default().createElement("li",null,"Games can now switch to ",/*#__PURE__*/index_js_default().createElement("strong",null,"full-screen mode on Windows and HTML5"),"."),/*#__PURE__*/index_js_default().createElement("li",null,"Lua scripts can now create colliders at runtime."),/*#__PURE__*/index_js_default().createElement("li",null,"Project lists can now be filtered."))),"\n",/*#__PURE__*/index_js_default().createElement(fade_in/* default */.A,null,/*#__PURE__*/index_js_default().createElement("p",{className:"leading-relaxed mt-8 text-lead"},"This release also includes ",/*#__PURE__*/index_js_default().createElement("strong",null,"69 fixes")," across the Editor, Runtime, Data Compiler and Lua API. Check out the ",/*#__PURE__*/index_js_default().createElement("a",{className:"text-brand-light underline hover:text-inverse",href:"https://docs.crownengine.org/html/v0.65.0/changelog.html#v0-65-0"},"latest changelog")," for the complete list of improvements and fixes.")),"\n",/*#__PURE__*/index_js_default().createElement("span",{className:"block text-center mt-16 mb-32"},/*#__PURE__*/index_js_default().createElement(download_button/* default */.A,null,"Download Crown 0.65")));}function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib/* useMDXComponents */.RP)(),props.components);return MDXLayout?/*#__PURE__*/index_js_default().createElement(MDXLayout,props,/*#__PURE__*/index_js_default().createElement(_createMdxContent,props)):_createMdxContent(props);}/* harmony default export */ const crown_0_65 = (MDXContent);
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
;// ./src/templates/news.jsx?__contentFilePath=/home/runner/work/crown-website/crown-website/src/news/crown-0-65.mdx









function ShowcaseParagraph({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("p", Object.assign({
    className: `leading-relaxed mb-5 text-lead ${className}`.trim()
  }, props));
}
function NewsHeading({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("h2", Object.assign({
    className: `text-title font-bold mt-8 mb-6 ${className}`.trim()
  }, props));
}
function NewsParagraph({
  className = "",
  ...props
}) {
  return /*#__PURE__*/index_js_default().createElement("p", Object.assign({
    className: `leading-relaxed mb-10 mt-10 text-lead ${className}`.trim()
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
  var _mdx$frontmatter$imag, _mdx$frontmatter$imag2;
  const isShowcase = mdx.frontmatter.showcase === true;
  const titleImage = mdx.frontmatter.title_image === true ? (0,gatsby_image_module/* getImage */.Qp)((_mdx$frontmatter$imag = mdx.frontmatter.image) === null || _mdx$frontmatter$imag === void 0 ? void 0 : (_mdx$frontmatter$imag2 = _mdx$frontmatter$imag.childImageSharp) === null || _mdx$frontmatter$imag2 === void 0 ? void 0 : _mdx$frontmatter$imag2.gatsbyImageData) : null;
  const prevNews = pageContext.prev ? {
    url: `${pageContext.prev.frontmatter.slug}`,
    title: pageContext.prev.frontmatter.title
  } : null;
  const nextNews = pageContext.next ? {
    url: `${pageContext.next.frontmatter.slug}`,
    title: pageContext.next.frontmatter.title
  } : null;
  return /*#__PURE__*/index_js_default().createElement(layout/* default */.A, null, /*#__PURE__*/index_js_default().createElement("div", {
    className: "bg-deepest"
  }, /*#__PURE__*/index_js_default().createElement(clamp/* default */.A, null, /*#__PURE__*/index_js_default().createElement("section", {
    className: titleImage ? "relative isolate flex min-h-[28rem] flex-col justify-end px-4 pb-12 pt-32 text-left text-inverse" : isShowcase ? "px-4 pt-32 text-left text-inverse" : "px-4 pt-16 text-left text-inverse"
  }, titleImage && /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.mV, {
    image: titleImage,
    alt: "",
    className: "!absolute inset-y-0 left-1/2 -z-20 h-full w-screen -translate-x-1/2"
  }), /*#__PURE__*/index_js_default().createElement("div", {
    className: "absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2 bg-gradient-to-t from-deepest via-deepest/30 to-deepest/50"
  })), /*#__PURE__*/index_js_default().createElement("span", {
    className: "mb-4 text-small text-muted"
  }, mdx.frontmatter.date), /*#__PURE__*/index_js_default().createElement("h1", {
    className: titleImage ? "text-display font-bold" : isShowcase ? "text-display font-bold mb-4" : "text-display font-bold mb-12"
  }, mdx.frontmatter.title)), /*#__PURE__*/index_js_default().createElement("section", {
    className: isShowcase ? "px-4 text-left mb-8 text-lead text-inverse" : "px-4 text-left mb-8 text-inverse"
  }, /*#__PURE__*/index_js_default().createElement(lib/* MDXProvider */.xA, {
    components: isShowcase ? ShowcaseMDXComponents : NewsMDXComponents
  }, children)), /*#__PURE__*/index_js_default().createElement("section", {
    className: "flex flex-col md:flex-row px-4 text-inverse"
  }, prevNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "button button-inverse w-full justify-start",
    to: prevNews.url
  }, "< ", prevNews.title), nextNews && /*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link, {
    className: "button button-inverse w-full justify-end text-right",
    to: nextNews.url
  }, nextNews.title, " >"))), /*#__PURE__*/index_js_default().createElement("section", {
    className: "py-32"
  })));
}
function GatsbyMDXWrapper(props) {
  return /*#__PURE__*/index_js_default().createElement(NewsTemplate, props, /*#__PURE__*/index_js_default().createElement(crown_0_65, props));
}
const query = "665662063";
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
function wrap(Tag,baseClasses){return function Component({className="",children,...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tag,Object.assign({className:`${baseClasses} ${className}`.trim()},props),children);};}const h1=wrap("h1","text-display font-bold mt-8 mb-6");const h2=wrap("h2","text-title font-bold mt-8 mb-6");const h3=wrap("h3","text-lead font-semibold mt-6 mb-3");const h4=wrap("h4","text-body font-semibold mt-4 mb-2");const p=wrap("p","leading-relaxed mb-10 mt-10");const a=wrap("a","text-brand-light underline hover:text-inverse");const img=wrap("img","rounded-widget my-4");const ul=wrap("ul","list-disc pl-6 mb-4");const ol=wrap("ol","list-decimal pl-6 mb-4");const li=wrap("li","mb-1");const blockquote=wrap("blockquote","border-l-4 pl-4 italic bg-dark p-2 rounded-widget");const pre=function Pre({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre",Object.assign({className:`overflow-x-auto p-4 rounded-widget mb-4 bg-dark text-inverse ${className}`},props));};const code=function Code({className="",...props}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code",Object.assign({className:`px-1 py-0.5 rounded-widget bg-dark text-inverse text-small ${className}`},props));};const MDXComponents={h1,h2,h3,h4,p,a,img,ul,ol,li,blockquote,pre,code};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXComponents);

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
//# sourceMappingURL=component---src-templates-news-jsx-content-file-path-src-news-crown-0-65-mdx.js.map