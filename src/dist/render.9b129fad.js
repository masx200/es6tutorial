// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ditto.js":[function(require,module,exports) {
var _this = this;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  (function ($, globalThis) {
    var ditto = {
      content_id: $("#content"),
      sidebar_id: $("#sidebar"),
      edit_id: $("#edit"),
      back_to_top_id: $("#back_to_top"),
      loading_id: $("#loading"),
      error_id: $("#error"),
      search_name: $("#search"),
      search_results_class: ".search_results",
      fragments_class: ".fragments",
      fragment_class: ".fragment",
      highlight_code: true,
      // display elements
      sidebar: true,
      edit_button: true,
      back_to_top_button: true,
      searchbar: true,
      // github specifics
      github_username: null,
      github_repo: null,
      // initialize function
      run: initialize
    };

    function initialize() {
      // initialize sidebar and buttons
      if (ditto.sidebar) {
        init_sidebar_section();
      }

      if (ditto.back_to_top_button) {
        init_back_to_top_button();
      }

      if (ditto.edit_button) {
        init_edit_button();
      } // intialize highligh.js


      if (ditto.highlight_code) {
        hljs.initHighlightingOnLoad();
      } // page router


      router();
      $(window).on("hashchange", router);
    }

    function init_sidebar_section() {
      $.get(ditto.sidebar_file, function (data) {
        //加载完目录部分的markdown的回调函数
        ditto.sidebar_id.html(marked(data));

        if (ditto.searchbar) {
          init_searchbar();
        } //由于当作bootstrap导航栏,所以给sidebar中的ul增加class为"navbar-nav"


        $("#sidebar  ul").addClass("navbar-nav");
        $("#sidebar  h1").addClass("nav-item");
        $("#sidebar  p").addClass("nav-item");
        $("#sidebar a").addClass("nav-link");
        $("#sidebar  h2").addClass("nav-item");
        $("#sidebar  li").addClass("nav-item"); // $("#sidebar > a").addClass("nav-link")
        // $("#sidebar >ul> li").addClass("nav-item")
        // nav-item navbar-nav nav-link

        $("#sidebar  ol").addClass("navbar-nav");
        $("#sidebar  li").addClass("nav-item"); // $("#sidebar >ol>li> a").addClass("nav-link")
        // $("#sidebar >ul>li> a").addClass("nav-link")
        // $("#sidebar >h1> a").addClass("nav-link")

        $("#sidebar  input").addClass("nav-link");
        $("#my主体").css("padding-top", $("#my导航栏").height());
      }, "text").fail(function () {
        alert("Opps! can't find the sidebar file to display!");
      });
    }

    function init_back_to_top_button() {
      ditto.back_to_top_id.show();
      ditto.back_to_top_id.on("click", function () {
        $("body, html").animate({
          scrollTop: 0
        }, 200);
      });
    }

    function init_edit_button() {
      if (ditto.base_url === null) {
        alert("Error! You didn't set 'base_url' when calling ditto.run()!");
      } else {
        ditto.edit_id.show();
        ditto.edit_id.on("click", function () {
          var hash = location.hash.replace("#", "/");

          if (hash === "") {
            hash = "/" + ditto.index.replace(".md", "");
          }

          window.open(ditto.base_url + hash + ".md"); // open is better than redirecting, as the previous page history
          // with redirect is a bit messed up
        });
      }
    }

    function init_searchbar() {
      var sidebar = ditto.sidebar_id.html();
      var match = "[ditto:searchbar]"; // html input searchbar

      var search = "<input name='" + ditto.search_name.selector + "'";
      search = search + " type='search'";
      search = search + " results='10'>"; // replace match code with a real html input search bar

      sidebar = sidebar.replace(match, search);
      ditto.sidebar_id.html(sidebar); // add search listener

      $("input[name=" + ditto.search_name.selector + "]").keydown(searchbar_listener);
    }

    function build_text_matches_html(fragments) {
      var html = "";
      var class_name = ditto.fragments_class.replace(".", "");
      html += "<ul class='" + class_name + "'>";

      for (var i = 0; i < fragments.length; i++) {
        var fragment = fragments[i].fragment.replace("/[\uE000-\uF8FF]/g", "");
        html += "<li class='" + ditto.fragment_class.replace(".", "") + "'>";
        html += "<pre><code> ";
        fragment = $("#hide").text(fragment).html();
        html += fragment;
        html += " </code></pre></li>";
      }

      html += "</ul>";
      return html;
    }

    function build_result_matches_html(matches) {
      var html = "";
      var class_name = ditto.search_results_class.replace(".", "");
      html += "<ul class='" + class_name + "'>";

      for (var i = 0; i < matches.length; i++) {
        var url = matches[i].path;

        if (url !== ditto.sidebar_file) {
          var hash = "#" + url.replace(".md", "");
          var path = window.location.origin + "/" + hash; // html += "<li>";

          html += "<li class='link'>";
          html += url; // html += "<a href='" + path +"'>" + url + "</a>";

          html += "</li>";
          var match = build_text_matches_html(matches[i].text_matches);
          html += match;
        }
      }

      html += "</ul>";
      return html;
    }

    function display_search_results(data) {
      var results_html = "<h1>Search Results</h1>";

      if (data.items.length) {
        hide_errors();
        results_html += build_result_matches_html(data.items);
      } else {
        show_error("Opps.. Found no matches!");
      }

      ditto.content_id.html(results_html);
      $(ditto.search_results_class + " .link").click(function () {
        var destination = "#" + $(this).html().replace(".md", "");
        location.hash = destination;
      });
    }

    function github_search(query) {
      if (ditto.github_username && ditto.github_repo) {
        // build github search api url string
        var github_api = "https://api.github.com/";
        var search = "search/code?q=";
        var github_repo = ditto.github_username + "/" + ditto.github_repo;
        var search_details = "+in:file+language:markdown+repo:";
        var url = github_api + search + query + search_details + github_repo;
        var accept_header = "application/vnd.github.v3.text-match+json";
        $.ajax(url, {
          headers: {
            Accept: accept_header
          }
        }).done(function (data) {
          display_search_results(data);
        });
      }

      if (ditto.github_username == null && ditto.github_repo == null) {
        alert("You have not set ditto.github_username and ditto.github_repo!");
      } else if (ditto.github_username == null) {
        alert("You have not set ditto.github_username!");
      } else if (ditto.github_repo == null) {
        alert("You have not set ditto.github_repo!");
      }
    }

    function searchbar_listener(event) {
      if (event.which === 13) {
        // when user presses ENTER in search bar
        var q = $("input[name=" + ditto.search_name.selector + "]").val();

        if (q !== "") {
          location.hash = "#search=" + q;
        } else {
          alert("Error! Empty search query!");
        }
      }
    }

    function replace_symbols(text) {
      // replace symbols with underscore
      return text.replace(/[&\/\\#,+=()$~%.'":*?<>{}\ \]\[]/g, "_");
    }

    function li_create_linkage(li_tag, header_level) {
      // add custom id and class attributes
      html_safe_tag = replace_symbols(li_tag.text());
      li_tag.attr("id", html_safe_tag);
      li_tag.attr("class", "link"); // add click listener - on click scroll to relevant header section

      $(ditto.content_id.selector + " li#" + li_tag.attr("id")).click(function () {
        // scroll to relevant section
        var header = $("h" + header_level + "." + li_tag.attr("id"));
        $("html, body").animate({
          scrollTop: header.offset().top
        }, 200); // highlight the relevant section

        original_color = header.css("color");
        header.animate({
          color: "#ED1C24"
        }, 500, function () {
          // revert back to orig color
          $(this).animate({
            color: original_color
          }, 2500);
        });
      });
    }

    function create_page_anchors() {
      // create page anchors by matching li's to headers
      // if there is a match, create click listeners
      // and scroll to relevant sections
      // go through header level 2 and 3
      for (var i = 2; i <= 4; i++) {
        // parse all headers
        var headers = [];
        $(ditto.content_id.selector + " h" + i).map(function () {
          headers.push($(this).text());
          $(this).addClass(replace_symbols($(this).text()));
        }); // parse and set links between li and h2

        $(ditto.content_id.selector + " ul li").map(function () {
          for (var j = 0; j < headers.length; j++) {
            if (headers[j] === $(this).text()) {
              li_create_linkage($(this), i);
            }
          }
        });
      }
    }

    function youtube_url_extract(data) {
      var yt_regex = /(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+/g;
      var yt_url = String(data.match(yt_regex));
      yt_url = yt_url.replace(/]/g, "");
      return yt_url;
    }

    function youtube_url_to_embed(data) {
      return data = data.replace(/watch\?v\=/g, "embed/");
    }

    function create_youtube_embeds(data) {
      // replaces [ditto:youtube:<some youtube link>]
      // with a proper youtube embed iframe
      var token_regex = /\[ditto\:youtube:(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+\]/g;
      var yt_url = youtube_url_extract(data);
      var yt_embed_url = youtube_url_to_embed(yt_url); // youtube embed html

      var embed_html = "<div class=\"youtube_video\">\n                <div style=\"position:relative;height:0;padding-bottom:56.25%\">\n                  <iframe src=\"<link>?ecver=2\"\n                    width=\"640\"\n                    height=\"360\"\n                    frameborder=\"0\"\n                    style=\"position:absolute;width:100%;height:100%;left:0\"\n                    allowfullscreen>\n                  </iframe>\n                </div>\n              </div>";
      embed_html = embed_html.replace("<link>", yt_embed_url); // replace match code with youtube video

      data = data.replace(token_regex, embed_html);
      return data;
    }

    function normalize_paths() {
      // images
      ditto.content_id.find("img").map(function () {
        var src = $(this).attr("src").replace(/^\.\//, "");

        if ($(this).attr("src").slice(0, 5) !== "http") {
          var url = location.hash.replace("#", ""); // split and extract base dir

          url = url.split("/");
          var base_dir = url.slice(0, url.length - 1).join("/"); // normalize the path (i.e. make it absolute)

          if (base_dir) {
            $(this).attr("src", base_dir + "/" + src);
          } else {
            $(this).attr("src", src);
          }
        }
      });
    }

    function show_error(err_msg) {
      ditto.error_id.html(err_msg);
      ditto.error_id.show();
    }

    function hide_errors() {
      ditto.error_id.hide();
    }

    function show_loading() {
      ditto.loading_id.show();
      ditto.content_id.html(""); // clear content
      // infinite loop until clearInterval() is called on loading

      ditto.loading_interval = setInterval(function () {
        ditto.loading_id.fadeIn(1000).fadeOut(1000);
      }, 2000);
    }

    function stop_loading() {
      clearInterval(ditto.loading_interval);
      ditto.loading_id.hide();
    }

    function escape_github_badges(data) {
      $("img").map(function () {
        var ignore_list = ["travis-ci.com", "travis-ci.org", "coveralls.io"];
        var src = $(this).attr("src");
        var base_url = src.split("/");
        var protocol = base_url[0];
        var host = base_url[2];

        if ($.inArray(host, ignore_list) >= 0) {
          $(this).attr("class", "github_badges");
        }
      });
      return data;
    }

    function page_getter() {
      window.scrollTo(0, 0);
      var path = location.hash.replace("#", "./"); // default page if hash is empty

      var current_page = location.pathname.split("/").pop();

      if (current_page === "index.html") {
        path = location.pathname.replace("index.html", ditto.index);
        normalize_paths();
      } else if (path === "") {
        path = window.location + ditto.index;
        normalize_paths();
      } else {
        path = path + ".md";
      } // otherwise get the markdown and render it


      show_loading();
      $.get(path, function (data) {
        //加载完主体部分的markdown的回调函数
        $("#collapsibleNavbar").removeClass("show");
        $("#my主体").css("padding-top", $("#my导航栏").height());
        compile_into_dom(path, data, function () {
          // rerender mathjax and reset mathjax equation counter
          if (MathJax && MathJax.Extension["Tex/AMSmath"]) {
            MathJax.Extension["TeX/AMSmath"].startNumber = 0;
            MathJax.Extension["TeX/AMSmath"].labels = {};
            var content = document.getElementById("content");
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, content]);
          }
        });
      }).fail(function () {
        console.error("Opps! ... File not found!\n5秒后返回主页");
        show_error("Opps! ... File not found!\n5秒后返回主页");
        stop_loading(); // setTimeout(() => {
        //   location.hash = "#";
        // }, 5000);
      });
    }

    function escape_html(string) {
      return string.replace(/\\/g, "&#92;").replace(/\_/g, "&#95;");
    }

    function unescape_html(string) {
      return string.replace(/&amp;#92;/g, "\\").replace(/&amp;#95;/g, "_");
    }

    function compile_into_dom(path, data, cb) {
      hide_errors();
      data = create_youtube_embeds(data);
      data = marked(escape_html(data));
      data = unescape_html(data);
      ditto.content_id.html(data);
      stop_loading();
      escape_github_badges(data);
      normalize_paths();
      create_page_anchors();

      if (ditto.highlight_code) {
        $("pre code").each(function (i, block) {
          hljs.highlightBlock(block);
        });
      }

      if (cb) {
        cb(data);
      }
    }

    function router() {
      var hash = location.hash;

      if (hash.slice(1, 7) !== "search") {
        page_getter();
      } else {
        if (ditto.searchbar) {
          github_search(hash.replace("#search=", ""));
        }
      }
    } // console.log(globalThis)


    globalThis.ditto = ditto;

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = ditto;
    }
  })($, "undefined" != typeof window && window || "undefined" != typeof WorkerGlobalScope && WorkerGlobalScope || _this);
})();
},{}],"render.js":[function(require,module,exports) {
"use strict";

var _ditto = _interopRequireDefault(require("./ditto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  $(window).one("load", function () {
    $("#my主体").css("padding-top", $("#my导航栏").height());
    $(function ($) {
      // essential settings
      _ditto.default.index = "README.md", _ditto.default.sidebar_file = "sidebar.md", // optional settings if you want github search
      _ditto.default.github_username = "masx200"; // <------- EDIT ME!!

      _ditto.default.github_repo = "es6tutorial"; // <------- EDIT ME!!
      // ditto.highlight_code = false; // <------- EDIT ME!!

      _ditto.default.highlight_code = true; // where the docs are actually stored on github - so you can edit
      // ditto.base_url = "https://github.com/chutsu/ditto/edit/gh-pages";
      // run

      _ditto.default.run();
    }); // $("#sidebar > ul").addClass("navbar-nav")

    function onhashchange() {
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height()); //   if (location.hash === "" || location.hash === "#") {
      //     location.hash = "#README";
      //   }
    }

    $(window).on("hashchange", onhashchange);
  }); // if(location.hash===""  )  {location.hash="#README"}
})();
},{"./ditto.js":"ditto.js"}],"C:/Users/ma/node_modules/.bin/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "9358" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/ma/node_modules/.bin/node_modules/_parcel-bundler@1.12.3@parcel-bundler/src/builtins/hmr-runtime.js","render.js"], null)