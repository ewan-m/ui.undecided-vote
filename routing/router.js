const replaceInnerHtmlWithNewPage = (response, routerOutletId) => {
    if (response.readyState === 4 && response.status === 200) {
        document.getElementById(routerOutletId).innerHTML = response.responseText;
    } else {
        loadPage({ id: "404" }, routerOutletId);
    }
};

const loadPage = (route, routerOutletId) => {
    if (route.protected) {
        console.login('oops');
    }
    const request = new XMLHttpRequest();
    request.onload = () => replaceInnerHtmlWithNewPage(request, routerOutletId);
    request.open("GET", `pages/${route.id}.html`, true);
    request.send();
};

const getNewRoute = (routes, defaultRoute) =>
    routes.find(route => window.location.hash.replace("#", "") === route.id) ||
    defaultRoute;

export const enableRouting = (routes, defaultRoute, routerOutletId) => {
    loadPage(getNewRoute(routes, defaultRoute), routerOutletId);
    window.addEventListener("hashchange", () =>
        loadPage(getNewRoute(routes, defaultRoute), routerOutletId)
    );
};
