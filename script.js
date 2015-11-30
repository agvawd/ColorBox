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

    // $("#colorList").change(function(){
    //     if($("option:selected").text() === "Select one..."){
    //         $(".color").slideUp();
    //     }
    //     else{
    //         // $(".color").removeClass().addClass("color");
    //         console.log($(this).val());
    //         $(".color").css('background', $(this).val());
    //         $(".color").slideDown();
    //     }
    // })   

    //------- Line is used in the real site --------
    // $("#colorList").live("change", function(){

    $("#colorList").change(function(){
        if($("option:selected").text() === "Select one..."){
            $(".color").slideUp();
        }
        else{
            var hexColor = $(this).find("option:selected").attr("title");
            console.log(hexColor);
            $(".color").css('background', hexColor);
            $(".color").slideDown();
        }
    })             
});