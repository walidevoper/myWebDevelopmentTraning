var counter = 1;

function showMenu() {
    var links = document.querySelector('.nav-links');
    var menu = document.querySelector('.menu-icon');
    
    
        if (counter % 2 === 0) {
            links.style.display = "none";
            menu.style.opacity = "1";
        }  else {   
            links.style.display = "flex";
            menu.style.opacity = "0.6";
        }
        counter++; 
}
