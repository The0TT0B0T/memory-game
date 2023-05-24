//we need to add 12 cards for this meory game
//so we'll start off with an array
const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",                         
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",                         /*this array we made an object so we can classify all the 
                                                                pieces of the game which are the images we have in the file.
                                                                wealso need 12 cards for the memory game. Hence the 12 objects
                                                                in the array.*/
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    }
];
//Sorthing the array so its random
cardArray.sort(() => 0.5 - Math.random());
 //sort works by comparing 2 values, then sorts through it.
//so this code is a trick to sort arrays
/*the sort javascript method by comparing 2 values* and then sorts thru it*/


//Creating the board for the Game
const gridDisplay = document.querySelector("#grid");     //start by looking for the id of grid in the html for the board game
const resultDisplay = document.querySelector("#result")
let cardsChosen = [];  //setting the cards we chose into an array so we can psuh an item into an array
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {                                  //for each item in the array we want to create an element
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");   //method to create an element which is the images we want
        card.setAttribute("src", "images/blank.png");//setting an image to the card. using the method set atribute
        card.setAttribute("data-id", i);//data id so each caard has an id that is unique and "i" to keep track of each one
        card.addEventListener("click",flipCard);//when we click on a card we want something to happen. Hence the event listner method.
        gridDisplay.appendChild(card);//so we can get the grid in between the div on the html file with the id grid 
    }
}
createBoard();

function checkMatch() { 
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];                                           /*what this is doing*/
    
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("You have clicked the same image!");
    } 
    
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You Found a Match");
        cards[optionOneId].setAttribute("src", "images/white.png");
        cards[optionTwoId].setAttribute("src", "images/white.png");
        cards[optionOneId].removeEventListener("click",flipCard);
        cards[optionTwoId].removeEventListener("click",flipCard);
        cardsWon.push(cardsChosen);
    } 
    
    else {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        alert("Sorry Try Again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "Congratualtions!! You founds them all";
    }
}

//creating a function that allows us to flip the card when we click it,
function flipCard() {
    const cardId = this.getAttribute("data-id");
    //"this" allows us to use whatever element we clicked and we "getAtribute" to get it's data id
    cardArray[cardId].name;
    cardsChosen.push(cardArray[cardId].name);// pushing the name of the card in to the cards chosen array
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }

}