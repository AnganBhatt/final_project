// ============================hot-deals-js====================
const card_box = Array.from(document.querySelectorAll('.hot-deals-card-box .card'));
const preveiw_prdct_big= document.querySelector('.preveiw')
card_box.map((el ,index)  => {
   
el.addEventListener('click', function(){
   
    preveiw_prdct_big.classList.add('show')
})
    
});











