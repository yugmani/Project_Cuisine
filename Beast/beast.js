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


}); //ready function