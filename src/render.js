"use strict";
// console.log("加载render");
// import ClipboardJS from "./clipboard.min.js";

import $ from "jquery";

import "./RegisteraServiceWorkerFile.js";
import ditto from "./ditto";
// console.log(ditto);
import "./prefetchmd";

import config from "./config";

var doctitle = config.doctitle || "ditto";
var subtitle = config.subtitle || "Lightweight Markdown Documentation System";
var github_username = config.github_username;
var github_repo = config.github_repo;
$(() => {
  // const clipboard = new ClipboardJS(".btn");

  // clipboard.on("success", function(e) {
  //   if (!e.text) {
  //     console.log("复制内容空");
  //   } else {
  //     //   console.info("Action:", e.action);
  //     //   console.info("Text:", e.text);
  //   }

  //   e.clearSelection();
  // });

  (() => {
    document.title = doctitle + " " + subtitle;
    $("#title").text(doctitle);
    $("#my主体").css("padding-top", $("#my导航栏").height());
    (function() {
      // essential settings
      (ditto.index = "README.md"),
        (ditto.sidebar_file = "sidebar.md"),
        // optional settings if you want github search
        (ditto.github_username = github_username);
      // <------- EDIT ME!!
      ditto.github_repo = github_repo;
      // <------- EDIT ME!!
      // ditto.highlight_code = false; // <------- EDIT ME!!
      ditto.highlight_code = true;
      // where the docs are actually stored on github - so you can edit
      // ditto.base_url = "https://github.com/chutsu/ditto/edit/gh-pages";

      // run
      ditto.run();
    })();
    // $("#sidebar > ul").addClass("navbar-nav")
    function onhashchange() {
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
      //   if (location.hash === "" || location.hash === "#") {
      //     location.hash = "#README";
      //   }
    }
    window.addEventListener("hashchange", onhashchange);
    // new ClipboardJS(".btn");
    // if(location.hash===""  )  {location.hash="#README"}
  })();
});

// then(m => {
//   console.log(m);
//   let ClipboardJS = m.default;
