

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
});

