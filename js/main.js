var slideIndex = 1;
showDivs(slideIndex, true);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n, timeout = false) {
    var i;
    var mySlides = document.getElementsByClassName("header-backgraund");
    var dots = document.getElementsByClassName("dots");
    if (n > mySlides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = mySlides.length;
    }
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
        dots[i].style.display = "none";
    }
    mySlides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.display = "block";

    if (timeout) {
        setInterval(function () {
            slideIndex++;
            if (slideIndex > mySlides.length) {
                slideIndex = 1;
            }
            showDivs(true);
        }, 5000);
    }
}


var sliderIndex = 0;
showsDivs(sliderIndex, true);

function plus(n) {
    showsDivs(sliderIndex += n);
}

function currentDiv(n) {
    showsDivs(sliderIndex = n);
}

function showsDivs(n, timeout = false) {
    var j;
    var advantagesSlides = document.getElementsByClassName("advantages__box");
    var advantagesCaption = document.getElementsByClassName("advantages__caption");
    if (n > advantagesSlides.length) {
        sliderIndex = 1;
    }
    if (n < 3) {
        sliderIndex = advantagesSlides.length;
    }
    for (j = 2; j < advantagesSlides.length; j++) {
        advantagesSlides[j].style.display = "none";
        advantagesCaption[j].style.display = "none";
    }
    advantagesSlides[sliderIndex - 1].style.display = "block";
    advantagesCaption[sliderIndex - 1].style.display = "block";

}
