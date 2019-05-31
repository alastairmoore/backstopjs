var dotenv = require('dotenv').config(); // handles basic auth

var scenarioConfig = {
  "label": "hmrc manual finder",
  "url": process.env.URL + '/finder/hmrc-manuals',
  "referenceUrl": process.env.REFERENCE_URL + '/finder/hmrc-manuals',
  "hideSelectors": [
  ],
  "removeSelectors": [
    "a.phone",
    "ul.wk-nav li:nth-of-type(3)",
    "ul.wk-nav li:nth-of-type(4)",
    "ul.wk-nav li:nth-of-type(5)",
    "ul.wk-nav li:nth-of-type(6)",
    "ul.wk-nav li:nth-of-type(7)",
    "ul.footer-menu li",
    "div#chat-widget-container"
  ]
};

module.exports = scenarioConfig;
