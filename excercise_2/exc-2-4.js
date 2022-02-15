var csvInput = '1,  Peter,  22;' + '2, Jim, 11,;' + '3, P eeter, 8 ;';

function tranformCsv(string) {
  const result = [];
  const symbolEndPersonInformation = ';';
  const findPersonsArr = string.split(symbolEndPersonInformation);
  for (let i = 0; i < findPersonsArr.length; i++) {
    const currentPerson = findPersonsArr[i];
    if (currentPerson.length > 1) {
    }
  }
  return result;
}

console.log(tranformCsv(csvInput));
// [ { id: 1, name: 'Peter', age: 22 },
//    { id: 2, name: 'Jim', age: 11 },
//    { id: 3, name: 'P eeter', age: 8 } ]
