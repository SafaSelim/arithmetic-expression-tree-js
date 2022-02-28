export type operatorType = "+" | "-" | "x" | "÷" | "";

export abstract class TreeNode {
    operator: operatorType;
    value: number | null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        operator: operatorType, 
        value: number | null, 
        left:  TreeNode | null, 
        right:  TreeNode | null) {  
            this.operator = operator;
            this.value = value;
            this.left = left;
            this.right = right;
        }    

    abstract toString(): string;

    abstract result(): number;
}