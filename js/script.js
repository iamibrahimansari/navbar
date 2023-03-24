const btns = document.querySelectorAll('.mobile > i');
const nav = document.querySelector('.nav');
btns.forEach(btn =>{
    btn.addEventListener('click', event =>{
        console.log(btn.className);
        if(btn.className.includes('fa-bars')){
            if(nav.className.includes('nav-bar-off')){
                nav.classList.remove('nav-bar-off');
            }
            nav.className += ' nav-bar-on';
            btn.style.display = 'none';
            btns[1].style.display = 'block';
        }else{
            if(nav.className.includes('nav-bar-on')){
                nav.classList.remove('nav-bar-on');
            }
            nav.className += ' nav-bar-off'
            btn.style.display = 'none';
            btns[0].style.display = 'block';
        }
    })
})