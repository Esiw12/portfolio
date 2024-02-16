document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const signupForm = document.querySelector(".flip-card__back .flip-card__form");
  const loginForm = document.querySelector(".flip-card__front .flip-card__form");
  const modal = document.getElementById("modal");

  const cElemnt = document.getElementById("c-sharp")
  const jsElement = document.getElementById("js")
  const pytElement = document.getElementById("pyt")

  if (openModalBtn) {
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "block";
      jsElement.style.visibility = "hidden";
      pytElement.style.visibility = "hidden";
      cElemnt.style.visibility = "hidden";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
      jsElement.style.visibility = "visible";
      pytElement.style.visibility = "visible";
      cElemnt.style.visibility = "visible";
    });
  }
  if (signupForm) {
    signupForm.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const username = event.target.querySelector('[name="username"]').value;
      const email = event.target.querySelector('[name="email"]').value;
      const password = event.target.querySelector('[name="password"]').value;
  
      if (!username || !email || !password) {
        alert('Заполните все поля формы');
        return;
      }
  
      try {
        const requestData = { username, email, password };
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });
  
        // проверка на тело объекта перед отправой в json формате
        if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
          const responseData = await response.json();
          //  responseData
          alert('Вы успешно зарегистрированы!');
        } else if (response.ok) {
          alert('Регистрация прошла успешно, но сервер не вернул JSON.');
        } else {
          // Если ответ не ок и не JSON, возможно, это текст ошибки
          const errorText = await response.text();
          alert(`Ошибка регистрации: ${errorText}`);
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса (signupForm):', error.message);
        alert('Ошибка при отправке запроса (signupForm): ' + error.message);
      }
    });
  }
  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = event.target.querySelector('[name="email"]').value;
      const password = event.target.querySelector('[name="password"]').value;

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          alert('Вы успешно вошли!');
        } else {
          const errorData = await response.json();
          alert(`Ошибка входа: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса (loginForm):', error.message);
      }
    });
  }
});
