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

    //Show and hide information blocks
    let aboutCompanyWrap = document.querySelector('.about-company-wrap'),
        about = aboutCompanyWrap.querySelectorAll('.about'),
        aboutTextWrap = aboutCompanyWrap.querySelectorAll('.about-text-wrap');
    console.log(aboutTextWrap);

    hideBlock(1);

    function hideBlock(n) {
        for(let i = n; i < about.length; i++) {
            aboutTextWrap[i].classList.add('hide');
            aboutTextWrap[i].classList.remove('active');
        }
    }

    function showBlock(n) {
        aboutTextWrap[n].classList.remove('hide');
        aboutTextWrap[n].classList.add('active');
    }

    aboutCompanyWrap.addEventListener('click', function(e) {
        for (let i = 0; i < about.length; i++) {
            if (e.target == about[i]) {
                hideBlock(0);
                showBlock(i);
            }
        }
    })
})