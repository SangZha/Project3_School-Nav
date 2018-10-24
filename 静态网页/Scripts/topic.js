    $('.userinfo-useropinion-span').click(function(){
        var id = $(this).data('id');
        var elm = $('.replies-list-li[data-id=' + id + ']');
        var elm_offset = elm.offset().top;
        elm.removeClass('pulse');
        $('html,body').animate({scrollTop: ''+elm_offset+'px' }, 1000);	
        elm.addClass('pulse');
    });

    $('.replies-replybox').click(function(){
        $(this).addClass('active')
       
        $('.replies-postbox').animate({
            height:'show',
        },500)
    });

    $('.container-close-box').click(function(){
        $('.replies-postbox').animate({
            height:'hide',
        },500)
        $('.replies-replybox').removeClass('active')
    });