import{u as F,c as q,r as v,e as D,a as U,m as g,b as u,d as w,_ as b,f as l,o as r,g as n,h as a,w as d,i as t,t as i,j as L,F as y,k as $,l as m,n as T,p as B}from"./app-e7b909c6.js";const E={data:()=>({mobileInputProps:{inputOptions:{type:"tel",placeholder:"phone number"},dropdownOptions:{showDialCodeInSelection:!1,showFlags:!0,showDialCodeInList:!0},autoDefaultCountry:!1,validCharactersOnly:!0,mode:"international"},showPhoneField:!1,v$:F(),form:{phone:"",email:"",password:"",invalidPhone:!0,showInvalidPhone:!1},passwordShow:!1,loading:!1}),components:{VueTelInput:q},validations:{form:{email:{requiredIf:v(function(){return this.authSettings.customer_login_with=="email"||this.authSettings.customer_login_with=="email_phone"&&!this.showPhoneField}),email:D},phone:{requiredIf:v(function(){return this.authSettings.customer_login_with=="phone"||this.authSettings.customer_login_with=="email_phone"&&this.showPhoneField})},password:{required:U}}},computed:{...g("app",["generalSettings","availableCountries","demoMode","banners"]),...g("cart",["getTempUserId"]),...g("auth",["authSettings","currentUser"]),emailErrors(){const e=[];return this.v$.form.email.$dirty&&(!this.v$.form.email.requiredIf&&e.push(this.$i18n.t("this_field_is_required")),!this.v$.form.email.email&&e.push(this.$i18n.t("this_field_is_required_a_valid_email"))),e},passwordErrors(){const e=[];return this.v$.form.password.$dirty&&!this.v$.form.password.required&&e.push(this.$i18n.t("this_field_is_required")),e}},methods:{...u("auth",{actionLogin:"login"}),...u("app",["fetchProductQuerries"]),...u("wishlist",["fetchWislistProducts"]),...u("cart",["fetchCartProducts"]),...w("cart",["removeTempUserId"]),...w("auth",["updateChatWindow","showLoginDialog"]),phoneValidate(e){this.form.invalidPhone=!e.valid,e.valid&&(this.form.showInvalidPhone=!1)},...u(["auth/logout"]),async login(){if(!await this.v$.$validate())return;if((this.authSettings.customer_login_with=="phone"||this.authSettings.customer_login_with=="email_phone"&&this.showPhoneField)&&this.form.invalidPhone){this.form.showInvalidPhone=!0;return}this.getTempUserId&&(this.form.temp_user_id=this.getTempUserId),this.form.phone=this.form.phone.replace(/\s/g,""),this.form.form_type="delivery_boy",this.loading=!0;const s=await this.call_api("post","auth/login",this.form);s.data.success?(s.data.verified==!0||this.authSettings.customer_otp_with=="disabled"?(this.getTempUserId&&this.removeTempUserId(),this.actionLogin(s.data),this.showLoginDialog(!1),this.updateChatWindow(!1),this.fetchWislistProducts(),this.fetchProductQuerries(),this.fetchCartProducts(),this.$router.push(this.$route.query.redirect||{name:"DeliveryBoyDashboard"})):this.authSettings.customer_login_with=="email"||this.authSettings.customer_login_with=="email_phone"&&this.authSettings.customer_otp_with=="email"?this.$router.push({name:"VerifyAccount",params:{email:this.form.email}}):this.$router.push({name:"VerifyAccount",params:{phone:this.form.phone}}),this.snack({message:s.data.message})):this.snack({message:s.data.message,color:"red"}),this.loading=!1}},created(){this.demoMode&&(this.form.email="deliveryboy@example.com",this.form.password="123456")}},N={class:"rounded-lg pa-5 border border-gray-200 overflow-hidden white shadow-light"},M={class:"px-lg-7"},W={class:"text-uppercase lh-1 mb-6"},A={class:"opacity-50 fs-22 fw-400"},O={class:"d-block display-1 fw-900 primary-text"},z={class:"opacity-50 fs-22 fw-400"},Q={key:0,class:"mb-4"},j={class:"mb-1 fs-13 fw-500"},G={key:0,class:"text-end font-italic fs-12 opacity-70"},H={key:1,class:"mb-4"},J={class:"mb-1 fs-13 fw-500"},K=t("span",{class:"vti__dropdown-arrow"}," ▼",-1),R={key:0,class:"v-text-field__details mt-2 pl-3"},X={class:"v-messages theme-light error-text",role:"alert"},Y={class:"v-messages__wrapper"},Z={class:"v-messages__message"},x={key:1,class:"v-text-field__details mt-2 pl-3"},ee={class:"v-messages theme-light error-text",role:"alert"},se={class:"v-messages__wrapper"},te={class:"v-messages__message"},oe={key:2,class:"text-end font-italic fs-12 opacity-70"},ie={class:"mb-1 fs-13 fw-500"};function ae(e,s,P,S,V,h){const c=l("banner"),p=l("v-col"),_=l("v-text-field"),f=l("vue-tel-input"),C=l("v-btn"),k=l("v-form"),I=l("v-row");return r(),n("div",N,[a(I,{"no-gutters":"",align:"center"},{default:d(()=>[a(p,{cols:"12",lg:"6",order:"2","order-lg":"1",class:""},{default:d(()=>[a(c,{loading:!1,banner:e.$store.getters["app/banners"].delivery_boy_login_page,class:"mt-5 mt-lg-0"},null,8,["banner"])]),_:1}),a(p,{cols:"12",order:"1","order-lg":"2",lg:"6"},{default:d(()=>[t("div",M,[t("h1",W,[t("span",A,i(e.$t("delivery_boy_login_page")),1),t("span",O,i(e.$store.getters["app/appName"]),1),t("span",z,i(e.$t("account")),1)]),a(k,{ref:"loginForm","lazy-validation":"",onSubmit:s[6]||(s[6]=L(o=>h.login(),["prevent"]))},{default:d(()=>[e.authSettings.customer_login_with=="email"||!e.showPhoneField&&e.authSettings.customer_login_with=="email_phone"?(r(),n("div",Q,[t("div",j,i(e.$t("email")),1),a(_,{modelValue:e.form.email,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.email=o),placeholder:e.$t("email_address"),type:"text","error-messages":h.emailErrors,"hide-details":"auto",required:"",variant:"plain",class:"text-field"},null,8,["modelValue","placeholder","error-messages"]),(r(!0),n(y,null,$(e.v$.form.email.$errors,o=>(r(),n("p",{key:o.$uid,class:"text-red"},i(o.$message),1))),128)),e.authSettings.customer_login_with=="email_phone"?(r(),n("div",G,[t("span",{class:"primary-text c-pointer",onClick:s[1]||(s[1]=o=>e.showPhoneField=!e.showPhoneField)},i(e.$t("use_phone_instead")),1)])):m("",!0)])):m("",!0),e.authSettings.customer_login_with=="phone"||e.showPhoneField&&e.authSettings.customer_login_with=="email_phone"?(r(),n("div",H,[t("div",J,i(e.$t("phone_number")),1),a(f,T({modelValue:e.form.phone,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.phone=o)},e.mobileInputProps,{"only-countries":e.availableCountries,onValidate:h.phoneValidate}),{"arrow-icon":d(()=>[K]),_:1},16,["modelValue","only-countries","onValidate"]),e.v$.form.phone.$error?(r(),n("div",R,[t("div",X,[t("div",Y,[t("div",Z,i(e.$t("this_field_is_required")),1)])])])):m("",!0),!e.v$.form.phone.$error&&e.form.showInvalidPhone?(r(),n("div",x,[t("div",ee,[t("div",se,[t("div",te,i(e.$t("phone_number_must_be_valid")),1)])])])):m("",!0),e.authSettings.customer_login_with=="email_phone"?(r(),n("div",oe,[t("span",{class:"primary-text c-pointer",onClick:s[3]||(s[3]=o=>e.showPhoneField=!e.showPhoneField)},i(e.$t("use_phone_instead")),1)])):m("",!0)])):m("",!0),t("div",null,[t("div",ie,i(e.$t("password")),1),a(_,{modelValue:e.form.password,"onUpdate:modelValue":s[4]||(s[4]=o=>e.form.password=o),placeholder:"* * * * * * * *","error-messages":h.passwordErrors,type:e.passwordShow?"text":"password","append-icon":e.passwordShow?"las la-eye":"las la-eye-slash",class:"input-group-focused text-field","hide-details":"auto",required:"",variant:"plain","onClick:append":s[5]||(s[5]=o=>e.passwordShow=!e.passwordShow)},null,8,["modelValue","error-messages","type","append-icon"]),(r(!0),n(y,null,$(e.v$.form.password.$errors,o=>(r(),n("p",{key:o.$uid,class:"text-red"},i(o.$message),1))),128))]),a(C,{style:{color:"#fff !important"},size:"x-large",class:"px-16 mb-4 mt-2",elevation:"0",type:"submit",color:"primary",loading:e.loading,disabled:e.loading,onClick:h.login},{default:d(()=>[B(i(e.$t("login")),1)]),_:1},8,["loading","disabled","onClick"])]),_:1},512)])]),_:1})]),_:1})])}const re=b(E,[["render",ae]]),ne={components:{DeliveryBoyLoginForm:re}};function le(e,s,P,S,V,h){const c=l("delivery-boy-login-form"),p=l("v-col"),_=l("v-row"),f=l("v-container");return r(),n("div",null,[a(f,null,{default:d(()=>[a(_,null,{default:d(()=>[a(p,{xl:"10",class:"mx-auto my-5 my-lg-16"},{default:d(()=>[a(c)]),_:1})]),_:1})]),_:1})])}const he=b(ne,[["render",le]]);export{he as default};
