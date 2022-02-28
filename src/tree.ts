import { TreeNode } from "./node";

export class Tree extends TreeNode {

    result(): number {
        if(this.operator == "") return this.value;
        else if(this.operator == "+") return this.left.result() + this.right.result();
        else if(this.operator == "-") return this.left.result() - this.right.result();
        else if(this.operator == "x") return this.left.result() * this.right.result();
        else if(this.operator == "÷") return this.left.result() / this.right.result();    
    }
    
    toString(): string {
        if(this.operator == "") return this.value.toString();
        return `(${this.left.toString()} ${this.operator} ${this.right.toString()})`;
    };
}