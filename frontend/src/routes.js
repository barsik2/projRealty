import { ABOUTE_ROUTE, CATEGORY_ROUTE, HOME_ROUTE } from "./constRoute/consts";
import About from "./pages/About";
import CategoryPages from "./pages/CategoryPages";
import MainPages from "./pages/MainPages";
import CardPages from "./pages/CardPages";

export const publiRoutes = [
    {
        path: HOME_ROUTE,
        Component: MainPages
    },
    {
        path: ABOUTE_ROUTE,
        Component: About
    },
    {
        path: CATEGORY_ROUTE,
        Component: CategoryPages
    },
    {
        path: `${CATEGORY_ROUTE}/:id`,
        Component: CardPages,
    },
]
