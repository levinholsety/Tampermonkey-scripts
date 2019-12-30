// ==UserScript==
// @name         golang module version for github
// @namespace    https://github.com/levinholsety
// @version      1.0
// @description  Add golang module version in each commit.
// @author       levinholsety
// @include      https://github.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    $(document).on("pjax:end", showGolangModuleVersions);
})();

function showGolangModuleVersions() {
    var list = $("div .commits-listing");
    if (!list) {
        return
    }
    list.find(".commit-group .commit").each(function() {
        var time = $(this).find("relative-time").first().attr("datetime");
        time = time.replace(/[-T:Z]/g, "");
        var id = $(this).find("clipboard-copy").first().attr("value");
        id = id.substring(0, 12);
        $(this).find(".commit-meta").first().append("&nbsp;<div style='font-style:italic;'>" + time + "-" + id + "</div>");
    });
}