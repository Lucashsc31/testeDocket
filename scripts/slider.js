    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var slides = document.querySelectorAll(".slide");
        var counter = document.querySelectorAll(".counter > span");
        
        //Validar valor
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        //Limpa Slider
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < counter.length; i++) {
            counter[i].className = counter[i].className.replace("active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        counter[slideIndex - 1].className += " active";
    }
