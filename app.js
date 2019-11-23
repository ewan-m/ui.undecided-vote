import { enableRouting } from "./routing/router.js";

const routes = [
    { id: "landing" },
    { id: "selling" },
    { id: "facebooklogin" },
    { id: "buying" },
    { id: "about" },
    { id: "chat", protected: true }
]

enableRouting(routes, routes[0], "router-outlet");