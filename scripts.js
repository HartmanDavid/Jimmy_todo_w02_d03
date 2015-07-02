$('.glyphicon-star').on('click',function(){
$(this).toggleClass('active');
});

$('.glyphicon-remove').on('click', function(){
$(this).parents('p').remove();
});

$('button.btn').click(function(noClick){
  noClick.preventDefault();
  var addison = $('#todo').val();
     console.log('im awesome!');
$(".list").append('<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + addison +'</span><i class="glyphicon glyphicon-remove"></i></p>');
 });
