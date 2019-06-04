const dotenv = require('dotenv').config(); // handles basic auth

const scenarioConfig = {
  "label": "homepage",
  "url": process.env.URL,
  "referenceUrl": process.env.REFERENCE_URL,
  "onBeforeScript": "onBeforeScript.js",
  "hideSelectors": [
    "ul.tiles li a"
  ],
  "removeSelectors": [
    "a.phone",
    "ul.wk-nav li:nth-of-type(3)",
    "ul.wk-nav li:nth-of-type(4)",
    "ul.wk-nav li:nth-of-type(5)",
    "ul.wk-nav li:nth-of-type(6)",
    "ul.wk-nav li:nth-of-type(7)",
    "li.active li",
    "div.view-feeds",
    "div.view-feeds + a",
    "ul.footer-menu li",
    "div#chat-widget-container"
  ]
};

module.exports = scenarioConfig;
