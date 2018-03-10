
$(document).ready(function () {


    function assertTrue(expression,context){
        if(expression){
            context.append(
                $(document.createElement('p'))
                    .text('Assertion Success')
                    .css({border : '2px solid blue', color: 'white', backgroundColor : 'blue'}));
        }else {
            context.append(
                $(document.createElement('p'))
                    .text('Assertion Fail')
                    .css({border: '2px solid red',color: 'white', backgroundColor : 'red'}));
        }
    }

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

    var $c1_17 = $('#c1_17');
    var $lastPEl = $c1_17.find('p:last');

    var lengthWithoudEnd = $c1_17.find('p').filter(':not(:last)').filter('.middle').length;
    var lengthWithEnd = $c1_17.find('p').filter(':not(:last)').filter('.middle').end().length;
    var lengthFromSpan = $c1_17.find('p').find('.middle').find('span').end().end().end().length;
    $lastPEl
        .text( $lastPEl.text() + ' length without end() : '+lengthWithoudEnd );
    $lastPEl.text( $lastPEl.text() + ' length with end() : '+lengthWithEnd);
    $lastPEl.text( $lastPEl.text() + ' length from span by end() : '+lengthFromSpan);

    var $c1_19 = $('#c1_19');
    var $resultEl = $c1_19.find('.result');

    assertTrue( $c1_19.find('p:eq(1)').text() === 'Paragraph 2' ,$resultEl);
    assertTrue( $c1_19.find('p:eq(1)').prev().text() === 'Paragraph 1' ,$resultEl);
    assertTrue( $c1_19.find('p:eq(1)').parent()[0] == $c1_19.find('.col-6')[0] ,$resultEl);
    assertTrue( $c1_19.find('p:eq(1)').nextAll().length == 4,$resultEl);
    assertTrue( $c1_19.find('p:eq(1)').prevAll().length == 1,$resultEl);

    var $c1_20 = $('#c1_20');
    $resultEl = $c1_20.find('.result');

    var $newEl = $('<p><a>JQuery</a></p>')
        .find('a').attr('href','http://api.jquery.com/').end();

    $c1_20.prepend($newEl);

    // $('<p><a>JQuery</a></p>')
    //     .find('a').attr('href','http://api.jquery.com/')
    //     .end().prependTo($c1_20);

    assertTrue($c1_20.find('p a').length === 1,$resultEl);

    var $c1_21 = $('#c1_21');
    $resultEl = $c1_21.find('.result');
    // $c1_21.find('a').remove();
    // assertTrue($c1_21.find('a').length === 0,$resultEl);

    $c1_21.find('a').remove('.wantRemove');
    assertTrue($c1_21.find('a.wantRemove').length === 0,$resultEl);
    assertTrue($c1_21.find('a').length !== 0,$resultEl);

    var $c1_22 = $('#c1_22');
    $resultEl = $c1_22.find('.result');

    $c1_22.find('button').on('click',function () {
        //$(this).replaceWith('<p class="alert alert-primary" style="text-align: center">Replaced</p>')
        $('<p class="alert alert-primary" style="text-align: center">'+$(this).text()+'</p>').replaceAll($(this));
        assertTrue($c1_22.find('p').length === 1,$resultEl);
    });


    var $c1_23 = $('#c1_23');

    $c1_23.find('li').on('click',function () { console.log('Clicked!'); })

    $c1_23.find('button#copyOnlyElement').click('on',function () {
        var copiedList = $c1_23.find('ul').clone().hide();
        $c1_23.after(copiedList,$c1_23.find(':last'));
        copiedList.animate({
            height : 'toggle',
            opacity : 'toggle'
        })
    });
    
    $c1_23.find('button#copyWithEvent').click('on',function () {
        var copiedList = $c1_23.find('ul').clone(true).hide();
        $c1_23.after(copiedList,$c1_23.find(':last'));
        copiedList.animate({
            height : 'toggle',
            opacity : 'toggle'
        })
    });

    var $c1_24 = $('#c1_24');
    $resultEl = $c1_24.find('.result');

    $c1_24.find('button').on('click',function () {
        var hrefAttr = 'http://www.jquery.com';
        var $anchorEl = $c1_24.find('a');
        // $anchorEl.attr('href',hrefAttr).text('JQuery');
        $anchorEl.attr({href : hrefAttr, title: 'jquery.com' }).text('JQuery');
        assertTrue($c1_24.find('a').attr('href') === hrefAttr,$resultEl);
        assertTrue($c1_24.find('a').attr('title') === 'jquery.com',$resultEl);
    });

    var $c1_25 = $('#c1_25');
    $resultEl = $c1_25.find('.result');

    $c1_25.find('button').on('click',function () {
        $c1_25.find('p').html('<strong>Hello JQUERY!</strong> <em>Greeting!</em>');
    })
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
