var params = {};


$("#top_search").on("click", function() {
    console.log("clicked")
var inputVal1 =  $("#i1").val()
if(inputVal1 !== ""){
    params.q = inputVal1;
    console.log(params.q)
}
var inputVal2 =  $("#i2").val()
if(inputVal2 !== ""){
    params.begin_date = inputVal2;
}
var inputVal3 =  $("#i3").val()
if(inputVal3 !== ""){
    params.end_date = inputVal3;   
}
var paramStr = $.param(params);
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=CWG7ES6D6GZGrHVove93rrN5nvm591gA" + paramStr;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    var results = response.data.docs;
    var $title = $("<div>");
    var $description = $("<div>");
    var $url = $("<div>");
    var $bigDiv = $("<div>");
    for(var i = 0; i < userResponse; i++){
        $title.text(results[i].headline[0]);
        $description.text(results[i].snippet);
        $url.text(results[i].web_url);
        $bigDiv.append($title);
        $bigDiv.append($description)
        $bigDiv.append($url);
        $("#results").append($bigDiv);
    }
});
});


