"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[6213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(a),d=s,u=h["".concat(c,".").concat(d)]||h[d]||m[d]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:s,r[1]=o;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_label:"Typeclass Instances",title:"Non-Orphan Typeclass Instances"},r=void 0,o={unversionedId:"codegen/customisation/typeclass",id:"codegen/customisation/typeclass",title:"Non-Orphan Typeclass Instances",description:"As of smithy4s version 0.18.x you are able to create custom typeclass instances inside the companion objects of classes in the code generated by smithy4s. This allows you to have instances that are found via implicit resolution without any need to special imports. Common examples where this will come in handy are for the cats.Show and cats.Eq typeclasses, but you can use this feature for any typeclass.",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation/09-typeclass.md",sourceDirName:"04-codegen/01-customisation",slug:"/codegen/customisation/typeclass",permalink:"/smithy4s/docs/codegen/customisation/typeclass",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation/09-typeclass.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Typeclass Instances",title:"Non-Orphan Typeclass Instances"},sidebar:"tutorialSidebar",previous:{title:"Wildcard types",permalink:"/smithy4s/docs/codegen/customisation/wildcard"},next:{title:"Service Product",permalink:"/smithy4s/docs/codegen/customisation/service-product"}},c={},l=[{value:"Setup Typeclass in Smithy",id:"setup-typeclass-in-smithy",level:2},{value:"Implement CachedSchemaCompiler",id:"implement-cachedschemacompiler",level:2},{value:"Use the hash typeclass trait",id:"use-the-hash-typeclass-trait",level:2}],p={toc:l},h="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As of smithy4s version ",(0,s.kt)("inlineCode",{parentName:"p"},"0.18.x")," you are able to create custom typeclass instances inside the companion objects of classes in the code generated by smithy4s. This allows you to have instances that are found via implicit resolution without any need to special imports. Common examples where this will come in handy are for the ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Show")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Eq")," typeclasses, but you can use this feature for any typeclass."),(0,s.kt)("p",null,"Here we will show an example using the ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Hash")," typeclass."),(0,s.kt)("h2",{id:"setup-typeclass-in-smithy"},"Setup Typeclass in Smithy"),(0,s.kt)("p",null,"Here we will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#typeclass")," trait to define a ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," trait that represents the ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Hash")," typeclass."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-smithy"},'use smithy4s.meta#typeclass\n\n@trait\n@typeclass(targetType: "cats.Hash", interpreter: "smithy4s.interopcats.SchemaVisitorHash")\nstructure hash {}\n')),(0,s.kt)("p",null,"We are specifying ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.hash")," as the ",(0,s.kt)("inlineCode",{parentName:"p"},"targetType")," since that is the typeclass which this trait represents. We are then specifying ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s.interopcats.SchemaVisitorHash")," as the classpath which points to a ",(0,s.kt)("inlineCode",{parentName:"p"},"CachedSchemaCompiler")," for the ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Hash")," typeclass."),(0,s.kt)("h2",{id:"implement-cachedschemacompiler"},"Implement CachedSchemaCompiler"),(0,s.kt)("p",null,"Smithy4s has a concept called ",(0,s.kt)("inlineCode",{parentName:"p"},"CachedSchemaCompiler")," which is an abstraction which we use here to interpret a ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s.Schema")," to produce an instance of a typeclass. Here is what this will look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"object SchemaVisitorHash extends CachedSchemaCompiler.Impl[Hash] {\n  protected type Aux[A] = Hash[A]\n  def fromSchema[A](\n      schema: Schema[A],\n      cache: Cache\n  ): Hash[A] = {\n    schema.compile(new SchemaVisitorHash(cache))\n  }\n}\n")),(0,s.kt)("p",null,"Here we are delegating to the ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaVisitorHash")," which is doing the heavy lifting of interpreting the ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s.Schema"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"CachedSchemaCompiler.Impl")," provides a ",(0,s.kt)("inlineCode",{parentName:"p"},"Cache")," which we utilize to make sure we are not recompiling the same schema more than once. For more details on implementing a ",(0,s.kt)("inlineCode",{parentName:"p"},"SchemaVisitor"),", you can check out the full ",(0,s.kt)("inlineCode",{parentName:"p"},"cats.Hash")," schema compiler and visitor ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/disneystreaming/smithy4s/blob/series/0.18/modules/cats/src/smithy4s/interopcats/SchemaVisitorHash.scala"},"here"),"."),(0,s.kt)("h2",{id:"use-the-hash-typeclass-trait"},"Use the hash typeclass trait"),(0,s.kt)("p",null,"Now we are ready to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"hash")," trait we defined above."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-smithy"},"@hash\nstructure MovieTheater {\n  name: String\n}\n")),(0,s.kt)("p",null,"This tells smithy4s to generate an instance of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Hash")," typeclass in the companion object of the ",(0,s.kt)("inlineCode",{parentName:"p"},"MovieTheater")," type and to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CachedSchemaCompiler")," defined above for the implementation. The generated code will look like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'case class MovieTheater(name: Option[String] = None)\nobject MovieTheater extends ShapeTag.Companion[MovieTheater] {\n  val id: ShapeId = ShapeId("smithy4s.example", "MovieTheater")\n \n  // ...\n\n  implicit val schema: Schema[MovieTheater] = // ...\n\n  implicit val movieTheaterHash: cats.Hash[MovieTheater] = SchemaVisitorHash.fromSchema(schema)\n}\n')))}m.isMDXComponent=!0}}]);