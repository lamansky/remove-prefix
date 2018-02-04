'use strict'

const flatten = require('@lamansky/flatten')
const longestFirst = require('longest-first')
const supportBindOperator = require('sbo')

module.exports = supportBindOperator(function removePrefix (subject, ...prefixes) {
  const prefix = longestFirst(flatten(prefixes)).find(s => subject.startsWith(s))
  return prefix ? [subject.substr(prefix.length), prefix] : [subject, '']
})
