
$(".luke").on("click", function(){
	$(".vader").css("border-color" , "red");
	$("#dv").css("background-color" , "red");
	$("#dvl").css("background-color" , "red");
	$(".vader").appendTo("#opponents");
	$(".leia").css("border-color" , "red");
	$("#pl").css("background-color" , "red");
	$("#pll").css("background-color" , "red");
	$(".leia").appendTo("#opponents");
	$(".boba").css("border-color" , "red");
	$("#bf").css("background-color" , "red");
	$("#bfl").css("background-color" , "red");
	$(".boba").appendTo("#opponents");
$(".vader").on("click", function(){
	$(".leia").hide();
	$(".boba").hide();
})
$(".leia").on("click", function(){
	$(".vader").hide();
	$(".boba").hide();
})
$(".boba").on("click", function(){
	$(".vader").hide();
	$(".leia").hide();
})
});

$(".vader").on("click", function(){
	$(".luke").css("border-color" , "red");
	$("#ls").css("background-color" , "red");
	$("#lsl").css("background-color" , "red");
	$(".luke").appendTo("#opponents");
	$(".leia").css("border-color" , "red");
	$("#pl").css("background-color" , "red");
	$("#pll").css("background-color" , "red");
	$(".leia").appendTo("#opponents");
	$(".boba").css("border-color" , "red");
	$("#bf").css("background-color" , "red");
	$("#bfl").css("background-color" , "red");
	$(".boba").appendTo("#opponents");
$(".luke").on("click", function(){
	$(".leia").hide();
	$(".boba").hide();
})
$(".leia").on("click", function(){
	$(".luke").hide();
	$(".boba").hide();
})
$(".boba").on("click", function(){
	$(".luke").hide();
	$(".leia").hide();
})
});




