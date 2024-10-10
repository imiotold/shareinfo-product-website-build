var Te=e=>{throw TypeError(e)};var Ee=(e,t,s)=>t.has(e)||Te("Cannot "+s);var v=(e,t,s)=>(Ee(e,t,"read from private field"),s?s.call(e):t.get(e)),V=(e,t,s)=>t.has(e)?Te("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Y=(e,t,s,r)=>(Ee(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),Z=(e,t,s)=>(Ee(e,t,"access private method"),s);import{d as m,j as d,k as X,f as E,g as ee,b as D,h as ae,l as q,r as J,p as Ge,q as Qe,o as Re,i as it,S as ot,s as nt,t as Fe,v as lt,w as Ve,x as ct,c as dt,e as pt,F as $e,T as Be,a as De,B as ut}from"./index-DnOVhWRt.js";import{u as mt,c as ie,P as ht,A as ft}from"./Footer-nHiMuB6a.js";import{S as yt}from"./SimpleGrid-ZlkBC5_S.js";function gt(e=null){const t=m.createContext(e);return[({children:i,value:a})=>d.jsx(t.Provider,{value:a,children:i}),()=>m.useContext(t)]}const[vt,xe]=gt({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var j={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const We={},bt=ae((e,{size:t})=>({description:{"--input-description-size":t===void 0?void 0:`calc(${q(t)} - ${J(2)})`}})),we=X((e,t)=>{const s=E("InputDescription",We,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,vars:l,size:c,__staticSelector:p,__inheritStyles:u=!0,variant:h,...f}=E("InputDescription",We,s),y=xe(),b=ee({name:["InputWrapper",p],props:s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,rootSelector:"description",vars:l,varsResolver:bt}),w=u&&(y==null?void 0:y.getStyles)||b;return d.jsx(D,{component:"p",ref:t,variant:h,size:c,...w("description",y!=null&&y.getStyles?{className:i,style:a}:void 0),...f})});we.classes=j;we.displayName="@mantine/core/InputDescription";const xt={},wt=ae((e,{size:t})=>({error:{"--input-error-size":t===void 0?void 0:`calc(${q(t)} - ${J(2)})`}})),Se=X((e,t)=>{const s=E("InputError",xt,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,vars:l,size:c,__staticSelector:p,__inheritStyles:u=!0,variant:h,...f}=s,y=ee({name:["InputWrapper",p],props:s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,rootSelector:"error",vars:l,varsResolver:wt}),b=xe(),w=u&&(b==null?void 0:b.getStyles)||y;return d.jsx(D,{component:"p",ref:t,variant:h,size:c,...w("error",b!=null&&b.getStyles?{className:i,style:a}:void 0),...f})});Se.classes=j;Se.displayName="@mantine/core/InputError";const Le={labelElement:"label"},St=ae((e,{size:t})=>({label:{"--input-label-size":q(t),"--input-asterisk-color":void 0}})),Ie=X((e,t)=>{const s=E("InputLabel",Le,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,vars:l,labelElement:c,size:p,required:u,htmlFor:h,onMouseDown:f,children:y,__staticSelector:b,variant:w,mod:z,...x}=E("InputLabel",Le,s),g=ee({name:["InputWrapper",b],props:s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,rootSelector:"label",vars:l,varsResolver:St}),k=xe(),L=(k==null?void 0:k.getStyles)||g;return d.jsxs(D,{...L("label",k!=null&&k.getStyles?{className:i,style:a}:void 0),component:c,variant:w,size:p,ref:t,htmlFor:c==="label"?h:void 0,mod:[{required:u},z],onMouseDown:P=>{f==null||f(P),!P.defaultPrevented&&P.detail>1&&P.preventDefault()},...x,children:[y,u&&d.jsx("span",{...L("required"),"aria-hidden":!0,children:" *"})]})});Ie.classes=j;Ie.displayName="@mantine/core/InputLabel";const qe={},Me=X((e,t)=>{const s=E("InputPlaceholder",qe,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,vars:l,__staticSelector:c,variant:p,error:u,mod:h,...f}=E("InputPlaceholder",qe,s),y=ee({name:["InputPlaceholder",c],props:s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,rootSelector:"placeholder"});return d.jsx(D,{...y("placeholder"),mod:[{error:!!u},h],component:"span",variant:p,ref:t,...f})});Me.classes=j;Me.displayName="@mantine/core/InputPlaceholder";function It(e,{hasDescription:t,hasError:s}){const r=e.findIndex(l=>l==="input"),i=e.slice(0,r),a=e.slice(r+1),o=t&&i.includes("description")||s&&i.includes("error");return{offsetBottom:t&&a.includes("description")||s&&a.includes("error"),offsetTop:o}}const _t={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},jt=ae((e,{size:t})=>({label:{"--input-label-size":q(t),"--input-asterisk-color":void 0},error:{"--input-error-size":t===void 0?void 0:`calc(${q(t)} - ${J(2)})`},description:{"--input-description-size":t===void 0?void 0:`calc(${q(t)} - ${J(2)})`}})),Oe=X((e,t)=>{const s=E("InputWrapper",_t,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,vars:l,size:c,variant:p,__staticSelector:u,inputContainer:h,inputWrapperOrder:f,label:y,error:b,description:w,labelProps:z,descriptionProps:x,errorProps:g,labelElement:k,children:L,withAsterisk:P,id:H,required:K,__stylesApiProps:ne,mod:te,...le}=s,G=ee({name:["InputWrapper",u],props:ne||s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,vars:l,varsResolver:jt}),N={size:c,variant:p,__staticSelector:u},C=mt(H),ke=typeof P=="boolean"?P:K,ce=(g==null?void 0:g.id)||`${C}-error`,de=(x==null?void 0:x.id)||`${C}-description`,pe=C,se=!!b&&typeof b!="boolean",S=!!w,ue=`${se?ce:""} ${S?de:""}`,Q=ue.trim().length>0?ue.trim():void 0,me=(z==null?void 0:z.id)||`${C}-label`,Xe=y&&d.jsx(Ie,{labelElement:k,id:me,htmlFor:pe,required:ke,...N,...z,children:y},"label"),et=S&&d.jsx(we,{...x,...N,size:(x==null?void 0:x.size)||N.size,id:(x==null?void 0:x.id)||de,children:w},"description"),tt=d.jsx(m.Fragment,{children:h(L)},"input"),st=se&&m.createElement(Se,{...g,...N,size:(g==null?void 0:g.size)||N.size,key:"error",id:(g==null?void 0:g.id)||ce},b),rt=f.map(at=>{switch(at){case"label":return Xe;case"input":return tt;case"description":return et;case"error":return st;default:return null}});return d.jsx(vt,{value:{getStyles:G,describedBy:Q,inputId:pe,labelId:me,...It(f,{hasDescription:S,hasError:se})},children:d.jsx(D,{ref:t,variant:p,size:c,mod:[{error:!!b},te],...G("root"),...le,children:rt})})});Oe.classes=j;Oe.displayName="@mantine/core/InputWrapper";const kt={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},Et=ae((e,t,s)=>({wrapper:{"--input-margin-top":s.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":s.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":Re(t.size,"input-height"),"--input-fz":q(t.size),"--input-radius":t.radius===void 0?void 0:it(t.radius),"--input-left-section-width":t.leftSectionWidth!==void 0?J(t.leftSectionWidth):void 0,"--input-right-section-width":t.rightSectionWidth!==void 0?J(t.rightSectionWidth):void 0,"--input-padding-y":t.multiline?Re(t.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":t.leftSectionPointerEvents,"--input-right-section-pointer-events":t.rightSectionPointerEvents}})),$=Ge((e,t)=>{const s=E("Input",kt,e),{classNames:r,className:i,style:a,styles:o,unstyled:n,required:l,__staticSelector:c,__stylesApiProps:p,size:u,wrapperProps:h,error:f,disabled:y,leftSection:b,leftSectionProps:w,leftSectionWidth:z,rightSection:x,rightSectionProps:g,rightSectionWidth:k,rightSectionPointerEvents:L,leftSectionPointerEvents:P,variant:H,vars:K,pointer:ne,multiline:te,radius:le,id:G,withAria:N,withErrorStyles:C,mod:ke,inputSize:ce,...de}=s,{styleProps:pe,rest:se}=Qe(de),S=xe(),ue={offsetBottom:S==null?void 0:S.offsetBottom,offsetTop:S==null?void 0:S.offsetTop},Q=ee({name:["Input",c],props:p||s,classes:j,className:i,style:a,classNames:r,styles:o,unstyled:n,stylesCtx:ue,rootSelector:"wrapper",vars:K,varsResolver:Et}),me=N?{required:l,disabled:y,"aria-invalid":!!f,"aria-describedby":S==null?void 0:S.describedBy,id:(S==null?void 0:S.inputId)||G}:{};return d.jsxs(D,{...Q("wrapper"),...pe,...h,mod:[{error:!!f&&C,pointer:ne,disabled:y,multiline:te,"data-with-right-section":!!x,"data-with-left-section":!!b},ke],variant:H,size:u,children:[b&&d.jsx("div",{...w,"data-position":"left",...Q("section",{className:w==null?void 0:w.className,style:w==null?void 0:w.style}),children:b}),d.jsx(D,{component:"input",...se,...me,ref:t,required:l,mod:{disabled:y,error:!!f&&C},variant:H,__size:ce,...Q("input")}),x&&d.jsx("div",{...g,"data-position":"right",...Q("section",{className:g==null?void 0:g.className,style:g==null?void 0:g.style}),children:x})]})});$.classes=j;$.Wrapper=Oe;$.Label=Ie;$.Error=Se;$.Description=we;$.Placeholder=Me;$.displayName="@mantine/core/Input";function $t(e,t,s){const r=E(e,t,s),{label:i,description:a,error:o,required:n,classNames:l,styles:c,className:p,unstyled:u,__staticSelector:h,__stylesApiProps:f,errorProps:y,labelProps:b,descriptionProps:w,wrapperProps:z,id:x,size:g,style:k,inputContainer:L,inputWrapperOrder:P,withAsterisk:H,variant:K,vars:ne,mod:te,...le}=r,{styleProps:G,rest:N}=Qe(le),C={label:i,description:a,error:o,required:n,classNames:l,className:p,__staticSelector:h,__stylesApiProps:f||r,errorProps:y,labelProps:b,descriptionProps:w,unstyled:u,styles:c,size:g,style:k,inputContainer:L,inputWrapperOrder:P,withAsterisk:H,variant:K,id:x,mod:te,...z};return{...N,classNames:l,styles:c,unstyled:u,wrapperProps:{...C,...G},inputProps:{required:n,classNames:l,styles:c,unstyled:u,size:g,__staticSelector:h,__stylesApiProps:f||r,error:o,variant:K,id:x}}}const Pt={__staticSelector:"InputBase",withAria:!0},_e=Ge((e,t)=>{const{inputProps:s,wrapperProps:r,...i}=$t("InputBase",Pt,e);return d.jsx($.Wrapper,{...r,children:d.jsx($,{...s,...i,ref:t})})});_e.classes={...$.classes,...$.Wrapper.classes};_e.displayName="@mantine/core/InputBase";const zt={},Ae=X((e,t)=>{const s=E("TextInput",zt,e);return d.jsx(_e,{component:"input",ref:t,...s,__staticSelector:"TextInput"})});Ae.classes=_e.classes;Ae.displayName="@mantine/core/TextInput";var F,B,I,O,A,fe,Pe,Ke,Nt=(Ke=class extends ot{constructor(s,r){super();V(this,A);V(this,F);V(this,B);V(this,I);V(this,O);Y(this,F,s),this.setOptions(r),this.bindMethods(),Z(this,A,fe).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(s){var i;const r=this.options;this.options=v(this,F).defaultMutationOptions(s),nt(this.options,r)||v(this,F).getMutationCache().notify({type:"observerOptionsUpdated",mutation:v(this,I),observer:this}),r!=null&&r.mutationKey&&this.options.mutationKey&&Fe(r.mutationKey)!==Fe(this.options.mutationKey)?this.reset():((i=v(this,I))==null?void 0:i.state.status)==="pending"&&v(this,I).setOptions(this.options)}onUnsubscribe(){var s;this.hasListeners()||(s=v(this,I))==null||s.removeObserver(this)}onMutationUpdate(s){Z(this,A,fe).call(this),Z(this,A,Pe).call(this,s)}getCurrentResult(){return v(this,B)}reset(){var s;(s=v(this,I))==null||s.removeObserver(this),Y(this,I,void 0),Z(this,A,fe).call(this),Z(this,A,Pe).call(this)}mutate(s,r){var i;return Y(this,O,r),(i=v(this,I))==null||i.removeObserver(this),Y(this,I,v(this,F).getMutationCache().build(v(this,F),this.options)),v(this,I).addObserver(this),v(this,I).execute(s)}},F=new WeakMap,B=new WeakMap,I=new WeakMap,O=new WeakMap,A=new WeakSet,fe=function(){var r;const s=((r=v(this,I))==null?void 0:r.state)??lt();Y(this,B,{...s,isPending:s.status==="pending",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset})},Pe=function(s){Ve.batch(()=>{var r,i,a,o,n,l,c,p;if(v(this,O)&&this.hasListeners()){const u=v(this,B).variables,h=v(this,B).context;(s==null?void 0:s.type)==="success"?((i=(r=v(this,O)).onSuccess)==null||i.call(r,s.data,u,h),(o=(a=v(this,O)).onSettled)==null||o.call(a,s.data,null,u,h)):(s==null?void 0:s.type)==="error"&&((l=(n=v(this,O)).onError)==null||l.call(n,s.error,u,h),(p=(c=v(this,O)).onSettled)==null||p.call(c,void 0,s.error,u,h))}this.listeners.forEach(u=>{u(v(this,B))})})},Ke);function Ct(e,t){return typeof e=="function"?e(...t):!!e}function Mt(){}function Ot(e,t){const s=ct(),[r]=m.useState(()=>new Nt(s,e));m.useEffect(()=>{r.setOptions(e)},[r,e]);const i=m.useSyncExternalStore(m.useCallback(o=>r.subscribe(Ve.batchCalls(o)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),a=m.useCallback((o,n)=>{r.mutate(o,n).catch(Mt)},[r]);if(i.error&&Ct(r.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var At=ie("outline","brain","IconBrain",[["path",{d:"M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8",key:"svg-0"}],["path",{d:"M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8",key:"svg-1"}],["path",{d:"M17.5 16a3.5 3.5 0 0 0 0 -7h-.5",key:"svg-2"}],["path",{d:"M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0",key:"svg-3"}],["path",{d:"M6.5 16a3.5 3.5 0 0 1 0 -7h.5",key:"svg-4"}],["path",{d:"M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10",key:"svg-5"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tt=ie("outline","mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rt=ie("outline","sparkles","IconSparkles",[["path",{d:"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ft=ie("outline","target-arrow","IconTargetArrow",[["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 7a5 5 0 1 0 5 5",key:"svg-1"}],["path",{d:"M13 3.055a9 9 0 1 0 7.941 7.945",key:"svg-2"}],["path",{d:"M15 6v3h3l3 -3h-3v-3z",key:"svg-3"}],["path",{d:"M15 9l-3 3",key:"svg-4"}]]);/**
 * @license @tabler/icons-react v3.19.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bt=ie("filled","stars-filled","IconStarsFilled",[["path",{d:"M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z",key:"svg-0"}],["path",{d:"M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z",key:"svg-1"}],["path",{d:"M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z",key:"svg-2"}]]);let Dt={data:""},Wt=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Dt,Lt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,qt=/\/\*[^]*?\*\/|  +/g,Ue=/\n+/g,R=(e,t)=>{let s="",r="",i="";for(let a in e){let o=e[a];a[0]=="@"?a[1]=="i"?s=a+" "+o+";":r+=a[1]=="f"?R(o,a):a+"{"+R(o,a[1]=="k"?"":t)+"}":typeof o=="object"?r+=R(o,t?t.replace(/([^,])+/g,n=>a.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=R.p?R.p(a,o):a+":"+o+";")}return s+(t&&i?t+"{"+i+"}":i)+r},M={},Ye=e=>{if(typeof e=="object"){let t="";for(let s in e)t+=s+Ye(e[s]);return t}return e},Ut=(e,t,s,r,i)=>{let a=Ye(e),o=M[a]||(M[a]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(a));if(!M[o]){let l=a!==e?e:(c=>{let p,u,h=[{}];for(;p=Lt.exec(c.replace(qt,""));)p[4]?h.shift():p[3]?(u=p[3].replace(Ue," ").trim(),h.unshift(h[0][u]=h[0][u]||{})):h[0][p[1]]=p[2].replace(Ue," ").trim();return h[0]})(e);M[o]=R(i?{["@keyframes "+o]:l}:l,s?"":"."+o)}let n=s&&M.g?M.g:null;return s&&(M.g=M[o]),((l,c,p,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(M[o],t,r,n),o},Ht=(e,t,s)=>e.reduce((r,i,a)=>{let o=t[a];if(o&&o.call){let n=o(s),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=l?"."+l:n&&typeof n=="object"?n.props?"":R(n,""):n===!1?"":n}return r+i+(o??"")},"");function je(e){let t=this||{},s=e.call?e(t.p):e;return Ut(s.unshift?s.raw?Ht(s,[].slice.call(arguments,1),t.p):s.reduce((r,i)=>Object.assign(r,i&&i.call?i(t.p):i),{}):s,Wt(t.target),t.g,t.o,t.k)}let Ze,ze,Ne;je.bind({g:1});let T=je.bind({k:1});function Kt(e,t,s,r){R.p=t,Ze=e,ze=s,Ne=r}function W(e,t){let s=this||{};return function(){let r=arguments;function i(a,o){let n=Object.assign({},a),l=n.className||i.className;s.p=Object.assign({theme:ze&&ze()},n),s.o=/ *go\d+/.test(l),n.className=je.apply(s,r)+(l?" "+l:"");let c=e;return e[0]&&(c=n.as||e,delete n.as),Ne&&c[0]&&Ne(n),Ze(c,n)}return i}}var Gt=e=>typeof e=="function",be=(e,t)=>Gt(e)?e(t):e,Qt=(()=>{let e=0;return()=>(++e).toString()})(),Je=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Vt=20,ye=new Map,Yt=1e3,He=e=>{if(ye.has(e))return;let t=setTimeout(()=>{ye.delete(e),U({type:4,toastId:e})},Yt);ye.set(e,t)},Zt=e=>{let t=ye.get(e);t&&clearTimeout(t)},Ce=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Vt)};case 1:return t.toast.id&&Zt(t.toast.id),{...e,toasts:e.toasts.map(a=>a.id===t.toast.id?{...a,...t.toast}:a)};case 2:let{toast:s}=t;return e.toasts.find(a=>a.id===s.id)?Ce(e,{type:1,toast:s}):Ce(e,{type:0,toast:s});case 3:let{toastId:r}=t;return r?He(r):e.toasts.forEach(a=>{He(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===r||r===void 0?{...a,visible:!1}:a)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},ge=[],ve={toasts:[],pausedAt:void 0},U=e=>{ve=Ce(ve,e),ge.forEach(t=>{t(ve)})},Jt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Xt=(e={})=>{let[t,s]=m.useState(ve);m.useEffect(()=>(ge.push(s),()=>{let i=ge.indexOf(s);i>-1&&ge.splice(i,1)}),[t]);let r=t.toasts.map(i=>{var a,o;return{...e,...e[i.type],...i,duration:i.duration||((a=e[i.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||Jt[i.type],style:{...e.style,...(o=e[i.type])==null?void 0:o.style,...i.style}}});return{...t,toasts:r}},es=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Qt()}),oe=e=>(t,s)=>{let r=es(t,e,s);return U({type:2,toast:r}),r.id},_=(e,t)=>oe("blank")(e,t);_.error=oe("error");_.success=oe("success");_.loading=oe("loading");_.custom=oe("custom");_.dismiss=e=>{U({type:3,toastId:e})};_.remove=e=>U({type:4,toastId:e});_.promise=(e,t,s)=>{let r=_.loading(t.loading,{...s,...s==null?void 0:s.loading});return e.then(i=>(_.success(be(t.success,i),{id:r,...s,...s==null?void 0:s.success}),i)).catch(i=>{_.error(be(t.error,i),{id:r,...s,...s==null?void 0:s.error})}),e};var ts=(e,t)=>{U({type:1,toast:{id:e,height:t}})},ss=()=>{U({type:5,time:Date.now()})},rs=e=>{let{toasts:t,pausedAt:s}=Xt(e);m.useEffect(()=>{if(s)return;let a=Date.now(),o=t.map(n=>{if(n.duration===1/0)return;let l=(n.duration||0)+n.pauseDuration-(a-n.createdAt);if(l<0){n.visible&&_.dismiss(n.id);return}return setTimeout(()=>_.dismiss(n.id),l)});return()=>{o.forEach(n=>n&&clearTimeout(n))}},[t,s]);let r=m.useCallback(()=>{s&&U({type:6,time:Date.now()})},[s]),i=m.useCallback((a,o)=>{let{reverseOrder:n=!1,gutter:l=8,defaultPosition:c}=o||{},p=t.filter(f=>(f.position||c)===(a.position||c)&&f.height),u=p.findIndex(f=>f.id===a.id),h=p.filter((f,y)=>y<u&&f.visible).length;return p.filter(f=>f.visible).slice(...n?[h+1]:[0,h]).reduce((f,y)=>f+(y.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:ts,startPause:ss,endPause:r,calculateOffset:i}}},as=T`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,is=T`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,os=T`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ns=W("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${as} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${is} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${os} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ls=T`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,cs=W("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ls} 1s linear infinite;
`,ds=T`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ps=T`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,us=W("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ds} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ps} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ms=W("div")`
  position: absolute;
`,hs=W("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,fs=T`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ys=W("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${fs} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,gs=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return t!==void 0?typeof t=="string"?m.createElement(ys,null,t):t:s==="blank"?null:m.createElement(hs,null,m.createElement(cs,{...r}),s!=="loading"&&m.createElement(ms,null,s==="error"?m.createElement(ns,{...r}):m.createElement(us,{...r})))},vs=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bs=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,xs="0%{opacity:0;} 100%{opacity:1;}",ws="0%{opacity:1;} 100%{opacity:0;}",Ss=W("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Is=W("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_s=(e,t)=>{let s=e.includes("top")?1:-1,[r,i]=Je()?[xs,ws]:[vs(s),bs(s)];return{animation:t?`${T(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${T(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},js=m.memo(({toast:e,position:t,style:s,children:r})=>{let i=e.height?_s(e.position||t||"top-center",e.visible):{opacity:0},a=m.createElement(gs,{toast:e}),o=m.createElement(Is,{...e.ariaProps},be(e.message,e));return m.createElement(Ss,{className:e.className,style:{...i,...s,...e.style}},typeof r=="function"?r({icon:a,message:o}):m.createElement(m.Fragment,null,a,o))});Kt(m.createElement);var ks=({id:e,className:t,style:s,onHeightUpdate:r,children:i})=>{let a=m.useCallback(o=>{if(o){let n=()=>{let l=o.getBoundingClientRect().height;r(e,l)};n(),new MutationObserver(n).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return m.createElement("div",{ref:a,className:t,style:s},i)},Es=(e,t)=>{let s=e.includes("top"),r=s?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Je()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...r,...i}},$s=je`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,he=16,Ps=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:i,containerStyle:a,containerClassName:o})=>{let{toasts:n,handlers:l}=rs(s);return m.createElement("div",{style:{position:"fixed",zIndex:9999,top:he,left:he,right:he,bottom:he,pointerEvents:"none",...a},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(c=>{let p=c.position||t,u=l.calculateOffset(c,{reverseOrder:e,gutter:r,defaultPosition:t}),h=Es(p,u);return m.createElement(ks,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?$s:"",style:h},c.type==="custom"?be(c.message,c):i?i(c):m.createElement(js,{toast:c,position:p}))}))},re=_;const zs=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),Rs=()=>{const e=dt(`(max-width: ${pt(750)})`),[t,s]=m.useState(""),r=Ot({mutationFn:async a=>(await fetch("https://script.google.com/macros/s/AKfycbwQyUquaTR4Etv5fN203v9O8s7aIW8-OSheVauj2P1RQjt1zfsgIHzG52q1GwaZhA4K/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({Email:a})})).json()}),i=()=>{if(!zs(t)){re.error("Please enter a valid email address.");return}r.mutate(t),r.isPending&&re.pending("Subscribing..."),r.isSuccess&&r.data.result==="error"?re.error(r.data.msg||"Something went wrong, please try again later."):re.success("You have successfully subscribed!"),r.isError&&re.success(r.data.msg||"Something went wrong, please try again later.")};return d.jsxs(d.Fragment,{children:[d.jsx(Ps,{position:"bottom-right"}),d.jsxs($e,{gap:{base:20,sm:90},justify:e?"center":"space-between",align:"center",direction:e?"column":"row",children:[d.jsxs(D,{children:[d.jsx(Be,{className:"text-custom_gradient_orange",style:{fontFamily:"Nunito"},order:1,ta:{base:"center",md:"left"},children:"Don’t Miss our Latest Updates!"}),d.jsx(De,{mt:5,ta:{base:"center",md:"left"},children:"Do You Like to be the Part of next Era of Placements?"})]}),d.jsxs($e,{gap:10,style:{borderRadius:"15px"},justify:"space-between",flex:1,p:10,bg:"#090C0D",direction:"row",align:"center",children:[d.jsx(Ae,{flex:1,variant:"unstyled",leftSection:d.jsx(Tt,{style:{width:"70%",height:"70%"}}),placeholder:"Sign up for Updates",value:t,onChange:a=>s(a.target.value)}),d.jsx(ut,{size:"lg",radius:"md",color:"#F94612",onClick:i,loading:r.isLoading,children:"Subscribe"})]})]}),d.jsx(yt,{className:"CapableGrid",mt:50,cols:{base:1,sm:2,lg:4},spacing:{base:10,sm:10},verticalSpacing:{base:10,sm:10},children:Ns.map(a=>d.jsx(ht,{onClick:()=>{a.link==="#"||window.open(a.link,"_blank")},bg:"#090C0D",className:"CapableCard",radius:"lg",w:"100%",children:d.jsxs($e,{p:30,direction:"column",align:{base:"center",sm:"start"},children:[d.jsx(ft,{variant:"light",color:"orange",size:"xl",radius:"md","aria-label":"Settings",children:a.icon}),d.jsx(Be,{ta:{base:"center",sm:"left"},mt:20,order:4,c:"white",style:{fontFamily:"Nunito"},children:a.title}),d.jsx(De,{ta:{base:"center",sm:"left"},size:"sm",c:"dimmed",mt:10,children:a.description})]})},a.title))})]})},Ns=[{title:"Imiot LearnSpace",description:"Enjoy a smooth and efficient process from start to finish.",icon:d.jsx(Bt,{style:{width:"70%",height:"70%"},stroke:1.5}),link:"/learning"},{title:"Vision 2028",description:"Leverage data to make informed decisions.",icon:d.jsx(Ft,{style:{width:"70%",height:"70%"},stroke:1.5}),link:"/vision28"},{title:"Find Talent",description:"Use AI to find the perfect match for your needs.",icon:d.jsx(Rt,{style:{width:"70%",height:"70%"},stroke:1.5}),link:"https://recruiter.shareinfo.io/"},{title:"ShareInfo AI",description:"The Future of Job Hunting Find your dream job faster with tailored opportunities.",icon:d.jsx(At,{style:{width:"70%",height:"70%"},stroke:1.5}),link:"/shareinfoai"}];export{At as I,Rs as S,Ft as a,Bt as b,Rt as c};
