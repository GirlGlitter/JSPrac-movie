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
- 电影名称索引的本地存储
- 电影票价的本地存储

4.实现 数据刷新后不丢失-给本地存储的数据设置样式

- 座位索引的样式
- 电影名称保持不变

    从本地存储中取出电影名称的索引值，重写已选电影的索引值。

- 电影票价保持不变

    更新一下票价即可。

二.关键知识点

- 常见的盒模型
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
- 选择器：not()
- `box-shadow:0 15px 10px rgba(255,255,255,0.7) x轴 y轴 模糊程度 颜色`
- string转int 隐式转换： `const ticketPrice = +movieSelect.value;`
- 展开运算符：复制数组 [...arr]
- map（）:和foreach很像，但map返回的却是新数组，可以对新数组的进行整体的操作
- localstorage
- JSON.stringify() -数组转字符串 JSON.parse() -字符串转数组
- CSS：下拉框<select> 里面的内容项 <option>
