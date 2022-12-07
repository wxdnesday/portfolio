let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


// Splash Screen
window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span,idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)



    })
})

//Background
let stars = document.getElementById('stars');
let logo_back = document.getElementById('logo_background');
let back = document.getElementById('w_back');
let stars2 = document.getElementById('stars2');
let back2 = document.getElementById('w_back2');
let stars3 = document.getElementById('stars3');
let back3 = document.getElementById('w_back3');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.05 + 'px';
    back.style.right = value * 0.01+ 'px';
    stars2.style.left = value * 0.05 + 'px';
    back2.style.right = value * 0.01+ 'px';
    stars3.style.left = value * 0.05 + 'px';
    back3.style.right = value * 0.01+ 'px';
    // if (value < 1300) {
    //     logo_back.style.top = value * 1.05 + 'px';
    // }

})
