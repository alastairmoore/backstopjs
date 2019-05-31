var dotenv = require('dotenv').config(); // handles basic auth

var scenarioConfig = {
  "label": "paywall page",
  "url": process.env.URL + '/testa001-toc-testpackage001-level-15062016-001',
  "referenceUrl": process.env.REFERENCE_URL + '/testa001-toc-testpackage001-level-15062016-001',
  "hideSelectors": [
    "div.wk-icon-telephone-outline + em"
  ],
  "removeSelectors": [
    "a.phone",
    "ul.wk-nav li:nth-of-type(3)",
    "ul.wk-nav li:nth-of-type(4)",
    "ul.wk-nav li:nth-of-type(5)",
    "ul.wk-nav li:nth-of-type(6)",
    "ul.wk-nav li:nth-of-type(7)",
    "li.active li",
    "ul.footer-menu li",
    "div#chat-widget-container"
  ]
};

module.exports = scenarioConfig;
