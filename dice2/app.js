// The below variables work for player 1 and 2 separately.  
// const startButton = document.getElementById("startButton");
// const rollButton = document.getElementById("rollButton");
// const holdButton = document.getElementById("holdButton");
// const image = document.getElementById('myimage');
// const title = document.getElementById("title");
// const hold1 = document.getElementById("hold1");
// const hold2 = document.getElementById("hold2");
// const current1 = document.getElementById("current1")
// const current2 = document.getElementById("current2")
// const currentTotal1 = document.getElementById("currentTotal1")
// const currentTotal2 = document.getElementById("currentTotal2")
// const playerNumber1 = document.getElementById("playerNumber1");
// const playerNumber2 = document.getElementById("playerNumber2");

const startButton = document.getElementById("startButton");
const rollButton = document.getElementById("rollButton");
const holdButton = document.getElementById("holdButton");
const image = document.getElementById('myimage');
const title = document.getElementById("title");
const hold1 = document.getElementById("hold1");
const hold2 = document.getElementById("hold2");
const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const currentTotal(num) = document.getElementsByClassName("currentTotal(num)");
// const currentTotal2 = document.getElementById("currentTotal2");
const playerNumber1 = document.getElementById("playerNumber1");
const playerNumber2 = document.getElementById("playerNumber2");
// do i need both playernumbers or can that be generic?
// call the playerToggle with a click of the new game button 


// trying to do two players!
let total = 0;
let num = 2;
let player = false; 

function diceGame (num, player) => {
    startButton.addEventListener("click", () => {
        rollButton.addEventListener("click", () => {
        startButton.style.display = "none";
        title.textContent = "Keep Rolling!";
        let roll = Math.floor((Math.random() * 6) +1);
        image.src = `dice${roll}.png`;
        currentTotal(num).textContent = roll + total;
        total = roll + total;
        });  
        
        if (roll == 1) {
        playerNumber(num).textContent = "You Lose"; 
        }
    
        if (currentTotal(num) >= 20) {
        playerNumber(num).textContent = "You Won";
        }

        holdButton.addEventListener("click", () => {
        hold(num).textContent = total;
        currentTotal(num).textContent = 0 
                
        }); 


    });




}



//       

//         
// });
        
// rollButton.addEventListener("click", () => {
//     let roll = Math.floor((Math.random() * 6) +1);
//     image.src = `dice${roll}.png`;
//     currentTotal2.textContent = roll + total2;
//     total2 = roll + total2;
//     if (roll == 1) {
//         playerNumber2.textContent = "You Lose";  
//         }
        
//         if (currentTotal2 >= 20) {
//         playerNumber2.textContent = "You Won";
//         }
    
//         holdButton.addEventListener("click", () => {
//         hold2.textContent = total2;
//         currentTotal2.textContent = 0
//         });
//     });   
    


// else if (!one) {
//     rollButton.addEventListener("click", () => {
//     startButton.style.display = "none";
//     title.textContent = "Keep Rolling!";
//     let roll = Math.floor((Math.random() * 6) +1);
//     image.src = `dice${roll}.png`;
//     currentTotal2.textContent = roll + total2;
//     total2 = roll + total2;
//     });

//     if (roll == 1) {
//     playerNumber2.textContent = "You Lose"; 
//     one = true; 
//     }

//      if (currentTotal2 >= 20) {
//     playerNumber2.textContent = "You Won";
//     }

//     holdButton.addEventListener("click", () => {
//     hold2.textContent = total2;
//     currentTotal2.textContent = 0
//      one = true; 
//     });
// }
        
// if (playerNumber1.textContent == "You Lose" || playerNumber1.textContent == "You Won") {
//     rollButton.style.display = "none";
//     startButton.style.display = "block";
//     title.textContent = "Click New Game to play again";
//     startButton.addEventListener("click", () => {
//         image.src = "none";
//         rollButton.style.display = "block";
//         title.textContent = "Begin game when 'roll' is clicked";
//         playerNumber1.textContent = "Player 1";
//         player1total = 0; 
//         currentTotal1.textContent = 0
//         });
// }

    

//     if (playerNumber1.textContent == "You Lose" || playerNumber1.textContent == "You Won" || hold1.textContent >= "1") {
//         playerNumber1 = false;
//     }

//     else if (playerNumber2.textContent == "You Lose" || playerNumber2.textContent == "You Won" || hold2.textContent >= "1") {
//         playerNumber2 = false;
//     }






/*player 1 this is complete and works */
// let player1total = 0;

// rollButton.addEventListener("click", () => {
//     startButton.style.display = "none";
//     title.textContent = "Keep Rolling!";
// let roll = Math.floor((Math.random() * 6) +1);
//         image.src = `dice${roll}.png`;
//         currentTotal1.textContent = roll + player1total;
//         player1total = roll + player1total;
    
//         if (roll == 1) {
//             playerNumber1.textContent = "You Lose"; 
//         }

//          if (player1total >= 20) {
//             playerNumber1.textContent = "You Won";
//         }

//         holdButton.addEventListener("click", () => {
//             hold1.textContent = player1total;
//             currentTotal1.textContent = 0
//             });

//         if (playerNumber1.textContent == "You Lose" || playerNumber1.textContent == "You Won") {
//             rollButton.style.display = "none";
//             startButton.style.display = "block";
//             title.textContent = "Click New Game to play again";
//             startButton.addEventListener("click", () => {
//                 image.src = "none";
//                 rollButton.style.display = "block";
//                 title.textContent = "Begin game when 'roll' is clicked";
//                 playerNumber1.textContent = "Player 1";
//                 player1total = 0; 
//                 currentTotal1.textContent = 0
//                 });
//         }
            
// });


/*player 2 this is complete and works */
// let player2total = 0;

// rollButton.addEventListener("click", () => {
//     startButton.style.display = "none";
//     title.textContent = "Keep Rolling!";
// let roll = Math.floor((Math.random() * 6) +1);
//         image.src = `dice${roll}.png`;
//         currentTotal2.textContent = roll + player2total;
//         player2total = roll + player2total;
    
//         if (roll == 1) {
//             playerNumber2.textContent = "You Lose"; 
//         }

//          if (player2total >= 20) {
//             playerNumber2.textContent = "You Won";
//         }

//         holdButton.addEventListener("click", () => {
//             hold2.textContent = player2total;
//             currentTotal2.textContent = 0
//             });

//         if (playerNumber2.textContent == "You Lose" || playerNumber2.textContent == "You Won") {
//             rollButton.style.display = "none";
//             startButton.style.display = "block";
//             title.textContent = "Click New Game to play again";
//             startButton.addEventListener("click", () => {
//                 image.src = "none";
//                 rollButton.style.display = "block";
//                 title.textContent = "Begin game when 'roll' is clicked";
//                 playerNumber2.textContent = "Player 2";
//                 player2total = 0; 
//                 currentTotal2.textContent = 0
//                 });
//         }
            
// });




// choose player / player one by default
// roll dice
// player ones totals change
// hold pressed / roll one / win score rules apply 
// player 2 selected 
// roll dice 
// player twos totals change
// hold pressed / roll one / win score rules apply 
// if hold pressed by player two and no one has won, player one goes again. 


// do i do a function where i put in player one or player two 
// still need to write out the whole process for each player or should the same proces work for each feeding
// in player 1 or player 2? 
// will need to rename practically everything so there isn't player one or player two process but score, 
// current, total and hold between them 

// so a function that takes in player number and dice roll to give out generic score, roll, hold total and you won or lost




/*
want player 1 to play until they lose or hit hold
if they lose player 2 becomes active 
if they hit hold, total is stored in hold section and player 2 plays 
if player 2 gets a 1, player 1 wins - new game button appears 
if player 2 stops before gets over 20 - player 2 wins
if player 2 holds under 20 player 1 can play again 
first player to 20 wins 
*/

//Jacobs code to help show me how to toggle players//
// let playerOne = true
// let playerOneScore = 0
// let playerTwoScore = 0

// function playerToggle() {

//     if (playerOne) {
//         console.log("Player One's turn.")
//         playerOneScore += 1
//         playerOne = false;
//         console.log(`P1 score is: ${playerOneScore}`)
//     }
//     else if (!playerOne) {
//         console.log("Player Two's turn")
//         playerOne = true;
//         playerTwoScore += 1
//         console.log(`P2 score is: ${playerOneScore}`)
//     }
// }