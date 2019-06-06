//由于使用了async函数所以需要regeneratorRuntime
// import IMPORTCJSAMDUMD from "./IMPORTCJSAMDUMD";
/* 添加了TextEncoder和TextDecoder的polyfill */
import "./fast-text-encoding-text.min.js"
import regeneratorRuntime from "regenerator-runtime";
// console.log(regeneratorRuntime)

/**点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 */
(global => {
  "use strict";
  /**点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 */
  /* 注意不能跨域 */
  /* 注意:对于使用了document.write的网站, 加载会出错,因为脚本都是异步加载的,网页内容会被覆盖
    修改了document.write方法
    */
  /* var 平滑滚动css = document.createElement("style");
    平滑滚动css.innerHTML = ` body {
          scroll-behavior: smooth;
        }
        html {
          scroll-behavior: smooth;
        }`;
    document.firstElementChild.firstElementChild.appendChild(平滑滚动css); */

  /**  执行顺序
   * 1.开始发起fetch请求 url
   * 2.获取返回头部的编码信息和文件类型信息,如果这里没有编码信息,则在转成文字之后查找meta中charset和meta的Content-Type中的charset
   * 3.把返回的arraybuffer解码成文字,然后转成html的document对象
   * 4.复制接收的html的body的内容到当前网页的body当中
   * 5.添加其他标签到head中,不包括stylesheet和script
   * 6.1.线程1-添加有href的link的stylesheet到head中,当他们加载完成时,触发window的allstylesheetload事件,然后删除旧的stylesheet和script元素 和其他元素
   * 6.2.线程2-添加有src的script的javascript到head中,当他们加载完成时,触发window的allscriptloadformsrc事件,加载用文本内容加载的javascript到head执行,触发"alltextscriptload"事件,然后再触发window的load事件
   *
   */
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = windowloadhandler;
  }
  if (typeof 修改当前的网页地址动态加载网页内容不刷新 !== "function") {
    window.addEventListener("load", windowloadhandler);
  }
  /**
   * 防止多次加载windowloadhandler
   *
   *   *
   */
  global.修改当前的网页地址动态加载网页内容不刷新 =
    global.修改当前的网页地址动态加载网页内容不刷新 || windowloadhandler;

  function 同源网址跳转动态加载(url = location.href) {
    url = new URL(url);
    /* 替换协议与当前网页相同的协议 */
    url.protocol = location.protocol;
    if (
      (url.origin === location.origin && url.pathname !== location.pathname) ||
      url.search !== location.search
    ) {
      history.pushState("", "", url.toString());
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }
  windowloadhandler.同源网址跳转动态加载 = 同源网址跳转动态加载;
  windowloadhandler.alreadyrun = 0;

  function windowloadhandler() {
    if (windowloadhandler.alreadyrun != 1) {
      windowloadhandler.alreadyrun = 1;
      console.log(
        "第一次运行此函数启动,点击链接不跳转,修改当前的网页地址,动态加载网页内容,不刷新"
      );
    } else {
      console.log("已经运行过此函数,不能再次运行");
      return;
    }

    var loadid;
    // IMPORTCJSAMDUMD(
    //   "https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"
    // ).then(module => {
    //   var jQuery = module.default;

    // if (!importScripts) {
    /* var importScripts = (function(globalEval) {
      var xhr = new XMLHttpRequest();
      return function importScripts() {
        var args = Array.prototype.slice.call(arguments),
          len = args.length,
          i = 0,
          meta,
          data,
          content;
        for (; i < len; i++) {
          if (args[i].substr(0, 5).toLowerCase() === "data:") {
            data = args[i];
            content = data.indexOf(",");
            meta = data.substr(5, content).toLowerCase();
            data = decodeURIComponent(data.substr(content + 1));
            if (/;\s*base64\s*[;,]/.test(meta)) {
              data = atob(data);
            }
            if (/;\s*charset=[uU][tT][fF]-?8\s*[;,]/.test(meta)) {
              data = decodeURIComponent(escape(data));
            }
          } else {
            xhr.open("GET", args[i], false);
            xhr.send(null);
            data = xhr.responseText;
          }
          globalEval(data);
        }
      };
    })(eval); */
    // }
    //   if ("function" == typeof jQuery) {
    //     console.log("当前的jquery版本号为" + jQuery.fn.jquery);
    //   }
    /* new Promise(resolve => {
        if ("function" !== typeof jQuery) {
          importjquery();
        } else {
          /* 判断jquery版本号 */
    /*       if (jQuery.fn.jquery[0] < 3) {
            importjquery();
          }
        }
        resolve();
      });*/

    document.write = t => {
      console.warn(
        "document.write已被禁用，" +
          "把document.write中的内容生成dom元素放入body之中" +
          "要写入的内容为：",
        t
      );

      //   var jQuery;
      //   /* 等到使用document.write时再加载jquery */
      //   IMPORTCJSAMDUMD(
      //     "https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js",
      //     "jquery"
      //   ).then(module => {
      //     jQuery = module.default;
      //     // if (jQuery.fn.jquery[0] < 3) {
      //     //   importjquery();
      //     // }

      //     console.warn(
      //       "document.write已被禁用，" +
      //         "把document.write中的内容生成dom元素放入body之中" +
      //         "要写入的内容为：",
      //       t
      //     );
      //     // var writeelement = document.createElement("div");
      //     // writeelement.innerHTML = t;
      //     // document.getElementsByTagName("head")[0].appendChild(writeelement);
      //     var newelemnet = jQuery(t);
      //     try {
      //       newelemnet.attr("data-loadid", loadid);
      //     } catch (error) {
      //       console.warn(error);
      //       return;
      //     }

      //     //   newelemnet = jQuery(Array(...newelemnet).reverse());
      //     jQuery("body").append(newelemnet);
      //     console.log("添加元素到body ");
      //     /*  for (var i of newelemnet) {
      //           console.log(i.outerHTML);
      //         } */
      //     console.log(Array(...newelemnet).map(i => i.outerHTML));
      //     // console.log("把document.write中的内容生成dom元素放入head之中");
      //   });
    };

    //   function importjquery() {
    //     if ("function" == typeof jQuery) {
    //       console.log("当前的jquery版本号为" + jQuery.fn.jquery);
    //     } else {
    //       console.log("当前的jquery不存在");
    //     }

    //   importScripts("https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js");
    //     console.log("加载jquery版本号3.4.1");
    //   }

    // Object.freeze(jQuery);
    /* jQuery可能被覆盖,所以改名 */
    //改名失败
    // window.jQuery341 = jQuery;

    /* 禁用 document.write*/

    // document.charset = "UTF-8";/* 只读属性 */
    window.removeEventListener("load", windowloadhandler);

    var htmldataboject = new Object();
    Array(...document.querySelectorAll("a")).forEach(e => {
      if (e.href !== "") {
        e.href = e.href;
      }
    });
    Array(...document.querySelectorAll("script")).forEach(e => {
      if (e.src !== "") {
        e.src = e.src;
      }
    });
    /*  
        Array(...document.querySelectorAll("link[rel='stylesheet']")).forEach(e => {
          if (e.href !== "") {
            e.href = e.href;
          }
        }); */
    document.firstElementChild.dataset.search = location.search;
    document.firstElementChild.dataset.href = location.href;
    document.firstElementChild.dataset.pathname = location.pathname;
    console.log(
      "当前页面的document的href为",
      document.firstElementChild.dataset.href
    );
    console.log(
      "当前页面的document的pathname为",
      document.firstElementChild.dataset.pathname
    );
    console.log(
      "当前页面的document的search为",
      document.firstElementChild.dataset.search
    );
    // var lasthref;
    //  document.firstElementChild.dataset.href = location.href;
    替换a链接();
    document.addEventListener("click", 替换a链接);
    window.addEventListener("hashchange", 替换a链接);
    document.addEventListener("scroll", 替换a链接);
    document.addEventListener("mouseover", 替换a链接);

    //   document.addEventListener("scroll", 替换a链接);
    var 替换a链接数组 = [];

    function 替换a链接() {
      requestAnimationFrame(() => {
        替换a链接数组 = [];
        //   if (
        //     document.firstElementChild.dataset.search !== location.search ||
        //     document.firstElementChild.dataset.href !== location.href ||
        //     document.firstElementChild.dataset.pathname !== location.pathname
        //   ) {
        //     console.log(
        //       "当前页面的document的href为",
        //       document.firstElementChild.dataset.href
        //     );
        //     console.log(
        //       "当前页面的document的pathname为",
        //       document.firstElementChild.dataset.pathname
        //     );
        //     console.log(
        //       "当前页面的document的search为",
        //       document.firstElementChild.dataset.search
        //     );
        //   }
        //   document.firstElementChild.dataset.search = location.search;
        //   document.firstElementChild.dataset.href = location.href;
        //   document.firstElementChild.dataset.pathname = location.pathname;

        /* 把网页中的所有iframe中的a链接也进行替换 */
        var alinkarr = Array.from(document.getElementsByTagName("a"));
        //   console.log(alinkarr);
        alinkarr.forEach(替换所有a链接的arrayhandler);

        var docuiframes = Array(...document.getElementsByTagName("iframe"));
        docuiframes.forEach(e => {
          if (e.contentDocument) {
            var iframealinkarr = Array(
              ...e.contentDocument.getElementsByTagName("a")
            );
            iframealinkarr.forEach(替换所有a链接的arrayhandler);
          }
        });
     
        if (替换a链接数组.length > 0) {
          console.log("替换a链接", 替换a链接数组);
        }
      });
    }

    function 替换所有a链接的arrayhandler(e) {
      /* 尝试把http和https都替换,因为协议不同导致origin不同 */
      // e.protocol = location.protocol;
      /* 使用hostname代替origin判断 */
      if (e.href !== "") {
        e.href = e.href;
      }
      if (e.protocol === "http:" || e.protocol === "https:") {
        /* 如果search不同也是不同的页面,比如说论坛 */
        if (e.href != "javascript:;" && location.hostname === e.hostname) {
          if (
            e.pathname !== location.pathname ||
            e.search !== location.search
          ) {
            e.dataset.href = e.href;

            e.href = "javascript:;";

            替换a链接数组.push({
              name: "替换a链接",
              text: e.outerHTML
            });
            /*  */
            //   console.log("替换a链接", e.outerHTML);
            //

            /* 不应该用onclick,防止与网页原本定义的onclick冲突 */
            e.addEventListener("click", () => {
              /*   document.firstElementChild.dataset.href = location.href;
                                      document.firstElementChild.dataset.pathname = location.pathname; */
              var url = new URL(e.dataset.href);
              /* 替换协议与当前网页相同的协议 */
              url.protocol = location.protocol;
              if (
                (url.origin === location.origin &&
                  url.pathname !== location.pathname) ||
                url.search !== location.search
              ) {
                history.pushState("", "", url.toString());
                window.dispatchEvent(new PopStateEvent("popstate"));
              }

              //   动态加载网页内容不刷新(url);
            });
            /*    // e.onclick = () => {
                        //   /*   document.firstElementChild.dataset.href = location.href;
                        //           document.firstElementChild.dataset.pathname = location.pathname; */
            //   var url = new URL(e.dataset.href);
            //   /* 替换协议与当前网页相同的协议 */
            //   url.protocol = location.protocol;
            //   动态加载网页内容不刷新(url);
            // }; */
          }
        }
      }
    }
    //   document.onclick();
    function onpopstatehandler() {
      //   console.log("事件onpopstate,执行,");
      //    document.firstElementChild.dataset.href = document.firstElementChild.dataset.href;
      console.log(
        "当前的地址栏路径为" + location.pathname,
        "当前的网页document路径为" + document.firstElementChild.dataset.pathname
      );
      if (
        document.firstElementChild.dataset.pathname !== location.pathname ||
        document.firstElementChild.dataset.search !== location.search
      ) {
        console.log("动态加载网页内容不刷新开始执行");
        动态加载网页内容不刷新();
      }

      替换a链接();
    }
    window.addEventListener("popstate", onpopstatehandler);
    var script完成数量 = "script完成数量";
    var script总数量 = "script总数量";
    script加载完成[script完成数量] = script加载完成[script总数量] = 0;

    function script加载完成(urlortext) {
      //   script加载完成[script完成数量], script加载完成[script总数量];
      if (script加载完成[script完成数量] === 0) scrollTo(0, 0);
      //   console.log("滚动到顶部")
      替换a链接();
      script加载完成[script完成数量]++;
      console.log(
        "script完成数量",
        script加载完成[script完成数量],
        "script总数量",
        script加载完成[script总数量],
        "script加载完成",
        urlortext
      );
      //   console.log("script加载完成", urlortext);
      /* script完成数量 可能大于 script总数量 */
      if (script加载完成[script完成数量] >= script加载完成[script总数量]) {
        requestAnimationFrame(() => {
          console.log("触发window的allscriptloadformsrc事件");
          window.dispatchEvent(new Event("allscriptloadformsrc"));
        });
        // requestAnimationFrame(() => {
        /* 应该等到最后所有的 文本内容的脚本执行完毕之后再触发window的load事件*/
        function 所有文本内容加载的脚本完成() {
          window.removeEventListener(
            "alltextscriptload",
            所有文本内容加载的脚本完成
          );
          requestAnimationFrame(() => {
            console.log("触发window的load事件");
            window.dispatchEvent(new Event("load"));
          });
        }
        window.addEventListener(
          "alltextscriptload",
          所有文本内容加载的脚本完成
        );
        // });
        /* 等到所有用src加载的script全部加载完成,再加载文本内容的script */

        /* 创建新的事件 */
        setTimeout(() => {
          替换a链接();
        }, 150);

        // document.firstElementChild.dataset.href = location.href;
        // document.firstElementChild.dataset.search = location.search;
        // document.firstElementChild.dataset.pathname = location.pathname;
        // console.log(
        //   "当前页面的document的href为" + document.firstElementChild.dataset.href
        // );
        /*   document.firstElementChild.dataset.search = location.search;
                document.firstElementChild.dataset.href = location.href;
                document.firstElementChild.dataset.pathname = location.pathname;
                console.log(
                  "当前页面的document的href为",
                  document.firstElementChild.dataset.href
                );
                console.log(
                  "当前页面的document的pathname为",
                  document.firstElementChild.dataset.pathname
                );
                console.log(
                  "当前页面的document的search为",
                  document.firstElementChild.dataset.search
                ); */
      }
      /*  () => {
                    setTimeout(() => {
                      try {
                        window.dispatchEvent(new Event("load"));
                      } catch (error) {
                        console.log(error);
                      }
                    }, 300);
                  };  */
    }
    /* 如果没有调用过 loadscript函数则不会触发allscriptloadformsrc事件,不会加载文本内容的script */
    function loadscript(
      fileurl,
      loadguid = guid(),
      callback = undefined,
      errorcallback = undefined
    ) {
      var script = document.createElement("script");
      script.dataset.loadid = loadguid;
      script.type = "text/javascript";
      script.src = fileurl;
      script.onload = () => {
        callback(fileurl);
      };
      script.async = true;
      script.onerror = () => {
        errorcallback(fileurl);
        // console.log("加载失败" + fileurl);
      };
      document.getElementsByTagName("head")[0].appendChild(script);

      //   console.log("添加script到head", script.outerHTML);
      return script.outerHTML;
    }

    function loadscripttext(text, loadguid = guid()) {
      var script = document.createElement("script");
      /* script.onerror = () => {
              console.log("加载失败" + fileurl);
            }; */
      //文本内容的脚本不会onerror
      /*   script.onload = () => {
                  callback(text);
                }; */
      /* 用文本创建的script不会执行onload事件 */
      script.innerHTML = text;
      script.type = "text/javascript";
      script.dataset.loadid = loadguid;
      script.async = true;
      //   console.log("添加script到head", script.outerHTML);
      document.getElementsByTagName("head")[0].appendChild(script);
      return script.outerHTML;
    }

    function loadstylesheet(
      fileurl,
      loadguid = guid(),
      callback = undefined,
      errorcallback = undefined
    ) {
      var script = document.createElement("link");
      script.dataset.loadid = loadguid;
      script.rel = "stylesheet";
      script.href = fileurl;
      script.onload = () => {
        callback(fileurl);
      };
      script.type = "text/css";
      script.onerror = () => {
        errorcallback(fileurl);
        // console.log("加载失败" + fileurl);
      };
      document.getElementsByTagName("head")[0].appendChild(script);

      //   console.log(script);
      return script.outerHTML;
    }

    function guid() {
      return "xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        t
      ) {
        var e = (16 * Math.random()) | 0;
        return ("x" == t ? e : (3 & e) | 8).toString(16);
      });
    }

    var 完成linkstylesheet = "完成linkstylesheet";
    var 数量linkstylesheet = "数量linkstylesheet";
    单个stylesheet加载完成[完成linkstylesheet] = 单个stylesheet加载完成[
      数量linkstylesheet
    ] = 0;

    function 单个stylesheet加载完成(fileurl) {
      替换a链接();
      单个stylesheet加载完成[完成linkstylesheet]++;
      console.log(
        "完成linkstylesheet",
        单个stylesheet加载完成[完成linkstylesheet],
        "数量linkstylesheet",
        单个stylesheet加载完成[数量linkstylesheet],
        "stylesheet加载完成",
        fileurl
      );

      if (
        单个stylesheet加载完成[完成linkstylesheet] >=
        单个stylesheet加载完成[数量linkstylesheet]
      ) {
        requestAnimationFrame(() => {
          console.log("触发window的allstylesheetload事件");
          window.dispatchEvent(new Event("allstylesheetload"));
        });
      }
      setTimeout(() => {
        替换a链接();
      }, 150);
    }

    function 失败StyleSheet(fileurl) {
      /* 如果加载失败也要触发事件 */
      console.warn("加载失败" + fileurl);
      单个stylesheet加载完成[完成linkstylesheet]++;
      if (
        单个stylesheet加载完成[完成linkstylesheet] >=
        单个stylesheet加载完成[数量linkstylesheet]
      ) {
        requestAnimationFrame(() => {
          console.log("触发window的allstylesheetload事件");
          window.dispatchEvent(new Event("allstylesheetload"));
        });
      }
    }

    function 失败scriptsrc(fileurl) {
      /* 如果加载失败也要触发事件 */
      console.warn("加载失败" + fileurl);
      script加载完成[script完成数量]++;
      if (script加载完成[script完成数量] >= script加载完成[script总数量]) {
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event("allscriptloadformsrc"));
          console.log("触发window的allscriptloadformsrc事件");
        });
        // requestAnimationFrame(() => {
        //   console.log("触发window的load事件");
        //   window.dispatchEvent(new Event("load"));
        // });
      }
    }

    async function 动态加载网页内容不刷新(url = location.href) {
      单个stylesheet加载完成[数量linkstylesheet] = 0;
      单个stylesheet加载完成[完成linkstylesheet] = 0;
      script加载完成[script总数量] = 0;
      script加载完成[script完成数量] = 0;
      //   document.charset = "UTF-8";
      /*  if (typeof url === "undefined") {
              url = location.href;
            } else  */
      url = new URL(url);
      url.protocal = location.protocol;
      /* 如果url和当前页面的search不同则执行 */
      if (
        (location.hostname === url.hostname &&
          url.pathname !== location.pathname) ||
        url.pathname !== document.firstElementChild.dataset.pathname ||
        url.search !== document.firstElementChild.dataset.search
      ) {
        console.log("动态加载网页内容不刷新,执行" + url);
        // var urlorighin = new URL(url).origin;
        //    document.firstElementChild.dataset.href = location.href;
        if (
          url.pathname == document.firstElementChild.dataset.pathname &&
          url.search == document.firstElementChild.dataset.search
        ) {
          return;
          
          /* 等到加载成功再pushstate */
        }

        // var nowurl = location.href;
        console.log(
          "替换当前的网址" + document.firstElementChild.dataset.href,
          "改成",
          url.href
        );
        /* 竟然有的网页甚至还要给html标签加style! */
        // document.firstElementChild.style = "";
        /* 添加顺滑的滚动效果在scrollto的时候用到 */
        document.firstElementChild.style = "scroll-behavior: smooth;";
        // $("html").css("scroll-behavior", "smooth");
        document.firstElementChild.className = "";
        document.getElementsByTagName("body")[0].style = "";
        document.getElementsByTagName("body")[0].className = "";
        /* 返回文本和二进制数组,用来转换编码 */
        console.log("开始发起fetch请求", url);
        var dataresponse;
        try {
          var myhtmlcharset;
          try {
            dataresponse = await fetch(url);
          } catch (error) {
            console.warn(error);
            history.pushState(
              undefined,
              undefined,
              document.firstElementChild.dataset.href
            );
            window.open(url, "_blank");
            console.log("此链接加载失败，打开新页面");
            /* 有些网站的不同页面是用不同的http协议 */
            if (url.protocal === "https:") {
              url.protocal = "http:";
            } else {
              url.protocal = "https:";
            }
            try {
              dataresponse = await fetch(url);
            } catch (error) {
              console.warn(error);
              history.pushState(
                undefined,
                undefined,
                document.firstElementChild.dataset.href
              );
              return;
              //   history.back();
            }
          }
          /* 如果链接的protocol与当前的网页的protocol不同,则fetch加载失败 */
          if (typeof dataresponse != "undefined") {
            console.log("response", dataresponse);
            if (dataresponse.ok == false) {
              console.log("此链接加载失败，", dataresponse.status);
              history.pushState(
                undefined,
                undefined,
                document.firstElementChild.dataset.href
              );
              return;
            }
            // var htmldatatext = await dataresponse.text();
            try {
              var arraybuffer = await dataresponse.arrayBuffer();
              console.log("html二进制数组", arraybuffer);
              /* 等到加载成功再pushstate */
              /* 如果网页的类型正确再pushstate */
            } catch (error) {
              console.warn(error);
              console.log("此链接加载失败，打开新页面");
             

              //    location.reload();
              /* 如果直接设置location.href会刷新页面 */
              history.pushState(
                undefined,
                undefined,
                "document.firstElementChild.dataset.href"
              );
              //   location.search = document.firstElementChild.dataset.search;
              //   location.href = document.firstElementChild.dataset.href;
              //   location.pathname = document.firstElementChild.dataset.pathname;
              window.open(url, "_blank");
              return;
              // history.back();
              // history.pushState(
              //   undefined,
              //   undefined,
              //   document.firstElementChild.dataset.href
              // );
            }
          }
          var datacontenttype;
          try {
            datacontenttype = dataresponse.headers
              .get("Content-Type")
              .toLowerCase();
            console.log("Content-Type", datacontenttype);

            if (!datacontenttype.includes("text/html")) {
              console.log("此链接不是网页，打开新页面");
             
              window.open(url, "_blank");
              history.pushState(
                undefined,
                undefined,
                document.firstElementChild.dataset.href
              );
              /*  location.search = document.firstElementChild.dataset.search;
            location.href = document.firstElementChild.dataset.href;
            location.pathname = document.firstElementChild.dataset.pathname; */
              return;
              //    location.reload();
            }
          } catch (error) {
            console.warn(error);
            console.log("此链接加载失败，打开新页面");
            history.pushState(
              undefined,
              undefined,
              "document.firstElementChild.dataset.href"
            );
            window.open(url, "_blank");
            return;
          }

          /* fetch加载成功,而且网页类型正确 */
          
          document.firstElementChild.dataset.hash = url.hash;
          location.hash = document.firstElementChild.dataset.hash;
          /* 把location.hash改成url.hash */
          if (
            document.firstElementChild.dataset.search !== location.search ||
            document.firstElementChild.dataset.href !== location.href ||
            document.firstElementChild.dataset.pathname !== location.pathname
          ) {
            document.firstElementChild.dataset.search = location.search;
            document.firstElementChild.dataset.href = location.href;
            document.firstElementChild.dataset.pathname = location.pathname;
            console.log(
              "当前页面的document的href为",
              document.firstElementChild.dataset.href
            );
            console.log(
              "当前页面的document的pathname为",
              document.firstElementChild.dataset.pathname
            );
            console.log(
              "当前页面的document的search为",
              document.firstElementChild.dataset.search
            );
          }

          if (datacontenttype.includes("charset")) {
            myhtmlcharset = datacontenttype.slice(
              datacontenttype.indexOf("charset") + "charset".length + 1
            );
            if ("utf-8" === myhtmlcharset) {
              console.log("文档的编码是utf-8");
            } else {
              console.log("编码不是utf-8,当前的编码是" + myhtmlcharset);
            }
          } else {
            myhtmlcharset = "utf-8";
            try {
              /* 有的网站不在response中返回charset,又不是utf-8,在document中的meta的charset属性获取 
            <meta charset="gbk" >*/
              try {
                var charsetelement = Array(
                  ...new DOMParser()
                    .parseFromString(
                      new TextDecoder().decode(arraybuffer),
                      "text/html"
                    )
                    .querySelectorAll("meta[charset]")
                )[0];
              } catch (error) {
                console.warn(error);
              }

              if (typeof charsetelement != "undefined") {
                myhtmlcharset = charsetelement
                  .getAttribute("charset")
                  .toLowerCase();
              }
            } catch (error) {
              console.warn(error);
            }

            /*
                        有的网页没有document中的meta的charset属性
                        
                        只有meta http-equiv="Content-Type"
                        <meta http-equiv="Content-Type" content="text/html; charset=gb2312" >
                        */
            try {
              /* edge浏览器居然不支持TextDecoder! */
              try {
                var charsetelement = Array(
                  ...new DOMParser()
                    .parseFromString(
                      new TextDecoder().decode(arraybuffer),
                      "text/html"
                    )
                    .querySelectorAll(`meta[http-equiv="Content-Type"]`)
                )[0];
              } catch (error) {
                console.warn(error);
              }

              if (typeof charsetelement != "undefined") {
                var dataContentType = charsetelement
                  .getAttribute("content")
                  .toLowerCase();
                myhtmlcharset = dataContentType.slice(
                  dataContentType.indexOf("charset") + "charset".length + 1
                );
              }
            } catch (error) {
              console.warn(error);
            }

            // console.log("文档的编码是utf-8");
            if ("utf-8" === myhtmlcharset) {
              console.log("文档的编码是utf-8");
            } else {
              console.log("编码不是utf-8,当前的编码是" + myhtmlcharset);
            }
          }

          loadid = guid();
          try {
            var sr = new TextDecoder(myhtmlcharset).decode(arraybuffer);
          } catch (error) {
            console.warn(error);
          }

          var myhtmldata = new DOMParser().parseFromString(sr, "text/html");
          var mynewhtmldataurl = new URL(myhtmldata.URL);
          htmldataboject[
            decodeURI(mynewhtmldataurl.pathname + mynewhtmldataurl.search)
          ] = {
            url: myhtmldata.URL,
            text: sr,
            title: myhtmldata.title,
            charset: myhtmlcharset
          };
          console.log("加载过的网页的源代码合集", htmldataboject);

          console.log(myhtmldata);
          //   requestAnimationFrame(() => {
          document.title = myhtmldata.title;
          document.getElementsByTagName(
            "body"
          )[0].innerHTML = myhtmldata.getElementsByTagName("body")[0].innerHTML;

          document.getElementsByTagName(
            "body"
          )[0].style = myhtmldata.getElementsByTagName("body")[0].style;
          //   });
          document.getElementsByTagName(
            "body"
          )[0].className = myhtmldata.getElementsByTagName("body")[0].className;

          /* 把源代码中的body的style也加载到document的body中 */

          单个stylesheet加载完成[完成linkstylesheet] = 0;
          单个stylesheet加载完成[数量linkstylesheet] = Array.from(
            myhtmldata.querySelectorAll("link[rel='stylesheet']")
          ).length;

          /* 有href的link 的stylesheet 也要设置onload之后,全部加载完成之后,再删除旧元素*/
          window.addEventListener(
            "allscriptloadformsrc",
            onallscriptloadformsrchandler
          );
          window.addEventListener("allstylesheetload", allstyleloadhandler);
          /* 提前添加事件监听器,防止添加晚了就接搜不到 */
          //   requestAnimationFrame(() => {
          var 添加stylesheet元素到head数组 = [];
          Array.from(
            myhtmldata.querySelectorAll("link[rel='stylesheet']")
          ).forEach(e => {
            e.dataset.loadid = loadid;
            /* e.onerror = () => {
                            console.log("加载失败" + e.href);
                          }; */
            e.type = "text/css";
            /* 居然有的stylesheet没有href的值 */
            if (e.href != "") {
              e.href = e.href;
              添加stylesheet元素到head数组.push({
                type: e.type,
                name: "添加css元素",
                text: loadstylesheet(
                  e.href,
                  loadid,
                  单个stylesheet加载完成,
                  失败StyleSheet
                )
              });
            } else {
              单个stylesheet加载完成[数量linkstylesheet]--;
            }

            //   console.log("添加css元素到head", e.outerHTML);
            //   document.getElementsByTagName("head")[0].appendChild(e);
          });
          console.log(
            "添加stylesheet元素到head数组",
            添加stylesheet元素到head数组
          );
          if (添加stylesheet元素到head数组.length === 0)
            单个stylesheet加载完成();
          //   });

          //   requestAnimationFrame(() => {
          var 添加元素到head数组 = [];
          Array.from(myhtmldata.querySelectorAll("link")).forEach(e => {
            if (e.getAttribute("rel") !== "stylesheet") {
              e.dataset.loadid = loadid;
              if (e.href !== "") {
                e.href = e.href;
              }
              添加元素到head数组.push({
                name: "添加link元素",
                text: e.outerHTML
              });
              //   console.log("添加link元素到head", e.outerHTML);
              document.getElementsByTagName("head")[0].appendChild(e);
            }
          });

          Array.from(myhtmldata.querySelectorAll("style")).forEach(e => {
            e.type = "text/css";
            e.dataset.loadid = loadid;
            添加元素到head数组.push({
              name: "添加css元素",
              text: e.outerHTML
            });
            //   console.log("添加css元素到head", e.outerHTML);
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          Array.from(myhtmldata.querySelectorAll("meta")).forEach(e => {
            e.dataset.loadid = loadid;
            //   console.log("添加meta元素到head", e.outerHTML);
            添加元素到head数组.push({
              name: "添加meta元素",
              text: e.outerHTML
            });
            document.getElementsByTagName("head")[0].appendChild(e);
          });

          console.log("添加其他元素到head", 添加元素到head数组);

          script加载完成[script完成数量] = 0;
          script加载完成[script总数量] = Array.from(
            myhtmldata.querySelectorAll("script")
          ).length;
          var 添加文本script元素数组 = [];
          var script文本内容数组 = [];
          //   requestAnimationFrame(() => {
          var 添加script元素数组 = [];
          script文本内容数组 = [];
          Array.from(myhtmldata.querySelectorAll("script")).forEach(e => {
            e.type = e.type.toLowerCase();
            if (e.type == "text/javascript" || "" == e.type) {
              e.type = "text/javascript";
              if (e.src != "") {
                e.src = e.src;
                /* 使用src加载的javascript */
                /* 但是如果有些脚本不重复加载,可能网页出错 */
                /* 不要重复加载javascipt文件,否则可能出问题 */
                添加script元素数组.push({
                  type: e.type,
                  name: "添加script元素",
                  text: loadscript(e.src, loadid, script加载完成, 失败scriptsrc)
                });
                //   loadscript(e.src, loadid, script加载完成);
                /* 函数返回outerhtml */
              } else {
                // /* /* 使用文本内容加载的javascript */
                /* 把这些文本放到一个数组当中去,然后再一起加载,只添加一个eventlistener */
                /*  setTimeout(() => {
                                    loadscripttext(e.innerHTML, loadid);
                                  }, 50); */
                /* 等到使用了src加载的javascipt全部加载完成之后,在执行文本内容加载的javascript */
                /* 不是在这里加id */
                //   e.dataset.loadid = loadid;
                /* 要先加上id才行,不然,如果没有使用src加载的脚本时 ,或者stylesheet先加载完成时,脚本还没有执行就被删除了*/
                script文本内容数组.push(e.innerHTML);

                // /*

                //                   window.addEventListener("allscriptloadformsrc", onallscriptloadformsrc);
                //                   function onallscriptloadformsrc() {
                //                     window.removeEventListener(
                //                       "allscriptloadformsrc",
                //                       onallscriptloadformsrc
                //                     );
                //                     var 添加script元素数组 = [];
                //                     /* 函数返回outerhtml */
                //                     添加script元素数组.push({
                //                       name: "添加script元素",
                //                       text: loadscripttext(e.innerHTML, loadid)
                //                     });
                //                     // loadscripttext(e.innerHTML, loadid);
                //                     /*  script加载完成 */
                //                     console.log(
                //                       "添加文本内容加载的script元素",
                //                       添加script元素数组
                //                     );
                //                   }
                //                   script加载完成[script总数量]--; */

                /* script加载完成[script完成数量]++; */
              }
            } else {
              /* 不是javascript文件的script */
              if (e.src != "") {
                e.src = e.src;
              }
              e.dataset.loadid = loadid;
              // console.log("添加元素到head", e.outerHTML);
              添加script元素数组.push({
                type: e.type,
                name: "添加script元素",
                text: e.outerHTML
              });
              // script加载完成[script完成数量]++;
              document.getElementsByTagName("head")[0].appendChild(e);
              script加载完成[script总数量]--;
            }
            /*  console.log(
                            "script总数量",
                            script加载完成[script总数量],
                            "script完成数量",
                            script加载完成[script完成数量]
                          ); */
            /* 居然有的网站都没有通过src加载的script元素!,全都用文本的script而且还全都是document.write! */
            //   if (
            //     script加载完成[script总数量] === script加载完成[script完成数量]
            //   ) {
            //     script加载完成();
            //   }
          });
          /* 当没有通过src加载的script时,script总数量,等于, script完成数量, */
          console.log("添加通过src加载的script元素", 添加script元素数组);

          script文本内容数组.forEach(() => {
            script加载完成[script总数量]--;
          });
          if (添加script元素数组.length === 0) script加载完成();
          // var 添加文本script元素数组 = [];
          function onallscriptloadformsrchandler() {
            window.removeEventListener(
              "allscriptloadformsrc",
              onallscriptloadformsrchandler
            );
            script文本内容数组.forEach(text => {
              // var 添加script元素数组 = [];
              /* 函数返回outerhtml */
              添加文本script元素数组.push({
                type: "text/javascript",
                name: "添加script元素",
                text: loadscripttext(text, loadid)
              });
              // loadscripttext(e.innerHTML, loadid);
              /*  script加载完成 */

              // script加载完成[script总数量]--;
            });
            console.log("添加文本内容加载的script元素", 添加文本script元素数组);
            window.dispatchEvent(new Event("alltextscriptload"));
          }
          /* 如果添加allscriptloadformsrc的监听事件之前,就已经触发了allscriptloadformsrc事件则,接收不到 ,
应该早一点添加事件监听器*/
          //   window.addEventListener("allscriptloadformsrc", onallscriptloadformsrchandler);

          //   setTimeout(() => {
          //   requestAnimationFrame(() => {
          function allstyleloadhandler() {
            window.removeEventListener(
              "allstylesheetload",
              allstyleloadhandler
            );
            var 删除旧元素数组 = [];

            Array(
              ...document.querySelectorAll("link"),
              ...document.querySelectorAll("style"),
              ...document.querySelectorAll("meta"),
              ...document.querySelectorAll("script")
            ).forEach(e => {
              if (loadid != e.dataset.loadid) {
                e.parentNode.removeChild(e);
                删除旧元素数组.push({
                  name: "删除元素",
                  text: e.outerHTML
                });
                // console.log("删除旧元素", e.outerHTML);
              }
            });

            console.log("删除旧元素", 删除旧元素数组);
          }
          /* 提前添加事件监听器,防止添加晚了就接搜不到 */
        } catch (error) {
          console.warn(error);
        }
      } else {
        console.log(
          "动态加载网页内容不刷新,不执行" + "原网页与现在的网址相同不刷新",
          document.firstElementChild.dataset.href,
          url.href
        );
      }
    }
    // });
  }

  /**点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 */
})(
  (typeof window != "undefined" && window) || this
); /**点击链接不跳转修改当前的网页地址动态加载网页内容不刷新 */

//  export default 修改当前的网页地址动态加载网页内容不刷新
