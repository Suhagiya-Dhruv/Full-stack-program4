# JavaScript Data Types and String Methods

JavaScript is a versatile programming language with several built-in data types and useful string methods. This document will guide you through the primitive data types, comment styles, variable declaration, string usage, and string methods in JavaScript.

## Data Types in JavaScript

JavaScript has several primitive data types:

1. **Number**: Represents both integer and floating-point numbers.
    - Examples: `15`, `15.20`
2. **Boolean**: Represents logical values `true` and `false`.
    - Example: `true`
3. **undefined**: Indicates a variable that has been declared but not yet assigned a value.
4. **null**: Represents the intentional absence of any object value.
5. **String**: Represents a sequence of characters.
    - Examples: `"Hello"`, `'Hello'`, `` `Hello` ``
6. **Symbol**: Represents a unique and immutable primitive value.

## Comments

JavaScript supports both single-line and multi-line comments.

- **Single-line comment**: Prefixed with `//`.
    ```javascript
    // This is a single-line comment
    ```
- **Multi-line comment**: Enclosed within `/* ... */`.
    ```javascript
    /* 
     This is a multi-line comment
    */
    ```

## Variable Declaration

Variables in JavaScript can be declared using `var`, `let`, or `const`.

```javascript
var a = 15;
var b = 15.20;
var c = "15";
var d = true;
var e;          // undefined
var f = null;   // null
```

## Logging and Type Checking

The `console.log` function is used to print values to the console. The `typeof` operator returns a string indicating the type of the operand.

```javascript
console.log(a);                         // 15
console.log(typeof b, b);               // number 15.20
console.log(typeof c, c);               // string "15"
console.log(typeof d, d);               // boolean true
console.log(typeof e, e);               // undefined undefined
console.log(typeof f, f);               // object null
console.log(typeof typeof b);           // string
```

## String Usage

Strings in JavaScript can be defined using double quotes (`"`), single quotes (`'`), or backticks (`` ` ``).

```javascript
var a = "Hello";  // Double quotes
var b = 'Hello';  // Single quotes
var c = `Hello`;  // Backticks (template literals)

var formula = "H2O";
var f = `${c} This is the formula of water "${formula}"`;

console.log(f);  // "Hello This is the formula of water "H2O""
```

## String Methods

JavaScript provides various methods to manipulate strings.

```javascript
var a = `               This is the formula of water "${formula}"              `;

// String length
console.log(a.length);  // Number of characters in the string

// Character at specific index
console.log(a.charAt(34));  // Character at index 34

// Splitting string into an array
console.log(a.split());     // ["               This is the formula of water "H2O"              "]
console.log(a.split(""));   // [" ", " ", " ", " ", " ", ...]
console.log(a.split("is")); // ["               Th", " ", " the formula of water "H2O"              "]

// Trimming whitespace
console.log(a.trim());      // Removes whitespace from both ends

// String concatenation
var a = "hello";
var b = " world";
console.log(a + b);                    // "hello world"
console.log(a.concat(b).concat(" 123456").concat("789"));  // "hello world 123456789"

// Arithmetic with numbers
var c = 5;
var d = 10;
console.log(c + d);  // 15
```