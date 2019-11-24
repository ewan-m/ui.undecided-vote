function loadPage(newRoute) {
    const protected = ["chat"];
    const request = new XMLHttpRequest();
    request.onload = function () {
        if (request.readyState === 4 && request.status === 200) {
            document.getElementById("router-outlet").innerHTML = request.responseText;
        } else {
            loadPage("404");
        }
    }
    request.open("GET", "pages/".concat(newRoute, ".html"));
    request.send();
}

function getNewRoute() {
    return window.location.hash ? window.location.hash.replace("#", "") : "landing";
}

loadPage(getNewRoute());
window.addEventListener("hashchange", function () {
    loadPage(getNewRoute());
});