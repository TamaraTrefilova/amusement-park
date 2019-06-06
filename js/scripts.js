$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    $(".short, .tall, .xtall").hide();
    var height = parseInt($("input#height").val());
    // alert(height);
    if (height < 36) {
      $(".short").show();
    } else if (height >= 36 && height < 78) {
      $(".tall").show();
    } else {
      $(".xtall").show();
    }
  });
});
