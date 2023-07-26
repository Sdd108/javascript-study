
function add(a, b) {
    return a + b;
}

function main() {
    let sruta = {
        name: "Zhipeng Liu",
        age: 31,
        hobbies: ["reading", "writing", "programming", "photography", "videography", "hiking"],
        job: "JavaScript Development Engineer",
        greeting: function () {
            return "Hello, my name is " + this.name + ". I am " + this.age + " years old.";
        }
    }

    document.getElementById('demo').innerHTML = sruta.greeting();
}

function myFunction() {
    main();
    document.getElementById("demo1").innerHTML = "Sruta";
}



const RESET_NUMBER = 0;

let count = RESET_NUMBER;
let round_count = RESET_NUMBER;
function counting() {

    if (count < 10) {
        count++;
    } else {
        count = RESET_NUMBER + 1;
        round_count++;
    }

    document.getElementById("current-round").innerHTML = "圈数：" + round_count;
    document.getElementById("counting").innerHTML = count;
}

function resetZero() {
    count = RESET_NUMBER;
    round_count = RESET_NUMBER;
    document.getElementById("counting").innerHTML = "开始计数";
    document.getElementById("current-round").innerHTML = "圈数：" + round_count;
}