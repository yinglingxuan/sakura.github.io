(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{450:function(t,r,a){"use strict";a.d(r,"a",(function(){return c}));var o={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function e(t){const r=document.querySelector(":root"),a=o[t],e="dark"===t?"light":"dark";for(const t in a)r.style.setProperty(t,a[t]);r.classList.remove(e),r.classList.add(t)}function c(t){if("auto"!==t)return void e(t);const r=window.matchMedia("(prefers-color-scheme: dark)").matches,a=window.matchMedia("(prefers-color-scheme: light)").matches;if(r&&e("dark"),a&&e("light"),!r&&!a){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const t=(new Date).getHours();e(t<6||t>=18?"dark":"light")}}},479:function(t,r,a){},513:function(t,r,a){"use strict";a(479)},535:function(t,r,a){"use strict";a.r(r);var o=a(450),e={name:"DayAndNight",data:()=>({currentMode:"light"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"light";var t=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===t.$data.currentMode&&Object(o.a)(t.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===t.$data.currentMode&&Object(o.a)(t.$data.currentMode)}),Object(o.a)(this.currentMode)},methods:{selectMode(t){t!==this.currentMode&&(this.currentMode=t,Object(o.a)(t),localStorage.setItem("mode",t))},updateMode(){if("light"===this.currentMode){let t="dark";this.currentMode=t,Object(o.a)(t),localStorage.setItem("mode",t)}else{let t="light";this.currentMode=t,Object(o.a)(t),localStorage.setItem("mode",t)}}}},c=(a(513),a(0)),s=Object(c.a)(e,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"generalWrapper",attrs:{id:"dayNightSwitch"}},[r("a",{staticClass:"click",on:{click:t.updateMode}},[r("div",{class:"dark"===t.currentMode?["onOff"]:["onOff","daySwitch"]},[r("div",{staticClass:"star star1"}),t._v(" "),r("div",{staticClass:"star star2"}),t._v(" "),r("div",{staticClass:"star star3"}),t._v(" "),r("div",{staticClass:"star star4"}),t._v(" "),r("div",{staticClass:"star star5"}),t._v(" "),r("div",{staticClass:"star sky"}),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"sunMoon"},[t("div",{staticClass:"crater crater1"}),this._v(" "),t("div",{staticClass:"crater crater2"}),this._v(" "),t("div",{staticClass:"crater crater3"}),this._v(" "),t("div",{staticClass:"cloud part1"}),this._v(" "),t("div",{staticClass:"cloud part2"})])}],!1,null,"32f44868",null);r.default=s.exports}}]);