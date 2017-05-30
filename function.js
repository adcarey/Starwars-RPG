//Variables
var people = {
	luke : {
		name: "Luke Skywalker",
		hp: 150,
		strength: 4,
		counter: 12,
	},

	vader : {
		name: "Darth Vader",
		hp: 165, 
		strength: 7,
		counter: 16,
	},

	leia : {
		name: "Princess Leia",
		hp: 170,
		strength: 10,
		counter: 22,
	},

	boba : {
		name: "Boba Fett",
		hp: 130,
		strength: 5,
		counter: 10,
	},
};

//User character selected?
var heroPicked = false;

//User opponent selected?
var opponentPicked = false;

//user hero selection
var hero = {};

//user opponent selection
var opponent = {};

//opponents destroyed
var opponentsDestroyed = 0;

//Is game over?
var gameOver = false;

//Functions
//Taking Values for selected hero
function inputHero(selectHero) {
	hero.name = selectHero.name;
	hero.hp = selectHero.hp;
	hero.strength = selectHero.strength
	hero.counter = selectHero.counter
}

//Taking values for opponent
function inputOpponent(selectOpponent) {
	opponent.name = selectOpponent.name;
	opponent.hp = selectOpponent.hp;
	opponent.strength = selectOpponent.strength;
	opponent.counter = selectOpponent.counter;
}

//move opponents and change css 
function moveOpponents(){
	$(".heros").removeClass("heros").addClass("enemies");
	$("#waitingToBattle").append($(".enemies"));

}


function reset(){
	$("#luke").children(".hp").html("HP "+people.luke.hp);
	$("#vader").children(".hp").html("HP "+people.vader.hp);
	$("#leia").children(".hp").html("HP "+people.leia.hp);
	$("#boba").children(".hp").html("HP "+people.boba.hp);
	$("#message").hide();
	$(".enemies").removeClass("enemies").addClass("heros");
	$(".selectHero").removeClass("selectHero").addClass("heros");
	$(".battles").removeClass("battles").addClass("heros");
	$("#heros").append($(".heros"));
	$(".heros").show();
	$(".BattleButton").show();
	heroPicked = false;
	opponentPicked = false;
	opponentsDestroyed = 0;
}

$(document).ready(function(){
$("#luke").on("click", function(){
	if(heroPicked === false){
		inputHero(people.luke);
		heroPicked = true;
		$("#luke").removeClass("heros").addClass("selectHero");
		$(".selectHero").append(this);
		moveOpponents()
	} else if ((heroPicked === true) && (opponentPicked === false)){
		if($("#luke").hasClass("enemies")){
		inputOpponent(people.luke);
		opponentPicked = true;
		$("#luke").removeClass("enemies").addClass("battles");
		$("#opponents").append(this);
	}
}
});

$("#vader").on("click", function(){
	if(heroPicked === false){
		inputHero(people.vader);
		heroPicked = true;
		$("#vader").removeClass("heros").addClass("selectHero");
		$(".selectHero").append(this);
		moveOpponents()
	} else if ((heroPicked === true) && (opponentPicked === false)){
		if($("#vader").hasClass("enemies")){
		inputOpponent(people.vader);
		opponentPicked = true;
		$("#vader").removeClass("enemies").addClass("battles");
		$("#opponents").append(this);
	}
}
});
$("#leia").on("click", function(){
	if(heroPicked === false){
		inputHero(people.leia);
		heroPicked = true;
		$("#leia").removeClass("heros").addClass("selectHero");
		$(".selectHero").append(this);
		moveOpponents()
	} else if ((heroPicked === true) && (opponentPicked === false)){
		if($("#leia").hasClass("enemies")){
		inputOpponent(people.leia);
		opponentPicked = true;
		$("#leia").removeClass("enemies").addClass("battles");
		$("#opponents").append(this);
	}
}
});
$("#boba").on("click", function(){
	if(heroPicked === false){
		inputHero(people.boba);
		heroPicked = true;
		$("#boba").removeClass("heros").addClass("selectHero");
		$(".selectHero").append(this);
		moveOpponents()
	} else if ((heroPicked === true) && (opponentPicked === false)){
		if($("#boba").hasClass("enemies")){
		inputOpponent(people.boba);
		opponentPicked = true;
		$("#boba").removeClass("enemies").addClass("battles");
		$("#opponents").append(this);
	}
}
});
$(".BattleButton").on("click", function(){
	if(heroPicked && opponentPicked && !gameOver){
		opponent.hp = opponent.hp - hero.strength;
		hero.hp = hero.hp - opponent.counter;
		$(".battles").children(".hp").html("HP " + opponent.hp);
		$(".selectHero").children(".hp").html("HP " + hero.hp);
		$("#message").html("<h2>You attacked " + opponent.name + " for " + hero.strength + " damage!<h2>" +"<br>You were counter attacked by " + opponent.name +" for " + opponent.counter + " damage!");
		hero.strength = parseInt(hero.strength*1.5);
	} if(hero.hp <= 0){
		gameOver = true;
		$("#message").html("You have been defeated by " + opponent.name);
		$(".BattleButton").hide();
	} if(opponent.hp <= 0){
		opponentsDestroyed++
		$("#message").html("You have defeated " + opponent.name + " select a new opponent!");
		$(".BattleButton").hide();
		opponentPicked = false;
		$(".battles").hide();
		$(".BattleButton").show();

	} if(opponentsDestroyed === 3){
		$("#message").html("You are the champion!");
		$(".BattleButton").hide();
	}
});
	$(".RestartButton").on("click", function(){
		console.log("clicked")
		reset();
	});
});
	




