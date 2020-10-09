export default (arr, val) => [
  ...new Map(
    arr.map((item) => {
      return [item[val], item];
    })
  ).values(),
];
