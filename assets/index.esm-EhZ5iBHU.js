import{r as re,f as vr,b as pr,I as _r,u as Hr,j as br,B as Wr,c as jr,R as V,_ as $r,P as qr}from"./index-CbcbSEPO.js";import{d as mr}from"./InputBase-lh8zkCGK.js";var Gr={};function Yr(){return typeof process<"u"&&Gr?"production":"development"}function Pt(e,t){return typeof e=="boolean"?e:t.autoContrast}const Kr=re.createContext({dir:"ltr",toggleDirection:()=>{},setDirection:()=>{}});function Ht(){return re.useContext(Kr)}function Xr(e){return re.Children.toArray(e).filter(Boolean)}var xr={root:"m_4081bf90"};const Zr={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},Jr=jr((e,{grow:t,preventGrowOverflow:r,gap:s,align:a,justify:o,wrap:d},{childWidth:g})=>({root:{"--group-child-width":t&&r?g:void 0,"--group-gap":_r(s),"--group-align":a,"--group-justify":o,"--group-wrap":d}})),Ar=vr((e,t)=>{const r=pr("Group",Zr,e),{classNames:s,className:a,style:o,styles:d,unstyled:g,children:m,gap:F,align:w,justify:_,wrap:K,grow:k,preventGrowOverflow:$,vars:T,variant:M,__size:X,mod:A,...O}=r,U=Xr(m),D=U.length,h=_r(F??"md"),b={childWidth:`calc(${100/D}% - (${h} - ${h} / ${D}))`},R=Hr({name:"Group",props:r,stylesCtx:b,className:a,style:o,classes:xr,classNames:s,styles:d,unstyled:g,vars:T,varsResolver:Jr});return br.jsx(Wr,{...R("root"),ref:t,variant:M,mod:[{grow:k},A],size:X,...O,children:U})});Ar.classes=xr;Ar.displayName="@mantine/core/Group";var Qr=re.useLayoutEffect,et=function(t){var r=V.useRef(t);return Qr(function(){r.current=t}),r},sr=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},rt=function(t,r){var s=V.useRef();return V.useCallback(function(a){t.current=a,s.current&&sr(s.current,null),s.current=r,r&&sr(r,a)},[r])},ir={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"},tt=function(t){Object.keys(ir).forEach(function(r){t.style.setProperty(r,ir[r],"important")})},nr=tt,q=null,ar=function(t,r){var s=t.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?s+r.borderSize:s-r.paddingSize};function st(e,t,r,s){r===void 0&&(r=1),s===void 0&&(s=1/0),q||(q=document.createElement("textarea"),q.setAttribute("tabindex","-1"),q.setAttribute("aria-hidden","true"),nr(q)),q.parentNode===null&&document.body.appendChild(q);var a=e.paddingSize,o=e.borderSize,d=e.sizingStyle,g=d.boxSizing;Object.keys(d).forEach(function(K){var k=K;q.style[k]=d[k]}),nr(q),q.value=t;var m=ar(q,e);q.value=t,m=ar(q,e),q.value="x";var F=q.scrollHeight-a,w=F*r;g==="border-box"&&(w=w+a+o),m=Math.max(w,m);var _=F*s;return g==="border-box"&&(_=_+a+o),m=Math.min(_,m),[m,F]}var ur=function(){},it=function(t,r){return t.reduce(function(s,a){return s[a]=r[a],s},{})},nt=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],at=!!document.documentElement.currentStyle,ut=function(t){var r=window.getComputedStyle(t);if(r===null)return null;var s=it(nt,r),a=s.boxSizing;if(a==="")return null;at&&a==="border-box"&&(s.width=parseFloat(s.width)+parseFloat(s.borderRightWidth)+parseFloat(s.borderLeftWidth)+parseFloat(s.paddingRight)+parseFloat(s.paddingLeft)+"px");var o=parseFloat(s.paddingBottom)+parseFloat(s.paddingTop),d=parseFloat(s.borderBottomWidth)+parseFloat(s.borderTopWidth);return{sizingStyle:s,paddingSize:o,borderSize:d}},ot=ut;function Fr(e,t,r){var s=et(r);re.useLayoutEffect(function(){var a=function(d){return s.current(d)};if(e)return e.addEventListener(t,a),function(){return e.removeEventListener(t,a)}},[])}var lt=function(t){Fr(window,"resize",t)},dt=function(t){Fr(document.fonts,"loadingdone",t)},ct=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],ft=function(t,r){var s=t.cacheMeasurements,a=t.maxRows,o=t.minRows,d=t.onChange,g=d===void 0?ur:d,m=t.onHeightChange,F=m===void 0?ur:m,w=$r(t,ct),_=w.value!==void 0,K=re.useRef(null),k=rt(K,r),$=re.useRef(0),T=re.useRef(),M=function(){var O=K.current,U=s&&T.current?T.current:ot(O);if(U){T.current=U;var D=st(U,O.value||O.placeholder||"x",o,a),h=D[0],v=D[1];$.current!==h&&($.current=h,O.style.setProperty("height",h+"px","important"),F(h,{rowHeight:v}))}},X=function(O){_||M(),g(O)};return re.useLayoutEffect(M),lt(M),dt(M),re.createElement("textarea",qr({},w,{onChange:X,ref:k}))},yt=re.forwardRef(ft);const gt={},Sr=vr((e,t)=>{const{autosize:r,maxRows:s,minRows:a,__staticSelector:o,resize:d,...g}=pr("Textarea",gt,e),m=r&&Yr()!=="test",F=m?{maxRows:s,minRows:a}:{};return br.jsx(mr,{component:m?yt:"textarea",ref:t,...g,__staticSelector:o||"Textarea",multiline:!0,"data-no-overflow":r&&s===void 0||void 0,__vars:{"--input-resize":d},...F})});Sr.classes=mr.classes;Sr.displayName="@mantine/core/Textarea";var be=e=>e.type==="checkbox",de=e=>e instanceof Date,Y=e=>e==null;const Vr=e=>typeof e=="object";var N=e=>!Y(e)&&!Array.isArray(e)&&Vr(e)&&!de(e),ht=e=>N(e)&&e.target?be(e.target)?e.target.checked:e.target.value:e,vt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,pt=(e,t)=>e.has(vt(t)),_t=e=>{const t=e.constructor&&e.constructor.prototype;return N(t)&&t.hasOwnProperty("isPrototypeOf")},We=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let t;const r=Array.isArray(e),s=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(We&&(e instanceof Blob||s))&&(r||N(e)))if(t=r?[]:{},!r&&!_t(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=W(e[a]));else return e;return t}var me=e=>Array.isArray(e)?e.filter(Boolean):[],L=e=>e===void 0,y=(e,t,r)=>{if(!t||!N(e))return r;const s=me(t.split(/[,[\].]+?/)).reduce((a,o)=>Y(a)?a:a[o],e);return L(s)||s===e?L(e[t])?r:e[t]:s},te=e=>typeof e=="boolean",je=e=>/^\w*$/.test(e),wr=e=>me(e.replace(/["|']|\]/g,"").split(/\.|\[/)),C=(e,t,r)=>{let s=-1;const a=je(t)?[t]:wr(t),o=a.length,d=o-1;for(;++s<o;){const g=a[s];let m=r;if(s!==d){const F=e[g];m=N(F)||Array.isArray(F)?F:isNaN(+a[s+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=m,e=e[g]}return e};const or={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Q={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ne={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},bt=V.createContext(null),mt=()=>V.useContext(bt);var xt=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const d=o;return t._proxyFormState[d]!==Q.all&&(t._proxyFormState[d]=!s||Q.all),e[d]}});return a},G=e=>N(e)&&!Object.keys(e).length,At=(e,t,r,s)=>{r(e);const{name:a,...o}=e;return G(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(d=>t[d]===Q.all)},Z=e=>Array.isArray(e)?e:[e];function Er(e){const t=V.useRef(e);t.current=e,V.useEffect(()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var ie=e=>typeof e=="string",Ft=(e,t,r,s,a)=>ie(e)?(s&&t.watch.add(e),y(r,e,a)):Array.isArray(e)?e.map(o=>(s&&t.watch.add(o),y(r,o))):(s&&(t.watchAll=!0),r),St=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},ue=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},De=(e,t,r={})=>r.shouldFocus||L(r.shouldFocus)?r.focusName||`${e}.${L(r.focusIndex)?t:r.focusIndex}.`:"",_e=e=>({isOnSubmit:!e||e===Q.onSubmit,isOnBlur:e===Q.onBlur,isOnChange:e===Q.onChange,isOnAll:e===Q.all,isOnTouch:e===Q.onTouched}),Be=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const fe=(e,t,r,s)=>{for(const a of r||Object.keys(e)){const o=y(e,a);if(o){const{_f:d,...g}=o;if(d){if(d.refs&&d.refs[0]&&t(d.refs[0],a)&&!s)return!0;if(d.ref&&t(d.ref,d.name)&&!s)return!0;if(fe(g,t))break}else if(N(g)&&fe(g,t))break}}};var kr=(e,t,r)=>{const s=Z(y(e,r));return C(s,"root",t[r]),C(e,r,s),e},$e=e=>e.type==="file",se=e=>typeof e=="function",Ae=e=>{if(!We)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},xe=e=>ie(e),qe=e=>e.type==="radio",Fe=e=>e instanceof RegExp;const lr={value:!1,isValid:!1},dr={value:!0,isValid:!0};var Dr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!L(e[0].attributes.value)?L(e[0].value)||e[0].value===""?dr:{value:e[0].value,isValid:!0}:dr:lr}return lr};const cr={isValid:!1,value:null};var Cr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,cr):cr;function fr(e,t,r="validate"){if(xe(e)||Array.isArray(e)&&e.every(xe)||te(e)&&!e)return{type:r,message:xe(e)?e:"",ref:t}}var ce=e=>N(e)&&!Fe(e)?e:{value:e,message:""},Pe=async(e,t,r,s,a,o)=>{const{ref:d,refs:g,required:m,maxLength:F,minLength:w,min:_,max:K,pattern:k,validate:$,name:T,valueAsNumber:M,mount:X}=e._f,A=y(r,T);if(!X||t.has(T))return{};const O=g?g[0]:d,U=S=>{a&&O.reportValidity&&(O.setCustomValidity(te(S)?"":S||""),O.reportValidity())},D={},h=qe(d),v=be(d),b=h||v,R=(M||$e(d))&&L(d.value)&&L(A)||Ae(d)&&d.value===""||A===""||Array.isArray(A)&&!A.length,B=St.bind(null,T,s,D),le=(S,E,I,j=ne.maxLength,ee=ne.minLength)=>{const J=S?E:I;D[T]={type:S?j:ee,message:J,ref:d,...B(S?j:ee,J)}};if(o?!Array.isArray(A)||!A.length:m&&(!b&&(R||Y(A))||te(A)&&!A||v&&!Dr(g).isValid||h&&!Cr(g).isValid)){const{value:S,message:E}=xe(m)?{value:!!m,message:m}:ce(m);if(S&&(D[T]={type:ne.required,message:E,ref:O,...B(ne.required,E)},!s))return U(E),D}if(!R&&(!Y(_)||!Y(K))){let S,E;const I=ce(K),j=ce(_);if(!Y(A)&&!isNaN(A)){const ee=d.valueAsNumber||A&&+A;Y(I.value)||(S=ee>I.value),Y(j.value)||(E=ee<j.value)}else{const ee=d.valueAsDate||new Date(A),J=he=>new Date(new Date().toDateString()+" "+he),ye=d.type=="time",ge=d.type=="week";ie(I.value)&&A&&(S=ye?J(A)>J(I.value):ge?A>I.value:ee>new Date(I.value)),ie(j.value)&&A&&(E=ye?J(A)<J(j.value):ge?A<j.value:ee<new Date(j.value))}if((S||E)&&(le(!!S,I.message,j.message,ne.max,ne.min),!s))return U(D[T].message),D}if((F||w)&&!R&&(ie(A)||o&&Array.isArray(A))){const S=ce(F),E=ce(w),I=!Y(S.value)&&A.length>+S.value,j=!Y(E.value)&&A.length<+E.value;if((I||j)&&(le(I,S.message,E.message),!s))return U(D[T].message),D}if(k&&!R&&ie(A)){const{value:S,message:E}=ce(k);if(Fe(S)&&!A.match(S)&&(D[T]={type:ne.pattern,message:E,ref:d,...B(ne.pattern,E)},!s))return U(E),D}if($){if(se($)){const S=await $(A,r),E=fr(S,O);if(E&&(D[T]={...E,...B(ne.validate,E.message)},!s))return U(E.message),D}else if(N($)){let S={};for(const E in $){if(!G(S)&&!s)break;const I=fr(await $[E](A,r),O,E);I&&(S={...I,...B(E,I.message)},U(I.message),s&&(D[T]=S))}if(!G(S)&&(D[T]={ref:O,...S},!s))return D}}return U(!0),D},Ce=(e,t)=>[...e,...Z(t)],Re=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Le(e,t,r){return[...e.slice(0,t),...Z(r),...e.slice(t)]}var Te=(e,t,r)=>Array.isArray(e)?(L(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[],Ne=(e,t)=>[...Z(t),...Z(e)];function Vt(e,t){let r=0;const s=[...e];for(const a of t)s.splice(a-r,1),r++;return me(s).length?s:[]}var Oe=(e,t)=>L(t)?[]:Vt(e,Z(t).sort((r,s)=>r-s)),ze=(e,t,r)=>{[e[t],e[r]]=[e[r],e[t]]};function wt(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=L(e)?s++:e[t[s++]];return e}function Et(e){for(const t in e)if(e.hasOwnProperty(t)&&!L(e[t]))return!1;return!0}function z(e,t){const r=Array.isArray(t)?t:je(t)?[t]:wr(t),s=r.length===1?e:wt(e,r),a=r.length-1,o=r[a];return s&&delete s[o],a!==0&&(N(s)&&G(s)||Array.isArray(s)&&Et(s))&&z(e,r.slice(0,-1)),e}var yr=(e,t,r)=>(e[t]=r,e);function Wt(e){const t=mt(),{control:r=t.control,name:s,keyName:a="id",shouldUnregister:o,rules:d}=e,[g,m]=V.useState(r._getFieldArray(s)),F=V.useRef(r._getFieldArray(s).map(ue)),w=V.useRef(g),_=V.useRef(s),K=V.useRef(!1);_.current=s,w.current=g,r._names.array.add(s),d&&r.register(s,d),Er({next:({values:h,name:v})=>{if(v===_.current||!v){const b=y(h,_.current);Array.isArray(b)&&(m(b),F.current=b.map(ue))}},subject:r._subjects.array});const k=V.useCallback(h=>{K.current=!0,r._updateFieldArray(s,h)},[r,s]),$=(h,v)=>{const b=Z(W(h)),R=Ce(r._getFieldArray(s),b);r._names.focus=De(s,R.length-1,v),F.current=Ce(F.current,b.map(ue)),k(R),m(R),r._updateFieldArray(s,R,Ce,{argA:Re(h)})},T=(h,v)=>{const b=Z(W(h)),R=Ne(r._getFieldArray(s),b);r._names.focus=De(s,0,v),F.current=Ne(F.current,b.map(ue)),k(R),m(R),r._updateFieldArray(s,R,Ne,{argA:Re(h)})},M=h=>{const v=Oe(r._getFieldArray(s),h);F.current=Oe(F.current,h),k(v),m(v),!Array.isArray(y(r._fields,s))&&C(r._fields,s,void 0),r._updateFieldArray(s,v,Oe,{argA:h})},X=(h,v,b)=>{const R=Z(W(v)),B=Le(r._getFieldArray(s),h,R);r._names.focus=De(s,h,b),F.current=Le(F.current,h,R.map(ue)),k(B),m(B),r._updateFieldArray(s,B,Le,{argA:h,argB:Re(v)})},A=(h,v)=>{const b=r._getFieldArray(s);ze(b,h,v),ze(F.current,h,v),k(b),m(b),r._updateFieldArray(s,b,ze,{argA:h,argB:v},!1)},O=(h,v)=>{const b=r._getFieldArray(s);Te(b,h,v),Te(F.current,h,v),k(b),m(b),r._updateFieldArray(s,b,Te,{argA:h,argB:v},!1)},U=(h,v)=>{const b=W(v),R=yr(r._getFieldArray(s),h,b);F.current=[...R].map((B,le)=>!B||le===h?ue():F.current[le]),k(R),m([...R]),r._updateFieldArray(s,R,yr,{argA:h,argB:b},!0,!1)},D=h=>{const v=Z(W(h));F.current=v.map(ue),k([...v]),m([...v]),r._updateFieldArray(s,[...v],b=>b,{},!0,!1)};return V.useEffect(()=>{if(r._state.action=!1,Be(s,r._names)&&r._subjects.state.next({...r._formState}),K.current&&(!_e(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([s]).then(h=>{const v=y(h.errors,s),b=y(r._formState.errors,s);(b?!v&&b.type||v&&(b.type!==v.type||b.message!==v.message):v&&v.type)&&(v?C(r._formState.errors,s,v):z(r._formState.errors,s),r._subjects.state.next({errors:r._formState.errors}))});else{const h=y(r._fields,s);h&&h._f&&!(_e(r._options.reValidateMode).isOnSubmit&&_e(r._options.mode).isOnSubmit)&&Pe(h,r._names.disabled,r._formValues,r._options.criteriaMode===Q.all,r._options.shouldUseNativeValidation,!0).then(v=>!G(v)&&r._subjects.state.next({errors:kr(r._formState.errors,v,s)}))}r._subjects.values.next({name:s,values:{...r._formValues}}),r._names.focus&&fe(r._fields,(h,v)=>{if(r._names.focus&&v.startsWith(r._names.focus)&&h.focus)return h.focus(),1}),r._names.focus="",r._updateValid(),K.current=!1},[g,s,r]),V.useEffect(()=>(!y(r._formValues,s)&&r._updateFieldArray(s),()=>{(r._options.shouldUnregister||o)&&r.unregister(s)}),[s,r,a,o]),{swap:V.useCallback(A,[k,s,r]),move:V.useCallback(O,[k,s,r]),prepend:V.useCallback(T,[k,s,r]),append:V.useCallback($,[k,s,r]),remove:V.useCallback(M,[k,s,r]),insert:V.useCallback(X,[k,s,r]),update:V.useCallback(U,[k,s,r]),replace:V.useCallback(D,[k,s,r]),fields:V.useMemo(()=>g.map((h,v)=>({...h,[a]:F.current[v]||ue()})),[g,a])}}var Ie=()=>{let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next&&o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}},He=e=>Y(e)||!Vr(e);function oe(e,t){if(He(e)||He(t))return e===t;if(de(e)&&de(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const o=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const d=t[a];if(de(o)&&de(d)||N(o)&&N(d)||Array.isArray(o)&&Array.isArray(d)?!oe(o,d):o!==d)return!1}}return!0}var Rr=e=>e.type==="select-multiple",kt=e=>qe(e)||be(e),Me=e=>Ae(e)&&e.isConnected,Lr=e=>{for(const t in e)if(se(e[t]))return!0;return!1};function Se(e,t={}){const r=Array.isArray(e);if(N(e)||r)for(const s in e)Array.isArray(e[s])||N(e[s])&&!Lr(e[s])?(t[s]=Array.isArray(e[s])?[]:{},Se(e[s],t[s])):Y(e[s])||(t[s]=!0);return t}function Tr(e,t,r){const s=Array.isArray(e);if(N(e)||s)for(const a in e)Array.isArray(e[a])||N(e[a])&&!Lr(e[a])?L(t)||He(r[a])?r[a]=Array.isArray(e[a])?Se(e[a],[]):{...Se(e[a])}:Tr(e[a],Y(t)?{}:t[a],r[a]):r[a]=!oe(e[a],t[a]);return r}var ve=(e,t)=>Tr(e,t,Se(t)),Nr=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>L(e)?e:t?e===""?NaN:e&&+e:r&&ie(e)?new Date(e):s?s(e):e;function Ue(e){const t=e.ref;return $e(t)?t.files:qe(t)?Cr(e.refs).value:Rr(t)?[...t.selectedOptions].map(({value:r})=>r):be(t)?Dr(e.refs).value:Nr(L(t.value)?e.ref.value:t.value,e)}var Dt=(e,t,r,s)=>{const a={};for(const o of e){const d=y(t,o);d&&C(a,o,d._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},pe=e=>L(e)?e:Fe(e)?e.source:N(e)?Fe(e.value)?e.value.source:e.value:e;const gr="AsyncFunction";var Ct=e=>!!e&&!!e.validate&&!!(se(e.validate)&&e.validate.constructor.name===gr||N(e.validate)&&Object.values(e.validate).find(t=>t.constructor.name===gr)),Rt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function hr(e,t,r){const s=y(e,r);if(s||je(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const o=a.join("."),d=y(t,o),g=y(e,o);if(d&&!Array.isArray(d)&&r!==o)return{name:r};if(g&&g.type)return{name:o,error:g};a.pop()}return{name:r}}var Lt=(e,t,r,s,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:(r?s.isOnChange:a.isOnChange)?e:!0,Tt=(e,t)=>!me(y(e,t)).length&&z(e,t);const Nt={mode:Q.onSubmit,reValidateMode:Q.onChange,shouldFocusError:!0};function Ot(e={}){let t={...Nt,...e},r={submitCount:0,isDirty:!1,isLoading:se(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},s={},a=N(t.defaultValues)||N(t.values)?W(t.defaultValues||t.values)||{}:{},o=t.shouldUnregister?{}:W(a),d={action:!1,mount:!1,watch:!1},g={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},m,F=0;const w={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:Ie(),array:Ie(),state:Ie()},K=_e(t.mode),k=_e(t.reValidateMode),$=t.criteriaMode===Q.all,T=i=>n=>{clearTimeout(F),F=setTimeout(i,n)},M=async i=>{if(!t.disabled&&(w.isValid||i)){const n=t.resolver?G((await b()).errors):await B(s,!0);n!==r.isValid&&_.state.next({isValid:n})}},X=(i,n)=>{!t.disabled&&(w.isValidating||w.validatingFields)&&((i||Array.from(g.mount)).forEach(u=>{u&&(n?C(r.validatingFields,u,n):z(r.validatingFields,u))}),_.state.next({validatingFields:r.validatingFields,isValidating:!G(r.validatingFields)}))},A=(i,n=[],u,f,c=!0,l=!0)=>{if(f&&u&&!t.disabled){if(d.action=!0,l&&Array.isArray(y(s,i))){const p=u(y(s,i),f.argA,f.argB);c&&C(s,i,p)}if(l&&Array.isArray(y(r.errors,i))){const p=u(y(r.errors,i),f.argA,f.argB);c&&C(r.errors,i,p),Tt(r.errors,i)}if(w.touchedFields&&l&&Array.isArray(y(r.touchedFields,i))){const p=u(y(r.touchedFields,i),f.argA,f.argB);c&&C(r.touchedFields,i,p)}w.dirtyFields&&(r.dirtyFields=ve(a,o)),_.state.next({name:i,isDirty:S(i,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else C(o,i,n)},O=(i,n)=>{C(r.errors,i,n),_.state.next({errors:r.errors})},U=i=>{r.errors=i,_.state.next({errors:r.errors,isValid:!1})},D=(i,n,u,f)=>{const c=y(s,i);if(c){const l=y(o,i,L(u)?y(a,i):u);L(l)||f&&f.defaultChecked||n?C(o,i,n?l:Ue(c._f)):j(i,l),d.mount&&M()}},h=(i,n,u,f,c)=>{let l=!1,p=!1;const x={name:i};if(!t.disabled){const P=!!(y(s,i)&&y(s,i)._f&&y(s,i)._f.disabled);if(!u||f){w.isDirty&&(p=r.isDirty,r.isDirty=x.isDirty=S(),l=p!==x.isDirty);const H=P||oe(y(a,i),n);p=!!(!P&&y(r.dirtyFields,i)),H||P?z(r.dirtyFields,i):C(r.dirtyFields,i,!0),x.dirtyFields=r.dirtyFields,l=l||w.dirtyFields&&p!==!H}if(u){const H=y(r.touchedFields,i);H||(C(r.touchedFields,i,u),x.touchedFields=r.touchedFields,l=l||w.touchedFields&&H!==u)}l&&c&&_.state.next(x)}return l?x:{}},v=(i,n,u,f)=>{const c=y(r.errors,i),l=w.isValid&&te(n)&&r.isValid!==n;if(t.delayError&&u?(m=T(()=>O(i,u)),m(t.delayError)):(clearTimeout(F),m=null,u?C(r.errors,i,u):z(r.errors,i)),(u?!oe(c,u):c)||!G(f)||l){const p={...f,...l&&te(n)?{isValid:n}:{},errors:r.errors,name:i};r={...r,...p},_.state.next(p)}},b=async i=>{X(i,!0);const n=await t.resolver(o,t.context,Dt(i||g.mount,s,t.criteriaMode,t.shouldUseNativeValidation));return X(i),n},R=async i=>{const{errors:n}=await b(i);if(i)for(const u of i){const f=y(n,u);f?C(r.errors,u,f):z(r.errors,u)}else r.errors=n;return n},B=async(i,n,u={valid:!0})=>{for(const f in i){const c=i[f];if(c){const{_f:l,...p}=c;if(l){const x=g.array.has(l.name),P=c._f&&Ct(c._f);P&&w.validatingFields&&X([f],!0);const H=await Pe(c,g.disabled,o,$,t.shouldUseNativeValidation&&!n,x);if(P&&w.validatingFields&&X([f]),H[l.name]&&(u.valid=!1,n))break;!n&&(y(H,l.name)?x?kr(r.errors,H,l.name):C(r.errors,l.name,H[l.name]):z(r.errors,l.name))}!G(p)&&await B(p,n,u)}}return u.valid},le=()=>{for(const i of g.unMount){const n=y(s,i);n&&(n._f.refs?n._f.refs.every(u=>!Me(u)):!Me(n._f.ref))&&Ve(i)}g.unMount=new Set},S=(i,n)=>!t.disabled&&(i&&n&&C(o,i,n),!oe(Ge(),a)),E=(i,n,u)=>Ft(i,g,{...d.mount?o:L(n)?a:ie(i)?{[i]:n}:n},u,n),I=i=>me(y(d.mount?o:a,i,t.shouldUnregister?y(a,i,[]):[])),j=(i,n,u={})=>{const f=y(s,i);let c=n;if(f){const l=f._f;l&&(!l.disabled&&C(o,i,Nr(n,l)),c=Ae(l.ref)&&Y(n)?"":n,Rr(l.ref)?[...l.ref.options].forEach(p=>p.selected=c.includes(p.value)):l.refs?be(l.ref)?l.refs.length>1?l.refs.forEach(p=>(!p.defaultChecked||!p.disabled)&&(p.checked=Array.isArray(c)?!!c.find(x=>x===p.value):c===p.value)):l.refs[0]&&(l.refs[0].checked=!!c):l.refs.forEach(p=>p.checked=p.value===c):$e(l.ref)?l.ref.value="":(l.ref.value=c,l.ref.type||_.values.next({name:i,values:{...o}})))}(u.shouldDirty||u.shouldTouch)&&h(i,c,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&he(i)},ee=(i,n,u)=>{for(const f in n){const c=n[f],l=`${i}.${f}`,p=y(s,l);(g.array.has(i)||N(c)||p&&!p._f)&&!de(c)?ee(l,c,u):j(l,c,u)}},J=(i,n,u={})=>{const f=y(s,i),c=g.array.has(i),l=W(n);C(o,i,l),c?(_.array.next({name:i,values:{...o}}),(w.isDirty||w.dirtyFields)&&u.shouldDirty&&_.state.next({name:i,dirtyFields:ve(a,o),isDirty:S(i,l)})):f&&!f._f&&!Y(l)?ee(i,l,u):j(i,l,u),Be(i,g)&&_.state.next({...r}),_.values.next({name:d.mount?i:void 0,values:{...o}})},ye=async i=>{d.mount=!0;const n=i.target;let u=n.name,f=!0;const c=y(s,u),l=()=>n.type?Ue(c._f):ht(i),p=x=>{f=Number.isNaN(x)||de(x)&&isNaN(x.getTime())||oe(x,y(o,u,x))};if(c){let x,P;const H=l(),ae=i.type===or.BLUR||i.type===or.FOCUS_OUT,Ur=!Rt(c._f)&&!t.resolver&&!y(r.errors,u)&&!c._f.deps||Lt(ae,y(r.touchedFields,u),r.isSubmitted,k,K),Ee=Be(u,g,ae);C(o,u,H),ae?(c._f.onBlur&&c._f.onBlur(i),m&&m(0)):c._f.onChange&&c._f.onChange(i);const ke=h(u,H,ae,!1),Br=!G(ke)||Ee;if(!ae&&_.values.next({name:u,type:i.type,values:{...o}}),Ur)return w.isValid&&(t.mode==="onBlur"&&ae?M():ae||M()),Br&&_.state.next({name:u,...Ee?{}:ke});if(!ae&&Ee&&_.state.next({...r}),t.resolver){const{errors:rr}=await b([u]);if(p(H),f){const Pr=hr(r.errors,s,u),tr=hr(rr,s,Pr.name||u);x=tr.error,u=tr.name,P=G(rr)}}else X([u],!0),x=(await Pe(c,g.disabled,o,$,t.shouldUseNativeValidation))[u],X([u]),p(H),f&&(x?P=!1:w.isValid&&(P=await B(s,!0)));f&&(c._f.deps&&he(c._f.deps),v(u,P,x,ke))}},ge=(i,n)=>{if(y(r.errors,n)&&i.focus)return i.focus(),1},he=async(i,n={})=>{let u,f;const c=Z(i);if(t.resolver){const l=await R(L(i)?i:c);u=G(l),f=i?!c.some(p=>y(l,p)):u}else i?(f=(await Promise.all(c.map(async l=>{const p=y(s,l);return await B(p&&p._f?{[l]:p}:p)}))).every(Boolean),!(!f&&!r.isValid)&&M()):f=u=await B(s);return _.state.next({...!ie(i)||w.isValid&&u!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:u}:{},errors:r.errors}),n.shouldFocus&&!f&&fe(s,ge,i?c:g.mount),f},Ge=i=>{const n={...d.mount?o:a};return L(i)?n:ie(i)?y(n,i):i.map(u=>y(n,u))},Ye=(i,n)=>({invalid:!!y((n||r).errors,i),isDirty:!!y((n||r).dirtyFields,i),error:y((n||r).errors,i),isValidating:!!y(r.validatingFields,i),isTouched:!!y((n||r).touchedFields,i)}),Or=i=>{i&&Z(i).forEach(n=>z(r.errors,n)),_.state.next({errors:i?r.errors:{}})},Ke=(i,n,u)=>{const f=(y(s,i,{_f:{}})._f||{}).ref,c=y(r.errors,i)||{},{ref:l,message:p,type:x,...P}=c;C(r.errors,i,{...P,...n,ref:f}),_.state.next({name:i,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&f&&f.focus&&f.focus()},zr=(i,n)=>se(i)?_.values.subscribe({next:u=>i(E(void 0,n),u)}):E(i,n,!0),Ve=(i,n={})=>{for(const u of i?Z(i):g.mount)g.mount.delete(u),g.array.delete(u),n.keepValue||(z(s,u),z(o,u)),!n.keepError&&z(r.errors,u),!n.keepDirty&&z(r.dirtyFields,u),!n.keepTouched&&z(r.touchedFields,u),!n.keepIsValidating&&z(r.validatingFields,u),!t.shouldUnregister&&!n.keepDefaultValue&&z(a,u);_.values.next({values:{...o}}),_.state.next({...r,...n.keepDirty?{isDirty:S()}:{}}),!n.keepIsValid&&M()},Xe=({disabled:i,name:n,field:u,fields:f})=>{(te(i)&&d.mount||i||g.disabled.has(n))&&(i?g.disabled.add(n):g.disabled.delete(n),h(n,Ue(u?u._f:y(f,n)._f),!1,!1,!0))},we=(i,n={})=>{let u=y(s,i);const f=te(n.disabled)||te(t.disabled);return C(s,i,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:i}},name:i,mount:!0,...n}}),g.mount.add(i),u?Xe({field:u,disabled:te(n.disabled)?n.disabled:t.disabled,name:i}):D(i,!0,n.value),{...f?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:pe(n.min),max:pe(n.max),minLength:pe(n.minLength),maxLength:pe(n.maxLength),pattern:pe(n.pattern)}:{},name:i,onChange:ye,onBlur:ye,ref:c=>{if(c){we(i,n),u=y(s,i);const l=L(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,p=kt(l),x=u._f.refs||[];if(p?x.find(P=>P===l):l===u._f.ref)return;C(s,i,{_f:{...u._f,...p?{refs:[...x.filter(Me),l,...Array.isArray(y(a,i))?[{}]:[]],ref:{type:l.type,name:i}}:{ref:l}}}),D(i,!1,void 0,l)}else u=y(s,i,{}),u._f&&(u._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(pt(g.array,i)&&d.action)&&g.unMount.add(i)}}},Ze=()=>t.shouldFocusError&&fe(s,ge,g.mount),Ir=i=>{te(i)&&(_.state.next({disabled:i}),fe(s,(n,u)=>{const f=y(s,u);f&&(n.disabled=f._f.disabled||i,Array.isArray(f._f.refs)&&f._f.refs.forEach(c=>{c.disabled=f._f.disabled||i}))},0,!1))},Je=(i,n)=>async u=>{let f;u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let c=W(o);if(g.disabled.size)for(const l of g.disabled)C(c,l,void 0);if(_.state.next({isSubmitting:!0}),t.resolver){const{errors:l,values:p}=await b();r.errors=l,c=p}else await B(s);if(z(r.errors,"root"),G(r.errors)){_.state.next({errors:{}});try{await i(c,u)}catch(l){f=l}}else n&&await n({...r.errors},u),Ze(),setTimeout(Ze);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:G(r.errors)&&!f,submitCount:r.submitCount+1,errors:r.errors}),f)throw f},Mr=(i,n={})=>{y(s,i)&&(L(n.defaultValue)?J(i,W(y(a,i))):(J(i,n.defaultValue),C(a,i,W(n.defaultValue))),n.keepTouched||z(r.touchedFields,i),n.keepDirty||(z(r.dirtyFields,i),r.isDirty=n.defaultValue?S(i,W(y(a,i))):S()),n.keepError||(z(r.errors,i),w.isValid&&M()),_.state.next({...r}))},Qe=(i,n={})=>{const u=i?W(i):a,f=W(u),c=G(i),l=c?a:f;if(n.keepDefaultValues||(a=u),!n.keepValues){if(n.keepDirtyValues){const p=new Set([...g.mount,...Object.keys(ve(a,o))]);for(const x of Array.from(p))y(r.dirtyFields,x)?C(l,x,y(o,x)):J(x,y(l,x))}else{if(We&&L(i))for(const p of g.mount){const x=y(s,p);if(x&&x._f){const P=Array.isArray(x._f.refs)?x._f.refs[0]:x._f.ref;if(Ae(P)){const H=P.closest("form");if(H){H.reset();break}}}}s={}}o=t.shouldUnregister?n.keepDefaultValues?W(a):{}:W(l),_.array.next({values:{...l}}),_.values.next({values:{...l}})}g={mount:n.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!w.isValid||!!n.keepIsValid||!!n.keepDirtyValues,d.watch=!!t.shouldUnregister,_.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:c?!1:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!oe(i,a)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:n.keepDirtyValues?n.keepDefaultValues&&o?ve(a,o):r.dirtyFields:n.keepDefaultValues&&i?ve(a,i):n.keepDirty?r.dirtyFields:{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitSuccessful:n.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},er=(i,n)=>Qe(se(i)?i(o):i,n);return{control:{register:we,unregister:Ve,getFieldState:Ye,handleSubmit:Je,setError:Ke,_executeSchema:b,_getWatch:E,_getDirty:S,_updateValid:M,_removeUnmounted:le,_updateFieldArray:A,_updateDisabledField:Xe,_getFieldArray:I,_reset:Qe,_resetDefaultValues:()=>se(t.defaultValues)&&t.defaultValues().then(i=>{er(i,t.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:i=>{r={...r,...i}},_disableForm:Ir,_subjects:_,_proxyFormState:w,_setErrors:U,get _fields(){return s},get _formValues(){return o},get _state(){return d},set _state(i){d=i},get _defaultValues(){return a},get _names(){return g},set _names(i){g=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:he,register:we,handleSubmit:Je,watch:zr,setValue:J,getValues:Ge,reset:er,resetField:Mr,clearErrors:Or,unregister:Ve,setError:Ke,setFocus:(i,n={})=>{const u=y(s,i),f=u&&u._f;if(f){const c=f.refs?f.refs[0]:f.ref;c.focus&&(c.focus(),n.shouldSelect&&se(c.select)&&c.select())}},getFieldState:Ye}}function jt(e={}){const t=V.useRef(void 0),r=V.useRef(void 0),[s,a]=V.useState({isDirty:!1,isValidating:!1,isLoading:se(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:se(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ot(e),formState:s});const o=t.current.control;return o._options=e,Er({subject:o._subjects.state,next:d=>{At(d,o._proxyFormState,o._updateFormState)&&a({...o._formState})}}),V.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),V.useEffect(()=>{if(o._proxyFormState.isDirty){const d=o._getDirty();d!==s.isDirty&&o._subjects.state.next({isDirty:d})}},[o,s.isDirty]),V.useEffect(()=>{e.values&&!oe(e.values,r.current)?(o._reset(e.values,o._options.resetOptions),r.current=e.values,a(d=>({...d}))):o._resetDefaultValues()},[e.values,o]),V.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),V.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),V.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),t.current.formState=xt(s,o),t.current}export{Ar as G,Sr as T,jt as a,Wt as b,Pt as g,Ht as u};
