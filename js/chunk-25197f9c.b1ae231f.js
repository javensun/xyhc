(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25197f9c"],{"7f7f":function(e,n,t){var a=t("86cc").f,o=Function.prototype,l=/^\s*function ([^ (]*)/,i="name";i in o||t("9e1e")&&a(o,i,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},f91e:function(e,n,t){"use strict";t.r(n);t("7f7f");var a=function(){var e=this,n=e._self._c;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"姓名："}},[n("el-input",{attrs:{placeholder:"姓名"},model:{value:e.formInline.name,callback:function(n){e.$set(e.formInline,"name",n)},expression:"formInline.name"}})],1),n("el-form-item",{attrs:{label:"年龄："}},[n("el-input",{attrs:{label:"年龄"},model:{value:e.formInline.age,callback:function(n){e.$set(e.formInline,"age",n)},expression:"formInline.age"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSelect}},[e._v("查询")])],1)],1),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),n("el-table-column",{attrs:{prop:"age",label:"年龄"}})],1),n("el-pagination",{attrs:{background:"",layout:"sizes,prev, pager, next","page-sizes":[5,10,15,20],total:e.totalCount,"current-page":e.pageIndex,"page-size":e.pageSize},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)},o=[],l={data:function(){return{loading:!0,pageIndex:1,pageSize:5,formInline:{name:"",age:""},tableData:[],totalCount:0}},mounted:function(){this.onSelect()},methods:{onSelect:function(){var e=this;this.loading=!0,this.$http.get("https://localhost:5001/api/User/GetUsers?name=".concat(this.formInline.name,"&age=").concat(this.formInline.age,"&pageIndex=").concat(this.pageIndex,"&pageSize=").concat(this.pageSize)).then((function(n){window.console.log(n),e.tableData=n.data.data,e.totalCount=n.data.totalCount,e.loading=!1})).catch((function(n){e.$message({message:"网络或程序异常！"+n,type:"error"}),e.loading=!1}))},currentChange:function(e){window.console.log("当前页: ".concat(e)),this.pageIndex=e,this.onSelect()},sizeChange:function(e){window.console.log("每页 ".concat(e," 条")),this.pageSize=e,this.onSelect()}}},i=l,r=t("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-25197f9c.b1ae231f.js.map