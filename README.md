# Capitalize 
![npm](https://img.shields.io/npm/v/@chumnend/capitalize)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/chumnend/capitalize)
![GitHub](https://img.shields.io/github/license/chumnend/capitalize)

A package for capitalizing letters. This is my first published npm
pacakge, created for me to experiment with the process.

## Installation
``
npm install @chumnend/capitalize
``

## Usage
Import the package into your project,
```
const capitalize = require('@chumnend/capitalize');
```

### Capitalize all letters
```
const str = 'hello world'
const res = capitalize(str);
console.log(res); // Outputs: 'HELLO WORLD'
```

### Capitalize only first character
```
const str = 'hello world'
const res = capitalize(str, 'first');
console.log(res); // Outputs: 'Hello world'
```

### Capitalize first character of each word
```
const str = 'hello world'
const res = capitalize(str, 'words');
console.log(res); // Outputs: 'Hello World'
```
