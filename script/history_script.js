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

    //About company navigation

    let aboutWrap = document.querySelectorAll('.about-text-wrap'),
        aboutCompanyWrap = document.querySelector('.about-company-wrap'),
        about = document.querySelectorAll('.about');

    hideBlock(1);
    
    function hideBlock(n) {
        for(let i = n; i < about.length; i++) {
            aboutWrap[i].classList.add('hide');
        }
    }

    function showBlock(n) {
        aboutWrap[n].classList.add('active');
        aboutWrap[n].classList.remove('hide');
    }


    aboutCompanyWrap.addEventListener('click', function(e) {
        for (let i = 0; i < about.length; i++) {
            if (e.target == about[i]) {
                hideBlock(0);
                showBlock(i);
                
            }
        }
    })

    //Structure navigation

    let textBlock = document.querySelectorAll('.text-block')[4],
        aboutDepartment = textBlock.querySelectorAll('.about-department'),
        textWrap = textBlock.querySelectorAll('.text-wrap');

    hideDepartmentBlock(1);

    function hideDepartmentBlock(n) {
        for(let i = n; i < aboutDepartment.length; i++) {
            textWrap[i].classList.add('hide');
        }

    }

    function showDepartmentBlock(n) {
        textWrap[n].classList.add('active');
        textWrap[n].classList.remove('hide');
    }

    textBlock.addEventListener('click', function(e) {
        for (let i = 0; i < aboutDepartment.length; i++) {
            if (e.target == aboutDepartment[i]) {
                hideDepartmentBlock(0);
                showDepartmentBlock(i);
            }
        }
    })
        
    
    

        
        

})