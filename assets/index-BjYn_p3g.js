import{r as Q,u as E,j as e,B as S,g as pe,a as T,f as A,b as P,U as me,c as W,d as O,e as M,p as X,h as N,i as Z,k as fe,l as he,m as ge,n as ye,o as be,T as ve,q as F}from"./index-CbcbSEPO.js";import{u as xe,g as ee,a as je,b as _e,T as Re,G as U}from"./index.esm-EhZ5iBHU.js";import{I as z,u as Ce,c as oe,a as ae,b as we,d as se}from"./InputBase-lh8zkCGK.js";var ke={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const re=Q.forwardRef(({__staticSelector:o,__stylesApiProps:s,className:a,classNames:n,styles:d,unstyled:u,children:i,label:r,description:l,id:y,disabled:j,error:_,size:p,labelPosition:b="left",bodyElement:c="div",labelElement:t="label",variant:v,style:m,vars:w,mod:f,...k},I)=>{const R=E({name:o,props:s,className:a,style:m,classes:ke,classNames:n,styles:d,unstyled:u});return e.jsx(S,{...R("root"),ref:I,__vars:{"--label-fz":pe(p),"--label-lh":T(p,"label-lh")},mod:[{"label-position":b},f],variant:v,size:p,...k,children:e.jsxs(S,{component:c,htmlFor:c==="label"?y:void 0,...R("body"),children:[i,e.jsxs("div",{...R("labelWrapper"),"data-disabled":j||void 0,children:[r&&e.jsx(S,{component:t,htmlFor:t==="label"?y:void 0,...R("label"),"data-disabled":j||void 0,children:r}),l&&e.jsx(z.Description,{size:p,__inheritStyles:!1,...R("description"),children:l}),_&&typeof _!="boolean"&&e.jsx(z.Error,{size:p,__inheritStyles:!1,...R("error"),children:_})]})]})})});re.displayName="@mantine/core/InlineInput";function Ie({children:o,role:s}){const a=Ce();return a?e.jsx("div",{role:s,"aria-labelledby":a.labelId,"aria-describedby":a.describedBy,children:o}):e.jsx(e.Fragment,{children:o})}const[Se,te]=oe(),[Ge,$e]=oe();var ne={card:"m_9dc8ae12"};const Te={withBorder:!0},Ae=W((o,{radius:s})=>({card:{"--card-radius":O(s)}})),q=A((o,s)=>{const a=P("RadioCard",Te,o),{classNames:n,className:d,style:u,styles:i,unstyled:r,vars:l,checked:y,mod:j,withBorder:_,value:p,onClick:b,name:c,onKeyDown:t,...v}=a,m=E({name:"RadioCard",classes:ne,props:a,className:d,style:u,classNames:n,styles:i,unstyled:r,vars:l,varsResolver:Ae,rootSelector:"card"}),{dir:w}=xe(),f=te(),k=typeof y=="boolean"?y:(f==null?void 0:f.value)===p||!1,I=c||(f==null?void 0:f.name),R=h=>{if(t==null||t(h),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(h.nativeEvent.code)){h.preventDefault();const x=Array.from(document.querySelectorAll(`[role="radio"][name="${I||"__mantine"}"]`)),$=x.findIndex(V=>V===h.target),C=$+1>=x.length?0:$+1,g=$-1<0?x.length-1:$-1;h.nativeEvent.code==="ArrowDown"&&(x[C].focus(),x[C].click()),h.nativeEvent.code==="ArrowUp"&&(x[g].focus(),x[g].click()),h.nativeEvent.code==="ArrowLeft"&&(x[w==="ltr"?g:C].focus(),x[w==="ltr"?g:C].click()),h.nativeEvent.code==="ArrowRight"&&(x[w==="ltr"?C:g].focus(),x[w==="ltr"?C:g].click())}};return e.jsx(Ge,{value:{checked:k},children:e.jsx(me,{ref:s,mod:[{"with-border":_,checked:k},j],...m("card"),...v,role:"radio","aria-checked":k,name:I,onClick:h=>{b==null||b(h),f==null||f.onChange(p||"")},onKeyDown:R})})});q.displayName="@mantine/core/RadioCard";q.classes=ne;const Pe={},L=A((o,s)=>{const{value:a,defaultValue:n,onChange:d,size:u,wrapperProps:i,children:r,name:l,readOnly:y,...j}=P("RadioGroup",Pe,o),_=ae(l),[p,b]=we({value:a,defaultValue:n,finalValue:"",onChange:d}),c=t=>!y&&b(typeof t=="string"?t:t.currentTarget.value);return e.jsx(Se,{value:{value:p,onChange:c,size:u,name:_},children:e.jsx(z.Wrapper,{size:u,ref:s,...i,...j,labelElement:"div",__staticSelector:"RadioGroup",children:e.jsx(Ie,{role:"radiogroup",children:r})})})});L.classes=z.Wrapper.classes;L.displayName="@mantine/core/RadioGroup";function ie({size:o,style:s,...a}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:M(o),height:M(o),...s},"aria-hidden":!0,...a,children:e.jsx("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var le={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};const Ne={icon:ie},ze=W((o,{radius:s,color:a,size:n,iconColor:d,variant:u,autoContrast:i})=>{const r=X({color:a||o.primaryColor,theme:o}),l=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{indicator:{"--radio-size":T(n,"radio-size"),"--radio-radius":s===void 0?void 0:O(s),"--radio-color":u==="outline"?l:N(a,o),"--radio-icon-size":T(n,"radio-icon-size"),"--radio-icon-color":d?N(d,o):ee(i,o)?Z({color:a,theme:o,autoContrast:i}):void 0}}}),K=A((o,s)=>{const a=P("RadioIndicator",Ne,o),{classNames:n,className:d,style:u,styles:i,unstyled:r,vars:l,icon:y,radius:j,color:_,iconColor:p,autoContrast:b,checked:c,mod:t,variant:v,disabled:m,...w}=a,f=y,k=E({name:"RadioIndicator",classes:le,props:a,className:d,style:u,classNames:n,styles:i,unstyled:r,vars:l,varsResolver:ze,rootSelector:"indicator"}),I=$e(),R=typeof c=="boolean"?c:(I==null?void 0:I.checked)||!1;return e.jsx(S,{ref:s,...k("indicator",{variant:v}),variant:v,mod:[{checked:R,disabled:m},t],...w,children:e.jsx(f,{...k("icon")})})});K.displayName="@mantine/core/RadioIndicator";K.classes=le;var ce={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const Be={labelPosition:"right"},Ee=W((o,{size:s,radius:a,color:n,iconColor:d,variant:u,autoContrast:i})=>{const r=X({color:n||o.primaryColor,theme:o}),l=r.isThemeColor&&r.shade===void 0?`var(--mantine-color-${r.color}-outline)`:r.color;return{root:{"--radio-size":T(s,"radio-size"),"--radio-radius":a===void 0?void 0:O(a),"--radio-color":u==="outline"?l:N(n,o),"--radio-icon-color":d?N(d,o):ee(i,o)?Z({color:n,theme:o,autoContrast:i}):void 0,"--radio-icon-size":T(s,"radio-icon-size")}}}),G=A((o,s)=>{const a=P("Radio",Be,o),{classNames:n,className:d,style:u,styles:i,unstyled:r,vars:l,id:y,size:j,label:_,labelPosition:p,description:b,error:c,radius:t,color:v,variant:m,disabled:w,wrapperProps:f,icon:k=ie,rootRef:I,iconColor:R,onChange:h,mod:x,...$}=a,C=E({name:"Radio",classes:ce,props:a,className:d,style:u,classNames:n,styles:i,unstyled:r,vars:l,varsResolver:Ee}),g=te(),V=(g==null?void 0:g.size)??j,de=a.size?j:V,{styleProps:ue,rest:D}=fe($),Y=ae(y),H=g?{checked:g.value===D.value,name:D.name??g.name,onChange:J=>{g.onChange(J),h==null||h(J)}}:{};return e.jsx(re,{...C("root"),__staticSelector:"Radio",__stylesApiProps:a,id:Y,size:de,labelPosition:p,label:_,description:b,error:c,disabled:w,classNames:n,styles:i,unstyled:r,"data-checked":H.checked||void 0,variant:m,ref:I,mod:x,...ue,...f,children:e.jsxs(S,{...C("inner"),mod:{"label-position":p},children:[e.jsx(S,{...C("radio",{focusable:!0,variant:m}),onChange:h,...D,...H,component:"input",mod:{error:!!c},ref:s,id:Y,disabled:w,type:"radio"}),e.jsx(k,{...C("icon"),"aria-hidden":!0})]})})});G.classes=ce;G.displayName="@mantine/core/Radio";G.Group=L;G.Card=q;G.Indicator=K;const Ve={},B=A((o,s)=>{const a=P("TextInput",Ve,o);return e.jsx(se,{component:"input",ref:s,...a,__staticSelector:"TextInput"})});B.classes=se.classes;B.displayName="@mantine/core/TextInput";function We(){var b;const{saveGoals:o,goals:s}=he(),a=ge(),{register:n,control:d,getValues:u,setValue:i,handleSubmit:r,watch:l}=je({defaultValues:{goals:s}}),{fields:y,append:j,remove:_,update:p}=_e({control:d,name:"goals"});return Q.useEffect(()=>{s!=null&&s.length&&i("goals",s)},[s,i]),e.jsxs(S,{component:"form",onSubmit:r(c=>{o(c.goals),ye.show({title:"Goals Saved",message:"Your goals have been updated.",color:"green"}),a("/tracker")}),children:[y.map((c,t)=>{const v=c.createdOn?be().diff(c.createdOn,"day")>0:!1;return e.jsxs(S,{style:m=>({padding:m.spacing.sm,marginBottom:m.spacing.md,borderRadius:m.radius.sm,backgroundColor:m.colors.dark[6]}),children:[v&&e.jsx(ve,{mb:"sm",c:"red",fz:"sm",children:"Goals which were created more than 1 day ago can only get their description changed."}),e.jsx(B,{withAsterisk:!0,placeholder:"Goal Title",mb:"sm",label:"Goal Title",...n(`goals.${t}.title`),disabled:v}),e.jsx(Re,{...n(`goals.${t}.description`),label:"Description",placeholder:"Description",rows:6}),e.jsx(G.Group,{name:`goals.${t}.type`,value:l(`goals.${t}.type`),onChange:m=>{p(t,{...u(`goals.${t}`),type:m})},label:"Goal Type",defaultValue:"single",withAsterisk:!0,children:e.jsxs(U,{mt:"xs",children:[e.jsx(G,{value:"single",label:"Single Event",disabled:v}),e.jsx(G,{value:"calendar",label:"Calendar Tracker",disabled:v})]})}),l(`goals.${t}.type`)==="calendar"&&e.jsx(B,{type:"number",withAsterisk:!0,mt:"sm",label:"Target",placeholder:"target",description:"Specify how many times you want to complete this goal in the year.",...n(`goals.${t}.target`)}),!v&&e.jsx(U,{mt:"sm",justify:"flex-end",children:e.jsx(F,{color:"red",onClick:()=>_(t),children:"Remove Goal"})})]},c.id)}),e.jsxs(U,{justify:"space-between",children:[e.jsx(F,{onClick:()=>j({title:"",type:"single",target:0,description:""}),children:"Add Goal"}),((b=l("goals"))==null?void 0:b.length)>0&&e.jsx(F,{type:"submit",children:"Save"})]})]})}export{We as default};
