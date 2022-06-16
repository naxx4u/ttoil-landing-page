//main section
const aboutMain = document.getElementById('about-main'),
      servicesMain = document.getElementById('services-main'),
      productsMain = document.getElementById('products-main')

//btn 4 scroll
const aboutBtn = document.getElementById('about-btn'),
      servicesBtn = document.getElementById('services-btn'),
      productsBtn = document.getElementById('products-btn'),
      upBtn = document.getElementById('up-img')


//scroll func
const  aboutButtonClick = () => {
    aboutMain.scrollIntoView({block: "center", behavior: "smooth"});
 }
 aboutBtn.addEventListener('click', aboutButtonClick)


 const  servicesButtonClick = () => {
    servicesMain.scrollIntoView({block: "center", behavior: "smooth"});
 }
 servicesBtn.addEventListener('click', servicesButtonClick)


 const  productsButtonClick = () => {
    productsMain.scrollIntoView({block: "start", behavior: "smooth"});
 }
 productsBtn.addEventListener('click', productsButtonClick)


//to top scroll
window.onscroll = () =>{
    if(window.scrollY > 568){
        upBtn.style.display = "block"
    } else {
        upBtn.style.display = "none"
    }
}

upBtn.addEventListener('click', () => {
    window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: "smooth"
    })
})

//language change const+func
const langBtn = document.getElementById('lang-span')
const languages = document.getElementById('lang')

const dropdown = () => {
 langBtn.focused = languages.style.display = 'block'
}
const upList = () => {
    !languages.focused == languages.style.removeProperty('display')
    
}

langBtn.addEventListener('mouseover',dropdown)
languages.addEventListener('mouseleave', upList)

const language = document.querySelectorAll('.languages div')
const langText = document.getElementById('lang-span')

for (let lang of language){
    lang.addEventListener('click', (event) => {
        if(event.target.tagName === 'DIV'){

             langText.innerHTML =  lang.innerHTML.toUpperCase() 
            //  lang.innerHTML = langText.innerHTML.toUpperCase() 
            console.log(event.target.click);
        }
    })
    
}










