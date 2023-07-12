import { capitalize } from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
  throw new Error('The result is incorrect');
}
if (capitalize('') !== '') {
  throw new Error('The result is incorrect');
}

console.log('The result is correct!');