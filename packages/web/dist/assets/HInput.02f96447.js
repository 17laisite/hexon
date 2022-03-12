var S=Object.defineProperty,T=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var h=(o,l,a)=>l in o?S(o,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[l]=a,m=(o,l)=>{for(var a in l||(l={}))B.call(l,a)&&h(o,a,l[a]);if(_)for(var a of _(l))j.call(l,a)&&h(o,a,l[a]);return o},v=(o,l)=>T(o,w(l));import{d as $,u as z,r as E,a as b,a8 as R,o as n,b as u,j as k,f as r,e as C,s as c,v as q,n as g,l as V,t as A}from"./vendor.a0f19e68.js";import{c as D,m as P,f as F,H as G,d as J}from"./index.c1b12cec.js";const K={class:"w-full"},L={key:0,class:"prefix mr-1"},M=["value","placeholder","type"],O=$({props:{modelValue:null,placeholder:{default:""},clearable:{type:Boolean,default:!1},type:{default:"primary"},error:null,attrType:null},emits:["update:modelValue"],setup(o,{expose:l,emit:a}){const s=o;z(e=>({"0565f45e":r(p).backgroundColor,"0634726f":r(p).placeholder}));const d=E(null);l({focus:()=>{var e;return(e=d.value)==null?void 0:e.focus()},blur:()=>{var e;return(e=d.value)==null?void 0:e.blur()}});const y=e=>a("update:modelValue",e),I=e=>{var f;return y((f=e.target)==null?void 0:f.value)},H=()=>y(""),t=P("Input"),i=b(()=>s.clearable&&s.modelValue),{classNames:N}=F("h-input"),p=b(()=>{const e={placeholder:t.value.textColorSecondary,outline:t.value.colorTransparent};return s.type==="primary"?v(m({},e),{backgroundColor:t.value.backgroundColorPrimary}):v(m({},e),{outline:t.value.colorTransparent,backgroundColor:t.value.backgroundColorTertiary})}),x=R();return(e,f)=>(n(),u("div",K,[k("label",{class:g(["text-sm h-8 border-none rounded-2xl px-3 py-0 flex cursor-text items-center w-full",r(N)]),style:V({outline:`1px solid ${r(p).outline}`})},[r(x).prefix?(n(),u("div",L,[C(e.$slots,"prefix",{},void 0,!0)])):c("",!0),k("input",{class:"border-none outline-none flex-1 flex-shrink rounded-none leading-full bg-transparent mx-1 min-w-0",value:s.modelValue,placeholder:s.placeholder,type:s.attrType,onInput:I,ref_key:"inputRef",ref:d,spellcheck:"false"},null,40,M),r(i)?(n(),u("div",{key:1,class:"suffix ml-1",onClick:H},[q(r(J),{name:r(G).Cancel},null,8,["name"])])):c("",!0),r(x).suffix?(n(),u("div",{key:2,class:g(["suffix",{"ml-1":!r(i),"ml-2":r(i)}])},[C(e.$slots,"suffix",{},void 0,!0)],2)):c("",!0)],6),s.error!==void 0?(n(),u("div",{key:0,class:"h-input-hint w-full",style:V({color:r(t).colorError})},A(o.error)+"\xA0 ",5)):c("",!0)]))}});var Z=D(O,[["__scopeId","data-v-66dad1c6"]]);export{Z as H};