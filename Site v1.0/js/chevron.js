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
		var showID = $(this).data("item")

		console.log($(this).data("item"));	
		switch(showID){
			case 1:
				$("#one").show(); 	
				$("#two").hide(); 	
				$("#three").hide(); 	
				$("#four").hide();
				break;

			case 2:
				$("#one").hide(); 	
				$("#two").show(); 	
				$("#three").hide(); 	
				$("#four").hide();
				break;
			case 3:
				$("#one").hide(); 	
				$("#two").hide(); 	
				$("#three").show(); 	
				$("#four").hide();
				break;
			case 4:
				$("#one").hide(); 	
				$("#two").hide(); 	
				$("#three").hide(); 	
				$("#four").show();
				break;
		}




	})



});