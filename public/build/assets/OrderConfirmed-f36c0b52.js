import{S as u}from"./Summary-7a714ec7.js";import{_ as p,f as o,o as s,v as n,w as a,h as d,i as t,t as r,p as f,g as y,l as c}from"./app-e7b909c6.js";const h={data:()=>({order:{}}),components:{Summary:u},methods:{async getDetails(){const e=await this.call_api("get",`user/order/${this.$route.query.orderCode}`);if(e.data.success)this.order=e.data.data;else{this.snack({message:e.data.message,color:"red"});return}}},created(){this.getDetails()}},v={class:"text-center py-5"},g={class:"secondary--text"},$={key:0,class:"font-italic"};function k(e,C,w,S,B,N){const l=o("Summary"),_=o("v-col"),i=o("v-row"),m=o("v-container");return s(),n(m,{class:"pt-7"},{default:a(()=>[d(i,null,{default:a(()=>[e.is_empty_obj(e.order)?c("",!0):(s(),n(_,{key:0,xl:"8",lg:"10",cols:"12",class:"mx-auto"},{default:a(()=>[t("div",v,[t("h1",null,r(e.$t("thank_you_for_your_order")),1),t("div",null,[f("Order Code : "),t("span",g,r(e.order.code),1)]),e.order.user.email?(s(),y("div",$,r(e.$t("a_copy_of_your_order_summary_has_been_sent_to"))+" "+r(e.order.user.email),1)):c("",!0)]),d(l,{"order-details":e.order},null,8,["order-details"])]),_:1}))]),_:1})]),_:1})}const b=p(h,[["render",k]]);export{b as default};
