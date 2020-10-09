import removeDuplicates from './removeDuplicates';

it('return empty array', () => {
  const res = removeDuplicates([], 'id');
  expect(res).toEqual([]);
});

it('return array without duplicates', () => {
  const input = [
    { name: 'John', age: 30, sex: 'Male' },
    { name: 'John', age: 30, sex: 'Male' },
    { name: 'Mike', age: 40, sex: 'Male' },
    { name: 'Lora', age: 25, sex: 'Female' },
    { name: 'Lora', age: 25, sex: 'Female' },
    { name: 'Rob', age: 30, sex: 'Male' },
    { name: 'John', age: 30, sex: 'Male' },
  ];
  const output = [
    { name: 'John', age: 30, sex: 'Male' },
    { name: 'Mike', age: 40, sex: 'Male' },
    { name: 'Lora', age: 25, sex: 'Female' },
    { name: 'Rob', age: 30, sex: 'Male' },
  ];
  const res = removeDuplicates(input, 'name');
  expect(res).toEqual(output);
});
