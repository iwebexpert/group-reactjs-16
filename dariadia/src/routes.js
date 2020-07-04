import { AboutPage } from "pages/AboutPage";
import { PageNotFound } from "pages/PageNotFound";
import { MessengerRedux } from "containers/MessengerContainer";
import { ProfileRedux } from "containers/ProfileContainer";

export const routes = [
  {
    path: "/",
    exact: true,
    component: MessengerRedux,
  },
  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },
  {
    path: "/profile",
    exact: true,
    component: ProfileRedux,
  },
  {
    path: "/chats/:id",
    exact: true,
    component: MessengerRedux,
  },
  {
    path: "*",
    exact: false,
    component: PageNotFound,
  },
];
