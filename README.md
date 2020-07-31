# JSPrac-movie

### 预定电影票

一.实现思路

1.实现选中座位变色

座位点击事件监听+`e.target.classList.contains()  //e.target 选中div e.target.classList.contains("类名") 按类名选中div` + 变色 `e.target.classList.toggle("类名”); //toggle 选中和不选中两种变化` 

2.实现 更新座位数和总票价

querySelector获取选中的座位 + 获取选中座位的长度 .length + 计算总票价 +把长度（个数）内嵌回innertext 个数和票价标签

3.实现 下拉框改变时票价也要做出相应的改变

下拉框改变事件监听 + 获取改变的值 + 更新

3.实现数组索引值的本地存储

- 座位索引的本地存储

    如何获得座位的索引？

    展开运算符+map()

    首先已经有已选座位的数组，然后你用展开运算符复制该数组，再用map遍历数组（为什么用map遍历数组而不是foreach，因为map遍历返回的是新数组，而foreach遍历返回的是一个一个的元素），得到一个新数组，复制新数组获取每一项的索引值，索引值又会被map保存成数组。这样你就获得了一个座位索引值的数组。

    `localstorage.setItem("key:给后面的value起个名字","value:座位索引值"); 由于value是字符串，所以还要用 JSON.stringify() 把数组转换成字符串`

- 电影名称索引的本地存储

    由于电影名称采用的是下拉框，所以只需要对目标元素进行 .selectedIndex 就能获取电影名称的索引值

- 电影票价的本地存储

    由于电影票价采用的是下拉框，所以只需要对目标元素进行 .value 就能获取其索引值

4.实现 数据刷新后不丢失-给本地存储的数据设置样式

- 座位索引的样式

    目标:你要找到已选的座位，并给它加上样式。

    怎么找到已选的座位？

    - 从本地存储中取出已选座位索引的数组，遍历数组并给每一项加上”已选“的类名。（需要一些判断条件，保证不出bug）

        forEach遍历已选座位，提前保证已选座位不为空，并且已选座位个数比0大，这说明人家是选座位了

        满足前提条件后，判断每个座位的索引值是否 >-1 满足条件的座位给它加上类名”slecected“

- 电影名称保持不变

    从本地存储中取出电影名称的索引值，重写已选电影的索引值。

- 电影票价保持不变

    更新一下票价即可。

二.关键知识点

- 常见的盒模型

    标准盒模型：width是内容区域的宽度，如果加padding，margin盒子的实际宽度会增加。向外增加

    怪异盒模型：width是盒子实际的宽度。padding，margin不影响盒子宽度

- 弹性布局：flex

    ```
    display: flex; /*盒子里的div水平排列*/
    flex-direction: column; /*div排列方式：竖直or水平*/
    align-items: center; /*文字居中*/
    justify-content: center; /*内容居中*/
    height: 100vh; /*盒子高度*/
    margin: 0; /*清除margin*/
    ```

- 选择器：nth-of-type()

    有一组兄弟（类相同），在这组兄弟中，选择第几个。

    比如: `.seat:nth-of-type(2) seat这组兄弟中，选择第二个`

- 选择器：not()

    反向选择

    比如 `.seat:not(.occupied):hover` 

- `box-shadow:0 15px 10px rgba(255,255,255,0.7) x轴 y轴 模糊程度 颜色`
- string转int 隐式转换： `const ticketPrice = +movieSelect.value;`
- 展开运算符：复制数组 [...arr]

    ```jsx
    const arr=[1,2,3];
    const arr2=[...arr,4,5]
    console.log(arr2);

    >Array[1,2,3,4,5]
    ```

- map（）:和foreach很像，但map返回的却是新数组，可以对新数组的进行整体的操作

    ```jsx
    foreach:
    const arr=[1,2,3];
    const arr2=[...arr,4,5]

    arr2.foreach(function(item){
    	console.log(item);
    })

    >1
    >2
    >3
    >4
    >5
    ```

    ```jsx
    map：
    const arr=[1,2,3];
    const arr2=[...arr,4,5]

    const arr3 = arr2.map(function(item){
    	return item;
    })
    console.log(arr3);

    >Array[1,2,3,4,5]

    const arr=[1,2,3];
    const arr2=[...arr,4,5]

    const arr3 = arr2.map(function(item){
    	return item * 2;
    })
    console.log(arr3);

    >Array[2,4,6,8,10]
    ```

- localstorage

    localstorage和sessionstorage的区别：

    locailstorage:永久存储

    sessionstorage:关闭页面消失

    ```jsx
    localstorage.setItem("key","string:value");
    localstorage.getItem("key/value");
    ```

- JSON.stringify() -数组转字符串 JSON.parse() -字符串转数组
- CSS：下拉框<select> 里面的内容项 <option>
