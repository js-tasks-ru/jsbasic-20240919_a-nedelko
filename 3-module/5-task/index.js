function getMinMax(str) {
  let num = str
    .split(" ")
    .map((item) => parseFloat(item))
    .filter((item) => !isNaN(item));

  let min = Math.min(...num);
  let max = Math.max(...num);

  return {
    min: min,
    max: max,
  };
}
