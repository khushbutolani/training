$(document).ready(function(){
    
    $(".btn").click(function(){
        let label=$("#btn").val();
        if(label=="hide"){ 
        $("#sec1").hide();
        $(".btn").html("show");
        }
    });
    
     $(".btn1").click(function(){
          let label=$("#btn").val();
        if(label=="show"){ 
         
        $("#arc").show(1000, function(){
            
            $(".btn1").html("show");
        });
    });
    
  
    
    
    
});
 