let count = []
let saveAction

const MAX_VISOR_CHAR = 10

const addNumber = (num) => {
  document.getElementById("total").removeAttribute("hidden")
  if (document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR) {
    document.getElementById("total").innerHTML += num
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

const processAction = (num1, num2, action) => {
  switch (action) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case 'x': return num1 * num2;
    case '/': return num1 / num2;
  }
};

