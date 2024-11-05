(function(){"use strict";var e={4161:function(e,o,s){var t=s(5130),n=s(6768);function a(e,o,s,t,a,r){const i=(0,n.g2)("NavBar"),u=(0,n.g2)("HomePage");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(i,{isLoggedIn:a.isLoggedIn,userName:a.userName,userPhotoURL:a.userPhotoURL,onLogout:r.handleLogout},null,8,["isLoggedIn","userName","userPhotoURL","onLogout"]),(0,n.bF)(u,{isLoggedIn:a.isLoggedIn},null,8,["isLoggedIn"])])}var r=s(4232);const i={class:"NavBar"},u={class:"NavBar-menu"},l=["src"],d={key:0,class:"user-name"},c={key:1,class:"login-message"},m={key:2,class:"dropdown-menu"};function h(e,o,t,a,h,g){const v=(0,n.g2)("LoginModal");return(0,n.uX)(),(0,n.CE)("nav",i,[o[3]||(o[3]=(0,n.Lk)("h1",{class:"NavBar-brand"},"Lista de Presentes",-1)),(0,n.Lk)("div",u,[(0,n.Lk)("div",{class:"user-section",onClick:o[2]||(o[2]=(...e)=>g.toggleDropdown&&g.toggleDropdown(...e))},[(0,n.Lk)("img",{src:h.isLoggedIn?h.userPhotoURL:s(4441),alt:"Ícone do usuário",class:"user-icon"},null,8,l),h.isLoggedIn?((0,n.uX)(),(0,n.CE)("span",d,"Olá, "+(0,r.v_)(h.userName)+"!",1)):((0,n.uX)(),(0,n.CE)("span",c,"Clique aqui para logar")),h.dropdownOpen?((0,n.uX)(),(0,n.CE)("div",m,[h.isLoggedIn?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:o[0]||(o[0]=(...e)=>g.logout&&g.logout(...e)),class:"logout-button"},"Logout")):((0,n.uX)(),(0,n.CE)("button",{key:1,onClick:o[1]||(o[1]=(...e)=>g.openLoginModal&&g.openLoginModal(...e)),class:"login-button"},"Login"))])):(0,n.Q3)("",!0)])]),h.showLoginModal?((0,n.uX)(),(0,n.Wv)(v,{key:0,onClose:g.closeLoginModal,onLoginSuccess:g.handleLoginSuccess},null,8,["onClose","onLoginSuccess"])):(0,n.Q3)("",!0)])}function g(e,o,s,a,r,i){return(0,n.uX)(),(0,n.CE)("div",{class:"login-modal-overlay",onClick:o[2]||(o[2]=(...e)=>i.closeModal&&i.closeModal(...e))},[(0,n.Lk)("div",{class:"login-modal",onClick:o[1]||(o[1]=(0,t.D$)((()=>{}),["stop"]))},[o[3]||(o[3]=(0,n.Lk)("h3",null,"Escolha o método de login",-1)),(0,n.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>i.handleGoogleLogin&&i.handleGoogleLogin(...e)),class:"auth-button google"},"Login com Google")])])}var v=s(7307),p=s(6400),L=s(7617);const f={apiKey:"AIzaSyAASkIK6WN3FdeVvjQpxiOlWFuruQESMjo",authDomain:"babyanthony-36536.firebaseapp.com",projectId:"babyanthony-36536",storageBucket:"babyanthony-36536.firebasestorage.app",messagingSenderId:"13282213072",appId:"1:13282213072:web:1c7bd3ae98f90769b632d5"},y=(0,p.Wp)(f),k=(0,v.xI)(y),b=new v.HF,A=new v.sk,I="localhost"===window.location.hostname,R=()=>(0,v.df)(k,b),U=()=>(0,v.df)(k,A);I||(0,v.Q4)(k).then((e=>{e&&console.log("Usuário autenticado com sucesso via redirecionamento:",e.user)})).catch((e=>{console.error("Erro ao autenticar com redirecionamento:",e)}));const E=(0,L.aU)(y),C=()=>R(),w=()=>U(),N=()=>(0,v.CI)(k),X=e=>{(0,v.hg)(k,e)};var q={name:"LoginModal",emits:["close","login-success"],methods:{async handleGoogleLogin(){try{const e=await C();this.$emit("login-success",{userName:e.user.displayName,userPhotoURL:e.user.photoURL}),this.closeModal()}catch(e){console.error("Erro ao fazer login com Google:",e)}},async handleFacebookLogin(){try{const e=await w();this.$emit("login-success",{userName:e.user.displayName,userPhotoURL:e.user.photoURL}),this.closeModal()}catch(e){console.error("Erro ao fazer login com Facebook:",e)}},closeModal(){this.$emit("close")}}},S=s(1241);const O=(0,S.A)(q,[["render",g],["__scopeId","data-v-037e7195"]]);var D=O,M={name:"NavBar",components:{LoginModal:D},data(){return{isLoggedIn:!1,userName:"",userPhotoURL:"",showLoginModal:!1,dropdownOpen:!1}},methods:{toggleDropdown(){this.dropdownOpen=!this.dropdownOpen},openLoginModal(){this.showLoginModal=!0},closeLoginModal(){this.showLoginModal=!1},handleLoginSuccess(e){this.isLoggedIn=!0,this.userName=e.userName,this.userPhotoURL=e.userPhotoURL||s(4441),this.closeLoginModal()},logout(){N().then((()=>{this.isLoggedIn=!1,this.userName="",this.userPhotoURL=s(4441)})).catch((e=>{console.error("Erro ao fazer logout:",e)}))}},mounted(){X((e=>{e?(this.isLoggedIn=!0,this.userName=e.displayName,this.userPhotoURL=e.photoURL||s(4441)):(this.isLoggedIn=!1,this.userName="",this.userPhotoURL=s(4441))}))}};const P=(0,S.A)(M,[["render",h],["__scopeId","data-v-2968670b"]]);var Q=P,Z=s.p+"img/cut-banner-image.04bc5107.png";const B={key:0,class:"home-page"},j={key:0,class:"wishlist"},K={key:1};function T(e,o,s,t,a,r){const i=(0,n.g2)("WishlistItem");return a.itemsLoaded&&a.userChecked?((0,n.uX)(),(0,n.CE)("div",B,[o[1]||(o[1]=(0,n.Lk)("div",{class:"banner"},[(0,n.Lk)("img",{src:Z,alt:"Banner do Chá de Bebê",class:"banner-image"})],-1)),o[2]||(o[2]=(0,n.Lk)("h2",null,"Escolha um presentinho pro Anthony! 🥰",-1)),a.items&&a.items.length?((0,n.uX)(),(0,n.CE)("div",j,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.items,(e=>((0,n.uX)(),(0,n.Wv)(i,{key:e.id,item:e,isLoggedIn:a.isLoggedIn,userEmail:a.userEmail,onReserveItem:r.reserveItem,onRemoveReserve:r.removeReservation},null,8,["item","isLoggedIn","userEmail","onReserveItem","onRemoveReserve"])))),128))])):((0,n.uX)(),(0,n.CE)("div",K,o[0]||(o[0]=[(0,n.Lk)("p",null,"Nenhum item foi cadastrado na lista de presentes.",-1)])))])):(0,n.Q3)("",!0)}s(1454);const x={key:0,class:"wishlist-item"},H={class:"image-container"},W=["src"],G={key:0},z={key:1},F={key:1,class:"references-list"},J=["href"],Y=["disabled"];function V(e,o,s,t,a,i){return s.item&&void 0!==s.item.reservas?((0,n.uX)(),(0,n.CE)("div",x,[(0,n.Lk)("div",H,[(0,n.Lk)("img",{src:s.item.imagem||"https://via.placeholder.com/100",alt:"Imagem do item",class:"item-image"},null,8,W)]),(0,n.Lk)("h3",null,(0,r.v_)(s.item.nome),1),(0,n.Lk)("p",null,"Reservas: "+(0,r.v_)(s.item.quantidade)+" / "+(0,r.v_)(s.item.limite),1),s.item.links&&s.item.links.length>0?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:o[0]||(o[0]=(...e)=>i.toggleReferences&&i.toggleReferences(...e)),class:"reference-button"},[a.showReferences?((0,n.uX)(),(0,n.CE)("span",G,"Esconder")):((0,n.uX)(),(0,n.CE)("span",z,"🔍 Ver Referências"))])):(0,n.Q3)("",!0),a.showReferences?((0,n.uX)(),(0,n.CE)("div",F,[o[3]||(o[3]=(0,n.Lk)("h4",null,"Referências de compra:",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(s.item.links,((e,o)=>((0,n.uX)(),(0,n.CE)("li",{key:o},[(0,n.Lk)("a",{href:e,target:"_blank"},(0,r.v_)(`Loja ${o+1}`),9,J)])))),128))])])):(0,n.Q3)("",!0),(0,n.Lk)("button",{disabled:s.item.quantidade>=s.item.limite||!s.isLoggedIn,onClick:o[1]||(o[1]=(...e)=>i.reserveItem&&i.reserveItem(...e)),class:"reserve-button"}," 🎁 Reservar ",8,Y),i.canRemoveReservation?((0,n.uX)(),(0,n.CE)("button",{key:2,onClick:o[2]||(o[2]=(...e)=>i.removeReservation&&i.removeReservation(...e)),class:"remove-button"}," ❌ Remover Reserva ")):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0)}var _={name:"WishlistItem",props:{item:{type:Object,required:!0,default:()=>({})},isLoggedIn:{type:Boolean,required:!0,default:!1},userEmail:{type:String,required:!0,default:""}},data(){return{showReferences:!1}},computed:{canRemoveReservation(){if(!this.isLoggedIn||!this.item||!this.item.reservas)return!1;const e=this.userEmail.replace(/@/g,"_at_").replace(/\./g,"_dot_");return!!this.item.reservas[e]}},methods:{toggleReferences(){this.showReferences=!this.showReferences},reserveItem(){this.item.quantidade<this.item.limite&&this.$emit("reserve-item",this.item)},removeReservation(){this.canRemoveReservation?this.$emit("remove-reserve",this.item):console.log("Usuário não tem permissão para remover esta reserva.")}}};const $=(0,S.A)(_,[["render",V],["__scopeId","data-v-170b8a86"]]);var ee=$,oe={name:"HomePage",components:{WishlistItem:ee},data(){return{items:[],isLoggedIn:!1,user:null,userEmail:"",itemsLoaded:!1,userChecked:!1}},async created(){await this.loadItems(),k.onAuthStateChanged((e=>{this.isLoggedIn=!!e,this.user=e,this.userEmail=e?e.email.replace(/@/g,"_at_").replace(/\./g,"_dot_"):"",this.userChecked=!0}))},methods:{async loadItems(){try{const e=await(0,L.GG)((0,L.rJ)(E,"lista_de_desejos"));this.items=e.docs.map((e=>({id:e.id,...e.data()}))),this.itemsLoaded=!0}catch(e){console.error("Erro ao carregar itens:",e)}},async reserveItem(e){if(this.user)try{const o=(0,L.H9)(E,"lista_de_desejos",e.id),s=await(0,L.x7)(o),t=s.data(),n=this.userEmail,a=t.reservas?.[n]||{quantidade:0},r=a.quantidade+1,i={nome:this.user.displayName||"Nome não fornecido",quantidade:r};await(0,L.mZ)(o,{[`reservas.${n}`]:i,quantidade:(t.quantidade||0)+1}),e.quantidade=(t.quantidade||0)+1,e.reservas={...e.reservas||{},[n]:i},console.log("Reserva feita com sucesso!")}catch(o){console.error("Erro ao fazer a reserva:",o)}else console.log("Usuário não autenticado. Não é possível reservar.")},async removeReservation(e){if(this.user)try{const o=(0,L.H9)(E,"lista_de_desejos",e.id),s=await(0,L.x7)(o),t=s.data(),n=this.userEmail,a=t.reservas?.[n];if(!a)return void console.log("Reserva não encontrada para o usuário atual.");const r=a.quantidade-1;if(r>0)await(0,L.mZ)(o,{[`reservas.${n}.quantidade`]:r,quantidade:t.quantidade-1}),e.reservas[n].quantidade=r;else{const s={...t.reservas};delete s[n],await(0,L.mZ)(o,{reservas:s,quantidade:t.quantidade-1}),delete e.reservas[n]}e.quantidade=t.quantidade-1,console.log("Reserva removida com sucesso!")}catch(o){console.error("Erro ao remover a reserva:",o)}else console.log("Usuário não autenticado. Não é possível remover a reserva.")}}};const se=(0,S.A)(oe,[["render",T],["__scopeId","data-v-5783614c"]]);var te=se,ne={name:"App",components:{NavBar:Q,HomePage:te},data(){return{isLoggedIn:!1,userName:"",userPhotoURL:""}},methods:{handleLogout(){this.isLoggedIn=!1,this.userName="",this.userPhotoURL=""},handleLoginSuccess({userName:e,userPhotoURL:o}){this.isLoggedIn=!0,this.userName=e,this.userPhotoURL=o||s(4441)}},mounted(){X((e=>{e?(this.isLoggedIn=!0,this.userName=e.displayName,this.userPhotoURL=e.photoURL||s(4441)):this.handleLogout()}))}};const ae=(0,S.A)(ne,[["render",a]]);var re=ae,ie=s(973);const ue=[{path:"/",name:"Home",component:te}],le=(0,ie.aE)({history:(0,ie.LA)("/baby_anthony/"),routes:ue});var de=le,ce=(s(5524),s(7768)),me=s(9616),he=s(1920),ge=s(5741);const ve=(0,ce.$N)({components:he,directives:ge,icons:{defaultSet:"mdi",aliases:me.z,sets:{mdi:me.r}},theme:{defaultTheme:"light",themes:{light:{colors:{primary:"#6200ea",secondary:"#03dac6"}}}}});var pe=ve;const Le=(0,t.Ef)(re);Le.use(de),Le.use(pe),Le.mount("#app")},4441:function(e){e.exports="data:image/png;base64,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"}},o={};function s(t){var n=o[t];if(void 0!==n)return n.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(o,t,n,a){if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],a=e[d][2];for(var i=!0,u=0;u<t.length;u++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](t[u])}))?t.splice(u--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var l=n();void 0!==l&&(o=l)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,n,a]}}(),function(){s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,{a:o}),o}}(),function(){s.d=function(e,o){for(var t in o)s.o(o,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/baby_anthony/"}(),function(){var e={524:0};s.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,a,r=t[0],i=t[1],u=t[2],l=0;if(r.some((function(o){return 0!==e[o]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(u)var d=u(s)}for(o&&o(t);l<r.length;l++)a=r[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},t=self["webpackChunkbaby_anthony"]=self["webpackChunkbaby_anthony"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=s.O(void 0,[504],(function(){return s(4161)}));t=s.O(t)})();
//# sourceMappingURL=app.da55206a.js.map