/*
use function "addGettersAndSetters" to add getters and setters for each key of the object in the array
add extra method getCountOfModification to each object which will
return count of used setters for that specific object

name ->  users[0].getName()
name -> users[0].setName(newValue)
*/

let users = [
  {
    name: 'Peter',
    age: 32
  },
  {
    name: 'John',
    age: 15,
    random: 12345
  },
  {
    name: 'Jim',
    age: 16,
    id: 15
  }
];

function addGettersAndSetters(obj) {
  for (key in obj) {
    const getValue = 'get' + key.split('')[0].toUpperCase() + key.slice(1);
    const setValue = 'set' + key.split('')[0].toUpperCase() + key.slice(1);

    const currentKey = key;
    obj.count = 0;
    obj[`${getValue}`] = function () {
      return this[currentKey];
    };
    obj[`${setValue}`] = function (newValue) {
      this[currentKey] = newValue;
      return newValue;
    };

    obj[`${setValue}`] = function (newValue) {
      this.count++;
      this[currentKey] = newValue;
      return newValue;
    };
    obj['getCountOfModification'] = function () {
      return this.count;
    };
  }
}

module.exports = addGettersAndSetters;
