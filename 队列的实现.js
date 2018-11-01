//队列，它也是一种特殊的列表，它与栈不同的是，队列只能在队尾插入元素，在队首删除元素，就像我们平时排队买票一样~
//如何区分队列和栈(为了方便区分队列与栈，在学习过程中我将栈想象成为军训时待翻阅的人墙，后入先出，而队列则与排队购票时一样，先入先出);
//用js实现队列
function Queue(){
    this.dataStore=[];
    this.enqueue=enqueue;//入队
    this.dequeue=dequeue;//出队
    this.front=front;//查看队首元素
    this.back=back;//查看队尾元素
    this.toString=toString;//显示队列所有元素
    this.clear=clear;//清除当前队列
    this.empty=empty;//判断当前队列是否为空
}
function enqueue(parameter){
this.dataStore.push(parameter);
}
function dequeue(){
if(this.empty()){
    return '此队列为空'
}else{
    this.dataStore.splice(dataStore.length-1,1);
}
}
function front(){
    console.log(dataStore[0]);
}
function back(){
    var i =dataStore.length;
    console.log(dataStore[i]);
}
function toString(){
    console.log(dataStore.join(" "));
}
function clear(){
    delete this.dataStore;
    this.dataStore=[];
}
function empty(){
    if(this.dataStore.length==0){
        return true;
    }else{
        return false;
    }
}