const bodyElement = document.body;
const menuSize = document.getElementById("menu-color");
const menuButton = document.getElementById("menu-btn");
const homeButton = document.getElementById("home");
const redBg = document.getElementById("red");
const orangeBg = document.getElementById("orange");
const purpleBg = document.getElementById("purple");
const greenBg = document.getElementById("green");
const container = document.getElementById('container');

const openCloseMenu = function () {
  menuSize.classList.add("color-menu-big");
  console.log("mouse on button: opened menu")
};

const closeOpenMenu = function () {
  menuSize.classList.remove("color-menu-big");
  console.log("mouse left area: closed menu")
};

const changeBackGroudColorRed = function () {
  bodyElement.classList.remove(...bodyElement.classList);
  bodyElement.classList.add("red-background");
  container.innerHTML = '';
  container.innerHTML += 'This is red';
  console.log("red button was pressed")
};

const changeBackGroudColorOrange = function () {
  bodyElement.classList.remove(...bodyElement.classList);
  bodyElement.classList.add("orange-background");
  container.innerHTML = '';
  container.innerHTML += 'This is orange';
  console.log("orange button was pressed")
 
};

const changeBackGroudColorPurple = function () {
  bodyElement.classList.remove(...bodyElement.classList);
  bodyElement.classList.add("purple-background");
  container.innerHTML = '';
  container.innerHTML += 'This is purple';
  console.log("purple button was pressed")

};

const changeBackGroudColorGreen = function () {
  bodyElement.classList.remove(...bodyElement.classList);
  bodyElement.classList.add("green-background");
  container.innerHTML = '';
  container.innerHTML += 'This is green';
  console.log("green button was pressed")
  
};

const attachOpenMenu = function () {
  menuButton.addEventListener("mouseover", function () {
    openCloseMenu();
    console.log(attachOpenMenu);
  });
};

const attachCloseMenu = function () {
  menuSize.addEventListener("mouseleave", function () {
    closeOpenMenu();
    console.log(attachCloseMenu);
  });
};

const attachCloseMenuClick = function () {
  homeButton.addEventListener("click", function () {
    closeOpenMenu();
    console.log(attachCloseMenuClick);
    console.log("menu button was pressed: closed menu")
  });
};

const attachRedBackGround = function () {
  redBg.addEventListener("click", function () {
    changeBackGroudColorRed();
    closeOpenMenu();
    console.log(attachCloseMenuClick);
  });
};

const attachOrangeBackGround = function () {
  orangeBg.addEventListener("click", function () {
    changeBackGroudColorOrange();
    closeOpenMenu();
    console.log(attachCloseMenuClick);
  });
};

const attachPurpleBackGround = function () {
  purpleBg.addEventListener("click", function () {
    changeBackGroudColorPurple();
    closeOpenMenu();
    console.log(attachCloseMenuClick);
  });
};

const attachGreenBackGround = function () {
  greenBg.addEventListener("click", function () {
    changeBackGroudColorGreen();
    closeOpenMenu();
    console.log(attachCloseMenuClick);
  });
};

attachOpenMenu();
attachCloseMenu();
attachCloseMenuClick();
attachRedBackGround();
attachOrangeBackGround();
attachPurpleBackGround();
attachGreenBackGround();
