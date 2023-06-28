const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-link").forEach((n) => {
    n.addEventListener("click", () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


let count=1;
$('#ShowMoreAssignment').click(function (){
    switch (count){
        case 1:
            $('#cssAssignments').css('display','none');
            $('#cssFWAssignments').css('display','flex');
            count++;
            break;
        case 2:
            $('#cssFWAssignments').css('display','none');
            $('#transitionAssignments').css('display','flex');
            count++;
            break;
        case 3:
            $('#transitionAssignments').css('display','none');
            $('#JsAssignments').css('display','flex');
            count++;
            break;
        case 4:
            $('#JsAssignments').css('display','none');
            $('#cssAssignments').css('display','flex');
            count=1;
            break;
        default:
            $('#transitionAssignments').css('display','none');
            $('#cssFWAssignments').css('display','none');
            $('#JsAssignments').css('display','none');
            $('#cssAssignments').css('display','flex');
            count=1;
            break;
    }
});


textAnimator(document.getElementById("s1p1"));
textAnimator(document.getElementById("s1p2"));
textAnimator(document.getElementById("s1p3"));
textAnimator(document.getElementById("s1p4"));

textAnimator(document.getElementById("s2p1"));
textAnimator(document.getElementById("s2p2"));
textAnimator(document.getElementById("s2p3"));
textAnimator(document.getElementById("s2p4"));

const observer = new IntersectionObserver((entries  )=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }else {
            entry.target.classList.remove("show");

        }
    });
});

const sections=document.querySelectorAll('.scroll-animate');
sections.forEach((el)=>observer.observe(el));


function textAnimator(element) {
    const text = element.textContent;
    const splitText = text.split("");

    element.textContent = ""; // Assign an empty string directly to textContent

    for (let i = 0; i < splitText.length; i++) {
        element.innerHTML += "<span>" + splitText[i] + "</span>";

        let char = 0;
        let timer = setInterval(onTick, 50);

        function onTick() {
            const span = element.querySelectorAll('span')[char]; // Added square brackets around 'span'
            span.classList.add('fade');
            char++;
            if (char === splitText.length) {
                complete();
                return;
            }
        }

        function complete() {
            clearInterval(timer);
            timer = null;
        }
    }
}

var loader = document.getElementById("pre-loader");
window.addEventListener("load", function(){
    
    loader.style.display = "none";
});
