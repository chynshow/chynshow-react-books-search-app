export default (arr) => [
  ...new Map(
    arr.map((item) => {
      return [item.id, item];
    })
  ).values(),
];
