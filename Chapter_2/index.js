console.log(Number.isNaN(Number(null)), Number(null), Number(undefined), Number(NaN), Number(true))

// Задача 1. Построение треугольника в цикле

for(let current = "#"; current.length <= 7; current +="#") {
    console.log(current)
}

// Задача 2. FizzBuzz

for (let num = 1; num <= 100; num += 1) {
    switch (0) {
        case num%3 + num%5:
            console.log("FizzBuzz")
            break
        case num%3:
            console.log("Fizz")
            break
        case num%5:
            console.log("Buzz")
            break
        default:
            console.log(num)
    }
}

// Задача 3. Шахматная доска

let size = 10;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);