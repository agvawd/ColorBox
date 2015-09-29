$(document).ready(function(){
	$("#colorList").change(function(){
    	if($("option:selected").text() === "Select one..."){
    		$(".color").slideUp();
    	}
    	else{
        	$(".color").removeClass().addClass("color");
	        $(".color").addClass($(this).val());
	        $(".color").slideDown();
    	}
    });               
});