$(document).ready(function(){
    $(".service1 img").click(function(){
        $(".show").toggle();
        $(".hidden").toggle();
        
    });
    $(".service1 p").click(function(){
        $("#hidden").toggle();
        $("#show").toggle();
        
        
    });
    $(".service2 img").click(function(){
        $(".show2").toggle();
        $(".hidden2").toggle();
        
    });
    $(".service2 p").click(function(){
        $("#hidden2").toggle();
        $("#show2").toggle();
        
        
    });
    $(".service3 img").click(function(){
        $(".show3").toggle();
        $(".hidden3").toggle();
        
    });
    $(".service3 p").click(function(){
        $("#hidden3").toggle();
        $("#show3").toggle();
   
    });
});