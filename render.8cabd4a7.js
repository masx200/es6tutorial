parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KJDi":[function(require,module,exports) {
var t=this;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return r(t)||i(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}!function(t,n){var i={content_id:t("#content"),sidebar_id:t("#sidebar"),edit_id:t("#edit"),back_to_top_id:t("#back_to_top"),loading_id:t("#loading"),error_id:t("#error"),search_name:t("#search"),search_results_class:".search_results",fragments_class:".fragments",fragment_class:".fragment",highlight_code:!0,sidebar:!0,edit_button:!0,back_to_top_button:!0,searchbar:!0,github_username:null,github_repo:null,run:function(){i.sidebar&&t.get(i.sidebar_file,function(e){var n,r;i.sidebar_id.html(marked(e)),i.searchbar&&(n=i.sidebar_id.html(),r="<input name='"+i.search_name.selector+"'",r=(r+=" type='search'")+" results='10'>",n=n.replace("[ditto:searchbar]",r),i.sidebar_id.html(n),t("input[name="+i.search_name.selector+"]").keydown(l)),t("#sidebar  ul").addClass("navbar-nav"),t("#sidebar  h1").addClass("nav-item"),t("#sidebar  p").addClass("nav-item"),t("#sidebar a").addClass("nav-link"),t("#sidebar  h2").addClass("nav-item"),t("#sidebar  li").addClass("nav-item"),t("#sidebar  ol").addClass("navbar-nav"),t("#sidebar  li").addClass("nav-item"),t("#sidebar  input").addClass("nav-link"),t("#my主体").css("padding-top",t("#my导航栏").height()),Array.apply(void 0,a(t("#sidebar a"))).map(function(t){return t.hash}).filter(function(t){return t.startsWith("#")}).map(function(t){return t.slice(1)}).forEach(function(t){var e=document.createElement("link");e.rel="prefetch",e.href=t+".md",document.head.appendChild(e)})},"text").fail(function(){alert("Opps! can't find the sidebar file to display!")}),i.back_to_top_button&&(i.back_to_top_id.show(),i.back_to_top_id.on("click",function(){t("body, html").animate({scrollTop:0},200)})),i.edit_button&&(null===i.base_url?alert("Error! You didn't set 'base_url' when calling ditto.run()!"):(i.edit_id.show(),i.edit_id.on("click",function(){var t=location.hash.replace("#","/");""===t&&(t="/"+i.index.replace(".md","")),window.open(i.base_url+t+".md")}))),i.highlight_code&&hljs.initHighlightingOnLoad(),_(),t(window).on("hashchange",_)}};function r(e){var a="";a+="<ul class='"+i.fragments_class.replace(".","")+"'>";for(var n=0;n<e.length;n++){var r=e[n].fragment.replace("/[-]/g","");a+="<li class='"+i.fragment_class.replace(".","")+"'>",a+="<pre><code> ",a+=r=t("#hide").text(r).html(),a+=" </code></pre></li>"}return a+="</ul>"}function o(e){var a="<h1>Search Results</h1>";e.items.length?(p(),a+=function(t){var e="";e+="<ul class='"+i.search_results_class.replace(".","")+"'>";for(var a=0;a<t.length;a++){var n=t[a].path;n!==i.sidebar_file&&(n.replace(".md",""),window.location.origin,e+="<li class='link'>",e+=n,e+="</li>",e+=r(t[a].text_matches))}return e+="</ul>"}(e.items)):u("Opps.. Found no matches!"),i.content_id.html(a),t(i.search_results_class+" .link").click(function(){var e="#"+t(this).html().replace(".md","");location.hash=e})}function l(e){if(13===e.which){var a=t("input[name="+i.search_name.selector+"]").val();""!==a?location.hash="#search="+a:alert("Error! Empty search query!")}}function s(t){return t.replace(/[&\/\\#,+=()$~%.'":*?<>{}\ \]\[]/g,"_")}function c(e,a){html_safe_tag=s(e.text()),e.attr("id",html_safe_tag),e.attr("class","link"),t(i.content_id.selector+" li#"+e.attr("id")).click(function(){var n=t("h"+a+"."+e.attr("id"));t("html, body").animate({scrollTop:n.offset().top},200),original_color=n.css("color"),n.animate({color:"#ED1C24"},500,function(){t(this).animate({color:original_color},2500)})})}function d(t){var e=function(t){return t.replace(/watch\?v\=/g,"embed/")}(function(t){var e=String(t.match(/(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/g));return e=e.replace(/]/g,"")}(t)),a='<div class="youtube_video">\n                <div style="position:relative;height:0;padding-bottom:56.25%">\n                  <iframe src="<link>?ecver=2"\n                    width="640"\n                    height="360"\n                    frameborder="0"\n                    style="position:absolute;width:100%;height:100%;left:0"\n                    allowfullscreen>\n                  </iframe>\n                </div>\n              </div>';return a=a.replace("<link>",e),t=t.replace(/\[ditto\:youtube:(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\]/g,a)}function h(){i.content_id.find("img").map(function(){var e=t(this).attr("src").replace(/^\.\//,"");if("http"!==t(this).attr("src").slice(0,5)){var a=location.hash.replace("#",""),n=(a=a.split("/")).slice(0,a.length-1).join("/");n?t(this).attr("src",n+"/"+e):t(this).attr("src",e)}})}function u(t){i.error_id.html(t),i.error_id.show()}function p(){i.error_id.hide()}function f(){clearInterval(i.loading_interval),i.loading_id.hide()}function m(){window.scrollTo(0,0);var e=location.hash.replace("#","./");"index.html"===location.pathname.split("/").pop()?(e=location.pathname.replace("index.html",i.index),h()):""===e?(e=window.location+i.index,h()):e+=".md",i.loading_id.show(),i.loading_interval=setInterval(function(){i.loading_id.fadeIn(1e3).fadeOut(1e3)},2e3),t.get(e,function(e){t("#collapsibleNavbar").removeClass("show"),t("#my主体").css("padding-top",t("#my导航栏").height()),function(e,a,n){p(),a=d(a),a=function(t){return t.replace(/&amp;#92;/g,"\\").replace(/&amp;#95;/g,"_")}(a=marked(a.replace(/\\/g,"&#92;").replace(/\_/g,"&#95;"))),i.content_id.html(a),f(),t("img").map(function(){var e=t(this).attr("src").split("/"),a=(e[0],e[2]);t.inArray(a,["travis-ci.com","travis-ci.org","coveralls.io"])>=0&&t(this).attr("class","github_badges")}),h(),function(){for(var e=2;e<=4;e++){var a=[];t(i.content_id.selector+" h"+e).map(function(){a.push(t(this).text()),t(this).addClass(s(t(this).text()))}),t(i.content_id.selector+" ul li").map(function(){for(var n=0;n<a.length;n++)a[n]===t(this).text()&&c(t(this),e)})}}(),i.highlight_code&&t("pre code").each(function(t,e){hljs.highlightBlock(e)}),n&&n(a)}(0,e,function(){if(MathJax&&MathJax.Extension["Tex/AMSmath"]){MathJax.Extension["TeX/AMSmath"].startNumber=0,MathJax.Extension["TeX/AMSmath"].labels={};var t=document.getElementById("content");MathJax.Hub.Queue(["Typeset",MathJax.Hub,t])}})}).fail(function(){console.error("Opps! ... File not found!\n5秒后返回主页"),u("Opps! ... File not found!\n5秒后返回主页"),f()})}function _(){var e=location.hash;"search"!==e.slice(1,7)?m():i.searchbar&&function(e){if(i.github_username&&i.github_repo){var a="https://api.github.com/search/code?q="+e+"+in:file+language:markdown+repo:"+i.github_username+"/"+i.github_repo;t.ajax(a,{headers:{Accept:"application/vnd.github.v3.text-match+json"}}).done(function(t){o(t)})}null==i.github_username&&null==i.github_repo?alert("You have not set ditto.github_username and ditto.github_repo!"):null==i.github_username?alert("You have not set ditto.github_username!"):null==i.github_repo&&alert("You have not set ditto.github_repo!")}(e.replace("#search=",""))}n.ditto=i,"object"===("undefined"==typeof exports?"undefined":e(exports))&&"undefined"!=typeof module&&(module.exports=i)}($,"undefined"!=typeof window&&window||"undefined"!=typeof WorkerGlobalScope&&WorkerGlobalScope||t);
},{}],"I3Wr":[function(require,module,exports) {
"use strict";var e=t(require("./ditto.js"));function t(e){return e&&e.__esModule?e:{default:e}}$(window).one("load",function(){$("#my主体").css("padding-top",$("#my导航栏").height()),$(function(t){e.default.index="README.md",e.default.sidebar_file="sidebar.md",e.default.github_username="masx200",e.default.github_repo="es6tutorial",e.default.highlight_code=!0,e.default.run()}),$(window).on("hashchange",function(){scrollTo(0,0),$("#collapsibleNavbar").removeClass("show"),$("#my主体").css("padding-top",$("#my导航栏").height())})});
},{"./ditto.js":"KJDi"}]},{},["I3Wr"], null)