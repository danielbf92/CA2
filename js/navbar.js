// navbar.js
document.write('<nav class="navbar">');
document.write('<div>',
                    '<a href="../index.html"> <img class="logo" src="../images/377193.svg" alt="logo"></a>',
                '</div>');
document.write(' <ul class="nav-list" id="navlist"> ',
                    '<li class="list-item"> <a href="../index.html"> Home </a> </li>',
                    '<li class="list-item"> <a href="gallery.html"> Gallery </a> </li>',
                    '<li class="list-item"> <a href="collaborations.html"> Collaborations </a> </li>',
					 '<li class="list-item"> <a href="services.html"> Services </a> </li>',
                    '<li class="list-item"> <a href="reviews.html"> Reviews </a> </li>',
                    '<li class="list-item"> <a href="about.html"> About </a> </li>',
                    '<li class="list-item"> <a href="contact.html"> Contact </a> </li> </ul>');
document.write(' <div class="menu" id="toggleButton"><div class="menu-burger"></div><div class="menu-burger"></div><div class="menu-burger"></div></div> ');
document.write('</nav>');

var toggleButton = document.getElementById('toggleButton');
var navList = document.getElementById('navlist');

toggleButton.addEventListener('click', () =>{
    navList.classList.toggle('active');
})
