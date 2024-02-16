document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("terminal-input");
  const outputElement = document.getElementById("output");
  const taskListElement = document.getElementById("task-list");
  const circlesContainer = document.getElementById("circles-container");
  const scoreCounter = document.getElementById("score-counter");
  // Счетчики
  let counter = 0; // Для заданий
  let score = 0; // Для разбитых шариков

  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = inputElement.value;
      inputElement.value = "";

      const { outputText, isValidCommand } = executeCommand(command);

      outputElement.innerHTML += `<div>$ ${command}</div>`;
      outputElement.innerHTML += `<div>${outputText}</div>`;

      if (isValidCommand) {
        createMultipleCircles(5); // 5 кружков ,думаю норм
        setTimeout(() => {
          updateTaskAfterCorrectInput(); // обнова через 5 сек ,чтобы усепть кружки собрать
        }, 5000);
      }

      outputElement.scrollTop = outputElement.scrollHeight;
    }
  });

  function executeCommand(command) {
    let outputText;
    let isValidCommand = false;

    if (command === "esiw" || command === "wise" || command === "esiw_yar") {
      counter++;
      outputText = "Ваяя";
      isValidCommand = true;
    } else {
      outputText = `Ответ не верен: ${command}`;
    }

    return { outputText, isValidCommand };
  }

  function updateTask() {
    const tasks = [
      "Напиши esiw",
      "Напиши wise: ...",
      "Напиши esiw_yar",
      "....",
      "....",
      
    ];

    const newTaskIndex = counter % tasks.length;
    taskListElement.innerHTML = `<li>${tasks[newTaskIndex]}</li>`;
  }

  function updateTaskAfterCorrectInput() {
    updateTask();
  }

  function createMultipleCircles(count) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        createCircle();
      }, i * 1000); // кружок раз в сек
    }
  }

  function createCircle() {
    const colors = ["orange", "pink", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const circle = document.createElement("div");
    circle.classList.add("circle", randomColor);
    circle.style.left = `${Math.random() * 80 + 10}vw`;
    circle.style.top = `${Math.random() * 80 + 10}vh`;
    circlesContainer.appendChild(circle);

    circle.addEventListener("click", function () {
      circle.remove();
      score++;
      updateScoreCounter();
    });

    setTimeout(() => {
      circle.remove(); // delete 2 сек
    }, 2000);
  }

  function updateScoreCounter() {
    scoreCounter.textContent = `Счет: ${score}`;
  }

 
  updateTask();
});
