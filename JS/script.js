const button = document.querySelector('button');
const theme = document.querySelector('div.container');
const body = document.querySelector('body');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');


button.addEventListener('click', trocar);


function trocar() {

    if (theme.classList.contains('container') && body.classList.contains('container')) {
        body.classList.remove('container')
        body.classList.add('container-dark')

        theme.classList.remove('container')
        theme.classList.add('container-dark')
    } else {
        body.classList.remove('container-dark')
        body.classList.add('container')
        
        theme.classList.remove('container-dark')
        theme.classList.add('container')
    }

    if (button.classList.contains('button')) {
        button.classList.remove('button')
        button.classList.add('button-slide')
    } else {
        button.classList.remove('button-slide')
        button.classList.add('button')
    }

    
    if (dark.classList.contains('hidden')) {
        light.classList.add('hidden')  
        dark.classList.remove('hidden')      
    } else if(light.classList.contains('hidden')) {
        light.classList.remove('hidden')
        dark.classList.add('hidden')
    }
    }
    
