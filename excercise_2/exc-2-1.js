function camelToSnake(camel) {
  const result = [];
  const specialSumbol = '_';

  const splitCamel = camel.split('');

  splitCamel.forEach((element, index, arr) => {
    if (element.toLowerCase() === arr[index]) {
      result.push(element);
    } else {
      result.push(`${specialSumbol}${element.toLowerCase()}`);
    }
  });

  return result.join('');
}

console.log(camelToSnake('someNewWordToTransformAndA')); //some_new_word_to_transform_and_a
