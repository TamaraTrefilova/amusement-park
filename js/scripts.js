$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    $(".short, .tall, .xtall").removeClass("color");
    var height = parseInt($("input#height").val());
    // alert(height);
    if (height < 36) {
      $(".short").addClass("color");
    } else if (height >= 36 && height < 78) {
        $(".tall").addClass("color");
    } else {
      $(".xtall").addClass("color");
    }
  });
});
