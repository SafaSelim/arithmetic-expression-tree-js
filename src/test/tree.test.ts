import { tree } from '../mock/mock-tree';


test('Testing to result method: tree.result() should be equal to 2', () => {
  expect(tree.result()).toEqual(2);
});

test('Testing to toString method: tree.toString() should be equal to "((7 + ((3 - 2) x 5)) ÷ 6)"', () => {

  expect(tree.toString()).toEqual("((7 + ((3 - 2) x 5)) ÷ 6)");
});