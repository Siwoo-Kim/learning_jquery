
$(document).ready(function () {
   var $cIntroBtns = $('#c0_intro .btn-success').hide();
   // $cIntroBtns.hide();
   // $cIntroBtns.text('New Content');
   // $cIntroBtns.addClass('updatedContent');
   // $cIntroBtns.slideToggle(800);

    // $cIntroBtns.hide()
    //     .text('New Content')
    //     .addClass('updatedContent')
    //     .slideToggle(800);
    //
     console.log($.fn.jquery);

     $cIntroBtns.each(function (index) {
         //console.log(index);
         $(this).hide()
             .text('New Content '+index)
             .slideToggle(800);
     });

     $cIntroBtns.filter(':last')
         .append( $(document.createElement('p')).text($.fn.jquery).css({
             color : 'red'
         }) );

     var $anchorEl = $('#c1_13').find('a');
     var $summaryEl1 = $('#c1_13').find('.summary');
     $summaryEl1.text( $summaryEl1.text() + ' : ' +$anchorEl.length + ' elements!');

     var $c1_14El = $('#c1_14');
     var $summaryEl2 = $c1_14El.find('.summary');

     var $inputsInForms = $('input:text',$c1_14El.find('form'));
     var $inputsInFirstForm = $('input:text',document.forms[0]);
     var $allInputs = $('input:text','body');

     $summaryEl2
         .append(
         $($(document.createElement('p')).text('Inputs in form tags '+$inputsInForms.length+' elements!')))
         .append(
             $($(document.createElement('p')).text('Inputs in first form tag '+$inputsInFirstForm.length+' elements!')))
         .append(
             $($(document.createElement('p')).text('Inputs in all tag '+$allInputs.length+' elements!')))

     var $alertEl = $('#c1_15').find('p');

     // $alertEl.filter(':not(.alert-light)')
     //     .animate({
     //         opacity : 'toggle',
     //         height : 'toggle',
     //     },800);

    $alertEl.filter(function (index) {
        return index != 3 &&  !$(this).hasClass('alert-light');
    }).animate({
        opacity : 'toggle',
        height : 'toggle'
    });

    var $paraEl = $('#c1_16 p.summary');
    var prevText = $paraEl.text();
    //$paraEl[0].innerText = prevText + ' '+$paraEl.find('em').length+' elements! ';
    $paraEl.text( prevText + ' '+$('#c1_16 p:first').find('em').length+' elements! ');
});

/*
$(document).ready(function () {

// var $btnSuccessEl = $('.btn-success');
// $btnSuccessEl.hide();
// $btnSuccessEl.text('New Content');
// $btnSuccessEl.addClass('updatedContent');
// $btnSuccessEl.slideToggle(800);

    var $btnSuccessEl = $('#c0_intro').find('.btn-success');
//
// $btnSuccessEl.hide()
//     .addClass('updatedContent')
//     .slideToggle(800);

    $btnSuccessEl.each(function () {
        $(this).hide()
            .addClass('updatedContent')
            .slideToggle(800);
    });

    console.log('Jquery version : '+$.fn.jquery);

    $btnSuccessEl
        .filter(':last')
        .append($(document.createElement('p')).text($.fn.jquery));

    var $linkEl = $('#c1_13').find('a');
    console.log($linkEl.length);
    $('.summary','#c1_13')
        .text($('.summary','#c1_13').text() + $linkEl.length+' <a> elements! ');

    var $inputsInWrapper = $('input:text',$('#c1_14 form'));
    var $inputsInFirstForm = $('input:text',document.forms[0]);
    var $inputsNotInsideForm = $('input:text','#c1_14');

    $('#c1_14 .summary').append('Inputs in form wrapper '+$inputsInWrapper.length+'<br>');
    $('#c1_14 .summary').append('Inputs in first form '+$inputsInFirstForm.length+'<br>');
    $('#c1_14 .summary').append('Inputs in #c1_14 '+$inputsNotInsideForm.length+'<br>');

    var $c1_15El = $('#c1_15');

    // $c1_15El.find('p').filter(':not(.alert-light)')
    //     .hide()
    //     .animate({
    //         height: 'toggle',
    //         opacity: 'toggle',
    //     });

    $c1_15El.find('p').filter(function (index) {
        return !$(this).hasClass('alert-light');
    }).animate({
        height: 'toggle',
        opacity: 'toggle',
    });

    var $c1_16 = $('#c1_16');
    var text = $c1_16.find('.summary').text();
    $c1_16.find('.summary').text( text + ' '+ $c1_16.find('> p > em').length+ ' elements');


});
*/
