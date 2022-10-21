const modalbtn=document.querySelector('.modal-btn')
const modaloverlay=document.querySelector('.modal-overlay')
const closebtn=document.querySelector('.close-btn')
modalbtn.addEventListener('click',()=>{
    modaloverlay.classList.add('open-modal')
})
closebtn.addEventListener('click',()=>{
    modaloverlay.classList.remove('open-modal')
})