// Correct value before entering the game
let cardArray = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')



// Player object
let player = {
    // Adding bonus to the player
    Name : "Bonus",
    Chips : 145,
    NoChips : 0
}


let playerEl = document.getElementById('player-el')

// let sumEl = document.querySelector('.sum-el') // Refers to CSS selector



// Card value setting using functions
// Generating random numbers
function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1 // ranging
    if (number > 10){
        return 10
    } 
    else if (number === 1){
        return 11
    } 
    else {
        return number
    }
}


// Start Game
function startGame() {
    // Correct value after entering the game
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardArray = [firstCard, secondCard]
    sum = cardArray[0] + cardArray[1] 
    // Assigning values in the startGame function
    renderGame()
}



// RenderGame
function renderGame() {
    // Using loops to render cards
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cardArray.length; i++){
        // Displaying the cards
        cardsEl.textContent += cardArray[i] + " "
    }
    
    // displaying the sum
    sumEl.textContent = "Sum: " + sum


    // If...Else Conditions
    if (sum < 21){
        message = "Do you want to draw a true card"
    }
    
    else if (sum === 21) {
        message = "Congratulations‼, You have Blackjack"
        hasBlackJack = true
        isAlive = "Is player still in the game? " + true
        playerEl.textContent = player.Name + ": $" + player["Chips"] //rak notation
    }
    
    else {
        playerEl.textContent = player.Name + ": $" + player["NoChips"] //rak notation
        message = "You out of the game "
        isAlive = false
    }
    
    // Adding the hasBlackJack variable
    // Adding isAlive variable
    
    
    // Adding the message variable
    function messageBox() {
        messageEl.textContent = message
    }
    messageBox()
    
}



// Adding to the sum when newCard is clicked
function newCard(){
        // Only triggering newCard when allowed to
        if (isAlive === true && hasBlackJack === false) {
            // if ()
            let card = getRandomCard()
            sum += card
            // Pushing a new card to the cardArry an array
            cardArray.push(card)
            
            // Calling the renderGame()
            renderGame()
    }
}

