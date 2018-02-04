'use strict'

const assert = require('assert')
const removePrefix = require('.')

describe('removePrefix()', function () {
  it('should return remainder and removed prefix', function () {
    const [rest, prefix] = removePrefix('abc', 'a')
    assert.strictEqual(rest, 'bc')
    assert.strictEqual(prefix, 'a')
  })

  it('should return subject and empty string if prefix not found', function () {
    const [rest, prefix] = removePrefix('abc', 'x')
    assert.strictEqual(rest, 'abc')
    assert.strictEqual(prefix, '')
  })

  it('should remove any prefix in the argument list', function () {
    assert.strictEqual(removePrefix('abc', 'b', 'a')[0], 'bc')
  })

  it('should remove any prefix in an array', function () {
    assert.strictEqual(removePrefix('abc', ['a', 'b'])[0], 'bc')
  })

  it('should support the bind operator', function () {
    assert.strictEqual(removePrefix.call('abc', 'a')[0], 'bc')
  })
})
