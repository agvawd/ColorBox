$(document).ready(function(){
    // $("#colorList").change(function(){
    // 	if($("option:selected").text() === "Select one..."){
    // 		$(".color").slideUp();
    // 	}
    // 	else{
    //     	$(".color").removeClass().addClass("color");
	   //      $(".color").addClass($(this).val());
	   //      $(".color").slideDown();
    // 	}
    // });   

    $("#colorList").change(function(){
        if($("option:selected").text() === "Select one..."){
            $(".color").slideUp();
        }
        else{
            // $(".color").removeClass().addClass("color");
            console.log($(this).val());
            $(".color").css('background', $(this).val());
            $(".color").slideDown();
        }
     })            
});