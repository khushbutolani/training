$(document).ready(function(){
    
    $(".btn").click(function(){
        $("#sec1").hide();
        $(".btn").html("show");
    });
    
     $(".btn1").click(function(){
        $("#arc").hide(1000, function(){
            
            $(".btn1").html("show");
        });
    });
    
    $("#btn").click(function(){
        
        $("section").toggle(1000);
    });
    
  
    
    
    
});
