// ==UserScript==
// @name         golang module version for github
// @namespace    https://github.com/levinholsety
// @version      1.0.1
// @description  Add golang module version to each commit.
// @author       levinholsety
// @include      https://github.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

"use strict"

$(addGolangModuleVersions)
$(document).on("pjax:end", addGolangModuleVersions);

function addGolangModuleVersions() {
    var list = $(".commits-listing");
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