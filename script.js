// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')

menuIcon.onclick = () =>  {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//scroll section
let section = document.querySelectorAll('section');
let navLinks  = document.querySelectorAll('#header nav a');


window.onscroll = () =>  {
    section.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('');
    
        if(top >= offset  && top < offset+height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('#header  nav a[href*=' +  id +  ']' ).classList.add('activate');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });
    
    
    
    
    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}

const btn = document.getElementById('contact');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_geeqso9';
   const templateID = 'template_pmev9k9';
   console.log (this)
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'btn';
      alert('Sent!');
    }, (err) => {
      btn.value = 'btn';
      alert(JSON.stringify(err));
    });
});