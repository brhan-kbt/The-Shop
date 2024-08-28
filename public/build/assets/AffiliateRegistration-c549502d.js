import{_ as q,u as I,c as U,a as f,e as F,m as v,b as A,d as _,f as r,o as l,v as D,w as n,h as d,i as o,t as a,j as R,g as i,k as u,F as p,l as c,n as B,p as N}from"./app-e7b909c6.js";const S={data:()=>({v$:I(),loading:!1,mobileInputProps:{inputOptions:{type:"tel",placeholder:"phone number"},dropdownOptions:{showDialCodeInSelection:!1,showFlags:!0,showDialCodeInList:!0},autoDefaultCountry:!1,validCharactersOnly:!0,mode:"international"},form:{name:"",email:"",password:"",confirmPassword:"",phone:"",address:"",description:"",invalidPhone:!0,showInvalidPhone:!1}}),components:{VueTelInput:U},validations:{form:{name:{required:f},email:{required:f,email:F},phone:{required:f},address:{required:f},description:{required:f}}},computed:{...v("auth",["isAuthenticated"]),...v("app",["generalSettings","availableCountries"])},methods:{...A("auth",["login"]),..._("cart",["removeTempUserId"]),..._("auth",["updateChatWindow","showLoginDialog"]),phoneValidate(e){this.form.invalidPhone=!e.valid,e.valid&&(this.form.showInvalidPhone=!1)},async submitRequest(){if(!await this.v$.$validate())return;if(this.form.invalidPhone){this.form.showInvalidPhone=!0;return}this.form.phone=this.form.phone.replace(/\s/g,""),this.loading=!0;const t=await this.call_api("post","user/affiliate/store",this.form);t.data.status==400&&this.snack({message:t.data.message,color:"yellow"}),t.data.success?(this.snack({color:"green",message:t.data.message}),this.$router.push({name:"AffiliateRegConfirmation"})):this.snack({message:t.data.message,color:"red"}),this.loading=!1},resetForm(){this.form.name="",this.form.phone="",this.form.email="",this.form.invalidPhone=!0,this.form.showInvalidPhone=!1,this.form.address="",this.form.description=""}}},L={class:"text-h3 fw-700 mb-8"},O={class:"text-h6 fw-600 opacity-80"},T={class:"mb-4"},M={class:"mb-1 fs-13 fw-500"},j={class:"mb-4"},z={class:"fs-13 fw-500"},E={key:0},G={class:"mb-4"},W={class:"mb-1 fs-13 fw-500"},H={class:"mb-4"},J={class:"mb-1 fs-13 fw-500"},K={class:"mb-4"},Q={class:"mb-1 fs-13 fw-500"},X=o("template",{slot:"arrow-icon"},[o("span",{class:"vti__dropdown-arrow"}," ▼")],-1),Y={key:0,class:"v-text-field__details mt-2 pl-3"},Z={class:"v-messages theme--light error--text",role:"alert"},x={class:"v-messages__wrapper text-red"},ee={class:"v-messages__message"},se={key:1,class:"v-text-field__details mt-2 pl-3"},oe={class:"v-messages theme--light error--text",role:"alert"},te={class:"v-messages__wrapper text-red"},ae={class:"v-messages__message"},le={class:"mb-4"},ie={class:"mb-1 fs-13 fw-500"},de={class:"mb-4"},re={class:"mb-1 fs-13 fw-500"};function ne(e,t,me,ue,pe,h){const $=r("v-card-title"),m=r("v-text-field"),w=r("vue-tel-input"),g=r("v-card-text"),b=r("v-card"),y=r("v-btn"),V=r("v-form"),k=r("v-col"),C=r("v-row"),P=r("v-container");return l(),D(P,{class:"py-6"},{default:n(()=>[d(C,null,{default:n(()=>[d(k,{cols:"12",lg:"10",md:"12",sm:"12",class:"mx-auto"},{default:n(()=>[o("h1",L,a(e.$t("affiliate_informations")),1),d(V,{"lazy-validation":"",onSubmit:t[7]||(t[7]=R(s=>h.submitRequest(),["prevent"]))},{default:n(()=>[d(b,{class:"border",elevation:"0"},{default:n(()=>[d($,null,{default:n(()=>[o("span",O,a(e.$t("verification_info")),1)]),_:1}),d(g,null,{default:n(()=>[o("div",T,[o("div",M,a(e.$t("your_name")),1),d(m,{variant:"plain",class:"text-field",placeholder:e.$t("full_name"),type:"text",modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.name=s),"hide-details":"auto",required:"",outlined:""},null,8,["placeholder","modelValue"]),(l(!0),i(p,null,u(e.v$.form.name.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))]),o("div",j,[o("div",z,a(e.$t("your_email")),1),d(m,{variant:"plain",class:"text-field",placeholder:e.$t("email_address"),type:"email",modelValue:e.form.email,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.email=s),"hide-details":"auto",required:"",outlined:""},null,8,["placeholder","modelValue"]),(l(!0),i(p,null,u(e.v$.form.email.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))]),e.isAuthenticated?c("",!0):(l(),i("div",E,[o("div",G,[o("div",W,a(e.$t("password")),1),d(m,{variant:"plain",placeholder:"* * * * * * * *",modelValue:e.form.password,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.password=s),type:"password",class:"input-group--focused text-field","hide-details":"auto",required:"",outlined:""},null,8,["modelValue"]),(l(!0),i(p,null,u(e.v$.form.password.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))]),o("div",H,[o("div",J,a(e.$t("confirm_password")),1),d(m,{variant:"plain",placeholder:"* * * * * * * *",modelValue:e.form.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=s=>e.form.confirmPassword=s),type:"password",class:"input-group--focused text-field","hide-details":"auto",required:"",outlined:""},null,8,["modelValue"]),(l(!0),i(p,null,u(e.v$.form.confirmPassword.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))])])),o("div",K,[o("div",Q,a(e.$t("phone_number")),1),d(w,B({modelValue:e.form.phone,"onUpdate:modelValue":t[4]||(t[4]=s=>e.form.phone=s)},e.mobileInputProps,{onlyCountries:e.availableCountries,onValidate:h.phoneValidate}),{default:n(()=>[X]),_:1},16,["modelValue","onlyCountries","onValidate"]),e.v$.form.phone.$error?(l(),i("div",Y,[o("div",Z,[o("div",x,[o("div",ee,a(e.$t("this_field_is_required")),1)])])])):c("",!0),!e.v$.form.phone.$error&&e.form.showInvalidPhone?(l(),i("div",se,[o("div",oe,[o("div",te,[o("div",ae,a(e.$t("phone_number_must_be_valid")),1)])])])):c("",!0)]),o("div",le,[o("div",ie,a(e.$t("full_address")),1),d(m,{variant:"plain",class:"text-field",placeholder:e.$t("full_address"),type:"text",modelValue:e.form.address,"onUpdate:modelValue":t[5]||(t[5]=s=>e.form.address=s),"hide-details":"auto",required:"",outlined:""},null,8,["placeholder","modelValue"]),(l(!0),i(p,null,u(e.v$.form.address.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))]),o("div",de,[o("div",re,a(e.$t("how_will_you_affiliate?")),1),d(m,{variant:"plain",class:"text-field",placeholder:e.$t("description"),type:"text",modelValue:e.form.description,"onUpdate:modelValue":t[6]||(t[6]=s=>e.form.description=s),"hide-details":"auto",required:"",outlined:""},null,8,["placeholder","modelValue"]),(l(!0),i(p,null,u(e.v$.form.description.$errors,s=>(l(),i("p",{key:s.$uid,class:"text-red"},a(s.$message),1))),128))])]),_:1})]),_:1}),d(y,{"x-large":"",class:"px-12 mb-4 w-100 mt-5",elevation:"0",type:"submit",color:"primary",onClick:h.submitRequest,loading:e.loading,disabled:e.loading},{default:n(()=>[N(a(e.$t("save")),1)]),_:1},8,["onClick","loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})}const he=q(S,[["render",ne]]);export{he as default};
