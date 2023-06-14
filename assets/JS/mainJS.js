function typeWriter(text) {
    let speed=50;
    if (index < text.length) {
        $('#typewriter').append(text.charAt(index));
        index++;
        setTimeout(typeWriter, speed);
    }
}

$("body>main>section:nth-child(2)>div:nth-child(1)>p:nth-child(1)").onmousemove
