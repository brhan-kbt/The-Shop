import{C as u}from"./CouponBox-75b760f6.js";import{_ as i,f as e,o as s,g as t,v as a,w as n,l as _,F as m,k as f,h as g}from"./app-e7b909c6.js";const h={data:()=>({loading:!0,coupons:[{},{},{},{},{},{}]}),components:{CouponBox:u},async created(){const o=await this.call_api("get","user/coupons");o.data.success&&(this.coupons=o.data.data.data,this.loading=!1)}},w={class:"ps-lg-7 pt-4"};function v(o,k,C,x,B,$){const c=e("coupon-box"),r=e("v-col"),l=e("v-row");return s(),t("div",w,[o.coupons.length?(s(),a(l,{key:0,class:"row-cols-1 row-cols-sm-2 row-cols-md-3"},{default:n(()=>[(s(!0),t(m,null,f(o.coupons,(p,d)=>(s(),a(r,{key:d},{default:n(()=>[g(c,{"is-loading":o.loading,"coupon-details":p},null,8,["is-loading","coupon-details"])]),_:2},1024))),128))]),_:1})):_("",!0)])}const F=i(h,[["render",v]]);export{F as default};
