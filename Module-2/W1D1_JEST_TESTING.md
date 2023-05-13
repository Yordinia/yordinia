# JEST Install , export and import
```
npm install --save-dev jest

function sum(a, b) {
  return a + b;
}
module.exports = sum; // jest doesn't know export default without babel

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
{
  "scripts": {
    "test": "jest" // "jest --coverage"
  }
}
```

### Running from command line
- You can run Jest directly from the CLI if it's globally available in your PATH, e.g. npm install jest --global

- Here's how to run Jest on files matching my-test, using config.json as a configuration file and display a native OS notification after the run:

```jest my-test --notify --config=config.json```

# Generate a basic configuration file
- ```jest --init``` - set jest configuration (y/n questions)
## **Babel**
- Allows us write advanced JavaScript feature, and Babel will compile it down into ones our browser can understand.
- First select babel, when asked during this command ```jest --init```
- To use bable
```npm install --save-dev babel-jest @babel/core @babel/preset-env```
  - babel package.json
```
"devDependencies": {
  "@babel/preset-env": ^^7.12.7,
  "babel-jest": ^^26.6.3,
  "jest": ^^26.6.3
}
```

# Common Matchers
- **toBe**
- checks the same bit in memory 
- e.g. let x = [1,2,3]; let y = x; let z = [...x];
- Here, expect(x).toBe(y) is pass
- expect(x).toBe(z) is fail 
- The 2nd fails because toBe checks the expected and the matcher's stored bit number, which is different in case of Z has different place than x.

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
- expect > return > expectation Object 
- Match it with a matcher, such as .toBe
- toBe uses Object.is to test exact equality
**toEqual**
```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```
- toEqual ignores object keys with undefined properties, undefined array items, array sparseness, or object type mismatch. To take these into account use toStrictEqual instead.
**not.toBe**
```
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```
## Truthiness
- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false
E.g
```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```
## Numbers
Most ways of comparing numbers have matcher equivalents.
```
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```
- For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
```
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```
## Strings
You can check strings against regular expressions with toMatch:
```
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```
## Arrays and iterables
You can check if an array or iterable contains a particular item using toContain:

```
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

## Exceptions
If you want to test whether a particular function throws an error when it's called, use toThrow.
```
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
});
```
