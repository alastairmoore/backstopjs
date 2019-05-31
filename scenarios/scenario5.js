var dotenv = require('dotenv').config(); // handles basic auth

var scenarioConfig = {
  "label": "search tools",
  "url": process.env.URL,
  "referenceUrl": process.env.REFERENCE_URL,
  "keyPressSelectors": [
    {
      "selector": "#instant-search-term",
      "keyPress": "tax"
    }
  ],
  "clickSelector": "button.wk-search-submit",
  "postInteractionWait": "h1#stats strong.term",
  "selectors": [
    "aside.search-tools"
  ]
};

module.exports = scenarioConfig;
