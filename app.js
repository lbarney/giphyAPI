$(function(){

	$("#subButton").on('click', function (){
		var search = $("#inputText").val();
		$(".gifList").empty();
		$.ajax({
			method: "GET",
			url: "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC"
		}).done(function(response){
      		console.log(response.data);
      		for(var i = 0; i < response.data.length; i++){
      		 var pic = response.data[i].images.downsized.url;
      		 console.log(pic);
			$(".gifList").append("<img src= " + pic + ">");
      		};
		});
	});
});
