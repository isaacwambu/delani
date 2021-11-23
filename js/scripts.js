$(document).ready(function(){
    $(".service1 img").click(function(){
        $(".show").toggle();
        $(".hidden").toggle();
        
    });
    $(".service1 p").click(function(){
        $("#hidden").toggle();
        $("#show").toggle();
        
        
    });
});