// ==UserScript==
// @name         ek$i sözlük wider
// @namespace    https://github.com/masterofthesith/eksisozlukwider
// @version      0.1
// @description  büyük ekranlar için ekşi wider
// @author       masterofthesith
// @match        https://eksisozluk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eksisozluk.com
// @downloadURL  https://github.com/masterofthesith/eksisozlukzikutema/raw/main/eksi.user.js
// @updateURL    https://github.com/masterofthesith/eksisozlukzikutema/raw/main/eksi.user.js
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// ==/UserScript==
function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}
(function() {
    'use strict';

    GM_addStyle("@import url(https://use.typekit.net/jxr8xbn.css);");
    GM_addStyle(":root::-webkit-scrollbar {width: 16px}");
    GM_addStyle(":root::-webkit-scrollbar-track {background: 0 0;box-sizing: border-box}");
    GM_addStyle(":root::-webkit-scrollbar-thumb {border-radius: 8px;border: 4px solid #0000;background-clip: content-box;background-color: #aaa}");
    GM_addStyle("* { box-sizing: border-box!important}");
    GM_addStyle("html, body { min-height:100vh; height:100%; background-color:#151515!important; }");
    GM_addStyle("html>body>header #top-bar { background: url(https://zqwqz.org/css/navbg.jpg)!important; }");
    GM_addStyle("body { font-family:'proxima-nova'!important; font-weight:400!important;}");
    GM_addStyle("#sub-navigation { border-top:  1px solid #343434!important; box-shadow: 0 1px 3px rgb(0 0 0 / 30%)!important }");
    GM_addStyle("#container { background-image: url(https://zqwqz.org/css/imperialforce/bg.jpg)!important; background-size:cover!important; background-attachment: fixed!important; background-color:#151515!important;}");
    GM_addStyle("header #top-bar { width:100%!important; }");
    GM_addStyle("#search-form { border-radius: 0!important; margin:12px 0 0 25px!important; }");
    GM_addStyle("#search-form #search-textbox { border-radius: 0!important; background-color: #343434!important;height:34px!important; line-height:34px!important; color:#fff!important; }");
    GM_addStyle("#search-form button[type=submit] { border-radius: 0!important; height:34px!important; line-height:34px!important;  }");
    GM_addStyle("#container, .container { width:100%!important; max-width:100%!important; padding:0 15px!important}");
    GM_addStyle("section#content-body { width:100%!important; margin:0!important; padding:25px!important; }");
    GM_addStyle("#logo a { background-image: url(https://i.imgur.com/XpwiIwd.png)!important; position: relative!important; width:200px!important; background-size:90% auto!important; margin: 0 auto!important;");
    GM_addStyle("#sub-navigation>ul>li { max-width: calc(100% / 14)!important; width:100%!important;text-transform: uppercase!important;font-weight:400!important;");
    GM_addStyle("h1 a {color:#83c24f!important; font-weight:400!important;}");
    GM_addStyle("h2 { color: #85c345!important; }");
    GM_addStyle(".topic-list.partial>li>a>small { color: #00c53d!important }");
    GM_addStyle("#entry-item-list .content, #matter-index-item-list .content, #matter-content .content, #matter-answer-content .content, #pinned-entry .content, #matter-answer-index-item-list .content, #matter-answer-list .content { font-weight:300!important; }");
    $(document).on("ready",function() {
    $(document).find("header #top-bar").css("width","100%!important");
    $(document).find("#container, .container").css({"width":"100%!important","max-width":"100%!important","padding":"0 15px!important"});
    $(document).find("aside#aside").remove();
    $(document).find("section#content-body").css({"width":"100%!important","margin":"0","padding":"25px"});
    $(document).find("#nav-extra-buttons").remove();
    });
})();
