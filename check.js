const recurs = (a) => {
  const result = [];
  
  const iter = (num) => {
    if (num === 10) {
      return result;
    }
    result.push(num);
    return iter(num + 1);
  };

  return iter(a);
};

console.log('heeeeeeeey');
console.log(recurs(1)); // [1, 2, 3, ..., 10]




const iterPartTwo = (num, result) => {
  if (num === 10) {
    return result;
  }
  result.push(num);
  return iterPartTwo(num + 1, result);
};

console.log('---------------------')
console.log('---------------------')
console.log('---------------------')

console.log(iterPartTwo(1, []));

const arr1 = [1, 2, 3, true];
const arr2 = arr1.map(el => el);
console.log(arr2);
console.log(arr1 === arr2);

const arr3 = [...arr2];
console.log(arr3 === arr2);

const user1 = {
  username: 'Danil',
  surname: 'Kondratenko',
};

const user2 = Object.assign({}, user1);
console.log(user2, user1, user1 === user2);


console.log('---------------');
console.log('---------------');
console.log('---------------');
console.log('---------------');
console.log('---------------');


const counter = () => {
  let num = 1;
  const innerFunc = () => {
    num += 1;
    console.log(num);
  };
  return innerFunc;
}

const a = counter();

for (let i = 0; i < 10; i += 1) {
  a();
};
// a();
// const b = mainFunc();


class MyClass {
  constructor() {
  };
}

const parameter = new MyClass();
console.log(typeof(parameter));