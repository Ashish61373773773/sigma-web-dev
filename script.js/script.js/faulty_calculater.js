
let a = 17;
let b = 5;
let op = "+";   


let result;

if (op === "+") {
    result = a + b;
}
else if (op === "-") {
    result = a - b;
}
else if (op === "*") {
    result = a * b;
}
else if (op === "/") {
    if (b === 0) {
        console.log("Cannot divide by zero");
        process.exit();
    }
    result = a / b;
} 
else {
    console.log("Invalid operator!");
    process.exit();
}


let random = Math.random(); // 0–1

if (random < 0.1) {
    result = result + 5;
    console.log("Faulty Result:", result);
} else {
    console.log("Correct Result:", result);
}
