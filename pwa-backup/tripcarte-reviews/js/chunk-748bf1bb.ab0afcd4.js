(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748bf1bb"],{"4e1d5":function(e,c,o){"use strict";o.r(c);var n=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("div",{attrs:{id:"form-element-checkbox-demo"}},[o("checkbox-state"),o("checkbox-color"),o("checkbox-boolean-value"),o("checkbox-string-value"),o("checkbox-array-value"),o("checkbox-array-object-value"),o("checkbox-change-icon")],1)},l=[],a=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"State","code-toggler":""}},[o("span",[e._v("To add a checkBox, we have the "),o("code",[e._v("vs-checkbox")]),e._v(" component which expects a principal parameter "),o("code",[e._v("v-model")]),e._v(" that would be our value.")]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Primary - active")])],1),o("li",[o("vs-checkbox",{model:{value:e.checkBox2,callback:function(c){e.checkBox2=c},expression:"checkBox2"}},[e._v("Primary - inactive")])],1),o("li",[o("vs-checkbox",{attrs:{disabled:"true"},model:{value:e.checkBox3,callback:function(c){e.checkBox3=c},expression:"checkBox3"}},[e._v("Primary - active - disabled")])],1),o("li",[o("vs-checkbox",{attrs:{disabled:"true"},model:{value:e.checkBox4,callback:function(c){e.checkBox4=c},expression:"checkBox4"}},[e._v("Primary - inactive - disabled")])],1)]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <ul class="centerx">\n    <li>\n      <vs-checkbox v-model="checkBox1">Primary - active</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox v-model="checkBox2">Primary - inactive</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox disabled="true" v-model="checkBox3">Primary - active - disabled</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox disabled="true" v-model="checkBox4">Primary - inactive - disabled</vs-checkbox>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      checkBox1:true,\n      checkBox2:false,\n      checkBox3:true,\n      checkBox4:false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},t=[],s={data:function(){return{checkBox1:!0,checkBox2:!1,checkBox3:!0,checkBox4:!1}}},i=s,r=o("2877"),k=Object(r["a"])(i,a,t,!1,null,null,null),h=k.exports,x=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"Color","code-toggler":""}},[o("span",[e._v("You can change the color of the checkBox with the property "),o("code",[e._v("color")]),e._v(". You are able to use the Main Colors or "),o("strong",[e._v("RGB")]),e._v(" and "),o("strong",[e._v("HEX")]),e._v(" colors.")]),o("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[o("span",[e._v("Only "),o("strong",[e._v("RGB")]),e._v(" and "),o("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Primary")])],1),o("li",[o("vs-checkbox",{attrs:{color:"success"},model:{value:e.checkBox2,callback:function(c){e.checkBox2=c},expression:"checkBox2"}},[e._v("Success")])],1),o("li",[o("vs-checkbox",{attrs:{color:"danger"},model:{value:e.checkBox3,callback:function(c){e.checkBox3=c},expression:"checkBox3"}},[e._v("Danger")])],1),o("li",[o("vs-checkbox",{attrs:{color:"warning"},model:{value:e.checkBox4,callback:function(c){e.checkBox4=c},expression:"checkBox4"}},[e._v("Warning")])],1),o("li",[o("vs-checkbox",{attrs:{color:"dark"},model:{value:e.checkBox5,callback:function(c){e.checkBox5=c},expression:"checkBox5"}},[e._v("Dark")])],1),o("li",[o("vs-checkbox",{attrs:{color:"rgb(38, 187, 174)"},model:{value:e.checkBox6,callback:function(c){e.checkBox6=c},expression:"checkBox6"}},[e._v("Color RGB")])],1),o("li",[o("vs-checkbox",{attrs:{color:"#720ea8"},model:{value:e.checkBox7,callback:function(c){e.checkBox7=c},expression:"checkBox7"}},[e._v("Color HEX")])],1)]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <ul class="demo-alignment">\n    <li>\n      <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="success" v-model="checkBox2">Success</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="danger" v-model="checkBox3">Danger</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="warning" v-model="checkBox4">Warning</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="dark" v-model="checkBox5">Dark</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n          checkBox1: true,\n          checkBox2: true,\n          checkBox3: true,\n          checkBox4: true,\n          checkBox5: true,\n          checkBox6: true,\n          checkBox7: true,\n        }\n    }\n}\n<\/script>\n        ')])],2)},v=[],u={data:function(){return{checkBox1:!0,checkBox2:!0,checkBox3:!0,checkBox4:!0,checkBox5:!0,checkBox6:!0,checkBox7:!0}}},d=u,B=Object(r["a"])(d,x,v,!1,null,null,null),b=B.exports,m=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"Boolean Value","code-toggler":""}},[o("span",[e._v("In most cases you will need a boolean data type while working with checkBoxes. For making this possible you have to link a boolean value in "),o("code",[e._v("v-model")])]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v(e._s(e.checkBox1))])],1),o("li",[o("vs-checkbox",{model:{value:e.checkBox2,callback:function(c){e.checkBox2=c},expression:"checkBox2"}},[e._v(e._s(e.checkBox2))])],1)]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <ul class="centerx">\n    <li>\n      <vs-checkbox v-model="checkBox1">'+e._s("{{ checkBox1 }}")+'</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox v-model="checkBox2">'+e._s("{{ checkBox2 }}")+"</vs-checkbox>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      checkBox1: true,\n      checkBox2: false,\n    }\n  }\n}\n<\/script>\n        ")])],2)},p=[],_={data:function(){return{checkBox1:!0,checkBox2:!1}}},f=_,g=Object(r["a"])(f,m,p,!1,null,null,null),C=g.exports,y=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"String Value","code-toggler":""}},[o("span",[e._v("You can pass as a value a string by giving it as a value of the property "),o("code",[e._v("vs-value")])]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{attrs:{"vs-value":"Luis Daniel"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Luis Daniel")])],1),o("li",{staticClass:"op-block"},[e._v("\n            "+e._s(null==e.checkBox1?"null":e.checkBox1)+"\n          ")])]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <ul class="demo-alignment">\n    <li>\n      <vs-checkbox v-model="checkBox1" vs-value="Luis Daniel">Luis Daniel</vs-checkbox>\n    </li>\n    <li class="op-block">\n      '+e._s("{{ checkBox1==null?&apos;null&apos;:checkBox1 }}")+"\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      checkBox1: null,\n    }\n  }\n}\n<\/script>\n        ")])],2)},w=[],S={data:function(){return{checkBox1:null}}},j=S,E=Object(r["a"])(j,y,w,!1,null,null,null),P=E.exports,O=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"Array Values","code-toggler":""}},[o("span",[e._v("You can have several checkBoxs linked to the same array only by using "),o("code",[e._v("v-model")]),e._v(" with a value of "),o("strong",[e._v("array")]),e._v(".")]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{attrs:{"vs-value":"luis"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Luis")])],1),o("li",[o("vs-checkbox",{attrs:{"vs-value":"carols"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Carols")])],1),o("li",[o("vs-checkbox",{attrs:{"vs-value":"summer"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Summer")])],1),o("li",[o("vs-checkbox",{attrs:{"vs-value":"lyon"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Lyon")])],1),o("li",{staticClass:"op-block"},[e._v("\n                "+e._s(e.checkBox1)+"\n            ")])]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n  <ul class="centerx">\n    <li>\n      <vs-checkbox v-model="checkBox1" vs-value="luis">Luis</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox v-model="checkBox1" vs-value="carols">Carols</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox v-model="checkBox1" vs-value="summer">Summer</vs-checkbox>\n    </li>\n    <li>\n      <vs-checkbox v-model="checkBox1" vs-value="lyon">Lyon</vs-checkbox>\n    </li>\n    <li class="modelx">\n      '+e._s("{{ checkBox1 }}")+"\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      checkBox1: ['luis']\n    }\n  }\n}\n<\/script>\n        ")])],2)},L=[],$={data:function(){return{checkBox1:["luis"]}}},D=$,V=Object(r["a"])(D,O,L,!1,null,null,null),A=V.exports,G=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"Array Object values","code-toggler":""}},[o("span",[e._v("Sometimes you need to link an object as a value when selecting a checkBox for it, you only have to put it as value in "),o("strong",[e._v("vs-value")]),e._v(" an object either literal or linked.")]),o("ul",{staticClass:"demo-alignment"},e._l(e.regions,(function(c,n){return o("li",{key:n},[o("vs-checkbox",{attrs:{"vs-value":c},model:{value:e.form.regions,callback:function(c){e.$set(e.form,"regions",c)},expression:"form.regions"}},[e._v(e._s(c.name))])],1)})),0),o("div",{staticClass:"op-block mt-5"},[e._v(e._s(e.form.regions))]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n    <ul class="centerx">\n      <li v-for="(region, index) in regions" :key="index">\n        <vs-checkbox v-model="form.regions" :vs-value="region" >'+e._s("{{ region.name }}")+'</vs-checkbox>\n      </li>\n    </ul>\n\n    <div class="modelx">'+e._s("{{ form.regions }}")+"</div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    form: {\n    regions: []\n  },\n  regions: [\n    { id: 1, name: 'Queensland' },\n    { id: 2, name: 'South Australia' },\n    { id: 3, name: 'New South Wales' },\n  ]\n})\n}\n<\/script>\n        ")])],2)},H=[],R={data:function(){return{form:{regions:[]},regions:[{id:1,name:"Queensland"},{id:2,name:"South Australia"},{id:3,name:"New South Wales"}]}}},W=R,X=Object(r["a"])(W,G,H,!1,null,null,null),Y=X.exports,F=function(){var e=this,c=e.$createElement,o=e._self._c||c;return o("vx-card",{attrs:{title:"Change Icon","code-toggler":""}},[o("span",[e._v("Sometimes we want to change the internal icon inside the checkbox. To do so, we have the property "),o("code",[e._v("icon")])]),o("ul",{staticClass:"demo-alignment"},[o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-check"},model:{value:e.checkBox1,callback:function(c){e.checkBox1=c},expression:"checkBox1"}},[e._v("Primary")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-message-square",color:"success"},model:{value:e.checkBox2,callback:function(c){e.checkBox2=c},expression:"checkBox2"}},[e._v("SMS")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-x",color:"danger"},model:{value:e.checkBox3,callback:function(c){e.checkBox3=c},expression:"checkBox3"}},[e._v("Cancel")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-paperclip",color:"warning"},model:{value:e.checkBox4,callback:function(c){e.checkBox4=c},expression:"checkBox4"}},[e._v("File")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-bold",color:"dark"},model:{value:e.checkBox5,callback:function(c){e.checkBox5=c},expression:"checkBox5"}},[e._v("Bold")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-map-pin",color:"rgb(38, 187, 174)"},model:{value:e.checkBox6,callback:function(c){e.checkBox6=c},expression:"checkBox6"}},[e._v("Location")])],1),o("li",[o("vs-checkbox",{attrs:{"icon-pack":"feather",icon:"icon-camera",color:"#720ea8"},model:{value:e.checkBox7,callback:function(c){e.checkBox7=c},expression:"checkBox7"}},[e._v("Camera")])],1)]),o("template",{slot:"codeContainer"},[e._v('\n<template>\n    <ul class="demo-alignment">\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-check" v-model="checkBox1">Primary</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-message-square" color="success" v-model="checkBox2">SMS</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-x" color="danger" v-model="checkBox3">Cancel</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-paperclip" color="warning" v-model="checkBox4">File</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-bold" color="dark" v-model="checkBox5">Bold</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-map-pin" color="rgb(38, 187, 174)" v-model="checkBox6">Location</vs-checkbox>\n      </li>\n      <li>\n        <vs-checkbox icon-pack="feather" icon="icon-camera" color="#720ea8" v-model="checkBox7">Camera</vs-checkbox>\n      </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      checkBox1:true,\n      checkBox2:true,\n      checkBox3:true,\n      checkBox4:true,\n      checkBox5:true,\n      checkBox6:true,\n      checkBox7:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)},I=[],M={data:function(){return{checkBox1:!0,checkBox2:!0,checkBox3:!0,checkBox4:!0,checkBox5:!0,checkBox6:!0,checkBox7:!0}}},q=M,J=Object(r["a"])(q,F,I,!1,null,null,null),N=J.exports,Q={components:{CheckboxState:h,CheckboxColor:b,CheckboxBooleanValue:C,CheckboxStringValue:P,CheckboxArrayValue:A,CheckboxArrayObjectValue:Y,CheckboxChangeIcon:N}},T=Q,z=Object(r["a"])(T,n,l,!1,null,null,null);c["default"]=z.exports}}]);
//# sourceMappingURL=chunk-748bf1bb.ab0afcd4.js.map