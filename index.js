const sumAllScores = (array) => {

  let accumulator = 0;
  array.map((item, index) => {
    accumulator = accumulator + item.score;
  })
  return accumulator;
}

sumAllScores([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]);