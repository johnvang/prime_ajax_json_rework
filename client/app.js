$(document).ready(function() {

    $.ajax({
        url:"/getColors"
    }).done(function(response){
        console.log(response);
        for(var it=0; it<response.length; it++){
            var $content = $("<div><p style='color:" + response[it].value + "' >color: " + response[it].color + "<br>" + "value: " + response[it].value + "</p></div><br>");
            $(".content-placeholder").append($content);
        }
    })

});