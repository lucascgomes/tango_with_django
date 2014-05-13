$(document).ready(function() {



});

$('#likes').click(function(){
        var catid;
        catid = $(this).attr("data-catid");
         $.get('/rango/like_category/', {category_id: catid}, function(data){
                   $('#like_count').html(data);
                   $('#likes').hide();
               });
});

$('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
         $('#cats').html(data);
        });
});

$('button.add_all_content').click(function(){
        var catid;
        var s_url;
        var s_title;
        catid = $(this).attr("data-catid");
        s_url = $(this).attr("data-url");
        s_title = $(this).attr("data-title");
         $.get('/rango/auto_add_page/', {'category_id': catid, 'url': s_url, 'title': s_title}, function(data){
                   $('#add_site').html(data);
         });
         $(this).first().hide();
});
