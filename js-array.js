/**
 * main 函数，程序执行入口
 */
function main() {
    // tryArray();
    // arrayMethods();
    // arraySorting();
    arrayIterating();
}

main();


/**
 * JavaScript 数组
 */
function tryArray() {
    // 出于简洁、可读性和执行速度的考虑，请使用第一种方法（数组文本方法）。
    let cars = ["Saab", "Volvo", "BMW", 123];  // 数组是一种特殊类型的对象。

    let cars2 = new Array("Saab", "Volvo", "BMW", "Tesla");

    for (let car of cars) {
        console.log(car);
    }

    // sort()
    cars.sort()

    // 遍历数组的最安全方法是使用 "for" 循环
    for (let i = 0; i < cars2.length; i++) {  // length
        console.log(cars2[i]);
    }

    // 访问最后一个元素
    console.log(cars[cars.length - 1])

    // Array.forEach()
    function myFun(x) {
        console.log(x);
    }
    cars.forEach(myFun);  // forEach() 参数传函数名

    // 向数组添加新元素的最佳方法是使用 push() 方法
    cars.push("BYD");
    console.log(cars[cars.length - 1]);

    // 也可以使用 length 属性向数组添加新元素
    cars[cars.length] = "Ford";
    console.log(cars[cars.length - 1]);

    // 警告！添加最高索引的元素可在数组中创建未定义的“洞”
    cars[10] = "test";
    console.log(cars);

    // 如何识别数组
    console.log(typeof cars);  // 识别不了，因为数组是一种特殊的对象
    console.log(Array.isArray(cars));  // 识别得了。

}


/**
 * 
 */
function arrayMethods() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];

    // JavaScript 方法 toString() 把数组转换为数组值（逗号分隔）的字符串。
    console.log(fruits.toString());

    // join() 方法也可将所有数组元素结合为一个字符串。
    console.log(fruits.join('*'));

    // pop() 方法返回“被弹出”的值：
    console.log(fruits.pop());
    console.log(fruits);

    // push() 方法（在数组结尾处）向数组添加一个新的元素
    // push() 方法返回新数组的长度
    let newArrayLength = fruits.push('Mongo2');
    console.log(newArrayLength);
    console.log(fruits);

    // 位移与弹出等同，但处理首个元素而不是最后一个。
    // shift() 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。
    let firstFruit = fruits.shift();
    console.log(firstFruit);
    console.log(fruits);

    // unshift() 方法（在开头）向数组添加新元素，并“反向位移”旧元素
    let newFirstFruit = 'cherry';
    let newArrayLength2 = fruits.unshift(newFirstFruit);
    console.log(newArrayLength2);
    console.log(fruits);

    // length 属性提供了向数组追加新元素的简易方法
    fruits[fruits.length] = 'Kiwi';
    console.log(fruits);

    // delete 删除元素
    // 使用 delete 会在数组留下未定义的空洞。请使用 pop() 或 shift() 取而代之。
    delete fruits[0];  // 把 fruits 中的首个元素改为 undefined
    for (let i of fruits) {
        console.log(i);
    }

    // 拼接数组，splice() 方法可用于向数组添加新项
    // 第一个参数（2）定义了应添加新元素的位置（拼接）。
    // 第二个参数（0）定义应删除多少元素。
    // 其余参数（“Lemon”，“litchi”）定义要添加的新元素。
    fruits.splice(2, 0, 'Lemon', 'litchi');
    console.log(fruits);

    // 使用 splice() 来删除元素
    fruits.splice(2, 1);  // 删除下标为2的元素
    fruits.splice(0, 1);  // 删除下标为0的元素
    console.log(fruits);

    // 合并（连接）数组
    // concat() 方法通过合并（连接）现有数组来创建一个新数组
    // concat() 方法不会更改现有数组。它总是返回一个新数组。
    let myGirls = ["Cecilie", "Lone"];
    let myBoys = ["Emil", "Tobias", "Linus"];
    let myChildren = myGirls.concat(myBoys);
    console.log(myChildren);

    // concat() 方法可以使用任意数量的数组参数
    // 合并三个数组
    let arr1 = ["Cecilie", "Lone"];
    let arr2 = ["Emil", "Tobias", "Linus"];
    let arr3 = ["Robin", "Morgan"];
    let allChildren = arr1.concat(arr2, arr3);   // 将arr1、arr2 与 arr3 连接在一起
    console.log(allChildren);

    // concat() 方法也可以将值作为参数
    let child = ["Cecilie", "Lone"];
    let children = arr1.concat(["Emil", "Tobias", "Linus"]); 
    console.log(children);

    // slice() 方法用数组的某个片段切出新数组。
    // slice() 方法创建新数组。它不会从源数组中删除任何元素。
    console.log(fruits);
    console.log(fruits.slice(2));
    console.log(fruits.slice(1, 4));  // 前闭后开，和pythone切片一样。

    // 自动 toString()
    // 如果需要原始值，则 JavaScript 会自动把数组转换为字符串。下面两个例子将产生相同的结果：
    // document.getElementById("demo").innerHTML = fruits.toString(); 
    // document.getElementById("demo").innerHTML = fruits; 
}


/**
 * JavaScript 数组排序
 */
function arraySorting() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();  // 对 fruits 中的元素进行排序
    console.log(fruits);

    // reverse() 方法反转数组中的元素。
    fruits.reverse()
    console.log(fruits);

    // 数字排序
    // 默认地，sort() 函数按照字符串顺序对值进行排序。
    // 该函数很适合字符串（"Apple" 会排在 "Banana" 之前）。
    // 不过，如果数字按照字符串来排序，则 "25" 大于 "100"，因为 "2" 大于 "1"。
    // 正因如此，sort() 方法在对数值排序时会产生不正确的结果。
    // 我们通过一个比值函数来修正此问题
    let points1 = [40, 100, 1, 5, 25, 10];
    points1.sort();
    console.log(points1);

    // 当 sort() 函数比较两个值时，会将值发送到比较函数，并根据所返回的值（负、零或正值）对这些值进行排序。
    let points2 = [40, 100, 1, 5, 25, 10];
    points2.sort(function(a, b){return a - b}); 
    console.log(points2);

    // 以随机顺序排序数组
    let points3 = [40, 100, 1, 5, 25, 10];
    points3.sort(function(a, b){return 0.5 - Math.random()}); 
    console.log(points3);

    // 查找最高（或最低）的数组值
    // JavaScript 不提供查找数组中最大或最小数组值的内建函数。
    // 不过，在对数组进行排序之后，您能够使用索引来获得最高或最低值。

    // 使用 Math.max.apply 来查找数组中的最高值
    console.log(Math.max.apply(null, points1));
    // 第一个参数（null）无关紧要。在本例中未使用它。下面会例子会给出相同的结果
    console.log(Math.max.apply(Math, points1));
    console.log(Math.max.apply(3, points1));
    console.log(Math.max.apply(' ', points1));
    // 在 JavaScript 严格模式下，如果 apply() 方法的第一个参数不是对象，则它将成为被调用函数的所有者（对象）。在“非严格”模式下，它成为全局对象。

    console.log(Math.min.apply(null, points1));

}


/**
 * JavaScript 数组迭代
 */
function arrayIterating() {
    // forEach() 方法为每个数组元素调用一次函数（回调函数）
    let txt = '';
    let numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFun);

    function myFun(value, index, array) {
        txt = txt + value + "<br>";
    }

    console.log(txt);
}