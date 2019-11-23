function replaceInnerHtmlWithNewPage(response, element) {
    if (response.readyState === 4 && response.status === 200) {
        element.innerHTML = response.responseText;
    }
};

function loadPage(pageName, routerOutletId) {
    const element = document.getElementById(routerOutletId);
    const request = new XMLHttpRequest();
    request.onload = function() { replaceInnerHtmlWithNewPage(request, element); }
    request.open("GET", `pages/${pageName}.html`, true);
    request.send();
};

function getNewRoute(routes, defaultRoute) {
    return routes.find(route => window.location.hash.replace("#", "") === route) ||
    defaultRoute;
}

export function enableRouting(routes, defaultRoute, routerOutletId) {
    loadPage(getNewRoute(routes, defaultRoute), routerOutletId);
    window.addEventListener("hashchange", () =>
        loadPage(getNewRoute(routes, defaultRoute), routerOutletId)
    );
};
