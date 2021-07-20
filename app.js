const toggleBtn = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");
const shadow = document.querySelector(".shadow-bg");
const headerImg = document.querySelector(".header-img");

toggleBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("open-nav");
    toggleBtn.classList.toggle("open-nav");
    shadow.classList.toggle("open-nav");
    
})

//change testimony

const  btn = document.querySelectorAll(".btn");
const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");
const btn_4 = document.querySelector(".btn-4");
const profile = document.querySelector(".profile-img img");
const test_p = document.querySelector(".testimony-mobile p");
const test_heading = document.querySelector(".testimony-mobile h3");




btn_1.addEventListener("click", ()=>{
    btn_1.style.backgroundColor = "hsl(12, 88%, 59%)";
    btn_2.style.backgroundColor = "white";
    btn_3.style.backgroundColor = "white";
    btn_4.style.backgroundColor = "white";
    profile.src = "images/avatar-anisha.png";
    test_heading.innerText ="Anisha Li";
    test_p.innerText = "\“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\“";
})
btn_2.addEventListener("click", ()=>{
    btn_2.style.backgroundColor = "hsl(12, 88%, 59%)";
    btn_1.style.backgroundColor = "white";
    btn_3.style.backgroundColor = "white";
    btn_4.style.backgroundColor = "white";
    profile.src = "images/avatar-ali.png";
    test_heading.innerText ="Ali Bravo";
    test_p.innerText = "\“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.\“";
})
btn_3.addEventListener("click", ()=>{
    btn_3.style.backgroundColor = "hsl(12, 88%, 59%)";
    btn_1.style.backgroundColor = "white";
    btn_2.style.backgroundColor = "white";
    btn_4.style.backgroundColor = "white";
    profile.src = "images/avatar-richard.png";
    test_heading.innerText ="Richard Watts";
    test_p.innerText = "\“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!\“";
})
btn_4.addEventListener("click", ()=>{
    btn_4.style.backgroundColor = "hsl(12, 88%, 59%)";
    btn_1.style.backgroundColor = "white";
    btn_2.style.backgroundColor = "white";
    btn_3.style.backgroundColor = "white";
    profile.src = "images/avatar-shanai.png";
    test_heading.innerText ="Shanai Gough";
    test_p.innerText = "\“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.\“";
})

//validate email

const form = document.querySelector("form");
const form_btn = document.querySelector("form button");
const form_input = document.querySelector("form input");
const error = document.querySelector(".error-msg");
var emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form_btn.addEventListener("click", ()=>{

    if(form_input.value == null || form_input.value.length == 0 || !emailExpression.test(form_input.value)){
        form_input.classList.add("error");
        error.classList.add("error"); 
        form.addEventListener('submit', (e) => {
            e.preventDefault();        
        })
    }
    else{
        form_input.classList.remove("error");
        error.classList.remove("error");
        form_input.value = "";
        form.removeEventListener('submit', (e) => {
            e.preventDefault();        
        })
        
    }  
    
})




