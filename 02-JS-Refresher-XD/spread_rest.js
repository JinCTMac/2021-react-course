// spread operator ... can be used to split up array/object elements/properties and make new arrays/objects out of them

const array1 = [1,2,3];
const array2 = [...array1, 4, 5];

console.log(array2);

const person = {
  name: "John"
};

const newPerson = {
  ...person,
  age: 24
};

console.log(person);
console.log(newPerson);

// the rest operator ... to merge function arguments

const filter = (...args) => {
  return args.filter(el => el === 1);
}

// so we can pass multiple function arguments and the rest operator converts them all to a single argument - an array

console.log(filter(1, 2, 3, 4, 1));
