// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
console.log(name.toUpperCase());

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
function switchToUpperCase(str) {
  let arr, newArr = [];
  arr = str.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].substring(1));
  }
  return newArr.join(" ");
}
console.log(switchToUpperCase(sentence));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
console.log(money.substr(1,2));
console.log(money.substring(1));
