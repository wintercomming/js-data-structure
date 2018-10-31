//栈，又叫堆栈，是和列表类似的一种数据结构，但是却更高效，因为栈内的元素只能通过列表的一端访问，称为栈顶，
//数据只能在栈顶添加或删除，遵循 先入后出(LIFO，last-in-first-out) 的原则，普遍运用于计算机的方方面面。


//使用原生js实现栈(strck)的功能
function strck(){
    this.dataStore=[];//初始化栈为空
    this.top=0;//记录栈顶位置
    this.pop=pop;//出栈
    this.push=push;//入栈
    this.peek =peek;//查看栈顶元素
    this.length = length;//查看栈内元素总数
    this.clear = clear; //清空栈
}
function push(parameter){
    this.dataStore[top++]=parameter;
}
function pop(){
return this.dataStore[--this.top];
}
function peek(){
    if(this.top>0){
        return dataStore[this.top];
    }else{
        console.log("check mistaken");
    }
}
function length(){
    if(this.top>-1){
        return this.top;
    }
}
function clear(){
    delete this.dataStore;
    this.dataStore=[];
    this.top=0;
}