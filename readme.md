# remove-prefix

A [Node.js](https://nodejs.org/) module that removes a prefix from a string.

Optionally supports the [bind operator](https://github.com/tc39/proposal-bind-operator) and/or the callback design pattern.

## Installation

```bash
npm install remove-prefix --save
```

## Usage

```javascript
const removePrefix = require('remove-prefix')

const subject = 'abcdef'

// Removes the prefix:
removePrefix(subject, 'abc') // 'def'

// Removes the first prefix found from among those in an array:
removePrefix(subject, ['xyz', 'abc', 'de']) // 'def'

// Supports the bind operator:
subject::removePrefix('abc') // 'def'

// Supports callback pattern:
removePrefix(subject, 'abc', (prefix, remainder) => {
  console.log(prefix) // 'abc'
  console.log(remainder) // 'def'
})

// Callback pattern with bind operator and with non-existent prefix:
subject::removePrefix('xyz', (prefix, remainder) => {
  console.log(prefix) // null
  console.log(remainder) // 'abcdef'
})
```
