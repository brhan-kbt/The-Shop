import{m as B,b as C,_ as N,f as h,o as t,g as l,h as c,w as r,i as a,t as n,l as o,v as m,A as i,p as y,F as f,k}from"./app-e7b909c6.js";const z={props:{boxStyle:{type:String,default:"one"},isLoading:{type:Boolean,required:!0,default:!0},shopDetails:{type:Object,required:!0,default:{}}},computed:{...B("follow",["isThisFollowed"])},methods:{...C("follow",["addNewFollowedShop","removeFromFollowedShop"])}},A={key:0},L={key:1,class:"border rounded overflow-hidden"},V={key:0,class:"lh-0 position-relative"},Z=["src","alt"],j={key:0,class:"absolute-bottom-left w-100 bg-grey-darken-3 white-text d-flex align-center py-2 fs-12 px-3"},E={class:"me-1 fw-600"},G={class:"ms-3 opacity-50"},T=["src","alt"],q={key:0,class:"bg-white absolute-full opacity-80",style:{"z-index":"-1"}},U={key:0,class:"ml-2"},M=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17.5",height:"17.5",viewBox:"0 0 17.5 17.5"},[a("g",{id:"Group_25616","data-name":"Group 25616",transform:"translate(-537.249 -1042.75)"},[a("path",{id:"Union_5","data-name":"Union 5",d:"M0,8.75A8.75,8.75,0,1,1,8.75,17.5,8.75,8.75,0,0,1,0,8.75Zm.876,0A7.875,7.875,0,1,0,8.75.875,7.883,7.883,0,0,0,.876,8.75Zm.875,0a7,7,0,1,1,7,7A7.008,7.008,0,0,1,1.751,8.751Zm3.73-.907a.789.789,0,0,0,0,1.115l2.23,2.23a.788.788,0,0,0,1.115,0l3.717-3.717a.789.789,0,0,0,0-1.115.788.788,0,0,0-1.115,0l-3.16,3.16L6.6,7.844a.788.788,0,0,0-1.115,0Z",transform:"translate(537.249 1042.75)",fill:"#3490f3"})])],-1),O=[M],H={key:1,class:"text-truncate-2 opacity-80 h-40px"},I={key:0},J={class:"opacity-80"},K={key:3,class:"opacity-80"},P={key:4,class:"opacity-80"},Q={key:1,style:{height:"73px"}},R={key:2,class:"text-end mt-3"},W=a("i",{class:"las la-arrow-right"},null,-1);function X(s,u,e,Y,p,$){const D=h("v-skeleton-loader"),_=h("router-link"),S=h("v-rating"),b=h("v-btn"),g=h("v-col"),F=h("product-box"),v=h("v-row");return t(),l("div",{class:i([e.boxStyle=="two"?"shop-box-two":e.boxStyle=="three"?"shop-box-three":e.boxStyle=="four"?"shop-box-four":"shop-box-one"])},[e.isLoading&&s.is_empty_obj(e.shopDetails)?(t(),l("div",A,[c(D,{type:"image",height:"310"})])):(t(),l("div",L,[c(v,{"no-gutters":"",align:"center"},{default:r(()=>[c(g,{sm:e.boxStyle=="three"?"6":null,cols:"12",class:"minw-0 position-relative"},{default:r(()=>[e.boxStyle!="three"?(t(),l("div",V,[c(_,{to:{name:"ShopDetails",params:{slug:e.shopDetails.slug}},class:"text-reset d-block"},{default:r(()=>[a("img",{src:e.shopDetails.banner,onError:u[0]||(u[0]=d=>s.imageFallback(d)),alt:e.shopDetails.name,class:"img-fit h-150px"},null,40,Z)]),_:1},8,["to"]),e.boxStyle=="two"?(t(),l("div",j,[a("span",E,n(e.shopDetails.rating.toFixed(2)),1),c(S,{class:"lh-1-2","background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"11",length:"5","model-value":e.shopDetails.rating},null,8,["model-value"]),a("span",G,"("+n(e.shopDetails.reviews_count)+" "+n(s.$t("ratings"))+")",1)])):o("",!0)])):o("",!0),a("div",{class:i(["text-center fs-12",e.boxStyle=="three"?"pa-4":e.boxStyle=="four"?"absolute-left-center align-center d-flex ms-4":"pa-5 position-relative"])},[e.boxStyle!="two"?(t(),m(_,{key:0,to:{name:"ShopDetails",params:{slug:e.shopDetails.slug}},class:"text-reset"},{default:r(()=>[a("img",{src:e.shopDetails.logo,alt:e.shopDetails.name,onError:u[1]||(u[1]=d=>s.imageFallback(d)),class:i(["border rounded-circle shadow-2xl border-2 size-90px",{"mt-n15":e.boxStyle=="one"},{"mb-2":e.boxStyle!="four"}])},null,42,T)]),_:1},8,["to"])):o("",!0),a("div",{class:i([{"ms-3 pt-1 pb-2 px-3 text-start position-relative":e.boxStyle=="four"}])},[e.boxStyle=="four"?(t(),l("div",q)):o("",!0),c(_,{to:{name:"ShopDetails",params:{slug:e.shopDetails.slug}},class:"text-reset"},{default:r(()=>[a("h4",{class:i(["fs-21",e.boxStyle=="three"?"text-truncate-2 lh-1-4 h-60px":"text-truncate",{"mb-2":e.boxStyle!="four"}])},[y(n(e.shopDetails.name)+" ",1),e.shopDetails.isVarified?(t(),l("span",U,O)):o("",!0)],2)]),_:1},8,["to"]),e.boxStyle=="one"?(t(),l("div",H,[(t(!0),l(f,null,k(e.shopDetails.categories.data,(d,x)=>(t(),l("span",{key:x},[y(n(d.name),1),e.shopDetails.categories.data.length-x!=1?(t(),l("span",I,",")):o("",!0)]))),128))])):o("",!0),e.boxStyle!="two"?(t(),l("div",{key:2,class:i(["d-flex fs-12",{"my-2 justify-center":e.boxStyle!="four"}])},[a("span",{class:i([e.boxStyle=="three"?"":"me-2"])},n(e.shopDetails.rating.toFixed(1)),3),c(S,{class:"lh-1-4","background-color":"","empty-icon":"las la-star","full-icon":"las la-star active","half-icon":"las la-star half",hover:"","half-increments":"",readonly:"",size:"x-small",length:"5","model-value":e.shopDetails.rating},null,8,["model-value"]),a("span",J,"("+n(e.shopDetails.reviews_count)+" "+n(s.$t("ratings"))+")",1)],2)):o("",!0),e.boxStyle=="one"?(t(),l("div",K,n(s.$t("shop_since")+" "+e.shopDetails.since),1)):o("",!0),e.boxStyle=="one"?(t(),l("div",P,n(s.$t("total_products")+" "+e.shopDetails.products_count),1)):o("",!0)],2),e.boxStyle!="four"?(t(),l("div",{key:1,class:i([e.boxStyle=="two"?"d-flex flex-column mt-5":e.boxStyle=="three"?"d-flex flex-column mt-3":"mt-5"])},[s.isThisFollowed(e.shopDetails.id)?(t(),l(f,{key:0},[e.boxStyle=="one"||e.boxStyle=="two"?(t(),m(b,{key:0,elevation:"0",small:e.boxStyle!="one",onClick:u[2]||(u[2]=d=>s.removeFromFollowedShop(e.shopDetails.id)),class:i(["bg-grey",e.boxStyle=="one"?"white-text-darken-1":"lighten-2"])},{default:r(()=>[y(n(s.$t("unfollow")),1)]),_:1},8,["small","class"])):o("",!0)],64)):(t(),l(f,{key:1},[e.boxStyle=="one"||e.boxStyle=="two"?(t(),m(b,{key:0,elevation:"0",small:e.boxStyle!="one",onClick:u[3]||(u[3]=d=>s.addNewFollowedShop(e.shopDetails.id)),class:i([e.boxStyle=="one"?"btn-primary":"bg-grey-lighten-4 border border-gray-300"])},{default:r(()=>[y(n(s.$t("follow")),1)]),_:1},8,["small","class"])):o("",!0)],64)),c(b,{elevation:"0",small:e.boxStyle!="one",to:{name:"ShopDetails",params:{slug:e.shopDetails.slug}},class:i([e.boxStyle=="one"?"ms-4 white-text bg-grey-darken-4":(e.boxStyle=="two"||e.boxStyle=="three","mt-2 bg-soft-primary border border-primary")])},{default:r(()=>[y(n(s.$t("visit_store")),1)]),_:1},8,["small","to","class"])],2)):o("",!0)],2)]),_:1},8,["sm"]),e.boxStyle=="three"||e.boxStyle=="four"?(t(),m(g,{key:0,cols:"12",sm:e.boxStyle=="three"?"6":null,class:"minw-0"},{default:r(()=>{var d;return[a("div",{class:i([e.boxStyle=="four"?"pa-4":""])},[(d=e.shopDetails.top_3_products)!=null&&d.data.length?(t(),m(v,{key:0,"no-gutters":e.boxStyle!="four",class:"gutters-10"},{default:r(()=>[(t(!0),l(f,null,k(e.shopDetails.top_3_products.data,(x,w)=>(t(),m(g,{cols:"12",sm:e.boxStyle=="four"?"4":null,key:w},{default:r(()=>[c(F,{"product-details":x,"is-loading":e.isLoading,"box-style":"two",class:i([e.boxStyle=="three"&&w==0?"my-4 me-4":e.boxStyle=="three"?"mb-4 me-4":""])},null,8,["product-details","is-loading","class"])]),_:2},1032,["sm"]))),128))]),_:1},8,["no-gutters"])):(t(),l("div",Q)),e.boxStyle=="four"?(t(),l("div",R,[c(b,{small:"",link:"",elevation:"0",to:{name:"ShopDetails",params:{slug:e.shopDetails.slug}},class:"text-primary transparent"},{default:r(()=>[a("span",null,n(s.$t("visit_store")),1),W]),_:1},8,["to"])])):o("",!0)],2)]}),_:1},8,["sm"])):o("",!0)]),_:1})]))],2)}const te=N(z,[["render",X]]);export{te as S};
