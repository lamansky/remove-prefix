'use strict'

const assert = require('assert')
const removePrefix = require('.')

describe('removePrefix()', function () {
  it('should remove a single prefix', function () {
    assert.strictEqual(removePrefix('abc', 'a'), 'bc')
  })

  it('should return subject as-is if prefix not found', function () {
    assert.strictEqual(removePrefix('abc', 'x'), 'abc')
  })

  it('should remove any of a list of prefixes', function () {
    assert.strictEqual(removePrefix('abc', ['a', 'b']), 'bc')
  })

  it('should accept a `this` context in lieu of the first parameter', function () {
    assert.strictEqual(removePrefix.call('abc', 'a'), 'bc')
  })

  it('should give the callback the prefix and the remainder', function (done) {
    removePrefix('abc', 'a', (prefix, rest) => {
      assert.strictEqual(prefix, 'a')
      assert.strictEqual(rest, 'bc')
      done()
    })
  })

  it('should give the callback null if no prefix is present', function (done) {
    removePrefix('abc', 'x', (prefix, rest) => {
      assert.strictEqual(prefix, null)
      assert.strictEqual(rest, 'abc')
      done()
    })
  })
})
