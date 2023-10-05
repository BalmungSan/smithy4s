"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[2408],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(i),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return i?n.createElement(h,o(o({ref:t},m),{},{components:i})):n.createElement(h,o({ref:t},m))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6750:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_label:"SimpleRestJson",title:"The SimpleRestJson protocol"},o=void 0,l={unversionedId:"protocols/simple-rest-json/overview",id:"protocols/simple-rest-json/overview",title:"The SimpleRestJson protocol",description:"Smithy4s provides a custom Json-in/Json-out protocol that smithy services can be annotated with.",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/04-simple-rest-json/01-overview.md",sourceDirName:"03-protocols/04-simple-rest-json",slug:"/protocols/simple-rest-json/overview",permalink:"/smithy4s/docs/protocols/simple-rest-json/overview",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/04-simple-rest-json/01-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"SimpleRestJson",title:"The SimpleRestJson protocol"},sidebar:"tutorialSidebar",previous:{title:"Localstack",permalink:"/smithy4s/docs/protocols/aws/localstack"},next:{title:"Server",permalink:"/smithy4s/docs/protocols/simple-rest-json/server"}},s={},p=[{value:"Semantics",id:"semantics",level:2},{value:"Example spec",id:"example-spec",level:2},{value:"Supported traits",id:"supported-traits",level:2},{value:"Decoding and encoding unions",id:"decoding-and-encoding-unions",level:2},{value:"Json Array Arity",id:"json-array-arity",level:2},{value:"Explicit Null Encoding",id:"explicit-null-encoding",level:2},{value:"Supported traits",id:"supported-traits-1",level:2},{value:"Structured Strings",id:"structured-strings",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Smithy4s provides a custom Json-in/Json-out protocol that smithy services can be annotated with."),(0,r.kt)("p",null,"Smithy4s comes with opt-in http4s-specific module, that contains functions that are aware of this protocol, and can be used to quickly derive http services and clients."),(0,r.kt)("p",null,"As for the json aspect of the protocol, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/plokhotnyuk/jsoniter-scala/"},"jsoniter-scala")," is used for the (de)serialisation of the http bodies."),(0,r.kt)("h2",{id:"semantics"},"Semantics"),(0,r.kt)("p",null,"In this protocol, the values in shapes are bound to http metadata or body according to the specification of the ",(0,r.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/1.0/spec/core/http-traits.html?highlight=http#http-binding-traits"},"Http Binding traits"),". However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@mediaType")," trait has no incidence, and all bodies (when present) are serialised in JSON."),(0,r.kt)("h2",{id:"example-spec"},"Example spec"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace smithy4s.example\n\nuse alloy#simpleRestJson\n\n@simpleRestJson\nservice HelloWorldService {\n  version: "1.0.0"\n  // Indicates that all operations in `HelloWorldService`,\n  // here limited to the Hello operation, can return `GenericServerError`.\n  errors: [GenericServerError]\n  operations: [Hello]\n}\n\n@error("server")\n@httpError(500)\nstructure GenericServerError {\n  message: String\n}\n\n@http(method: "POST", uri: "/{name}", code: 200)\noperation Hello {\n  input: Person\n  output: Greeting\n}\n\nstructure Person {\n  @httpLabel\n  @required\n  name: String\n\n  @httpQuery("town")\n  town: String\n}\n\nstructure Greeting {\n  @required\n  message: String\n}\n')),(0,r.kt)("h2",{id:"supported-traits"},"Supported traits"),(0,r.kt)("p",null,"This protocol and its interpreters, are aware of the following traits provided out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/model.html#simple-shapes"},"all simple shapes")),(0,r.kt)("li",{parentName:"ul"},"composite data shapes, including collections, unions, structures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/model.html#service"},"operations and services")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/constraint-traits.html#enum-trait"},"enumerations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/type-refinement-traits.html#error-trait"},"error trait")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/http-traits.html"},"http traits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://awslabs.github.io/smithy/1.0/spec/core/protocol-traits.html?highlight=timestampformat#timestampformat-trait"},"timestampFormat trait"))),(0,r.kt)("p",null,"For the full list, see below."),(0,r.kt)("h2",{id:"decoding-and-encoding-unions"},"Decoding and encoding unions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRestJson")," protocol supports 3 different union encodings :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tagged (default)"),(0,r.kt)("li",{parentName:"ul"},"untagged"),(0,r.kt)("li",{parentName:"ul"},"discriminated")),(0,r.kt)("p",null,"See the section about ",(0,r.kt)("a",{parentName:"p",href:"/smithy4s/docs/codegen/unions"},"unions")," for a detailed description."),(0,r.kt)("h2",{id:"json-array-arity"},"Json Array Arity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default there is a limit on the arity of an array, which is 1024. This is to prevent the server from being overloaded with a large array as this is a vector for attacks."),(0,r.kt)("li",{parentName:"ul"},"This limit can be changed by setting the maxArity ",(0,r.kt)("inlineCode",{parentName:"li"},"smithy4s.http4s.SimpleRestJsonBuilder.withMaxArity(.)")," to the desired value."),(0,r.kt)("li",{parentName:"ul"},"an example can be seen in the ",(0,r.kt)("a",{parentName:"li",href:"/smithy4s/docs/protocols/simple-rest-json/client"},"client example"))),(0,r.kt)("h2",{id:"explicit-null-encoding"},"Explicit Null Encoding"),(0,r.kt)("p",null,"By default, optional structure fields that are set to ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," will be excluded from encoded structures. If you wish to change this so that instead they are included and set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," explicitly, you can do so by calling ",(0,r.kt)("inlineCode",{parentName:"p"},".withExplicitDefaultsEncoding(true)"),"."),(0,r.kt)("h2",{id:"supported-traits-1"},"Supported traits"),(0,r.kt)("p",null,"Here is the list of traits supported by ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleRestJson")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#http")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpHeader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpLabel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpPayload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpPrefixHeaders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpQuery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpQueryParams")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#httpResponseCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#jsonName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#pattern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#range")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"smithy.api#timestampFormat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alloy#uncheckedExamples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alloy#uuidFormat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alloy#discriminated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alloy#untagged"))),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"@cors")," is not supported. This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"@cors")," annotation is too restrictive. You can still use it in your model and configure your API using the information found in the generated code. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/disneystreaming/smithy4s/blob/518675fc1aa805f9a0e553a198ef886471c93c5e/modules/guides/src/smithy4s/guides/Cors.scala"},(0,r.kt)("inlineCode",{parentName:"a"},"Cors.scala"))," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"guides")," module for an example."),(0,r.kt)("h2",{id:"structured-strings"},"Structured Strings"),(0,r.kt)("p",null,"As of smithy4s version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.18.x"),", you are able to create strings which are parsed directly into structures for you. This can be accomplished using the ",(0,r.kt)("inlineCode",{parentName:"p"},"alloy#structurePattern")," trait. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smithy"},'@structurePattern(pattern: "{foo}_{bar}", target: FooBar)\nstring FooBarString\n\nstructure FooBar {\n  @required\n  foo: String\n  @required\n  bar: Integer\n}\n')),(0,r.kt)("p",null,"Now wherever ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBarString")," is used, it will really be parsing the string into the structure ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBar"),". As such, the generated code will replace instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBarString")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"FooBar")," such that the parsing logic is abstracted away from your implementation. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/disneystreaming/alloy#alloystructurepattern"},"alloy documentation")," for more information."))}c.isMDXComponent=!0}}]);