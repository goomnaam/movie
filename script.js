$(function(){
    $(".next2-in").slideUp();
    $(".next").slideUp();
    $(".collapsem").slideUp();
     $("#menu-links ul").slideUp();
    $("input").slideUp();
    $("#btn-toggle").click(function(){
        $("#menu-links ul").slideToggle();
        
        
        
    })
    
    $("#us").click(function(){
        alert('it is a secret, we are anonymous 😂😂 😎😎');
    })
    
     $("#animylase").click(function(){
        alert('Work under progress, please wait for sometime 😎😎');
    })
    
     $("#search-toggle").click(function(){
         $("input").animate({width : 'toggle'},500);
     })
    
//     $("#read-toggle").click(function(){
//         $(this).css("display", "none");
//         $(".collapsem").animate({height : 'toggle'},500);
//         $("#read-toggle1").css("display", "block");
//     })
//    
//    $("#read-toggle1").click(function(){
//        $("#read-toggle1").css("display", "none");
//        $("#read-toggle").css("display", "block");
//        $(".collapsem").slideUp();
//    })
    
$('#search').keyup(function(){  
                 $(".bigb").show();
                  search_table($("input:text").val());
                $(".slideshow").show();
           }); 
    
           function search_table(value){  
                $('h1').each(function(){  
                     var found = 'false';   
                          if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                          {  
                               found = 'true';  
                          }  
                      
                     if(found == 'true')  
                     {  
                          $(this).parent().parent().parent().parent().show();  
                     }  
                     else  
                     {  
                          $(this).parent().parent().parent().parent().hide();
                         $(".bigb").hide();
                         $(".slideshow").hide();
                     }  
                });  
           }
    
    
    
    
    $(".db").click(function(){
     //   $(this).parent().children().nextUntil(".db").parent().children().next().parent().children().next().animate({height : 'toggle'},500);
     console.log("clicked");
        
     })
    
     $(".wb").click(function(){
       $(this).parent().children().nextUntil(".wb").children().animate({height : 'toggle'},500);
        
     })
    
    
   

//$(this).parent().children().next(".wb").next


    
    
    
   
});