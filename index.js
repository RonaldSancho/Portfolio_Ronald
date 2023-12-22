var typed = new Typed(".Rol", {
    strings:["Full Stack Developer", "Systems Engineering"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


function skills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let skill = document.getElementsByClassName("progress");
        skill[0].classList.add("HTML");
        skill[1].classList.add("CSS");
        skill[2].classList.add("JS");
        skill[3].classList.add("NODEJS");
        skill[4].classList.add("NETCORE");
        skill[5].classList.add("communication");
        skill[6].classList.add("responsibility");
        skill[7].classList.add("teamwork");
        skill[8].classList.add("adaptability");
        skill[9].classList.add("problems");
    }
}

window.onscroll = function(){
    skills();
} 
