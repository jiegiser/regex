// 两个//代表正则里面的内容，
// 1. /content/g     g代表全局匹配
// 2. /content/i     i代表忽略匹配的大小写
// 3. /{              {}也是需要转义的
// 4. \s              匹配一个空格
// 5. \s*             匹配多个空格   *代表0-n。。这里代表前面的表达式中有0-n个
// 6. \s*+             代表1-n个空格

// javascript 创建一个正则表达式

// 使用正则表达式字面量提供正则表达式的编译
const regex1=/ab+c/;
const regex2=/^[a-zA-Z]+[0-9]*\W_$/gi;

// 使用RegExp对象的构造函数
let regex=new RegExp("/\$jiegiser\$/","gi");

let regex3=/\$jiegiser\$/;

let str="hello $jiegiser$";
console.log(str.replace(regex3,"jieouba"));

