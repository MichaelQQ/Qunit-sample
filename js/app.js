var clickHandler = function clickHandler(event) {
    jQuery("#btn").text("clicked");

    return false;
};

document.getElementById("btn").addEventListener("click", clickHandler);
