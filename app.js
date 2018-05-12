//Your API Key: 123505c92c0aef5554769fafd2130295

$(function(){

    var apiKey = "123505c92c0aef5554769fafd2130295";
    var location;

    $(document).on("click", ".btn", function(){
        $("#map").empty();
        location = ($("#city").val().trim() + "," + $("#state").val().trim());
        $("#city").val("");
        $("#state").val("");  
        var queryUrl = "http://beermapping.com/webservice/loccity/" + apiKey + "/" + location + "&s=json"; 
        // console.log("location: " + location);
        // console.log(queryUrl);
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response){
            // console.log(response[0].blogmap);
            var newMap = $("<iframe>");
            newMap.attr("src", response[0].blogmap);
            $("#map").append(newMap);
        });
    }); 
});