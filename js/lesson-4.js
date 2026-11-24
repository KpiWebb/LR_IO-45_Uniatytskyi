/* ==========================================================
   ЛР №4 — Основи JavaScript
   Студент: Унятицький Антон Дмитрович, №23 у списку
   Непарна колонка (завд. 1–6, 8), варіант 3 (завд. 7, 9)

   Кожне завдання оформлено функцією taskN(), яку запускає
   відповідна кнопка в index.html (дивись кінець файлу).
   ========================================================== */


/* ---------- ЗАВДАННЯ 1 ----------
Збережіть введене значення (метод prompt()) у змінну value.
Вивести це значення у Console, використовуючи шаблонний рядок.
Перевірити: введене значення від'ємне? Додатнє? Дорівнює нулю?
Відповідь вивести за допомогою alert().
Наприклад: при введенні 80 виведе «Число додатнє».
Підказка: при введенні значень не забудьте зробити ряд перевірок.
*/

function task1() {
  const value = prompt("Введіть число:");

  if (value === null || value.trim() === "") {
    // Cancel або порожній рядок
    alert("Ви нічого не ввели");
  } else if (Number.isNaN(Number(value))) {
    // Ввели текст, а не число
    alert("Це не число");
  } else {
    const num = Number(value);
    console.log(`Ви ввели: ${value}`);

    if (num > 0) {
      alert("Число додатнє");
    } else if (num < 0) {
      alert("Число від'ємне");
    } else {
      alert("Число дорівнює нулю");
    }
  }
}


/* ---------- ЗАВДАННЯ 2 ----------
Змінна number може набувати 4 значення: '1', '2', '3' або '4'
(запитувати через prompt). Якщо '1' — у змінну result записати 'зима',
якщо '2' — 'весна' і так далі. Розв'язати через switch-case.
Не забути про default на випадок іншого введення.
Значення змінної result вивести в консоль.
*/

function task2() {
  const number = prompt("Введіть номер пори року (1–4):");
  let result;

  switch (number === null ? null : number.trim()) {
    case "1":
      result = "зима";
      break;
    case "2":
      result = "весна";
      break;
    case "3":
      result = "літо";
      break;
    case "4":
      result = "осінь";
      break;
    default:
      result = "Невірне значення: потрібно ввести 1, 2, 3 або 4";
  }

  console.log(result);
}


/* ---------- ЗАВДАННЯ 3 ----------
Є Admin та User з відповідними паролями (оголосити, проініціалізувати).
Запитати у користувача логін (prompt) і вивести результат у консоль
браузера, використовуючи шаблонний рядок.
Якщо вводить "Admin" — prompt запитує пароль. При вдалій ідентифікації
в alert вивести «Hello, Admin»; якщо нічого не ввели або натиснули
Cancel — в alert рядок "Cancelled"; в іншому випадку в alert
рядок "I don't know you".
Те саме виконати з User.
*/

function task3() {
  const adminName = "Admin";
  const adminPassword = "admin123";
  const userName = "User";
  const userPassword = "user123";

  const login = prompt("Введіть логін:");
  console.log(`Ви ввели логін: ${login}`);

  if (login === null || login.trim() === "") {
    // Cancel або порожній рядок
    alert("Cancelled");
  } else if (login === adminName || login === userName) {
    const password = prompt("Введіть пароль:");
    const correctPassword = login === adminName ? adminPassword : userPassword;

    if (password === null || password === "") {
      alert("Cancelled");
    } else if (password === correctPassword) {
      alert(`Hello, ${login}`);
    } else {
      alert("Wrong password");
    }
  } else {
    alert("I don't know you");
  }
}


/* ---------- ЗАВДАННЯ 4 ----------
Станція з продажу ремонтних дроїдів. Оголосити функцію makeTransaction
з двома параметрами:
  quantity — кількість замовлених дроїдів,
  pricePerDroid — вартість одного дроїда.
Функція повертає рядок:
"You ordered <quantity> droids worth <totalPrice> credits!"
де <totalPrice> — загальна вартість усіх замовлених дроїдів.
*/

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

function task4() {
  console.log(makeTransaction(5, 3000));  // You ordered 5 droids worth 15000 credits!
  console.log(makeTransaction(3, 1000));  // You ordered 3 droids worth 3000 credits!
  console.log(makeTransaction(10, 500));  // You ordered 10 droids worth 5000 credits!
}


/* ---------- ЗАВДАННЯ 5 ----------
Функція checkForSpam(message) приймає рядок, перевіряє його на вміст
заборонених слів spam і sale, і повертає результат перевірки.
Слова можуть бути в довільному регістрі (SPAM, sAlE).
Якщо знайдено заборонене слово — повертає true, інакше — false.
*/

function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
}

function task5() {
  console.log(checkForSpam("Latest technology news"));         // false
  console.log(checkForSpam("JavaScript weekly newsletter"));   // false
  console.log(checkForSpam("Get best sale offers now!"));      // true
  console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
  console.log(checkForSpam("sAlE starts today"));              // true
}


/* ---------- ЗАВДАННЯ 6 ----------
Написати функцію filterArray(numbers, value), яка приймає масив чисел
і значення. Повертає новий масив лише тих чисел, які більші за value.
Усередині функції:
  - створити порожній масив для підходящих чисел;
  - цикл для ітерації кожного елемента numbers;
  - if усередині циклу для перевірки та додавання до свого масиву;
  - повернути свій новий масив.
*/

function filterArray(numbers, value) {
  const filtered = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      filtered.push(numbers[i]);
    }
  }

  return filtered;
}

function task6() {
  console.log(filterArray([1, 2, 3, 4, 5], 3));       // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4));       // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5));       // []
  console.log(filterArray([12, 24, 8, 41, 76], 38));  // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20));  // [24, 41, 76]
}


/* ---------- ЗАВДАННЯ 7 (варіант 3) ----------
1. Заданий одновимірний масив A, кількість елементів задана
   користувачем. Побудувати масив B, кожний елемент якого обчислюється
   за формулою b[i] = max * a[i], де max — максимальний елемент
   масиву A. Надрукувати вхідний та вихідний масиви.
   Застосувати функції.
2. Виконати сортування вихідного масиву за зменшенням
   методом вставки. Застосувати функції.
*/

// Запитує кількість елементів; повертає ціле число > 0 або null
function readArraySize() {
  const input = prompt("Введіть кількість елементів масиву A:");
  if (input === null || input.trim() === "") {
    return null;
  }
  const size = Number(input);
  if (!Number.isInteger(size) || size <= 0) {
    return null;
  }
  return size;
}

// Масив випадкових цілих чисел у діапазоні [min, max]
function generateArray(size, min, max) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

// Максимальний елемент масиву
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Будує масив B: b[i] = max * a[i]
function buildArrayB(arrA) {
  const max = findMax(arrA);
  const arrB = [];
  for (let i = 0; i < arrA.length; i++) {
    arrB.push(max * arrA[i]);
  }
  return arrB;
}

// Сортування вставкою за зменшенням (повертає новий масив)
function insertionSortDesc(arr) {
  const sorted = [...arr];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    let j = i - 1;
    while (j >= 0 && sorted[j] < current) {
      sorted[j + 1] = sorted[j];
      j--;
    }
    sorted[j + 1] = current;
  }
  return sorted;
}

function task7() {
  const size = readArraySize();
  if (size === null) {
    alert("Потрібно ввести ціле число більше нуля");
    return;
  }

  const arrA = generateArray(size, -10, 20);
  const arrB = buildArrayB(arrA);
  const sortedB = insertionSortDesc(arrB);

  console.log(`Масив A: [${arrA.join(", ")}]`);
  console.log(`max(A) = ${findMax(arrA)}`);
  console.log(`Масив B (b[i] = max * a[i]): [${arrB.join(", ")}]`);
  console.log(`Масив B після сортування вставкою за зменшенням: [${sortedB.join(", ")}]`);
}


/* ---------- ЗАВДАННЯ 8 ----------
Є двовимірний масив додатних і від'ємних чисел (оголосити,
проініціалізувати генератором випадкових чисел). Вивести у Console.
Створити два масиви: масив додатних чисел і масив від'ємних чисел.
Третій елемент у додатному масиві замінити на від'ємне значення,
яке буде введено за допомогою prompt. Вивести у Console.
*/

// Матриця rows x cols з ненульових випадкових чисел від -50 до 50
function generateMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let n = 0;
      while (n === 0) {
        n = Math.floor(Math.random() * 101) - 50;
      }
      row.push(n);
    }
    matrix.push(row);
  }
  return matrix;
}

// Розкладає матрицю на масив додатних та масив від'ємних чисел
function splitByPolarity(matrix) {
  const positives = [];
  const negatives = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        positives.push(matrix[i][j]);
      } else {
        negatives.push(matrix[i][j]);
      }
    }
  }
  return { positives, negatives };
}

function task8() {
  const matrix = generateMatrix(4, 4);
  console.log("Двовимірний масив:");
  console.table(matrix);

  const { positives, negatives } = splitByPolarity(matrix);
  console.log(`Додатні числа: [${positives.join(", ")}]`);
  console.log(`Від'ємні числа: [${negatives.join(", ")}]`);

  if (positives.length < 3) {
    alert("У масиві менше трьох додатних чисел — натисніть кнопку ще раз");
    return;
  }

  const input = prompt("Введіть від'ємне число для заміни третього додатного елемента:");
  if (input === null || input.trim() === "") {
    alert("Cancelled");
    return;
  }

  const newValue = Number(input);
  if (Number.isNaN(newValue) || newValue >= 0) {
    alert("Потрібно ввести від'ємне число");
    return;
  }

  positives[2] = newValue;
  console.log(`Додатний масив після заміни третього елемента: [${positives.join(", ")}]`);
}


/* ---------- ЗАВДАННЯ 9 (варіант 3) ----------
Калькулятор мовою JavaScript.
Обов'язкові операції: +, -, *, /, %, корінь квадратний, x^y.
Кнопки з цифрами та знаками операцій мають бути доступні в інтерфейсі.
→ окрема сторінка calculator.html + js/calculator.js
*/


/* ---------- ЗАВДАННЯ 10 ----------
У власному вебзастосунку створити вікно авторизації з перевіркою
на валідність введених даних.
→ робиться у репозиторії власного застосунку
*/


/* ---------- Кнопки в index.html ----------
Кожна кнопка має атрибут data-task="N" і запускає функцію taskN().
*/

const tasks = { task1, task2, task3, task4, task5, task6, task7, task8 };

document.querySelectorAll("[data-task]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = `task${button.dataset.task}`;
    console.log(`—— Завдання ${button.dataset.task} ——`);
    tasks[name]();
  });
});

const clearButton = document.getElementById("clear-console");
if (clearButton) {
  clearButton.addEventListener("click", () => console.clear());
}