
(function ($) {

    var $c = $('#c21');
    var $result = $c.find('.result');
    var $selectedEl = $c.find('nav > a');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.length === 2 , $result);
    var $childrensEl = $c.children();
    assertTrue($childrensEl.length === $('> *',$c).length, $result );

    $c = $('#c22');
    $result = $c.find('.result');
    $selectedEl = $c.find('nav > a:first + a');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.length === 1 ,$result);
    assertTrue($selectedEl.text() === 'Anchor 2' ,$result);
    $selectedEl = $c.find('nav > a:first + p');
    assertTrue($selectedEl[0] === undefined,$result);
    $selectedEl = $c.find('nav > a:first').siblings();
    assertTrue($selectedEl.length === $c.find('nav a').length - 1,$result);
    //$selectedEl = $c.find('ul > li:eq(2)').nextAll();
    $selectedEl = $c.find('ul > li:eq(2) ~ li');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.length === 2,$result);

    $c = $('#c23');
    $result = $c.find('.result');
    //$selectedEl = $c.find('li:eq(1)');
    //$selectedEl = $c.find('li:first + li');
    //$selectedEl = $c.find('li:lt(2):last');
    $selectedEl = $c.find('li:eq(-2)');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.text().indexOf('2') > 0 ,$result);
    $selectedEl = $c.find('tr:even');
    $selectedEl.addClass('selected');
    assertTrue($c.find('tr.selected').length === 2,$result);

    $c = $('#c24');
    $result = $c.find('.result');
    $c.find('button').on('click',function () {
        $(this).slideToggle('slow');
        assertTrue($(this).is(':animated'),$result);
        assertTrue($c.find('button:animated').length === 1,$result);
        $(this).slideToggle('slow');
    });

    $c = $('#c25');
    $result = $c.find('.result');
    //$c.find('li:contains("3")').addClass('selected');
    $selectedEl = $c.find('li').filter(function () {
        return /(^|\s)([369])($|\s)/.test($(this).text());
    }).addClass('selected');
    assertTrue($selectedEl.text()==='3' && $selectedEl.hasClass('selected'),$result);
    $selectedEl = $c.find('li:has(span)').addClass('selected');
    assertTrue($selectedEl.find('span').length === 1 && $selectedEl.hasClass('selected'),$result);

    $c = $('#c26');
    $result = $c.find('.result');
    $c.find('button').on('click',function () {
        var $btn = $(this);
        $btn.addClass('active');
        $btn.removeClass('selected');
        var index = $c.find('button').index($btn);

        $c.find('button:not(:eq('+index+'))').removeClass('active');
        $c.find('button:not(.active)').addClass('selected');
        assertTrue($c.find('button:not(.active)').length === 3,$result);
    });

    $c = $('#c27');
    $result = $c.find('.result');
    $c.find('button').on('click',function () {
        var $hiddenBtn = $c.find('button:hidden')
            .removeClass('hidden')
            .hide();
        $hiddenBtn.animate({
            opacity : 'toggle',
            height : 'toggle'
        },'slow');

        $(this).addClass('hidden');
        assertTrue(!$(this).is(':visible'),$result);
    });

    $c = $('#c28');
    $result = $c.find('.result');

    assertTrue($c.find('a:not([href])').text() === 'Anchor 1',$result);
    assertTrue($c.find('a[href="#"]').text() === 'Anchor 2',$result);
    assertTrue($c.find('button[disabled]').text() === 'Anchor 3',$result);
    $selectedEl = $c.find('button[disabled]');
    $selectedEl.replaceWith($('<a class="btn btn-primary">'+ $selectedEl.text()+'</a>'));
    assertTrue($c.find('a').length === 3,$result);

})(jQuery);

/*

(function ($) {

    var $c = $('#c21');
    var $result = $c.find('.result');
    var $anchors = $c.find('nav > a');
    var $childrens = $c.children();
    //console.log($childrens);
    assertTrue($anchors.length === 2,$result);
    assertTrue($childrens.length === $c.find('> *').length,$result);

    $c = $('#c22');
    $result = $c.find('.result');
    $siblings = $c.find('nav > a:first + a');
    assertTrue($siblings.text() === 'Anchor 2',$result);
    $siblings = $c.find('nav > a:first + p');
    assertTrue($siblings.length === 0,$result);
    $siblings = $c.find('nav > a:first').siblings();
    assertTrue($siblings.length === 2,$result);

    // var $afterThirdEl = $c.find('ul li:eq(2)').nextAll('li');
    var $afterThirdEl = $c.find('ul li:eq(2) ~ li');
    $afterThirdEl.addClass('selected');
    assertTrue($afterThirdEl.length === 2,$result);

    $c = $('#c23');
    $result = $c.find('.result');
    //var $selectedEl = $c.find('li:eq(1)');
    //var $selectedEl = $c.find('li:first + li');
    //var $selectedEl = $c.find('li:lt(2):last');
    var $selectedEl = $c.find('li:eq(-2)');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.find('> a').text() === 'Anchor 2',$result);

    $selectedEl = $c.find('table tr:even');
    $selectedEl.addClass('selected');
    assertTrue($selectedEl.length === 2,$result);

    $c = $('#c24');
    $result = $c.find('.result');

    $c.find('button:even').on('click',function () {
        $(this).slideToggle('slow');
        assertTrue($c.find('button:animated').length === 1,$result);
        assertTrue($(this).is(':animated'),$result);
        $(this).slideToggle('slow');
    });


    $c = $('#c25');
    $result = $c.find('.result');

    //$c.find('li:contains("3")').addClass('selected');
    $c.find('li').filter(function () {
        return /(\s|^)([39])(\s|$)/.test($(this).text());
    }).addClass('selected');
    $c.find('li:has(span)').addClass('selected');
    assertTrue($c.find('li:eq(0)').hasClass('selected'),$result);
    assertTrue($c.find('li:eq(2)').hasClass('selected'),$result);


    $c = $('#c26');
    $result = $c.find('.result');

    $c.find('button').on('click',function () {
        $(this).addClass('active');
        $(this).removeClass('selected');
        var index = $c.find('button').index($(this));
        $c.find('button:not(:eq('+index+'))').removeClass('active');
        $c.find('button:not(.active)').addClass('selected');
        assertTrue($c.find('button:not(:eq('+index+'))').length === 3,$result);
    });

    $c = $('#c27');
    $result = $c.find('.result');

    $c.find('button').on('click',function () {
        var $hiddenBtn = $c.find('button:hidden');
        $hiddenBtn.removeClass('hidden');
        $(this).addClass('hidden');
        assertTrue(!$(this).is(':visible'),$result);
    });

    $c = $('#c28');
    $result = $c.find('.result');

    $selectedEl = $c.find('a[href]');
    assertTrue($selectedEl.length === 1,$result);
    assertTrue($selectedEl.text() === 'Anchor 2',$result);
    $selectedEl = $c.find('a:not([href])');
    assertTrue($selectedEl.length === 1,$result);
    assertTrue($selectedEl.text() === 'Anchor 1',$result);
    $c.find('a:not(a[href])').attr('href','http://localhost.com');
    $selectedEl = $c.find('button[disabled]');
    assertTrue($selectedEl.length === 1,$result);
    assertTrue($selectedEl.text() === 'Anchor 3',$result);
    $selectedEl.replaceWith('<a class="btn btn-primary">'+$selectedEl.text()+'</a>');
    assertTrue($c.find('a').length === 3,$result);

})(jQuery);

*/

























