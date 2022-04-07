var userwin = 0;
var pcwin = 0;

function askName() {
    var username = prompt("Enter a username");
    return username
}

var username = askName();

function greeting(a) {
    alert(`Welcome to 20 ${a}! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press "y".`);
}

greeting(username);

function ranN() {
    var ranNum = Math.floor(Math.random() * 10) + 1
    return ranNum
}

function mainGame() {
    do {
        function user() {
            var userNum = 0;
            alert("It is now the users turn");
            do {
                var ranNum = ranN()
                var userNum = Math.floor(userNum + ranNum);
                alert(`The new number is ${ranNum}. The User total is ${userNum}`);
                if (userNum > 20) {
                    alert(`You got ${userNum}. Because you went over 20, Computer wins`);
                    mattwin++
                    break;
                }
                var userRequest = prompt("Would you like another number? If you would like to stop press `n` to stop.");
                if (userRequest == "n") {
                    alert(`You stopped at ${userNum}`)
                    break;
                }
                
        } while ((userRequest != "n") || (userNum < 20));
        return userNum
        }
        var userNum = user()
            if (userNum <= 20) {
            function pc() {
                alert("Now its Computer's turn");
                var pcnum = 0;
                do {
                    var ranNum = ranN()
                    var pcnum = Math.floor(pcnum + ranNum);
                    alert(`The new number is ${ranNum}. The computer total is ${pcnum}`);
                } while (pcnum < 16)
                return pcnum
                }
                var pcnum = pc();
            
                if (pcnum > 20) {
                    alert("The computer has gone over 20 you win the round");
                    userwin++
                } else if (pcnum >= 16) {
                    alert(`The computer will stop at ${pcnum}`);
                    function compareNum() {
            
                        if (pcnum > userNum) {
                            alert(`You lose, Computer guessed ${pcnum} and you guessed ${userNum}`);
                            pcnum++
                        } else if ((userNum > pcnum) && (userNum <= 20)) {
                            alert(`You win. You got ${userNum} and Computer guessed ${pcnum}`);
                            userwin++
                        } else if ((userNum == pcnum) && (userNum <= 20)){
                            alert(`You tied, Computer guessed ${pcnum} and you also guessed ${userNum}`);
                        }
                        }
                        compareNum()    
                }
        }
        alert(`The current score is User ${userwin}, and Computer ${pcwin}`);
            var play = prompt("Would you like to play again? Press `y` to play again. Any other key will exit the program");
    } while (play == "y")
    
    if (pcwin > userwin){
        alert(`Thank you for playing, The final score was User ${userwin}, and Computer ${pcwin}. 
    Matt wins!`);
    } else if (userwin > pcwin) {
        alert(`Thank you for playing, The final score was User ${userwin}, and Computer ${pcwin}. 
    You win!`);
    } else {
        alert(`Thank you for playing, The final score was User ${userwin}, and Computer ${pcwin}. 
    Its a tie.`);
    }
    
}

mainGame()