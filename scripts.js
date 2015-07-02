$('.glyphicon-star').on('click',function(){
$(this).toggleClass('active');
});

$('.glyphicon-remove').on('click', function(){
$(this).parents('p').remove();
});

$('button.btn').click(function(noClick){
  noClick.preventDefault();
     console.log('im awesome!');
$(".list").append('<p><input type="checkbox"><i class="glyphicon glyphicon-star active"></i><span>' + Addison +'</span><i class="glyphicon glyphicon-remove"></i></p>');
 });
