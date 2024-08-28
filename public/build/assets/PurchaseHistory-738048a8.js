import{_ as w,b as k,d as y,f as u,o as h,g,i as o,t as s,h as n,w as l,l as m}from"./app-ff872a97.js";const C={data:()=>({loading:!0,currentPage:1,totalPages:1,orders:[],selectedOrder:{}}),computed:{headers(){return[{title:this.$i18n.t("details"),align:"start",sortable:!1,value:"details"},{title:this.$i18n.t("info"),sortable:!1,value:"info"},{title:this.$i18n.t("amount"),sortable:!1,value:"grand_total"},{title:this.$i18n.t("actions"),sortable:!1,align:"center",value:"actions"}]}},watch:{currentPage(){this.$router.push({query:{...this.$route.query,page:this.currentPage}}).catch(()=>{})}},methods:{...k("cart",["addToCart"]),...y("auth",["updateCartDrawer"]),getProductsCount(t){let a=0;return t.orders.forEach(i=>{a+=i.products.data.length}),a},async getList(){this.loading=!0;const t=await this.call_api("get",`user/orders?page=${this.currentPage}`);t.data.success?(this.orders=t.data.data,this.totalPages=t.data.meta.last_page,this.currentPage=t.data.meta.current_page):this.snack({message:this.$i18n.t("something_went_wrong"),color:"red"}),this.loading=!1},openOrderDetails(t){this.$router.push({name:"OrderDetails",params:{code:t.code}})},async reOrder(t){t.forEach(a=>{this.multipleShop(a)})},multipleShop(t){t.products.data.forEach(a=>{this.addToCart({variation_id:a.product_variation_id,qty:a.quantity})}),this.checkout()},checkout(){this.$router.push({name:"Checkout"}).catch(t=>{this.$route.name=="Checkout"&&this.updateCartDrawer(!1)})},async invoiceDownload(t){t.orders.forEach(async a=>{const i=await this.call_api("get",`order/invoice-download/${a.id}`);if(i.data.success){const p=i.data.invoice_url,c=document.createElement("a");c.href=p,c.download=i.data.invoice_name,c.click()}else this.snack({message:this.$i18n.t("something_went_wrong"),color:"red"})})}},created(){let t=this.$route.query.page||this.currentPage;this.getList(t)}},$={class:"ps-lg-7 pt-4"},b={class:"fs-24 fw-700 opacity-80 mb-5 mt-3"},P={class:"d-block fw-600"},D={class:"opacity-50 fs-13 fw-600"},O={class:"d-block fw-600"},V={key:0,class:"fs-13 opacity-60"},E={class:"d-block fw-600"},q=o("i",{class:"las la-arrow-circle-down text-primary"},null,-1),x=o("i",{class:"las la-sync"},null,-1),z=o("i",{class:"las la-bars"},null,-1),B={key:0,class:"text-start"};function L(t,a,i,p,c,r){const d=u("v-btn"),f=u("v-data-table"),v=u("v-pagination");return h(),g("div",$,[o("h1",b,s(t.$t("purchase_history")),1),o("div",null,[n(f,{headers:r.headers,items:t.orders,class:"border px-4 pt-3","loading-text":t.$t("loading_please_wait"),"hide-default-footer":"",loading:t.loading,"item-class":"c-pointer","onClick:row":r.openOrderDetails},{"item.details":l(({item:e})=>[o("span",P,s(e.code),1),o("span",D,s(e.date),1)]),"item.info":l(({item:e})=>[o("span",O,s(r.getProductsCount(e))+" "+s(t.$t("products")),1),t.is_addon_activated("multi_vendor")?(h(),g("span",V,s(t.$t("from"))+" "+s(e.orders.length)+" "+s(t.$t("shops")),1)):m("",!0)]),"item.grand_total":l(({item:e})=>[o("span",E,s(t.format_price(e.grand_total)),1)]),"item.actions":l(({item:e})=>[n(d,{onClick:_=>r.invoiceDownload(e),text:"",size:"small",variant:"flat",class:"text-primary fs-18"},{default:l(()=>[q]),_:2},1032,["onClick"]),n(d,{onClick:_=>r.reOrder(e.orders),text:"",size:"small",variant:"flat",class:"text-green fs-18"},{default:l(()=>[x]),_:2},1032,["onClick"]),n(d,{onClick:_=>r.openOrderDetails(e),text:"",size:"small",variant:"flat",class:"text-blue fs-18"},{default:l(()=>[z]),_:2},1032,["onClick"])]),_:2},1032,["headers","items","loading-text","loading","onClick:row"]),t.totalPages>1?(h(),g("div",B,[n(v,{modelValue:t.currentPage,"onUpdate:modelValue":[a[0]||(a[0]=e=>t.currentPage=e),r.getList],length:t.totalPages,"prev-icon":"las la-angle-left","next-icon":"las la-angle-right","total-visible":7,elevation:"0",class:"my-4"},null,8,["modelValue","onUpdate:modelValue","length"])])):m("",!0)])])}const S=w(C,[["render",L]]);export{S as default};
