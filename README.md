# String Calculator

A simple JavaScript string calculator with support for custom delimiters, negative number validation, and Jest-based unit tests.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone or download this repository.**
2. Open a terminal in the project directory.

3. **Install dependencies:**
    ```sh
    npm install
    ```

## Running Tests

This project uses [Jest](https://jestjs.io/) for unit testing.

To run all tests:

```sh
npm test
```

Or, if you want to run Jest directly:

```sh
npx jest
```

## Project Structure

-   `index.js` — Calculator implementation
-   `index.test.js` — Jest test cases for the calculator

## Example Usage

You can use the calculator in your own scripts:

```javascript
const Calculator = require("./index");
console.log(Calculator.add("1,2,3")); // Output: 6
```

## Notes

-   Supports custom delimiters using the `//[delimiter]\n` syntax.
-   Throws an error for negative numbers, listing all negatives found.
-   Ignores numbers greater than 1000.
-   Handles newlines as valid delimiters.

---
