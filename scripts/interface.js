// Meio de campo entre o HTML e a regra do jogo

document.addEventListener('DOMContentLoaded', ()=>{ // Garantir que nosso HTML, DOM já foi carregado e assim executa a função.


    let squares = document.querySelectorAll('.square')

    // forEach executa uma função para cada elemento do array
    squares.forEach((elemento)=>{
        elemento.addEventListener('click', execClick);
    })

})


function execClick(event){
    console.log(event.target)
}