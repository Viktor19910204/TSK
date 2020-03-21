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

    //Show and hide information block
    let newsWrap = document.querySelector('.news-wrap'),
        mainTitle = newsWrap.querySelectorAll('.main-title'),
        blockInformation = newsWrap.querySelectorAll('.block-information'),
        hideBlock = newsWrap.querySelectorAll('.hide-title'),
        holderTitle = newsWrap.querySelectorAll('.holder-tiitle'),
        holderWrap = newsWrap.querySelectorAll('.holder-wrap'),
        hideHolderTitle = newsWrap.querySelectorAll('.hide-holder-title')
    console.log(hideHolderTitle);

    newsWrap.addEventListener('click', function(e) {
        for(let i = 0; i < mainTitle.length; i++) {
            if(e.target == mainTitle[i]) {
                blockInformation[i].style.height = 'auto';
            }

            if(e.target == hideBlock[i]) {
                blockInformation[i].style.height = 63 + 'px';
            }
        }
    })

    blockInformation[0].addEventListener('click', function(e) {
        for(let i = 0; i < holderTitle.length; i++) {
            if(e.target == holderTitle[i]) {
                holderWrap[i].style.height = 'auto';
            }

            if(e.target == hideHolderTitle[i]) {
                holderWrap[i].style.height = 0 + 'px';
            }
        }
    })
})
