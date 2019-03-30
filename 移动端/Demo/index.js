var iNow=1;
$(document).on('swipeUp',function(){
    if(iNow==$('#container div').length){
        return false;
    }
    $('.page-'+iNow).attr('class','page-'+iNow+' moveToTop');
    $('.page-'+(iNow+1)).attr('class','page-'+(iNow+1)+' moveFromBottom');
    $('.page-'+(iNow+1)).children().hide();
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().show();
        iNow++;
    },600);
})
$(document).on('swipeDown',function(){
    if(iNow==1){
        return false;
    }
    $('.page-'+iNow).attr('class','page-'+iNow+' moveToBottom');
    $('.page-'+(iNow-1)).attr('class','page-'+(iNow-1)+' moveFromTop');
    $('.page-'+(iNow-1)).children().hide();
    setTimeout(function(){
        $('.page-'+(iNow-1)).children().show();
        iNow--;
    },600);
})
