/* ---------- ЗАВДАННЯ 9 (варіант 3) ----------
Калькулятор мовою JavaScript.
Обов'язкові операції: +, -, *, /, %, корінь квадратний, x^y.
Кнопки з цифрами та знаками операцій мають бути доступні в інтерфейсі.
*/

const displayEl = document.getElementById("display");
const expressionEl = document.getElementById("expression");

const SYMBOLS = { "+": "+", "-": "−", "*": "×", "/": "÷", "%": "mod", "^": "^" };

let current = "0";
let previous = null;
let operator = null;
let waiting = false;
let hasError = false;

function format(n) {
  return String(parseFloat(n.toPrecision(12)));
}

function render() {
  displayEl.textContent = current;
  expressionEl.textContent =
    previous !== null && operator ? `${format(previous)} ${SYMBOLS[operator]}` : "";
}

function setError() {
  current = "Помилка";
  previous = null;
  operator = null;
  hasError = true;
  waiting = true;
}

function compute(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? NaN : a / b;
    case "%": return b === 0 ? NaN : a % b;
    case "^": return Math.pow(a, b);
    default: return NaN;
  }
}

function clearAll() {
  current = "0";
  previous = null;
  operator = null;
  waiting = false;
  hasError = false;
}

function inputDigit(d) {
  if (hasError) clearAll();
  if (waiting) {
    current = d;
    waiting = false;
  } else {
    current = current === "0" ? d : current + d;
  }
}

function inputDot() {
  if (hasError) clearAll();
  if (waiting) {
    current = "0.";
    waiting = false;
  } else if (!current.includes(".")) {
    current += ".";
  }
}

function chooseOperator(op) {
  if (hasError) return;
  const value = parseFloat(current);

  if (operator && !waiting) {
    const res = compute(previous, value, operator);
    if (!Number.isFinite(res)) return setError();
    previous = res;
    current = format(res);
  } else if (!operator) {
    previous = value;
  }

  operator = op;
  waiting = true;
}

function equals() {
  if (hasError || operator === null) return;
  const res = compute(previous, parseFloat(current), operator);
  if (!Number.isFinite(res)) return setError();
  current = format(res);
  previous = null;
  operator = null;
  waiting = true;
}

function squareRoot() {
  if (hasError) return;
  const value = parseFloat(current);
  if (value < 0) return setError();
  current = format(Math.sqrt(value));
  waiting = true;
}

function toggleSign() {
  if (hasError || current === "0") return;
  current = current.startsWith("-") ? current.slice(1) : "-" + current;
}

function backspace() {
  if (hasError || waiting) return;
  const isSingle = current.length === 1 || (current.length === 2 && current.startsWith("-"));
  current = isSingle ? "0" : current.slice(0, -1);
}

document.getElementById("calc").addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;

  const { action, value } = btn.dataset;
  switch (action) {
    case "digit": inputDigit(value); break;
    case "dot": inputDot(); break;
    case "operator": chooseOperator(value); break;
    case "equals": equals(); break;
    case "sqrt": squareRoot(); break;
    case "sign": toggleSign(); break;
    case "backspace": backspace(); break;
    case "clear": clearAll(); break;
  }
  render();
});

render();