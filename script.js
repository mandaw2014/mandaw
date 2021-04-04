const title = document.getElementById("title");
const mandawWeather = document.getElementById("mandawweather");
const weatherText = document.getElementById("weatherText");
const ces = document.getElementById("ces");
const notifyText = document.getElementById("mandawBot");
const mandawImg = document.getElementById("mandawImg");
const haf = document.getElementById("haf");
const btn = document.getElementById("btn");
const download = document.getElementsByClassName("download");

document.addEventListener("resize", () => {
    document.getElementById("bg").style.height = "100vh";
});

title.addEventListener("mousedown", () => {
    title.classList.add("spin");
});

title.addEventListener("mouseup", () => {
    title.classList.remove("spin");
});

setInterval(function() {
    title.classList.add("spin");
}, 500);

function inViewport(element) {
    const bb = element.getBoundingClientRect(); 
    return !(bb.top > innerHeight || bb.bottom < 0);  
}

document.addEventListener("scroll", event => {
    if(inViewport(mandawWeather)) {
        mandawWeather.classList.add("slide");
        weatherText.classList.add("slide");
    } else {
        mandawWeather.classList.remove("slide");
        weatherText.classList.remove("slide");
    }
    if(inViewport(weatherText)) {
        weatherText.classList.add("slide");
    }
    if(inViewport(ces)) {
        ces.classList.add("fade");
        setInterval(function() {ces.style.opacity = 1}, 900);
    } else {
        ces.classList.remove("fade");
    }
    if(inViewport(notifyText)) {
        notifyText.classList.add("slide1");
        setInterval(function() {notifyText.style.opacity = 1}, 900);
    }
    if(inViewport(mandawImg)) {
        mandawImg.classList.add("slide1");
        notifyText.classList.add("slide1");
        setInterval(function() {mandawImg.style.opacity = 1}, 900);
        setInterval(function() {notifyText.style.opacity = 1}, 900);
    } else {
        mandawImg.classList.remove("slide1");
        mandawImg.style.opacity = 0;
        notifyText.classList.remove("slide1");
        notifyText.style.opacity = 0;
    }
    if(inViewport(haf)) {
        haf.classList.add("fade");
        setInterval(function() {haf.style.opacity = 1}, 900);
    } else {
        haf.classList.remove("fade");
    }
    if(inViewport(btn)) {
        btn.classList.add("fade");
        setInterval(function() {btn.style.opacity = 1}, 900);
    } else {
        btn.classList.remove("fade");
    }
});

function myFunction() {
    const x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const weather = document.getElementById("weather");
const textTopPos = weatherText.offsetTop;

weather.addEventListener("mousedown", () => {
    window.scrollTo(0, textTopPos - 100);
});

const notification = document.getElementById("notification");
const topPos = notifyText.offsetTop;

notification.addEventListener("mousedown", () => {
    window.scrollTo(0, topPos);
}); 
