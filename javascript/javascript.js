$(document).ready(function(){


    //from viewwork.js
    // $("#work").on("click", function(){
        $.getJSON('https://api.unsplash.com/users/chadpeltola/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
        ).done(function(data) {
        
            // console.log(data)
        
                for (var i=0; i<4; i++){
                    var ig = $("<img id='nature'>");
                
                    ig.attr("src", data[i].urls.small);
                
                $("#viewer1").append(ig);
                if (i===2) {
                    ig.css("transform", 'rotate(45deg)');
                } 
    
                }
    
    
                for (var j=4; j<8; j++){
                    
                    var ige = $("<img id='mount'>");
    
                    ige.attr("src", data[j].urls.small);
                        
                $("#viewer2").append(ige);
                if (j===4) {
                    ige.css("transform", 'rotate(15deg)');
                }
    
                }
            
        }); //json function
    
    // }) //event listener


    //from people.js
    
    $.getJSON('https://api.unsplash.com/users/spaceboy/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
    ).done(function(data) {
    
        // console.log(data)
    
            for (var i=0; i<4; i++){
                var ig = $("<img id='nature'>");
            
                ig.attr("src", data[i].urls.small);
            
            $("#viewer3").append(ig);
           

            }


            for (var j=4; j<8; j++){
                
                var ige = $("<img id='mount'>");

                ige.attr("src", data[j].urls.small);

            $("#viewer4").append(ige);

            }

            for (var k=8; k<11; k++){
                
                var igp = $("<img id='mount'>");
                if (k===10) {
                    igp.attr("src", "images/steve-johnson-ReKQ1hyw640-unsplash.jpg");
                }
                else {
                    igp.attr("src", data[k].urls.small);
                }
                

            $("#viewer5").append(igp);

            }
        
    }); //json function


    //from loftrentals.js

    for (var i=0; i<3; i++){
        var ig = $("<img id='nature'>");
    
        ig.attr("src", "images/555_"+i+".jpg");
    
    $("#viewer6").append(ig);
   

    }


    for (var j=3; j<6; j++){
        
        var ige = $("<img id='mount'>");

        ige.attr("src", "images/555_"+j+".jpg");

    $("#viewer7").append(ige);

    }

    for (var k=6; k<9; k++){
        
        var igp = $("<img id='dount'>");

        igp.attr("src", "images/555_"+k+".jpg");

    $("#viewer8").append(igp);

    }


    //from install.js

    $.getJSON('https://api.unsplash.com/users/zoltantasi/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
    ).done(function(data) {
    
        // console.log(data)
    
            for (var i=0; i<4; i++){
                var ig = $("<img id='nature'>");
            
                ig.attr("src", data[i].urls.small);
                ig.css("width", '150px');
                ig.css("height", '150px');
            $("#viewer9").append(ig);
            if (i===1) {
                ig.css("transform", 'rotate(45deg)');
            } 

            }


            for (var j=4; j<8; j++){
                
                var ige = $("<img id='mount'>");

                ige.attr("src", data[j].urls.small);

            $("#viewer10").append(ige);
            if (j===6) {
                ige.css("width", '150px');
                ige.css("height", '200px');
                ige.css("margin", '30px');
            }
            if (j===7||j===4) {
                ige.css("transform", 'rotate(20deg)');
            }
           
            }
        
    }); //json function

    

    //from caopen.js
$("#work").on("click", function(){
    $.getJSON('https://api.unsplash.com/users/chadpeltola/photos/?client_id=e40483b63b8c09213062826d7ae055bda70dca783fe5588bc641c3720cbf2e31'
    ).done(function(data) {
    
        // console.log(data)
    
            for (var i=0; i<4; i++){
                var ig = $("<img id='nature'>");
            
                ig.attr("src", data[i].urls.small);
            
            $("#viewer11").append(ig);
           

            }


            for (var j=4; j<8; j++){
                
                var ige = $("<img id='mount'>");

                ige.attr("src", data[j].urls.small);

            $("#viewer12").append(ige);

            }
        
    }); //json function

}) //event listener



//from arrival.js
var img = $("<img id='solo'>");
img.attr("src", "images/prayashart35.jpeg");
$("#firstImage").append(img);

// $("#firstImage").on("click", function(){
for (var i=0; i<3; i++){   
var im = $("<img id='more'>");
   
   im.attr("src", "images/prayashart"+i+".jpeg");
   $("#foto").append(im);

}

for (var j=3; j<6; j++){   
   var imd = $("<img id='core'>");
      
      imd.attr("src", "images/prayashart"+j+".jpeg");
      $("#fotos").append(imd);


   }




}); //ready function
    