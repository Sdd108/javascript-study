/**
 * main 函数，程序执行入口
 */
function main() {
    // tryJsNumber();
    // tryBigInt();
    // tryNumberMethods();
    // convertNumbers();
    // numberObjectMethods();
    numberProperty();
}

main();


/**
 * JavaScript 只有一种数值类型。
 * 书写数值时带不带小数点均可。
 * JavaScript 数值始终是 64 位的浮点数
 */
function tryJsNumber() {
    let x = 1;
    let y = 3.14;

    // 超大或超小的数可通过科学计数法来写
    let u = 12e5;
    let v = 123e-4;
    console.log(u);
    console.log(v);

    // JavaScript 整数最多只能精确到 15 位
    // 最大为 9007199254740991（253-1）
    // 最小为 -9007199254740991（-(253-1)）
    // 超出此范围的整数值会失去精度。
    let n1 = 999999999999999;  // 999999999999999
    let n2 = 9999999999999999;  // 10000000000000000
    console.log(n1);
    console.log(n2);

    // 小数的最大数是 17 位，但是浮点的算数并不总是 100% 精准
    let d = 0.1 + 0.2;  // 得到 0.30000000000000004
    console.log(d);

    // 使用乘除法有助于解决上面的问题
    let d1 = (0.2 * 10 + 0.1 * 10) / 10; 
    console.log(d1);
}


/**
 * JavaScript BigInt 变量用于存储太大而无法用普通 JavaScript 数字表示的大整数值。
 */
function tryBigInt() {
    // 如需创建 BigInt，可以在整数末尾添加 n，或调用 BigInt() 函数
    let x = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345);
    console.log(x);
    console.log(y);
    console.log(x / y);
    console.log(x * y);
}


// JavaScript 数字方法

/**
 * toString()	将数字作为字符串返回。
 * toExponential()	返回以指数表示法书写的数字。
 * toFixed()	返回带小数位数的数字。
 * toPrecision()	返回指定长度的数字。
 * ValueOf()	以数字形式返回数字。
 */
function tryNumberMethods() {
    // toString() 方法将数字作为字符串返回。
    let x = 123;
    let y = x.toString();
    console.log(x);
    console.log(typeof x);
    console.log(y);
    console.log(typeof y);

    // toExponential() 返回字符串，其中的数字四舍五入并使用指数表示法书写。
    console.log('*******');
    let n1 = 9.656;
    console.log(n1.toExponential(2));
    console.log(n1.toExponential(4));
    console.log(n1.toExponential(6));

    // toFixed() 返回一个**字符串**，其中的数字带有指定位数的小数部分。
    console.log('*******');
    console.log(n1.toFixed(0));  // 返回10，四舍五入
    console.log(n1.toFixed(2));
    console.log(n1.toFixed(4));
    console.log(n1.toFixed(6));

    // toPrecision() 返回一个字符串，其中包含指定长度的数字
    console.log('*******');
    console.log(n1.toPrecision());  // 默认原长度
    console.log(n1.toPrecision(2));  // 返回 9.7 四舍五入
    console.log(n1.toPrecision(4));
    console.log(n1.toPrecision(6));

    // 在 JavaScript 中，数字可以是原始值 (typeof = number) 或对象 (typeof = object)。
    // valueOf() 方法在 JavaScript 内部用于将 Number 对象转换为原始值。
    // 提示：所有 JavaScript 数据类型都有 valueOf() 和 toString() 方法。
    console.log('*******');
    console.log(x.valueOf());
    let z = Number(1231);
    console.log(z.valueOf());
}


// 将变量转换为数字

/**
 * Number()	返回从其参数转换而来的数字。
 * parseFloat()	解析其参数并返回浮点数。
 * parseInt()	解析其参数并返回整数。
 */
function convertNumbers() {
    // Number() 方法可用于将 JavaScript 变量转换为数字
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number("10"));
    console.log(Number("  10"));
    console.log(Number("10  "));
    console.log(Number(" 10  "));
    console.log(Number("10.33"));
    console.log(Number("10,33"));
    console.log(Number("10 33"));
    console.log(Number("Bill"));

    // Date() 方法返回自 1970 年 1 月 1 日以来的毫秒数
    console.log(Number(new Date('1970-01-01')));
    console.log(Number(new Date('1970-01-02')));
    console.log(Number(new Date('2017-09-30')));

    // parseInt() 解析字符串并返回整数。允许有空格。仅返回第一个数字
    console.log('*******');
    console.log(parseInt("-10"));
    console.log(parseInt("-10.33"));
    console.log(parseInt("10"));
    console.log(parseInt("10.33"));
    console.log(parseInt("10 20 30"));
    console.log(parseInt("10 years"));
    console.log(parseInt("years 10"));

    // parseFloat() 解析字符串并返回数字。允许有空格。仅返回第一个数字
    console.log('*******');
    console.log(parseFloat("10"));
    console.log(parseFloat("10.33"));
    console.log(parseFloat("10 20 30"));
    console.log(parseFloat("10 years"));
    console.log(parseFloat("years 10"));
}


/**
 * Number 对象方法
 * Number.isInteger()	如果参数是整数则返回 true。
 * Number.isSafeInteger()	如果参数是安全整数，则返回 true。
 * Number.parseFloat()	将字符串转换为数字。
 * Number.parseInt()	将字符串转换为整数。
 * 上面的数字方法属于 JavaScript Number 对象。这些方法只能像 Number.isInteger() 一样访问。
 */
function numberObjectMethods() {
    let x = 123;
    // console.log(x.isInteger())  // 将报错
    console.log(Number.isInteger(123));
    console.log(Number.isInteger(1234123412341234132413));
    console.log(Number.isSafeInteger(1234123412341234132413));

    // Number.parseFloat() 方法
    // Number.parseInt() 和 Number.parseFloat() 这两个方法与全局方法 parseInt() 和 parseFloat() 是相同的。
    // 其目的在于全局方法的模块化（以便更容易在浏览器外部使用相同的 JavaScript 代码）。
    console.log(Number.parseFloat(" 10.33  "));
}


// JavaScript 数字属性

function numberProperty() {
    let x = Number.EPSILON;
    console.log(x);

    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.POSITIVE_INFINITY);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.NaN);

}