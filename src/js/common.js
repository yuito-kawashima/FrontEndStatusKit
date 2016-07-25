console.log('hoge');

$('.jsc-text1').on('change', function(){
    $.cookie($(this).attr('name'), $(this).val());
});
$('.jsc-text2').on('change', function(){
    $.cookie($(this).attr('name'), $(this).val());
});
$('.jsc-text3').on('change', function(){
    $.cookie($(this).attr('name'), $(this).val());
});

$('.jsc-text-write1').val($.cookie('name'));
$('.jsc-text-write2').val($.cookie('birthday'));
$('.jsc-text-write3').val($.cookie('like'));