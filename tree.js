const assert = require("assert");

const Node = (operator, value, left, right) => {

  const result = function () {
      if(this.operator == "") return value;
      else if(this.operator == "+") return left.result() + right.result();
      else if(this.operator == "-") return left.result() - right.result();
      else if(this.operator == "x") return left.result() * right.result();
      else if(this.operator == "÷") return left.result() / right.result();
  };

  const toString = function () {
    if(this.operator == "") return value.toString();
    return `(${left.toString()} ${this.operator} ${right.toString()})`;
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};

const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
console.log(tree.toString());
console.log(tree.result());
assert.strictEqual(2, tree.result());