
$(document).ready(function(){

// $("#work").on("click", function(){
//     $.getJSON('https://api.unsplash.com/users/chadpeltola/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
//     ).done(function(data) {
    
//         // console.log(data)
    
            for (var i=0; i<3; i++){
                var ig = $("<img id='nature'>");
            
                ig.attr("src", "images/555_"+i+".jpg");
            
            $("#viewer1").append(ig);
           

            }


            for (var j=3; j<6; j++){
                
                var ige = $("<img id='mount'>");

                ige.attr("src", "images/555_"+j+".jpg");

            $("#viewer2").append(ige);

            }

            for (var k=6; k<9; k++){
                
                var igp = $("<img id='dount'>");

                igp.attr("src", "images/555_"+k+".jpg");

            $("#viewer3").append(igp);

            }
        
//     }); //json function

// }) //event listener
}); //ready function

