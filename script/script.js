window.addEventListener('DOMContentLoaded', function() {

    //Show and hide menu

    $('.menu-panel').animate(
        {
            height: 'toggle'
        }, 1
    )

    $('.menu').on('click', function() {
        $('.menu-panel').animate(
            {
                height: 'toggle'
            }, 500
        )

    })

    //Show and hide pdf-file

    let newsWrap = document.querySelectorAll('.news-wrap')[1],
        showPdf = document.querySelectorAll('.show-file'),
        pdfFile = document.querySelectorAll('.pdf-file');

    
    newsWrap.addEventListener('click', function(e) {
        for (let i = 0; i < showPdf.length; i++) {
            if (e.target == showPdf[i]) {
                if (showPdf[i].innerHTML == 'Показать') {
                    showPdf[i].innerHTML = 'Скрыть';
                    pdfFile[i].style.height = 500 + 'px';
                } else {
                    showPdf[i].innerHTML = 'Показать';
                    pdfFile[i].style.height = 0 + 'px';
                }
            }
        }
    })

    //Show and hide pdf-video-file

    let newsWrapFoto = document.querySelectorAll('.news-wrap')[2],
        showHidePdf = newsWrapFoto.querySelectorAll('.link-pdf'),
        videoPdf = document.querySelectorAll('.pdf-file-video'),
        spanVideo = document.querySelectorAll('.span-video');
    

    newsWrapFoto.addEventListener('click', function(e) {
        for (let i = 0; i < showHidePdf.length; i++) {
            if(e.target == showHidePdf[i]) {
                if(spanVideo[i].innerHTML == 'показать') {
                    spanVideo[i].innerHTML = 'скрыть';
                    videoPdf[i].style.height = 600 + 'px';
                } else {
                    spanVideo[i].innerHTML = 'показать';
                    videoPdf[i].style.height = 0 + 'px';
                }
            }
        }
               
    })

})