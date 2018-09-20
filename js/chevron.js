$(document).ready(function(){
	var chevron1 = 0;
	var chevron2 = 0;
	var chevron3 = 0;
	var chevron4 = 0; 	
	$("#one").hide(); 	
	$("#two").hide(); 	
	$("#three").hide(); 	
	$("#four").hide();

	$(".chevronLink").click(function(){
		var slideDownID = $(this).data("item")

		console.log($(this).data("item"));	
		switch(slideDownID){
			case 0:
				$("#Landing-page").slideDown();
				$("#one").slideUp(); 	
				$("#two").slideUp(); 	
				$("#three").slideUp(); 	
				$("#four").slideUp();
				break;
            case 1:
				$("#Landing-page").slideUp();
				$("#one").slideDown(); 	
				$("#two").slideUp(); 	
				$("#three").slideUp(); 	
				$("#four").slideUp();
				break;
			case 2:
				$("#Landing-page").slideUp();
				$("#two").slideDown(); 	
				$("#one").slideUp(); 
				$("#three").slideUp(); 	
				$("#four").slideUp();
				break;
			case 3:
				$("#Landing-page").slideUp();	
				$("#three").slideDown();
				$("#one").slideUp(); 	
				$("#two").slideUp(); 	
				$("#four").slideUp();
				break;
			case 4:
				$("#Landing-page").slideUp();
				$("#four").slideDown();
				$("#one").slideUp(); 	
				$("#two").slideUp(); 	
				$("#three").slideUp(); 	
				break;
		}
	});
});