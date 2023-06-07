let card_section = document.getElementById("card_section");

let card_img = [
  {
    name: "html",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "css",
    img: "https://img.freepik.com/free-icon/css_318-698167.jpg",
  },
  {
    name: "php",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6qt7JqkK3YxceybWJ7Zt6c856D2_7jLDLZg&usqp=CAU",
  },
  {
    name: "js",
    img: "https://static.javatpoint.com/images/javascript/javascript_logo.png",
  },
  {
    name: "sass",
    img: "https://thumbnail.imgbin.com/4/16/4/imgbin-sass-cascading-style-sheets-preprocessor-less-postcss-meng-uwgxZ0nWdzVLrKB6BCTaPGfLc_t.jpg",
  },
  {
    name: "jquery",
    img: "https://www.chicagocomputerclasses.com/wp-content/uploads/2016/01/jquery.gif",
  },
];

let gameCard = card_img.concat(card_img);
let shuffleArray = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
gameCard = shuffleArray(gameCard);

for (let i = 0; i < gameCard.length; i++) {
  let div = document.createElement("div");
  div.classList.add("card");
  div.dataset.name = gameCard[i].name;
  div.dataset.target = i;
  card_section.appendChild(div);

  let frontDiv = document.createElement("div");
  frontDiv.classList.add("frontDiv");

  let backDiv = document.createElement("div");
  backDiv.classList.add("backDiv");
  backDiv.style.backgroundImage = `url("${gameCard[i].img}")`;

  div.appendChild(frontDiv);
  div.appendChild(backDiv);
}

let clickCount = 0;
let firstCard = "";
let secondCard = "";
let first;
let second;

let matchCard = () => {
  let selected_card = document.querySelectorAll(".turn");

  selected_card.forEach((card) => {
    card.classList.add("match");
    card.dataset.target = -1;
  });
};

let restart = () => {
  clickCount = 0;
  firstCard = "";
  secondCard = "";
  let selected_card = document.querySelectorAll(".turn");

  selected_card.forEach((card) => {
    card.classList.remove("turn");
  });
};

card_section.addEventListener("click", (e) => {
  let currDiv = e.target.parentNode;

  if (currDiv.id == "card_section") {
    return false;
  }

  if (currDiv.getAttribute("data-target") != -1) {
    clickCount++;
  }
  if (clickCount == 2) {
    second = currDiv.getAttribute("data-target");
    if (first === second) {
      clickCount--;
    }
  }

  if (clickCount < 3) {
    if (clickCount == 1 && currDiv.getAttribute("data-target") != -1) {
      firstCard = currDiv.dataset.name;
      first = currDiv.getAttribute("data-target");
      currDiv.classList.add("turn");
    } else if(currDiv.getAttribute("data-target") != -1){
      secondCard = currDiv.dataset.name;
      currDiv.classList.add("turn");
    }

    if (firstCard != "" && secondCard != "") {
      if (firstCard === secondCard) {
        setTimeout(() => {
          matchCard();
          restart();
        }, 1500);
      } else {
        setTimeout(() => {
          restart();
        }, 1500);
      }
    }
  }
});
