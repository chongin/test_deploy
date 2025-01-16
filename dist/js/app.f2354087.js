(function(){var e={5844:function(e,n,a){"use strict";var r=a(5130),t=a(6768);const o={id:"app"};function l(e,n,a,r,l,i){const s=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",o,[(0,t.bF)(s)])}var i={name:"App"},s=a(1241);const d=(0,s.A)(i,[["render",l]]);var c=d,u=a(1387);function m(e,n,a,r,o,l){const i=(0,t.g2)("PlayerList");return(0,t.uX)(),(0,t.CE)("div",null,[n[0]||(n[0]=(0,t.Lk)("h1",null,"Game Client",-1)),(0,t.bF)(i,{players:o.players},null,8,["players"])])}var p=a(4232);const y=["onClick"];function f(e,n,a,r,o,l){return(0,t.uX)(),(0,t.CE)("div",null,[n[0]||(n[0]=(0,t.Lk)("h1",null,"Select a Player",-1)),(0,t.Lk)("ul",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(o.players,(e=>((0,t.uX)(),(0,t.CE)("li",{key:e.id},[(0,t.eW)((0,p.v_)(e.name)+" ",1),(0,t.Lk)("button",{onClick:n=>l.selectPlayer(e)},"Select",8,y)])))),128))])])}a(4114);var h={name:"HomeView",data(){return{players:[{id:1,name:"Player 1",address:"Address1"},{id:2,name:"Player 2",address:"Address2"},{id:3,name:"Player 3",address:"Address3"},{id:4,name:"Player 4",address:"Address4"},{id:5,name:"Player 5",address:"Address5"}]}},methods:{selectPlayer(e){this.$router.push({name:"PlayGameView",params:{player:e}})}}};const g=(0,s.A)(h,[["render",f]]);var v=g,P={name:"HomeView",components:{PlayerList:v},data(){return{players:[{id:1,name:"Player 1",address:"Address1"},{id:2,name:"Player 2",address:"Address2"},{id:3,name:"Player 3",address:"Address3"},{id:4,name:"Player 4",address:"Address4"},{id:5,name:"Player 5",address:"Address5"}]}}};const b=(0,s.A)(P,[["render",m]]);var w=b;const k=["disabled"],L={key:0};function j(e,n,a,r,o,l){return(0,t.uX)(),(0,t.CE)("div",null,[n[3]||(n[3]=(0,t.Lk)("h1",null,"Play Game",-1)),(0,t.Lk)("p",null,"Selected Player: "+(0,p.v_)(a.player.name),1),(0,t.Lk)("p",null,"Address: "+(0,p.v_)(a.player.address),1),(0,t.Lk)("div",null,[n[1]||(n[1]=(0,t.Lk)("h2",null,"Game Pool Information",-1)),(0,t.Lk)("p",null,"Pool ID: "+(0,p.v_)(o.gamePool.id),1),(0,t.Lk)("p",null,"Entry Fee: "+(0,p.v_)(o.gamePool.entryFee)+" SOL",1),(0,t.Lk)("p",null,"Max Players: "+(0,p.v_)(o.gamePool.maximumPlayers),1),(0,t.Lk)("p",null,"Current Participants: "+(0,p.v_)(o.gamePool.participants)+"/"+(0,p.v_)(o.gamePool.maximumPlayers),1)]),(0,t.Lk)("div",null,[n[2]||(n[2]=(0,t.Lk)("h2",null,"Player Balance",-1)),(0,t.Lk)("p",null,(0,p.v_)(o.balance)+" SOL",1)]),(0,t.Lk)("button",{disabled:o.joining,onClick:n[0]||(n[0]=(...e)=>l.joinGame&&l.joinGame(...e))},"Join Game",8,k),o.joining?((0,t.uX)(),(0,t.CE)("div",L,"Waiting for the game result...")):(0,t.Q3)("",!0)])}var A=a(823),C=a(4373);const O=C.A.create({baseURL:"http://localhost:3000",headers:{"Content-Type":"application/json"}}),_=async()=>{try{const e=await O.get("/game_pool");return e.data}catch(e){throw console.error("Error fetching game pool:",e),e}};var S={name:"PlayGameView",props:{player:{type:Object,required:!0}},data(){return{gamePool:{},balance:0,joining:!1}},async mounted(){try{const e=await _();this.gamePool.id=e;const n=new A.Ng("http://localhost:8899"),a=new A.J3(this.player.address);this.balance=await n.getBalance(a)/1e9}catch(e){console.error("Failed to fetch data:",e)}},methods:{async joinGame(){this.joining=!0;try{const e=new A.Ng("http://localhost:8899"),n=new A.J3(this.player.address),a=new A.J3(this.gamePool.id),r=new A.fH({programId:new A.J3("YourSmartContractProgramID"),keys:[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!0}],data:Buffer.alloc(0)}),t=(new A.ZX).add(r),{blockhash:o}=await e.getRecentBlockhash();t.recentBlockhash=o,t.feePayer=n;const l=await window.solana.signTransaction(t),i=await e.sendRawTransaction(l.serialize());console.log("Transaction sent:",i),await e.confirmTransaction(i),alert("Successfully joined the game!")}catch(e){console.error("Error joining the game:",e),alert("Failed to join the game.")}finally{this.joining=!1}}}};const E=(0,s.A)(S,[["render",j]]);var G=E;const T=[{path:"/",name:"HomeView",component:w},{path:"/play",name:"PlayGameView",component:G,props:!0}],x=(0,u.aE)({history:(0,u.LA)("/"),routes:T});var F=x,X=a(782),V=(0,X.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.Ef)(c).use(V).use(F).mount("#app")},7790:function(){}},n={};function a(r){var t=n[r];if(void 0!==t)return t.exports;var o=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){var e=[];a.O=function(n,r,t,o){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],t=e[c][1],o=e[c][2];for(var i=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[s])}))?r.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(c--,1);var d=t();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]}}(),function(){a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,{a:n}),n}}(),function(){a.d=function(e,n){for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};a.O.j=function(n){return 0===e[n]};var n=function(n,r){var t,o,l=r[0],i=r[1],s=r[2],d=0;if(l.some((function(n){return 0!==e[n]}))){for(t in i)a.o(i,t)&&(a.m[t]=i[t]);if(s)var c=s(a)}for(n&&n(r);d<l.length;d++)o=l[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self["webpackChunkgame_client"]=self["webpackChunkgame_client"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(5844)}));r=a.O(r)})();
//# sourceMappingURL=app.f2354087.js.map