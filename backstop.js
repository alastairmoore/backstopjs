const dotenv = require('dotenv').config();
const fs = require('fs');
var scenarios = [];

var files = fs.readdirSync(__dirname + '/scenarios/');

files.forEach(function(file) {
  var scenarioConfig = require('./scenarios/' + file);
  scenarios.push(scenarioConfig);
});
 
module.exports =
{
  "id": "CITAA",
  "viewports": [
    {
      "label": "desktop",
      "width": 1024,
      "height": 768
    },
    {
      "label": "phone",
      "width": 375,
      "height": 667
    }
  ],
  "onBeforeScript": "chromy/onBefore.js",
  "onReadyScript": "chromy/onReady.js",
  "cookiePath": "backstop_data/engine_scripts/cookies.json",
  "delay": 0,
  "selectorExpansion": true,
  "misMatchThreshold" : 0,
  "requireSameDimensions": true,
  "scenarios": 
    scenarios,
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser", "CI"],
  "engine": "chrome",
  "asyncCaptureLimit": 10,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
};
