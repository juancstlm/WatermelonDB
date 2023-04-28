"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Contributing",hide_title:!0},i=void 0,l={unversionedId:"docs/CONTRIBUTING",id:"docs/CONTRIBUTING",title:"Contributing",description:"---",source:"@site/docs/docs/CONTRIBUTING.md",sourceDirName:"docs",slug:"/docs/CONTRIBUTING",permalink:"/docs/CONTRIBUTING",draft:!1,editUrl:"https://github.com/nozbe/WatermelonDB/edit/master/docs-website/docs/docs/CONTRIBUTING.md",tags:[],version:"current",frontMatter:{title:"Contributing",hide_title:!0},sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/Roadmap"},next:{title:"Changelog",permalink:"/docs/CHANGELOG"}},s={},d=[{value:"hide_title: true",id:"hide_title-true",level:2},{value:"Before you send a pull request",id:"before-you-send-a-pull-request",level:2},{value:"Running Watermelon in development",id:"running-watermelon-in-development",level:2},{value:"Download source and dependencies",id:"download-source-and-dependencies",level:3},{value:"Developing Watermelon alongside your app",id:"developing-watermelon-alongside-your-app",level:3},{value:"Running tests",id:"running-tests",level:3},{value:"Editing files",id:"editing-files",level:3},{value:"Editing native code",id:"editing-native-code",level:2},{value:"Integration tests",id:"integration-tests",level:3},{value:"Running tests manualy",id:"running-tests-manualy",level:3},{value:"Native linting",id:"native-linting",level:3},{value:"Native code troubleshooting",id:"native-code-troubleshooting",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"title: Contributing"),(0,r.kt)("h2",{id:"hide_title-true"},"hide_title: true"),(0,r.kt)("img",{src:"https://github.com/Nozbe/WatermelonDB/raw/master/assets/needyou.jpg",alt:"We need you",width:"220"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WatermelonDB is an open-source project and it needs your help to thrive!")),(0,r.kt)("p",null,"If there's a missing feature, a bug, or other improvement you'd like, we encourage you to contribute! Feel free to open an issue to get some guidance and see ",(0,r.kt)("a",{parentName:"p",href:"/docs/CONTRIBUTING"},"Contributing guide")," for details about project setup, testing, etc."),(0,r.kt)("p",null,"If you're just getting started, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Nozbe/WatermelonDB/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"},"good first issues")," that are easy to contribute to. If you make a non-trivial contribution, email me, and I'll send you a nice \ud83c\udf49 sticker!"),(0,r.kt)("p",null,"If you make or are considering making an app using WatermelonDB, please let us know!"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"before-you-send-a-pull-request"},"Before you send a pull request"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Did you add or changed some functionality?"),(0,r.kt)("p",{parentName:"li"},"Add (or modify) tests!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if the automated tests pass"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ci:check\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Format the files you changed"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn prettier\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Mark your changes in CHANGELOG"),(0,r.kt)("p",{parentName:"li"},"Put a one-line description of your change under Added/Changed section. See ",(0,r.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),"."))),(0,r.kt)("h2",{id:"running-watermelon-in-development"},"Running Watermelon in development"),(0,r.kt)("h3",{id:"download-source-and-dependencies"},"Download source and dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Nozbe/WatermelonDB.git\ncd WatermelonDB\nyarn\n")),(0,r.kt)("h3",{id:"developing-watermelon-alongside-your-app"},"Developing Watermelon alongside your app"),(0,r.kt)("p",null,"To work on Watermelon code in the sandbox of your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/")," folder in Watermelon and observe changes to source files (only JavaScript files) and recompile them as needed."),(0,r.kt)("p",null,"Then in your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd node_modules/@nozbe\nrm -fr watermelondb\nln -s path-to-watermelondb/dev watermelondb\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This will work in Webpack but not in Metro")," (React Native). Metro doesn't follow symlinks. Instead, you can compile WatermelonDB directly to your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'DEV_PATH="/path/to/your/app/node_modules/@nozbe/watermelondb" yarn dev\n')),(0,r.kt)("h3",{id:"running-tests"},"Running tests"),(0,r.kt)("p",null,"This runs Jest, ESLint and Flow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ci:check\n")),(0,r.kt)("p",null,"You can also run them separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\nyarn eslint\nyarn flow\n")),(0,r.kt)("h3",{id:"editing-files"},"Editing files"),(0,r.kt)("p",null,"We recommend VS Code with ESLint, Flow, and Prettier (with prettier-eslint enabled) plugins for best development experience. (To see lint/type issues inline + have automatic reformatting of code)"),(0,r.kt)("h2",{id:"editing-native-code"},"Editing native code"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"native/ios")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"native/android")," you'll find the native bridge code for React Native."),(0,r.kt)("p",null,"It's recommended to use the latest stable version of Xcode / Android Studio to work on that code."),(0,r.kt)("h3",{id:"integration-tests"},"Integration tests"),(0,r.kt)("p",null,"If you change native bridge code or ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter/sqlite")," code, it's recommended to run integration tests that run the entire Watermelon code with SQLite and React Native in the loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test:ios\nyarn test:android\n")),(0,r.kt)("h3",{id:"running-tests-manualy"},"Running tests manualy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For iOS open the ",(0,r.kt)("inlineCode",{parentName:"li"},"native/iosTest/WatermelonTester.xcworkspace")," project and hit Cmd+U."),(0,r.kt)("li",{parentName:"ul"},"For Android open ",(0,r.kt)("inlineCode",{parentName:"li"},"native/androidTest")," in AndroidStudio navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"app/src/androidTest/java/com.nozbe.watermelonTest/BridgeTest")," and click green arrow near ",(0,r.kt)("inlineCode",{parentName:"li"},"class BridgeTest"))),(0,r.kt)("h3",{id:"native-linting"},"Native linting"),(0,r.kt)("p",null,"Make sure the native code you're editing conforms to Watermelon standards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn swiftlint\nyarn ktlint\n")),(0,r.kt)("h3",{id:"native-code-troubleshooting"},"Native code troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"test:ios")," fails in terminal:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run tests in Xcode first before running from terminal"),(0,r.kt)("li",{parentName:"ul"},"Make sure you have the right version of Xcode CLI tools set in Preferences -> Locations")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you're on the most recent stable version of Xcode / Android Studio"),(0,r.kt)("li",{parentName:"ol"},"Remove native caches:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xcode: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/Library/Developer/Xcode/DerivedData"),":"),(0,r.kt)("li",{parentName:"ul"},"Android: ",(0,r.kt)("inlineCode",{parentName:"li"},".gradle")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," folders in ",(0,r.kt)("inlineCode",{parentName:"li"},"native/android")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"native/androidTest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," (because of React Native precompiled third party libraries)")))}u.isMDXComponent=!0}}]);