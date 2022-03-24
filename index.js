$("input").keydown(function(event){
  console.log(event.key);
});

$("h1").addClass("big-title margin-50");

// $(document).keydown(function(event){
//   $("h1").html(event.key);
// });

$(document).keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
  $("h1").css("color","green");
});

$("h1").on("click",function(){
  $("h1").css("color","purple");
});
