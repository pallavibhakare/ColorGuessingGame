var target;
var guess_input;
var finished = false;
var guesses = 0;
var colors = ["azure" , "blue" , "coral" , "cyan" , "gold" , "gray" , "green" , "honeydew" , "pink" ,  "lightsalmon" , "magenta" , "orange" , "red" , "tan" , "wheat" , "white" , "yellow"];
function do_game(){
	var random_number = Math.floor(Math.random() * colors.length);
	target  = colors[random_number];		
	//alert(target);
	
	while(!finished){	
		
		guess_input = prompt("I am thinking of one of these colors: \n\n " + "azure, blue, coral, cyan, gold, gray, green, honeydew, pink, lightsalmon, magenta, orange, red, tan , wheat, white, yellow\n\n" + "What color am I thinking of?");							
		//alert(guess_input);
		guesses += 1;
		finished = check_guess();
	}
}

function check_guess(){
	//alert(target);	
	if(colors.indexOf(guess_input) == -1)  //check players guess not in the colors array
	{
			alert("Sorry! I didn't recognize your color!\n" + "\nPlease try again.\n\n");
			return false;
	}
	if(guess_input > target) //alphabetically higher than the target
	{
			alert("Sorry, your color guess is not correct!.\n" + "Hint: Your color is alphabetically higher than mine.\n" + "\nPlease try again.\n\n");
			return false;
	}
	if(guess_input < target) //alphabetically lower than the target
	{
			alert("Sorry, your color guess is not correct!.\n\n" + "\nHint: Your color is alphabetically lower than mine.\n" + " \nPlease try again.\n\n");
			return false;
	}
	
	document.body.style.backgroundColor = target;	
	alert("Congratulations!! Your have guess the color!\n " +  "\n It took you " + guesses + " guesses to finish the game!" + "\n\nYou can see the color in the background.");	
	return true;
	
	
}
