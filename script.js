menu = document.querySelector('.menu i.fa-bars');
times = document.querySelector('.menu i.fa-circle-xmark');
sun= document.querySelector('.header i.fa-sun');
moon= document.querySelector('.header i.fa-moon');

header= document.querySelector('.header');
navbar = document.querySelector('.header .navbar');
body = document.querySelector('body');
education = document.querySelector('.education');
services = document.querySelector('.services');
myProjects= document.querySelector('.myProjects');
contact= document.querySelector('.contact');
footer= document.querySelector('.footer');


menu.onclick=()=>{
    navbar.classList.add('active');
    menu.classList.add('hide');
    times.classList.add('show');
}
times.onclick=()=>{
    navbar.classList.remove('active');
    menu.classList.remove('hide');
    times.classList.remove('show');
}
sun.onclick=()=>{
    header.classList.add('white');
    body.classList.add('white');
    education.classList.add('white');
    services.classList.add('white');
    myProjects.classList.add('white');
    contact.classList.add('white');
    footer.classList.add('white');
    sun.classList.add('hide');
    moon.classList.add('show');

}
moon.onclick=()=>{
    header.classList.remove('white');
    body.classList.remove('white');
    education.classList.remove('white');
    services.classList.remove('white');
    myProjects.classList.remove('white');
    contact.classList.remove('white');
    footer.classList.remove('white');
    moon.classList.remove('show');
    sun.classList.remove('hide');

}

function sendMail(){
    let parms = {
        name : document.getElementById('#name').value,
        number : document.getElementById('#number').value,
        email : document.getElementById('#email').value,
        subject : document.getElementById('#subject').value,
        message : document.getElementById('#message').value

    }
    emailjs.send("service_o8j5l0l", "template_evhldy8", parms).then(alert("Email Sent Succesfully!"));
}