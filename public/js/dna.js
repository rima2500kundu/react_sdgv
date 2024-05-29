var div = document.getElementById("DNA");

// div.className = "myDiv";
var container = document.getElementById("loop_dna");

var animation_Delay = 0.15;

var animation_proper = "-0.15s" ;

for (var i = 0; i < 28; i++) {
    animation_Delay = animation_Delay + 0.15;

    document.getElementById("DNA").style.animationDelay = animation_proper;

    loop_dna.appendChild(div.cloneNode(true));
    
    
    animation_proper = "-" + animation_Delay + "s";

    // alert(animation_proper);

};


// Partical JS

//USP_bottom_sec
 
const inViewport = (entries, observer) => {
entries.forEach(entry => {
entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
});
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; 

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
Obs.observe(EL, obsOptions);
});
 
    


