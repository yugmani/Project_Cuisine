
$(document).ready(function(){

$("#work").on("click", function(){
    $.getJSON('https://api.unsplash.com/users/chadpeltola/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
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
        
    }); //json function

}) //event listener
}); //ready function

