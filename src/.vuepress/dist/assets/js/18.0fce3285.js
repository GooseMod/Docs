(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{393:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"context-menu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context-menu"}},[t._v("#")]),t._v(" Context Menu")]),t._v(" "),s("p",[t._v("Patching the Context Menu (the menu which appears on a right click) is common in Modules, so Patcher has a standard function for it.")]),t._v(" "),s("h2",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("type")]),t._v(": The type of context menu, so you can choose where / when your item is added (see below)")]),t._v(" "),s("li",[s("code",[t._v("itemProps")]),t._v(": Properties of the MenuItem React element (see below)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" contextMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" itemProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"return-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value"}},[t._v("#")]),t._v(" Return Value")]),t._v(" "),s("p",[t._v("The return value of the patch function is a function which unpatches when ran, directly from the main "),s("code",[t._v("patch")]),t._v(" function which is ran internally.")]),t._v(" "),s("h2",{attrs:{id:"types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("user")]),t._v(": When right clicking a user")]),t._v(" "),s("li",[s("code",[t._v("message")]),t._v(": When right clicking a message")])]),t._v(" "),s("h2",{attrs:{id:"item-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-props"}},[t._v("#")]),t._v(" Item Props")]),t._v(" "),s("p",[t._v("Needed:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("label")]),t._v(": The label (shown name) of the item")]),t._v(" "),s("li",[s("code",[t._v("action")]),t._v(": Function ran on action (click) of the item")])]),t._v(" "),s("p",[t._v("Optional:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("checked")]),t._v(": Makes the item a checkbox, and sets whether it is currently checked or not")]),t._v(" "),s("li",[s("code",[t._v("sub")]),t._v(": An array of more item props for making a sub menu")])]),t._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Patcher "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@goosemod/patcher'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nPatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contextMenu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Copy Avatar URL'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_orig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DiscordNative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clipboard"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatarURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);