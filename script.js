const li_animais = [...document.querySelectorAll(".animais-lista li")];
const desc_animais = [...document.querySelectorAll(".animais-descricao section")];



const modificaDesc = (index) =>{
    desc_animais.forEach((descricao, indexDesc) => {
        if(index === indexDesc){
            descricao.classList.add("active")
        }else{
            descricao.classList.remove("active")
        }
    })  
}

li_animais.forEach((animal, index) => {
    animal.addEventListener('click', () => modificaDesc(index));
})

