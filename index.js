// 1
let array = [5, 6, 7];
array[1] = 10;
console.log(array); 

// 2
let array2 = ["перший рядок", "другий рядок", "третій рядок"];
array2.push("четвертий рядок");
console.log(array2);

// 3
const numbers = [4, 6, 2, 10, 9];

let result = 0;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
    result = result + element;
}

console.log(result);

// 4
let array4 = [1, 3, 5, 2, 4];

for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
}

// 5
let array5 = ["ряд", "рядок", "рядочок", "рядочочок", "рядочочочок"];

for (let i = 0; i < array5.length; i++) {
    if (array5[i].length > 5) {
        console.log(array5[i]);
    }
}

// 6
let array6 = [3, 67, 12, 45, 78, 23, 56, 89, 34, 10];

let max = array6[0];
for (let i = 1; i < array6.length; i++) {
    if (array6[i] > max) {
        max = array6[i];
    }
}

console.log(max);

// 7
let array7 = [3, 67, 12, 45, 78, 23, 56, 89, 34, 10];

for (let i = 0; i < array7.length; i++) {
    if (array7[i] % 2 === 0) {
        console.log(array7[i]);
    }
}