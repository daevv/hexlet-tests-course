import { capitalize } from "../src/capitalize.js";
import { strict as assert } from 'node:assert';


assert.equal(capitalize('hello'), 'Hello')
assert.equal(capitalize(''), '')
assert.notEqual(capitalize('Hello'), 'hello')



if (capitalize('') !== '') {
  throw new Error('The result is incorrect');
}

console.log('The result is correct!');