(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7504366f"],{"49ed":function(e,s,t){"use strict";t("bc38")},bb51:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e._self._c;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"home"},[s("swiper",{ref:"mySwiper",attrs:{id:"swiperBox",options:e.swiperOption}},[s("swiper-slide",{staticClass:"swiper-slide slide-one"},[s("div",{staticClass:"page"},[s("h3",[e._v("新越焕彩")]),s("p",[e._v("Shiny Health")])]),s("p",{staticClass:"slogan"},[e._v("立人立己 达人达己")])]),s("swiper-slide",{staticClass:"swiper-slide slide-two"},[s("div",{staticClass:"page"},[s("h3",[e._v("产品展示")]),s("p",[e._v("Suecessful Cass")])]),s("ul",{staticClass:"case-item"},e._l(e.caseList,(function(t,i){return s("li",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imgserver+t.Img,expression:"imgserver + item.Img",arg:"background-image"}],key:i},[s("router-link",{staticClass:"text-decoration",attrs:{to:{name:"casedetails",params:{id:t.Id}}}},[s("div",{staticClass:"case-item-hover"},[s("p",{staticClass:"hover-title"},[e._v(e._s(t.Title))]),s("div",{staticClass:"bottom"}),s("div",{staticClass:"more"},[s("span",[e._v("MORE")])])])])],1)})),0)]),s("swiper-slide",{staticClass:"swiper-slide slide-three"},[s("div",{staticClass:"page"},[s("h3",[e._v("最新资讯")]),s("p",[e._v("Latest News")])]),s("div",{staticClass:"news-content"},e._l(e.newsList,(function(t,i){return s("div",{key:i,staticClass:"news-content-item"},[s("div",{style:"order: "+(i%2==0?1:3)},[s("router-link",{staticClass:"text-decoration",attrs:{to:{name:"newsdetails",params:{id:t.Id}}}},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imgserver+t.Img,expression:"imgserver + news.Img",arg:"background-image"}],staticClass:"item-img"})])],1),s("div",{staticStyle:{order:"2"}},[s("el-divider",[s("i",{staticClass:"el-icon-apple"})])],1),s("div",{staticClass:"item-content",style:"order: "+(i%2==0?3:1)},[s("h3",[e._v(e._s(t.Title))]),s("p",[e._v(e._s(t.Content))]),s("span",[e._v(e._s(t.CreateTime))])])])})),0)])],1)],1)},a=[],r=t("7212"),n={name:"HelloWorld",components:{swiper:r["swiper"],swiperSlide:r["swiperSlide"]},data:function(){return{loading:!0,caseList:[],newsList:[],swiperOption:{notNextTick:!0,direction:"vertical",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,slidesPerView:1,mousewheel:!0,mousewheelControl:!0,height:window.innerHeight-60,resistanceRatio:0,observeParents:!0,on:{}}}},created:function(){},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){var e=this;this.$http.all([this.$http.get("Cases/GetCasesAll"),this.$http.get("News?type=1&num=3")]).then(this.$http.spread((function(s,t){e.caseList=s.data,e.newsList=t.data,e.loading=!1})))}},l=n,o=(t("49ed"),t("2877")),c=Object(o["a"])(l,i,a,!1,null,"57b72d6c",null);s["default"]=c.exports},bc38:function(e,s,t){}}]);
//# sourceMappingURL=chunk-7504366f.acc39c64.js.map