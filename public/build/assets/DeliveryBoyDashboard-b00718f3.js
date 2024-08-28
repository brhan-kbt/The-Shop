import{_ as h,m as f,b as _,f as i,o as m,g,i as t,t as l,h as e,w as r}from"./app-e7b909c6.js";const p={data:()=>({dashboardData:{},last_recharge:0,total_complete_delivery:0,total_pending_delivery:0,total_collection:0,total_earning:0}),computed:{...f("auth",["currentUser"]),...f("deliveryboy",["getDashboardData"]),...f("address",["getDefaultBillingAddress"])},methods:{..._("deliveryboy",["fetchDashboardData"]),async getDashboardinfo(){const a=await this.call_api("get","delivery-boy/dashboard");if(a.data.success){let s=a.data.data;this.dashboardData=s,this.total_complete_delivery=s.total_complete_delivery,this.total_pending_delivery=s.total_pending_delivery,this.total_collection=s.deliveryboy.total_collection,this.total_earning=s.deliveryboy.total_earning}}},created(){this.fetchDashboardData(),this.getDashboardinfo()}},u={class:"ps-lg-7 pt-4"},v={class:"fs-21 fw-700 opacity-80 mb-5"},y={class:"fs-14 mb-3 fw-700 primary-text"},w={class:"fw-500 text-h4"},b={class:"fs-14 mb-3 fw-700 primary-text"},x={class:"fw-500 text-h4"},A={class:"fs-14 mb-3 fw-700 primary-text"},R={class:"fw-500 text-h4"},G={class:"fs-14 mb-3 fw-700 primary-text"},H={class:"fw-500 text-h4"},V={class:"fs-14 mb-3 w-100"},D=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 70 70"},[t("g",{id:"Group_25732","data-name":"Group 25732",transform:"translate(-751 -715)"},[t("rect",{id:"Rectangle",width:"70",height:"70",rx:"35",transform:"translate(751 715)",fill:"primary"}),t("g",{id:"Group_25731","data-name":"Group 25731",transform:"translate(531.998 258.002)"},[t("g",{id:"Group_25717","data-name":"Group 25717",transform:"translate(238 476)"},[t("g",{id:"Group_25716","data-name":"Group 25716",transform:"translate(17.998)"},[t("path",{id:"Subtraction_208","data-name":"Subtraction 208",d:"M2.005,11.9H2A7,7,0,1,1,14,7a6.959,6.959,0,0,1-2,4.9c-.062-.505-.593-.978-1.5-1.331A5,5,0,1,0,2,7a4.961,4.961,0,0,0,1.5,3.571c-.9.354-1.435.827-1.495,1.333Z",transform:"translate(0)",fill:"#fff"}),t("g",{id:"Group_25715","data-name":"Group 25715",transform:"translate(1.346 9.86)"},[t("rect",{id:"Rectangle_19547","data-name":"Rectangle 19547",width:"7.999",height:"2",rx:"1",transform:"translate(4.242 5.656) rotate(-45)",fill:"#fff"}),t("rect",{id:"Rectangle_19548","data-name":"Rectangle 19548",width:"2",height:"7.999",rx:"1",transform:"translate(0 1.414) rotate(-45)",fill:"#fff"})]),t("ellipse",{id:"Ellipse_618","data-name":"Ellipse 618",cx:"2",cy:"2",rx:"2",ry:"2",transform:"translate(4.999 4.994)",fill:"#fff"})]),t("path",{id:"Subtraction_211","data-name":"Subtraction 211",d:"M15,18H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H15a3,3,0,0,1,3,3V15A3,3,0,0,1,15,18ZM3,2A1,1,0,0,0,2,3V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z",transform:"translate(0 13.998)",fill:"#fff"}),t("path",{id:"Rectangle_19552","data-name":"Rectangle 19552",d:"M0,0H2A0,0,0,0,1,2,0V5A1,1,0,0,1,1,6H1A1,1,0,0,1,0,5V0A0,0,0,0,1,0,0Z",transform:"translate(7.999 15.998)",fill:"#fff"}),t("path",{id:"Rectangle_19559","data-name":"Rectangle 19559",d:"M0,0H2A0,0,0,0,1,2,0V5A1,1,0,0,1,1,6H1A1,1,0,0,1,0,5V0A0,0,0,0,1,0,0Z",transform:"translate(19.998 29.996) rotate(-90)",fill:"#fff"})]),t("rect",{id:"Rectangle_19556","data-name":"Rectangle 19556",width:"2",height:"5.999",rx:"1",transform:"translate(262.997 494.205) rotate(45)",fill:"#fff"}),t("rect",{id:"Rectangle_19557","data-name":"Rectangle 19557",width:"5.999",height:"2",rx:"1",transform:"translate(262.997 494.205) rotate(45)",fill:"#fff"}),t("rect",{id:"Rectangle_19558","data-name":"Rectangle 19558",width:"2",height:"9.999",rx:"1",transform:"translate(261.997 495.998)",fill:"#fff"})])])],-1),M={class:"fs-14 mb-3 w-100"},Z=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"71",height:"71",viewBox:"0 0 71 71"},[t("g",{id:"Group_25732","data-name":"Group 25732",transform:"translate(-1099 -715)"},[t("rect",{id:"Rectangle",width:"71",height:"71",rx:"35.5",transform:"translate(1099 715)",fill:"#f3af3d"}),t("g",{id:"Group_25730","data-name":"Group 25730",transform:"translate(797 303)"},[t("rect",{id:"Rectangle_19531","data-name":"Rectangle 19531",width:"19.998",height:"2",rx:"1",transform:"translate(333.999 457.997)",fill:"#fff"}),t("rect",{id:"Rectangle_19533","data-name":"Rectangle 19533",width:"9.999",height:"2",rx:"1",transform:"translate(322 432)",fill:"#fff"}),t("rect",{id:"Rectangle_19532","data-name":"Rectangle 19532",width:"2",height:"23.997",rx:"1",transform:"translate(329.999 432)",fill:"#fff"}),t("path",{id:"Subtraction_202","data-name":"Subtraction 202",d:"M5,10a5,5,0,1,1,5-5A5.009,5.009,0,0,1,5,10ZM5,2A3,3,0,1,0,8,5,3,3,0,0,0,5,2Z",transform:"translate(325.996 453.997)",fill:"#fff"}),t("path",{id:"Subtraction_204","data-name":"Subtraction 204",d:"M17,10H3A3,3,0,0,1,0,7V3A3,3,0,0,1,3,0H17a3,3,0,0,1,3,3V7A3,3,0,0,1,17,10ZM3,2A1,1,0,0,0,2,3V7A1,1,0,0,0,3,8H17a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z",transform:"translate(333.995 445.999)",fill:"#fff"}),t("path",{id:"Subtraction_205","data-name":"Subtraction 205",d:"M11,10H3A3,3,0,0,1,0,7V3A3,3,0,0,1,3,0h8a3,3,0,0,1,3,3V7A3,3,0,0,1,11,10ZM3,2A1,1,0,0,0,2,3V7A1,1,0,0,0,3,8h8a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1Z",transform:"translate(333.987 438.003)",fill:"#fff"})])])],-1),$={class:"fs-14 mb-3 w-100"},k=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"70",height:"70",viewBox:"0 0 70 70"},[t("g",{id:"Group_25732","data-name":"Group 25732",transform:"translate(-1447 -715)"},[t("rect",{id:"Rectangle",width:"70",height:"70",rx:"35",transform:"translate(1447 715)",fill:"#0084b4"}),t("g",{id:"Group_25729","data-name":"Group 25729",transform:"translate(1438.534 191.037)"},[t("path",{id:"Path_2953","data-name":"Path 2953",d:"M20,5.963H12a3,3,0,0,0,0,6h8a3,3,0,0,0,0-6m0,4H12a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2",transform:"translate(27.466 537)",fill:"#fff"}),t("path",{id:"Path_2954","data-name":"Path 2954",d:"M25.982,9.963a1,1,0,0,1,0-2H27a5,5,0,0,1,5,5v20a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5v-20a5,5,0,0,1,5-5H6.017a1,1,0,0,1,0,2H5a3,3,0,0,0-3,3v20a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3v-20a3,3,0,0,0-3-3Z",transform:"translate(27.466 537)",fill:"#fff"}),t("g",{id:"Group_25728","data-name":"Group 25728",transform:"translate(34.273 554.963)"},[t("rect",{id:"Rectangle_19508","data-name":"Rectangle 19508",width:"16",height:"2",rx:"1",transform:"translate(5.658 11.314) rotate(-45)",fill:"#fff"}),t("rect",{id:"Rectangle_19509","data-name":"Rectangle 19509",width:"2",height:"10",rx:"1",transform:"translate(0 5.656) rotate(-45)",fill:"#fff"})])])])],-1);function S(a,s,B,P,j,E){const o=i("v-sheet"),n=i("v-col"),c=i("v-row"),d=i("v-btn");return m(),g("div",null,[t("div",u,[t("h1",v,l(a.$t("dashboard")),1),e(c,null,{default:r(()=>[e(n,{cols:"12",sm:"6"},{default:r(()=>[e(o,{color:"grey-darken-3",rounded:"rounded",elevation:"0",height:"130",class:"d-flex justify-center align-center white-text flex-column"},{default:r(()=>[t("div",y,l(a.$t("completed_delivery")),1),t("div",w,l(a.total_complete_delivery),1)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:r(()=>[e(o,{color:"grey-darken-3",rounded:"rounded",elevation:"0",height:"130",class:"d-flex justify-center align-center white-text flex-column"},{default:r(()=>[t("div",b,l(a.$t("pending_delivery")),1),t("div",x,l(a.total_pending_delivery),1)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:r(()=>[e(o,{color:"grey-darken-3",rounded:"rounded",elevation:"0",height:"130",class:"d-flex justify-center align-center white-text flex-column"},{default:r(()=>[t("div",A,l(a.$t("total_collected")),1),t("div",R,l(a.format_price(a.total_collection)),1)]),_:1})]),_:1}),e(n,{cols:"12",sm:"6"},{default:r(()=>[e(o,{color:"grey-darken-3",rounded:"rounded",elevation:"0",height:"130",class:"d-flex justify-center align-center white-text flex-column"},{default:r(()=>[t("div",G,l(a.$t("total_earnings")),1),t("div",H,l(a.format_price(a.total_earning)),1)]),_:1})]),_:1})]),_:1}),e(c,null,{default:r(()=>[e(n,{cols:"12",sm:"4"},{default:r(()=>[e(d,{class:"border border-gray-300 h-100 py-6",elevation:"0",block:"","x-large":"",to:{name:"OnTheWayDeliveries"}},{default:r(()=>[t("span",null,[t("div",V,l(a.$t("on_the_way_delivery_history")),1),D])]),_:1})]),_:1}),e(n,{cols:"12",sm:"4"},{default:r(()=>[e(d,{class:"border border-gray-300 h-100 py-6",elevation:"0",block:"","x-large":"",to:{name:"PickedUpDeliveries"}},{default:r(()=>[t("span",null,[t("div",M,l(a.$t("picked_up_delivery_history")),1),Z])]),_:1})]),_:1}),e(n,{cols:"12",sm:"4"},{default:r(()=>[e(d,{class:"border border-gray-300 h-100 py-6",elevation:"0",block:"","x-large":"",to:{name:"AssignedDeliveries"}},{default:r(()=>[t("span",null,[t("div",$,l(a.$t("assigned_delivery_history")),1),k])]),_:1})]),_:1})]),_:1})])])}const N=h(p,[["render",S]]);export{N as default};
