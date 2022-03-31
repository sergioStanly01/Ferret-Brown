let txt_val = false;

let btn = document.getElementById('cambio');
let h4_txt = document.getElementById('h4-txt')

btn.addEventListener('click', ()=>{
    const frm = document.querySelectorAll('.frm-log');
    frm.forEach(frm =>{ frm.classList.toggle('off'); })
    const img = document.querySelectorAll('.img-log-reg');
    img.forEach(img =>{ img.classList.toggle('off'); })
    if(!txt_val){ h4_txt.innerHTML = 'Crea tu Cuenta'; btn.innerHTML = 'Log in' ; txt_val = true; }
    else{ h4_txt.innerHTML = 'Bienvenido de Nuevo'; btn.innerHTML = 'Registro';  txt_val = false;  }
    
})