/** @format */

const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  otherLanguages: ['vi'],
  localeSubpaths: { vie: 'vie' },
  localePath: path.resolve('./public/locales'),
});
