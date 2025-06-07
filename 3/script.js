const input = document.querySelector("#name");
const btn = document.getElementById("btn");
const wrap = document.querySelector(".wrap");
const gps = document.querySelector('.j-btn-gps');

/* открытие канала WebSocket */
const socket = new WebSocket("wss://echo.websocket.events");

socket.onopen = function () {
  console.log("Соединение установлено.");
};

socket.onmessage = function (e) {
  const p = document.createElement("p");
  p.className = 'recipient';
  p.textContent = e.data;
  wrap.appendChild(p);
};

/* отправка сообщения */
btn.addEventListener("click", () => {
  if (!input.value.length) return;

  const p = document.createElement("p");
  p.className = 'send';
  p.textContent = input.value;
  wrap.appendChild(p);

  socket.send(input.value);
  input.value = "";
});

/* обработка геолокации */
const error = () => {
  const p = document.createElement("p");
  p.className = 'recipient';
  p.textContent = 'Невозможно получить ваше местоположение';
  wrap.appendChild(p);
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const p = document.createElement("p");
  p.className = 'recipient';
  p.innerHTML = `Широта: ${latitude}°, Долгота: ${longitude}° <br><a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`;
  wrap.appendChild(p);
};

gps.addEventListener("click", () => {
  if (!navigator.geolocation) {
    error();
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});