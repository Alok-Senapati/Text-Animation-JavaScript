"use strict";
$(document).ready(function() {
    let h1Element = document.getElementById("text-to-center");
    let innerString = h1Element.innerHTML.split("");
    let newString = "";
    for (let i = 0; i < innerString.length; i++) {
        let c = innerString[i] == " " ? "&nbsp;" : innerString[i];
        newString += '<span id="letter-' + (i + 1) + '" class="span-animation">' + c + "</span>";
    }
    h1Element.innerHTML = newString;
    setTimeout(function() {
        $(".span-animation").removeClass("span-animation");
    }, 4000);
    setInterval(
        function() {
            for (let i = 0; i < innerString.length; i++) {
                if (i !== 5) {
                    console.log(i);
                    let selector = "#letter-" + (i + 1);
                    let delay = i > 5 ? (i - 1) * 400 : i * 400;
                    setTimeout(function() {
                        $(selector).addClass("animate__animated animate__bounce");
                        setTimeout(function() {
                            $(selector).removeClass("animate__animated animate__bounce");
                        }, 1000);
                    }, delay);
                }
            }
        }, 5000
    );
});