var dotenv = require('dotenv').config(); // handles basic auth

var scenarioConfig = {
  "label": "quick link beps",
  "url": process.env.URL + '/topic/beps-1',
  "referenceUrl": process.env.REFERENCE_URL + '/topic/beps-1',
  "removeSelectors": [
    "a.phone",
    "ul.wk-nav li:nth-of-type(3)",
    "ul.wk-nav li:nth-of-type(4)",
    "ul.wk-nav li:nth-of-type(5)",
    "ul.wk-nav li:nth-of-type(6)",
    "ul.wk-nav li:nth-of-type(7)",
    "li.active li",
    "div.description",
    "a[href^=\"/cch_uk/btl/o_revmat-it-misc-\"]",
    "ul.footer-menu li",
    "div#chat-widget-container"
  ]
};

module.exports = scenarioConfig;
