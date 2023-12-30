"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[830],{4830:(e,t,i)=>{i.r(t),i.d(t,{default:()=>oe});var a=i(7689),n=i(3643),o=i(5569),r=i(2791),l=i(697),s=i(3366),c=i(7462),d=i(3733),h=i(4419),p=i(2065),u=i(4036),m=i(7630),g=i(5158),v=i(2930),f=i(9658),x=i(5878),b=i(1217);function Z(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,x.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var w=i(184);const S=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],k=(0,m.ZP)(f.Z)((e=>{let{ownerState:t}=e;return(0,c.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),y=(0,m.ZP)("input",{shouldForwardProp:m.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=r.forwardRef((function(e,t){const{autoFocus:i,checked:a,checkedIcon:n,className:o,defaultChecked:r,disabled:l,disableFocusRipple:p=!1,edge:m=!1,icon:f,id:x,inputProps:b,inputRef:j,name:C,onBlur:z,onChange:R,onFocus:I,readOnly:P,required:F=!1,tabIndex:E,type:L,value:B}=e,M=(0,s.Z)(e,S),[T,A]=(0,g.Z)({controlled:a,default:Boolean(r),name:"SwitchBase",state:"checked"}),N=(0,v.Z)();let _=l;N&&"undefined"===typeof _&&(_=N.disabled);const H="checkbox"===L||"radio"===L,O=(0,c.Z)({},e,{checked:T,disabled:_,disableFocusRipple:p,edge:m}),D=(e=>{const{classes:t,checked:i,disabled:a,edge:n}=e,o={root:["root",i&&"checked",a&&"disabled",n&&"edge".concat((0,u.Z)(n))],input:["input"]};return(0,h.Z)(o,Z,t)})(O);return(0,w.jsxs)(k,(0,c.Z)({component:"span",className:(0,d.Z)(D.root,o),centerRipple:!0,focusRipple:!p,disabled:_,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),N&&N.onFocus&&N.onFocus(e)},onBlur:e=>{z&&z(e),N&&N.onBlur&&N.onBlur(e)},ownerState:O,ref:t},M,{children:[(0,w.jsx)(y,(0,c.Z)({autoFocus:i,checked:a,defaultChecked:r,className:D.input,disabled:_,id:H?x:void 0,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;A(t),R&&R(e,t)},readOnly:P,ref:j,required:F,ownerState:O,tabIndex:E,type:L},"checkbox"===L&&void 0===B?{}:{value:B},b)),T?n:f]}))}));var C=i(9201);const z=(0,C.Z)((0,w.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),R=(0,C.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),I=(0,C.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var P=i(1046);function F(e){return(0,b.Z)("MuiCheckbox",e)}const E=(0,x.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],B=(0,m.ZP)(j,{shouldForwardProp:e=>(0,m.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.indeterminate&&t.indeterminate,t["size".concat((0,u.Z)(i.size))],"default"!==i.color&&t["color".concat((0,u.Z)(i.color))]]}})((e=>{let{theme:t,ownerState:i}=e;return(0,c.Z)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,p.Fq)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{["&.".concat(E.checked,", &.").concat(E.indeterminate)]:{color:(t.vars||t).palette[i.color].main},["&.".concat(E.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),M=(0,w.jsx)(R,{}),T=(0,w.jsx)(z,{}),A=(0,w.jsx)(I,{}),N=r.forwardRef((function(e,t){var i,a;const n=(0,P.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:o=M,color:l="primary",icon:p=T,indeterminate:m=!1,indeterminateIcon:g=A,inputProps:v,size:f="medium",className:x}=n,b=(0,s.Z)(n,L),Z=m?g:p,S=m?g:o,k=(0,c.Z)({},n,{color:l,indeterminate:m,size:f}),y=(e=>{const{classes:t,indeterminate:i,color:a,size:n}=e,o={root:["root",i&&"indeterminate","color".concat((0,u.Z)(a)),"size".concat((0,u.Z)(n))]},r=(0,h.Z)(o,F,t);return(0,c.Z)({},t,r)})(k);return(0,w.jsx)(B,(0,c.Z)({type:"checkbox",inputProps:(0,c.Z)({"data-indeterminate":m},v),icon:r.cloneElement(Z,{fontSize:null!=(i=Z.props.fontSize)?i:f}),checkedIcon:r.cloneElement(S,{fontSize:null!=(a=S.props.fontSize)?a:f}),ownerState:k,ref:t,className:(0,d.Z)(y.root,x)},b,{classes:y}))}));var _=i(493),H=i(4220),O=i(890);const D=(0,C.Z)((0,w.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),V=(0,C.Z)((0,w.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");var W=i(5806);const Y=(0,m.ZP)(l.Z)({padding:"0 0 0 10px",background:"#f2f6fc",display:"flex",alignItems:"center",cursor:"pointer","& > div":{display:"flex",width:"100%","& > p":{fontSize:14}}}),q=(0,m.ZP)(O.Z)({fontSize:"12px !important",background:"#ddd",color:"#222",padding:"0 4px",borderRadius:4,marginRight:6}),G=(0,m.ZP)(O.Z)({marginLeft:"auto",marginRight:20,fontSize:12,color:"#5F6368"}),J=e=>{let{email:t,selectedEmails:i,setRefreshScreen:r,setSelectedEmails:s}=e;const c=(0,a.s0)(),d=(0,o.Z)(n.Y.toggleStarredEmail),h=()=>{d.call({id:t._id,value:!t.starred}),r((e=>!e))};return(0,w.jsxs)(Y,{children:[(0,w.jsx)(N,{size:"small",checked:i.includes(t._id),onChange:()=>{i.includes(t._id)?s((e=>e.filter((e=>e!=t._id)))):s((e=>[...e,t._id]))}}),t.starred?(0,w.jsx)(D,{fontSize:"small",style:{marginRight:10,color:"#FFF200"},onClick:()=>h()}):(0,w.jsx)(V,{fontSize:"small",style:{marginRight:10},onClick:()=>h()}),(0,w.jsxs)(l.Z,{onClick:()=>c(W._.view.path,{state:{email:t}}),children:[(0,w.jsx)(O.Z,{style:{width:200,overflow:"hidden"},children:t.name}),(0,w.jsx)(q,{children:"Inbox"}),(0,w.jsxs)(O.Z,{children:[t.subject," ",t.body&&"-"," ",t.body]}),(0,w.jsxs)(G,{children:[new window.Date(t.date).getDate(),"\xa0",new window.Date(t.date).toLocaleString("default",{month:"long"})]})]})]})};function U(e){return(0,b.Z)("MuiDivider",e)}(0,x.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const K=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Q=(0,m.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.absolute&&t.absolute,t[i.variant],i.light&&t.light,"vertical"===i.orientation&&t.vertical,i.flexItem&&t.flexItem,i.children&&t.withChildren,i.children&&"vertical"===i.orientation&&t.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:i}=e;return(0,c.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,p.Fq)(t.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,c.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,c.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:i}=e;return(0,c.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,c.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),X=(0,m.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.wrapper,"vertical"===i.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:i}=e;return(0,c.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),$=r.forwardRef((function(e,t){const i=(0,P.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:n,className:o,component:r=(n?"div":"hr"),flexItem:l=!1,light:p=!1,orientation:u="horizontal",role:m=("hr"!==r?"separator":void 0),textAlign:g="center",variant:v="fullWidth"}=i,f=(0,s.Z)(i,K),x=(0,c.Z)({},i,{absolute:a,component:r,flexItem:l,light:p,orientation:u,role:m,textAlign:g,variant:v}),b=(e=>{const{absolute:t,children:i,classes:a,flexItem:n,light:o,orientation:r,textAlign:l,variant:s}=e,c={root:["root",t&&"absolute",s,o&&"light","vertical"===r&&"vertical",n&&"flexItem",i&&"withChildren",i&&"vertical"===r&&"withChildrenVertical","right"===l&&"vertical"!==r&&"textAlignRight","left"===l&&"vertical"!==r&&"textAlignLeft"],wrapper:["wrapper","vertical"===r&&"wrapperVertical"]};return(0,h.Z)(c,U,a)})(x);return(0,w.jsx)(Q,(0,c.Z)({as:r,className:(0,d.Z)(b.root,o),role:m,ref:t,ownerState:x},f,{children:n?(0,w.jsx)(X,{className:b.wrapper,ownerState:x,children:n}):null}))}));$.muiSkipListHighlight=!0;const ee=$,te=(0,m.ZP)(l.Z)({display:"flex",alignItems:"center",flexDirection:"column",marginTop:50,opacity:".8",width:"100%"}),ie=(0,m.ZP)(ee)({width:"100%",marginTop:10}),ae=e=>{let{message:t}=e;return(0,w.jsxs)(te,{children:[(0,w.jsx)(O.Z,{children:t.heading}),(0,w.jsx)(O.Z,{children:t.subHeading}),(0,w.jsx)(ie,{})]})};var ne=i(6148);const oe=()=>{var e,t;const[i,s]=(0,r.useState)([]),[c,d]=(0,r.useState)(!1),{type:h}=(0,a.UO)(),p=(0,o.Z)(n.Y.getEmailFromType),u=(0,o.Z)(n.Y.moveEmailsToBin),m=(0,o.Z)(n.Y.deleteEmail);(0,r.useEffect)((()=>{p.call({},h)}),[h,c]);return(0,w.jsxs)(l.Z,{children:[(0,w.jsxs)(l.Z,{style:{padding:"20px 10px 0 10px",display:"flex",alignItems:"center"},children:[(0,w.jsx)(N,{size:"small",onChange:e=>(e=>{if(e.target.checked){var t;const e=null===p||void 0===p||null===(t=p.response)||void 0===t?void 0:t.map((e=>e._id));s(e)}else s([])})(e)}),(0,w.jsx)(H.Z,{onClick:()=>("bin"===h?m.call(i):u.call(i),void d((e=>!e)))})]}),(0,w.jsx)(_.Z,{children:null===p||void 0===p||null===(e=p.response)||void 0===e?void 0:e.map((e=>(0,w.jsx)(J,{email:e,selectedEmails:i,setRefreshScreen:d,setSelectedEmails:s},e._id)))}),0===(null===p||void 0===p||null===(t=p.response)||void 0===t?void 0:t.length)&&(0,w.jsx)(ae,{message:ne.Fr[h]})]})}},6148:(e,t,i)=>{i.d(t,{Fr:()=>o,Pv:()=>a,RJ:()=>n});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",n="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",o={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""},allmail:{heading:"No mails",subHeading:""}}},5569:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(5294);const n=async(e,t,i)=>await(0,a.Z)({method:e.method,url:"".concat("","/").concat(e.endpoint,"/").concat(i),data:t});var o=i(2791);const r=e=>{const[t,i]=(0,o.useState)(null),[a,r]=(0,o.useState)(""),[l,s]=(0,o.useState)(!1);return{call:async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";i(null),r(""),s(!0);try{let o=await n(e,t,a);i(o.data)}catch(o){r(o.message)}finally{s(!1)}},response:t,error:a,isLoading:l}}},3643:(e,t,i)=>{i.d(t,{Y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailsToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmail:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=830.2d5919f3.chunk.js.map