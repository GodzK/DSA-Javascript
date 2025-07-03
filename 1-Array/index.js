class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(...item){
       this.data[this.length] = item
       // ถ้าไม่เพิ่ม มันจะไป replace ตัวเก่า
       this.length++
    }
    get(index){
        return this.data[index]
    }
    delete(index){
        delete this.data[index];
        this.length--;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return `${lastItem} has been delete`;
    }

}

const mynewArray = new MyArray()
mynewArray.push("apple","banana")
mynewArray.push("grape","orange")
mynewArray.push("mango")
// mynewArray.delete(0);
mynewArray.pop()
console.log(mynewArray);