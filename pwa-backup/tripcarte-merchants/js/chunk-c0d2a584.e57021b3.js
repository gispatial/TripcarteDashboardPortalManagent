(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0d2a584"],{3636:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div"),s("vs-button",{attrs:{color:"#7ab8c5",type:"filled",target:"",href:{url:"https://tdmp-reviews.now.sh/"}}},[t._v("        View All Reviews        ")]),t._v("\n           "),s("vs-button",{attrs:{color:"#7ab8c5",type:"filled",target:"",href:{url:"https://tdmp-tickets.now.sh/"}}},[t._v("View all redeemed tickets")]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.subscribersGained.analyticsData?s("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"ShoppingBagIcon",statistic:"12k",statisticTitle:"Total Reviews Collected . Click to view all Reviews.",chartData:t.subscribersGained.series,type:"area"}}):t._e()],1),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.revenueGenerated.analyticsData?s("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"UsersIcon",statistic:"350 tickets . + 15%",statisticTitle:"Total Redemption this Week",chartData:t.revenueGenerated.series,color:"success",type:"area"}}):t._e()],1),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.quarterlySales.analyticsData?s("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"ShoppingCartIcon",statistic:"14k",statisticTitle:"Total Redemption this Year",chartData:t.quarterlySales.series,color:"danger",type:"area"}}):t._e()],1),s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.ordersRecevied.analyticsData?s("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"DollarSignIcon",statistic:"RM 2300",statisticTitle:"Total Pending Payout",chartData:t.ordersRecevied.series,color:"warning",type:"area"}}):t._e()],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[s("statistics-card-line",{staticClass:"md:mb-0 mb-base",attrs:{icon:"MonitorIcon","icon-right":"",statistic:"78.9k",statisticTitle:"View all redeemed tickets( Order , Item , Redeemed Date , Qty , Redeemed By )",chartData:t.siteTraffic.series}})],1),s("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[s("statistics-card-line",{staticClass:"md:mb-0 mb-base",attrs:{icon:"UserCheckIcon","icon-right":"",statistic:"659.8k",statisticTitle:"View all redeemed tickets( Order , Item , Redeemed Date , Qty , Redeemed By )",chartData:t.activeUsers.series,color:"success"}})],1),s("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[s("statistics-card-line",{attrs:{icon:"MailIcon","icon-right":"",statistic:"28.7k",statisticTitle:"Export data to csv",chartData:t.newsletter.series,color:"warning"}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Welcome User to Tripcarte.Asia Management Portal. "),a("p"),t._v("You have done 57.6% more sales today. Congratulations!")]),a("img",{staticClass:"decore-right",attrs:{src:s("ee15"),alt:"Decore Right",width:"30%"}})])}],r=s("43ca"),c={components:{StatisticsCardLine:r["a"]},data:function(){return{subscribersGained:{},revenueGenerated:{},quarterlySales:{},ordersRecevied:{},siteTraffic:{},activeUsers:{},newsletter:{}}},created:function(){var t=this;this.$http.get("/api/card/card-statistics/subscribers").then((function(e){t.subscribersGained=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/revenue").then((function(e){t.revenueGenerated=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/sales").then((function(e){t.quarterlySales=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(e){t.ordersRecevied=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/site-traffic").then((function(e){t.siteTraffic=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/active-users").then((function(e){t.activeUsers=e.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/newsletter").then((function(e){t.newsletter=e.data})).catch((function(t){console.log(t)}))}},o=c,n=s("2877"),l=Object(n["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports},"36bd":function(t,e,s){"use strict";var a=s("4bf8"),i=s("77f1"),r=s("9def");t.exports=function(t){var e=a(this),s=r(e.length),c=arguments.length,o=i(c>1?arguments[1]:void 0,s),n=c>2?arguments[2]:void 0,l=void 0===n?s:i(n,s);while(l>o)e[o++]=t;return e}},"43ca":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{staticClass:"overflow-hidden"},[s("div",{attrs:{slot:"no-body"},slot:"no-body"},[s("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[s("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),s("div",{staticClass:"truncate"},[s("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),s("span",[t._v(t._s(t.statisticTitle))])])],1),t.hideChart?t._e():s("div",{staticClass:"line-area-chart"},[s("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])},i=[],r=(s("6c7b"),s("6b54"),s("28a5"),s("c5f6"),s("1321")),c=s.n(r),o={areaChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},lineChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},n=s("ee53"),l={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(n["a"].isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e["primary"]}},components:{VueApexCharts:c.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},o.areaChartOptions),this.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(o.lineChartOptions)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},d=l,h=s("2877"),u=Object(h["a"])(d,a,i,!1,null,null,null);e["a"]=u.exports},"6c7b":function(t,e,s){var a=s("5ca1");a(a.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},ee15:function(t,e,s){t.exports=s.p+"img/decore-right.da0ab5cd.png"}}]);
//# sourceMappingURL=chunk-c0d2a584.e57021b3.js.map