"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[2298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Extracting Request Info",title:"Extracting Request Information"},i=void 0,s={unversionedId:"guides/extract-request-info",id:"guides/extract-request-info",title:"Extracting Request Information",description:"There are times where the implementation of your route handlers may require more information from the underlying http4s request.",source:"@site/../docs/target/jvm-2.13/mdoc/06-guides/extract-request-info.md",sourceDirName:"06-guides",slug:"/guides/extract-request-info",permalink:"/smithy4s/docs/guides/extract-request-info",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/06-guides/extract-request-info.md",tags:[],version:"current",frontMatter:{sidebar_label:"Extracting Request Info",title:"Extracting Request Information"},sidebar:"tutorialSidebar",previous:{title:"Endpoint Specific Middleware",permalink:"/smithy4s/docs/guides/endpoint-middleware"},next:{title:"Model preprocessing",permalink:"/smithy4s/docs/guides/model-preprocessing"}},l={},p=[{value:"What is IOLocal?",id:"what-is-iolocal",level:2},{value:"Example Implementation",id:"example-implementation",level:2},{value:"Smithy Spec",id:"smithy-spec",level:3},{value:"Service Implementation",id:"service-implementation",level:3},{value:"Middleware",id:"middleware",level:3},{value:"Wiring it Together",id:"wiring-it-together",level:3},{value:"Testing it out",id:"testing-it-out",level:3},{value:"Alternative Methods",id:"alternative-methods",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are times where the implementation of your route handlers may require more information from the underlying http4s request.\nYou may want to store the raw request, check the request body against an HMAC value, pass along header values for tracing spans, etc."),(0,a.kt)("p",null,"When possible, the implementation of things like this should be isolated to middleware and not passed into the route handlers themselves.\nHowever, there are times where this isn't possible. This guide shows you how to implement a middleware that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," to pass the value\nof several headers from the request into the smithy4s route handlers."),(0,a.kt)("h2",{id:"what-is-iolocal"},"What is IOLocal?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/typelevel/cats-effect/blob/series/3.x/core/shared/src/main/scala/cats/effect/IOLocal.scala"},"IOLocal"),"\nis a construct that allows for sharing context across the scope of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber"),". This means it allows you to get and set some value ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal"),".\nThis value will be accessible across the current ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber"),". As a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," is forked into new fibers, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," is carried over to the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber"),".\nHowever, the new ",(0,a.kt)("inlineCode",{parentName:"p"},"Fiber")," will not be able to update the value kept on its parent or sibling fibers."),(0,a.kt)("p",null,"This diagram, adapted from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typelevel/cats-effect/blob/series/3.x/core/shared/src/main/scala/cats/effect/IOLocal.scala"},"IOLocal docs"),", illustrates this well:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOLocal flow chart",src:n(4386).Z,width:"515",height:"320"})),(0,a.kt)("h2",{id:"example-implementation"},"Example Implementation"),(0,a.kt)("h3",{id:"smithy-spec"},"Smithy Spec"),(0,a.kt)("p",null,"For this example, we are going to be working with the following smithy specification (taken from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/disneystreaming/smithy4s/blob/518675fc1aa805f9a0e553a198ef886471c93c5e/sampleSpecs/hello.smithy"},"smithy4s repo"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'$version: "2"\n\nnamespace smithy4s.example.hello\n\nuse alloy#simpleRestJson\n\n@simpleRestJson\n@tags(["testServiceTag"])\nservice HelloWorldService {\n  version: "1.0.0",\n  // Indicates that all operations in `HelloWorldService`,\n  // here limited to Hello, can return `GenericServerError`.\n  errors: [GenericServerError, SpecificServerError],\n  operations: [Hello]\n}\n\n@error("server")\n@httpError(500)\nstructure GenericServerError {\n  message: String\n}\n\n@error("server")\n@httpError(599)\nstructure SpecificServerError {\n  message: String\n}\n\n@http(method: "POST", uri: "/{name}", code: 200)\n@tags(["testOperationTag"])\noperation Hello {\n  input: Person,\n  output: Greeting\n}\n\n\nstructure Person {\n  @httpLabel\n  @required\n  name: String,\n\n  @httpQuery("town")\n  town: String\n}\n\nstructure Greeting {\n  @required\n  message: String\n}\n')),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"/smithy4s/docs/overview/intro"},"getting started documentation")," for instructions on how to use this specification to generate scala code."),(0,a.kt)("h3",{id:"service-implementation"},"Service Implementation"),(0,a.kt)("p",null,"Let's start by creating a case class that we will use to hold the value of some headers from our request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"case class RequestInfo(contentType: String, userAgent: String)\n")),(0,a.kt)("p",null,"This class will give us a spot to place the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," headers, respectively. These are just shown\nas an example. We could instead pass any other header or part of the request."),(0,a.kt)("p",null,"From here, we can implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorldService")," interface that smithy4s generated from the specification above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import smithy4s.example.hello._\nimport cats.effect.IO\nimport cats.effect.IOLocal\n\nfinal class HelloWorldServiceImpl(requestInfo: IO[RequestInfo]) extends HelloWorldService[IO] {\n  def hello(name: String, town: Option[String]): IO[Greeting] =\n    requestInfo.flatMap { reqInfo: RequestInfo =>\n      IO.println("REQUEST_INFO: " + reqInfo)\n        .as(Greeting(s"Hello, $name"))\n    }\n}\n')),(0,a.kt)("p",null,"This is a basic implementation that, in addition to returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"Greeting"),", prints the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestInfo")," out to the console.\nNote that it is getting the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestInfo")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"IO[RequestInfo]")," that is being passed in as a constructor parameter. This ",(0,a.kt)("inlineCode",{parentName:"p"},"IO"),"\nwill be created using the same ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," instance is passed to our middleware implementation.\nThat way, the middleware can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestInfo")," value that we are reading here."),(0,a.kt)("h3",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"Below is the middleware implementation. It extracts the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"User-Agent")," headers and passes them along in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal"),"\ninstance it is provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.data._\nimport org.http4s.HttpRoutes\nimport cats.syntax.all._\nimport org.http4s.headers.{`Content-Type`, `User-Agent`}\n\nobject Middleware {\n\n  def withRequestInfo(\n      routes: HttpRoutes[IO],\n      local: IOLocal[Option[RequestInfo]]\n  ): HttpRoutes[IO] =\n    HttpRoutes[IO] { request =>\n      val requestInfo = for {\n        contentType <- request.headers.get[`Content-Type`].map(ct => s"${ct.mediaType.mainType}/${ct.mediaType.subType}")\n        userAgent <- request.headers.get[`User-Agent`].map(_.product.toString)\n      } yield RequestInfo(\n        contentType,\n        userAgent\n      )\n      OptionT.liftF(local.set(requestInfo)) *> routes(request)\n    }\n\n}\n')),(0,a.kt)("h3",{id:"wiring-it-together"},"Wiring it Together"),(0,a.kt)("p",null,"Now that we have our service implementation and our middleware, we need to combine them to create our application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect.kernel.Resource\n\nobject Routes {\n  private val docs =\n    smithy4s.http4s.swagger.docs[IO](smithy4s.example.hello.HelloWorldService)\n  def getAll(local: IOLocal[Option[RequestInfo]]): Resource[IO, HttpRoutes[IO]] = {\n    val getRequestInfo: IO[RequestInfo] = local.get.flatMap {\n      case Some(value) => IO.pure(value)\n      case None => IO.raiseError(new IllegalAccessException("Tried to access the value outside of the lifecycle of an http request"))\n    }\n    smithy4s.http4s.SimpleRestJsonBuilder\n      .routes(new HelloWorldServiceImpl(getRequestInfo))\n      .resource\n      .map { routes =>\n        Middleware.withRequestInfo(routes <+> docs, local)\n      }\n  }\n}\n')),(0,a.kt)("p",null,"Here we are creating our routes (with swagger docs) and passing them to our middleware. The result of applying the Middleware\nis our final routes."),(0,a.kt)("p",null,"We also turn our ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," into an ",(0,a.kt)("inlineCode",{parentName:"p"},"IO[RequestInfo]")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorldServiceImpl"),". We do this because the service implementation\ndoes not need to know that the value is coming from an ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," or that the value is optional (since it will always be populated by\nour middleware). Doing it this way allows us to reduce the complexity in the service implementation."),(0,a.kt)("p",null,"Finally, we create our main class and construct the http4s server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect.IOApp\nimport com.comcast.ip4s._\nimport org.http4s.ember.server.EmberServerBuilder\n\nobject Main extends IOApp.Simple {\n  def run: IO[Unit] = IOLocal(Option.empty[RequestInfo]).flatMap { local =>\n    Routes\n      .getAll(local)\n      .flatMap { routes =>\n        EmberServerBuilder\n          .default[IO]\n          .withHost(host"localhost")\n          .withPort(port"9000")\n          .withHttpApp(routes.orNotFound)\n          .build\n      }\n      .useForever\n  }\n}\n')),(0,a.kt)("p",null,"Notice that we create the ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Option.empty[RequestInfo]"),". This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," requires a value\nto be constructed. However, this value will never be used in practice. This is because we are setting the value in\nthe middleware on every request prior to the request being handled by our ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorldService")," implementation."),(0,a.kt)("h3",{id:"testing-it-out"},"Testing it out"),(0,a.kt)("p",null,"With the above in place, we can run our application and test it out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X 'POST' \\\n  'http://localhost:9000/Test' \\\n  -H 'User-Agent: Chrome/103.0.0.0' \\\n  -H 'Content-Type: application/json'\n")),(0,a.kt)("p",null,"Running this ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," will cause the following to print out to the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REQUEST_INFO: RequestInfo(Some(application/json),Some(Chrome/103.0.0.0))\n")),(0,a.kt)("h2",{id:"alternative-methods"},"Alternative Methods"),(0,a.kt)("p",null,"If you are working with a tagless ",(0,a.kt)("inlineCode",{parentName:"p"},"F[_]")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," directly, you may want to check out Chris Davenport's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/davenverse/fiberlocal/"},"implementation\nof FiberLocal"),"."),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"Kleisli")," to accomplish the same things we showed in this tutorial and you are welcome to do so if you prefer that.\nWe opted to show an example with ",(0,a.kt)("inlineCode",{parentName:"p"},"IOLocal")," since it allows users to use ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," directly, without monad transformers, which many\nusers will be more comfortable with. Similarly, you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"Local")," from cats-mtl or probably a variety of other approaches.\nWe recommend you use whatever fits the best with your current application design."))}m.isMDXComponent=!0},4386:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ioLocalDiagram-8b535a4e121c2cb02f518e0f0eccaac3.svg"}}]);