let count = [];
let saveAction;

const MAX_VISOR_CHAR = 10;

const addNumber = (num) => {
  document.getElementById("total").removeAttribute("hidden");
  if (document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR) {
    document.getElementById("total").innerHTML += num;
  }
};

const calcAction = (action) => {
  let currentNumber = document.getElementById("total").innerHTML;

  if (currentNumber.length === 0) {
    return;
  }

  count.push(Number(document.getElementById("total").innerHTML));

  document.getElementById("accumulator").removeAttribute("hidden");
  document.getElementById("accumulator").innerHTML += `${document.getElementById("total").innerHTML} ${action}`;
  document.getElementById("total").innerHTML = "";

  count.push(action);
};

const addDot = () => {
  let currentNumber = document.getElementById("total").innerHTML;

  if (!currentNumber.includes(".")) {
    document.getElementById("total").innerHTML += ".";
  }
};

const result = () => {
  let currentAccumulator = document.getElementById("accumulator").innerHTML;
  let currentNumber = document.getElementById("total").innerHTML;

  if (currentAccumulator[currentAccumulator.length - 1] === "=" && currentNumber.legnth > 0) {
    document.getElementById("total").innerHTML = processAction(Number(currentNumber), Number(currentNumber), saveAction).toString().substring(0, MAX_VISOR_CHAR);
  }

  if (count.length === 0) {
    return;
  }

  count.push(Number(document.getElementById("total").innerHTML));
  document.getElementById("accumulator").innerHTML += `${document.getElementById("total").innerHTML} =`;
  processResult();
};

const processResult = () => {
  let action = null;
  let current = null;
  let total = 0;

  if (isNaN(count[count.length - 1])) {
    count.pop();
  }

  count.forEach(n => {
    if (!isNaN(n)) {
      if (current == null) {
        current = n;
      } else {
        total += processAction(current, n, action);
        current = null;
      }
    } else {
      action = n;
      saveAction = n;
    }
  });

  if (current != null) {
    total = processAction(total, current, action);
  }
  document.getElementById("total").innerHTML = total.toString().substring(0, MAX_VISOR_CHAR);
  count = [];
};

const processAction = (num1, num2, action) => {
  switch (action) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case 'x': return num1 * num2;
    case '/': return num1 / num2;
  }
};

const clearCurrentEntry = () => {
  document.getElementById("total").innerHTML = "";
};

const clearAll = () => {
  document.getElementById("total").innerHTML = "";
  document.getElementById("accumulator").innerHTML = "";
  count = [];
};

const percentage = () => {
  let currentNumber = document.getElementById("total").innerHTML;
  if (currentNumber != "") {
    document.getElementById("total").innerHTML = Number(document.getElementById("total").innerHTML) / 100;
  }
};