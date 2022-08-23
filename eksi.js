// ==UserScript==
// @name         ek$i sözlük wider
// @namespace    https://github.com/masterofthesith/eksisozlukwider
// @version      0.1
// @description  büyük ekranlar için ekşi wider
// @author       masterofthesith
// @match        https://eksisozluk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=eksisozluk.com
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).find("header #top-bar").css("width","1540px");
    $(document).find("#container, .container").css({"width":"100%","max-width":"1540px"});
    $(document).find("aside#aside").remove();
    $(document).find("section#content-body").css("width","1260px");
})();
