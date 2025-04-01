function loading() {

    document.getElementsByClassName('box-load')[0].style.display = "none"
    document.querySelector('main').style.display = "block"
}

//IntersectObserver

const myObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


const elementsVisibility = document.querySelectorAll('.hidden')

elementsVisibility.forEach((element) => myObserver.observe(element))

//VARIAVEIS
let h1Skills = document.querySelector('.skills-box h1')
let skillList = document.querySelector('.skill-list')
let textSection = document.querySelector('.text-section')
let projectList = document.querySelector('.projects-list')



//MOSTRAR E OCULTAR FORMULARIO
const formContact = document.querySelector('.contact-me')
const mascaraContato = document.querySelector('.mascara-contact')
const btnContact = document.querySelector('.btn')
formContact.style.visibility = 'hidden'
formContact.style.opacity = '0'
btnContact.addEventListener('click', () => {

    formContact.style.opacity = '0'
    formContact.style.visibility = 'visible'
    mascaraContato.style.opacity = '0'

    setTimeout(function () {


        formContact.style.transition = 'opacity 0.6s ease-in-out'
        formContact.style.opacity = '1'
        mascaraContato.style.visibility = 'visible'
        mascaraContato.style.opacity = '0.8'
        formContact.style.display = 'flex'
    }, 400);

})

function desligarMascara() {

    mascaraContato.style.visibility = 'hidden'
    formContact.style.opacity = '0'
    formContact.style.visibility = 'hidden'

}

//Formatar input TEL

function handlePhone(event) {
    let input = event.target
    input.value = formatarTelefone(input.value)
}
function formatarTelefone(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value

}






//ANIMAÇÕES

function scrollToElement(elementSelector, instance = 0) {
    //Selecione todos os elementos que correspondem ao seletor fornecido    


    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' })
    }

    else {
        return
    }
}

const start = document.getElementById('start')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

start.addEventListener('click', () => {

    scrollToElement('.projects-carroussel')
    h1Skills.style.animation = 'none'
    textSection.style.transform = 'translateX(-100%)'
    textSection.style.animation = 'RightSlide 1s ease forwards'
    projectList.style.transform = 'translateX(100%)'
    projectList.style.animation = 'LeftSlide 1s ease forwards'
    projectList.style.transitionDelay = '1.2s'
    return
})

link1.addEventListener('click', () => {

    scrollToElement('.skills-box')

    h1Skills.style.animation = 'RightSlide 1s ease forwards'
    skillList.style.animation = 'LeftSlide 1s ease forwards'
    return

})

link2.addEventListener('click', () => {
    scrollToElement('.projects-carroussel')
    h1Skills.style.animation = 'none'
    textSection.style.transform = 'translateX(-100%)'
    textSection.style.animation = 'RightSlide 1s ease forwards'
    projectList.style.transform = 'translateX(100%)'
    projectList.style.animation = 'LeftSlide 1s ease forwards'
    projectList.style.transitionDelay = '1.2s'
    return


})

link3.addEventListener('click', () => {
    scrollToElement('footer')
})








