'use strict'

const arrify = require('arrify')
const PossibleFunction = require('possible-function')

/**
 * Removes a prefix from the beginning of a string if found.
 * @param  {string} subject The string from which to remove the prefix.
 * @param  {string|array.<string>} prefixes One or more possible prefixes to
 *   search for. The first one found is removed.
 * @param  {removePrefix~resultCallback=} resultCallback An optional callback that will be
 *   given the prefix and the remaining string.
 * @return {string} The string without its prefix, or the original string if no
 *   prefix was found.
 */
module.exports = function removePrefix (subject, prefixes, resultCallback) {
  if (typeof this === 'string' || this instanceof String) {
    [prefixes, resultCallback] = arguments
    subject = this
  }

  resultCallback = PossibleFunction(resultCallback)

  prefixes = arrify(prefixes)
  for (const prefix of prefixes) {
    if (subject.startsWith(prefix)) {
      const rest = subject.substr(prefix.length)
      resultCallback(prefix, rest)
      return rest
    }
  }

  resultCallback(null, subject)
  return subject
}

/**
 * A callback that is given the prefix and the remaining string after the prefix
 * is removed.
 * @callback removePrefix~resultCallback
 * @param {string|null} prefix The prefix removed from the string, or `null` if
 *   no prefix was found.
 * @param {string} remainder The rest of the string after the prefix has been
 *   removed.
 * @returns {void}
 */
