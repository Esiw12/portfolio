document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("terminal-input");
  const outputElement = document.getElementById("output");
  const taskListElement = document.getElementById("task-list");

  let counter = 0; // Для заданий

  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const command = inputElement.value;
      inputElement.value = "";

      const { outputText, isValidCommand } = executeCommand(command);

      outputElement.innerHTML += `<div>$ ${command}</div>`;
      outputElement.innerHTML += `<div>${outputText}</div>`;

      if (isValidCommand) {
        updateTaskAfterCorrectInput(); // обновление задания после корректного ввода
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
      // ... Добавьте больше заданий по мере необходимости
    ];

    const newTaskIndex = counter % tasks.length;
    taskListElement.innerHTML = `<li>${tasks[newTaskIndex]}</li>`;
  }

  function updateTaskAfterCorrectInput() {
    updateTask();
  }

  updateTask(); // Инициализация первого задания
});
