var U=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var $=(n,d)=>{var c={};for(var t in n)R.call(n,t)&&d.indexOf(t)<0&&(c[t]=n[t]);if(n!=null&&U)for(var t of U(n))d.indexOf(t)<0&&q.call(n,t)&&(c[t]=n[t]);return c};import{H as D,f as N,m as T,w as G,u as Q,c as J,g as F,e as K,q as L}from"./index.c1b12cec.js";import{d as j,r as g,P as x,a as h,o as k,b as w,ae as z,ak as I,j as l,v,w as y,n as V,l as p,f as e,e as W,$ as X,T as Y,Q as Z,t as ee,F as te,k as le,q as C,g as se}from"./vendor.a0f19e68.js";import{H as B}from"./HInput.02f96447.js";const P=j({props:{checked:{type:Boolean}},emits:["update:checked"],setup(n,{emit:d}){const c=n,t=g(c.checked);x(()=>c.checked,s=>{t.value=s}),x(()=>t.value,s=>{d("update:checked",s)}),h(()=>t.value?D.CheckboxComposite:D.Checkbox);const{classNames:o}=N("h-checkbox"),m=T("unknown");return(s,r)=>(k(),w("label",{class:V([e(o),"cursor-pointer select-none inline-block"]),style:{height:"30px","line-height":"30px"}},[z(l("input",{type:"checkbox",class:"absolute w-0 h-0","onUpdate:modelValue":r[0]||(r[0]=i=>t.value=i)},null,512),[[I,t.value]]),v(e(G),{class:"mr-2"},{default:y(()=>[l("div",{class:"h-5 w-5 rounded flex items-center justify-center pb-0.5",style:p({backgroundColor:e(m).backgroundColorPrimary})},[l("div",{class:V(["w-2 h-4 transform -rotate-45 -translate-x-1.5",{"opacity-0":!t.value}]),style:{transition:"opacity 0.1s ease-in-out"}},[l("div",{class:"w-1 h-2 absolute bottom-0 rounded",style:p({backgroundColor:e(m).colorPrimary})},null,4),l("div",{class:"w-4 h-1 absolute bottom-0 rounded",style:p({backgroundColor:e(m).colorPrimary})},null,4)],2)],4)]),_:1}),W(s.$slots,"default")],2))}});const ae=j({props:{active:{type:Boolean}},emits:["update:active"],setup(n,{emit:d}){const c=n,{active:t}=X(c),o=g(c.active);x(()=>t.value,i=>{o.value=i}),x(()=>o.value,i=>{d("update:active",i)});const{classNames:m}=N("h-toggle"),s=h(()=>t.value?r.value.colorPrimary:r.value.textColorSecondary),r=Q();return(i,f)=>(k(),w("label",{class:V([e(m),"inline-flex flex-col justify-center"]),style:{height:"30px"}},[v(Y,{tag:"div",name:"toggle",class:V(["cursor-pointer select-none rounded-full relative flex items-center h-5 w-10",{"justify-end":o.value,"justify-start":!o.value}]),style:p([{padding:"0 3px"},{backgroundColor:e(r).backgroundColorPrimary}])},{default:y(()=>[l("div",{key:"dot",class:V(["absolute rounded-full h-3.5 w-3.5",{"opacity-50":!e(t)}]),style:p({backgroundColor:e(s)})},null,6)]),_:1},8,["class","style"]),z(l("input",{"onUpdate:modelValue":f[0]||(f[0]=A=>o.value=A),type:"checkbox",class:"absolute w-0 h-0"},null,512),[[I,o.value]])],2))}});const oe={class:"h-create-article-form w-96 select-none"},ne={class:"mt-2 mb-8 text-xl font-bold text-center"},re=["onSubmit"],ue={class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},de={style:{"grid-column":"controls"}},ce={key:0,class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},ie={style:{"grid-column":"controls"},class:"pl-2 flex justify-between"},ve=C(" \u9875\u9762 "),pe=C(" \u8349\u7A3F "),me=C(" \u9AD8\u7EA7\u6A21\u5F0F "),ge={class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},ye={style:{"grid-column":"controls"}},fe={class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},_e={style:{"grid-column":"controls"}},he={class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},be={style:{"grid-column":"controls"}},xe={class:"grid gap-4 grid-rows-1",style:{"grid-template-columns":"[labels] auto [controls] 1fr"}},ke={style:{"grid-column":"controls"},class:"flex justify-between"},Ce=C(" \u7B80\u6D01\u6A21\u5F0F "),we={class:"flex justify-end mt-6"},Ve=C(" \u53D6\u6D88 "),Ae=C(" \u521B\u5EFA "),Fe=j({props:{advanced:{type:Boolean,default:!1}},emits:["update:advanced","on-cancel","on-create"],setup(n,{emit:d}){const c=n,t=g(c.advanced);x(()=>c.advanced,_=>{t.value=_}),x(()=>t.value,_=>{d("update:advanced",_)});const o=g(""),m=g(""),s=g(""),r=g(""),i=g(!1),f=h(()=>s.value==="page"),A=h(()=>s.value==="draft"),S=h(()=>!o.value),b=h(()=>t.value?"70px":"40px"),E=()=>{!o.value||d("on-create",{title:o.value,slug:m.value,layout:s.value,path:r.value,replace:i.value})},O=()=>{d("on-cancel")},M=h(()=>f.value?"\u9875\u9762":A.value?"\u8349\u7A3F":"\u6587\u7AE0"),H=g(null);return Z(()=>{var _;(_=H.value)==null||_.focus()}),(_,a)=>(k(),w("div",oe,[l("h2",ne,"\u65B0\u5EFA"+ee(e(M)),1),l("form",{onSubmit:le(E,["prevent"])},[l("div",ue,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"}," \u6807\u9898 ",4),l("div",de,[v(e(B),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value=u),error:"",ref_key:"titleInputRef",ref:H},null,8,["modelValue"])])]),t.value?(k(),w(te,{key:1},[l("div",ge,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"}," layout ",4),l("div",ye,[v(e(B),{modelValue:s.value,"onUpdate:modelValue":a[4]||(a[4]=u=>s.value=u),error:""},null,8,["modelValue"])])]),l("div",fe,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"}," slug ",4),l("div",_e,[v(e(B),{modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=u=>m.value=u),error:""},null,8,["modelValue"])])]),l("div",he,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"}," path ",4),l("div",be,[v(e(B),{modelValue:r.value,"onUpdate:modelValue":a[6]||(a[6]=u=>r.value=u),error:""},null,8,["modelValue"])])]),l("div",xe,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"}," replace ",4),l("div",ke,[v(e(ae),{active:i.value,"onUpdate:active":a[7]||(a[7]=u=>i.value=u)},null,8,["active"]),v(e(F),{type:"primary",size:"small","attr-type":"button",inverted:"",onClick:a[8]||(a[8]=u=>t.value=!1)},{default:y(()=>[Ce]),_:1})])])],64)):(k(),w("div",ce,[l("div",{style:p([{width:e(b)},{"grid-column":"labels"}]),class:"label text-right"},null,4),l("div",ie,[l("div",null,[v(e(P),{checked:e(f),"onUpdate:checked":a[1]||(a[1]=u=>u?s.value="page":s.value=""),class:"mr-4"},{default:y(()=>[ve]),_:1},8,["checked"]),v(e(P),{checked:e(A),"onUpdate:checked":a[2]||(a[2]=u=>u?s.value="draft":s.value=""),class:"mr-4"},{default:y(()=>[pe]),_:1},8,["checked"])]),v(e(F),{type:"primary",size:"small","attr-type":"button",inverted:"",onClick:a[3]||(a[3]=u=>t.value=!0)},{default:y(()=>[me]),_:1})])])),l("div",we,[v(e(F),{type:"common",size:"small",class:"mr-2",inverted:"",onClick:O,"attr-type":"button"},{default:y(()=>[Ve]),_:1}),v(e(F),{size:"small","attr-type":"submit",disabled:e(S)},{default:y(()=>[Ae]),_:1},8,["disabled"])])],40,re)]))}});var je=J(Fe,[["__scopeId","data-v-213460dc"]]);const De=j({props:{close:null},setup(n){const d=n,c=K(),t=g(!1),o=s=>{const f=s,{title:r}=f,i=$(f,["title"]);c.createArticle(r,i),d.close()},m=T("unknown");return(s,r)=>(k(),se(e(L),{persistent:t.value,onOnClose:d.close},{default:y(()=>[l("div",{class:"py-2 px-4 rounded-md",style:p({backgroundColor:e(m).backgroundColorTertiary})},[v(je,{onOnCreate:o,onOnCancel:d.close,advanced:t.value,"onUpdate:advanced":r[0]||(r[0]=i=>t.value=i)},null,8,["onOnCancel","advanced"])],4)]),_:1},8,["persistent","onOnClose"]))}});export{De as default};