(() => {
  $(window).one("load", () => {
    $("#my主体").css("padding-top", $("#my导航栏").height());

    $(function($) {
      // essential settings
      (ditto.index = "README.md"),
        (ditto.sidebar_file = "sidebar.md"),
        // optional settings if you want github search
        (ditto.github_username = "masx200"); // <------- EDIT ME!!
      ditto.github_repo = "es6tutorial"; // <------- EDIT ME!!
      // ditto.highlight_code = false; // <------- EDIT ME!!
      ditto.highlight_code = true;
      // where the docs are actually stored on github - so you can edit
      // ditto.base_url = "https://github.com/chutsu/ditto/edit/gh-pages";

      // run
      ditto.run();
    });
    // $("#sidebar > ul").addClass("navbar-nav")
    function onhashchange() {
      scrollTo(0, 0);
      $("#collapsibleNavbar").removeClass("show");
      $("#my主体").css("padding-top", $("#my导航栏").height());
      if (location.hash === "" || location.hash === "#") {
        location.hash = "#README";
      }
    }
    $(window).on("hashchange", onhashchange);
  });

  // if(location.hash===""  )  {location.hash="#README"}
})();
