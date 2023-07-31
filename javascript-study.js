main();

function main() {
    // test();
    // testConcat();
    // tryObject();
    // tryNullUndefined();
    // testNumberInitValue();
    tryStringMethods();
}

function test() {
    console.log('hello world');
}

function testConcat() {
    let x = 7 + 8;
    console.log(x);
    console.log("The type of x is " + typeof (x) + ".");

    let y = 7 + '8';
    console.log(y);
    console.log("The type of y is " + typeof (y) + ".");

    let z = 'hello' + 8;
    console.log(z);
    console.log("The type of z is " + typeof (z) + ".");
}

function tryObject() {
    let sruta = {
        name: "Zhipeng Liu",
        age: 31,
        hobbies: ["reading", "writing", "programming", "photography", "videography", "hiking"],
        job: "JavaScript Development Engineer",
        greeting: function() {
            return "Hello, my name is " + this.name + ". I am " + this.age + "years old.";
        }
    }

    console.log("The type of sruta is " + typeof sruta);
    console.log("Hello, my name is " + sruta.name + ". I am " + sruta.age + " years old.");
    console.log("I am now work as a " + sruta['job']);
    console.log("My hobbies are as follows: ")
    for (let i of sruta['hobbies']) {
        console.log(i);
    }

    let camera = {
        "name": "Sony A7C",
        "production year": 2023,
        "owner": sruta
    }

    // console.log(camera);
    console.log(camera.name);
    console.log(camera.owner.name);
    console.log(camera['production year']);
    console.log('name' in camera);

    for (let i of camera.owner.hobbies) {  // 遍历
        console.log(i);
    }

    console.log("*************");
    console.log(sruta.greeting());
}

function tryNullUndefined() {
    console.log("The type of null: " + typeof null);
    console.log("The type of undefined: " + typeof undefined);
    console.log("null === undefined: " + (null === undefined));
    console.log("null == undefined: " + (null == undefined));

    let array = [1, 2, 3, 4];
    console.log("The type of [1, 2, 3, 4]: " + typeof array);

    let obj = {
        name: "Sruta",
        age: 31
    }
    console.log("The type of {name: 'Sruta', age: 31}: " + typeof obj);
}

function testNumberInitValue() {
    let number;
    for (let i = 0; i < 10; i++) {
        console.log(number++);
    }
}

function tryStringMethods() {
    let string = "test";
    let stringZH = "测试";

    console.log("The length of " + string +": " + string.length);
    console.log("The length of " + stringZH +": " + stringZH.length);

    let str = "中国的全称是中华人民共和国";
    console.log(str.indexOf("国"));
    console.log(str.lastIndexOf("国"));
}