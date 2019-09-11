function fadeIn(el){
    if(window.location.pathname === "/discography/"){
        document.body.style.background ="rgb(255, 236, 174)";
    }
    
    else if(window.location.pathname === "/"){
        document.body.style.background ="white";
    }
    
    else if(window.location.pathname === "/contact/"){
        document.body.style.background ="rgb(255, 172, 194)";
    }
    
    else if(window.location.pathname === "/events/"){
        document.body.style.background ="rgb(142, 221, 252)";
    }

    if(window.location.pathname === "/"){
        el.classList.add("slowIntro");
        el.classList.remove("hidden");
    }
    else{
        el.classList.add("visible");
        el.classList.remove("hidden");
    }
}

function fadeOut(el){
    if(el.classList.contains("slowIntro") == true){
        el.classList.add("hidden");
        el.classList.remove("slowIntro");
        document.body.style.background = "white";
    }
    else{
        el.classList.add("hidden");
        el.classList.remove("visible");
        document.body.style.background = "white";
    }
}

var events = document.getElementById("eventsLink"),
    discography = document.getElementById("discographyLink"),
    contact = document.getElementById("contactLink"),
    content = document.getElementsByClassName("content")[0],
    banner = document.getElementsByClassName("banner")[0];

events.addEventListener('click', function(){
    fadeOut(content);
    setTimeout(function(){ window.location.href = "/events/";}, 800);
});

discography.addEventListener('click', function(){
    fadeOut(content);
    setTimeout(function(){ window.location.href = "/discography/";}, 800);
});

contact.addEventListener('click', function(){
    fadeOut(content);
    setTimeout(function(){ window.location.href = "/contact/";}, 800);
});

banner.addEventListener('click', function(){
    fadeOut(content);
    setTimeout(function(){ window.location.href = "/";}, 800);
});