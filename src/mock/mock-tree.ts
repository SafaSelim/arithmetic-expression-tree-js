import { Tree } from "../tree";

export const tree: Tree = new Tree(
    "÷",
    null,
    new Tree(
      "+",
      null,
      new Tree("", 7, null, null),
      new Tree(
        "x",
        null,
        new Tree("-", null, new Tree("", 3, null, null), new Tree("", 2, null, null)),
        new Tree("", 5, null, null)
      )
    ),
    new Tree("", 6, null, null)
  );
  