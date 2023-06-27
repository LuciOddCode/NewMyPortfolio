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
})