(function () {
    document.addEventListener('DOMContentLoaded', function () {
        countRem();
    }, false);
})();
window.onresize = function(){
    countRem();
}
function countRem(){
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    html.style.fontSize = windowWidth / 19.2 + 'px';

    $(".body").css({opacity:1,filter:'alpha(opacity=100)'});
}



