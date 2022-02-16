// let users = [
//   {
//     name: 'Peter',
//     age: 32
//   },
//   {
//     name: 'John',
//     age: 15,
//     random: 12345
//   },
//   {
//     name: 'Jim',
//     age: 16,
//     id: 15
//   }
// ];
// let users = [
//   {
//     name: 'Peter',
//     age: 32
//   }
//   {
//     name: 'John',
//     age: 15,
//     random: 12345
//   },
//   {
//     name: 'Jim',
//     age: 16,
//     id: 15
//   },
//   {
//     nul: null,
//     undef: undefined
//   }
// ];
// let length = users.length;
// for (let i = 0; i < length; i += 1) {
//   addGettersAndSetters(users[i]);
// }

// function addGettersAndSetters(obj) {
//   for (key in obj) {
//     obj['get' + key.split('')[0].toUpperCase() + key.slice(1)] = function () {
//       return self[key];
//     };
//     obj['set' + key.split('')[0].toUpperCase() + key.slice(1)] = function (
//       newValue
//     ) {
//       self[key] = newValue;
//       return newValue;
//     };
//   }
//   return obj;
// }

// console.log(users[0]);
// console.log(users[0].getName());
// console.log(users[0].getAge);
