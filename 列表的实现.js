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
