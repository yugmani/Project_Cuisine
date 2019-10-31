$(document).ready(function() {


   var img = $("<img id='solo'>");
   img.attr("src", "images/art4.jpeg");
   $("#firstImage").append(img);

   // $("#firstImage").on("click", function(){
   for (var i=0; i<3; i++){   
   var im = $("<img id='more'>");
      
      im.attr("src", "images/art"+i+".jpeg");
      $("#foto").append(im);


   }
//    for (var j=3; j<6; j++){   
//       var imd = $("<img id='core'>");
//          
//          imd.attr("src", "images/pencil/prayashart"+j+".jpeg");
//          $("#fotos").append(imd);
   
   
//       }
   // }); //event listener


}); //ready function