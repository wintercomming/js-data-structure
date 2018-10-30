//使用原生的js实现列表的功能
//列表是一组有序的数据


//初始化构造函数
function mynewList(){
this.listSize = 0;  //初始化元素个数为0
this.pos = 0; //初始化位置为0
this.dataStore=[]; //初始化空数组来保存列表元素
this.clear= clear; //清除列表
this.find = find; //找到元素
this.toString =toString; //显示列表
this.insert=insert; //向列表某个位置添加一个元素
this.append =append;//在列表的末尾添加新元素
this.remove =remove;//从列表中删除元素
this.front = front;//将列表的当前元素移动到第一个元素
this.end = end;//将列表的当前元素移动到最后一个元素
this.prev =prev;//将当前位置前移一位
this.next = next;//将当前位置后移一位
this.currPos =currPos;//返回列表的当前位置
this.moveTo =moveTo;//将当前位置移动到指定位置
this.contains= contains;//判断值是否在列表中
this.getParameter=getParameter;
this.length = length;
}


//append方法的实现
function append(parameter){
    this.dataStore[this.listSize++] = parameter;
}

//find方法的实现
function find(parameter){
for(let i =0;i<this.dataStore.length;i++){
    if(this.dataStore[i]==parameter){
        return i;
    }
}
}

//remove方法的实现
function remove(parameter){
    var findParam = this.find(parameter);
if(findParam>-1){
    this.dataStore.splice(findParam,1);
    return true;
}else{
    return false;
}
}

//length方法的实现
function length(){
return this.listSize;
}

//toString方法的实现
function tostring(){
    return this.dataStore.join("/n");
}

//insert方法的实现
function insert(parameter,index){
    if(index>-1){
this.dataStore.splice(index,0,parameter);
return true;
}
}

//clear方法的实现
function clear(){
    delete this.dataStore;
    this.dataStore=[];
    this.pos =this.listSize=0;
};

//测试
/* var fruits = new mynewList();
fruits.clear();
console.log( fruits.toString() ); */

//front方法的实现
function front(){
    this.pos=0;
}
//end方法的实现
function end(){
    this.pos=this.listSize -1;
}
//prev方法的实现
function prev(){
if(this.pos>0){
    this.pos--;
}else{
    console.log("你当前已经在首位");
}
}
//next方法的实现
function next(){
    if(this.pos>0){
        this.pos++;
    }else{
        console.log("你当前已经在末位");
    }

}
//moveTo方法的实现
function moveTo(position){
if(position<0||position>(this.listSize-1)){
console.log("请输入正确位置")
}else{
    this.pos=position;
}

}
//currPos方法的实现
function currPos(){
    return this.pos;
}
//getParameter
function getParameter(){
    return this.dataStore[this.pos];
}
//contains方法的实现
function contains(parameter){
    if(this.dataStore.indexOf(parameter)>-1){
        return true;
    }else{
        return false;
    }
}


var fruits = new mynewList();
//添加三个元素
fruits.append('Apple');
fruits.append('Grape');
fruits.append('Banana');

//打印列表
console.log( fruits.toString() )      // ["Apple", "Grape", "Banana"]
//查看列表长度
console.log( fruits.length() )        // 3
//查找 Banana 的位置
console.log( fruits.find('Banana') )  // 2
//删除 Grape 
fruits.remove('Grape');
console.log( fruits.toString() )      // ["Apple", "Banana"]
fruits.append('Pear');
fruits.append('Orange');
fruits.append('Strawberry');
console.log( fruits.toString() );    // ["Apple", "Grape", "Banana", "Pear", "Orange", "Strawberry"]

//我们先看当前的位置和元素
console.log( fruits.currPos() );     // 0
console.log( fruits.getParameter() );  // Apple

//我们尝试改变一下
fruits.moveTo( 2 );
fruits.next();
console.log( fruits.currPos() );     // 3
console.log( fruits.getParameter() );  // Pear
fruits.end();
fruits.prev();
console.log( fruits.currPos() );     // 4
console.log( fruits.getParameter() );  // Orange

