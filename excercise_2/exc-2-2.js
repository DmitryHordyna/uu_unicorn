function snakeToCamel(snake) {
  const specialSumbol = '_';
  const result = [];

  const splitSnake = snake.split('');

  for (let i = 0; i < splitSnake.length; i++) {
    const currentSymbol = splitSnake[i];
    if (currentSymbol === specialSumbol) {
      const nextSumbolUpperCase = splitSnake[i + 1].toUpperCase();
      result.push(nextSumbolUpperCase);
      i++; //яяк можна лаконічного повідомити що я скіпаю ітерацію наступну чи це і так зрозуміло?
    } else {
      result.push(currentSymbol);
    }
  }

  return result.join('');
}

console.log(snakeToCamel('some_new_word_to_transform_and_a')); //someNewWordToTransformAndA
