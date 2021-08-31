let text = ''
const $ = function(s){return document.querySelector(s)}
const $$ = function(s){return document.querySelectorAll(s)}


$('.input').onclick = function(e){
    e.stopPropagation();
    if(!this.classList.contains('focus')){
        this.classList.add('focus')
        $('.keyboard').classList.add('show')
    }
}

document.onclick = function(e){
    $('.keyboard').classList.remove('show')
    $('.input').classList.remove('focus')
}

$('.keyboard').onclick = function(e){
    e.stopPropagation()
}

$$('.keyboard .row > span').forEach($key => {
    $key.onmousedown = function(e){
        $key.classList.add('active')
    }
    $key.onmouseup = function(e){
        $key.classList.remove('active')
    }
    $key.onclick = function(e){
        const type = $key.dataset.type
        switch(type){
            case 'char':
                text += $key.innerText
                $('.input').innerText = text
                break
            case 'backspace':
                console.log(1)
                text = text.slice(0,-1)
                $('.input').innerText = text
                break
            case 'space':
                console.log(1)
                text += ' '
                $('.input').innerText = text
                break
            case 'return': 
                text += '\n'
                $('.input').innerText = text
                break
            case 'uppercase': 
                setPage('uppercase')
                break
            case 'lowercase':
                setPage('lowercase')
                break
            case 'number':
                setPage('number')
                break
            case 'symbol':
                setPage('symbol')
                break
        }
    }
})

function setPage(name){
    $$('.keyboard .page').forEach($page => $page.style.display = 'none')
    $(`.keyboard .page-${name}`).style.display = 'block'
}