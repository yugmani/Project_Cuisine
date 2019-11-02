
$(document).ready(function(){

// $("#work").on("click", function(){
    $.getJSON('https://api.unsplash.com/users/spaceboy/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
    ).done(function(data) {
    
        // console.log(data)
    
            for (var i=0; i<4; i++){
                var ig = $("<img id='nature'>");
            
                ig.attr("src", data[i].urls.small);
            
            $("#viewer1").append(ig);
           

            }


            for (var j=4; j<8; j++){
                
                var ige = $("<img id='mount'>");

                ige.attr("src", data[j].urls.small);

            $("#viewer2").append(ige);

            }

            for (var k=8; k<11; k++){
                
                var igp = $("<img id='mount'>");
                if (k===10) {
                    igp.attr("src", "images/steve-johnson-ReKQ1hyw640-unsplash.jpg");
                }
                else {
                    igp.attr("src", data[k].urls.small);
                }
                

            $("#viewer3").append(igp);

            }
        
    }); //json function

// }) //event listener
}); //ready function

