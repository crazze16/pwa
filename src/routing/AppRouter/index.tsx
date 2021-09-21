import {HOME_ROUTE, TITLE_ROUTE, TODO_ROUTE} from "../../shared/constants/appRoutes";
import {Title} from "../../components/title";
import {TodoPage} from "../../components/Todo";
import {HomePage} from "../../pages/HomePage";

export const publicRoutes = [
    {
        path: TITLE_ROUTE,
        Component: Title
    },
    {
        path: TODO_ROUTE,
        Component: TodoPage
    },
    {
        path: HOME_ROUTE,
        Component: HomePage
    },
]
