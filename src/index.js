const keyRow1 = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
  "Tab",
  "KeyQ",
  "KeyW",
  "KeyE",
  "KeyR",
  "KeyT",
  "KeyY",
  "KeyU",
  "KeyI",
  "KeyO",
  "KeyP",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "Del",
  "CapsLock",
  "KeyA",
  "KeyS",
  "KeyD",
  "KeyF",
  "KeyG",
  "KeyH",
  "KeyJ",
  "KeyK",
  "KeyL",
  "Semicolon",
  "Quote",
  "Enter",
  "ShiftLeft",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "Comma",
  "Period",
  "Slash",
  "ArrowUp",
  "ShiftRight",
  "CtrlLeft",
  "Win",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "CtrlRight",
];

const keyRowKey = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "\\",
  "Del",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "ArrowUp",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "Ctrl",
];

const elBody = document.querySelector(".body");
const newElement = document.createElement("div");
newElement.classList.add("center");
newElement.innerHTML = `
    <p class="title">RSS Виртуальная клавиатура</p>
    <textarea class="body-textarea textarea" id="textarea"></textarea>
    <div class="body-keyboard keyboard" id="keyboard"></div>
    <p class="description">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>
`;

elBody.prepend(newElement);
let divKey = document.querySelector("#keyboard");

function createDiv() {
  for (let j = 1; j < 6; j++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add(`row${j}`);
    newDiv.classList.add("row");
    divKey.append(newDiv);
  }
}
createDiv();

function createKeyInRow1() {
  let newDiv1 = document.querySelector(".row1");
  for (let i = 0; i < 14; i++) {
    newDiv1.insertAdjacentHTML(
      "beforeend",
      `<div class="${keyRow1[i]} key">${keyRowKey[i]}</div>`
    );
  }
}
createKeyInRow1();

function createKeyInRow2() {
  let newDiv2 = document.querySelector(".row2");
  for (let i = 14; i < 29; i++) {
    newDiv2.insertAdjacentHTML(
      "beforeend",
      `<div class="${keyRow1[i]} key">${keyRowKey[i]}</div>`
    );
  }
}
createKeyInRow2();

function createKeyInRow3() {
  let newDiv3 = document.querySelector(".row3");
  for (let i = 29; i < 42; i++) {
    newDiv3.insertAdjacentHTML(
      "beforeend",
      `<div class="${keyRow1[i]} key">${keyRowKey[i]}</div>`
    );
  }
}
createKeyInRow3();

function createKeyInRow4() {
  let newDiv4 = document.querySelector(".row4");
  for (let i = 42; i < 55; i++) {
    newDiv4.insertAdjacentHTML(
      "beforeend",
      `<div class="${keyRow1[i]} key">${keyRowKey[i]}</div>`
    );
  }
}
createKeyInRow4();

function createKeyInRow5() {
  let newDiv5 = document.querySelector(".row5");
  for (let i = 55; i < 64; i++) {
    newDiv5.insertAdjacentHTML(
      "beforeend",
      `<div class="${keyRow1[i]} key">${keyRowKey[i]}</div>`
    );
  }
}
createKeyInRow5();

let textInput = document.querySelector(".textarea");
let allKeys = document.querySelectorAll(".key");
console.log(allKeys);
let spaceKey = document.querySelector(".Space");
let backspaceKey = document.querySelector(".Backquote");
let tabKey = document.querySelector(".Tab");
let delKey = document.querySelector(".Del");
let capsKey = document.querySelector(".CapsLock");
let shiftLeftKey = document.querySelector(".ShiftLeft");
let shiftRightKey = document.querySelector(".ShiftRight");
let ctrlLeftKey = document.querySelector(".CtrlLeft");
let ctrlRightKey = document.querySelector(".CtrlRight");
let winKey = document.querySelector(".Win");
let altLeftKey = document.querySelector(".AltLeft");
let altRightKey = document.querySelector(".AltRight");
let upKey = document.querySelector(".ArrowUp");
let leftKey = document.querySelector(".ArrowLeft");
let downKey = document.querySelector(".ArrowDown");
let rightKey = document.querySelector(".ArrowRight");

for (let i = 0; i < allKeys.length; i++) {
  allKeys[i].setAttribute("keyname", allKeys[i].innerText);
  allKeys[i].setAttribute("lowerCaseName", allKeys[i].innerText.toLowerCase());
}

window.addEventListener("keydown", function (el) {
  for (let i = 0; i < allKeys.length; i++) {
    if (
      el.key == allKeys[i].getAttribute("keyname") ||
      el.key == allKeys[i].getAttribute("lowerCaseName")
    ) {
      allKeys[i].classList.add("active");
    }
    if (el.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (el.code == "ShiftLeft") {
      shiftRightKey.classList.remove("active");
    }
    if (el.code == "ShiftRight") {
      shiftLeftKey.classList.remove("active");
    }
    if (el.code == "AltLeft") {
      altRightKey.classList.remove("active");
    }
    if (el.code == "AltRight") {
      altLeftKey.classList.remove("active");
    }
    if (el.code == "CapsLock") {
      capsKey.classList.toggle("active");
    }
    if (el.code == "ControlLeft") {
      ctrlLeftKey.classList.add("active");
    }
    if (el.code == "ControlRight") {
      ctrlRightKey.classList.add("active");
    }
    if (el.code == "Tab") {
      tabKey.classList.add("active");
    }
  }
});

window.addEventListener("keyup", function (el) {
  for (let i = 0; i < allKeys.length; i++) {
    if (
      el.key == allKeys[i].getAttribute("keyname") ||
      el.key == allKeys[i].getAttribute("lowerCaseName")
    ) {
      allKeys[i].classList.remove("active");
      allKeys[i].classList.add("remove");
    }
    if (el.code == "ControlLeft") {
      ctrlLeftKey.classList.remove("active");
    }
    if (el.code == "ControlRight") {
      ctrlRightKey.classList.remove("active");
    }
    if (el.code == "Space") {
      spaceKey.classList.remove("active");
      spaceKey.classList.add("remove");
    }
    if (el.code == "Tab") {
      tabKey.classList.remove("active");
      tabKey.classList.add("remove");
    }
    if (el.code == "ShiftLeft") {
      shiftRightKey.classList.remove("active");
      shiftRightKey.classList.remove("remove");
    }
    if (el.code == "ShiftRight") {
      shiftLeftKey.classList.remove("active");
      shiftLeftKey.classList.remove("remove");
    }
    if (el.code == "AltLeft") {
      altRightKey.classList.remove("active");
      altRightKey.classList.remove("remove");
    }
    if (el.code == "AltRight") {
      altLeftKey.classList.remove("active");
      altLeftKey.classList.remove("remove");
    }
    setTimeout(() => {
      allKeys[i].classList.remove("remove");
    }, 200);
  }
});

window.addEventListener("click", function (el) {
  for (let i = 0; i < allKeys.length; i++) {
    if (
      el.key == allKeys[i].getAttribute("keyname") ||
      el.key == allKeys[i].getAttribute("lowerCaseName")
    ) {
      allKeys[i].classList.add("active");
    }
    if (el.code == "Space") {
      spaceKey.classList.add("active");
    }
    if (el.code == "ShiftLeft") {
      shiftRightKey.classList.remove("active");
    }
    if (el.code == "ShiftRight") {
      shiftLeftKey.classList.remove("active");
    }
    if (el.code == "AltLeft") {
      altRightKey.classList.remove("active");
    }
    if (el.code == "AltRight") {
      altLeftKey.classList.remove("active");
    }
    if (el.code == "CapsLock") {
      capsKey.classList.toggle("active");
    }
    if (el.code == "ControlLeft") {
      ctrlLeftKey.classList.add("active");
    }
    if (el.code == "ControlRight") {
      ctrlRightKey.classList.add("active");
    }
    if (el.code == "Tab") {
      tabKey.classList.add("active");
    }
  }
});
