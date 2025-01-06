var typed = new Typed(".Rol", {
    strings: [
        "Backend Developer",
        "Full Stack Developer",
        "Computer Systems Engineer"
    ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})


function skills() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let skill = document.getElementsByClassName("progress");
        
        // Technical Skills
        skill[0].classList.add("Java");
        skill[1].classList.add("SpringBoot");
        skill[2].classList.add("NETCore");
        skill[3].classList.add("PostgreSQL");
        skill[4].classList.add("MongoDB");
        skill[5].classList.add("RESTfulAPIs");
        skill[6].classList.add("JUnit");

        // Professional Skills
        skill[7].classList.add("communication");
        skill[8].classList.add("responsibility");
        skill[9].classList.add("teamwork");
        skill[10].classList.add("adaptability");
        skill[11].classList.add("problemSolving");
        skill[12].classList.add("criticalThinking");
        skill[13].classList.add("timeManagement");
    }
}


window.onscroll = function(){
    skills();
} 
