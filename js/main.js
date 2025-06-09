const menuBtn = document.querySelector('.nav__list_btn');
const modalWindow = document.querySelector('.modalwindow');

    menuBtn.addEventListener('click', () => {
        modalWindow.classList.toggle('active');
        
    });
    

///////////////// открытие системы расчитывания /////////////////////////////



    const priceBtn = document.querySelector('.clean_btn')
    
    priceBtn.addEventListener('click', () => {
    
       priceModal.classList.toggle('price_active') 
        
    });








//////////////// чек расчитывания /////////////////////

const priceModal = document.querySelector('.modal__window_price');
const priceInput = document.getElementById("7755");
const meas = document.querySelector('.measure');
const totalPriceH2 = document.querySelector('.total_price')

meas.addEventListener('click',()=>{
    let priceVal = priceInput.value ;
    let total = `${priceVal * 10},000`;
    totalPriceH2.innerHTML = `${total}`
     

    
})


