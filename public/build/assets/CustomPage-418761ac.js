import{_ as r,M as l,f as a,o as t,g as s,h as c,w as d,v as p,F as m,i as o,t as _}from"./app-ff872a97.js";const g={data:()=>({loading:!0,metaTitle:"",page:{}}),watch:{metaTitle(e){this.updateHead(e)}},methods:{updateHead(e){l({title:e})}},async created(){const e=await this.call_api("get",`page/${this.$route.params.pageSlug}`);e.data.success?(this.metaTitle=e.data.data.title,this.page=e.data.data):(this.snack({message:e.data.message,color:"red"}),this.$router.push({name:"404"})),this.loading=!1}},h={class:"pb-6 custom-page-responsiveness"},u={class:"mb-7 mt-4"},f=["innerHTML"];function v(e,k,$,y,H,T){const n=a("v-skeleton-loader"),i=a("v-container");return t(),s("div",h,[c(i,null,{default:d(()=>[e.loading?(t(),p(n,{key:0,type:"table-heading, divider, list-item-three-line, image, article"})):(t(),s(m,{key:1},[o("h1",u,_(e.page.title),1),o("div",{innerHTML:e.page.content},null,8,f)],64))]),_:1})])}const B=r(g,[["render",v]]);export{B as default};
