// Fixed header

window.onscroll = function showHeader() {
    var header = document.querySelector(".header");
    if (window.pageYOffset > 200)
        header.classList.add("fixed");
    else
        header.classList.remove("fixed");
}
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let number = document.querySelector('.number');
let orderButton = document.querySelector('.orderButton');
var textWord, i = 0;

// Order

orderButton.onclick = function () {
    var text;
    if (firstName.value == "") {
        document.querySelector('.firstNameBar').style.border = "1px solid red";
        if (lastName.value == "") {
            document.querySelector('.lastNameBar').style.border = "1px solid red";
            if (number.value == "") {
                document.querySelector('.numberBar').style.border = "1px solid red";
            }
            else { document.querySelector('.numberBar').style.border = 0; }
        }
        else { document.querySelector('.lastNameBar').style.border = 0; }
    }
    else {
        document.querySelector('.firstNameBar').style.border = 0;
        if (lastName.value == "") {
            document.querySelector('.lastNameBar').style.border = "1px solid red";
            if (number.value == "") {
                document.querySelector('.numberBar').style.border = "1px solid red";
            }
        }
        else {
            document.querySelector('.lastNameBar').style.border = 0;
            if (number.value == "") {
                document.querySelector('.numberBar').style.border = "1px solid red";
            }
            else {
                document.querySelector('.numberBar').style.border = 0;
                if (i > 0)
                    textWord += "Ім'я: " + firstName.value + '\n' + "Фамілія: " + lastName.value + '\n' + "Номер телефону: " + number.value + '\n' + '\n';
                else
                    textWord = "Ім'я: " + firstName.value + '\n' + "Фамілія: " + lastName.value + '\n' + "Номер телефону: " + number.value + '\n' + '\n';
                i++;
            }
        }
    }
}

let downloadText = document.querySelector('.downloadText');
downloadText.onclick = function () {
    document.write(
        '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(textWord) + '" download="text.txt">text.txt</a>'
    )
}

// Smooth scroll

$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        console.log(elementOffset);
        // nav.removeClass("show");

        $('html, body').animate({
            scrollTop: elementOffset - 1001
        }, 600);
    });

    // Nav Toogle

    let nav = $("#nav");
    let header = $(".header");
    let navToggle = $("#navToggle");
    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
        header.toggleClass('under');
    });


    // Slider

    $('.slider').slick({
        slidesToShow: 4,
        rows: 2,
        slidesToScroll: 1,
        infinity: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    });

    // Animation

    const animItems = document.querySelectorAll('.animBlockLeft, .animBlockRight, .animBlockOpacity');
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animBlock_active');
            } else {
                animItem.classList.remove('animBlock_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
});
