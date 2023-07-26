/**
 * main 函数，程序执行入口
 */
function main() {
    let s1 = 'This is a string.';
    let s2 = '这是一个中文字符串。';

    // tryLength(s1, s2);
    // tryIndexOf(s1);
    // tryLastIndexOf(s1);
    // trySearch(s1);
    // tryRegularExpression();
    trySlice(s1);
}

main();

/**
 * 字符串长度 length
 * @param {string} s1 
 * @param {string} s2 
 */
function tryLength(s1, s2) {
    console.log("The length of s1: " + s1.length);
    console.log("The length of s2: " + s2.length);
}

/**
 * 查找字符串中的字符串 indexOf()，方法接受作为检索起始位置的第二个参数
 * @param {string} s 
 */
function tryIndexOf(s) {
    console.log('The index of "i": ' + s.indexOf('i'));
    console.log('The index of "i", starting from index 2: ' + s.indexOf('i', 2));  // 包含起始位置
    console.log('The index of "i", starting from index 3: ' + s.indexOf('i', 3));
    console.log('The index of "str": ' + s.indexOf('str'));
    console.log('The index of "sruta": ' + s.indexOf('sruta'));
}

/**
 * lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引，方法接受作为检索起始位置的第二个参数
 * @param {string} str
 */
function tryLastIndexOf(str) {
    console.log('The lastIndexOf "i": ' + str.lastIndexOf("i"));
    // 包含起始位置，从起始位置往前找
    console.log('The lastIndexOf "i", starting from index 13: ' + str.lastIndexOf("i", 13));
    console.log('The lastIndexOf "i", starting from index 12: ' + str.lastIndexOf("i", 12));
    console.log('The lastIndexOf "g": ' + str.lastIndexOf("g"));
    console.log('The lastIndexOf "a": ' + str.lastIndexOf("a"));
}

/**
 * 检索字符串中的字符串 search()
 * search() 与 index() 的区别：
 * search() 方法无法设置第二个开始位置参数。
 * indexOf() 方法无法设置更强大的搜索值（正则表达式）
 * @param {string} str 
 */
function trySearch(str) {
    console.log('The index of "i": ' + str.search('i'));
    console.log('The index of "str": ' + str.search('str'));
    console.log('The index of "sruta": ' + str.search('sruta'));
    console.log('The index of "S*g": ' + str.search(/S*g/));
    console.log('The index of "S*g": ' + str.search(/S*g/i));
    console.log('The index of "s*g": ' + str.search(/s*g/g));
}

/**
 * 正则表达式
 */
function tryRegularExpression() {
    let patt = /sruta/i;
    let str = "Hi, my name's Sruta";

    console.log(str.search(patt));
    s2 = str.replace(patt, 'Zhipeng');
    console.log(s2);

    let patt2 = /name/i;
    console.log(patt2.test(str));
    console.log(/a/.exec(str));
    console.log(/a/.exec(str)[0]);
    console.log(/name/.exec(str)[0]);
}

/**
 * slice() 切片，提取字符串的某个部分并在新字符串中返回被提取的部分
 * @param {string} s 
 */
function trySlice(s) {
    console.log(s);
    console.log("The length of s: " + s.length);
    console.log(s.lastIndexOf('s'));
    console.log(s.slice(10, 11));  // 和python一样，区间前闭后开
    console.log(s.slice(10, 17));  // 取到最后一位
    console.log(s.slice(10, 1000));  // 取到最后一位，多出来的不管
    console.log(s.slice(2));  // 如果省略第二个参数，则该方法将裁剪字符串的剩余部分
    console.log(s.slice(2, -4));
    console.log(s.slice(2, -1));  // 前闭后开
    console.log(s.slice(-7));
}

/**
 * substr() 类似于 slice()，不同之处在于第二个参数规定被提取部分的长度。
 * @param {string} s 
 */
function trySubstr(s) {
    
}