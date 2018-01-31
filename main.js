$(function () {
    
    var link = $('a[data-toggle="modal"]');
    link.on('click', function (event) {
        var work = $(this).attr('data-work');
        var modal = $('.modal');
        modal.find('.modal-body').load(work + '.html');
    });
});

$(document).ready(function(){
  
    $(".my-works").on("click","a", function(event){
        event.preventDefault();
        var id = $(this).attr('href'),
            top =$(id).offset().top;
        $('body,html').animate({scrollTop: top},500);  
    }); 
});