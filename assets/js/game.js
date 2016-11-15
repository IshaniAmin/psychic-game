
      var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var win = 0;
      var lost = 0;
      var guessesLeft = 10;
      var guess = [];

      function result () {
      	var display = document.querySelector("#change");
      	var text = '<p> Wins: ' + win + '</p>';
      	text +='<p> Losses: ' + lost + '</p>';
      	text +='<p> guessesLeft: ' + guessesLeft + '</p>';
      	text += '<p>Your guesses so far: ' + guess ; + '</p>';
      		if (guessesLeft == 0) {
      				guessesLeft = 10
      				lost++
      				guess = [];
      		}
      	display.innerHTML = text;
      }

      document.onkeyup = function(event){
        var key = event.key;

        var compLetter = options[Math.floor(Math.random()*options.length)];
        console.log(compLetter);

        if (key == compLetter) {
        	win++;
        	guessesLeft = 10
      		guess = [];
        	result();
        } else if (key !== compLetter) {
        	guessesLeft--;
        	guess.push(key);
        	result();
        }

     }
     	
