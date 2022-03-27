let billInput= document.querySelector('.bill-input')
let billError=document.querySelector('.bill-error')

let customBtn= document.querySelector('.custom-btn')
let nopInput= document.querySelector('.number-input')
let nopError=document.querySelector('.nop-error')
let tipAmount= document.querySelector('.number1')
let totalAmount= document.querySelector('.number2')
let resetBtn= document.querySelector('.reset-btn')


let amountBtn=document.querySelectorAll('.amount-btn').forEach((item) =>{
    item.addEventListener('click',function(e){
        
        if(billInput.value==='' ){
            billError.className='show-bill-error' 
            tipAmount.textContent='$'+ 0.00
            totalAmount.textContent='$'+0.00


        }else if(nopInput.value==='' &&billInput.value ){
            billError.className='bill-error'
            nopError.className='show-nop-error'

        }  else if(nopInput.value ){ 
            nopError.className='nop-error'
        let bill=billInput.value
        let nop=nopInput.value
        let txt=e.target.textContent
        per= txt.replace('%','')
        console.log(per)
        tipAmount.textContent='$'+((bill*per)/100)/nop
        totalAmount.textContent='$'+(parseFloat(bill)+parseFloat(((bill*per)/100)/nop))

         
    }
})
})

customBtn.addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        let per= customBtn.value
        let bill= billInput.value
        let nop= nopInput.value
        tipAmount.textContent='$'+((bill*per)/100)/nop
        totalAmount.textContent='$'+(parseFloat(bill)+parseFloat(((bill*per)/100)/nop))
    
         
      }
   
})

 resetBtn.addEventListener('click', function(){
    billInput.value=''
    nopInput.value=''
    tipAmount.textContent='$'+0.00
    totalAmount.textContent='$'+0.00
    customBtn.value=''

 })
   




