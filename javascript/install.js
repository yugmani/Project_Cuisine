$(document).ready(function(){

    // $("#work").on("click", function(){
        $.getJSON('https://api.unsplash.com/users/zoltantasi/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
        ).done(function(data) {
        
            // console.log(data)
        
                for (var i=0; i<4; i++){
                    var ig = $("<img id='nature'>");
                
                    ig.attr("src", data[i].urls.small);
                    ig.css("width", '150px');
                    ig.css("height", '150px');
                $("#viewer1").append(ig);
                if (i===1) {
                    ig.css("transform", 'rotate(45deg)');
                } 
    
                }
    
    
                for (var j=4; j<8; j++){
                    
                    var ige = $("<img id='mount'>");
    
                    ige.attr("src", data[j].urls.small);
    
                $("#viewer2").append(ige);
                if (j===6) {
                    ige.css("width", '150px');
                    ige.css("height", '200px');
                    ige.css("margin", '30px');
                }
                if (j===7) {
                    ige.css("transform", 'rotate(45deg)');
                }
    
                }
            
        }); //json function
    
    // }) //event listener
    }); //ready function
    