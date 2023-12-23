(function(){"use strict";var e={8685:function(e,t,n){var s={};n.r(s),n.d(s,{close:function(){return We},fork:function(){return Ve},home:function(){return ae},left:function(){return Xe},logo:function(){return ee},signout:function(){return he},star:function(){return xe},triangle:function(){return Le}});var r=n(9242),i=n(3396);function o(e,t,n,s,r,o){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var a={name:"App"},c=n(89);const l=(0,c.Z)(a,[["render",o]]);var d=l,u=n(2483);function p(e,t,n,s,r,o){const a=(0,i.up)("feeds",!0);return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a)])}n(560);var m=n(7139);const h=e=>((0,i.dD)("data-v-6facf02f"),e=e(),(0,i.Cn)(),e),v={class:"topline"},g={class:"stories"},C={key:0,class:"loading"},f={class:"title"},w={class:"text"},_={class:"actions"},L={class:"actions-wrapper"},S={class:"actions-btn"},y=h((()=>(0,i._)("span",{class:"actions-btn__text"},"Star",-1))),D={class:"actions-count"},A={class:"actions-wrapper"},k={class:"actions-btn"},b=h((()=>(0,i._)("span",{class:"actions-btn__text"},"Fork",-1))),x={class:"actions-count"};function I(e,t,n,s,r,o){const a=(0,i.up)("logo"),c=(0,i.up)("user-actions"),l=(0,i.up)("story-user-item"),d=(0,i.up)("topline"),u=(0,i.up)("icon"),p=(0,i.up)("feed");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",v,[(0,i.Wm)(d,null,{headline:(0,i.w5)((()=>[(0,i.Wm)(a),(0,i.Wm)(c)])),content:(0,i.w5)((()=>[(0,i._)("ul",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.trendings,(({id:t,owner:n})=>((0,i.wg)(),(0,i.iD)("li",{class:"stories-item",key:t},[(0,i.Wm)(l,{avatar:n.avatar_url,username:n.login,onOnPress:n=>e.$router.push({name:"storiesSlide",params:{initialSlide:t}})},null,8,["avatar","username","onOnPress"])])))),128))])])),_:1})]),e.isLoading?((0,i.wg)(),(0,i.iD)("div",C,"Loading...")):((0,i.wg)(!0),(0,i.iD)(i.HY,{key:1},(0,i.Ko)(e.trendings,(e=>((0,i.wg)(),(0,i.j4)(p,{key:e.id,class:"feed",item:e,commentsUrl:e.comments_url,publicDate:e.updated_at},{repo:(0,i.w5)((()=>[(0,i._)("h3",f,(0,m.zw)(e.name),1),(0,i._)("p",w,(0,m.zw)(e.description),1),(0,i._)("div",_,[(0,i._)("div",L,[(0,i._)("button",S,[(0,i.Wm)(u,{name:"star"}),y]),(0,i._)("div",D,(0,m.zw)(e.stargazers_count),1)]),(0,i._)("div",A,[(0,i._)("button",k,[(0,i.Wm)(u,{name:"fork"}),b]),(0,i._)("div",x,(0,m.zw)(e.forks_count),1)])])])),_:2},1032,["item","commentsUrl","publicDate"])))),128))])}const T={class:"topline"},O={class:"g-container"},Z={class:"headline"},H={key:0,class:"content"};function M(e,t){return(0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("div",O,[(0,i._)("div",Z,[(0,i.WI)(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?((0,i.wg)(),(0,i.iD)("div",H,[(0,i.WI)(e.$slots,"content",{},void 0,!0)])):(0,i.kq)("",!0)])])}const V={},E=(0,c.Z)(V,[["render",M],["__scopeId","data-v-a3a61fac"]]);var N=E,P="data:image/png;base64,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";const R=e=>((0,i.dD)("data-v-2b7808a3"),e=e(),(0,i.Cn)(),e),j={class:"list"},F={class:"list-item"},W={class:"btn",title:"Home"},B=R((()=>(0,i._)("li",{class:"list-item"},[(0,i._)("button",{class:"btn",title:"Profile"},[(0,i._)("img",{src:P,alt:"Avatar"})])],-1))),U={class:"list-item"},q={class:"btn",title:"Sign-out"};function G(e,t,n,s,r,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("ul",j,[(0,i._)("li",F,[(0,i._)("button",W,[(0,i.Wm)(a,{class:"icon",name:"home"})])]),B,(0,i._)("li",U,[(0,i._)("button",q,[(0,i.Wm)(a,{class:"icon",name:"signout"})])])])}function K(e,t,n,s,r,o){return(0,i.wg)(),(0,i.j4)((0,i.LL)(n.name))}const z={width:"175",height:"41",viewBox:"0 0 175 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=(0,i.uE)('<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="currentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="currentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="currentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="currentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="currentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="currentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="currentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="currentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="currentColor"></path>',9),Q=[X];function Y(e,t){return(0,i.wg)(),(0,i.iD)("svg",z,Q)}const J={},$=(0,c.Z)(J,[["render",Y]]);var ee=$;const te={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=(0,i._)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),se=[ne];function re(e,t){return(0,i.wg)(),(0,i.iD)("svg",te,se)}const ie={},oe=(0,c.Z)(ie,[["render",re]]);var ae=oe;const ce={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},le=(0,i._)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),de=[le];function ue(e,t){return(0,i.wg)(),(0,i.iD)("svg",ce,de)}const pe={},me=(0,c.Z)(pe,[["render",ue]]);var he=me;const ve={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge=(0,i._)("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"#212121"},null,-1),Ce=[ge];function fe(e,t){return(0,i.wg)(),(0,i.iD)("svg",ve,Ce)}const we={},_e=(0,c.Z)(we,[["render",fe]]);var Le=_e;const Se={width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ye=(0,i._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 1.25C8.14006 1.24991 8.2773 1.28901 8.39624 1.36289C8.51518 1.43676 8.61106 1.54245 8.67304 1.668L10.555 5.483L14.765 6.095C14.9035 6.11511 15.0336 6.17355 15.1405 6.26372C15.2475 6.35388 15.3272 6.47218 15.3704 6.60523C15.4137 6.73829 15.4189 6.8808 15.3854 7.01665C15.352 7.1525 15.2812 7.27628 15.181 7.374L12.135 10.344L12.854 14.536C12.8777 14.6739 12.8624 14.8157 12.8097 14.9454C12.757 15.0751 12.6691 15.1874 12.5559 15.2697C12.4427 15.352 12.3087 15.401 12.1691 15.4111C12.0295 15.4212 11.8899 15.3921 11.766 15.327L8.00004 13.347L4.23404 15.327C4.11023 15.392 3.97071 15.4211 3.83123 15.411C3.69176 15.4009 3.55788 15.352 3.44472 15.2699C3.33157 15.1877 3.24363 15.0755 3.19086 14.946C3.13808 14.8165 3.12255 14.6749 3.14604 14.537L3.86604 10.343L0.818042 7.374C0.717608 7.27632 0.646541 7.15247 0.612894 7.01647C0.579246 6.88047 0.584364 6.73777 0.627666 6.60453C0.670969 6.47129 0.750725 6.35284 0.857898 6.26261C0.96507 6.17238 1.09537 6.11397 1.23404 6.094L5.44404 5.483L7.32704 1.668C7.38902 1.54245 7.48491 1.43676 7.60385 1.36289C7.72279 1.28901 7.86003 1.24991 8.00004 1.25ZM8.00004 3.695L6.61504 6.5C6.56126 6.6089 6.48183 6.70311 6.38359 6.77453C6.28534 6.84595 6.17122 6.89244 6.05104 6.91L2.95404 7.36L5.19404 9.544C5.28119 9.62886 5.3464 9.73365 5.38403 9.84933C5.42166 9.96501 5.43059 10.0881 5.41004 10.208L4.88204 13.292L7.65104 11.836C7.75867 11.7794 7.87845 11.7499 8.00004 11.7499C8.12164 11.7499 8.24141 11.7794 8.34904 11.836L11.119 13.292L10.589 10.208C10.5685 10.0881 10.5774 9.96501 10.615 9.84933C10.6527 9.73365 10.7179 9.62886 10.805 9.544L13.045 7.361L9.94904 6.911C9.82886 6.89344 9.71474 6.84695 9.6165 6.77553C9.51825 6.70411 9.43883 6.6099 9.38504 6.501L8.00004 3.694V3.695Z",fill:"#586069"},null,-1),De=[ye];function Ae(e,t){return(0,i.wg)(),(0,i.iD)("svg",Se,De)}const ke={},be=(0,c.Z)(ke,[["render",Ae]]);var xe=be;const Ie={width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=(0,i._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 4.25001C5 4.44892 4.92099 4.63969 4.78033 4.78034C4.63968 4.92099 4.44892 5.00001 4.25 5.00001C4.05109 5.00001 3.86033 4.92099 3.71967 4.78034C3.57902 4.63969 3.5 4.44892 3.5 4.25001C3.5 4.05109 3.57902 3.86033 3.71967 3.71968C3.86033 3.57902 4.05109 3.50001 4.25 3.50001C4.44892 3.50001 4.63968 3.57902 4.78033 3.71968C4.92099 3.86033 5 4.05109 5 4.25001ZM5 6.37201C5.50042 6.19509 5.92217 5.84696 6.19073 5.38915C6.45929 4.93134 6.55735 4.39333 6.4676 3.87021C6.37785 3.34709 6.10605 2.87253 5.70025 2.53043C5.29445 2.18832 4.78077 2.00069 4.25 2.00069C3.71924 2.00069 3.20556 2.18832 2.79976 2.53043C2.39396 2.87253 2.12216 3.34709 2.03241 3.87021C1.94265 4.39333 2.04072 4.93134 2.30928 5.38915C2.57784 5.84696 2.99959 6.19509 3.5 6.37201V7.25001C3.5 7.84674 3.73706 8.41904 4.15901 8.841C4.58097 9.26295 5.15327 9.50001 5.75 9.50001H7.25V11.628C6.74932 11.8049 6.3273 12.1532 6.05855 12.6112C5.78981 13.0692 5.69164 13.6075 5.78139 14.1309C5.87115 14.6543 6.14306 15.1291 6.54905 15.4714C6.95504 15.8136 7.46897 16.0014 8 16.0014C8.53104 16.0014 9.04497 15.8136 9.45096 15.4714C9.85695 15.1291 10.1289 14.6543 10.2186 14.1309C10.3084 13.6075 10.2102 13.0692 9.94146 12.6112C9.67271 12.1532 9.25069 11.8049 8.75 11.628V9.50001H10.25C10.8467 9.50001 11.419 9.26295 11.841 8.841C12.263 8.41904 12.5 7.84674 12.5 7.25001V6.37201C13.0004 6.19509 13.4222 5.84696 13.6907 5.38915C13.9593 4.93134 14.0574 4.39333 13.9676 3.87021C13.8778 3.34709 13.6061 2.87253 13.2002 2.53043C12.7944 2.18832 12.2808 2.00069 11.75 2.00069C11.2192 2.00069 10.7056 2.18832 10.2998 2.53043C9.89396 2.87253 9.62216 3.34709 9.53241 3.87021C9.44265 4.39333 9.54072 4.93134 9.80928 5.38915C10.0778 5.84696 10.4996 6.19509 11 6.37201V7.25001C11 7.44892 10.921 7.63969 10.7803 7.78034C10.6397 7.92099 10.4489 8.00001 10.25 8.00001H5.75C5.55109 8.00001 5.36033 7.92099 5.21967 7.78034C5.07902 7.63969 5 7.44892 5 7.25001V6.37201ZM8.75 13.75C8.75 13.9489 8.67099 14.1397 8.53033 14.2803C8.38968 14.421 8.19892 14.5 8 14.5C7.80109 14.5 7.61033 14.421 7.46967 14.2803C7.32902 14.1397 7.25 13.9489 7.25 13.75C7.25 13.5511 7.32902 13.3603 7.46967 13.2197C7.61033 13.079 7.80109 13 8 13C8.19892 13 8.38968 13.079 8.53033 13.2197C8.67099 13.3603 8.75 13.5511 8.75 13.75ZM11.75 5.00001C11.9489 5.00001 12.1397 4.92099 12.2803 4.78034C12.421 4.63969 12.5 4.44892 12.5 4.25001C12.5 4.05109 12.421 3.86033 12.2803 3.71968C12.1397 3.57902 11.9489 3.50001 11.75 3.50001C11.5511 3.50001 11.3603 3.57902 11.2197 3.71968C11.079 3.86033 11 4.05109 11 4.25001C11 4.44892 11.079 4.63969 11.2197 4.78034C11.3603 4.92099 11.5511 5.00001 11.75 5.00001Z",fill:"#586069"},null,-1),Oe=[Te];function Ze(e,t){return(0,i.wg)(),(0,i.iD)("svg",Ie,Oe)}const He={},Me=(0,c.Z)(He,[["render",Ze]]);var Ve=Me;const Ee={width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne=(0,i._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"currentColor"},null,-1),Pe=[Ne];function Re(e,t){return(0,i.wg)(),(0,i.iD)("svg",Ee,Pe)}const je={},Fe=(0,c.Z)(je,[["render",Re]]);var We=Fe;const Be={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ue=(0,i._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),qe=[Ue];function Ge(e,t){return(0,i.wg)(),(0,i.iD)("svg",Be,qe)}const Ke={},ze=(0,c.Z)(Ke,[["render",Ge]]);var Xe=ze,Qe={name:"Icon",components:{...s},props:{name:{type:String,required:!0,validator(e){return Object.keys(s).includes(e)}}}};const Ye=(0,c.Z)(Qe,[["render",K]]);var Je=Ye,$e={name:"FeedsPage",components:{icon:Je}};const et=(0,c.Z)($e,[["render",G],["__scopeId","data-v-2b7808a3"]]);var tt=et;const nt={href:"#"};function st(e,t,n,s,r,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("a",nt,[(0,i.Wm)(a,{name:"logo"})])}var rt={name:"Logo",components:{icon:Je}};const it=(0,c.Z)(rt,[["render",st]]);var ot=it;const at={class:"avatar"},ct=["src"],lt={class:"username"};function dt(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("button",{class:"story-user-item",onClick:t[0]||(t[0]=t=>e.$emit("onPress"))},[(0,i._)("div",at,[(0,i._)("img",{src:n.avatar,class:"img",alt:"User avatar"},null,8,ct)]),(0,i._)("div",lt,(0,m.zw)(n.username),1)])}var ut={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};const pt=(0,c.Z)(ut,[["render",dt],["__scopeId","data-v-1b4e8978"]]);var mt=pt,ht=JSON.parse('[{"id":0,"avatar":"https://loremflickr.com/300/300","username":"One"},{"id":1,"avatar":"https://loremflickr.com/300/300","username":"Two"},{"id":2,"avatar":"https://loremflickr.com/300/300","username":"Three"},{"id":3,"avatar":"https://loremflickr.com/300/300","username":"One"},{"id":4,"avatar":"https://loremflickr.com/300/300","username":"Two"},{"id":5,"avatar":"https://loremflickr.com/300/300","username":"Three"},{"id":6,"avatar":"https://loremflickr.com/300/300","username":"One"},{"id":7,"avatar":"https://loremflickr.com/300/300","username":"Two"},{"id":8,"avatar":"https://loremflickr.com/300/300","username":"Three"},{"id":9,"avatar":"https://loremflickr.com/300/300","username":"Three"}]');const vt={class:"feed"},gt={key:0,class:"repo"},Ct={class:"toggler"},ft={key:0,class:"comments"},wt={class:"comments-list"},_t={class:"date"};function Lt(e,t,n,s,r,o){const a=(0,i.up)("toggler"),c=(0,i.up)("comment");return(0,i.wg)(),(0,i.iD)("div",vt,[e.$slots.repo?((0,i.wg)(),(0,i.iD)("div",gt,[(0,i.WI)(e.$slots,"repo",{},void 0,!0)])):(0,i.kq)("",!0),(0,i._)("div",Ct,[(0,i.Wm)(a,{onToggle:o.handleToggle},null,8,["onToggle"]),r.shown?((0,i.wg)(),(0,i.iD)("div",ft,[(0,i._)("ul",wt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.comments,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"comments-item",key:e},[(0,i.Wm)(c,{text:"Some text",username:"John Doe"})])))),128))])])):(0,i.kq)("",!0)]),(0,i._)("div",_t,(0,m.zw)(o.convertedDate),1)])}const St={class:"text"},yt={class:"icon"};function Dt(e,t,n,s,r,o){const a=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("button",{class:(0,m.C_)(["toggler",{active:r.isOpened}]),onClick:t[0]||(t[0]=(...e)=>o.handleToggle&&o.handleToggle(...e))},[(0,i._)("span",St,(0,m.zw)(r.isOpened?"Hide":"Show")+" issues",1),(0,i._)("span",yt,[(0,i.Wm)(a,{name:"triangle"})])],2)}var At={components:{icon:Je},data(){return{isOpened:!1}},methods:{handleToggle(){this.isOpened=!this.isOpened,this.$emit("toggle",this.isOpened)}}};const kt=(0,c.Z)(At,[["render",Dt],["__scopeId","data-v-24f10d62"]]);var bt=kt;const xt={class:"comment"},It={class:"username"};function Tt(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("div",xt,[(0,i._)("p",null,[(0,i._)("span",It,(0,m.zw)(n.username),1),(0,i.Uk)(" "+(0,m.zw)(n.text),1)])])}var Ot={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const Zt=(0,c.Z)(Ot,[["render",Tt],["__scopeId","data-v-391f9fe2"]]);var Ht=Zt,Mt=(n(8858),n(1318),n(3228),n(1076));const Vt="https://api.github.com",Et=({url:e,method:t="get",data:n={},headers:s={}})=>(0,Mt.Z)({url:e,method:t,data:n,baseURL:Vt,headers:s}),Nt=e=>e<10?`0${e}`:e,Pt=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,s=new Date(Date.now()-n),r=[s.getFullYear(),Nt(s.getMonth()+1),Nt(s.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${r}`),Et({url:`/search/repositories?${t}`})},Rt=e=>Et({url:`/repos/${e.owner.login}/${e.name}/comments`}),jt=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return Et({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})};var Ft={name:"FeedItem",components:{toggler:bt,comment:Ht},props:{item:{type:Object,required:!0}},data(){return{shown:!1,comments:[]}},computed:{convertedDate:function(){const e=new Date(this.item.updated_at),t=e.toLocaleString("en-US",{month:"long",day:"numeric"});return t}},methods:{handleToggle(e){this.shown=e,e&&this.getComments()},async getComments(){try{const{data:e}=await Rt(this.item);this.comments=e.items}catch(e){console.error(e)}}}};const Wt=(0,c.Z)(Ft,[["render",Lt],["__scopeId","data-v-6ea3ec52"]]);var Bt=Wt,Ut=n(65),qt={name:"Feeds",components:{topline:N,userActions:tt,icon:Je,logo:ot,storyUserItem:mt,feed:Bt},data(){return{stories:ht}},computed:{...(0,Ut.rn)({trendings:e=>e.trendings.posts.data,isLoading:e=>e.trendings.posts.isLoading})},methods:{...(0,Ut.nv)({fetchTrendings:"trendings/fetchTrendings"})},async created(){await this.fetchTrendings()}};const Gt=(0,c.Z)(qt,[["render",I],["__scopeId","data-v-6facf02f"]]);var Kt=Gt,zt={name:"FeedsPage",components:{feeds:Kt}};const Xt=(0,c.Z)(zt,[["render",p],["__scopeId","data-v-6c3b694e"]]);var Qt=Xt;function Yt(e,t,n,s,r,o){const a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(a)}var Jt={};const $t=(0,c.Z)(Jt,[["render",Yt]]);var en=$t;const tn={class:"wrapper"},nn={class:"header"},sn={class:"g-container"},rn={class:"content"};function on(e,t,n,s,r,o){const a=(0,i.up)("logo"),c=(0,i.up)("icon"),l=(0,i.up)("stories-slider");return(0,i.wg)(),(0,i.iD)("div",tn,[(0,i._)("header",nn,[(0,i._)("div",sn,[(0,i._)("button",{class:"logo",onClick:t[0]||(t[0]=t=>e.$router.push({name:"home"}))},[(0,i.Wm)(a,{class:"white"})]),(0,i._)("button",{class:"close-btn",onClick:t[1]||(t[1]=t=>e.$router.push({name:"home"}))},[(0,i.Wm)(c,{name:"close"})])])]),(0,i._)("div",rn,[(0,i.Wm)(l,{initialSlide:Number(e.$route.params.initialSlide)},null,8,["initialSlide"])])])}const an={class:"c-stories-slider"},cn={class:"stories-container"},ln={class:"stories",ref:"slider"};function dn(e,t,n,s,r,o){const a=(0,i.up)("storie");return(0,i.wg)(),(0,i.iD)("div",an,[(0,i._)("div",cn,[(0,i._)("ul",ln,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.trendings,((t,n)=>((0,i.wg)(),(0,i.iD)("li",{class:"stories-item",ref_for:!0,ref:"sliderItem",key:t.id},[(0,i.Wm)(a,{data:o.getStoryData(t),active:r.slideActiveIndex===n,buttonsShown:o.activeButtons,loading:r.slideActiveIndex===n&&r.isLoading,onOnNextSlide:e=>o.handleSlideClick(n+1),onOnPrevSlide:e=>o.handleSlideClick(n-1),onOnProgressFinish:t=>o.handleSlideClick(n===e.trendings.length-1?0:n+1)},null,8,["data","active","buttonsShown","loading","onOnNextSlide","onOnPrevSlide","onOnProgressFinish"])])))),128))],512)])])}const un={class:"storie__header"},pn={class:"storie__content"},mn={key:0,class:"loader"},hn={key:1,class:"info"},vn=["innerHTML"],gn={class:"storie__footer"},Cn={class:"icon"},fn={class:"icon"};function wn(e,t,n,s,r,o){const a=(0,i.up)("Progress"),c=(0,i.up)("person"),l=(0,i.up)("spinner"),d=(0,i.up)("placeholder"),u=(0,i.up)("Button"),p=(0,i.up)("icon");return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["c-storie",{active:n.active}])},[(0,i._)("div",un,[n.active?((0,i.wg)(),(0,i.j4)(a,{key:0,onOnFinish:t[0]||(t[0]=t=>e.$emit("onProgressFinish"))})):(0,i.kq)("",!0),(0,i.Wm)(c,{class:"person",avatarImgSrc:n.data.userAvatar,userName:n.data.username},null,8,["avatarImgSrc","userName"])]),(0,i._)("div",pn,[n.loading?((0,i.wg)(),(0,i.iD)("div",mn,[(0,i.Wm)(l)])):((0,i.wg)(),(0,i.iD)("div",hn,[n.data.content?.length?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"info-text",innerHTML:n.data.content},null,8,vn)):((0,i.wg)(),(0,i.j4)(d,{key:1,paragraphs:2}))]))]),(0,i._)("div",gn,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[(0,i.Uk)("Following")])),_:1})]),n.active?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[n.buttonsShown.includes("next")?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"btn btn-next",onClick:t[1]||(t[1]=t=>e.$emit("onNextSlide"))},[(0,i._)("span",Cn,[(0,i.Wm)(p,{name:"left"})])])):(0,i.kq)("",!0),n.buttonsShown.includes("prev")?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"btn btn-prev",onClick:t[2]||(t[2]=t=>e.$emit("onPrevSlide"))},[(0,i._)("span",fn,[(0,i.Wm)(p,{name:"left"})])])):(0,i.kq)("",!0)],64)):(0,i.kq)("",!0)],2)}const _n={class:"button"},Ln={class:"button-text--hover"},Sn={class:"button-text"};function yn(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("button",_n,[(0,i._)("span",Ln,(0,m.zw)(n.hoverText?n.hoverText:"Unfollow"),1),(0,i._)("span",Sn,[(0,i.WI)(e.$slots,"default",{},(()=>[(0,i.Uk)("Following")]),!0)])])}var Dn={title:"uButton",props:{hoverText:{type:String}}};const An=(0,c.Z)(Dn,[["render",yn],["__scopeId","data-v-b9bf55f8"]]);var kn=An;const bn=e=>((0,i.dD)("data-v-84858772"),e=e(),(0,i.Cn)(),e),xn={class:"c-person"},In={href:"#",class:"profile-link"},Tn=["src"],On={class:"person-info"},Zn={class:"person-info__username"},Hn={key:0,class:"person-info__connections connections"},Mn={class:"connections__number"},Vn={class:"connections__number"},En=bn((()=>(0,i._)("a",{href:"#",class:"connections__link"},"watchers",-1))),Nn={key:1,class:"person-info__realName"};function Pn(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("div",xn,[(0,i._)("a",In,[(0,i._)("img",{src:n.avatarImgSrc,alt:"",class:"profile-link__avatar"},null,8,Tn)]),(0,i._)("div",On,[(0,i._)("div",Zn,(0,m.zw)(n.userName),1),n.reposts?((0,i.wg)(),(0,i.iD)("div",Hn,[(0,i._)("span",Mn,(0,m.zw)(n.reposts),1),(0,i.Uk)(" reposts "),(0,i._)("span",Vn,(0,m.zw)(n.watchers),1),(0,i.Uk)(),En])):(0,i.kq)("",!0),n.realName?((0,i.wg)(),(0,i.iD)("div",Nn,(0,m.zw)(n.realName),1)):(0,i.kq)("",!0)])])}var Rn={name:"person",props:{avatarImgSrc:{type:String,required:!0},userName:{type:String,required:!0},realName:{type:String},reposts:{type:Number},watchers:{type:Number}}};const jn=(0,c.Z)(Rn,[["render",Pn],["__scopeId","data-v-84858772"]]);var Fn=jn;const Wn={ref:"indicator",class:"indicator"};function Bn(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("div",{class:(0,m.C_)(["progress",{active:r.isActive}])},[(0,i._)("div",Wn,null,512)],2)}var Un={title:"progress",emits:["onFinish"],props:{active:{type:Boolean,default:!1}},data(){return{isActive:this.active}},methods:{emitOnFinish(){this.$emit("onFinish")}},async mounted(){await this.$nextTick().then((()=>{setTimeout((()=>{this.isActive=!0}),0)})),this.$refs.indicator&&this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)}};const qn=(0,c.Z)(Un,[["render",Bn],["__scopeId","data-v-2ccb26e0"]]);var Gn=qn;const Kn={class:"c-spinner"};function zn(e,t,n,s,r,o){return(0,i.wg)(),(0,i.iD)("div",Kn)}var Xn={name:"spinner"};const Qn=(0,c.Z)(Xn,[["render",zn],["__scopeId","data-v-44acb626"]]);var Yn=Qn;const Jn={key:0,class:"placeholder"},$n=(0,i._)("div",{class:"placeholder__img"},null,-1),es={class:"placeholder__txt"},ts={key:1,class:"placeholder"},ns=(0,i._)("div",{class:"placeholder__line"},null,-1),ss=[ns];function rs(e,t,n,s,r,o){return n.simple?((0,i.wg)(),(0,i.iD)("div",ts,ss)):((0,i.wg)(),(0,i.iD)("div",Jn,[$n,(0,i._)("div",es,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.paragraphs,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"placeholder__txt-block",key:e})))),128))])]))}var is={name:"Placeholder",props:{paragraphs:{type:Number,default:1},simple:{type:Boolean,default:!1}}};const os=(0,c.Z)(is,[["render",rs]]);var as=os,cs={name:"storie",components:{Button:kn,person:Fn,Progress:Gn,spinner:Yn,placeholder:as,icon:Je},emits:["onNextSlide","onPrevSlide","onProgressFinish"],props:{active:Boolean,loading:Boolean,buttonsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}},data:{type:Object,required:!0,default:()=>({})}}};const ls=(0,c.Z)(cs,[["render",wn],["__scopeId","data-v-4488a2c8"]]);var ds=ls,us={name:"storiesSlider",components:{storie:ds},props:{initialSlide:{type:Number,default:0}},data(){return{slideActiveIndex:0,sliderPosition:0,isLoading:!1,buttonsShown:!0}},computed:{...(0,Ut.rn)({trendings:e=>e.trendings.posts.data}),activeButtons(){return this.buttonsShown?0===this.slideActiveIndex?["next"]:this.slideActiveIndex===this.trendings.length-1?["prev"]:["next","prev"]:[]}},methods:{...(0,Ut.nv)({fetchTrendings:"trendings/fetchTrendings",fetchReadme:"trendings/fetchReadme"}),getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,username:e.owner?.login,content:e.readme}},async fetchActiveSlideReadme(){const{id:e,owner:t,name:n}=this.trendings[this.slideActiveIndex];await this.fetchReadme({id:e,owner:t.login,repo:n})},moveSlider(e){const{slider:t,sliderItem:n}=this.$refs,s=parseInt(getComputedStyle(n[this.slideActiveIndex]).getPropertyValue("width"),10);this.slideActiveIndex=e,this.sliderPosition=-s*e,t.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.isLoading=!0,this.buttonsShown=!1;try{await this.fetchActiveSlideReadme()}catch(e){console.log(e)}finally{this.isLoading=!1,this.buttonsShown=!0}},handleInitialSlide(){if(this.initialSlide){const e=this.trendings.findIndex((e=>e.id===this.initialSlide));this.handleSlideClick(e)}},async handleSlideClick(e){e>=0&&e<this.trendings.length&&(this.moveSlider(e),await this.loadReadme())}},async mounted(){this.trendings.length?this.handleInitialSlide():await this.fetchTrendings().then((()=>{this.handleInitialSlide()})),await this.loadReadme()}};const ps=(0,c.Z)(us,[["render",dn],["__scopeId","data-v-efc7e8d6"]]);var ms=ps,hs={name:"stories",components:{logo:ot,icon:Je,storiesSlider:ms}};const vs=(0,c.Z)(hs,[["render",on],["__scopeId","data-v-c37d1be2"]]);var gs=vs;function Cs(e,t){return(0,i.wg)(),(0,i.iD)("div")}const fs={},ws=(0,c.Z)(fs,[["render",Cs]]);var _s=ws;function Ls(e,t){return(0,i.wg)(),(0,i.iD)("div",null," 404 ")}const Ss={},ys=(0,c.Z)(Ss,[["render",Ls]]);var Ds=ys,As=[{path:"/",name:"home",components:{default:Qt}},{path:"/user",component:en,name:"user",props:!0,children:[{path:"profile",component:_s,name:"profile"}]},{path:"/stories",component:gs,name:"stories",props:!0},{path:"/stories/:initialSlide(\\d+)",name:"storiesSlide",component:gs,props:!0},{path:"/:pathMatch(.*)*",component:Ds,name:"not-found"}],ks=(0,u.p7)({history:(0,u.PO)(),routes:As});const bs={namespaced:!0,state:{posts:{data:{},isLoading:!1,error:""},readme:{data:{}}},getters:{getRepoById:e=>t=>e.posts.data.find((e=>e.id===t))},mutations:{SET_TRENDINGS_DATA:(e,t)=>{e.posts.data=t},SET_TRENDINGS_LOADING:(e,t)=>{e.posts.isLoading=t},SET_TRENDINGS_ERROR:(e,t)=>{e.posts.error=t},SET_README:(e,t)=>{e.posts.data=e.posts.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},actions:{async fetchTrendings({commit:e}){e("SET_TRENDINGS_LOADING",!0);try{const{data:t}=await Pt();e("SET_TRENDINGS_DATA",t.items)}catch(t){e("SET_TRENDINGS_ERROR",t)}finally{e("SET_TRENDINGS_LOADING",!1)}},async fetchReadme({commit:e,getters:t},{id:n,owner:s,repo:r}){const i=t.getRepoById(n);if(void 0===i.readme)try{const{data:t}=await jt({owner:s,repo:r});e("SET_README",{id:n,content:t})}catch(o){console.log(o),e("SET_README",{id:n,content:"No readme for this repository found"})}}}};var xs=(0,Ut.MT)({modules:{trendings:bs}});const Is=(0,r.ri)(d);Is.use(ks),Is.use(xs),Is.mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,i){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,c=0;c<s.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(a=!1,i<o&&(o=i));if(a){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[s,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,i,o=s[0],a=s[1],c=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var d=c(n)}for(t&&t(s);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},s=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8685)}));s=n.O(s)})();
//# sourceMappingURL=app.4adee3cc.js.map