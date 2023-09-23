$(document).ready(function(){
    $('#add').click(
        function(){
            var toAdd=$('input[name=ListItem]').val();
            $('ul').append('<li>'+toAdd+'</li>')
            $('input').val(' ')
        } )
    $(document).on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
    })
    // $(document).on('dblclick','li',function(){
    //     $(this).fadeOut()
    // })
    $('ul').sortable();
})