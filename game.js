
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
   
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
    document.onkeyup = function(event) {
        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        
        if (userGuess == computerGuess) {
            wins++;
            alert("You get it!");
            guessesLeft = 9; 
            
        }
        else if (guessesLeft == 0){
            losses++;
            alert("You lose!");
            guessesLeft = 9;
            
        }
        else if (userGuess !== computerGuess){
            guessesLeft--;  
        }  
          
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>What is the letter I'm thinking of?</p>" +
        "<p>Total Wins: " + wins + "</p>" +
        "<p>Total Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft +  "</p>" ;
       
        document.querySelector('#game').innerHTML = html;
    }
