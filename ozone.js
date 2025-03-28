// ==UserScript==
// @name         Esther's friend's form.
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  try to take over the world!
// @author       You
// @match        https://docs.google.com/forms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

// https://docs.google.com/forms/d/e/1FAIpQLScdgnhK9dNIzvHFM_BK2oJ-7_VRW7makrSqiPRmcUWb8AQaRA/viewform

(function () {
  "use strict";
  console.log("script start.");
  if (document.querySelector(".l4V7wb.Fxmcue").innerText === "Next") {
    document.querySelector(".l4V7wb.Fxmcue").click();
  }
})();
const radio = document.querySelectorAll(
  ".docssharedWizToggleLabeledContainer.ajBQVb"
);
radio[0].click();
radio[5].click();
radio[8].click();
const inputA = document.querySelector(".whsOnd.zHQkBf");
inputA.focus();
document.execCommand("insertText", false, "UNGA BUNGA HAHAHAHAHA");
inputA.dispatchEvent(new Event("change", { bubbles: true }));

setTimeout(() => {
  if (
    document.querySelectorAll(".NPEfkd.RveJvd.snByac")[1].innerText === "Next"
  ) {
    document.querySelectorAll(".NPEfkd.RveJvd.snByac")[1].click();
  }
}, 1000);
