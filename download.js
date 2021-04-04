const download = document.getElementById("download");
const topPos = download.offsetTop;

download.addEventListener("click", () => {
    window.scrollTo(0, topPos);
});

function myFunction() {
    const x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

const downloadSteps = document.getElementById("downloadSteps");
const steps = document.getElementById("steps");

function inViewport(element) {
    const bb = element.getBoundingClientRect(); 
    return !(bb.top > innerHeight || bb.bottom < 0);  
}

document.addEventListener("scroll", () => {
    if(inViewport(downloadSteps)) {
      downloadSteps.classList.add("fade");
      setInterval(function() {downloadSteps.style.opacity = 1}, 900);
    } else {
      downloadSteps.classList.remove("fade");
    }
    if(inViewport(steps)) {
      steps.classList.add("fade");
      setInterval(function() {steps.style.opacity = 1}, 900);
    } else {
      steps.classList.remove("fade");
    }
}); 
