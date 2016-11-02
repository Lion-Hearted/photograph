var currentNum = 0;
var totalNum;
var interval;

function showNext(num) {
    var imgObjs = document.getElementsByClassName('banner')[0].getElementsByTagName('img');
    var spanObjs = document.getElementsByClassName('banner')[0].getElementsByTagName('span');
    imgObjs[currentNum].className = "preImg";
    spanObjs[currentNum].className = "preSpan";
    currentNum = (currentNum + 1 == totalNum) ? 0 : currentNum + 1;
    if (num != null || num != undefined) {
        currentNum = num;
    }
    imgObjs[currentNum].className = "currentImg";
    spanObjs[currentNum].className = "currentSpan";
}
window.onload = function() {
    // $('.navbar .active').find('a').css('background', 'rgba(8,8,8,.2)');
    interval = setInterval("showNext()", 2000);
    var imgObjs = document.getElementsByClassName('banner')[0].getElementsByTagName('img');
    var spanObjs = document.getElementsByClassName('banner')[0].getElementsByTagName('span');
    totalNum = imgObjs.length;
    for (var i = 0; i < imgObjs.length; i++) {
        imgObjs[i].onmouseover = function() {
            clearInterval(interval);
        };
        imgObjs[i].onmouseout = function() {
            interval = setInterval("showNext()", 2000);
        };
        spanObjs[i].onclick = function() {
            clearInterval(interval);
            interval = showNext(parseInt(this.getAttribute('datanum')) - 1);
        };

    };
    pages();
    onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 470) {
            $('nav').css('background', '#222');
            $('.navbar .active').find('a').css('background', '#080808');
        } else {
            $('nav').css({ 'background': 'rgba(34,34,34,.2)', 'border': 'rgba(34,34,34,.2)' });
            $('.navbar .active').find('a').css('background', 'rgba(8,8,8,.2)');
        }
        if (scrollTop >= 850 && scrollTop <= 1200)
            $('.icon_scroll>div').addClass('aaa');
        else
            $('.icon_scroll>div').removeClass('aaa');
        if (scrollTop >= 1300 && scrollTop <= 1700)
            $('.index_style ul').addClass('aaa');
        else
            $('.index_style ul').removeClass('aaa');
    };

}

function pages() {
    $('.banner_pages .right .img').bind('click', function() {
        $(this).siblings().children('.before').removeClass('trf');
        $(this).children('.before').addClass('trf');
        console.log($(this).nextAll());
        console.log($(this).nextAll().size());
        if ($(this).nextAll().size()) {
            if (!$(this).next().hasClass('trf')) {
                $(this).nextAll().addClass('trf');
            } else {
                $(this).next().prevAll().removeClass('trf');
            }
        } else {
            if ($(this).hasClass('trf')) {
                $(this).parent().children().removeClass('trf');
            } else {
                $(this).addClass('trf');
            }
        }
    })
}
