(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6532e5fc"],{"3d33":function(t,e,o){"use strict";o("e85d")},"5be6":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cases"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增数据")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),e("el-table-column",{attrs:{prop:"Year",label:"历程年份",width:"180"}}),e("el-table-column",{attrs:{prop:"Content",label:"历程内容"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(o.$index,o.row)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(o.$index,o.row)}}})]}}])})],1),e("el-dialog",{attrs:{title:"发展历程编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.formData}},[e("el-form-item",{attrs:{label:"历程年份","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Year,callback:function(e){t.$set(t.formData,"Year",e)},expression:"formData.Year"}})],1),e("el-form-item",{attrs:{label:"历程内容","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Content,callback:function(e){t.$set(t.formData,"Content",e)},expression:"formData.Content"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},n=[],i={data:function(){return{loading:!0,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,Year:"",Content:"",CreateTime:new Date},options:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.loadData()},methods:{loadData:function(){var t=this;this.loading=!0,this.$http.get("Course/GetCourseAll").then((function(e){window.console.log(e),t.tableData=e.data,t.loading=!1})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},openDialog:function(){this.formData.Id=0,this.formData.LoginName="",this.formData.Password="",this.formData.IsAction=!0,this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;window.console.log(this.formData),this.formData.Id?(this.loading=!0,this.$http.post("Course/ModifiedCourse",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))):(this.loading=!0,this.$http.post("Course/CreateCourse",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var o=this;window.console.log(t,e),this.$confirm("此操作将永久此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o.loading=!0,o.$http.post("Course/DeleteCourse?id=".concat(e.Id),null,o.options).then((function(t){o.loading=!1,window.console.log(t),o.$message({message:"删除成功！",type:"success"}),o.loadData()})).catch((function(t){o.$message({message:"网络或程序异常！"+t,type:"error"})}))})).catch((function(){o.$message({type:"info",message:"已取消删除"})}))},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},s=i,l=(o("3d33"),o("2877")),r=Object(l["a"])(s,a,n,!1,null,"d6797820",null);e["default"]=r.exports},e85d:function(t,e,o){}}]);
//# sourceMappingURL=chunk-6532e5fc.c9341924.js.map