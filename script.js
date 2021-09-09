document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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



const dt_faq = [...document.querySelectorAll(".faq-lista dt")];
const dd_faq = [...document.querySelectorAll(".faq-lista dd")];

const modificaFaq = (index) =>{
    dt_faq.forEach((faq, indexDesc) => {
        if(index === indexDesc){
            faq.classList.toggle("active")
        }
    })  
}

dt_faq.forEach((element, index) => {
    element.addEventListener('click', () => {modificaFaq(index)
    })
})

const copy = document.querySelector(".copy");

copy.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})