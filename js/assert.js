

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