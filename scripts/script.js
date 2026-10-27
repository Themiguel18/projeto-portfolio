const botoes=[...document.querySelectorAll('.evt')]
botoes.map((el)=>{
    el.addEventListener('onmousein', ()=>{
        alert('ola')
    })
})