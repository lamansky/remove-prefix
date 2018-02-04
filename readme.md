# remove-prefix

Removes a string from the beginning of another string.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i remove-prefix
```

## API

The module exports a single function.

### Parameters

1. Bindable: `subject` (string): The string that may or may not have a prefix to be removed.
2. `...prefixes` (one or more of: string or Array of strings): The first prefix found will be removed. Longer prefixes are checked first.

### Return Value

A two-element Array:

1. The string without its prefix, or the original string if no prefix was found.
2. The prefix if one was found; otherwise an empty string.

## Example

```javascript
const removePrefix = require('remove-prefix')

const subject = 'abcdef'
let result, prefix

// Removes the prefix
[result] = removePrefix(subject, 'abc')
result // 'def'

// Returns prefix as second element, or returns an empty string if not found
[result, prefix] = removePrefix(subject, 'xyz')
result // 'abcdef'
prefix // ''

// Removes the first prefix found. Longer prefixes are checked first.
// Prefixes can be given as an arguments list or in an array.
[result, prefix] = removePrefix(subject, 'xyz', 'abc', 'de')
result // 'def'
prefix // 'abc'

// Supports the bind operator
subject::removePrefix('abc') // ['def', 'abc']
```

## Related

* [remove-suffix](https://github.com/lamansky/remove-suffix): Removes a string from the end of another string.
