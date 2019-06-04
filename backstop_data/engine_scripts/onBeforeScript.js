const dotenv = require('dotenv').config();

module.exports = async (page, scenario, vp) => {
  await page.goto(process.env.URL + '/user');
  await page.type('#edit-name', '');
  await page.type('#edit-pass', '');
  await page.click('#edit-submit');
};
