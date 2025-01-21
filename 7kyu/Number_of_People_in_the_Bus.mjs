var number = function (busStops) {
  return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
