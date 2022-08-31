/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

function defaultProcedures(){

    window.addEventListener('DOMContentLoaded', event => {

        // Activate Bootstrap scrollspy on the main nav element
        const sideNav = document.body.querySelector('#sideNav');
        if (sideNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: 74,
            });
        };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });

    });
}
defaultProcedures();

function scrollAnimation(){
    const sections = document.querySelectorAll(".resume-section");

    function handleScroll(e){
        let halfscreen = window.innerHeight * 0.6;

        sections.forEach(item => {
            let top = item.getBoundingClientRect().top;
            if((top - halfscreen) < 0){
                item.classList.add('show')
            }
        })
        console.log();
    }

    window.addEventListener('scroll', handleScroll)
    sections[0].classList.add('show')
}
scrollAnimation()