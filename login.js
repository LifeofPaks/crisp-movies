
const loginLinks = document.querySelector('.login-link')
const registerLinks = document.querySelector('.register-link')
const loginContainers = document.querySelector('.login-container')
const signIns  = document.querySelector('.login-here ')
const registers = document.querySelector('.register-here')
const formControls = document.querySelectorAll('.form-control')
const forgotPassword = document.querySelector('.forgot')
const signInHeaders = document.querySelectorAll('.sign-in')
const registerHeaders = document.querySelectorAll('.register')
const mobileNav = document.querySelector('.navbar.mobile')
const mobileSearch = document.querySelector('.search-icon.mobile')
const mobileHeader = document.querySelector('.mobile.browse-header')
const mobileSearchForm = document.querySelector('.mobile form')
const mobileSearchInput = document.querySelector('.mobile .search-input')




// ====================================OPEN LOGIN PAGE ADD OVERLAY====================================

        loginLinks.addEventListener('click',()=>{
                loginContainers.classList.add('active')
                signIns.classList.add('active')
                forgotPassword.classList.add('active')
        })
        
    // ================================== OPEN REGISTER PAGE ADD OVERLAY======================================

    registerLinks.addEventListener('click',()=>{
        loginContainers.classList.add('active')
        registers.classList.add('active')
        forgotPassword.classList.remove('active')
})


// ==================================REMOVE OVERLAY CLOSE LOGIN PAGE================================


    loginContainers.addEventListener('click', ()=>{
        loginContainers.classList.remove('active')
            registers.classList.remove('active')
            signIns.classList.remove('active')
            forgotPassword.classList.remove('active')
    })

// ========================FORM BORDERS ON CLICK========================================

function active(){
    formControls.forEach(form =>{
        form.classList.remove('active')
        this.classList.add('active')
    })
    
}

formControls.forEach(form=>{
    form.addEventListener('click', active)
})


// ==================================NAVIGATE LOGIN/REGISTER=========================

// LOGIN

    signInHeaders.forEach(signInHeader=>{
        signInHeader.addEventListener('click', ()=>{
            signIns.classList.add('active')
            registers.classList.remove('active')
            forgotPassword.classList.add('active')
            console.log('login clicked')
        })
    })
   
 

// REGISTER


    registerHeaders.forEach(registerHeader=>{
        registerHeader.addEventListener('click', ()=>{
            registers.classList.add('active')
            signIns.classList.remove('active')
            forgotPassword.classList.remove('active')
            console.log('register clicked')
        })
    })
  


// FLOATING NAVBAR====================================================
let prevScrollPosition = window.pageYOffset

window.addEventListener('scroll', () =>{
    let currentScrollPostion = window.pageYOffset
    if(prevScrollPosition > currentScrollPostion){
        mobileNav.style.top = "0"
    }
    else{
        mobileNav.style.top = "-50px"
    }
    prevScrollPosition = currentScrollPostion
})

// =============================MOBILE SEARCH==============================
    mobileSearch.addEventListener('click', ()=>{
        mobileHeader.classList.toggle('active')
        mobileSearchInput.focus()
    })


    window.addEventListener('scroll', ()=>{
        if(mobileHeader.classList.contains('active')){
            mobileHeader.classList.remove('active')
        }
    })


// ===============================MOBILE SEARCH EVENT LISTENER======================
  mobileSearchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const searchTerm = mobileSearchInput.value

    if (searchTerm){
        getMovies(SEARCHAPI + searchTerm)
        mobileSearchInput.value = ''
    }

    mobileHeader.classList.remove('active')
  })
