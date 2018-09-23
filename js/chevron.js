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
		var slideDownID = $(this).data("item");

        //sets active class on click
		$(".chevronLink").removeClass("active");
        $(this).addClass("active");

		switch(slideDownID){
            case 1:
				$("#one").slideDown();
                $("#Landing-page").slideUp();
				$("#two").slideUp(); 	
				$("#three").slideUp(); 	
				$("#four").slideUp();
				break;
			case 2:
				$("#two").slideDown();
                $("#Landing-page").slideUp();
				$("#one").slideUp(); 
				$("#three").slideUp(); 	
				$("#four").slideUp();
				break;
			case 3:
				$("#three").slideDown();
                $("#Landing-page").slideUp();
                $("#one").slideUp();
				$("#two").slideUp(); 	
				$("#four").slideUp();
				break;
			case 4:
				$("#four").slideDown();
                $("#Landing-page").slideUp();
				$("#one").slideUp(); 	
				$("#two").slideUp(); 	
				$("#three").slideUp(); 	
				break;
			default://scrolls and returns to landing page
                $("#Landing-page").slideDown();
                $("#one").slideUp();
                $("#two").slideUp();
                $("#three").slideUp();
                $("#four").slideUp();
                break;
		}
		
		$("html, body").animate({ scrollTop: 0 }, 500);
	});
});