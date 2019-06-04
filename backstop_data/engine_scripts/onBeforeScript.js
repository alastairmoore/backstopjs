const dotenv = require('dotenv').config();

module.exports = async (page, scenario, vp) => {
  await page.goto(process.env.URL + '/user');
  await page.type('#edit-name', process.env.USERNAME);
  await page.type('#edit-pass', process.env.PASSWORD);
  await page.click('#edit-submit');

  await page.goto(process.env.REFERENCE_URL + '/user');
  await page.type('#edit-name', process.env.USERNAME);
  await page.type('#edit-pass', process.env.PASSWORD);
  await page.click('#edit-submit');
};
